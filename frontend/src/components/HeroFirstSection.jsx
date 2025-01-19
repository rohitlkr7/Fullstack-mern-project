import React from "react";
import { Link } from "react-router-dom";

const HeroFirstSection = () => {
  return (
    <>
      
      <div className=" h-32 mt-2 border-2 overflow-hidden mx-10">
        <Link to={""}>
          <img
           className=" w-full h-full"
            src="../public/Banner2.webp"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default HeroFirstSection;
