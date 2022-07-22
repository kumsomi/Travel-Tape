import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { makeServer } from "./server";
import { CategoryProvider } from "./contexts";
import { VideosProvider } from "./contexts";

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <VideosProvider>
        <App/>
     </VideosProvider>
    </CategoryProvider>   
    </BrowserRouter>
  </React.StrictMode>,
  // document.getElementById("root")
);
