import { CategoryList, Header} from "../../Components";
import { usePageTitle} from "../../custom-hooks";

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