import Header from "@/components/Header";
import Footer from "@/components/Footer";
import scanMe from "../../../public/assets/FIN Online Loans V1-3/QR Code 1.png";
import api from "../../../public/assets/FIN Online Loans V1-3/API.png";
import idCopy from "../../../public/assets/FIN Online Loans V1-3/Payment.png";
import wallet from "../../../public/assets/FIN Online Loans V1-3/Pocketbook.png";
import bankConfirmation from "../../../public/assets/FIN Online Loans V1-3/Union.png";
import address from "../../../public/assets/FIN Online Loans V1-3/Component.png";
import food from "../../../public/assets/FIN Online Loans V1-3/Food.png";

const FinPayPage = () => {
  return (
    <div className="font-poppins">
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-start items-center"
        style={{
          backgroundImage: `url(&apos;/assets/FIN Welcome Page Assets/Finpay image.jpg&apos;)`,
          color: "white",
          paddingLeft: "4rem",
          paddingBottom: "9rem",
        }}
      >
        <div>
          <p className="pl-4 text-teal left-4 text-3xl sm:text-4xl font-light">
            <span style={{ fontWeight: "bold" }}>
              <br />
              FIN
            </span>{" "}
            Pay
          </p>
          <br />
          <p className="pl-4 text-lg sm:text-2xl text-teal">
            As a business owner, you recognise the importance of providing
            customers with options <br />
            to foster simplicity and loyalty. At Fin, we share this
            understanding, which is why we <br />
            specialise in crafting personalised credit solutions for businesses
            of all sizes. Our{" "}
            <span style={{ fontWeight: "bold" }}>Fin Pay</span> <br />
            services allows businesses to seamlessly offer in-store or online
            credit to their customers, <br />
            all without incurring additional costs. With our innovative QR code
            and Apply at checkout <br />
            credit solutions, paying for goods and services becomes effortlessly
            streamlined for <br />
            business owners.
          </p>
        </div>
      </div>

      <div className="relative -top-8 md:-top-10">
        <div className="bottom-10 left-0 w-full bg-white text-black overflow-hidden rounded-t-3xl">
          <p className="text-lg sm:text-2xl text-black text-center py-6">
            Boost your sales, register your business today!
          </p>
        </div>

        <div className="flex items-center justify-center bg-gray-200 pt-10">
          <div className="relative flex">
            <input
              type="email"
              placeholder="Your business email address"
              style={{ width: "20rem" }}
              className="py-1 px-6 sm:px-16 rounded-l-full rounded-r-full border border-gray-250 outline-none focus:ring-2 placeholder-left text-sm sm:text-base"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-green-300 text-blue-850 py-1 px-2 sm:px-4 rounded-l-full rounded-r-full ml-1 text-sm sm:text-base">
              Sign up now
            </button>
          </div>
          <br />

          <br />
        </div>

        <div className="bg-gray-200 pb-5">
          <p className="text-black text-center align-middle text-2xl sm:text-4xl pt-5 font-light">
            How it works
          </p>
          <br />
          <p className="text-black text-center text-pretty text-base font-light">
            Registering is quick and easy!{" "}
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
                Register
              </p>
              <div className="text-left ml-2">
                <p>
                  Complete the online registration <br></br>process, upload your
                  documents
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mb-4 md:mb-0">
              <p className="font-bold flex items-center">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                  2
                </span>
                Approval
              </p>
              <div className="text-left ml-2">
                <p>
                  Once approved, log in on the portal, <br></br>
                  get your unique URL for website referrals, <br />
                  QR code to display at POS or in isle/Shelf or <br />
                  access the check out API.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold flex items-center">
                <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                  3
                </span>
                Get Started
              </p>
              <div className="text-left ml-2">
                <p>
                  Customers can apply via your website <br />
                  in store and you get paid direct to <br />
                  your bank account within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex justify-center items-center pt-10 relative">
          <img className="w-20 h-auto mx-2" src={scanMe.src} alt="Image 1" />
          <div className="relative">
            <img
              src={food.src}
              className="w-32 h-auto mx-2 absolute top-0 left-0"
              style={{marginTop: "-24px"}}
            />
            <img className="w-18 h-auto mx-2" src={api.src} alt="Image 2" />
          </div>
        </div>
       
        <div className="bg-white p-10 text-black bottom-0 pb-60">
          <p className="text-black text-center align-middle text-3xl sm:text-4xl pt-2">
            What do you need ?
            <br />
          
            <span className="font-normal" style={{ fontSize: "1.2rem" }}>
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
              <p className="mt-4 text-center">Copy of <br />director&apos;s ID</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={wallet.src}
                  alt="Proof of Income"
                  className="h-11 w-11"
                />
              </div>
              <p className="mt-4 text-center">CICP <br /> COR 39</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20  flex justify-center items-center">
                <img
                  src={bankConfirmation.src}
                  alt="3 Months statement"
                  className="h-11 w-11"
                />
              </div>
              <p className="mt-4 text-center">
                Bank <br /> Confirmation
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20  flex justify-center items-center">
                <img
                  src={address.src}
                  alt="Residence Proof"
                  className="h-11 w-11"
                />
              </div>
              <p className="mt-4 text-center">
                Proof of <br /> business addre
              </p>
            </div>
          </div>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default FinPayPage;
