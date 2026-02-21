import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="fixed w-full  top-0 left-0  z-[9999]">
      <Navbar />
    </div>
  );
};

export default Header;
