import Header from "@/components/Header";
import Footer from "@/components/Footer";
import idCopy from "../../../public/assets/32х32/Stroked/Payment.png";
import incomeProof from "../../../public/assets/32х32/Stroked/Pocketbook.png";
import statement from "../../../public/assets/Union.png";
import residence from "../../../public/assets/Component.png";
import tempDisability from "../../../public/assets/Layer_1.png";
import permDisability from "../../../public/assets/Vector.png";
import death from "../../../public/assets/Layer_1-2.png";
import retrenchment from "../../../public/assets/Layer_1-1.png";
import Partners from "@/components/Partners";
import Image from "next/image";

export const FinShoppingPartner = () => {
  return (
    <div className="font-poppins p-0">
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-start items-center"
        style={{
          backgroundImage: `url('/assets/medicalLoansImage.jpg')`,
          color: "white",
          paddingLeft: "4rem",
          paddingBottom: "9rem",
        }}
      >
        <div>
          <p className="pl-4 pr-6 lg:pr-4 text-teal left-4 text-3xl sm:text-4xl font-light">
            <span style={{ fontWeight: "bold" }}>FIN</span> Shopping Partners
          </p>
          <br />
          <p className="pl-4 pr-0 lg:pr-4 text-lg sm:text-2xl text-teal">
            Whether you are buying or upgrading tech, home appliances,
            prescription <br />
            eye wear and more,
            <span style={{ fontWeight: "bold" }}>Fin Flexi Loans</span>, helps
            you achieve your purchase <br />
            goals quick and easy on your terms.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white pt-12 pb-12">
        <div className="relative flex">
          <input
            type="email"
            placeholder="Find a store near me"
            style={{ width: "26rem" }}
            className="py-1 px-6 sm:px-16 rounded-l-full rounded-r-full border border-gray-250 outline-none focus:ring-2 placeholder-left text-sm sm:text-base"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-green-300 text-blue-850 py-1 px-2 sm:px-4 rounded-l-full rounded-r-full ml-1 text-sm sm:text-base">
            Search
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
              Select a shopping partner
            </p>
            <div className="text-left ml-2">
              <p>
                Browse a wide variety of stores in our store <br /> directory,
                click apply now!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <p className="font-bold flex items-center">
              <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                2
              </span>
              Apply Online
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

      <div className="bg-gray-200 pb-5">
        <p className="text-black text-center align-middle text-2xl sm:text-4xl pt-5 font-light">
          Why choose a Fin Shopping Partner
        </p>
        <br />
        <br />
        <div className="flex flex-col md:flex-row items-start justify-center md:gap-56 lg:gap-72 sm:gap-4">
          <div className="flex flex-col items-start mb-4 md:mb-0 text-black">
            <p className="font-bold flex items-center">
              Convenient Online Shopping
            </p>
            <div className="text-left ml-2 text-black">
              <p>
                <span className="underline">Check online</span> to see if you
                qualify for a <br />
                <span className="font-bold">Fin Flexi Loan</span> and get
                approved <br /> instantly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <p className="font-bold flex items-center text-black">
              Flexible & Affordable Finance
            </p>
            <div className="text-left ml-2 text-black">
              <p>
                Fin Flexi Loans offers you low-interest, <br></br>flexible and
                afforable finance
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="font-bold flex items-center text-black">
              Safe, Secure & Confidential
            </p>
            <div className="text-left ml-2 text-black">
              <p>
                all Fin Flexi Loans Transactional are done <br /> in a safe,
                Secure and Confidential manner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 text-black bottom-0">
        <p className="text-black text-center align-middle text-3xl sm:text-4xl pt-2">
          We have you covered!
        </p>
        <br />
        <div className="flex items-center justify-center">
          <p>
            <span className="text-sm sm:text-base text-black text-center align-middle pt-2 pl-4">
              All our loans include{" "}
              <span className="font-bold">Credit Life Insurance,</span>{" "}
              safeguarding you against unforeseen insurable events that could
              affect your ability to repay. Gain peace of mind knowing
              you&apos;re protected. You&apos;ll receive courage for.
            </span>
          </p>
        </div>

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

      <div className="bg-white p-10 text-black bottom-0">
        <p className="text-black text-center align-middle text-3xl sm:text-4xl pt-2">
          Our Listed Partners
        </p>
        <br />
        <div className="flex flex-col items-center justify-center">
          <p>
            <span className="text-sm sm:text-base text-black text-center align-middle pt-2">
              Choose your ideal partner from our extensive selection of listed
              stores
            </span>
          </p>
          <Partners />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FinShoppingPartner;
