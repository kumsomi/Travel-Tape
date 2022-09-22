import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialTheme={theme:'dark'};
const ThemeContext=createContext(initialTheme);
const {Provider}=ThemeContext;
const ThemeProvider=({children})=>{
    const [theme, setTheme]=useState(localStorage.getItem('travel-tape-theme')|| 'dark');
    return <Provider value={{theme, setTheme}}>
        {children}
    </Provider>
}
const useTheme=()=> useContext(ThemeContext);
export {ThemeProvider, useTheme};