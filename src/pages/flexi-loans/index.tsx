import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testomonials";
import idCopy from "../../../public/assets/32х32/Stroked/Payment.png";
import incomeProof from "../../../public/assets/32х32/Stroked/Pocketbook.png";
import statement from "../../../public/assets/Union.png";
import residence from "../../../public/assets/Component.png";
import { Benefits } from "@/components/features/home/benefits";
import tempDisability from "../../../public/assets/Layer_1.png";
import permDisability from "../../../public/assets/Vector.png";
import death from "../../../public/assets/Layer_1-2.png";
import retrenchment from "../../../public/assets/Layer_1-1.png";

export const FinFlexiLoans = () => {
  return (
    <div className="font-poppins p-0">
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-start items-center"
        style={{
          backgroundImage: `url(&apos;/assets/FIN Welcome Page Assets/Flexi-Loan-header.jpg&apos;)`,
          color: "white",
          paddingLeft: "4rem",
          paddingBottom: "9rem",
        }}
      >
        <div>
          <p className="pl-4 pr-6 lg:pr-4 text-teal left-4 text-3xl sm:text-4xl font-light">
            <span style={{ fontWeight: "bold" }}>FIN</span> Flexi Loans
          </p>
          <br />
          <p className="pl-4 pr-0 lg:pr-4 text-lg sm:text-2xl text-teal">
            Need cash? No problem!
            <span style={{ fontWeight: "bold" }}>Fin Flexi Loans</span> help you
            manage your credit <br />
            needs while offering you personalised credit based on your positive{" "}
            <br /> payment behaviour.
          </p>
        </div>
      </div>
      <br />
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="relative flex">
            <input
              type="email"
              placeholder="Enter email address"
              style={{ width: "26rem" }}
              className="py-1 px-6 sm:px-16 rounded-l-full rounded-r-full border border-gray-250 outline-none focus:ring-2 placeholder-left text-sm sm:text-base"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-green-300 text-blue-850 py-1 px-2 sm:px-4 rounded-l-full rounded-r-full ml-1 text-sm sm:text-base">
              Apply Now
            </button>
          </div>
          <br />
        </div>

        <div className="bg-gray-200 pb-5">
          <p className="text-black text-center align-middle text-2xl sm:text-4xl pt-5 font-light">
            How it works
          </p>
          <br />
          <p className="text-black text-center text-pretty text-base font-light">
            Applying is quick and easy!{" "}
            <span className="underline font-bold">Need a hand?</span>
          </p>
          <br />
          <br />
          <div className="flex flex-col md:flex-row items-start justify-center md:gap-56 lg:gap-72 sm:gap-4 text-black">
            <div className="flex flex-col items-start mb-4 md:mb-0">
              <p className="font-bold flex items-center">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                  1
                </span>
                Apply Online
              </p>
              <div className="text-left ml-2">
                <p>
                  Apply online and check whether <br /> you qualify for a{" "}
                  <span className="font-bold">Fin Medical Loan</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mb-4 md:mb-0">
              <p className="font-bold flex items-center">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                  2
                </span>
                Awaiting Approval
              </p>
              <div className="text-left ml-2">
                <p>
                  We&apos;ll get back to you within <br /> a business hour
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold flex items-center">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                  3
                </span>
                Payment Mode
              </p>
              <div className="text-left ml-2">
                <p>
                  Once accepted we will make a <br /> payment directly to your
                  general <br /> Surgery Practitioner withing 24 <br /> hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 text-black bottom-0">
          <p className="text-black text-center align-middle text-3xl sm:text-4xl pt-2">
            What do you need ?
            <br />
            <br />
            <span className="text-2xl font-light">
              See what other documents we accept view our{" "}
              <span className="underline font-bold">FAQ&apos;s</span>
            </span>
          </p>
          <br />
          <br />
          <div className="flex flex-col gap-10 font-poppins sm:flex-row sm:justify-center sm:gap-32">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img src={idCopy.src} alt="ID Copy" className="h-11 w-11" />
              </div>
              <p className="mt-4 text-center">Copy of your ID</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={incomeProof.src}
                  alt="Proof of Income"
                  className="h-11 w-11"
                />
              </div>
              <p className="mt-4 text-center">Proof of Income</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20  flex justify-center items-center">
                <img
                  src={statement.src}
                  alt="3 Months statement"
                  className="h-11 w-11"
                />
              </div>
              <p className="mt-4 text-center">
                3 Months <br /> Bank Statement
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20  flex justify-center items-center">
                <img
                  src={residence.src}
                  alt="Residence Proof"
                  className="h-11 w-11"
                />
              </div>
              <p className="mt-4 text-center">
                Proof of <br /> Residence
              </p>
            </div>
          </div>
        </div>

        <Benefits />

        <div className="bg-white p-10 text-black bottom-0">
          <p className="text-black text-center align-middle text-3xl sm:text-4xl pt-2">
            We have you covered!
          </p>
          <br />
          <p>
            <span className="text-sm sm:text-base text-black text-center align-middle pt-2">
              All our loans include{" "}
              <span className="font-bold">Credit Life Insurance,</span>{" "}
              safeguarding you against unforeseen insurable events that could
              affect your ability to repay. Gain peace of mind knowing you&apos;re
              protected. You&apos;ll receive courage for.
            </span>
          </p>

          <br />
          <br />
          <div className="flex flex-col gap-10 font-poppins sm:flex-row sm:justify-center sm:gap-32">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={tempDisability.src}
                  alt="Temporary Disability"
                  className="h-14 auto"
                />
              </div>
              <p className="mt-4 text-center">Temporary Disability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={permDisability.src}
                  alt="Permanent Disability"
                  className="h-14 auto"
                />
              </div>
              <p className="mt-4 text-center">Permanent Disability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20  flex justify-center items-center">
                <img src={death.src} alt="Cofin icon" className="h-14 auto" />
              </div>
              <p className="mt-4 text-center">Death</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20  flex justify-center items-center">
                <img
                  src={retrenchment.src}
                  alt="Retrenchment Image"
                  className="h-14 auto"
                />
              </div>
              <p className="mt-4 text-center">Retrenchment</p>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default FinFlexiLoans;
