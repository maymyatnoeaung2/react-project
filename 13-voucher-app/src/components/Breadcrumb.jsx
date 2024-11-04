import React from "react";
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, Links }) => {
  return (
    <div className="w-full flex gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#e29dff] dark:text-gray-400 dark:hover:text-white"
            >
              <FaHome />
              Home
            </Link>
          </li>
          {Links.length > 0 &&
            Links.map((link, index) => (
              <li aria-current="page" key={index}>
                <Link to={link.path} className="flex items-center">
                  <HiChevronRight />
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 hover:text-[#e29dff]">
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}

          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
