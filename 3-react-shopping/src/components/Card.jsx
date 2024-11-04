import React from "react";

const Card = ({ card }) => {
  return (
    <div className="border border-black p-5 grid grid-cols-6">
      <div className="col-span-1">
        <img src={card.product.image} alt="" className="h-16" />
      </div>
      <div className="col-span-3">
        <p className="mb-2">{card.product.title}</p>
        <p className="text-gray-500">Price ($ {card.product.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2">Quantity</p>
        <div className="flex gap-3 items-center">
          <button className="bg-black text-white px-2 pb-0.5">-</button>
          <p>{card.quantity}</p>
          <button className="bg-black text-white px-2 pb-0.5">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-end text-2xl font-bold mt-3">{card.cost}</p>
      </div>
    </div>
  );
};

export default Card;
