import { useCategory } from "../../../contexts";
import {Link} from "react-router-dom";
import "../style.css";

const CategoryItem=({category})=>{

    const {categoryName, categoryImg}=category;
    
    const {categoryDispatch}=useCategory();

    const handleCategoryItemSelection = (event) => {
		categoryDispatch({
			type: "SET_CATEGORY",
			payload: { selectedCategory: categoryName },
		});
	};


    return(
            <Link to={`/explore/`} 
                className=""
                onClick={handleCategoryItemSelection}>
                <div className="card-header m-2">
                    <img className="card-img" src={categoryImg} alt={`${category}`}/>
                    <h2 className="h-2 card-title">{categoryName}</h2>
                </div>
            </Link>
    );
}
export {CategoryItem};