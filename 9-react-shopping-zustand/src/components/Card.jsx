import React from "react";
import useProductStore from "../store/useProductStore";
import useCardStore from "../store/useCardStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Card = ({ card: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeQuantity } = useCardStore();

  const product = products.find((el) => el.id === productId);

  const cost = quantity * product.price;

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeQuantity(id);
          toast.success("Item remove successfully");
        }
      });
    }
  };
  return (
    <div className="border border-black p-5 grid grid-cols-6 ">
      <div className="col-span-1">
        <img src={product.image} alt="" className="h-16" />
      </div>
      <div className="col-span-3">
        <p className="mb-2">{product.title}</p>
        <p className="text-gray-500">Price ($ {product.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2">Quantity</p>
        <div className="flex gap-3 items-center">
          <button
            onClick={handleDecrease}
            className="bg-black text-white px-2 pb-0.5 select-none "
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleIncrease}
            className="bg-black text-white px-2 pb-0.5 select-none "
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-end text-2xl font-bold mt-3">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
