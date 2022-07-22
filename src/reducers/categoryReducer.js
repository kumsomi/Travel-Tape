const categoryReducerFunction=(prevCategoryState,{type,payload})=>{

    switch(type){
        case 'CATEGORY_SUCCESS': 
            return {...prevCategoryState,
                category:payload.categories, 
                categoryError:null,
                categoryLoading:false};
        case 'CATEGORY_ERROR':
            return {...prevCategoryState, 
                categoryError:"Categories could not be loaded. Please try again later.",
                categoryLoading:false};
        case 'SET_CATEGORY':
            return {...prevCategoryState, 
                selectedCategory:payload.selectedCategory};
        default:
            throw new Error("unknown action type.");
    }
}

export {categoryReducerFunction};