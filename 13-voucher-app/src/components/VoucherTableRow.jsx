import React from "react";
import useRecordStore from "../store/useRecordStore";
import toast from "react-hot-toast";

const VoucherTableRow = ({
  record: {
    product: { product_name, price },
    quantity,
    cost,
    id,
  },
  index,
}) => {
  const { deleteRecord, updateQuantityRecord } = useRecordStore();

  const handleDeleteBtn = () => {
    deleteRecord(id);
    toast.success("Remove Successfully!");
  };

  const handleIncreaseBtn = () => {
    updateQuantityRecord(id, 1);
  };

  const handleDecreeBtn = () => {
    updateQuantityRecord(id, -1);
  };

  return (
    <tr className="group record-row odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 group-hover border-b dark:border-gray-700">
      <td className="record-product-price px-6 text-start"> {index + 1}</td>

      <th
        scope="row"
        className="record-product-name px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="record-product-price px-6 text-end">{price}</td>
      <td className="px-6 text-center">
        <button
          onClick={handleDecreeBtn}
          className="quantity-subtract p-1 opacity-0 group-hover:opacity-100 active:scale-90 duration-300 ease-in-out"
        >
          <svg
            className="pointer-events-none"
            height="15px"
            width="15px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <rect
                x="10.199"
                y="213.021"
                style={{ fill: "#e29dff" }}
                width="491.602"
                height="85.959"
              />
              <g>
                <path
                  style={{ fill: "#e29dff" }}
                  d="M501.801,309.177H10.199C4.566,309.177,0,304.61,0,298.977v-85.955 c0-5.633,4.566-10.199,10.199-10.199h491.602c5.632,0,10.199,4.566,10.199,10.199v85.955 C512,304.61,507.433,309.177,501.801,309.177z M20.398,288.778h471.203v-65.556H20.398V288.778z"
                />
                <path
                  style={{ fill: "#e29dff" }}
                  d="M420.607,278.438H259.06c-5.633,0-10.199-4.566-10.199-10.199s4.566-10.199,10.199-10.199h161.547 c5.632,0,10.199,4.566,10.199,10.199S426.239,278.438,420.607,278.438z"
                />
                <path
                  style={{ fill: "#e29dff" }}
                  d="M470.37,278.438h-10.815c-5.632,0-10.199-4.566-10.199-10.199s4.567-10.199,10.199-10.199h10.815 c5.632,0,10.199,4.566,10.199,10.199S476.002,278.438,470.37,278.438z"
                />
              </g>
            </g>
          </svg>
        </button>
        <span className="record-quantity w-5 inline-block">{quantity}</span>
        <button
          onClick={handleIncreaseBtn}
          className="quantity-add p-1 opacity-0 group-hover:opacity-100 active:scale-90 duration-300 ease-in-out"
        >
          <svg
            className="pointer-events-none"
            height="15px"
            width="15px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <polygon
                style={{ fill: "#e29dff" }}
                points="501.801,213.023 298.977,213.023 298.977,10.199 213.023,10.199 213.023,213.023 10.199,213.023 10.199,298.977 213.023,298.977 213.023,501.801 298.977,501.801 298.977,298.977 501.801,298.977 "
              />
              <g>
                <path
                  style={{ fill: "#e29dff" }}
                  d="M298.978,512h-85.956c-5.632,0-10.199-4.566-10.199-10.199V309.177H10.199 C4.567,309.177,0,304.61,0,298.977v-85.956c0-5.633,4.567-10.199,10.199-10.199h192.623V10.199C202.822,4.566,207.39,0,213.022,0 h85.956c5.632,0,10.199,4.566,10.199,10.199v192.623h192.624c5.632,0,10.199,4.566,10.199,10.199v85.956 c0,5.633-4.567,10.199-10.199,10.199H309.178v192.624C309.178,507.434,304.61,512,298.978,512z M223.221,491.602h65.557V298.977 c0-5.633,4.567-10.199,10.199-10.199h192.624v-65.557H298.978c-5.632,0-10.199-4.566-10.199-10.199V20.398h-65.557v192.623 c0,5.633-4.567,10.199-10.199,10.199H20.398v65.557h192.623c5.632,0,10.199,4.566,10.199,10.199V491.602z"
                />
                <path
                  style={{ fill: "#e29dff" }}
                  d="M425.307,278.438H322.24c-5.632,0-10.199-4.566-10.199-10.199s4.567-10.199,10.199-10.199h103.067 c5.632,0,10.199,4.566,10.199,10.199S430.939,278.438,425.307,278.438z"
                />
                <path
                  style={{ fill: "#e29dff" }}
                  d="M466.104,278.438h-6.901c-5.632,0-10.199-4.566-10.199-10.199s4.567-10.199,10.199-10.199h6.901 c5.632,0,10.199,4.566,10.199,10.199S471.736,278.438,466.104,278.438z"
                />
              </g>
            </g>
          </svg>
        </button>
      </td>
      <td className="record-cost px-6 text-end">{cost}</td>
      <td className="px-6 text-end  ">
        <button
          onClick={handleDeleteBtn}
          className="group-hover:opacity-100 opacity-0 duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto active:scale-90 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default VoucherTableRow;
