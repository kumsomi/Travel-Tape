import { createContext, useContext, useEffect, useReducer } from "react";
import { videosReducerFunction } from "../reducers";
import axios from "axios";
import { getVideos } from "../service";

const initialVideos = {
	videos: [],
	videosError: null,
	videosLoading: true,
	videosSortOption: null,
	videosSearchText: "",
};
const VideosContext = createContext(initialVideos);

const VideosProvider = ({ children }) => {
	const [videosState, videosDispatch] = useReducer(
		videosReducerFunction,
		initialVideos
	);

	const getVideosService = async () => {
		try {
			const { data: { videos }} = await axios.get('/api/videos');

			videosDispatch({
				type: "SUCCESS",
				payload: { videos },
			});
		} catch (error) {
			videosDispatch({
				type: "ERROR",
			});
		}

	};

	useEffect(() => {
		getVideosService();
	}, []);

	return (
		<VideosContext.Provider value={{ ...videosState, videosDispatch }}>
			{children}
		</VideosContext.Provider>
	);
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };