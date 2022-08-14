import headerImage from "../../assets/images/cover.jpg";
import {Link} from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import "./style.css";

const Header=()=>{

    return(
        <header className="header">
            <img src={headerImage} 
                alt="Header hero" 
                className="img-responsive hero-img"
            >
            </img>
            
            <div className="container hero-content flex-direction-col flex-align-start flex-justify-start  header-text" >
                <h1 className="primary-color h-2">Watch Travel Stories with <span>Travel Tape</span></h1>
                <Link to="/explore" className="btn primary-btn text-center no-link h-4">
                    Stream Now <AiFillCaretRight className="text-center"/>
                </Link>
			</div>
        </header>

    )
}
export {Header};