import { createContext, useContext, useEffect, useReducer } from "react";
import { videosReducerFunction } from "../reducers";
import axios from "axios";

const initialVideos = {
	videos: [],
	error: null,
	loading: true,
	sortOption: null,
	searchText: "",
};
const VideosContext = createContext(initialVideos);


const VideosProvider = ({ children }) => {
	const [videosState, videosDispatch] = useReducer(
		videosReducerFunction,
		initialVideos
	);

	const getVideos = async () => {
		try {
			const {
				data: { videos },
			} = await axios.get('/api/videos');

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
		getVideos();
	}, []);

	return (
		<VideosContext.Provider value={{ ...videosState, videosDispatch }}>
			{children}
		</VideosContext.Provider>
	);
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };