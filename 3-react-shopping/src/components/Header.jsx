import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-bold">Online Shope</Link>
          <Link to={"my-card"} className="border border-black py-2 px-4 relative">
            My Card
            <span className="absolute bg-red-600 text-white px-3 -py-2 text-sm inline-block top-0 right-0 translate-x-1/2 -translate-y-1/2">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
