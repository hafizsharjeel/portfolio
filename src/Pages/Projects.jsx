"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projectData = [
    {
      title: "🛡️ ImageCryptX - Secure Image Encryption Tool",
      description:
        "ImageCryptX is an advanced encryption tool designed to securely encrypt and decrypt images using state-of-the-art cryptographic techniques. This ensures that sensitive visual data remains protected from unauthorized access. Whether for personal use or secure communication, ImageCryptX guarantees confidentiality and integrity of images.",
      image: "/imagecryptx.jpg",
      liveLink: "https://example.com/imagecryptx",
      githubLink: "https://github.com/example/imagecryptx",
      demoText: "View Live Demo 🚀",
    },
    {
      title: "🎣 CyberPhish - Ethical Phishing Awareness Tool",
      description:
        "CyberPhish is an educational cybersecurity tool designed to simulate phishing attacks for security awareness and penetration testing. It helps organizations and individuals understand the risks of phishing by demonstrating how attackers trick users into revealing sensitive credentials. This tool is strictly for ethical hacking and educational purposes to improve security awareness and train users against phishing threats.",
      image: "/cyberphish.jpg",
      liveLink: "https://example.com/cyberphish",
      githubLink: "https://github.com/example/cyberphish",
      demoText: "How to Use It 📚",
    },
    {
      title: "📡 Packet-Vision - Advanced Network Packet Analyzer",
      description:
        "Packet-Vision is a powerful network packet analyzer designed for real-time traffic monitoring, packet inspection, and cybersecurity analysis. It helps penetration testers, security researchers, and network administrators detect vulnerabilities, analyze suspicious network activity, and ensure secure data transmission. Built as a high-performance alternative to traditional tools, PacketVision enhances deep packet inspection (DPI) capabilities for advanced cybersecurity analysis.",
      image: "/packetvision.jpg",
      liveLink: "https://example.com/packetvision",
      githubLink: "https://github.com/example/packetvision",
      demoText: "How to Use It 📚",
    },
  ]

  const [showMore, setShowMore] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const visibleProjects = showMore ? projectData : projectData.slice(0, 2)

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
    <div className="min-h-screen bg-transparent text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header with animated underline */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              My Projects
            </span>
            <span className="ml-2">🛠️</span>
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

        {/* Projects grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="relative">
                  {/* Glowing effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-t-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>

                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-sm md:text-base">{project.description}</p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-full shadow-md font-medium text-sm md:text-base flex items-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.demoText}
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2 px-4 rounded-full shadow-md font-medium text-sm md:text-base flex items-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(12, 245, 24, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Efforts
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more/less button */}
        {projectData.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              onClick={toggleShowMore}
              className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2.5 px-6 rounded-full shadow-md font-medium text-sm md:text-base relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(12, 219, 47, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0.5 bg-gradient-to-r from-green-600 to-green-800 rounded-full group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">{showMore ? "Show Less" : "Show More"} 📜</span>
            </motion.button>
          </motion.div>
        )}

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl p-8 relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
            <div className="relative">
              <p className="text-xl text-gray-300 italic mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <p className="text-gray-400">— Cory House</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 absolute bottom-0 left-0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

