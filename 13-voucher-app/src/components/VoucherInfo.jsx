import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { pulsar } from "ldrs";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../store/useRecordStore";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

pulsar.register();

const VoucherInfo = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { records, restRecord } = useRecordStore();

  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const netTotal = total + tax;
    const currentVoucher = { ...data, records, total, tax, netTotal };
    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json",
      },
    });



    reset();
    restRecord();
    toast.success("Voucher created successfully");
    setIsSending(false);
  };

  function generateInvoiceNumber() {
    const date = new Date();

    // Get the current date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    // Generate a random four-digit number (you can replace this with a sequence from a database)
    const randomNum = String(Math.floor(Math.random() * 10000)).padStart(
      4,
      "0"
    );

    // Combine date and random number into the invoice number
    return `INV-${year}${month}${day}-${randomNum}`;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="mb-5">
            <label
              htmlFor="voucher_id"
              className={`block mb-2 text-sm font-medium ${
                errors.voucher_id
                  ? "text-red-600 dark:text-red-600"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Voucher ID
            </label>
            <input
              {...register("voucher_id", {
                required: true,
              })}
              defaultValue={generateInvoiceNumber()}
              type="text"
              id="voucher_id"
              className={`bg-gray-50 border rounded-lg  text-gray-900 dark:placeholder-gray-400 text-sm  dark:bg-gray-700   dark:text-white  block w-full p-2.5  ${
                errors.voucher_id
                  ? "border-red-600 dark:border-red-600  focus:ring-red-600 focus:border-red-600  dark:focus:ring-red-600"
                  : "border-gray-300 dark:border-gray-600  focus:ring-[#e29dff] focus:border-[#ebc0fd]  dark:focus:ring-[#e29dff]"
              }`}
            />
            {errors.voucher_id?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                Voucher ID is required
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="customer_name"
              className={`block mb-2 text-sm font-medium ${
                errors.customer_name
                  ? "text-red-600 dark:text-red-600"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Customer Name
            </label>
            <input
              {...register("customer_name", {
                required: true,
              })}
              type="text"
              id="customer_name"
              className={`bg-gray-50 border rounded-lg  text-gray-900 dark:placeholder-gray-400 text-sm  dark:bg-gray-700   dark:text-white  block w-full p-2.5  ${
                errors.customer_name
                  ? "border-red-600 dark:border-red-600  focus:ring-red-600 focus:border-red-600  dark:focus:ring-red-600"
                  : "border-gray-300 dark:border-gray-600  focus:ring-[#e29dff] focus:border-[#ebc0fd]  dark:focus:ring-[#e29dff]"
              }`}
              placeholder="eg. May Myat Noe Aung"
            />
            {errors.customer_name?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                Customer Name is required
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="customer_email"
              className={`block mb-2 text-sm font-medium ${
                errors.customer_email
                  ? "text-red-600 dark:text-red-600"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Customer Email
            </label>
            <input
              {...register("customer_email", {
                required: true,
              })}
              type="text"
              id="customer_email"
              className={`bg-gray-50 border rounded-lg  text-gray-900 dark:placeholder-gray-400 text-sm  dark:bg-gray-700   dark:text-white  block w-full p-2.5  ${
                errors.customer_email
                  ? "border-red-600 dark:border-red-600  focus:ring-red-600 focus:border-red-600  dark:focus:ring-red-600"
                  : "border-gray-300 dark:border-gray-600  focus:ring-[#e29dff] focus:border-[#ebc0fd]  dark:focus:ring-[#e29dff]"
              }`}
              placeholder="eg. mmna@gmail.com"
            />
            {errors.customer_email?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                Customer Email is required
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="sale_date"
              className={`block mb-2 text-sm font-medium ${
                errors.sale_date
                  ? "text-red-600 dark:text-red-600"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Sale Date
            </label>
            <input
              {...register("sale_date", {
                required: true,
              })}
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              // defaultChecked={new Date().toLocaleDateString().replaceAll("/","-")}
              id="sale_date"
              className={`bg-gray-50 border rounded-lg  text-gray-900 dark:placeholder-gray-400 text-sm  dark:bg-gray-700   dark:text-white  block w-full p-2.5  ${
                errors.sale_date
                  ? "border-red-600 dark:border-red-600  focus:ring-red-600 focus:border-red-600  dark:focus:ring-red-600"
                  : "border-gray-300 dark:border-gray-600  focus:ring-[#e29dff] focus:border-[#ebc0fd]  dark:focus:ring-[#e29dff]"
              }`}
              // placeholder="V123123"
            />
            {errors.sale_date?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">Sale Date is required</p>
            )}
          </div>
        </div>
      </form>
      <SaleForm />
      <VoucherTable />
      <div className=" flex items-center justify-end gap-3">
        <div className=" ">
          <div className="flex items-center">
            <input
              {...register("all_correct")}
              id="all_correct"
              type="checkbox"
              form="infoForm"
              required
              defaultValue
              className={`w-4 h-4  bg-gray-100 dark:bg-gray-700 focus:ring-2  border-gray-300 rounded ${
                errors.all_correct
                  ? "focus:ring-red-600 dark:focus:ring-red-600 text-red-600 dark:ring-offset-gray-800  dark:border-gray-600"
                  : "focus:ring-[#ebc0fd] dark:focus:ring-[#e29dff] text-[#e29dff] dark:ring-offset-gray-800  dark:border-gray-600"
              } `}
            />
            <label
              htmlFor="all_correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Make sure all field are correct
            </label>
          </div>
          <div className="">
            {errors.all_correct?.type === "required" && (
              <p className="text-red-600 text-sm mt-1 ">
                Please, check this box if you want to proceed
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          form="infoForm"
          className="mt-auto inline-flex gap-1 justify-center items-center  w-40 h-10  text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm  text-center bg-[#ebc0fd] hover:bg-[#e7b5fc]   focus:ring-[#e29dff]  dark:bg-[#ebc0fd] dark:hover:bg-[#ebc0fd] dark:focus:ring-[#e29dff]"
        >
          <span className="text-nowrap">Confirm Voucher</span>
          {isSending && (
            <l-pulsar size="25" speed="1.75" color="white"></l-pulsar>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;
