import React from "react";
import Rating from "./Rating";
import { Link, Navigate, useNavigate } from "react-router-dom";
import cards from "../data/cards";
import useCardStore from "../store/useCardStore";
import useProductStore from "../store/useProductStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  const { cards, addCard } = useCardStore();
  const { products } = useProductStore();
  const navigate = useNavigate();

  const handleAddCardBtn = (event) => {
    event.stopPropagation()
    const newCard = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCard(newCard);
  };

  const handleOpenDetail = () => {
    navigate(`product-detail/${slug}`);
  };

const handleAddedBtn = (event) => {
  event.stopPropagation()
  toast.success("Item is already in My Card")
  
}

  //   to={`product-detail/${id}`}

  return (
    <div
      onClick={handleOpenDetail}
      className="border border-black p-3 flex flex-col items-start"
    >
      <img src={image} alt="" className="h-40 mb-3" />
      <p className="font-bold mb-3 line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end overflow-scroll category-button-group gap-3">
        <p className="text-sm text-stone-800 text-nowrap ">
          Price ( $ {price} )
        </p>
        {cards.find((card) => card.productId === id) ? (
          <button onClick={handleAddedBtn} className="bg-black text-white text-sm border border-stone-800 py-1 px-2 text-nowrap">
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCardBtn}
            className="text-sm border border-stone-800 text-stone-800 py-1 px-2 text-nowrap"
          >
            Add Card
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
