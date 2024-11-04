import React from "react";
import { useForm } from "react-hook-form";
import { json } from "react-router-dom";
import useSWR from "swr";
import useRecordStore from "../store/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());
const SaleForm = () => {
  const { isLoading, error, data } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const { addRecord, records, updateQuantityRecord } = useRecordStore();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const isExisted = records.find((record) => record.product.product_name === currentProduct.product_name);
    if (isExisted) {
      updateQuantityRecord(isExisted.id, data.quantity);
    } else {
      addRecord({
        product: currentProduct,
        quantity: data.quantity,
        createId_at: new Date().toISOString(),
        cost: data.quantity * currentProduct.price,
        id: Date.now(),
      });
    }
    reset();
  };

  return (
    <div className="p-5 rounded-lg bg-purple-100 mb-5">
      <form
        id="createRecordForm"
        className="block print:hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid md:grid-cols-4 gap-5 rounded p-3 ">
          <div className="col-span-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              {...register("product")}
              required
              id="productSelect"
              name="product"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e7b5fc] focus:border-[#e7b5fc] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e7b5fc] dark:focus:border-[#e7b5fc]"
            >
              <option value="">Select a product</option>
              {isLoading ? (
                <option>Loading...</option>
              ) : (
                data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="col-span-1">
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                {...register("quantity", { required: true })}
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${
                  errors.quantity
                    ? "focus:ring-red-600 focus:border-red-600 border-red-600 dark:border-red-600 dark:focus:ring-red-600 dark:focus:border-red-600"
                    : "focus:ring-[#e7b5fc] focus:border-[#e7b5fc] border-gray-300 dark:border-gray-600 dark:focus:ring-[#e7b5fc] dark:focus:border-[#e7b5fc]"
                }block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white `}
              />
            </div>
            {errors.quantity?.type === "required" && (
              <p className="text-red-500 text-sm">
                Quantity number is required
              </p>
            )}
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="w-full h-[70px]  flex justify-center items-center text-[#e29dff] hover:text-white border-2 border-[#e29dff] hover:bg-[#e29dff] focus:ring-4 focus:outline-[#e29dff] focus:ring-[#e7b5fc] font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-[#e7b5fc-400 dark:text-[#e7b5fc] dark:hover:text-white dark:hover:bg-[#e7b5fc] dark:focus:ring-[#e29dff] duration-300 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
