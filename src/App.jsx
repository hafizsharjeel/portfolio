import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import StarryBackground from './Components/StarryBackground';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <span
        className="text-green-600 text-2xl font-bold sm:text-3xl md:text-4xl hacker-text"
      >
        Access Granted
      </span>
    </div>
  );
}if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <span
        className="text-green-600 text-2xl font-bold sm:text-3xl md:text-4xl hacker-text"
      >
        Access Granted
      </span>
    </div>
  );
}
  

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-transparent text-white">
        <StarryBackground />
        <Header />
        <main className="flex-grow z-10 pt-16 sm:pt-20 md:pt-3 relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

