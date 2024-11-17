import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import { pulsar } from "ldrs";
import toast from "react-hot-toast";
// import { data } from "autoprefixer";
import useSWR, { mutate, useSWRConfig } from "swr";

pulsar.register();

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductEditCard = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate } = useSWRConfig();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );


  const handleCreateProduct = async (data) => {

    setLoading(true);
    data.created_at = new Date().toISOString();


    const response = await fetch(
      import.meta.env.VITE_API_URL + `/products/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          product_name: data.product_name,
          price: data.price,
          created_at: data.created_at,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setLoading(false);
    if (data.back_to_product_list) {
      navigate("/product");
      mutate(import.meta.env.VITE_API_URL + "/products");
    }
    toast.success("Product update successfully!", {
      position: "top-right",
      duration: 2000,
    }
  );
  };

  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="text-3xl font-bold mb-3">Edit Product</h1>

      <p className="mb-10 text-stone-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, nostrum.
      </p>
      {isLoading ? (
        <div>
          {/* Skeleton loader for Product Name input */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-600">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </label>
            <div className="bg-gray-200 dark:bg-gray-700 h-10 w-full rounded-lg"></div>
          </div>

          {/* Skeleton loader for Product Price input */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-600">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </label>
            <div className="bg-gray-200 dark:bg-gray-700 h-10 w-full rounded-lg"></div>
          </div>

          {/* Skeleton loader for Make sure all field are correct checkbox */}
          <div className="mb-5">
            <div className="flex items-center">
              <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="ms-2 h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Skeleton loader for Back to product list checkbox */}
          <div className="mb-5">
            <div className="flex items-center">
              <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="ms-2 h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Skeleton loader for Cancel button */}
          <div className="flex gap-2 mb-5">
            <div className="inline-flex items-center justify-center w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>

            {/* Skeleton loader for Submit button */}
            <div className="inline-flex items-center justify-center w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit(handleCreateProduct)}>
          <div className="mb-5">
            <label
              htmlFor="first_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_name
                  ? "text-red-600 dark:text-red-600"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Product Name
            </label>
            <input
              {...register("product_name", {
                required: true,
              })}
              defaultValue={data?.data?.product_name}
              type="text"
              id="first_name"
              className={`bg-gray-50 border rounded-lg  text-gray-900 dark:placeholder-gray-400 text-sm  dark:bg-gray-700   dark:text-white  block w-full p-2.5  ${
                errors.product_name
                  ? "border-red-600 dark:border-red-600  focus:ring-red-600 focus:border-red-600  dark:focus:ring-red-600"
                  : "border-gray-300 dark:border-gray-600  focus:ring-[#e29dff] focus:border-[#ebc0fd]  dark:focus:ring-[#e29dff]"
              }`}
              placeholder="eg. Laptop"
            />
            {errors.product_name?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                Product name is required
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="last_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_name
                  ? "text-red-600 dark:text-red-600"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Product Price
            </label>
            <input
              {...register("price", {
                required: true,
              })}
              defaultValue={data?.data?.price}
              type="number"
              id="last_name"
              className={`bg-gray-50 border rounded-lg  text-gray-900 dark:placeholder-gray-400 text-sm  dark:bg-gray-700   dark:text-white  block w-full p-2.5  ${
                errors.price
                  ? "border-red-600 dark:border-red-600  focus:ring-red-600 focus:border-red-600  dark:focus:ring-red-600"
                  : "border-gray-300 dark:border-gray-600  focus:ring-[#e29dff] focus:border-[#ebc0fd]  dark:focus:ring-[#e29dff]"
              }`}
              placeholder="eg.500"
            />

            {errors.price?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                Product name is required
              </p>
            )}
          </div>
          <div className=" mb-5 ">
            <div className="flex items-center">
              <input
                {...register("all_correct")}
                required
                id="all_correct"
                type="checkbox"
                defaultValue
                className="w-4 h-4 text-[#e29dff] bg-gray-100 focus:ring-2 dark:bg-gray-700 border-gray-300 rounded focus:ring-[#ebc0fd] dark:focus:ring-[#e29dff] dark:ring-offset-gray-800  dark:border-gray-600"
              />
              <label
                htmlFor="all_correct"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Make sure all field are correct
              </label>
            </div>
          </div>
          <div className=" mb-5 ">
            <div className="flex items-center">
              <input
                {...register("back_to_product_list")}
                id="back_to_product_list"
                type="checkbox"
                checked
                defaultValue
                className="w-4 h-4 text-[#e29dff] bg-gray-100 focus:ring-2 dark:bg-gray-700 border-gray-300 rounded focus:ring-[#ebc0fd] dark:focus:ring-[#e29dff] dark:ring-offset-gray-800  dark:border-gray-600"
              />
              <label
                htmlFor="back_to_product_list"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Back to product list after saving
              </label>
            </div>
          </div>
          
   <Link
            to="/product"
            type="button"
            className="inline-flex justify-center items-center w-36 h-10 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#e29dff] focus:z-10 focus:ring-4 focus:ring-[#e29dff] dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex gap-1 justify-center items-center  w-36 h-10  text-white bg-[#ebc0fd] hover:bg-[#e7b5fc] focus:ring-4 focus:outline-none focus:ring-[#e29dff] font-medium rounded-lg text-sm  text-center dark:bg-[#ebc0fd] dark:hover:bg-[#ebc0fd] dark:focus:ring-[#e29dff]"
          >
            <span>Update Product</span>
            {loading && (
              <l-pulsar size="25" speed="1.75" color="white"></l-pulsar>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductEditCard;
