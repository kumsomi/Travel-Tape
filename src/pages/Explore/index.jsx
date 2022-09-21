import { CategoryFiltersList, Loader, SortingOptionsList, VideoListing } from "../../Components";
import { useCategory,  useVideos } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";
import { getFilteredSortedVideos } from "../../utils";
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
        videosSearchText,
        videosSortOption,
	} = useVideos();

    const filteredSortedVideos = getFilteredSortedVideos(
		videos,
		videosSearchText,
		selectedCategory,
		videosSortOption
	);

    usePageTitle('Travel Tape | Home');

    return(
        <main className="main explore-main">

            {/* <div className="h-3 p-2">Explore Videos...</div> */}
            {videosError || categoryError ? (
                <h3 className="text-center mx-auto px-3 error-color">
                    Videos could not be loaded. Try again after sometime.
                </h3>
            ) 
            : (
                <div>
                    <CategoryFiltersList />
                    <SortingOptionsList/>
                    {filteredSortedVideos?.length ? (
						<h2 className="p-1 text-center">
							{filteredSortedVideos?.length > 1
								? "Videos"
								: "Video"}
							: {filteredSortedVideos?.length}
						</h2>
					) : null}
                    <VideoListing videos={filteredSortedVideos} className="videos"/>
                </div>
           
            )}
        </main>
        // <div>Explore</div>

    )
}
export {Explore};