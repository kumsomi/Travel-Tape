import "./App.css";
import {useLocation} from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { NavRoutes } from "./routes/NavRoutes";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "./contexts";

function App() {
  const{theme}=useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar className="nav-mode"/>
      <div className="mode">
        <NavRoutes/>
      <ToastContainer/>

      </div>
      <Footer className="footer-mode"/>
    </div>

  );
}

export default App;
