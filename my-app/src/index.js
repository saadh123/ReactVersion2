import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//the point of index.js is to RENDER into the DOM.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
