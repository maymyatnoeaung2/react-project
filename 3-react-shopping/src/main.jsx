import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routers/router";


const root = document.getElementById("root");



// createRoot(root).render(App())
createRoot(root).render(<RouterProvider router={router} />);
