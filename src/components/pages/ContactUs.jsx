// import ContactForm from "../ContactForm";
// import ContactText from "../contactText";
// import "./home/DotPattern.css";

// const ContactUs = () => {
//   return (
//     // <div className=" bg-gray-100 h-[100vh]  flex items-center justify-center">
//     <div className="dot-pattern-background flex flex-row w-full justify-center m-auto">
//       <ContactText />
//       <ContactForm />
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import ContactForm from "../ContactForm"; // Adjusted the import to match the updated component structure
import ContactText from "../ContactText";
import "./home/DotPattern.css"; // Ensure this file contains the CSS for the dot pattern and animation

const ContactUs = () => {
  return (
    <div className=" dot-pattern-background flex flex-col md:flex-row items-center justify-center h-screen w-full">
      <div className="md:w-1/2 p-4">
        <ContactText />
      </div>
      <div className="md:w-1/2 p-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
