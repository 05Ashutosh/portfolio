// import React from "react";
// import { FaEnvelope } from "react-icons/fa";

// const NextProject = () => {
//   return (
//     <div className="text-center py-10">
//       <h2 className="text-3xl font-bold mb-6">
//         Tell me about your next project
//       </h2>
//       <button
//         className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md
//                    hover:bg-blue-700 transition-colors duration-300"
//       >
//         Get in Touch{" "}
//         <span className="ml-2">
//           <FaEnvelope size={18} />
//         </span>
//       </button>
//     </div>
//   );
// };

// export default NextProject;

import { FaEnvelope } from "react-icons/fa";

const NextProject = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* Heading */}
      <h2 className="text-4xl text-center mx-auto font-semibold  bg-gradient-to-r from-white via-white to-[#7F7F7D] bg-clip-text text-transparent  mb-8">
        <span className="font-semibold">Tell me</span> about your{" "}
        <span className="font-semibold">next project</span>
      </h2>

      {/* Button */}
      <button
        className="flex items-center px-8 py-3 bg-transparent border border-white/20 text-stone-300
                   hover:bg-[#212121] hover:border-gray-500 hover:text-white rounded-md mb-12   hover:shadow-2xl hover:shadow-black transition-all duration-300 
                         transform hover:-translate-x-0 hover:translate-y-1 "
      >
        Get in Touch{" "}
        <span className="ml-2">
          <FaEnvelope size={18} />
        </span>
      </button>
    </div>
  );
};

export default NextProject;
