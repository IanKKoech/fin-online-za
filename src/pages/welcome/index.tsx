import Header from "@/components/Header";
import Testimonials from "@/components/Testomonials";
import Footer from "@/components/Footer";
import flexi from "../../../public/assets/FIN Welcome Page Assets/Slider Images/pexels-mikhail-nilov-7534773 1.png";
import personalLoans from "../../../public/assets/FIN Welcome Page Assets/Slider Images/pexels-terje-sollie-313707 1.png";
import medicalLoans from "../../../public/assets/FIN Welcome Page Assets/Slider Images/pexels-roger-brown-5125690 1.png";
import homeImprovement from "../../../public/assets/FIN Welcome Page Assets/Slider Images/Protect-Your-Family-Against-the-Financial-Risk-of-an-RDP-House 1.png";
import pocketBook from "../../../public/assets/FIN Welcome Page Assets/32╤à32/Stroked/Pocketbook.png";
import union from "../../../public/assets/FIN Welcome Page Assets/Union.png";
import union1 from "../../../public/assets/FIN Welcome Page Assets/Union-1.png";
import union2 from "../../../public/assets/FIN Welcome Page Assets/Union-2.png";
import applyOnline from "../../../public/assets/FIN Welcome Page Assets/icon-2 1.png";
import arrow1 from "../../../public/assets/FIN Welcome Page Assets/arrow-1 1.png";
import icon11 from "../../../public/assets/FIN Welcome Page Assets/icon-1 1.png";
import icon1 from "../../../public/assets/FIN Welcome Page Assets/icon 1.png";
import FNB from "../../../public/assets/FIN Welcome Page Assets/LOGOS/Asset 13@4x-8.png";
import Snap from "../../../public/assets/FIN Welcome Page Assets/LOGOS/Asset 14@4x-8.png";
import payfast from "../../../public/assets/FIN Welcome Page Assets/LOGOS/Asset 15@4x-8.png";
import ozow from "../../../public/assets/FIN Welcome Page Assets/LOGOS/Asset 16@4x-8.png";
import { Text } from "fin-ui";

