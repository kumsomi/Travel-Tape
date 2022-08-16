import { usePageTitle } from "../../custom-hooks";
import {Link, useNavigate, useParams} from "react-router-dom";
import { useUserData } from "../../contexts";
import { VideoListing } from "../../Components";
const PlaylistVideos=()=>{

    usePageTitle('Travel Tape | Playlists');

    const { playlistsId } = useParams();
	const navigate = useNavigate();

	const {
		playlists,
		userDataLoading,
		userDataError: { playlists: playlistError },
	} = useUserData();

	if (!playlists.find((playlist) => playlist._id === playlistsId))
		navigate("/playlists");

	const videos = playlists.find(
		(playlist) => playlist._id === playlistsId
	)?.videos;

    return(
        <div>
            <Link className=" no-link" to="/playlists">
                <button className="btn primary-btn">
                View All Playlists
                </button>
                
            </Link>
            <h1>Total videos in Playlists : {videos.length}</h1>
            {videos?.length ? (
                <VideoListing videos={videos} page="playlist"/>    
            ) : (
                <div >
                    <div className="m-3">
                        There are no videos in this playlists. Explore now to add videos to your playlists!
                    </div>
                    <Link
                        to="/explore"
                        className="btn btn-primary mx-auto mt-2 px-1 text-reg py-0-5 text-center"
                    >
                        Explore now
                    </Link>
                </div>
                )
            }
    </div>
    )
}
export {PlaylistVideos};