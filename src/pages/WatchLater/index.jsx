import { Link } from "react-router-dom";
import { VideoListing } from "../../Components";
import { useUserData } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";

const WatchLater=()=>{
    usePageTitle('Travel Tape | WatchLater');

    const {
		// userDataLoading,
		userDataError: { watchlater: watchlaterError },
		watchlater,
	} = useUserData();

    return(
        <div className="text-center">
            <h1>Videos in Watch Later: {watchlater.length}</h1>
            {watchlaterError || watchlaterError ? (
				<h3 className="text-center mx-auto px-3 error-color my-3">
					Watch later videos could not be loaded. Please try again
					later.
				</h3>
			):(
                <div>
                    {watchlater.length ? (<VideoListing videos={watchlater}/>
                    ):(
                        <div>
                            <div className="m-3">There are no videos in watch later list. Explore more.</div>
                            <Link to="/explore" className="btn">
                                Explore now
                            </Link> 
                        </div>
                    )}
                </div>
            )
        }
        </div>
    )
}
export {WatchLater};