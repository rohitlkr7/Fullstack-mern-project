import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

let data = [
  {
    image: "../public/images/shutterstock_1.webp",
    title: "LUXE HANDBAGS",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_2.webp",
    title: "DESIGNER SHOES",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_3.webp",
    title: "ICONIC SUNGLASSES",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_4.webp",
    title: "WOMEN'S BLAZERS",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_5.webp",
    title: "TRENDING DRESSES",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_6.webp",
    title: "MEN'S COATS & JACKETS",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_7.webp",
    title: "Denim for Him & Her",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
  {
    image: "../public/images/shutterstock_8.webp",
    title: "MEN'S SNEAKERS",
    link : "SHOP NOW",
    arrow : <IoIosArrowRoundForward/>
  },
];

const Cardcategory = () => {
  return (
    <div className="mx-10 border-2 my-8 ">
      <h1 className="text-center text-3xl font-serif my-9">SHOP BY</h1>
      <div className="grid grid-cols-4 gap-3">
        {data.map((item, index) => {
          return (
            <div key={index} className=" p-2 ">
              <div className=" ">
                <div className="w-[250px] h-[300px]">
                   <img src={item.image} alt="" className="w-full h-full"/>
                </div>
                <h2 className="text-center uppercase text-3xl font-serif">{item.title}</h2>
                <div className=" flex items-center justify-between p-1 w-[120px] transition-all border-2 rounded-md ml-16 hover:rounded-full hover:bg-orange-600 hover:text-white ">
                    <button>{item.link}</button>
                    <div>{item.arrow}</div>
                </div> 
              </div> 
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Cardcategory;
