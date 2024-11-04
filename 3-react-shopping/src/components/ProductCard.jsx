import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import cards from "../data/cards";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`product-detail/${id}`}
      className="border border-black p-3 flex flex-col items-start"
    >
      <img src={image} alt="" className="h-40 mb-3" />
      <p className="font-bold mb-3 line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end overflow-scroll category-button-group gap-3">
        <p className="text-sm text-stone-800 text-nowrap ">
          Price ( $ {price} )
        </p>
        {cards.find((card) => card.product.id === id) ? (
          <button className="bg-black text-white text-sm border border-stone-800 py-1 px-2 text-nowrap">
            Addes
          </button>
        ) : (
          <button className="text-sm border border-stone-800 text-stone-800 py-1 px-2 text-nowrap">
            Add Card
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
