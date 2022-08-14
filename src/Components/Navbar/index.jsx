import {Link, useNavigate} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {BiLogIn} from "react-icons/bi";
import "./style.css";
import { useAuth } from "../../contexts";
import { useToast } from "../../custom-hooks";


const Navbar=()=>{

    const { isAuth, authUser } = useAuth();
	// const navigate = useNavigate();
    
    // const {showToast}=useToast();

    


    return(
        <nav className="navigation-bar p-1 h-3">
            <Link to="/" className="h-3 no-link">
                <span className="nav-heading flex flex-wrap ">Travel Tape</span>
            </Link>
            <div className="navigation-brand-link">
                <ul className="no-bullet spaced-list">
                    
                    
                    {isAuth ? (

						// <li>
						// 	<button
						// 		className="btn btn-primary btn-icon btn-logout text-sm"
						// 		onClick={handleLogoutUser}
						// 	>
						// 		{isAuth} logout
						// 	</button>
                            
						// </li>
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