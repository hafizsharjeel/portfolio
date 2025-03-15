"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaWhatsapp, FaShieldAlt, FaLock, FaTerminal } from "react-icons/fa"

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-100 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-green-500/5 z-0"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 6,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-green-500/5 z-0"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 flex flex-col items-center">
        <div className="max-w-5xl w-full">
          {/* Main content area */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left column - Image */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:w-2/5 flex justify-center">
              <div className="relative">
                {/* Animated ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full"
                  animate={{
                    background: [
                      "linear-gradient(90deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.2) 100%)",
                      "linear-gradient(180deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.2) 100%)",
                      "linear-gradient(270deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.2) 100%)",
                      "linear-gradient(0deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.2) 100%)",
                      "linear-gradient(90deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.2) 100%)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "linear",
                  }}
                />

                {/* Profile image with glow effect */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-sm opacity-70"></div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/191956513?v=4"
                      alt="Hafiz Sharjeel Shakeel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <FaShieldAlt className="h-5 w-5" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Text content */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-3/5">
              <motion.div variants={fadeInUp} className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="h-px w-8 bg-green-500 mr-4"></div>
                  <span className="text-green-400 font-medium">Welcome</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                    Hi
                  </span>
                  <span className="mx-2">👋</span>
                  <span className="block mt-2 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                    I'm Hafiz Sharjeel Shakeel
                  </span>
                </h1>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <FaLock className="h-5 w-5 text-green-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Cybersecurity Professional</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Aspiring Cybersecurity professional passionate about learning the latest security techniques and
                    building a safe digital world 🔐
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Penetration Testing", "Network Security", "Threat Analysis"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700/70 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View My Projects
                    <FaTerminal className="ml-2 h-5 w-5" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>

                <Link
                  to="/contact"
                  className="group relative overflow-hidden bg-gray-800/80 backdrop-blur-sm text-white py-3 px-8 rounded-lg text-lg font-medium shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get in Touch
                    <span className="ml-2">✉️</span>
                  </span>
                  <span className="absolute inset-0 bg-green-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mt-16 flex justify-center">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
              <div className="flex space-x-8">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://pk.linkedin.com/in/hafiz-sharjeel-shakeel-260b67179",
                    color: "text-[#0077B5]",
                    hoverColor: "group-hover:bg-[#0077B5]/20",
                  },
                  {
                    icon: FaGithub,
                    href: "https://github.com/hafizsharjeel",
                    color: "text-white",
                    hoverColor: "group-hover:bg-gray-600/20",
                  },
                  {
                    icon: FaWhatsapp,
                    href: "https://wa.me/+923492993488",
                    color: "text-[#25D366]",
                    hoverColor: "group-hover:bg-[#25D366]/20",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-full transition-all duration-300 ${social.hoverColor}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`h-6 w-6 ${social.color}`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative code element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 right-8 hidden lg:block"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 font-mono text-sm text-green-400">
              <div>$ whoami</div>
              <div>&gt; cybersecurity_specialist</div>
              <div>$ skills --list</div>
              <div>&gt; ["penetration_testing", "network_security", "threat_analysis"]</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home

