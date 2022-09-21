import { useCategory } from "../../../contexts";
import { Loader } from "../../Loader";
import { CategoryItem } from "../CategoryItem";
// import { useCategory } from "../../contexts/category-context";
import "../style.css";

const CategoryList=()=>{
    const {category, categoryLoading, categoryError } = useCategory();
    return(
        <div className="category-list">
            <h2 className="h-2 primary-color category-heading">
                Take a break and be a part of Travel Tape
            </h2>
            <h4 className="h-3 category-heading">Choose your category type</h4>
            <div className="category-listing-item">
            {categoryLoading ? (
				<Loader />
			) : categoryError ? (
				<h3 className="error-color">{categoryError}</h3>
			) : (
                <div className="category-cards">
                    {category.map((item)=>(
                        // <>{console.log(category)}
                    <CategoryItem category={item} key={item._id}/>
                        // </>
                    ))}
                </div>
            )}
            </div>
        </div>
    )
}
export {CategoryList};