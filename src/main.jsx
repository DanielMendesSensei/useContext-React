import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// import { ThemeProvider } from "./context/ThemeContext.jsx";
// import App from "./App.jsx";
// import Home from "./pages/Home.jsx";
import Exemples from "./pages/Exemples/Exemples";
import { CountProvider } from "./context/CountContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    {/* <App /> */}
    {/* <Home /> */}
    {/* </ThemeProvider> */}
    <CountProvider>
      <Exemples />
    </CountProvider>
  </React.StrictMode>
);
