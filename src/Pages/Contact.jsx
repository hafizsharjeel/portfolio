"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"
import { useEffect } from "react"

export default function Contact() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header with animated underline */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Contact Me
            </span>
            <span className="ml-2">📬</span>
          </h1>
          <div className="relative h-1 w-24 mx-auto overflow-hidden rounded-full bg-gray-700">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Contact info and form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact information */}
          <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="w-full">
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl h-full"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                        Location
                      </h3>
                      <p className="text-gray-300">Karachi, Pakistan 🌍</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                      <FaPhoneAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                        Phone
                      </h3>
                      <p className="text-gray-300">+92 3492993488 📱</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                        Email
                      </h3>
                      <p className="text-gray-300 break-all">hafizsharjeelshakeel@gmail.com ✉️</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                  <motion.a
                    href="https://pk.linkedin.com/in/hafiz-sharjeel-shakeel-260b67179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077B5]/20 text-[#0077B5] hover:bg-[#0077B5]/30 py-2.5 px-5 rounded-full flex items-center gap-2 border border-[#0077B5]/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/hafizsharjeel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700/30 text-gray-300 hover:bg-gray-700/50 py-2.5 px-5 rounded-full flex items-center gap-2 border border-gray-600/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600"></div>
            </motion.div>
          </motion.div>


        {/* Quote or call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl p-8 relative">
            <div className="relative">
              <p className="text-xl text-gray-300 italic mb-4">
                "I'm always open to discussing new projects, opportunities, or partnerships."
              </p>
              <p className="text-gray-400">Let's build something amazing together!</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 absolute bottom-0 left-0"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

