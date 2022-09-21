import headerImage from "../../assets/images/cover.jpg";
import backgroundVideo from "../../assets/videos/back.mp4";
import {Link} from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import {FaAngleDoubleDown} from "react-icons/fa";
import "./style.css";

const Header=()=>{

    return(
        <header className="header">
            {/* <img src={backgroundVideo} 
                alt="Header hero" 
                className="img-responsive hero-img"
            >
            </img> */}
                
            <video autoPlay muted loop className="img-responsive hero-img">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            
            <div className="container hero-content
            flex-direction-col "
            // flex-align-start flex-justify-start  header-text
            
            >
                <h1 className="primary-color h-2 text-center">Watch Travel Stories with <span>Travel Tape</span></h1>
                <Link to="/explore" className="btn primary-btn text-center no-link h-4">
                    Stream Now <AiFillCaretRight className="text-center"/>
                </Link>
                <FaAngleDoubleDown className="down-slide-icon"/>
			</div>
        </header>

    )
}
export {Header};