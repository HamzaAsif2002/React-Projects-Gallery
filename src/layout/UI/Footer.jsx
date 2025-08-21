import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-[100%] bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-t border-gray-200 mt-10">
      <div className="w-[90%] m-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🚀 Projects Gallery
          </h2>
          <p className="text-gray-600 text-sm">
            Showcasing JavaScript & React projects with modern UI.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-all duration-300 hover:scale-110 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-800 hover:text-green-500"
              }`
            }
          >
            React Projects
          </NavLink>

          <NavLink
            to="/jsprojects"
            className={({ isActive }) =>
              `font-medium transition-all duration-300 hover:scale-110 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-500"
              }`
            }
          >
            JS Projects
          </NavLink>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/HamzaAsif2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-600 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-600 transition text-xl"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hamza20021asif@gmail.com"
            target="_blank"
            className="text-gray-500 hover:text-purple-600 transition text-xl"
          >
            <SiGmail />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Projects Gallery. Built with ❤️ using React
        & Tailwind CSS.
      </div>
    </footer>
  );
};
