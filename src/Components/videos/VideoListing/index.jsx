import { VideoCard } from "../VideoCard";
import "./style.css";

const VideoListing=({videos, page})=>{
    return(
        <div className="video-container">
            {videos.map((video)=>(
                // <div className="video-listing">
                <VideoCard key={video._id} video={video} page={page}/>
                // </div>
            ))}
        </div>
    )
}
export {VideoListing};