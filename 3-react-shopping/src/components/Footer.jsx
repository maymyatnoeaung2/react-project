import React from "react";

const Footer = () => {
const date = new Date();

  return (
    <footer className="mt-auto mx-5 text-white text-center bg-black py-2">
    {date.getFullYear()} <a href="https://mms-it.com" className="underline text-gray-400">MMS IT.</a> All rights reserved.
    </footer>
  );
};

export default Footer;
