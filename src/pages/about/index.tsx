import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const AboutUs = () => {
  return (
    <div className="font-poppins">
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-start items-center"
        style={{
          backgroundImage: `url('/assets/FIN Online Loans V1-3/About-us-image.jpg')`,
          color: "white",
          paddingLeft: "4rem",
          paddingBottom: "9rem",
        }}
      >
        <div>
          <p className="pl-4 text-teal left-4 text-3xl sm:text-4xl font-light">
            Who Is
            <span style={{ fontWeight: "bold" }}>
              <br />
              Fin?
            </span>
          </p>
          <br />
          <br />
          <p className="pl-4 text-lg sm:text-2xl text-teal">
            We are <span style={{ fontWeight: "bold" }}>Fin</span> (formerly
            Finclusion Group) - providing simply smarter <br /> finance for
            everybody. Together with our partners, we provide credit <br />{" "}
            savings, insurance and more: fast, convenient and reliable.
          </p>
        </div>
      </div>

      <div className="bottom-10 p-20 left-0 w-full bg-white text-black overflow-hidden rounded-t-3xl">
        <p className="text-lg sm:text-3xl text-black text-center py-6 pb-5">
          What we stand for...
        </p>
        <div>
          <div className="flex flex-col md:flex-row items-start justify-center md:gap-56 lg:gap-72 sm:gap-4">
            <div className="flex flex-col items-start mb-4 md:mb-0">
              <p className="font-bold flex items-start">Mission</p>
              <div className="text-left ml-2">
                <p>
                  We enhance the quality of life of <br />
                  our customers through simple, <br />
                  convenient, and appropriate <br /> financial services.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mb-4 md:mb-0">
              <p className="font-bold flex items-center">Vision</p>
              <div className="text-left ml-2">
                <p>
                  We are creating an ecosystem <br /> where people and
                  organisations <br />
                  can access financial solutions that <br /> help them meet
                  their objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-black text-center align-middle pb-20 pt-10">
        <p className="text-black text-center align-middle text-2xl sm:text-4xl pt-5 font-light">
          Our Values
        </p>
        <br />
        <br />
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 lg:gap-24 sm:gap-4">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <p className="font-bold flex items-center">
              <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                1
              </span>
              <span className="ml-2">People</span>
            </p>
            <div className="text-left ml-2">
              <p>
                We enhance the quality <br /> of life of our customers <br />{" "}
                through simple, <br /> convenient, and <br /> appropriate
                financial <br /> services.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <p className="font-bold flex items-center">
              <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                2
              </span>
              <span className="ml-2">Innovation</span>
            </p>
            <div className="text-left ml-2">
              <p>
                We are never satisfied with <br /> the status quo and <br />{" "}
                relentlessly seek to improve. <br />
                Innovation is a natural <br /> output when we <br /> understand
                people's <br /> motivations individually <br /> and work
                together as teams <br /> towards a shared <br /> vision.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <p className="font-bold flex items-center">
              <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                3
              </span>
              <span className="ml-2">Teamwork</span>
            </p>
            <div className="text-left ml-2">
              <p>
                Teamwork <br /> when pursuing our mission <br /> and vision, our{" "}
                methodology <br /> is founded on collaboration and working as a
                team to <br /> solve <br /> the problems we all face.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <p className="font-bold flex items-center">
              <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-black mb-2 font-bold mr-2">
                4
              </span>
              <span className="ml-2">Integrity</span>
            </p>
            <div className="text-left ml-2">
              <p>
                We believe in being <br /> authentic. We believe <br /> in
                standing for what is <br />
                right. What we say is <br /> what we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-60"></div>

      <Footer />
    </div>
  );
};

export default AboutUs;
