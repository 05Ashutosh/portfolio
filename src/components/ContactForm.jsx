// const ContactForm = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//       <form
//         action="https://formbold.com/s/6vgvg"
//         method="POST"
//         encType="multipart/form-data"
//       >
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-semibold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-semibold mb-2"
//             htmlFor="subject"
//           >
//             Subject
//           </label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             placeholder="Subject"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-semibold mb-2"
//             htmlFor="file"
//           >
//             File
//           </label>
//           <input
//             type="file"
//             id="file"
//             name="file"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             className="block text-gray-700 font-semibold mb-2"
//             htmlFor="message"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Type your message"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="5"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="p-6 bg-white/5 rounded-lg shadow-lg w-full max-w-md mx-auto bg-opacity-10 backdrop-filter backdrop-blur-sm">
      {/* <div className="w-full bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"> */}
      <div className="text-center text-white">
        <FlipLink href="#">Contact Us</FlipLink>
      </div>

      <form
        action="https://formbold.com/s/6vgvg"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Enter the subject of your message"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="file"
          >
            File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Upload a file"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
            aria-label="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          aria-label="Send your message"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-4xl lg:text-4xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
