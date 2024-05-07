import Header from "@/components/Header";
import Testimonials from "@/components/Testomonials";
import Footer from "@/components/Footer";
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
            <p className="pl-4 text-teal left-4 text-3xl">
              Welcome to{" "}
              <span style={{ fontWeight: "bold" }}>
                <br></br>FIN
              </span>{" "}
              South Africa
            </p>
            <br></br>
            <p></p>
            <br></br>
            <p className="pl-4 text-2xl text-teal">
              We empower you to take control of your credit requirements and
              financial planning. Our <br></br>
              tailored credit solutions are designed to accomodate your unique
              needs, leveraging <br></br>
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
            <p className="text-3xl text-black align-middle text-center">
              Do you want to know if you qualify for a loan today?
            </p>

            <br />
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="relative flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="py-1 px-16 rounded-l-full rounded-r-full border border-gray-250 outline-none focus:ring-2 placeholder-left"
                  />

                  <button className=" absolute right-0 top-0 bottom-0 bg-green-300 text-blue-950 py-2 px-2 rounded-l-full rounded-r-full ml-1">
                    Apply Now
                  </button>
                </div>
                <br></br>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>

        {/* Beginning of carousel */}
        <div className="relative bottom-0 left-0 bg-white pl-80 pr-80 align-middle">
          <div className="flex justify-center">
            {" "}
            {/* Added justify-center */}
            <div className="block max-w-[18rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white mr-4">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img className="rounded-t-lg" src={personalLoans.src} alt="" />
              </div>
              <div className="p-6">
                <Text className="text-base" transform="capitalize">
                  Personal Loans
                </Text>
              </div>
            </div>
            <div className="lock max-w-[18rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white mr-4">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img className="rounded-t-lg" src={medicalLoans.src} alt="" />
              </div>
              <div className="p-6">
                <Text tranform="capitalize" color="black">
                  Medical Loans
                </Text>
              </div>
            </div>
            <div className="lock max-w-[18rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 ">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={homeImprovement.src}
                  alt=""
                />
              </div>
              <div className="p-6">
                <Text transform="capitalize" color="black">
                  Home Improvement Loans
                </Text>
              </div>
            </div>
          </div>
          {/* End of carousel */}
          <br></br>
        </div>
      </div>

      <div className="bg-white p-10 text-black bottom-0 ">
        <p className="text-black text-center align-middle text-4xl pt-20 ">
          Quick Access
        </p>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-32">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-green-300 rounded-full flex justify-center items-center">
              <img src={pocketBook.src} alt="Icon 1" className="h-8 w-8" />
            </div>
            <p className="mt-4 ">
              Pay your <br></br> account
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-green-300 rounded-full flex justify-center items-center">
              <img src={union.src} alt="Icon 2" className="h-8 w-8" />
            </div>
            <p className="mt-4">
              Check payment <br></br> options
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-green-300 rounded-full flex justify-center items-center">
              <img src={union1.src} alt="Icon 3" className="h-8 w-8" />
            </div>
            <p className="mt-4">
              Quick Access <br></br> Finance
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-green-300 rounded-full flex justify-center items-center">
              <img src={union2.src} alt="Icon 4" className="h-8 w-8" />
            </div>
            <p className="mt-4">
              Online <br></br> Statements
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 pb-5">
        <p className="text-gray-800 text-center align-middle text-4xl pt-5 ">
          Managing your Finances
        </p>
        <br></br>
        <br />
        <p className="text-gray-700 text-center text-pretty text-0xl font-light">
          We're all looking for simpler and easier ways to manage our finances.
        </p>
        <p className="text-gray-700 text-center text-pretty text-2rem font-light">
          We do just that, for you.
        </p>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center mr-100">
            {" "}
            {/* Added mr-4 for right margin */}
            <div className="w-16 h-16 rounded-full flex justify-center items-center">
              <img
                src={applyOnline.src}
                alt="Icon 1"
                className="h-15 w-20 ml-20"
              />
            </div>
            <p className="mt-2 text-gray-600">Apply Online</p>
          </div>
          <div className="flex flex-col items-center mr-100">
            {" "}
            {/* Added mr-4 for right margin */}
            <div className="w-8 h-16 rounded-full flex justify-center items-center">
              <img src={arrow1.src} alt="Icon 2" className="h-5 w-6" />
            </div>
          </div>
          <div className="flex flex-col items-center mr-100">
            {" "}
            {/* Added mr-4 for right margin */}
            <div className="w-16 h-16 rounded-full flex justify-center items-center">
              <img src={icon11.src} alt="Icon 2" className="h-15 w-12" />
            </div>
            <p className="mt-2 text-gray-600">
              Manage your <br /> account
            </p>
          </div>
          <div className="flex flex-col items-center mr-100">
            {" "}
            {/* Added mr-4 for right margin */}
            <div className="w-8 h-16 rounded-full flex justify-center items-center">
              <img src={arrow1.src} alt="Icon 3" className="h-5 w-6" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex justify-center items-center">
              <img src={icon1.src} alt="Icon 4" className="h-15 w-20" />
            </div>
            <p className="mt-2 text-gray-600">
              Make easy <br /> repayments
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <p className="text-black text-center align-middle text-3xl pt-5">
          Make payments easily
        </p>
        <br></br>
        <p className="text-black text-center align-middle text-2xl font-light ">
          We've made paying your account as easy as possible so that you can{" "}
          <br></br>
          make a payment wherever you are.
        </p>
        <br></br>
        <br></br>
        <div className="flex items-center justify-center">
          <div className="ml-5 mr-10">
            <img src={FNB.src} alt="FNB" className="h-16 w-auto" />
          </div>

          <div className="ml-10 mr-10">
            <img src={Snap.src} alt="Snap" className="h-14 w-auto" />
          </div>

          <div className="ml-10 mr-10">
            <img src={payfast.src} alt="PayFast" className="h-14 w-auto" />
          </div>

          <div className="ml-10 mr-10">
            <img src={ozow.src} alt="Ozow" className="h-14 w-auto" />
          </div>
        </div>
      </div>

      <div className="bg-white pt-4 pb-4">
        <p></p>
        <br></br>
        <br></br>
        <p className="text-center align-middle text-3xl text-black font-light">
          Still on the fence, here's what <br></br>{" "}
          <span className="text-green-400">our users</span> are saying
        </p>
        <Testimonials />

        <div className="pl-36">
          <p className="pl-40 font-semibold text-4xl text-black">
            Keep up with us by <br></br> signign up for our <br></br>{" "}
            <span className="font-light">newsletter</span>
          </p>
          <br></br>
          <div className="relative w-96 pl-36">
            <input
              type="text"
              placeholder="Email address"
              className="w-full pl-2 pr-auto py-2 rounded-l-full rounded-r-full border border-gray-200 focus:outline-none focus:ring focus:border-blue-500 "
            />
            <button className="absolute top-0 right-0 px-4 py-2 bg-green-300 text-blue-900 rounded-full ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
