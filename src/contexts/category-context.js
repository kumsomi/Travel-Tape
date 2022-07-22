import { createContext, useEffect, useReducer, useContext } from "react";
import { categoryReducerFunction } from "../reducers";
import axios from "axios";
const initialCategories={
    category:[],
    categoryError:null,
    categoryLoading:true,
    selectedCategory:"All"
}
const CategoryContext=createContext(initialCategories);


const CategoryProvider=({children})=>{

    const [categoryState, categoryDispatch]=useReducer(categoryReducerFunction, initialCategories);

    const getCategoryService = async()=>{

        try{
            const{data:{categories}} = await axios.get('/api/categories');
            categoryDispatch({type:"CATEGORY_SUCCESS", payload:{categories}});
        }
        catch(error){
            categoryDispatch({type:"CATEGORY_ERROR"});
        }
    }
    useEffect(()=>{ getCategoryService()},[]);

    return(
        <CategoryContext.Provider value={{...categoryState, categoryDispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}
const useCategory =()=> useContext(CategoryContext);

export {useCategory, CategoryProvider};