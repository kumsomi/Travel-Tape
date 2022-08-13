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
        padding: isActive ? "0.3rem" : "",
        border:isActive ? "1px solid white":"",
    });

    return(
    <div className="footer h-2" >
        <NavLink to="/" style={getActiveStyle} >
            <IoMdHome className="icon"/>
        </NavLink>
        <NavLink to="/explore" style={getActiveStyle}>
            <MdOutlineExplore className="icon" />
        </NavLink>
        <NavLink to="/playlists" style={getActiveStyle}>
            <MdOutlineVideoLibrary className="icon" />
        </NavLink>
        <NavLink to="/likes" style={getActiveStyle}>
            <AiFillLike className="icon" />
        </NavLink>
        <NavLink to="/watchlater" style={getActiveStyle}>
            <AiOutlineClockCircle className="icon" />
        </NavLink>
        <NavLink to="/history" style={getActiveStyle}>
            <FaHistory className="icon"  />
        </NavLink>
    </div>
    );
}
export {Footer};