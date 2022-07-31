import { useNavigate, useParams } from "react-router-dom";
import { useVideos } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";
import YouTube from 'react-youtube';

const SingleVideo=()=>{
    usePageTitle('Travel Tape | Playlists');
    const { videosError, videosLoading, videos } = useVideos();
    const { videoId } = useParams();
    const navigate = useNavigate();
	
    const videoToBeDisplayed = videos?.find((video) => video._id === videoId);
    return(
        <div className="single-video">
            <YouTube
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