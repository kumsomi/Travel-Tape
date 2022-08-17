import { useRef, useState } from "react";
import { useVideos } from "../../contexts";
import {BsSortDownAlt} from "react-icons/bs";
import "./style.css";

const SortingOptionsList = () => {
	const { videosSortOption, videosDispatch } = useVideos();

	const [showSortingOptions, setShowSortingOptions] = useState(false);
	const sortingOptionsRef = useRef(null);

	const handleShowSortingOptionsChange = (event) =>
		setShowSortingOptions(
			(prevShowSortingOptions) => !prevShowSortingOptions
		);

	const handleSortingOptionChange = (option) =>
		videosDispatch({
			type: "SET_SORTING_OPTION",
			payload: { videosSortOption: option },
		});
    return(
        <div >
            <button className=" btn sort-btn"
                onClick={handleShowSortingOptionsChange}
                ref={sortingOptionsRef}
            >   
                Sort <BsSortDownAlt/>
            </button>
            {videosSortOption && 
                <button
                className="clear-btn"
                onClick={(e) => handleSortingOptionChange(null)}
                >
                    Clear Sort
                </button>
            }
            {showSortingOptions && 
                <div className="sorting-options">
                    <div 
                        className="sort-item"
                        onClick={(e) => handleSortingOptionChange("LATEST")}>
                        Latest upload date</div>
                    <div className="sort-item"
                        onClick={(e) => handleSortingOptionChange("OLDEST")}
                    >
                        Oldest upload date</div>
                </div>
            }
            
            
        </div>
    )
}
export {SortingOptionsList};