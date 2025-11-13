// src/Components/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    { category: 'Programming', items: ['C', 'C++', 'Java', 'Python'] },
    { category: 'Web Dev', items: ['React JS', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Block Programming', items: ['Scratch', 'MIT App Inventor'] },
    { category: 'Hardware', items: ['Arduino', 'ESP', 'IoT', 'PLC'] },
    { category: 'Other', items: ['ROS2', 'MERN Stack', 'YOLO Algorithm'] }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Leadership</h3>
              <p className="text-gray-300">Chairman of IEEE BIT Student Branch, leading innovation and technical excellence</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>
              <p className="text-gray-300 mb-2"><strong>B.E. Mechatronics</strong></p>
              <p className="text-gray-400">Bannari Amman Institute of Technology, Sathyamangalam</p>
              <p className="text-gray-400 mt-2">Class 12: 80.2% (Modern Senior Secondary School, Nanganallur) | Class 10: 87.6%</p>
              <p className="text-gray-400">Sports House Captain (Class 5-7, Sairam Vidyala, Madipakkam)</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Beyond Tech</h3>
              <div className="space-y-2 text-gray-300">
                <p>🥋 Karate Black Dan 1 (7th Class)</p>
                <p>🧘 Advanced Yoga Certificate (6th Class)</p>
                <p>🎯 Silambam 1 Star (7th Class)</p>
                <p>🏆 Sports House Captain (Class 5,6,7)</p>
              </div>
            </div>

            {/* New: Online Courses from p4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Online Courses</h3>
              <p className="text-gray-300 mb-4">Web Development Certificate Course – SkillForge</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Replace with Imgur URLs for p4 cert images */}
                <img src="https://i.imgur.com/placeholder-cert1.jpg" alt="Git & GitHub Course" className="rounded-lg shadow-lg" />
                <img src="https://i.imgur.com/placeholder-cert2.jpg" alt="Python for Beginners" className="rounded-lg shadow-lg" />
                <img src="https://i.imgur.com/placeholder-cert3.jpg" alt="Web Dev Completion" className="rounded-lg shadow-lg" />
                <img src="https://i.imgur.com/placeholder-cert4.jpg" alt="SkillForge Internship" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <p className="text-sm text-gray-400 mb-2">{skill.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {/* Updated from p2: Web Dev detail */}
                <p className="text-xs text-gray-500 mt-2">Launched 3 static websites and an E-Commerce site</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Interests</h3>
              <p className="text-gray-300">Design Thinking, Travelling, Problem Solving, Innovating, Sports, Programming, Music, Sudoku</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;