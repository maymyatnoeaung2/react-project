// export default function App() {
//     const title = "Product Categories";
//     const categories = [
//       "All",
//       "Electronics",
//       "Jewelry",
//       "Men's clothing",
//       "Women's clothing",
//     ];
//     return (
//       <div id="category-section" className="p-5">
//         <p className="text-2xl text-gray-500 mb-3">{title}</p>
//         <div className="">
//           {categories.map((category) => (
//   <button className="border border-black py-2 px-4 me-3">{ category  }</button>
//           ))}
//         </div>
//       </div>
//     );
//   }

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <>
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
    </>
  );
};

export default App;
