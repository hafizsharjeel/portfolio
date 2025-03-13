import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative p-8 pt-20">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold text-center mb-5 flex items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
              About Me
            </span>
            <span className="ml-2">🎓</span>
          </motion.h1>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-5" // backdrop-blur-md
          >
            <div className="flex flex-col md:flex-row items-center mb-8">
              <motion.img
                src="https://avatars.githubusercontent.com/u/191956513?v=4"
                alt="Hafiz Sharjeel Shakeel"
                className="w-48 h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-8 ring-4 ring-green-500 ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-left">🧑 Profile</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                  Hello! I am <strong>Hafiz Sharjeel Shakeel</strong>, a passionate <strong>Cybersecurity Enthusiast, Penetration Tester and SOC analyst</strong> dedicated to securing digital environments and identifying vulnerabilities before malicious actors exploit them. Currently pursuing a <strong>B.Sc. in Computer Science</strong>, I specialize in <strong>Ethical Hacking, Analyzing and Monitoring logs, Network Security, and Vulnerability Assessment, </strong> to strengthen cybersecurity defenses.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                  My expertise spans <strong>Penetration Testing, Threat Analysis, and Security Audits</strong>. Proficient in <strong>Nmap, Metasploit, Burp Suite, Nessus, Wireshark, John The Ripper, Splunk, and IBM QRadar, </strong>, I am committed to solving complex security challenges with innovative and robust cybersecurity solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "🗣️ Languages",
                  content: "English (Professional), Urdu (Native)"
                },
                // { 
                //   title: "📊 Visualization Tools", 
                //   content: "Microsoft Power BI, Matplotlib, Seaborn" 
                // },
                // {
                //   title: "🛠️ Technical Skills",
                //   content: "Python, SQL, Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, SpaCy, NLTK ..."
                // },                
                {
                  title: "🌱 Interests",
                  content: "Learning New Things 📖🔍, Exploring New Technologies 💡🧠"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-12 " // backdrop-blur-md
          >
            <h2 className="text-3xl font-semibold mb-6 text-green-400">🎓 Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Higher Secondary School Certificate (HSSC)",
                  year: "2021 - 2023",
                  institution: "Adamjee Govt. Science College- Karachi",
                  grade: "First Class with Distinction",
                },
                {
                  degree: "B.Sc. in Computer Science",
                  year: "2023 - Present",
                  institution: "Sindh Madressatul Islam University",
                  grade: "First Class with Distinction",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-green-400">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.year}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300">Grade: {edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Inspirational Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          //   className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl backdrop-blur-md"
          >
            
          </motion.div>
          <br /><br />
          {/* Get In Touch section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className="text-3xl font-semibold mb-6 text-green-400"><center>📬 Get In Touch</center></h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1JlBHplDlfr8GAdsuD6cU6hwh1oVHvcQH"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaDownload className="mr-2" /> Resume 📄
              </motion.a>
              <motion.a
                href="https://pk.linkedin.com/in/hafiz-sharjeel-shakeel-260b67179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaLinkedin className="mr-2" /> LinkedIn 🔗
              </motion.a>

              <motion.a
                href="https://wa.me/+923492993488" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants} // 
              >
                <FaWhatsapp className="mr-2" /> WhatsApp 📞
              </motion.a>

              <motion.a
                href="https://github.com/hafizsharjeel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-700 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaGithub className="mr-2" /> GitHub 🖥️
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
