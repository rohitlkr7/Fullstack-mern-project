import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let data = [
    {
        image : "../public/product/p1.jpg.avif",
        title : "Christian Louboutin ",
        descript : "Sporty Kate 85 Leather Pump",
        price : "$ 629.00 "
    },
    {
        image : "../public/product/p2.webp",
        title : "Bottega Veneta ",
        descript : "Storm High Boots",
        price : "$3,410.00 "
    },
    {
        image : "../public/product/p3.avif",
        title : "Anthon Womens ",
        descript : "Down Quilted Puffer Jacket",
        price : "1,935.00 "
    },
    {
        image : "../public/product/p4.avif",
        title : "Manolo Blahnik ",
        descript : "Hangisi 90 Satin Pump",
        price : " $1,195.00"
    },
    {
        image : "../public/product/p5.avif",
        title : "Burberry The ",
        descript : "Chelsea Trench Coat",
        price : "$2,590.00 "
    },
    {
        image : "../public/product/p6.avif",
        title : "Saint Laurent ",
        descript : "L'entracte 110 Satin Slingback Pump",
        price : "$1,050.00 "
    },
    {
        image : "../public/product/p7.avif",
        title : "Christian Louboutin ",
        descript : "Chick Sling 70 Patent Slingback Pump",
        price : "$895.00 "
    },
    {
        image : "../public/product/p8.webp",
        title : " Fendi",
        descript : "Forever Fendi Two Tone 19mm Bracelet Fashion Watch",
        price : "$2,390.00 "
    },
    {
        image : "../public/product/p9.avif",
        title : "Ferragamo ",
        descript : "Womens Triba Leather Knee-High Boots",
        price : "$1,590.00 "
    },
    {
        image : "../public/product/p10.avif",
        title : "Christian Louboutin ",
        descript : "Posticha 80 Leather & Vinyl Slingback Pump",
        price : "$995.00 "
    },
    {
        image : "../public/product/p12.avif",
        title : "Valentino Vlogo ",
        descript : "Signature Leather Loafer",
        price : "$1,090.00 "
    },
    {
        image : "../public/product/p12.avif",
        title : "Christian ",
        descript : "Louboutin Kate 100 Leather Pump",
        price : " $795.00"
    },
    {
        image : "../public/product/p13.webp",
        title : " Valentino Vlogo",
        descript : "Signature Leather Loafer",
        price : "$1,090.00 "
    },
    {
        image : "../public/product/p14.avif",
        title : "Christian ",
        descript : "Louboutin Kate 100 Leather Pump",
        price : "$795.00 "
    },
    {
        image : "../public/product/p15.avif",
        title : "Balenciaga Track ",
        descript : "KUNARK ZATE FAISHON",
        price : "$649 "
    },
    {
        image : "../public/product/p16.avif",
        title: "Valentino Garavani",
        descript: "Rockstud 100 Patent-Leather Pump",
        price: "$990.00"
    },
    {
        image : "../public/product/p17.avif",
        title: "Casual Leather Sneakers",
        description: "Comfortable and durable leather sneakers for everyday wear.",
        price: "$120.00",
    },
    {
        image : "../public/product/p18.webp",
        title: "Women's Leather Boots",
        description: "Elegant knee-high leather boots, perfect for winter fashion.",
        price: "$200.00",
    },
    {
        image : "../public/product/p19.avif",
        title: "Leather Gloves",
        description: "Soft leather gloves with a warm lining for cold weather.",
        price: "$40.00",
    },
    {
        image : "../public/product/p20.avif",
        title: "Leather Oxford Shoes",
        description: "Premium handcrafted leather Oxford shoes, perfect for formal wear.",
        price: "$150.00",
    },
]

const Recomended = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  return (
    <div className="border-2 bg-orange-400 mx-10 my-2 mb-10">
      <h1 className="text-center text-3xl font-serif my-9 text-white uppercase">
        Recommended Products
      </h1>
      <div className="w-[1053px] h-[450px] m-auto mt-5  gap-2">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className="gap-2 mx-auto block">
                <div
                  key={index}
                  className=" bg-fuchsia-600 rounded-lg border-2 w-[205px] h-[400px] gap-3"
                >
                  <div className=" ">
                    <div className="w-[203px] h-[230px] rounded-lg ">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full rounded-lg "
                      />
                    </div>
                    <h2 className="text-center uppercase text-2xl font-serif text-white">
                      {item.title}
                    </h2>
                    <p className="text-xl text-center text-gray-50">
                      {item.descript}
                    </p>
                    <h1 className="text-center text-gray-100">{item.price}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Recomended;
