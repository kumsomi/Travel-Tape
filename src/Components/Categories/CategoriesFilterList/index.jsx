import React from "react";
import { v4 as uuid } from "uuid";
import "./style.css";
import { useCategory } from "../../../contexts";

const CategoryFiltersList = () => {
	const { category, categoryDispatch, selectedCategory } =
		useCategory();
    
	const handleCategoryChange = (categoryName) => {
		categoryDispatch({
			type: "SET_CATEGORY",
			payload: { selectedCategory: categoryName },
		});
	};

	const categoryMapping = [
		{ _id: uuid(), categoryName: "All" },
		...category,
	].map(({ categoryName, _id }) => (
		<button
			className={`${
				selectedCategory === categoryName
					? "category-btn selected-category"
					: "category-btn "
			}`}
			key={_id}
			onClick={(e) => handleCategoryChange(categoryName)}
		>
			<span className="badge badge-primary round-pill px-1 text-sm py-0-25">
			    {categoryName}
                {/* {console.log(categoryName)} */}
			</span>
		</button>
	));

	return (
		<section className="category-list flex-row flex-align-center flex-justify-start flex-wrap">
			{categoryMapping}
		</section>
	);
};

export { CategoryFiltersList };