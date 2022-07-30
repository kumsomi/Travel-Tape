import {Link, useNavigate} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import "./style.css";
import { useAuth } from "../../contexts";
import { useToast } from "../../custom-hooks";
const Navbar=()=>{

    const { isAuth, authDispatch } = useAuth();
	const navigate = useNavigate();
    
    const {showToast}=useToast();

    const handleLogoutUser = () => {
		authDispatch({ action: { type: "RESET_AUTH" } });
		showToast("Logged out successfully", "success");
		localStorage.removeItem("stream-tunes-token");
		localStorage.removeItem("stream-tunes-user");
		navigate("/login");
	};

    return(
        <nav className="navigation-bar p-1 h-3">
            <Link to="/" className="h-3 no-link">
                <span className="nav-heading flex flex-wrap ">Travel Tape</span>
            </Link>
            <div className="navigation-brand-link">
                <ul className="no-bullet spaced-list">
                    
                    
                    {isAuth ? (
						<li>
							<button
								className="btn btn-primary btn-icon btn-logout text-sm"
								onClick={handleLogoutUser}
							>
								{isAuth}
							</button>
                            
						</li>
					) : (
						<Link to="/login">
                            <FaUserAlt className="icon h-4" />
                            <div className="h-4">{isAuth}</div>
                        </Link>
					)}
                </ul> 
            </div>
        </nav>
    )
}
export {Navbar};