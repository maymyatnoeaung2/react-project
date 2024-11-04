import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCardStore from "../store/useCardStore";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { cards, addCard } = useCardStore();

  const { productSlug } = useParams();
  console.log(productSlug);
  // console.log(productId);
  const currentProduct = products.find((product) => product.slug == productSlug);
  const cardProduct = cards.find((el) => el.id === currentProduct.id);
  // console.log(cardProduct);

  // console.log(currentProduct.id);

  const handleAddCardBtn = () => {
    const newCard = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };

    addCard(newCard);
  };

  return (
    <>
      <Container className="px-5">
        <Breadcrumb currentPageTitle="ProductDetail" />

        <div className="border border-black  p-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="col-span-1 ">
              <img
                className="h-[200px] md:w-3/4 block md:h-auto md:mx-auto mb-5 md:mb-0"
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
                {cards.find((el) => el.productId === currentProduct.id) ? (
                  <button className="text-sm border border-stone-800 bg-stone-800 py-1 px-2 text-nowrap text-white ">
                    Added
                  </button>
                ) : (
                  <button
                    onClick={handleAddCardBtn}
                    className="text-sm border border-stone-800 text-stone-800 py-1 px-2 text-nowrap "
                  >
                    Add Card
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
