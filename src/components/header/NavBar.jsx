import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Icon.png"; // Adjust the path if needed
import { FaGithub, FaGlobe, FaFigma } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo and Site Name */}
        <div className="ml-20 flex items-center">
          <Link to="/home">
            {/* Sidebar */}

            <div className="fixed top-0 left-5 h-[40vh] w-8 bg-gray-800 flex flex-col items-center py-8 space-y-6">
              {/* Divider Line */}
              <div className="w-px h-24 bg-gray-600 mb-4"></div>

              {/* Social Media Icons */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGlobe size={24} />
              </a>
              <a
                href="https://figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFigma size={24} />
              </a>
            </div>

            <img src={logo} alt="Elias Logo" className="h-8 w-8" />
          </Link>
          <span className="ml-2 text-xl font-bold">Elias</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-purple-300" : "text-gray-300 hover:text-purple-300"
          }
        >
          #home
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "text-purple-300" : "text-gray-300 hover:text-purple-300"
          }
        >
          #works
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive ? "text-purple-300" : "text-gray-300 hover:text-purple-300"
          }
        >
          #about-me
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "text-purple-300" : "text-gray-300 hover:text-purple-300"
          }
        >
          #contacts
        </NavLink>
        <div className="text-gray-300 hover:text-white">
          <select className="bg-transparent border-none focus:outline-none">
            <option value="en" className="bg-gray-800 text-white">
              EN
            </option>
            <option value="fr" className="bg-gray-800 text-white">
              FR
            </option>
            <option value="es" className="bg-gray-800 text-white">
              ES
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
