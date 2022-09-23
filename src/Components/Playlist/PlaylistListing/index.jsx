import {MdDelete} from "react-icons/md";
import {RiPlayList2Fill} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth, useUserData } from "../../../contexts";
import { useToast } from "../../../custom-hooks";
import { deletePlaylistService } from "../../../service";
import nothumbnail from "../../../assets/images/No-Thumbnail.png";
// src\assets\images\No-Thumbnail.png
import "./style.css";

// import { useAuth} from "../../../contexts";
const PlaylistListing=()=>{

    const { userDataDispatch, playlists, categoriesLoading } = useUserData();
        const { showToast } = useToast();
        const { authToken } = useAuth();

    const playlistsMapping= playlists.map((playlist)=>{
        
        
        const cardImage = playlist.videos[0]
			? `https://i.ytimg.com/vi/${playlist.videos[0]._id}/hqdefault.jpg`
			: nothumbnail;

            const handleDeletePlaylist = async (event) => {

                event.stopPropagation();
                event.preventDefault();
                const playlistId = playlist._id;
                // setIsOnGoingNetworkCall(true);
    
                try {
                    const {
                        data: { playlists },
                    } = await deletePlaylistService(authToken, playlistId);
                    userDataDispatch({
                        type: "SET_PLAYLISTS",
                        payload: { playlists },
                    });
                    showToast("Playlist deleted successfully.", "success");
                } catch (error) {
                    showToast("Failed to delete playlist.", "error");
                    // setIsOnGoingNetworkCall(false);
                }
            };
    
            return (
                     <div className="video-card playlist-card">
                        <Link 
                            key={playlist._id}
                            to={`/playlists/${playlist._id}`} 
                            className="no-link">
                            <div className="video-card-header">
                                <img src={cardImage} alt={`${playlist.title} image`} className="video-img"/>
                            </div>
                        </Link>
                        <div className=" playlist-sidebar">
                            {/* <div> */}
                            {playlist.videos.length} videos
                            <div>
                            <RiPlayList2Fill/>

                            </div>
                        </div>
                        <div className="video-card-body playlist-body">

                            <div className="video-info">
                                <div className="video-title">{playlist.title}</div>
                            </div>
                            <div className="playlist-icon"
                                onClick={handleDeletePlaylist}
                            >
                                <MdDelete/>
                            </div>
                        </div>
                        
                    </div>
                
            );
        
    });
    
    return <div className="video-container">
        {/* {(playlists.map((item)=>
                    <div className="video-card">
                        <div className="video-card-header">
                            <img src="https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            // src={imgsrc} alt={`${videoTitle} cover`} 
                            className="video-img"
                            />
                            
                        </div>
                        <div className="video-card-body">
                            <div className="video-info">
                                <div className="video-title">{item.title}</div>
                            </div>
                            <div className="icon-btn">
                            
                            </div>
                        </div>
                    </div>
                    ))
                    } */}
        {playlistsMapping}
    </div>
}
export {PlaylistListing};