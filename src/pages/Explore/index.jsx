import { Loader, VideoListing } from "../../Components";
import { useCategory,  useVideos } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";
import "./style.css";

const Explore=()=>{
    const { category,
        categoryError,
        categoryLoading,
        selectedCategory
    } = useCategory();
	const {
		videos,
        videosError,
        videosLoading,
        videosDispatch,
	} = useVideos();

    usePageTitle('Travel Tape | Home');

    return(
        <main className="main explore-main">

            <div className="h-3 p-2">Explore Videos...</div>
            {videosError || categoryError ? (
                <h3 className="text-center mx-auto px-3 error-color">
                    Videos could not be loaded. Try again after sometime.
                </h3>
            ) 
            : (
            <VideoListing videos={videos} className="videos"/>
            )}
        </main>
        // <div>Explore</div>

    )
}
export {Explore};