import { useCategory } from "../../../contexts";
import {Link} from "react-router-dom";
import "../style.css";
import { useState } from "react";

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
    

    return(
            <Link to={`/explore/`} 
                className=""
                onClick={handleCategoryItemSelection}>
                <div className="card-header m-2" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <img className="card-img" src={categoryImg} alt={`${category}`}/>
                    {isHover && 
                        <div className="title-container">
                            <h2 className="h-2 card-title">{categoryName}</h2>
                        </div>
                    }
                </div>
            </Link>
    );
}
export {CategoryItem};