import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(root).render(app);
