import React from "react";
import products from "../data/products";
import Container from "./Container";
import Card from "./Card";
import { Link } from "react-router-dom";
import cards from "../data/cards";

const CardSection = () => {


  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <div className="absolute bottom-10 left-0 w-full ">
          <Container>
            <div className="border-t border-black flex gap-10 justify-end py-5">
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="text-2xl font-bold">123</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Text(10%)</p>
                <p className="text-2xl font-bold"> 123</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Next Total</p>
                <p className=" text-2xl font-bold">123</p>
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
