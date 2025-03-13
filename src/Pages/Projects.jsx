import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiToolsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const projectData = [
        {
            title: "🛡️ ImageCryptX - Secure Image Encryption Tool",
            description: "ImageCryptX is an advanced encryption tool designed to securely encrypt and decrypt images using state-of-the-art cryptographic techniques. This ensures that sensitive visual data remains protected from unauthorized access. Whether for personal use or secure communication, ImageCryptX guarantees confidentiality and integrity of images.",
            image: "/imagecryptx.jpg",
            liveLink: "https://imagecryptx.streamlit.app/",
            githubLink: "https://github.com/hafizsharjeel/imagecryptx-app"
        },
        {
            title: "🎣 CyberPhish - Ethical Phishing Awareness Tool",
            description: "CyberPhish is an educational cybersecurity tool designed to simulate phishing attacks for security awareness and penetration testing. It helps organizations and individuals understand the risks of phishing by demonstrating how attackers trick users into revealing sensitive credentials. This tool is strictly for ethical hacking and educational purposes to improve security awareness and train users against phishing threats.",
            image: "/cyberphish.jpg",
            liveLink: "https://github.com/hafizsharjeel/CyberPhish/blob/main/README.md",
            githubLink: "https://github.com/hafizsharjeel/CyberPhish"
        },
        {
            title: "📡 Packet-Vision - Advanced Network Packet Analyzer",
            description: "Packet-Vision is a powerful network packet analyzer designed for real-time traffic monitoring, packet inspection, and cybersecurity analysis. It helps penetration testers, security researchers, and network administrators detect vulnerabilities, analyze suspicious network activity, and ensure secure data transmission. Built as a high-performance alternative to traditional tools, PacketVision enhances deep packet inspection (DPI) capabilities for advanced cybersecurity analysis.",
            image: "/packetvision.jpg",
            liveLink: "https://github.com/hafizsharjeel/Packet-vision/blob/main/README.md",
            githubLink: "https://github.com/hafizsharjeel/Packet-vision"
        }
    ];

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const visibleProjects = showMore ? projectData : projectData.slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen p-8 pt-16 flex flex-col items-center"
        >
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-extrabold text-center mb-4 flex items-center justify-center"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
                    My Projects
                </span>
                <span className="ml-2">🛠️</span>
            </motion.h1>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl w-full"
            >
                <AnimatePresence>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 bg-opacity-30 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 "
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-center space-x-4">
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-full shadow-md font-semibold"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {index === 0 ? "View Live Demo 🚀" : "How to Use It 📚"}
                                    </motion.a>
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2 px-4 rounded-full shadow-md font-semibold flex items-center justify-center"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(12, 245, 24, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="mr-2" />
                                        View Efforts
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            {projectData.length > 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-5"
                >
                    <motion.button
                        onClick={toggleShowMore}
                        className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2 px-5 rounded-full shadow-md font-semibold"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(12, 219, 47, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {showMore ? "Show Less" : "Show More"} 📜
                    </motion.button>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Projects;