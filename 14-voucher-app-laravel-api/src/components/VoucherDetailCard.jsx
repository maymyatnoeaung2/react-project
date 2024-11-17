import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import printJS from 'print-js';
import  html2pdf  from "html2pdf.js";
import { parse } from "postcss";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherDetailCard = () => {
  const id = useParams().id;
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );

  const handlePrint = () => {
    printJS({
      printable:"printArea",
      type: 'html',
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      ],
    });
  };

  const pdfRef = useRef();
  const handleDownloadPDF = () => {
    const element = pdfRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: 'document.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' },
      })
      .save();
  };

  return isLoading ? (
    console.log("Loading...")
  ) : (
    <div className="flex justify-start items-start gap-10">
      <div id="printArea"  ref={pdfRef} className=" bg-white shadow-lg rounded-lg ">
        <div className="flex items-center justify-between px-6 py-2 ">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">INVOICE</h1>
            <p className="font-medium text-gray-600">{data?.data?.voucher_id}</p>
          </div>
          <div className="text-end ">
            <p className="text-sm text-gray-800 font-bold mb-1">Invoice to</p>
            <p className="text-sm text-gray-600 mb-1">{data?.data?.customer_name}</p>
            <p className="text-xs text-gray-600 mb-1">Date: {data?.data?.sale_date}</p>
          </div>
        </div>

        <div className="px-6 py-8">
          <table className="w-full">
            <thead className="">
              <tr className="border-b-2 border-gray-400 ">
                <th className="text-left text-sm pb-4">No</th>
                <th className="text-left text-sm pb-4">Description</th>
                <th className="text-center text-sm pb-4">Qty</th>
                <th className="text-right text-sm pb-4"> Price</th>
                <th className="text-right text-sm pb-4">Total</th>
              </tr>
            </thead>
            <tbody className="">
              {data?.data?.records?.map((record, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="text-sm py-3">{index + 1}.</td>
                  <td className="text-sm py-3">
                    {record.product.product_name}
                  </td>
                  <td className="text-center text-sm py-3">{record.quantity}</td>
                  <td className="text-right text-sm py-3">
                    {parseFloat(record.cost).toFixed(2)}
                  </td>
                  <td className="text-right text-sm py-3">
                    {parseFloat(record.cost).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className=" border-gray-200">
                <th colSpan="4" className="text-end text-sm pt-2 pr-5 text-gray-700 ">
                  Total
                </th>
                <th className="text-right text-sm pt-2 text-gray-700">
                  {parseFloat(data?.data?.total).toFixed(2)} $
                </th>
              </tr>
              <tr className=" border-gray-200">
                <th colSpan="4" className="text-end text-sm pr-5 text-gray-700">
                  Tax
                </th>
                <th className="text-right text-sm text-gray-700">{parseFloat(data?.data?.tax).toFixed(2)}$</th>
              </tr>
              <tr className=" border-gray-200">
                <th colSpan="4" className="text-end text-sm pr-5 text-gray-700">
                  Net Total
                </th>
                <th className="text-right text-sm text-gray-700">
                  {parseFloat(data?.data?.net_total).toFixed(2)}$
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className=" flex items-start justify-between px-6 py-2 text-sm">
          <div className="w-full text-start">
            <h3 className="font-bold mb-1">Payment Transfer to</h3>
            <div className="text-sm">Kpay, Wave : 0934859376</div>
            <div className="text-sm">KBZ Bank : 4537928374092140</div>
            <div className="text-sm">AYA bank : 0934859376</div>
          </div>
          <div className="text-end w-full">
            <h3 className="font-bold mb-1">MMS IT</h3>
            <div className="text-sm">48,1st Floor,Shan Kone St.</div>
            <div className="text-sm">+959.250-251-251</div>
            <div className="text-sm">enquirty@mms-it.com</div>
          </div>
        </div>

        <div className="px-6 py-4  text-center">
          <p className=" border-t-2 pt-4 border-gray-400 text-sm text-gray-600">
            Thank you for choosing us!
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 items-center">
        <button onClick={handlePrint}
          type="button"
          className=" inline-flex gap-1 justify-center items-center  w-40 h-10  text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm  text-center bg-[#ebc0fd] hover:bg-[#e7b5fc]   focus:ring-[#e29dff]  dark:bg-[#ebc0fd] dark:hover:bg-[#ebc0fd] dark:focus:ring-[#e29dff]"
        >
          <span className="text-nowrap">Print Voucher</span>
        </button>
        <button onClick={handleDownloadPDF}
          type="button"
          className=" inline-flex gap-1 justify-center items-center  w-40 h-10  text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm  text-center bg-[#ebc0fd] hover:bg-[#e7b5fc]   focus:ring-[#e29dff]  dark:bg-[#ebc0fd] dark:hover:bg-[#ebc0fd] dark:focus:ring-[#e29dff]"
        >
          <span className="text-nowrap">Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default VoucherDetailCard;
