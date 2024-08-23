import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaDribbble,
  // FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    // bg-[#1b2b2e]
    <div className="bg-black text-[#dcd7c9] py-12 px-6">
      <div className="w-[85vw] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-x-12">
        {/* Left Side: Get in Touch Text and Social Media Links */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm mb-6">
            Ecosystem bootstrapping learning curve lean startup disruptive.
            Marketing long tail disruptive agile development partner.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaPinterestP size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Info Cards */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className=" bg-black border w-60 p-6 rounded-md shadow-lg">
            <FaDribbble size={24} className="text-[#f9e8d7] mb-4" />
            <a
              href="https://dribbble.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              demo.com
            </a>
          </div>
          <div className="bg-black border w-60 p-6 rounded-md shadow-lg">
            {/* <FaEnvelope size={24} className="text-[#f9e8d7] mb-4" /> */}
            <a
              href="mailto:contact@example.com"
              className="text-white hover:text-gray-400"
            >
              ashutoshsingh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
