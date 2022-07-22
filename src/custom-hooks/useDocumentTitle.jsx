import { useEffect } from "react"

const usePageTitle=(title)=>{
    useEffect(()=>{
        document.title=title;
    });
}
export {usePageTitle};