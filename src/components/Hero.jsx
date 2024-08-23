import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="text-white py-20 px-6">
      <div className="w-[85vw] mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 sm:order-2 xl:order-1 ">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
            Working with small brands and artists doing inspiring, creative
            work.
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Hi , I’m Ashutosh,
            <br />
            a Full Stack developer and
            <br />
            Deep Learning exp.
          </h1>
        </div>

        {/* Right Side: Image */}

        {/* <div className="md:w-1/2">
          <img
            src={hero}
            alt="Justin with Camera"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div> */}

        {/* Right Side: Image */}
        <div className="md:w-1/2 sm:order-1 xl:order-2">
          <img
            src={hero}
            alt="Justin with Camera"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
