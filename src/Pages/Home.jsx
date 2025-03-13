import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 pt-20 relative overflow-hidden" 
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 z-10 flex flex-col sm:flex-row items-center text-center sm:text-left"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
          Hi
        </span>
        <span className="mx-2">👋</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
          , I'm Hafiz Sharjeel Shakeel
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="text-xl text-gray-300 mb-12 text-center max-w-2xl z-10"
      >
        <span className="font-semibold text-white">Aspiring Cybersecurity professional passionate about learning the latest security techniques and building a safe digital world🔐.</span>
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl mb-8 sm:mb-12 ring-4 ring-green-500 ring-opacity-50 z-10"
      >
        <img
          src="https://avatars.githubusercontent.com/u/191956513?v=4"
          alt="Hafiz Sharjeel Shakeel"
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        className="flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto"
      >
        <Link
          to="/projects"
          className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300 bg-opacity-70 backdrop-blur-sm"

        >
          View My Projects 🖥️
        </Link>
        <Link
          to="/contact"
          className="bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-600"
        >
          Get in Touch ✉️
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="flex justify-center space-x-4 sm:space-x-8 mt-8 sm:mt-12 z-10"
      >
        {[
          { icon: FaLinkedin, href: "https://pk.linkedin.com/in/hafiz-sharjeel-shakeel-260b67179", color: "text-blue-400",},
          { icon: FaGithub, href: "https://github.com/hafizsharjeel", color: "text-gray-400", },
          { icon: FaWhatsapp, href: "https://wa.me/+923492993488", color: "text-green-400",}
          
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} hover:text-white transition duration-300`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon size={36} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;