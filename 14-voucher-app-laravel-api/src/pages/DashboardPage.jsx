import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiCircleStack, HiDocumentDuplicate } from "react-icons/hi2";
import { HiComputerDesktop } from "react-icons/hi2";


const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-rows-3">
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Product Module"} icon={<HiCircleStack className="size-14"/>} url={"/product"}></ModuleBtn>
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Sale Module"} icon={<HiComputerDesktop className="size-14"/>} url={"/sale"}></ModuleBtn>
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Voucher Module"} icon={<HiDocumentDuplicate className="size-14"/>} url={"/voucher"}></ModuleBtn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
