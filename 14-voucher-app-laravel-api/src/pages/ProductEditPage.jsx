import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from '../components/Container'
import ProductEditCard from "../components/ProductEditCard";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Edit Product"}
          Links={[{ path: "/product", title: "Product Module" }]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductEditPage;
