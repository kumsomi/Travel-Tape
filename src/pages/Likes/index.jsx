import { useUserData } from "../../contexts";
import { usePageTitle } from "../../custom-hooks";
import { Link } from "react-router-dom";
import { VideoListing } from "../../Components";

const Likes=()=>{
    usePageTitle('Travel Tape | Likes');
    const {
		userDataLoading,
		userDataError: { likes: likesError },
		likes,
	} = useUserData();

    return(
        <div className="text-center">
            <h1 >Liked Video: {likes.length}</h1>
            {
                likes?.length ?( 
                    <VideoListing videos={likes} page="likes"/>
                ):(
                    <div>
                        <div className="m-3">There are no liked videos. Explore more.</div>
                            <Link to="/explore" className="btn">
                                Explore now
                            </Link> 
                    </div>
                )
            } 
        </div>
    )
}
export {Likes};