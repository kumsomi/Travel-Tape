import { usePageTitle } from "../../custom-hooks";
import Youtube from "react-youtube";
import { useNavigate, useParams } from "react-router-dom";
import { useVideos } from "../../contexts";
import "./style.css";

const SingleVideo=()=>{
    usePageTitle('Travel Tape | Playlists');
    const { videosError, videosLoading, videos } = useVideos();
    const { videoId } = useParams();
    const navigate = useNavigate();
	
    const videoToBeDisplayed = videos?.find((video) => video._id === videoId);
    return(
        <div className="single-video">
            <Youtube
            videoId={videoId}/>
            <h3 className="h-3">
            {videoToBeDisplayed.title}

            </h3>
            <div>
                {videoToBeDisplayed.description}
            </div>
        </div>
    )
}
export {SingleVideo};