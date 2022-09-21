import { Loader } from "../..";
import { useInfiniteScroll } from "../../../custom-hooks";
import { VideoCard } from "../VideoCard";
import "./style.css";

const VideoListing=({videos, page})=>{
    const { pageNumber, loading, lastElementReference, hasMoreVideos } = useInfiniteScroll(videos);
    const videosToDisply = videos?.slice(0, pageNumber * 5);

    const showLoader = () =>
        videosToDisply?.length &&
        hasMoreVideos &&
        loading &&
        videosToDisply?.length !== videos?.length;

    const videosMapping = videosToDisply.map((video) => (
        <VideoCard key={video._id} video={video} page={page} />
    ));

    return(
        <div 
        className="video-container"
        >
            {!videosToDisply?.length ? (
				<h4 className="text-left">No videos found</h4>
			) : (
				<>
					{videosMapping}
					<div
						className="infinite-scroll-loader"
						ref={lastElementReference}
					>
						{showLoader() ? (<>
							<h1>Loading more videos...</h1>
                            <Loader/>
                            </>
						) : null}
					</div>
				</>
			)}
            {/* {videos.map((video)=>(
                // <div className="video-listing">
                <VideoCard key={video._id} video={video} page={page}/>
                // </div>
            ))} */}
        </div>
    )
}
export {VideoListing};