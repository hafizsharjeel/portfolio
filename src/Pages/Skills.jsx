"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaShieldAlt, FaTools, FaSearch, FaNetworkWired, FaFileAlt, FaDatabase, FaPython } from "react-icons/fa"

const Skills = () => {
  const skills = [
    { name: "Ethical Hacking", emoji: "💻", percentage: 80, icon: <FaShieldAlt /> },
    { name: "Analyze and Monitor Logs", emoji: "🔍", percentage: 90, icon: <FaSearch /> },
    { name: "Vulnerability Assessment", emoji: "⚙️", percentage: 75, icon: <FaTools /> },
    { name: "Penetration Testing (web, network)", emoji: "🕵️", percentage: 80, icon: <FaNetworkWired /> },
    { name: "Create Clear Documentation", emoji: "🗄️", percentage: 90, icon: <FaFileAlt /> },
    { name: "Structured Query Language (SQL)", emoji: "🎭", percentage: 80, icon: <FaDatabase /> },
    { name: "Python Programming", emoji: "🐍", percentage: 50, icon: <FaPython /> },
  ]

  const certificates = [{ title: "Certified Ethical Hacking (V12)", issuer: "Coursera", image: "/CEH.jpg" }]

  const tools = [
    { name: "Burpsuite", image: "/burpsuite.png" },
    { name: "SQLMAP", image: "/sqlmap.png" },
    { name: "Nmap", image: "/nmap.png" },
    { name: "Tenable Nessus", image: "nessus.png" },
    { name: "Greenbone OpenVAS", image: "/openvas.png" },
    { name: "Nikto", image: "/nikto.png" },
    { name: "Advanced IP Scanner", emoji: "🔍" },
    { name: "Metasploit Framework", image: "/metasploit.png" },
    { name: "Wireshark", image: "/wireshark.png" },
    { name: "John The Ripper", image: "/john.png" },
    { name: "Splunk", image: "/splunk.png" },
    { name: "IBM QRadar", image: "/qradar.png" },
  ]

  // Animation controls
  const skillsControls = useAnimation()
  const toolsControls = useAnimation()
  const certificatesControls = useAnimation()

  // Intersection observers
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: false })
  const [toolsRef, toolsInView] = useInView({ threshold: 0.2, triggerOnce: false })
  const [certificatesRef, certificatesInView] = useInView({ threshold: 0.2, triggerOnce: false })

  // Trigger animations when sections come into view
  useEffect(() => {
    if (skillsInView) skillsControls.start("visible")
    else skillsControls.start("hidden")
  }, [skillsControls, skillsInView])

  useEffect(() => {
    if (toolsInView) toolsControls.start("visible")
    else toolsControls.start("hidden")
  }, [toolsControls, toolsInView])

  useEffect(() => {
    if (certificatesInView) certificatesControls.start("visible")
    else certificatesControls.start("hidden")
  }, [certificatesControls, certificatesInView])

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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header with animated underline */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Professional Skills
            </span>
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

        {/* Skills section */}
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsControls}
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <div className="h-px w-10 bg-green-500 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Core Competencies
            </h2>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="p-6 md:p-8 space-y-6">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} className="group">
                  <div className="flex flex-col md:flex-row md:items-center mb-2 gap-2">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-500/20 rounded-lg mr-3 text-green-400">{skill.icon}</div>
                      <span className="text-lg font-medium text-white">
                        {skill.name} <span className="text-gray-400 ml-1">{skill.emoji}</span>
                      </span>
                    </div>
                    <div className="md:ml-auto">
                      <span className="text-sm font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600"></div>
          </div>
        </motion.div>

        {/* Tools section */}
        <motion.div
          ref={toolsRef}
          initial="hidden"
          animate={toolsControls}
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <div className="h-px w-10 bg-green-500 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Professional Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-gray-700/70 rounded-lg flex-shrink-0">
                    {tool.image ? (
                      <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="h-8 w-8 object-contain" />
                    ) : (
                      <span className="text-2xl">{tool.emoji}</span>
                    )}
                  </div>
                  <span className="text-lg font-medium text-white">{tool.name}</span>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates section */}
        <motion.div
          ref={certificatesRef}
          initial="hidden"
          animate={certificatesControls}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="h-px w-10 bg-green-500 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Certifications <span className="ml-2">🏅</span>
            </h2>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap justify-center">
                {certificates.map((certificate, index) => (
                  <div key={index} className="w-full max-w-3xl mx-auto">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg blur-sm opacity-70"></div>
                      <div className="relative bg-gray-900 rounded-lg p-2">
                        <img
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                      <p className="text-gray-400">{certificate.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600"></div>
          </div>
        </motion.div>

        {/* Quote or call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl p-8">
            <p className="text-xl text-gray-300 italic mb-4">"Security is not a product, but a process."</p>
            <p className="text-gray-400">— Bruce Schneier</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

