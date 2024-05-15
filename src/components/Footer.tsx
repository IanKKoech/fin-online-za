import React from "react";
import FinLogo from "../../public/assets/Asset 2@4x 1.png";
import socials from "../../public/assets/Frame 14447.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 pt-10">
      <div className="container flex flex-wrap justify-center text-md gap-6">
        <div className="flex flex-col items-center mx-4 mb-4 sm:mb-0">
          <div>
            <img src={FinLogo.src} alt="" className="h-14 w-auto mb-2" />
          </div>
          <p className="font-semibold mb-1">Fin South Africa</p>
          <p className="text-center font-normal">
            is a registered Credit Provider{" "}
            <span className="font-semibold">(NCRCP1)</span> <br />
            and an authorised Financial Services <br />
            provider <span className="font-semibold">(FSP46701)</span>
          </p>
        </div>

        <div className="flex flex-col items-center mx-4 mb-4 sm:mb-0">
          <h2 className="font-medium mb-2">Company</h2>
          <p className="mb-1 font-extralight">About us</p>
          <p className="mb-1 font-extralight">Blog</p>
          <p className="mb-1 font-extralight">Careers</p>
          <p className="mb-1 font-extralight">Community</p>
        </div>

        <div className="flex flex-col items-center mx-4 mb-4 sm:mb-0">
          <h2 className="font-normal mb-2">Join us</h2>
          <p className="mb-1 font-extralight">Merchants</p>
          <p className="mb-1 font-extralight">Partners</p>
        </div>

        <div className="flex flex-col items-center mx-4 mb-4 sm:mb-0">
          <h2 className="font-normal mb-2">Help</h2>
          <p className="mb-1 font-extralight">Contact</p>
          <p className="mb-1 font-extralight">FAQs</p>
        </div>

        <div className="flex flex-col items-center mx-4 mb-4 sm:mb-0">
          <h2 className="font-normal mb-2">Legal</h2>
          <p className="mb-1 font-extralight">Terms & Conditions</p>
          <p className="mb-1 font-extralight">Privacy Policy</p>
          <p className="mb-1 font-extralight">PAIA Manual</p>
        </div>

        <div className="flex flex-col items-center mx-4 mb-4 sm:mb-0 ml-auto"> {/* Use ml-auto to move it to the right */}
          <h2 className="font-extralight mb-2 text-4xl">
            Follow Us <br />
            on Socials
          </h2>
          <div>
            <img src={socials.src} alt="" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
