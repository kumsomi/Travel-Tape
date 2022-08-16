import { useUserData } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";
import { Link } from "react-router-dom";
import { PlaylistListing, PlaylistModal } from "../../Components/Playlist";
import { useState } from "react";
import {MdDelete} from "react-icons/md";
import "../../Components/videos/VideoCard/style.css";

const Playlist=()=>{
    
    usePageTitle('Travel Tape | Playlists');
    
    const {
		playlists,
		userDataLoading,
		userDataError: { playlistsError },
	} = useUserData();

    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const handleCreatePlaylistClicked = (e) => {
		e.stopPropagation();
		setShowPlaylistModal(true);
	};

    return(
        <div >
            {showPlaylistModal ? (
            <PlaylistModal
			//video={video} 
			    setShowPlaylistModal={setShowPlaylistModal} 
			/>
            ):null}
            <button className="btn primary-btn" onClick={handleCreatePlaylistClicked}>
                Create Playlist
            </button>
            <h1>Total Playlists : {playlists.length}</h1>
            {playlists?.length ? (
				// <div className="video-container">
                    <PlaylistListing/>
                //  </div> 
            
			) : (
				<div >
					<div className="m-3">
                        There are no playlists. Explore videos to create and add videos to playlists!
                    </div>
					<Link
					    to="/explore"
						className="btn btn-primary mx-auto mt-2 px-1 text-reg py-0-5 text-center"
					>
					    Explore now
					</Link>
				</div>
				)
            }
        </div>
    )
}
export {Playlist};