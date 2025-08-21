import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export const Card = ({ title, data }) => {
  return (
    <div className="w-full flex justify-center items-center mx-auto my-6 ">
      <div
        className="w-4/5 ring-2 ring-gray-300 ring-offset-2 p-5 mt-5 rounded-2xl bg-white/40 backdrop-blur-lg shadow-xl
"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {data.map((project, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300
"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="relative group">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                    />

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">
                      {/* GitHub Button */}
                      <div className="relative group/btn">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
                        >
                          <FaGithub size={22} />
                        </a>
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md shadow-lg opacity-0 group-hover/btn:opacity-100 translate-y-2 group-hover/btn:translate-y-0 transition-all duration-300 whitespace-nowrap">
                          View Code
                          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></span>
                        </span>
                      </div>

                      {/* Live Demo Button */}
                      <div className="relative group/btn">
                        <a
                          href={project.livedemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md shadow-lg opacity-0 group-hover/btn:opacity-100 translate-y-2 group-hover/btn:translate-y-0 transition-all duration-300 whitespace-nowrap">
                          Live Demo
                          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-6 text-center w-full h-52">
                    <h3 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed flex items-start justify-center gap-2">
                      <span className="text-lg">📝</span> {project.discription}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
