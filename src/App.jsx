import "./App.css";
import {useLocation} from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { NavRoutes } from "./routes/NavRoutes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const {pathname} = useLocation();
  return (
    <div className="app">
      <Navbar className="nav-mode"/>
      <div className="mode">
        <ToastContainer />
        <NavRoutes/>
      </div>
      <Footer className="footer-mode"/>
    </div>

  );
}

export default App;
