import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import DropdownBox from "./DropdownBox";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="w-full h-28 flex justify-between  ">
        <div className="flex gap-3 items-end ml-10 text-xl text-slate-900 font-medium">
          <Link to="/Women" className="cursor-pointer hover:underline">WOMEN</Link>
          <Link to="/Men" className="cursor-pointer hover:underline">MEN</Link>
        </div>
        <div className="flex justify-center items-center ml-6 ">
          <Link to="/">
            <img
              className=" w-96 p-5 m-auto ml-40"
              src="../public/bluefly-logo main.avif"
              alt=""
            />
          </Link>
        </div>

      

        <div className="flex items-center gap-8 mr-10 ">
          <div className="">
            <div className="flex items-center mt-7">
              <input
                className=" w-80 h-10 p-2 outline-none text-black text-xl"
                type="text"
              />
              <CiSearch className=" text-2xl" />
            </div>
            <div className="w-full h-0.5 bg-black font-extrabold"></div>
          </div>

          <Link to="/Login">
            <FaRegUser className="text-2xl hover:scale-110" />
          </Link>
          <Link to = "/AddToCart">
            <LiaShoppingBagSolid className="text-3xl hover:scale-110" />
          </Link>
        </div>
      </header>
      <hr />

      <DropdownBox />

      <div className=" h-32 mt-4 border-2 overflow-hidden mx-10 ">
        <Link to={""}>
          <img
            className="w-full h-full"
            src="./public/5_SHIPPING_PROMO.avif"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default Header;
