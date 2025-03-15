"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"
import { useEffect } from "react"

export default function Contact() {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-transparent text-gray-100 overflow-x-hidden flex flex-col items-center justify-center px-4">
      <div className="max-w-7xl w-full py-16 md:py-24 text-center">
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Contact Me
            </span>
            <span className="ml-2">📬</span>
          </h1>
          <div className="relative h-1 w-24 mx-auto bg-gray-700 rounded-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Contact Info (Always Stacked & Centered) */}
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          {/* Contact Information */}
          <motion.div ref={ref} initial="hidden" animate={controls} className="w-full max-w-lg">
            <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-6 md:p-8 text-left">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {[{
                  icon: <FaMapMarkerAlt className="w-5 h-5" />,
                  title: "Location",
                  text: "Karachi, Pakistan 🌍"
                }, {
                  icon: <FaPhoneAlt className="w-5 h-5" />,
                  title: "Phone",
                  text: "+92 3492993488 📱"
                }, {
                  icon: <FaEnvelope className="w-5 h-5" />,
                  title: "Email",
                  text: "hafizsharjeelshakeel@gmail.com ✉️"
                }].map((item, index) => (
                  <motion.div key={index} className="flex items-start gap-4 group" whileHover={{ x: 10 }}>
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            </motion.div>
          </motion.div>

          {/* Quote Section (Always Below Contact Info & Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg"
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-8 text-center">
              <p className="text-xl text-gray-300 italic mb-4">
                "I'm always open to discussing new projects, opportunities, or partnerships."
              </p>
              <p className="text-gray-400">Let's build something amazing together!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
