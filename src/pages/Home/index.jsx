import { CategoryList, Footer, Header, Navbar } from "../../Components";
import { usePageTitle } from "../../custom-hooks";
const Home=()=>{
    usePageTitle('Travel Tape | Home');
    return(
        <div>
            <Header/>
            <CategoryList/>
        </div>
    )
}
export {Home};