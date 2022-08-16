import "./style.css"
import {FaHistory} from "react-icons/fa";
import {MdOutlineVideoLibrary} from "react-icons/md";
import {AiFillLike} from "react-icons/ai";
import {IoMdHome} from "react-icons/io";
import {MdOutlineExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer=()=>{
    const getActiveStyle = ({ isActive }) => ({
        // padding: isActive ? "0.3rem" : "",
        // border: isActive ? "1px solid white":"",
        color:isActive? "#564882":"",
    });

    return(
    <div className="footer h-2" >
        <NavLink to="/" style={getActiveStyle} className="icon" >
            <IoMdHome/>
            {/* <div className="h-6">home</div> */}
        </NavLink>
        <NavLink to="/explore" style={getActiveStyle} className="icon">
            <MdOutlineExplore  />
        </NavLink>
        <NavLink to="/playlists" style={getActiveStyle} className="icon">
            <MdOutlineVideoLibrary  />
        </NavLink>
        <NavLink to="/likes" style={getActiveStyle} className="icon">
            <AiFillLike  />
        </NavLink>
        <NavLink to="/watchlater" style={getActiveStyle} className="icon">
            <AiOutlineClockCircle  />
        </NavLink>
        <NavLink to="/history" style={getActiveStyle} className="icon">
            <FaHistory   />
        </NavLink>
    </div>
    );
}
export {Footer};