import React from "react";
import products from "../data/products";
import Container from "./Container";
import Card from "./Card";
import { Link } from "react-router-dom";
import useCardStore from "../store/useCardStore";
import useProductStore from "../store/useProductStore";
// import cards from "../data/cards";
import emptyCardImg from "../assets/empty-card.svg";

const CardSection = () => {
  const { products } = useProductStore();
  const {cards} = useCardStore();


  const total = cards.reduce((pv, cv) => {
    const price = products.find((el) => el.id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const text = total * 0.05;

  const nextTotal = total + text;

  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        {cards.length === 0 ? (
          <img
            src={emptyCardImg}
            alt="empty"
            className="w-[200px] block mt mx-auto"
          />
        ) : (
          cards.map((card) => <Card key={card.id} card={card} />)
        )}

        <div className="absolute bottom-10 left-0 w-full ">
          <Container className="px-5">
            <div className="border-t border-black flex gap-10 justify-end py-5">
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="text-2xl font-bold">{total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Text(10%)</p>
                <p className="text-2xl font-bold"> {text.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Next Total</p>
                <p className=" text-2xl font-bold">{nextTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-end mb-5">
              <Link className="border border-black py-2 px-4 ">Order Now</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CardSection;
