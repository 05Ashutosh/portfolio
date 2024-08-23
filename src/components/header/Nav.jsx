// import logo from "../../assets/Icon.png";
// import { Link, NavLink } from "react-router-dom";

// const Nav = () => {
//   return (
//     <div className="bg-black text-white flex justify-center items-center">
//       <div className="flex justify-between items-center w-[85vw] mx-auto h-20">
//         <div className="flex items-center">
//           <Link to="/home" className="flex items-center">
//             <img src={logo} alt="logo" className="h-16 w-16 mr-2" />
//             <span className="text-xl font-bold">Ashu</span>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-6">
//           <NavLink
//             to={"/home"}
//             className={({ isActive }) =>
//               isActive ? "text-[#f9e8d7]" : "text-gray-300 hover:font-bold"
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to={"/works"}
//             className={({ isActive }) =>
//               isActive ? "text-[#f9e8d7]" : "text-gray-300 hover: font-bold"
//             }
//           >
//             Works
//           </NavLink>

//           <NavLink
//             to={"/about-me"}
//             className={({ isActive }) =>
//               isActive ? "text-[#f9e8d7]" : "text-gray-300 hover: font-bold"
//             }
//           >
//             About Me
//           </NavLink>

//           <NavLink
//             to={"/contact-me"}
//             className={({ isActive }) =>
//               isActive ? "text-[#f9e8d7]" : "text-gray-300 hover: font-bold"
//             }
//           >
//             Contact Me
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import logo from "../../assets/Icon.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center w-[95vw] md:w-[85vw] mx-auto h-20">
        <div className="flex items-center">
          <Link to="/home" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 md:h-16 md:w-16 mr-2"
            />
            <span className="text-lg md:text-xl font-bold">Ashu</span>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black py-2 z-99 absolute top-20 left-0 right-0">
          <div className="flex flex-col items-center space-y-4 w-full">
            <NavLinks mobile={true} />
          </div>
        </div>
      )}
    </div>
  );
};

// Separate component for NavLinks to avoid repetition
const NavLinks = ({ mobile }) => (
  <>
    <NavLink
      to="/home"
      className={({ isActive }) =>
        `${isActive ? "text-[#f9e8d7]" : "text-gray-300 hover:font-bold"} ${
          mobile ? "w-full text-center py-2" : ""
        }`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/works"
      className={({ isActive }) =>
        `${isActive ? "text-[#f9e8d7]" : "text-gray-300 hover:font-bold"} ${
          mobile ? "w-full text-center py-2" : ""
        }`
      }
    >
      Works
    </NavLink>
    <NavLink
      to="/about-me"
      className={({ isActive }) =>
        `${isActive ? "text-[#f9e8d7]" : "text-gray-300 hover:font-bold"} ${
          mobile ? "w-full text-center py-2" : ""
        }`
      }
    >
      About Me
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `${isActive ? "text-[#f9e8d7]" : "text-gray-300 hover:font-bold"} ${
          mobile ? "w-full text-center py-2" : ""
        }`
      }
    >
      Contact Me
    </NavLink>
  </>
);

export default Nav;
