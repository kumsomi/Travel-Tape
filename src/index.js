import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider, CategoryProvider } from "./contexts";
// , VideosProvider
// import { VideosProvider } from "./contexts";

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <CategoryProvider>
          <App/>
      </CategoryProvider>
      </AuthProvider>   
    </BrowserRouter>
  </React.StrictMode>,
);
