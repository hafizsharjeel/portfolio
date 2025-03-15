"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  const projectData = [
    {
      title: "🛡️ ImageCryptX - Secure Image Encryption Tool",
      description:
        "ImageCryptX is an advanced encryption tool designed to securely encrypt and decrypt images using state-of-the-art cryptographic techniques. This ensures that sensitive visual data remains protected from unauthorized access.",
      image: "/imagecryptx.jpg",
      liveLink: "https://imagecryptx.streamlit.app/",
      githubLink: "https://github.com/hafizsharjeel/imagecryptx-app",
      tags: ["Security", "Encryption", "Privacy"],
      emoji: "🔒",
      subtitle: "Protect images with strong encryption",
      demoText: "Live Demo",
    },
    {
      title: "🎣 CyberPhish - Ethical Phishing Awareness Tool",
      description:
        "CyberPhish is an educational cybersecurity tool designed to simulate phishing attacks for security awareness and penetration testing. It helps users recognize phishing attempts and improve online security awareness.",
      image: "/cyberphish.jpg",
      liveLink: "https://github.com/hafizsharjeel/CyberPhish/blob/main/README.md",
      githubLink: "https://github.com/hafizsharjeel/CyberPhish",
      tags: ["Cybersecurity", "Ethical Hacking", "Phishing"],
      emoji: "🕵️",
      subtitle: "Simulated phishing attacks for awareness",
      demoText: "View Details",
    },
    {
      title: "📡 Packet-Vision - Advanced Network Packet Analyzer",
      description:
        "Packet-Vision is a powerful network packet analyzer designed for real-time traffic monitoring, packet inspection, and cybersecurity analysis.",
      image: "/packetvision.jpg",
      liveLink: "https://github.com/hafizsharjeel/Packet-vision/blob/main/README.md",
      githubLink: "https://github.com/hafizsharjeel/Packet-vision",
      tags: ["Networking", "Packet Analysis", "Cybersecurity"],
      emoji: "📶",
      subtitle: "Analyze network traffic in real-time",
      demoText: "View Project",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              My Projects
            </span>{" "}
            🛠️
          </h1>
        </motion.div>

        {/* Projects grid */}
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 w-full">
          {visibleProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group w-full">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl group-hover:border-green-500/30 transition-all duration-300 w-full">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  {/* Tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-900/80 text-xs px-2 py-0.5 rounded-full border border-gray-700 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                    {project.title} <span className="ml-2">{project.emoji}</span>
                  </h2>
                  <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center">
                      <FaExternalLinkAlt className="w-3 h-3 mr-2" />
                      {project.demoText}
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center">
                      <FaGithub className="w-3.5 h-3.5 mr-2" />
                      View Efforts
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {projectData.length > 2 && (
          <div className="flex justify-center mb-12">
            <button onClick={toggleShowMore} className="bg-green-600 text-white py-2.5 px-6 rounded-full shadow-md">
              {showMore ? "Show Less" : "Show More"} 📜
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
