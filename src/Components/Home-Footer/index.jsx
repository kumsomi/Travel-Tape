import "./style.css";
import {FaGithubSquare, FaTwitterSquare, FaLinkedin, FaHeart} from "react-icons/fa";

const HomeFooter=()=>{
    return(
        <div className="home-footer">
            <h3 className="h-4">Made with <FaHeart/> by Kum Somi </h3>
            <div className="flex home-footer-links" >
                <a href="https://github.com/KumSomi">
                    <FaGithubSquare/> github
                </a>
                <a href="https://twitter.com/somi_kaushik">
                    <FaTwitterSquare/>twitter
                </a>
                <a href="https://www.linkedin.com/in/kum-somi-25aa8a152/">
                    <FaLinkedin/>linkedin
                </a>
            </div>    
        </div>
    );
}
export {HomeFooter};