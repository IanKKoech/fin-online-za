import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const FinPayStoreDirectory = () => {
  return (
    <div className="font-poppins p-0">
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-start items-center"
        style={{
          backgroundImage: `url('/assets/store-directory-image.jpg')`,
          color: "white",
          paddingLeft: "4rem",
          paddingBottom: "9rem",
        }}
      >
        <div>
          <p className="pl-4 pr-6 lg:pr-4 text-teal left-4 text-3xl sm:text-4xl font-light">
            <span style={{ fontWeight: "bold" }}>Fin</span> Pay Store Directory
          </p>
          <br />
          <br />
          <br />

          <p className="pl-4 pr-0 lg:pr-4 text-lg sm:text-2xl text-teal">
            Select from these quality brands and stores with best buys on a wide{" "}
            <br />
            range of products.
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
            Looking for a store, shopping for something specific ?
          </p>

          <br />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="Find a store near me or goods"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
