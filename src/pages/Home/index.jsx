// import { useToast } from "react-toastify";
// import { toast, ToastContainer} from "react-toastify";
import { CategoryList, Header} from "../../Components";
import { usePageTitle, useToast} from "../../custom-hooks";
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.minimal.css';

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