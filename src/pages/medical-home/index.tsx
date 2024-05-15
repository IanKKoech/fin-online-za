import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testomonials";
import HealthInstitutions from "@/components/HealthInsititution";
import idCopy from "../../../public/assets/32х32/Stroked/Payment.png";
import incomeProof from "../../../public/assets/32х32/Stroked/Pocketbook.png";
import statement from "../../../public/assets/Union.png";
import residence from "../../../public/assets/Component.png";
import tempDisability from "../../../public/assets/Layer_1.png";
import permDisability from "../../../public/assets/Vector.png";
import death from "../../../public/assets/Layer_1-2.png";
import retrenchment from "../../../public/assets/Layer_1-1.png";
import facial from "../../../public/assets/plasticSurgery.jpg";
import dental from "../../../public/assets/Dental.jpg";
import hearingImage from "../../../public/assets/HearingAid.jpg";
import stethescopeImage from "../../../public/assets/Stethescope.jpg";
import Link from "next/link";
import Image from "next/image";

export const MedicalHome = () => {
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
            <span style={{ fontWeight: "bold" }}>FIN</span> Medical Loans
          </p>
          <br />
          <p className="pl-4 pr-0 lg:pr-4 text-lg sm:text-2xl text-teal">
            Welcome to{" "}
            <span style={{ fontWeight: "bold" }}>Fin Medical Loans</span>, South
            Africa&apos;s niche Medical Financial
            <br />
            Services Provider. We enable South Africans to obtain those medical{" "}
            <br />
            procedures not covered by their medical aid provider.
          </p>
        </div>
      </div>

      <div className="relative" style={{ marginTop: "-4rem" }}>
        <div
          className="relative bottom-0 left-0 w-full bg-white text-black overflow-hidden"
          style={{
            borderTopLeftRadius: "4.5rem",
            borderTopRightRadius: "4.5rem",
          }}
        >
          <br />

          <br />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="Find a medical partner near you"
                  style={{ width: "26rem" }}
                  className="py-1 px-6 sm:px-16 rounded-l-full rounded-r-full border border-gray-250 outline-none focus:ring-2 placeholder-left text-sm sm:text-base"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-green-300 text-blue-850 py-1 px-2 sm:px-4 rounded-l-full rounded-r-full ml-1 text-sm sm:text-base">
                  Search
                </button>
              </div>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div className="bg-white">
            <p className="text-black text-center align-middle text-3xl pt-5">
              How can we help you
            </p>
            <br></br>
            <p className="text-black text-center text-pretty text-0xl font-light ">
              South Africa&apos;s preferred Medical Finance Provider Whether
              it&apos;s a scan that saves your life or that cosmetic or dental
              surgery you&apos;ve <br></br> always wanted, Fin Medical Loans has
              a Life-Changing loan that&apos;s right for you.
            </p>
            <br></br>
          </div>
          <div className="bg-white">
            <div className="relative bottom-0 left-0 bg-white px-6 sm:pl-80 sm:pr-80 align-middle">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 md:gap-4 sm:justify-between mb-4">
                <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white mb-4 sm:mb-0">
                  <Link href="/dental-finance">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                      <img
                        className="w-full h-auto object-cover rounded-t-lg"
                        src={facial.src}
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white text-lg font-semibold">
                        Cosmetic Surgery
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white mb-4 sm:mb-0">
                  <Link href="/dental-finance">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                      <img
                        className="w-full h-auto object-cover rounded-t-lg"
                        src={dental.src}
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white text-lg font-semibold">
                        Dental Surgery
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 mb-4 sm:mb-0">
                  <Link href="/dental-finance">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                      <img
                        className="w-full h-auto object-cover rounded-t-lg"
                        src={hearingImage.src}
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white text-lg font-semibold">
                        Hearing/Audiology
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="block w-full sm:w-auto md:w-[25rem] rounded-lg bg-blue-950 text-white shadow-secondary-1 mb-4 sm:mb-0">
                  <Link href="/dental-finance">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat h-36">
                      <img
                        className="w-full h-auto object-cover rounded-t-lg"
                        src={stethescopeImage.src}
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white text-lg font-semibold">
                        General Healthcare
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* End of carousel */}
              <br />
            </div>
          </div>

          <br></br>
          <br></br>

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
            <div className="flex flex-col md:flex-row items-start justify-center md:gap-56 lg:gap-72 sm:gap-4">
              <div className="flex flex-col items-start mb-4 md:mb-0">
                <p className="font-bold flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                    1
                  </span>
                  Apply Online
                </p>
                <div className="text-left ml-2">
                  <p>
                    Apply online and check whether <br></br>you qualify for a{" "}
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
                    We&apos;ll get back to you within <br></br> a business hour
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                    3
                  </span>
                  Payment Made
                </p>
                <div className="text-left ml-2">
                  <p>
                    Once accepted we will make a <br></br>payment directly to
                    your general <br></br>Surgery Practitioner within 24
                    <br></br> hours.
                  </p>
                </div>
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
            Why choose Fin Medical Loans?
          </p>
          <br />
          <br />
          <div className="flex flex-col md:flex-row items-start justify-center md:gap-56 lg:gap-72 sm:gap-4">
            <div className="flex flex-col items-start mb-4 md:mb-0 text-black">
              <p className="font-bold flex items-center">
                Convenient Online Application
              </p>
              <div className="text-left ml-2 text-black">
                <p>
                  <span className="underline">Check online</span> to see if you
                  qualify for a <br />
                  <span className="font-bold">Fin Medical Loan</span> and get
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
                  Fin Medical Loans offers you low-interest, <br></br>flexible
                  and afforable Medical finance
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold flex items-center text-black">
                Safe, Secure & Confidential
              </p>
              <div className="text-left ml-2 text-black">
                <p>
                  all Fin Medical Loans Transactional are done <br /> in a safe,
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
          <p className="text-sm sm:text-base text-black text-center flex justify-center items-center">
            All our loans include {"  "}
            <span className="font-bold"> Credit Life Insurance, </span>{"  "}
            safeguarding you against unforeseen insurable events that could
            affect your ability to repay. Gain peace of mind knowing you&lsquo;re
            protected. You&lsquo;ll receive courage for.
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

        <div>
          <HealthInstitutions />
        </div>

        <div className="bg-white pt-4 pb-4">
          <p></p>
          <br></br>
          <br></br>
          <p className="text-center align-middle text-3xl text-black font-light">
            Still on the fence, here&apos;s what <br></br>{" "}
            <span className="text-green-400">our users</span> are saying
          </p>
          <Testimonials />
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default MedicalHome;
