import { VideoCard } from "../VideoCard";
import "./style.css";

const VideoListing=({videos})=>{
    return(
        <div className="video-container">
            {videos.map((video)=>(
                // <div className="video-listing">
                <VideoCard key={video._id} video={video}/>
                // </div>
            ))}
        </div>
    )
}
export {VideoListing};