import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
      <Link to={url} className="flex flex-col gap-3 h-full items-center bg-custom-gradient text-stone-800 rounded-lg shadow-sm p-5">
        {icon}
        {name}
      </Link>
  );
};

export default ModuleBtn;

