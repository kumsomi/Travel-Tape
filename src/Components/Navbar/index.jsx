import {Link} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import "./style.css";
const Navbar=()=>{

    return(
        <nav className="navigation-bar p-1 h-3">
            <Link to="/" className="h-3 no-link">
                <span className="nav-heading flex flex-wrap ">Travel Tape</span>
            </Link>
            <div className="navigation-brand-link">
                <ul className="no-bullet spaced-list mt-1">
                    <Link to="/login">
                     <FaUserAlt className="icon" />
                    </Link>
                </ul> 
            </div>
        </nav>
    )
}
export {Navbar};