import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="mb-3">
      <Container>
        <h1 className="font-bold text-3xl "> Voucher App</h1>
        <p className=" text-stone-500">MMS Software</p>
      </Container>
    </header>
  );
};

export default Header;
