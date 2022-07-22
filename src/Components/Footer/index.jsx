import "./style.css"
import {FaHistory} from "react-icons/fa";
import {MdOutlineVideoLibrary} from "react-icons/md";
import {AiFillLike} from "react-icons/ai";
import {IoMdHome} from "react-icons/io";
import {MdOutlineExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
    <div className="footer h-2">
        <Link to="/">
            <IoMdHome className="icon" />
        </Link>
        <Link to="/explore">
            <MdOutlineExplore className="icon" />
        </Link>
        <Link to="/playlists">
            <MdOutlineVideoLibrary className="icon" />
        </Link>
        <Link to="/likes">
            <AiFillLike className="icon" />
        </Link>
        <Link to="/watchlater">
            <AiOutlineClockCircle className="icon" />
        </Link>
        <Link to="/history">
            <FaHistory className="icon" />
        </Link>
    </div>
    );
}
export {Footer};