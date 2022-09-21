import {Link, NavLink, useNavigate, useLocation} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {BiLogIn} from "react-icons/bi";
import {FaSearch} from "react-icons/fa";
import {VscChromeClose} from "react-icons/vsc";
import {IoCloseSharp} from "react-icons/io5";
import {MdClose} from "react-icons/md";
import {GrClose} from "react-icons/gr";
import "./style.css";
import { useAuth, useVideos } from "../../contexts";
// import { useToast } from "../../custom-hooks";
import { useCallback, useState } from "react";


const Navbar=()=>{

    const { isAuth, authUser } = useAuth();
	// const navigate = useNavigate();
    
    // const {showToast}=useToast();
    const { videos, videosSearchText } = useVideos();
    const [searchText, setSearchText] = useState(videosSearchText);
    // const {showFooterText, setShowFooterText}=useState(false);
    const { videosDispatch } = useVideos();
	const navigateToExplore = (event) => {
		event.preventDefault();
	};
    const[autoText, setAutoText]=useState([]);
    const navigate = useNavigate();
    const location = useLocation();

	const debounce = (callback, delay = 800) => {
		let timer;
		return function (...args) {
            if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				callback(...args);
			}, delay);
		};
	};

	const fetchSearchedVideos = (searchText) => {
		videosDispatch({
			type: "SET_SEARCH_TEXT",
			payload: { videosSearchText: searchText },
		});
	};

	const debouncedFetchSearchVideos = useCallback(
		debounce(fetchSearchedVideos, 800),
		[]
	);
    const clearSearchText=(event)=>{
        setSearchText("");
        debouncedFetchSearchVideos(event.target.value);
    }
	const handleSearchTextChange = (event) => {
        
		setSearchText(event.target.value.trim(" "));
        // setAutoText(...autoText,videos.filter((vid)=>vid.title.includes(event.target.value)));
		if (location.pathName !== "/explore") {
			navigate("/explore");
		}
		debouncedFetchSearchVideos(event.target.value);
	};


    return(
        <nav className="navigation-bar p-1 h-3">
            
            <Link to="/" className="h-3 no-link nav-brand-name-change">
                <span className="nav-heading flex flex-wrap ">Travel Tape</span>
            </Link>

            <form className="navigation-brand-link search-form" onSubmit={navigateToExplore}>
                <div className="search-container">
                <input 
                    type="text" 
                    onChange={handleSearchTextChange}
                    value={searchText}
                    placeholder="Search videos by title"
                    className="nav-search"
                />
                {searchText?
                    <button className="search-container-btn" onClick={clearSearchText}>
                        <IoCloseSharp/>
                    </button>:
                    <button type="submit" className="search-container-btn">
                        <FaSearch/>
                    </button> 
                }  
                </div>
                {/* {searchText &&
                <div className="auto-complete-titles">
                    <table>
                        {autoText.map((video)=>
                        <tbody className="elipsis-text" key={video._id}>
                            <NavLink to={`/explore/${video._id}`} className="no-link"key={video._id}>
                                {video.title}
                            </NavLink>
                        </tbody>)}
                    </table>    
                </div>
                } */}
            </form>
            
            <div className="navigation-brand-link">
                <ul className="no-bullet spaced-list">
                    
                    
                    {isAuth ? (
                        <Link to="/profile" className="icon h-4 nav-user-icon no-link">
                            <FaUserAlt  />
                            <div>{authUser.firstName}</div>
                        </Link>
					) : (
						<Link to="/login" className="icon h-4 nav-user-icon no-link">
                            <BiLogIn />
                            <div>Login</div>

                        </Link>
					)}
                </ul> 
            </div>
        </nav>
    )
}
export {Navbar};