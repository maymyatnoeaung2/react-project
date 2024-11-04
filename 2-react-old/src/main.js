import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";



// const root = document.querySelector("#root");

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-gray-500", "text-2xl","my-2");
// root.append(title);

// const categoriesButton = (categoryName) => {
//   const button = document.createElement("button");
//   button.classList.add("border","border-black","px-4","py-2","me-2")
//   button.innerText = categoryName;
//   return button
// };

// categories.forEach((category) => {
//   root.append(categoriesButton(category))
// });

// const root = document.querySelector("#root")

// const app = createElement("div",{id:"category-section", className:"p-5"},createElement("p",{className:"text-gray-500 text-2xl mb-3"},"Product Categories"),createElement("div",null,...categories.map((category) => 
// createElement("button",{className:"border border-black me-3 py-2 px-4"},category))));

// console.log(app);

createRoot(root).render(App())
