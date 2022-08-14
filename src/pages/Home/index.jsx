import { CategoryList, Header} from "../../Components";
import { usePageTitle, useToast} from "../../custom-hooks";


const Home=()=>{
    usePageTitle('Travel Tape | Home');
    // const {showToast}=useToast();
    return(
        <div>
            <Header/>
            <CategoryList/>
        </div>
    )
}
export {Home};