"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Skills = () => {
  const skills = [
    { name: "Ethical Hacking 💻", percentage: 80 },
    { name: "Analyze and Monitor Logs 🔍", percentage: 90 },
    { name: "Vulnerability Assessment ⚙️", percentage: 75 },
    { name: "Penentration Testing (web, network) 🕵️", percentage: 80 },
    { name: "Create Clear Documentation 🗄️", percentage: 90 },
    { name: "Structured Query Language (SQL) 🎭", percentage: 80 },
    { name: "Python Programming 🐍", percentage: 50 },
  ]

  const certificates = [{ title: "Cetified Ethical Hacking (V12)", issuer: "Coursera", image: "/CEH.jpg" }]

  const skillsControls = useAnimation()
  const certificatesControls = useAnimation()
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: false, initialInView: true })
  const [certificatesRef, certificatesInView] = useInView({ threshold: 0.2, triggerOnce: false })

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible")
    } else {
      skillsControls.start("hidden")
    }
  }, [skillsControls, skillsInView])

  useEffect(() => {
    if (certificatesInView) {
      certificatesControls.start("visible")
    } else {
      certificatesControls.start("hidden")
    }
  }, [certificatesControls, certificatesInView])

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative p-4 sm:p-8 pt-12 sm:pt-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-5 flex items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
              Skills
            </span>
            <span className="ml-2">💻</span>
          </motion.h1>

          {/* Skills section */}
          <motion.div
            ref={skillsRef}
            initial="visible"
            animate={skillsControls}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-5" // backdrop-blur-md
          >
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 via-green-600 to-green-800 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
                Tools
              </span>
              <span className="ml-2">⚒</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Burpsuite", image: "/burpsuite.png" },
                { name: "SQLMAP", image: "/sqlmap.png" },
                { name: "Nmap", image: "/nmap.png" },
                { name: "Tenable Nessus ", image: "nessus.png" },
                { name: "Greenbone OpenVAS", image: "/openvas.png" },
                { name: "Nikto", image: "/nikto.png" },
                { name: "Advanced IP Scanner", emoji: "🔍" },
                { name: "Metasploit Framework", image: "/metasploit.png" },
                { name: "Wireshark", image: "/wireshark.png" },
                { name: "John The Ripper", image: "/John.png" },
                { name: "Splunk", image: "/splunk.png" },
                { name: "IBM QRadar", image: "/qradar.png" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-50 p-3 sm:p-4 rounded-lg shadow-md flex items-center space-x-2"
                >
                  {skill.image ? (
                    <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="h-6 w-6 sm:h-8 sm:w-8" />
                  ) : (
                    <span className="text-xl sm:text-2xl">{skill.emoji}</span>
                  )}
                  <span className="text-sm sm:text-base md:text-xl">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates section */}
          <motion.div
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-10 "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
                Certificates
              </span>
              <span className="ml-2">🏅</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full">
                {" "}
                {/* Make the container div take full width */}
                {certificates.map((certificate, index) => (
                  <img
                    key={index}
                    src={certificate.image || "/placeholder.svg"}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-auto rounded-lg object-cover" // Ensure image takes full width
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            //   className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl backdrop-blur-md"
          ></motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills

