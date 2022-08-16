import { useEffect, useRef, useState } from "react";
import {MdOutlineLibraryAdd} from "react-icons/md";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useAuth, useUserData } from "../../../contexts";
import { useOutsideClick, useToast } from "../../../custom-hooks";
import { deleteVideoFromPlaylistService, postNewPlayList, postVideoToPlaylist } from "../../../service";

import "./style.css";
import { PlaylistOption } from "./PlaylistOption";

const PlaylistModal=({
	video, 
	setShowPlaylistModal })=>{

    const { authToken } = useAuth();
	const { userDataDispatch, playlists, userDataLoading } = useUserData();
	const { showToast } = useToast();

	const [playlistName, setPlaylistName] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const [isOnGoingNetworkCall, setIsOnGoingNetworkCall] = useState(false);

	const playlistModalReference = useRef(null);
	const playlistInputReference = useRef(null);
	const isVideoEmpty = !video || !Object.keys(video).length;

	

	// const isVideoInPlaylist =
	// 	!isVideoEmpty &&
	// 	playlist.videos.find(
	// 		(playlistVideo) => playlistVideo._id === video._id
	// 	) === undefined
	// 		? false
	// 		: true;

    // const playlist= playlists.map((playlist) => 
    //     (
    //         <div>
    //             <label
    //                 key={playlist._id}
    //             >
    //                 {isVideoEmpty ? null : (
    //                     <input
    //                         type="checkbox"
    //                         name={`playlist-${playlist.title}`}
    //                         id={playlist._id}
    //                         checked={isVideoInPlaylist}
    //                         onChange={handleChangePlaylist}
    //                         disabled={userDataLoading || isOnGoingNetworkCall}
    //                     />
    //                 )}
    //                 <span className="label-text">{playlist.title}</span>
    //             </label>
    //         </div>
    //     ))
	
	const handlePlaylistNameChange = (e) => {
		// setErrorMessage(null);
		setPlaylistName(e.target.value);
	};

	const handleCreatePlaylist = async (e) => {
		e.preventDefault();
		if (!playlistName || !playlistName.trim()) {
			return setErrorMessage("Playlist name cannot be empty!");
		}

		setIsOnGoingNetworkCall(true);

		try {
			const {
				data: { playlists },
			} = await postNewPlayList(authToken, {
				title: playlistName,
				videos: isVideoEmpty ? [] : [{ ...video }],
			});
			userDataDispatch({ type: "SET_PLAYLISTS", payload: { playlists } });
			setPlaylistName("");
			if (isVideoEmpty) {
				showToast("Created new playlist.", "success");
			} else showToast("Added video to new playlist.", "success");
		} catch (error) {
			if (isVideoEmpty) {
				showToast("Could not create playlist.", "error");
			} else
				showToast(
					"Could not add video to new playlist. Please try again later.",
					"error"
				);
		}
		setIsOnGoingNetworkCall(false);
	};

    

    // const handleChangePlaylist = async (e) => {
	// 	setIsOnGoingNetworkCall(true);
	// 	try {
	// 		const {
	// 			data: { playlist: updatedPlaylist },
	// 		} = isVideoInPlaylist
	// 			? await deleteVideoFromPlaylistService(
	// 					authToken,
	// 					playlist._id,
	// 					video._id
	// 			  )
	// 			: await postVideoToPlaylist(authToken, playlist._id, video);
	// 		userDataDispatch({
	// 			type: "UPDATE_PLAYLISTS",
	// 			payload: { playlist: updatedPlaylist },
	// 		});
	// 		showToast(
	// 			isVideoInPlaylist
	// 				? "Video removed from playlist."
	// 				: "Video added to playlist.",
	// 			"success"
	// 		);
	// 	} catch (error) {
	// 		showToast(
	// 			isVideoInPlaylist
	// 				? "Failed to remove video playlist."
	// 				: "Failed to add video to playlist.",
	// 			"error"
	// 		);
	// 	}
	// // 	setIsOnGoingNetworkCall(false);
	// };

	const closePlaylist=()=>{
		setShowPlaylistModal(false);
	}
	useEffect(() => {
		if (playlistInputReference.current) {
			playlistInputReference.current.focus();
		}
	}, [playlists?.length]);
	// useOutsideClick(playlistModalReference, () => setShowPlaylistModal(false));
    return(
		<div className="playlist-modal-container">
        <div className="playlist-modal"
        ref={playlistModalReference}
        >
            <div>
			<h1 className=" cta-color">
                    {isVideoEmpty? 
                    "Playlists" : 
					"Add to an existing playlist"}
				</h1>
						{/* {console.log(playlists)} */}
                     {playlists.map((playlist) => (
                            <PlaylistOption
								key={playlist._id}
								video={video}
								playlist={playlist}
							/>
						))
                    }
            </div>
            <form>
				<h1 className=" cta-color">Create new playlist</h1>
                <div className="new-paylist">
                    <input type="text" 
                        id="input-playlist-name"
                        name="playlist-name"
                        placeholder="Enter Playlist Name"
                        autoComplete="off"
                        onChange={handlePlaylistNameChange}
                        value={playlistName}
                        ref={playlistInputReference} 
                    />
                    <button
							type="submit"
							className={`btn-playlist`}
							onClick={handleCreatePlaylist}
					>
						<MdOutlineLibraryAdd className="playlist-add"/>
					</button>
                </div>
            </form>
			<div className="close-playlist-btn" onClick={closePlaylist}><AiOutlineCloseCircle/></div>
		</div>
	</div>
    )
}
export {PlaylistModal};