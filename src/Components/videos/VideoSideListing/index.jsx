import { VideoSideCard } from "../VideoSideCard";
import "../VideoListing/style.css";
import "./style.css";
const VideoSideListing=({videos, page})=>{
    // console.log(videos);
    return(
        <div 
        className="video-side-container"
        >
            {videos.map((video)=>(
                // <div className="video-listing">
                <VideoSideCard key={video._id} video={video} page={page}/>
                // </div>
            ))}
        </div>
    )
}
export {VideoSideListing};