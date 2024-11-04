import React from "react";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductList = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

// {isLoading ? console.log("Loading...") : console.log(data)}

  return (
    <div>
      {/* Search & Add new product */}
      <div className="flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
              <HiMagnifyingGlass className="w-4 h-4 text-stone-500 dark:text-stone-400 " />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-[#ebc0fd] focus:border-[#ebc0fd] block w-full ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-[#ebc0fd] dark:focus:border-[#ebc0fd]"
              placeholder="Search for products"
            />
          </div>
        </div>
        <div>
          <Link to="/product/create" className="flex justify-center items-center gap-3 text-white bg-[#ebc0fd] hover:bg-[#e7b5fc] focus:ring-4 focus:outline-none focus:ring-[#e29dff] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#ebc0fd] dark:hover:bg-[#ebc0fd] dark:focus:ring-[#e4affa]">
            Add new Product
            <FaPlus />
          </Link>
        </div>
      </div>
      {/* Product List */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-stone-50 dark:bg-stone-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                CREATED AT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data.map((product) => <ProductRow key={product.id} product={product}/>)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
