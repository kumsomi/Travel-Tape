import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useCategory, useUserData, useVideos } from "../../contexts";
import { usePageTitle, useToast } from "../../custom-hooks";
import YouTube from 'react-youtube';
import { findVideoInList, getFormattedViews, likeVideoServiceCall, watchLaterServiceCall } from "../../utils";
import { useEffect, useState } from "react";
import { postVideoToHistoryService } from "../../service";
import { AiOutlineClockCircle } from "react-icons/ai";
import {AiFillLike} from "react-icons/ai";

import {AiOutlineLike } from "react-icons/ai";
import {MdPlaylistAdd} from "react-icons/md";
import {BsFillClockFill} from "react-icons/bs";
import "./style.css";
import { PlaylistModal } from "../../Components/Playlist";
import { VideoListing } from "../../Components";

const SingleVideo=()=>{

    usePageTitle('Travel Tape | Playlists');
    
	const {categoryError}= useCategory();
	const { videosError, videosLoading, videos } = useVideos();
    const { watchlater, likes, userDataDispatch, userDataLoading } =useUserData();
    const { videoId } = useParams();
    const navigate = useNavigate();
	
    const { isAuth, authToken } = useAuth();
	const { showToast } = useToast();
    
    const videoToBeDisplayed = videos?.find((video) => video._id === videoId);
    const dateReleased = new Date(videoToBeDisplayed?.dateAdded)
		.toDateString()
		.substring(4)
		.split(" ", 4)
		.join(" ");

    const [isVideoInWatchLater, setIsVideoInWatchLater] = useState(
		findVideoInList(watchlater, videoToBeDisplayed) || []
	);
	const [isVideoInLikes, setIsVideoInLikes] = useState(
		findVideoInList(likes, videoToBeDisplayed) || []
	);
	const [showPlaylistModal, setShowPlaylistModal] = useState(false);


    useEffect(() => {
		if (isAuth) {
			setIsVideoInWatchLater(
				findVideoInList(watchlater, videoToBeDisplayed)
			);
			setIsVideoInLikes(findVideoInList(likes, videoToBeDisplayed));
		}
	}, [watchlater, likes]);

    const postVideoToHistoryServiceCall = async () => {
		if (isAuth) {
			userDataDispatch({
				type: "SET_LOADER",
				payload: { loading: true },
			});

			try {
				const {
					data: { history },
				} = await postVideoToHistoryService(
					authToken,
					videoToBeDisplayed
				);
				userDataDispatch({ type: "SET_HISTORY", payload: { history } });
			} catch (error) {
				// showToast(
				// 	"Some error occurred while updating history. Please try again later.",
				// 	"error"
				// );
			}

			userDataDispatch({
				type: "SET_LOADER",
				payload: { loading: false },
			});
		    }
	};
    const handleWatchLaterChange = async (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (!isAuth) {
			showToast("Login to add the video to watch later.", "info");
			navigate("/login", {
				state: { from: `/explore/${videoId}` },
				replace: true,
			});
		} else {
			watchLaterServiceCall(
				showToast,
				userDataDispatch,
				isVideoInWatchLater,
				authToken,
				videoToBeDisplayed
			);
		}
	};

	const handleLikedVideoChange = async (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (!isAuth) {
			showToast("Login to add the video to likes.", "info");
			navigate("/login", {
				state: { from: `/explore/${videoId}` },
				replace: true,
			});
		} else {
			likeVideoServiceCall(
				showToast,
				userDataDispatch,
				isVideoInLikes,
				authToken,
				videoToBeDisplayed
			);
		}
	};

	const handleShowPlaylistModal = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (!isAuth) {
			showToast("Login to add the video to a playlist.", "info");
			navigate("/login", {
				state: { from: `/explore/${videoId}` },
				replace: true,
			});
		} else setShowPlaylistModal(true);
	};

	const opts = {
		playerVars: {
			autoplay: 1,
		},
	};
    useEffect(() => {
		if (videoToBeDisplayed) {
			postVideoToHistoryServiceCall();
		}
	}, [videoToBeDisplayed]);

    return(
		<div className="flex flex-wrap">
        <div className="single-video-container">
            {showPlaylistModal ? (<PlaylistModal video={videoToBeDisplayed} setShowPlaylistModal={setShowPlaylistModal}/>):(null)}

            <YouTube videoId={videoId}
            className="yt-video"/>
            <div className="single-video-card-body">

            <h3 className="h-3">
                {videoToBeDisplayed.title}
            </h3>

            <div className="single-video-info h-4 fw-800"> 
                <img src={videoToBeDisplayed.logo} alt={`${videoToBeDisplayed.creator}`} className="badge-circle s creator-logo"/>
                <div className="creator-name">{videoToBeDisplayed.creator}</div>
            </div>
            <div className="single-video-info h-4">
                    <div>{getFormattedViews(videoToBeDisplayed.views)}</div>
                    <div 
                    className="views"
                    >{dateReleased}</div>
            </div>
            </div>
            <div className="m-1">
                <span className={isVideoInLikes? "single-video-btn single-video-active-btn":"single-video-btn "} onClick={handleLikedVideoChange}>
                { isVideoInLikes ? (<>
                    < AiFillLike className="icon-video-btn "/>Liked</>
                    ):(<>
                    <AiOutlineLike className="icon-video-btn" />Like</>
                    )
                }
                </span>
                <span className={isVideoInWatchLater ?"single-video-btn single-video-active-btn": "single-video-btn"} onClick={handleWatchLaterChange}>
                {isVideoInWatchLater ? 
                    (<><BsFillClockFill/> In-WatchLater</>):
                    (<><AiOutlineClockCircle className="icon-video-btn" />Add to WatchLater</>)
                } 
                </span>
                <span className="single-video-btn" onClick={handleShowPlaylistModal}>
                    <MdPlaylistAdd className="icon-video-btn"/> Save
                </span>
            </div>

            <div>
                {videoToBeDisplayed.description}
            </div>
        </div>
		<div>
		{videosError || categoryError ? (
                <h3 className="text-center mx-auto px-3 error-color">
                    Videos could not be loaded. Try again after sometime.
                </h3>
            ) 
            : (
            <VideoListing videos={videos} className="videos"/>
            )}
		</div>
	</div>
    )
}
export {SingleVideo};