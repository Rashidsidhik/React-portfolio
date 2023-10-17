import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/landing/hero.css";
import "./pages/landing/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/resume/resume.css";
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";
import ThemeContextProvider from './contexts/ThemeContext';
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "./assets/font-awesome/css/all.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