const WelcomePage = () => {
  return (
    <div className="font-poppins">
      <div className="font-poppins p-0">
        <Header />
        <div
          className="bg-cover bg-center h-screen flex justify-start items-center"
          style={{
            backgroundImage: `url('/assets/FIN Welcome Page Assets/Header Image/pexels-monstera-production-5996857 1.png')`,
            color: "white",
            paddingLeft: "4rem",
            paddingBottom: "9rem",
          }}
        >
          <div>
            <p className="pl-4 text-teal left-4 text-3xl sm:text-4xl font-light">
              Welcome to{" "}
              <span style={{ fontWeight: "bold" }}>
                <br />
                FIN
              </span>{" "}
              South Africa
            </p>
            <br />
            <p className="pl-4 text-lg sm:text-2xl text-teal">
              We empower you to take control of your credit requirements and
              financial planning. Our <br />
              tailored credit solutions are designed to accommodate your unique
              needs, leveraging <br />
              your positive payment history to offer more favorable repayment
              options.
            </p>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute bottom-0 left-0 w-full bg-white text-black overflow-hidden"
            style={{
              borderTopLeftRadius: "4.5rem",
              borderTopRightRadius: "4.5rem",
            }}
          >
            <br />
            <p className="text-lg sm:text-2xl text-black align-middle text-center">
              Do you want to know if you qualify for a loan today?
            </p>

            <br />
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="relative flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={{ width: "26rem" }}
                    className="py-1 px-6 sm:px-16 rounded-l-full rounded-r-full border border-gray-250 outline-none focus:ring-2 placeholder-left text-sm sm:text-base"
                  />
                  <button className="absolute right-0 top-0 bottom-0 bg-green-300 text-blue-850 py-1 px-2 sm:px-4 rounded-l-full rounded-r-full ml-1 text-sm sm:text-base">
                    Apply Now
                  </button>
                </div>
                <br />
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>

        {/* Beginning of carousel */}
        <div className="bg-white">
          <div className="relative bottom-0 left-0 bg-white px-6 sm:pl-80 sm:pr-80 align-middle">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 md:gap-4 sm:justify-between mb-4">
              <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white mb-4 sm:mb-0">
                <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                  <img
                    className="w-full h-auto object-cover rounded-t-lg"
                    src={flexi.src}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <p className="text-white text-lg font-semibold">
                    Flexi Loans
                  </p>
                </div>
              </div>
              <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white mb-4 sm:mb-0">
                <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                  <img
                    className="w-full h-auto object-cover rounded-t-lg"
                    src={personalLoans.src}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <p className="text-white text-lg font-semibold">
                    Personal Loans
                  </p>
                </div>
              </div>
              <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 mb-4 sm:mb-0">
                <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                  <img
                    className="w-full h-auto object-cover rounded-t-lg"
                    src={medicalLoans.src}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <p className="text-white text-lg font-semibold">
                    Medical Loans
                  </p>
                </div>
              </div>
              <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 mb-4 sm:mb-0">
                <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                  <img
                    className="w-full h-auto object-cover rounded-t-lg"
                    src={homeImprovement.src}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <p className="text-white text-lg font-semibold">Home Loans</p>
                </div>
              </div>
            </div>
            {/* End of carousel */}
            <br />
          </div>
        </div>
      </div>

      <div className="bg-white p-10 text-black bottom-0">
        <p className="text-black text-center align-middle text-3xl sm:text-4xl pt-15">
          Quick Access
        </p>

        <br />
        <br />
        <div className="flex flex-col gap-10 font-poppins sm:flex-row sm:justify-center sm:gap-32">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-300 rounded-full flex justify-center items-center">
              <img src={pocketBook.src} alt="Icon 1" className="h-11 w-11" />
            </div>
            <p className="mt-4 text-center">
              Pay your <br /> account
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-300 rounded-full flex justify-center items-center">
              <img src={union.src} alt="Icon 2" className="h-11 w-11" />
            </div>
            <p className="mt-4 text-center">
              Check payment <br /> options
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-300 rounded-full flex justify-center items-center">
              <img src={union1.src} alt="Icon 3" className="h-11 w-11" />
            </div>
            <p className="mt-4 text-center">
              Quick Access <br /> Finance
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-300 rounded-full flex justify-center items-center">
              <img src={union2.src} alt="Icon 4" className="h-11 w-11" />
            </div>
            <p className="mt-4 text-center">
              Online <br /> Statements
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 pb-5">
        <p className="text-gray-800 text-center align-middle text-3xl sm:text-4xl pt-5">
          Managing your Finances
        </p>
        <br />
        <p className="text-gray-700 text-center text-pretty text-0xl font-light">
          We're all looking for simpler and easier ways to manage our finances.
        </p>
        <p className="text-gray-700 text-center text-pretty text-2rem font-light">
          We do just that, for you.
        </p>
        <br />
        <br />
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-16">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex justify-start items-center">
              <img src={applyOnline.src} alt="Icon 1" className="h-20 w-18" />
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Apply Online
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-8 h-16 md:w-12 md:h-24 rounded-full flex justify-start items-center">
              <img
                src={arrow1.src}
                alt="Icon 2"
                className="h-full w-auto sm:h-6 sm:w-8"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex justify-start items-center">
              <img src={icon11.src} alt="Icon 3" className="h-20 w-18" />
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Manage your <br /> account
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-8 h-16 md:w-12 md:h-24 rounded-full flex justify-start items-center">
              <img
                src={arrow1.src}
                alt="Icon 3"
                className="h-full w-full sm:h-6 sm:w-8"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex justify-start items-center">
              <img src={icon1.src} alt="Icon 4" className="h-20 w-18" />
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Make easy <br /> repayments
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <p className="text-black text-center font-poppins font-weight-300 align-middle text-3xl pt-5">
          Make payments easily
        </p>
        <br></br>
        <p className="text-black text-center font-poppins font-weight-400 g md:text-xl lg:text-2xl xl:text-2xl leading-8 md:leading-10 lg:leading-12 xl:leading-14">
          We've made paying your account as easy as possible so that you can{" "}
          <br />
          make a payment wherever you are.
        </p>

        <br></br>
        <br></br>
        <br />
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-24">
          <div className="ml-2 md:ml-5 mb-4 md:mb-0 relative">
            <a href="https://www.fnb.co.za/">
              <img src={FNB.src} alt="FNB" className="h-16 w-auto" />
            </a>
          </div>
          <div className="border-r border-black h-14 my-2 md:my-0"></div>
          <div className="mr-2 md:mr-5 mb-4 md:mb-0 relative">
            <a href="https://www.snapscan.co.za/">
              <img src={Snap.src} alt="Snap" className="h-14 w-auto" />
            </a>
          </div>
          <div className="border-r border-black h-14 my-2 md:my-0"></div>
          <div className="ml-2 md:ml-5 mb-4 md:mb-0 relative">
            <a href="https://my.payfast.io/">
              <img src={payfast.src} alt="PayFast" className="h-14 w-auto" />
            </a>
          </div>
          <div className="border-r border-black h-14 my-2 md:my-0"></div>
          <div className="mr-2 md:mr-5 mb-4 md:mb-0 relative">
            <a href="https://ozow.com/">
              <img src={ozow.src} alt="Ozow" className="h-14 w-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white pt-4 pb-4">
        <div className="container mx-auto px-4">
          <p></p>
          <br />
          <br />
          <p className="text-center text-3xl text-black font-light">
            Still on the fence? Here's what <br />
            <span className="text-green-400">our users</span> are saying
          </p>
          <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/3">
              <Testimonials />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WelcomePage;
