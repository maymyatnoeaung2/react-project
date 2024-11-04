import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import { Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();
  const currentCategory = categories.find((el) => el.isActive === true);
  // console.log(currentCategory);

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-stone-600 mb-2">Available Product Lists</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products
            .filter((el) =>currentCategory.name === "All" || el.category === currentCategory.name)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
