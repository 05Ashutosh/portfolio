// import React from "react";

// const ContactText = () => {
//   return (
//     <div className="flex items-center justify-center h-screen text-center">
//       <div>
//         <h2 className="text-4xl font-bold text-white">
//           Let's chat
//           <br />
//           Tell me about your
//           <br />
//           project.
//         </h2>
//         <p className="text-2xl text-gray-300 mt-4">
//           Let's create something together <span className="text-4xl">🤘</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactText;

import React from "react";

const ContactText = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen text-center px-4">
      <h2 className="text-4xl font-bold text-white">
        Let's chat
        <br />
        Tell me about your
        <br />
        project.
      </h2>
      <p className="text-2xl text-gray-300 mt-4">
        Let's create something together <span className="text-4xl">🤘</span>
      </p>
    </div>
  );
};

export default ContactText;
