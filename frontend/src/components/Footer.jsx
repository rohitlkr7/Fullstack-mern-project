import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <hr />
      <div className="m-10">
        <div className="flex justify-between ">
          <div className="text-2xl">
            <h1>FOLLOW US</h1>
            <div className="flex gap-2 text-3xl">
              <BiLogoFacebookSquare />
              <FaInstagram />
            </div>
          </div>

          <div className="cursor-pointer">
            <h2 className="cursor-default text-2xl">HELPS</h2>
            <div href="">SHIPPING & DELIVERY</div>
            <div href="">RETURNS & EXCHANGES</div>
            <div href="">START A RETURN</div>
            <div href="">SHOP PAY INSTALLMENTS</div>
            <div href="">CONTACT US</div>
            <div href="">LEAV US FEEDBACK</div>
            <div href="">SELL ON BLUEFLY</div>
            <div href="">TERMS & CONDITIONS</div>
            <div href="">PRIVACY POLICY</div>
            <div href="">DO NOT SELL MY PERSONAL INFORMATION</div>
            <div href="">HTML SITE MAP</div>
          </div>

          <div className="w-1/4 lin">
            <h2>NEWSLETTER</h2>
            <h3>
              Promotions, new products, and sales. Directly to your inbox.
            </h3>
            <div>
            <label>Email :-</label>
              <div className="flex items-center w-full gap-2 justify-between">
                <input className="outline-none" type="email" placeholder="Enter your email here" />
                <FaArrowRightLong className="w-8" />
              </div>
              <div className="w-full h-0.5 bg-black font-extrabold mt-1"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 gap-2">
           <div className="">
             <img className="w-12 h-8 border-2  p-1 rounded-md" src="./public/american-express.png" alt="" />
           </div>
           <div> 
             <img className="w-12 h-8 border-2 rounded-md" src="https://wayne.bank/wp-content/uploads/2023/02/Apple-Pay-Card-Image.png" alt="" />
           </div>
           <div>
            <img className="w-12 h-8 border-2 rounded-md" src="https://www.liblogo.com/img-logo/di1838dbeb-diners-club-logo-diners-club-logo-.png" alt="" />
           </div>
           <div>
             <img className=" w-12 h-8 border-2 rounded-md " src=" https://www.discoversignage.com/uploads/18-05-22_02:15_7-Logo_US_Standard_new_visa_RGB.png" alt="" />
           </div>
           <div>
            <img className="border-2 w-12 h-8 rounded-md" src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-pay-payment-software-vector-png-image_12256718.png" alt="" />
           </div>
           <div>
            <img className="border-2 w-12 h-8 rounded-md" src="https://e7.pngegg.com/pngimages/23/320/png-clipart-mastercard-credit-card-visa-payment-service-mastercard-company-orange.png" alt="" />
           </div>
           <div>
            <img className="w-12 h-8 border-2 rounded-md" src="https://w7.pngwing.com/pngs/875/329/png-transparent-paypal-logo-e-commerce-payment-system-paypal-blue-angle-company-thumbnail.png" alt="" />
           </div>
            <div>
              <img className="w-12 h-8 border-2 rounded-md" src="https://images.seeklogo.com/logo-png/45/2/shop-pay-logo-png_seeklogo-450730.png?v=1957187774852651176" alt="" />
            </div>
            <div className="">
              <img className="w-12 h-8 border-2 rounded-md" src="https://www.ehcc.org/sites/default/files/Venmo-Logo.png" alt="" />
            </div>
            <div>
              <img className="w-12 h-8 border-2 rounded-md" src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png" alt="" />
            </div>

        </div>

        <div className="flex items-center justify-center">
            <p>© 2025, Bluefly
            Powered by Shopify</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
