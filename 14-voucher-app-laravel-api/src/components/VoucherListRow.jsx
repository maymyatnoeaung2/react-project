import React, { useState } from "react";
import { GoTrash } from "react-icons/go";
import { TbEdit } from "react-icons/tb";
import ShowDate from "./ShowDate";
import { mutate, useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { mirage } from "ldrs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) => {
  const { mutate } = useSWRConfig();
  mirage.register();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/vouchers/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success("Sale deleted successfully");
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
    setIsDeleting(false);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {voucher_id}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>
      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={sale_date} />
      </td>

      <td className="px-6 py-4 text-end ">
        <div className="rounded-md flex items-center justify-end">
          <Link
            to={`/voucher/detail/${id}`}
            type="button"
            className="h-8 w-12 flex justify-center items-center rounded-s-lg text-sm font-bold text-[#e4affa] bg-white border border-stone-200  hover:bg-stone-100 hover:text-red-700 focus:z-10   dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700  "
          >
            <FaArrowRightLong />
          </Link>
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="h-8 w-12 flex justify-center items-center rounded-e-lg text-sm font-bold text-[#e4affa] bg-white border border-stone-200  hover:bg-stone-100 hover:text-red-700 focus:z-10   dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700  "
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

export default VoucherListRow;
