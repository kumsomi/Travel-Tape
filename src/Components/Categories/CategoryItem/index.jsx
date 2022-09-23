import { useCategory } from "../../../contexts";
import {Link} from "react-router-dom";
import "../style.css";
import {BsPlayFill} from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const CategoryItem=({category})=>{

    const {categoryName, categoryImg}=category;
    
    const {categoryDispatch}=useCategory();

    const handleCategoryItemSelection = (event) => {
		categoryDispatch({
			type: "SET_CATEGORY",
			payload: { selectedCategory: categoryName },
		});
	};

    const [isHover, setIsHover]=useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    };
    
    const handleMouseOut = () => {
        setIsHover(false);
    };

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 767.98px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 767.98px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
      
    let mql = window.matchMedia('(max-width: 991.98px)');
    return(
            <Link to={`/explore/`} 
                className=""
                onClick={handleCategoryItemSelection}>
                <div className="card-header m-2" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <img className="card-img" src={categoryImg} alt={`${category}`}/>
                    {/* <video autoPlay muted loop className="img-responsive hero-img">
                        <source src={backgroundVideo} type="video/mp4"/>
                    </video> */}
                    {isHover ? 
                        <div className="title-container">
                            <h2 className="h-2 card-title">{categoryName}<AiFillPlayCircle/></h2>
                        </div>
                        :(matches&& <div className="title-container">
                            <h2 className="h-2 card-title">{categoryName}<AiFillPlayCircle/></h2>
                        </div>
                        )
                     }  
                    {}
                </div>
            </Link>
    );
}
export {CategoryItem};