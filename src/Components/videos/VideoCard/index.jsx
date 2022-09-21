
import { getFormattedViews, findVideoInList, likeVideoServiceCall, watchLaterServiceCall } from "../../../utils";
import "./style.css";
import YouTube from 'react-youtube';
import {GrClose} from "react-icons/gr";
import {BsThreeDotsVertical} from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
// import { VideoOptions } from "../VideoOptions";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useOutsideClick, useToast } from "../../../custom-hooks";
import { useAuth, useUserData, useVideos } from "../../../contexts";
import { deleteVideoFromHistoryService, deleteVideoFromPlaylistService } from "../../../service";
import { PlaylistModal } from "../../Playlist";
import {MdDelete} from "react-icons/md";
import { Loader } from "../../Loader";


const VideoCard=({video, page})=>{

    const{
            _id:videoId,
            title:videoTitle,
            creator:videoCreator,
            description:videoDiscription,
            logo:videoLogo,
            views,
            dateAdded,
    } = video;
    const imgsrc=`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`;
	// mq--> maxresdefault.jpg
	const dateReleased = new Date(dateAdded)
		.toDateString()
		.substring(4)
		.split(" ", 4)
		.join(" ");
    const [isOpenOptions, setIsOpenOptions]=useState(false);

    
    const { isAuth, authToken } = useAuth();
	const { userDataDispatch, watchlater, userDataLoading, likes } = useUserData();
	const navigate = useNavigate();
    const { showToast } = useToast();
	const location = useLocation();
	const { playlistsId } = useParams();
	const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    
    const isVideoInWatchLater = findVideoInList(watchlater, video);
	const isVideoInLikes = findVideoInList(likes, video);
	
	const videoOptionsReference = useRef(null);
    
	const [isOnGoingNetworkCall, setIsOnGoingNetworkCall] = useState(false);

    const optionsHandler=()=>{
        setIsOpenOptions((prev)=>!prev)
    }


    const handleWatchLaterChange = async (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (!isAuth) {
			showToast("Login to add the video to watch later.", "info");
			navigate("/login", { state: { from: "/explore" }, replace: true });
		} else {
			setIsOnGoingNetworkCall(true);
			await watchLaterServiceCall(
				showToast,
				userDataDispatch,
				isVideoInWatchLater,
				authToken,
				video
			);
			setIsOnGoingNetworkCall(false);
		}
		setIsOpenOptions(false);

	};


    const handleLikedVideoChange = async (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (!isAuth) {
			showToast("Login to add the video to likes.", "info");
			navigate("/login", { state: { from: "/explore" }, replace: true });
		} else {
			setIsOnGoingNetworkCall(true);
			await likeVideoServiceCall(
				showToast,
				userDataDispatch,
				isVideoInLikes,
				authToken,
				video
			);
			setIsOnGoingNetworkCall(false);
		}
		setIsOpenOptions(false);
	};

	const handleShowPlaylistModal = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!isAuth) {
			showToast("Login to add the video to a playlist.", "info");
			navigate("/login", { state: { from: "/explore" }, replace: true });
		} else 
        setShowPlaylistModal(true);
		setIsOpenOptions(false);
	};

	const handleDeleteVideoFromHistory = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		setIsOnGoingNetworkCall(true);

		try {
			const {
				data: { history },
			} = await deleteVideoFromHistoryService(authToken, videoId);
			userDataDispatch({ type: "SET_HISTORY", payload: { history } });
			showToast("Removed video from history.", "success");
		} catch (error) {
			showToast("Failed to remove video from history.", "error");
		}

		setIsOnGoingNetworkCall(false);
	};

	const handleDeleteVideoFromPlaylist = async (e) => {
		e.stopPropagation();
		e.preventDefault();

		setIsOnGoingNetworkCall(true);
		try {
			const {
				data: { playlist: updatedPlaylist },
			} = await deleteVideoFromPlaylistService(
				authToken,
				playlistsId,
				videoId
			);
			userDataDispatch({
				type: "UPDATE_PLAYLISTS",
				payload: { playlist: updatedPlaylist },
			});
			showToast("Video removed from playlist.", "success");
		} catch (error) {
			setIsOnGoingNetworkCall(false);
			showToast("Failed to remove video playlist.", "error");
		}
	};
	const opts = {
		playerVars: {
			'origin':'https://localhost:3000',
		},
		width:'100%',
		height:'100%',
	};
	const {videosLoading, videosError}=useVideos();
    return(
        <>

            {showPlaylistModal ? (
            <PlaylistModal 
				video={video}
				setShowPlaylistModal={setShowPlaylistModal} 
			/>
            ):null}
			
            <div className="video-card">
                <NavLink to={`/explore/${videoId}`} className="no-link">

                <div className="video-card-header">
                    <img src={imgsrc} alt={`${videoTitle} cover`} className="video-img"/>
                </div>
				{/* <div>
				{videosLoading ? (<Loader/>
				):videosError?(
					<h3>Failed to load the video</h3>
				):(
					<div className="video-card-header">
						<YouTube videoId={videoId}
							opts={opts}
							className="video-img"
							onClick={clickVideo}
						/>
					</div>
				)}
					</div> */}
				</NavLink>
					<div className="video-card-body">

                    <img src={video.logo} alt={`${video.creator}`} className="badge-circle s creator-logo"/>
                    <div className="video-info">
                        <div className="video-title">{video.title}</div>

                        <div>{video.creator}</div>
                        <div>
                            {getFormattedViews(views)} 
                            <span className="views"> {dateReleased}</span>
                        </div>

                    </div>
					{/* </NavLink> */}
					{page === "playlist" ? (
							<button
								className="btn del-video-icon"
								onClick={handleDeleteVideoFromPlaylist}
							>
								<MdDelete/>
							</button>
						) : null}
                    <div className="icon-btn option-link" onClick={optionsHandler}>
						
                        {isOpenOptions?<GrClose/>:<BsThreeDotsVertical/>}
						<div className="option-wrapper">
							{isOpenOptions ?
								(
									<div className="video-options" ref={videoOptionsReference}>
										<div className="option-item" onClick={handleWatchLaterChange}>
											{isVideoInWatchLater ?
												(<div>Remove from watch later</div>):
												(<div >Add to watch later</div>)
											}
										</div>
										<div className="option-item" onClick={handleLikedVideoChange}>
											{ isVideoInLikes?(<div>Remove From Likes</div>):(<div>Add to Likes</div>)
											}
										</div>
										<div className="option-item" onClick={handleShowPlaylistModal}>
											Add to playlist
										</div>
									</div>
								):null
							}
						</div>
                    </div>
                </div>
                {/* </NavLink> */}
                {/* <div className="icon-btn option-link" onClick={optionsHandler}>
						
                        {isOpenOptions?<GrClose/>:<BsThreeDotsVertical/>}
						<div className="option-wrapper">
							{isOpenOptions ?
								(
									<div className="video-options" ref={videoOptionsReference}>
										<div className="option-item" onClick={handleWatchLaterChange}>
											{isVideoInWatchLater ?
												(<div>Remove from watch later</div>):
												(<div >Add to watch later</div>)
											}
										</div>
										<div className="option-item" onClick={handleLikedVideoChange}>
											{ isVideoInLikes?(<div>Remove From Likes</div>):(<div>Add to Likes</div>)
											}
										</div>
										<div className="option-item" onClick={handleShowPlaylistModal}>
											Add to playlist
										</div>
									</div>
								):null
							}
						</div>
                    </div> */}
				<div>
				</div>

            </div>
        </>

    );
}
export {VideoCard};