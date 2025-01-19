import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { LiaSortSolid } from "react-icons/lia";

const Men = () => {
  return (
    <>
      <div className="mx-10   h-auto my-10">
        <h1 className="text-center text-3xl p-8 font-serif font-bold">MEN</h1>
        
        <div className=" flex   ">
            {/* left container */}
          <div className="w-[400px]  ">
              <h1 className="uppercase w-full  text-center font-serif text-3xl">Filter by</h1>
              <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h2>BRAND</h2>
                    <IoIosArrowDown/>
                  </div>
                  <div className="flex items-center justify-between" >
                     <h2>CATEGORY</h2>
                     <IoIosArrowDown/>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>

          {/* right container */}
          <div className=" w-full">
            <div className="flex justify-end items-center font-serif ">
              <LiaSortSolid/>
              <h3 className="text-sm">SORT BY:</h3>
              <select className="w-[250px] h-10 border-2 border-none">
                <option value="">BEST SELLING</option>
                <option value="">ALPHABETICALLY, A-Z</option>
                <option value="">ALPHABETICALLY, Z-A</option>
                <option value="">PRICE, HIGH TO LOW</option>
                <option value="">PRICE, LOW TO HIGH</option>
                <option value="">DATE NEW TO OLD</option>
                <option value="">DISCOUNT HIGH TO LOW</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Men;

