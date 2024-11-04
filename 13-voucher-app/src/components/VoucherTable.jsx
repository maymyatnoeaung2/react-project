import React from 'react'
import useRecordStore from '../store/useRecordStore'
import VoucherTableRow from './VoucherTableRow'

const VoucherTable = () => {
const {records}= useRecordStore();
const total = records.reduce((a,b) =>a+b.cost,0)
const tax = total * 0.07
const netTotal = total + tax

  return (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">#</th>
          <th scope="col" className="px-6 py-3">Product name</th>
          <th scope="col" className="px-6 py-3 text-end">Price</th>
          <th scope="col" className="px-6 py-3 text-center">Quantity</th>
          <th scope="col" className="px-6 py-3 text-end">Cost</th>
          <th scope="col" className="px-6 py-3 text-end table-cell print:hidden">{""}</th>
        </tr>
      </thead>
      <tbody id="recordGroup">
       {records.length === 0 ? ( <tr className="hidden last:table-row border-b dark:border-gray-700">
          <th scope="row" colSpan={6} className="text-center px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
            There is no record yet! 
          </th>
        </tr>):records.map((record,index) => <VoucherTableRow key={index} record={record} index={index}/>)}
      </tbody>
      <tfoot>
        <tr className="border-b dark:border-gray-700">
          <th scope="row" colSpan={4} className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Total
          </th>
          <td className="px-6 text-end">{total.toFixed(2)}</td>
          <td className="px-6 text-end table-cell print:hidden" />
        </tr>
        <tr className="∂ border-b dark:border-gray-700">
          <th scope="row" colSpan={4} className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Tax (Vat 7%)
          </th>
          <td className="px-6 text-end">{tax.toFixed(2)}</td>
          <td className="px-6 text-end table-cell print:hidden" />
        </tr>
        <tr className="border-b dark:border-gray-700">
          <th scope="row" colSpan={4} className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            netTotal (THB)
          </th>
          <td className="px-6 text-end">{netTotal.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  </div>

  )
}

export default VoucherTable