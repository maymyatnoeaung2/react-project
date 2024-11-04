export default function App() {
  const title = "Product Categories";
  const categories = [
    "All",
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];
  return (
    <div id="category-section" className="p-5">
      <p className="text-2xl text-gray-500 mb-3">{title}</p>
      <div className="">
        {categories.map((category) => (
<button className="border border-black py-2 px-4 me-3">{ category  }</button>
        ))}
      </div>
    </div>
  );
}
