import React from "react";

const ProductListEmptyStage = () => {
  return (

      <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700">
        <td colSpan={5} className="px-6 py-4 text-center text-[#e29dff]">
          There is no product...
        </td>
      </tr>

  );
};

export default ProductListEmptyStage;
