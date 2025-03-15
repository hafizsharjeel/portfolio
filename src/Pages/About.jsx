"use client"
import { motion } from "framer-motion"
import {
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaShieldAlt,
  FaCode,
  FaTerminal,
  FaLock,
  FaServer,
  FaDatabase,
} from "react-icons/fa"

const About = () => {
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

  // Cybersecurity skills with icons
  const securitySkills = [
    { name: "Penetration Testing", icon: <FaTerminal className="h-5 w-5" /> },
    { name: "Network Security", icon: <FaServer className="h-5 w-5" /> },
    { name: "Threat Analysis", icon: <FaShieldAlt className="h-5 w-5" /> },
    { name: "Security Audits", icon: <FaLock className="h-5 w-5" /> },
    { name: "Log Monitoring", icon: <FaDatabase className="h-5 w-5" /> },
    { name: "Vulnerability Assessment", icon: <FaCode className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-transparent text-gray-100">
      {/* Removed fixed background elements to allow app.jsx starry background to show through */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header with animated underline */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              About Me
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

        {/* Profile Section with hexagonal border */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl transform -rotate-1"></div>
          <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-green-500/20 p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-sm opacity-70"></div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/191956513?v=4"
                      alt="Hafiz Sharjeel Shakeel"
                      className="w-48 h-48 rounded-full object-cover border-4 border-gray-900 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <FaShieldAlt className="h-5 w-5" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Hafiz Sharjeel Shakeel</h2>
                  <div className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    Cybersecurity Specialist
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed text-lg">
                    A passionate{" "}
                    <span className="font-semibold text-green-400">
                      Cybersecurity Enthusiast, Penetration Tester and SOC analyst
                    </span>{" "}
                    dedicated to securing digital environments and identifying vulnerabilities before malicious actors
                    exploit them.
                  </p>
                  <p className="leading-relaxed">
                    Currently pursuing a <span className="font-semibold text-green-400">B.Sc. in Computer Science</span>
                    , I specialize in{" "}
                    <span className="font-semibold">
                      Ethical Hacking, Analyzing and Monitoring logs, Network Security, and Vulnerability Assessment
                    </span>{" "}
                    to strengthen cybersecurity defenses.
                  </p>

                  <div className="pt-4">
                    <h3 className="text-xl font-semibold text-green-400 mb-3">Expertise</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {securitySkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 bg-gray-900/50 rounded-lg px-3 py-2">
                          <div className="text-green-500">{skill.icon}</div>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools & Languages Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 inline-flex items-center">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Professional Arsenal
            </span>
            <div className="h-1 w-10 bg-green-500 ml-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="group">
              <div className="h-full bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/5">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <FaTerminal className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Security Tools</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Nmap",
                      "Metasploit",
                      "Burp Suite",
                      "Nessus",
                      "Wireshark",
                      "John The Ripper",
                      "Splunk",
                      "IBM QRadar",
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="h-full bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/5">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <FaWhatsapp className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Languages & Interests</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-green-400 font-medium mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">English (Professional)</span>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Urdu (Native)</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-medium mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Learning New Technologies 📖</span>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Cybersecurity Research 🔍</span>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Ethical Hacking 💡</span>
                    </div>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 inline-flex items-center">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Education
            </span>
            <div className="h-1 w-10 bg-green-500 ml-4"></div>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-700 transform md:translate-x-0 translate-x-4"></div>

            {[
              {
                degree: "B.Sc. in Computer Science",
                year: "2023 - Present",
                institution: "Sindh Madressatul Islam University",
                grade: "First Class with Distinction",
                isRight: true,
              },
              {
                degree: "Higher Secondary School Certificate (HSSC)",
                year: "2021 - 2023",
                institution: "Adamjee Govt. Science College- Karachi",
                grade: "First Class with Distinction",
                isRight: false,
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${edu.isRight ? "md:ml-1/2" : "md:mr-1/2 md:text-right"}`}
              >
                <div className={`flex ${edu.isRight ? "" : "md:justify-end"}`}>
                  <div
                    className={`absolute top-0 ${edu.isRight ? "left-0 md:left-0 -translate-x-1/2" : "left-0 md:right-0 md:left-auto md:translate-x-1/2"} -translate-y-1/3 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 z-10`}
                  ></div>

                  <motion.div
                    variants={fadeInUp}
                    className={`relative ml-12 md:ml-0 ${edu.isRight ? "md:ml-12" : "md:mr-12"} bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:border-green-500/30 transition-all duration-300`}
                  >
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <div className="space-y-1 text-gray-300">
                        <p>{edu.institution}</p>
                        <p className="font-medium text-green-400">{edu.grade}</p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Get In Touch Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 inline-block">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl p-8">
            <p className="text-gray-300 mb-8">
              Ready to collaborate on cybersecurity projects or discuss potential opportunities? Reach out through any
              of these channels:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1JlBHplDlfr8GAdsuD6cU6hwh1oVHvcQH"
                className="group flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl hover:bg-green-500/10 transition-all duration-300 border border-transparent hover:border-green-500/30"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-green-500/20 rounded-full mb-3 group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaDownload className="h-6 w-6 text-green-400" />
                </div>
                <span className="font-medium">Resume</span>
              </motion.a>

              <motion.a
                href="https://pk.linkedin.com/in/hafiz-sharjeel-shakeel-260b67179"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl hover:bg-[#0077B5]/10 transition-all duration-300 border border-transparent hover:border-[#0077B5]/30"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-[#0077B5]/20 rounded-full mb-3 group-hover:bg-[#0077B5]/30 transition-colors duration-300">
                  <FaLinkedin className="h-6 w-6 text-[#0077B5]" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://wa.me/+923492993488"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl hover:bg-[#25D366]/10 transition-all duration-300 border border-transparent hover:border-[#25D366]/30"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-[#25D366]/20 rounded-full mb-3 group-hover:bg-[#25D366]/30 transition-colors duration-300">
                  <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                </div>
                <span className="font-medium">WhatsApp</span>
              </motion.a>

              <motion.a
                href="https://github.com/hafizsharjeel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-700/30 transition-all duration-300 border border-transparent hover:border-gray-600"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-gray-700/20 rounded-full mb-3 group-hover:bg-gray-700/30 transition-colors duration-300">
                  <FaGithub className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium">GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

