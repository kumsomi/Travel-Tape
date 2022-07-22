import { Loader, videoListing } from "../../Components";
import { useCategory,  useVideos } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";
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
        // <main className="main explore-main">
		// 	{videosError || categoryError ? (
		// 		<h3 className="text-center mx-auto px-3 error-color">
		// 			Videos could not be loaded. Try again after sometime.
		// 		</h3>
		// 	) : videosLoading || categoryLoading ? (
		// 		<Loader/>
		// 	) : (
        //         <div>
        //             <videoListing videos={videos}/>
        //         </div>
        //     )
        //     }
        // </main>
        <div>Explore</div>
    )
}
export {Explore};