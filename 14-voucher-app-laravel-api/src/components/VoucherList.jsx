import React, { useRef } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { HiComputerDesktop, HiMagnifyingGlass } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";
import { Link, useFetcher } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import VoucherListRow from "./VoucherListRow";
import VoucherListSkeletonLoader from "./VoucherListSkeletonLoader";
import { set } from "react-hook-form";
import { debounce } from "lodash";
import { IoCloseCircleOutline } from "react-icons/io5";
import Pagination from "./Pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherList = () => {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef();

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/vouchers"
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);


  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   console.log(e.target.value);
  // };

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  const handleSearch = debounce((e) => {
    const searchValue = e.target.value;
    updateFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${searchValue}`);
  }, 500);

  const handleClearBtn = () => {
    setSearch((searchInputRef.current.value = ""));
  };

  return (
    <div>
      {/* Search & Add new product */}
      <div className="flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
              <HiMagnifyingGlass className="size-5 text-stone-500 dark:text-stone-400 " />
            </div>
            <input
              onChange={handleSearch}
              ref={searchInputRef}
              type="text"
              id="input-group-1"
              className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-[#ebc0fd] focus:border-[#ebc0fd] block w-full ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-[#ebc0fd] dark:focus:border-[#ebc0fd]"
              placeholder="Search Voucher"
            />
            {search && (
              <button
                onClick={handleClearBtn}
                className="absolute top-0 bottom-0 my-auto right-3"
              >
                <IoCloseCircleOutline className="text-red-600 size-5" />
              </button>
            )}
          </div>
        </div>
        <div>
          <Link
            to={"/sale"}
            className="flex justify-center items-center gap-3 text-white bg-[#ebc0fd] hover:bg-[#e7b5fc] focus:ring-4 focus:outline-none focus:ring-[#e4affa] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#ebc0fd] dark:hover:bg-[#ebc0fd] dark:focus:ring-[#e4affa]"
          >
            Create Sale
            <HiComputerDesktop />
          </Link>
        </div>
      </div>
      {/* Product List */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-stone-50 dark:bg-stone-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Voucher Id
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Email
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
            <tr className="w-full odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 hidden last:table-row">
              <td colSpan={5} className="px-6 py-4 text-center">
                There is no Voucher...
              </td>
            </tr>
            {isLoading ? (
              <VoucherListSkeletonLoader />
            ) : (
              data?.data?.map((voucher) => (
                <VoucherListRow key={voucher.id} voucher={voucher} />
              ))
            )}
          </tbody>
        </table>
      </div>

      {!isLoading && (
        <Pagination
          updateFetchUrl={updateFetchUrl}
          links={data.links}
          meta={data.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default VoucherList;
