import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const div = document.createElement("div");
div.detAttribute("id", "root");

div.innerHTML = "<h1>Hello</h1>";

const body = document.body;

body.appendChild(div);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
