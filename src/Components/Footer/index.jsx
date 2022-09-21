import "./style.css"
import {FaHistory} from "react-icons/fa";
import {MdOutlineVideoLibrary} from "react-icons/md";
import {AiFillLike} from "react-icons/ai";
import {IoMdHome} from "react-icons/io";
import {MdOutlineExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {GrClose} from "react-icons/gr";
import { useState } from "react";
const Footer=()=>{
    const getActiveStyle = ({ isActive }) => ({
        // padding: isActive ? "0.3rem" : "",
        // border: isActive ? "1px solid white":"",
        color:isActive? "#564882":"",
    });
    const {showFooterText, setShowFooterText}=useState(false);
    
    const handleChangeFooterText=()=>{
        setShowFooterText(prev=>!prev);
    }
    const [isHover, setIsHover]=useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    };
    
    const handleMouseOut = () => {
        setIsHover(false);
    };
    return(
    <div className={isHover?`footer-with-text h-2`:`footer h-2`} onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
         
        
        <NavLink to="/" style={getActiveStyle} className="icon no-link footer-text-container">
            <IoMdHome className="h-3" />
            {isHover &&<span className=" h-3 footer-text">Home</span>}
        </NavLink>
        <NavLink to="/explore" style={getActiveStyle} className="icon no-link footer-text-container">
            <MdOutlineExplore className="h-3"/>
            {isHover && <span className=" h-3 footer-text">Explore</span>}
        </NavLink>
        {/* <div className="user-features"> */}
        <NavLink to="/playlists" style={getActiveStyle} className="icon no-link footer-text-container" >
            <MdOutlineVideoLibrary  className="h-3"/>
            {isHover &&<span className=" h-3 footer-text">Playlist</span>}
        </NavLink>
        <NavLink to="/likes" style={getActiveStyle} className="icon no-link footer-text-container">
            <AiFillLike  className="h-3"/>
            {isHover &&<span className=" h-3 footer-text">Likes</span>}
        </NavLink>
        <NavLink to="/watchlater" style={getActiveStyle} className="icon no-link footer-text-container">
            <AiOutlineClockCircle  className="h-3"/>
            {isHover &&<span className=" h-3 footer-text">Watch Later</span>}
        </NavLink>
        <NavLink to="/history" style={getActiveStyle} className="icon no-link footer-text-container">
            <FaHistory className="h-3"/>
            {isHover && <span className=" h-3 footer-text">History</span>}
        </NavLink>
        {/* </div> */}
    </div>
    );
}
export {Footer};