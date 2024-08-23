// import React from "react";
// import { FaPencilAlt, FaMobileAlt, FaPalette, FaCode } from "react-icons/fa";

// const projects = [
//   {
//     title: "UX & UI",
//     description:
//       "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
//     icon: <FaPencilAlt size={20} className="text-gray-300" />,
//   },
//   {
//     title: "Web & Mobile App",
//     description:
//       "Transforming ideas into exceptional web and mobile app experiences.",
//     icon: <FaMobileAlt size={20} className="text-gray-300" />,
//   },
//   {
//     title: "Design & Creative",
//     description:
//       "Crafting visually stunning designs that connect with your audience.",
//     icon: <FaPalette size={20} className="text-gray-300" />,
//   },
//   {
//     title: "Development",
//     description:
//       "Bringing your vision to life with the latest technology and design trends.",
//     icon: <FaCode size={20} className="text-gray-300" />,
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section className="bg-[#212121] text-white py-20">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-12">
//           <span className="text-white">Collaborate</span> with brands and
//           agencies to <span className="text-white">create</span> impactful
//           results.
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="p-8 h-[350px]  hover:shadow-2xl hover:shadow-black transition-shadow duration-300
//                          bg-white/5 backdrop-blur-lg border border-white/20 justify-between text-start"
//             >
//               <div className="h-[100px]"></div>
//               <div className="mb-6">{project.icon}</div>
//               <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
//               <p className="text-gray-300">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

import React from "react";
import { FaPencilAlt, FaMobileAlt, FaPalette, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    icon: <FaPencilAlt size={20} className="text-gray-300" />,
  },
  {
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
    icon: <FaMobileAlt size={20} className="text-gray-300" />,
  },
  {
    title: "Design & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
    icon: <FaPalette size={20} className="text-gray-300" />,
  },
  {
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    icon: <FaCode size={20} className="text-gray-300" />,
  },
];

const ProjectsSection = () => {
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto text-center">
        {/* <h2 className="text-4xl font-bold mb-12">
          <span className="text-white">Collaborate</span> with brands and
          agencies to <span className="text-white">create</span> impactful
          results.
        </h2> */}

        <h2 className="mx-auto mb-12 font-semibold text-4xl bg-gradient-to-r from-white via-white to-[#7F7F7D] bg-clip-text text-transparent md:w-[40vw]">
          Collaborate with brands and agencies to create impactful result.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 h-[320px] bg-white/5 backdrop-blur-lg border border-white/20 
                         rounded-md  hover:shadow-2xl hover:shadow-black transition-all duration-300 
                         transform hover:-translate-x-1 hover:translate-y-1 text-start overflow-hidden"
            >
              <div className="h-[110px]"></div>
              <div className="mb-6">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
