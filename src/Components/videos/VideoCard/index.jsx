import { getFormattedViews } from "../../../utils";
import "./style.css";
import {BsThreeDotsVertical} from "react-icons/bs";
import { useState } from "react";
import { VideoOptions } from "../VideoOptions";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { useToast } from "react-toastify";


const VideoCard=({video})=>{

    const{
            _id:videoId,
            title:videoTitle,
            creator:videoCreator,
            description:videoDiscription,
            logo:videoLogo,
            views,
            dateAdded,
    } = video;
    const imgsrc=`https://i.ytimg.com/vi/${video._id}/mqdefault.jpg`

	const dateReleased = new Date(dateAdded)
		.toDateString()
		.substring(4)
		.split(" ", 4)
		.join(" ");
    const [isOpenOptions, setIsOpenOptions]=useState(false);
    const optionsHandler=()=>{
        setIsOpenOptions((prev)=>!prev)
    }
    return(

            <div className="video-card">
            <NavLink to={`/explore/${videoId}`} className="no-link">

                <div className="video-card-header">
                    <img src={imgsrc} alt={`${videoTitle} cover`} className="video-img"/>
                </div>
                </NavLink>
                <div className="video-card-body">
                    <img src={video.logo} class="badge-circle s creator-logo"/>
                    <div className="video-info">
                        <div class="video-title">{video.title}</div>
                        <div>{video.creator}</div>
                        <div>
                            {getFormattedViews(views)} 
                            <span className="views"> {dateReleased}</span>
                        </div>
                        
                        
                    </div>
                    <div className="icon-btn" onClick={optionsHandler}>
                        <BsThreeDotsVertical/>
                    </div>

                </div>
                {isOpenOptions && <VideoOptions/>}

            </div>

    );
}
export {VideoCard};