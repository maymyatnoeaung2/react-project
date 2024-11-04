import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = () => {
  const response = fetch("https://fakestoreapi.com/products/1");
  response.then((res) => res.json()).then((data) => console.log(data));
};

fetchBtn.addEventListener("click", handleFetchBtn);
