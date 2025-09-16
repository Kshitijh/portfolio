import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import DynamicContent from './components/DynamicContent';
import { profileData } from './data/profileData';
import SmoothScroll from './SmoothScroll';
import { motion } from "framer-motion";

function App() {
  const roles = Object.keys(profileData);
  const [selectedRole, setSelectedRole] = useState('Show All');

  // Get the correct About Me text
  const getAboutText = () => {
    if (selectedRole === 'Show All') {
      return "I am a passionate Full-Stack Developer, Cloud Engineer, AI Engineer, and Data Analyst with expertise in scalable applications, AI-driven solutions, and cloud architecture.";
    }
    return profileData[selectedRole]?.about || "";
  };

  return (
    <>
      <SmoothScroll />
      <div className="app-container">

        {/*Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.33 }}
        >
          <Hero roles={roles} selectedRole={selectedRole} onRoleChange={setSelectedRole} />
        </motion.section>

        {/*About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.33 }}
          className="about"
        >
          <h2>About Me</h2>
          <p>{getAboutText()}</p>
        </motion.section>

        {/*DynamicContent Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.33 }}
        >
          <DynamicContent selectedRole={selectedRole} data={profileData} />
        </motion.section>

        {/*Contact Section */}
        <motion.footer
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.33 }}
          className="contact"
        >
          <h2>Contact</h2>
          <p>Email: kshitijhupare07@gmail.com</p>
          <p>LinkedIn: www.linkedin.com/in/kshitij-hupare-b11780221</p>
        </motion.footer>

      </div>
    </>
  );

}

export default App;
