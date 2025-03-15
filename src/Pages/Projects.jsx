"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock, FaNetworkWired } from "react-icons/fa"

export default function Projects() {
  const projectData = [
    {
      title: "ImageCryptX",
      subtitle: "Secure Image Encryption Tool",
      emoji: "🛡️",
      description:
        "ImageCryptX is an advanced encryption tool designed to securely encrypt and decrypt images using state-of-the-art cryptographic techniques. This ensures that sensitive visual data remains protected from unauthorized access. Whether for personal use or secure communication, ImageCryptX guarantees confidentiality and integrity of images.",
      image: "/imagecryptx.jpg",
      liveLink: "https://example.com/imagecryptx",
      githubLink: "https://github.com/example/imagecryptx",
      demoText: "View Live Demo 🚀",
      icon: <FaLock className="w-5 h-5" />,
      tags: ["Encryption", "Python", "Security"],
    },
    {
      title: "CyberPhish",
      subtitle: "Ethical Phishing Awareness Tool",
      emoji: "🎣",
      description:
        "CyberPhish is an educational cybersecurity tool designed to simulate phishing attacks for security awareness and penetration testing. It helps organizations and individuals understand the risks of phishing by demonstrating how attackers trick users into revealing sensitive credentials. This tool is strictly for ethical hacking and educational purposes to improve security awareness and train users against phishing threats.",
      image: "/cyberphish.jpg",
      liveLink: "https://example.com/cyberphish",
      githubLink: "https://github.com/example/cyberphish",
      demoText: "How to Use It 📚",
      icon: <FaCode className="w-5 h-5" />,
      tags: ["Ethical Hacking", "Security", "Education"],
    },
    {
      title: "Packet-Vision",
      subtitle: "Advanced Network Packet Analyzer",
      emoji: "📡",
      description:
        "Packet-Vision is a powerful network packet analyzer designed for real-time traffic monitoring, packet inspection, and cybersecurity analysis. It helps penetration testers, security researchers, and network administrators detect vulnerabilities, analyze suspicious network activity, and ensure secure data transmission. Built as a high-performance alternative to traditional tools, PacketVision enhances deep packet inspection (DPI) capabilities for advanced cybersecurity analysis.",
      image: "/packetvision.jpg",
      liveLink: "https://example.com/packetvision",
      githubLink: "https://github.com/example/packetvision",
      demoText: "How to Use It 📚",
      icon: <FaNetworkWired className="w-5 h-5" />,
      tags: ["Network Analysis", "Security", "Monitoring"],
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
    <div className="min-h-screen bg-transparent text-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Header with animated underline */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 w-full"
        >
          {visibleProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group w-full">
              {/* Card with simplified structure for small screens */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl group-hover:border-green-500/30 transition-all duration-300 w-full">
                {/* Image section with overlay */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Project icon */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-gray-900/80 backdrop-blur-sm text-green-400 p-2 sm:p-3 rounded-full border border-gray-700 group-hover:border-green-500/50 transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>

                  {/* Tags - simplified for small screens */}
                  <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-1 sm:gap-2 max-w-[90%]">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-900/80 backdrop-blur-sm text-xs px-2 py-0.5 rounded-full border border-gray-700 text-gray-300 group-hover:border-green-500/30 group-hover:text-green-400 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  {/* Title with emoji */}
                  <div className="mb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 flex items-center flex-wrap">
                      <span>{project.title}</span>
                      <span className="ml-2 text-xl sm:text-2xl">{project.emoji}</span>
                    </h2>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>

                  {/* Description - shorter on mobile */}
                  <p className="text-gray-300 mb-4 text-sm sm:text-base overflow-hidden line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Buttons - stacked on very small screens */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-full shadow-md font-medium text-sm flex items-center justify-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3 mr-2" />
                      <span>{project.demoText}</span>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2 px-4 rounded-full shadow-md font-medium text-sm flex items-center justify-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(12, 245, 24, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-3.5 h-3.5 mr-2" />
                      <span>View Efforts</span>
                    </motion.a>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show more/less button */}
        {projectData.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-12"
          >
            <motion.button
              onClick={toggleShowMore}
              className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2.5 px-6 rounded-full shadow-md font-medium text-sm relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(12, 219, 47, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button shine effect */}
              <span className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700"></span>
              <span className="relative z-10">{showMore ? "Show Less" : "Show More"} 📜</span>
            </motion.button>
          </motion.div>
        )}

        {/* Quote section - No hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl p-6 sm:p-8 relative">
            {/* Static content without hover effects */}
            <div className="relative">
              <p className="text-lg sm:text-xl text-gray-300 italic mb-3 sm:mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <p className="text-gray-400">— Cory House</p>
            </div>
            {/* Static gradient line at bottom */}
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 absolute bottom-0 left-0"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

