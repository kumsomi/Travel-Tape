import { Link, useNavigate } from "react-router-dom";
import { useAuth, useUserData } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { RiPlayList2Fill } from "react-icons/ri";
// import "../../assets"
import extrathumbnail from "../../assets/images/extra-thumbnail.png";
import "./style.css";
import "../../Components/Playlist/PlaylistListing/style.css";

const Profile=()=>{
    
    const {authUser, authDispatch}=useAuth();

    const {likes, watchlater, playlists, history } = useUserData();

    const {showToast}=useToast();
    const navigate=useNavigate();
    const handleLogoutUser = () => {
		authDispatch({ action: { type: "RESET_AUTH" } });
		showToast("Logged out successfully", "success");
		localStorage.removeItem("travel-tape-token");
		localStorage.removeItem("travel-tape-user");
		navigate("/login");
	};
    return(
        <div className="profile text-center">
            {/* <FaUserCircle/> */}
            <h2 className="h-2">User details</h2>
            
            <div className="para-4">Name: {`${authUser.firstName} ${authUser.lastName}`}</div>
            <div className="para-4">Email: {authUser.email}</div>
            <button className="btn primary-btn user-logout" onClick={handleLogoutUser}>Logout</button>
            <div>
                <div className="video-container">
                    <div className="video-card playlist-card">
                        <Link to="/likes"
                            className="no-link">
                            <div className="video-card-header">
                                <img src={extrathumbnail} alt={`like image`} className="video-img user-profile-img"/>
                            </div>
                        </Link>
                        <div className=" playlist-sidebar">
                             {likes.length} {" "} videos 
                            <div>
                            <RiPlayList2Fill/>

                            </div>
                        </div>
                        <div className="video-card-body playlist-body">

                            <div className="video-info">
                                <div className="video-title">
                                    Liked Videos
                                    </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="video-card playlist-card">
                        <Link to="/playlists"
                            className="no-link">
                            <div className="video-card-header">
                                <img src={extrathumbnail} alt={`playlist image`} className="video-img user-profile-img"/>
                            </div>
                        </Link>
                        <div className=" playlist-sidebar">
                             {playlists.length} {" "} videos 
                            <div>
                            <RiPlayList2Fill/>

                            </div>
                        </div>
                        <div className="video-card-body playlist-body">

                            <div className="video-info">
                                <div className="video-title">
                                    Playlists
                                    </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="video-card playlist-card">
                        <Link to="/watchlater"
                            className="no-link">
                            <div className="video-card-header">
                                <img src={extrathumbnail} alt={`watchlater image`} className="video-img user-profile-img"/>
                            </div>
                        </Link>
                        <div className=" playlist-sidebar">
                             {watchlater.length} {" "} videos 
                            <div>
                            <RiPlayList2Fill/>

                            </div>
                        </div>
                        <div className="video-card-body playlist-body">

                            <div className="video-info">
                                <div className="video-title">
                                    Watch later Videos
                                    </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="video-card playlist-card">
                        <Link to="/history"
                            className="no-link">
                            <div className="video-card-header">
                                <img src={extrathumbnail} alt={`history image`} className="video-img user-profile-img"/>
                            </div>
                        </Link>
                        <div className=" playlist-sidebar">
                             {history.length} {" "} videos 
                            <div>
                            <RiPlayList2Fill/>

                            </div>
                        </div>
                        <div className="video-card-body playlist-body">

                            <div className="video-info">
                                <div className="video-title">
                                    History
                                    </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    </div>
            </div>
        </div>
    );
}
export {Profile};