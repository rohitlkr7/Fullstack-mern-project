import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "../public/images/Banner1.webp",
  },
  {
    image: "../public/images/Banner2.webp",
  },
  {
    image: "../public/images/Banner3.webp",
  },
  {
    image: "../public/images/Banner4.webp",
  },
  {
    image: "../public/images/Banner5.webp",
  },
  {
    image: "../public/images/Banner6.webp",
  },
];

const HeroSlider = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="border-2 bg-black mx-10 my-2">
      <div className="w-[1053px] h-[450px] m-auto mt-5">
        <Slider {...settings}>
          {data.map((item, index) => {
            return(
                <div key={index}>
              <div>
                <img src={item.image} alt="" className="w-full h-full" />
              </div>
            </div>
            )
           })
           }
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
