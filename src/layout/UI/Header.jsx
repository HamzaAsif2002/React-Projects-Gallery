import { NavLink } from "react-router";
import { FcGallery } from "react-icons/fc";

export const Header = () => {
  return (
    <div className="w-full transition-all duration-500 ring-2 ring-gray-300 ring-offset-2">
      <div className="mx-auto w-[90%] flex justify-between items-center py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <div className=" flex items-center justify-center animate-bounce ">
            <FcGallery size={40} />
          </div>
          <span className="text-xl font-semibold text-gray-800 hover:text-green-500 transition-all duration-300 hover:scale-110">
            Projects Gallery
          </span>
        </div>

        {/* Right Section */}
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
      </div>
    </div>
  );
};
