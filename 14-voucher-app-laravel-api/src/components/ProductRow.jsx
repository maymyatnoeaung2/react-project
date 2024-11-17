import { data } from "autoprefixer";
import React, { useState } from "react";
import { GoTrash } from "react-icons/go";
import { TbEdit } from "react-icons/tb";
import useSWR, { useSWRConfig } from "swr";

import { mirage } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ShowDate from "./ShowDate";

mirage.register();

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/products/${id}`,
      { method: "DELETE" }
    );


    const json = await response.json();
    if (response.status === 200) {
      mutate(import.meta.env.VITE_API_URL + "/products");
      toast.success(json.message, { position: "top-right", duration: 3000 });

    }
    setIsDeleting(false);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end text-nowrap">
        <ShowDate date={created_at} />
      </td>

      <td className="flex justify-end px-6 py-4 gap-2">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link
            to={`/product/edit/${id}`}
            className="h-8 w-12 flex items-center justify-center text-sm  font-bold text-[#e29dff] bg-white border border-stone-200 rounded-s-lg hover:bg-stone-100 hover:text-red-700 focus:z-10 focus:ring-1 focus:ring-red-700 focus:text-red-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-red-500 dark:focus:text-white"
          >
            <TbEdit />
          </Link>
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="h-8 w-12 flex items-center justify-center text-sm font-bold text-[#e29dff] bg-white border border-stone-200 rounded-e-lg hover:bg-stone-100 hover:text-red-700 focus:z-10 focus:ring-1 focus:ring-red-700 focus:text-red-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-red-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-mirage size="40" speed="2.5" color="red"></l-mirage>
            ) : (
              <GoTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
