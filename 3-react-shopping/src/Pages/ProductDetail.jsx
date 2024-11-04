import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);

  return (
    <>
      <Container>
      <Breadcrumb currentPageTitle="ProductDetail"/>

        <div className="border border-black  p-10 ">
          <div className="grid grid-cols-2">
            <div className="col-span-1 ">
              <img
                className="w-3/4 mx-auto"
                src={currentProduct.image}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-3 items-start">
              <h3 className="text-3xl font-bold"> {currentProduct.title}</h3>
              <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
                {currentProduct.category}
              </p>
              <p>{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate}></Rating>
              <div className="flex justify-between w-full items-center">
                <p>Price : {currentProduct.price}</p>
                <button className="text-sm border border-stone-800 text-stone-800 py-1 px-2 text-nowrap">
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
