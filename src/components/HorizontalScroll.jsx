// // import ImageItem from "./ImageItem";
// // import "./main.css";

// // const HorizontalScroll = ({ urls }) => {
// //   if (!Array.isArray(urls)) {
// //     return <div>Urls is not an array</div>;
// //   }

// //   return (
// //     <div className="horizontal-scroll-section bg-[#212121] text-white">
// //       <div className="flex space-x-6 px-6">
// //         {urls.map((url, index) => (
// //           <ImageItem
// //             key={index}
// //             src={url}
// //             alt={`Video ${index + 1}`}
// //             title={`Video Title ${index + 1}`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HorizontalScroll;

import React from "react";

function HorizontalScroll() {
  const scrollContainerRef = React.createRef();

  const handleWheel = (event) => {
    event.preventDefault();
    const scrollPosition =
      (window.scrollY / window.innerHeight) *
      scrollContainerRef.current.scrollWidth;
    scrollContainerRef.current.scrollLeft = scrollPosition;
    scrollContainerRef.current.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-y-hidden overflow-x-auto whitespace-nowrap scroll-smooth"
    >
      <div className="section w-full h-screen bg-red-500 flex justify-center items-center">
        <h1>Section 1</h1>
      </div>
      <div className="section w-full h-screen bg-purple-500 flex justify-center items-center">
        <h1>Section 2</h1>
      </div>
      <div className="section w-full h-screen bg-blue-500 flex justify-center items-center">
        <h1>Section 3</h1>
      </div>
      <div className="section w-full h-screen bg-green-500 flex justify-center items-center">
        <h1>Section 4</h1>
      </div>
    </div>
  );
}

export default HorizontalScroll;

// import React, { useRef, useEffect, useState } from "react";

// function HorizontalScroll() {
//   const scrollContainerRef = useRef(null);
//   const [activeSection, setActiveSection] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const newActiveSection = Math.floor(scrollY / windowHeight);

//       if (newActiveSection !== activeSection) {
//         setActiveSection(newActiveSection);
//         scrollContainerRef.current.scrollTo({
//           left: newActiveSection * window.innerWidth,
//           behavior: "smooth",
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSection]);

//   return (
//     <div style={{ height: "400vh" }}>
//       {" "}
//       {/* This creates a scrollable area */}
//       <div
//         ref={scrollContainerRef}
//         className="overflow-x-hidden whitespace-nowrap scroll-smooth fixed top-0 left-0 w-screen h-screen"
//       >
//         <div className="section inline-block w-screen h-screen bg-red-500 flex justify-center items-center">
//           <h1>Section 1</h1>
//         </div>
//         <div className="section inline-block w-screen h-screen bg-purple-500 flex justify-center items-center">
//           <h1>Section 2</h1>
//         </div>
//         <div className="section inline-block w-screen h-screen bg-blue-500 flex justify-center items-center">
//           <h1>Section 3</h1>
//         </div>
//         <div className="section inline-block w-screen h-screen bg-green-500 flex justify-center items-center">
//           <h1>Section 4</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HorizontalScroll;
