// src/Components/About.jsx - UPDATED to match your existing style
import React from 'react';
import { Award, Code, Heart, Brain, Target, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Programming', items: ['C', 'C++', 'Java', 'Python'] },
    { category: 'Web Dev', items: ['React JS', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Block Programming', items: ['Scratch', 'MIT App Inventor,','Kodular'] },
    { category: 'Hardware', items: ['Arduino', 'ESP', 'IoT', 'PLC', 'Raspbery Pi'] },
    { category: 'Other', items: ['ROS2', 'MERN Stack', 'YOLO Algorithm', 'TeachableMachine', 'MS Office', 'LAMP Stack' , ''] }
  ];

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Innovation First",
      description: "Constantly exploring cutting-edge technologies in industrial automation and sustainable solutions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence in Execution",
      description: "Commitment to delivering high-quality projects with precision and attention to detail"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sustainable Impact",
      description: "Building eco-friendly solutions that contribute to a greener future"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always upskilling and adapting to new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
        </h2>
        
        {/* Hero Introduction */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            A passionate <span className="text-cyan-400 font-semibold">Future Entrepreneur</span> and <span className="text-blue-400 font-semibold">Industrial Automation Enthusiast</span>, dedicated to building sustainable and innovative technological solutions.
          </p>
         {/*} <p className="text-lg text-gray-400 leading-relaxed">
            Currently serving as <span className="text-cyan-400">Chairman of IEEE BIT Student Branch</span>, leading innovation initiatives and fostering technical excellence in the student community.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Leadership */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">Leadership</h3>
              </div>
              <p className="text-gray-300">Chairman of IEEE BIT Student Branch, leading innovation and technical excellence</p>
              <p className="text-gray-300">Executive Of Development of IEEE Robotics And Automation Society @BIT, leading engagement and progress</p>
            </div>
            
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-semibold">B.E. Mechatronics</p>
                  <p className="text-gray-400 text-sm">Bannari Amman Institute of Technology, Sathyamangalam</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-gray-400 text-sm">Class 12: <span className="text-cyan-400">80.2%</span> (Modern Senior Secondary School, Nanganallur)</p>
                  <p className="text-gray-400 text-sm mt-1">Class 10: <span className="text-cyan-400">87.6%</span> (Modern Senior Secondary School, Nanganallur)</p>
                  <p className="text-gray-400 text-sm mt-2">Sports House Captain (Class 5-7, Sairam Vidyala, Madipakkam)</p>
                </div>
              </div>
            </div>

            {/* Beyond Tech */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Beyond Tech</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🥋</span>
                  <span className="text-sm">Karate Black Dan 1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🧘</span>
                  <span className="text-sm">Advanced Yoga</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm">Silambam 1 Star</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm">Sports Captain</span>
                </div>
              </div>
            </div>

            {/* Online Courses */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Online Courses</h3>
              <p className="text-gray-300 mb-4">Web Development Certificate Course – SkillForge</p>
            </div>
            {/*<div> 
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                  <p className="text-xs text-cyan-400 text-center px-2">Git & GitHub</p>
                </div>
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                  <p className="text-xs text-cyan-400 text-center px-2">Python</p>
                </div>
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                  <p className="text-xs text-cyan-400 text-center px-2">Web Dev</p>
                </div>
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                  <p className="text-xs text-cyan-400 text-center px-2">Internship</p>
                </div>
              </div> 
              <p className="text-xs text-gray-500 mt-3">Replace with your certificate images from Imgur</p>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <p className="text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wider">{skill.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm hover:bg-cyan-500/20 transition-all">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <p className="text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wider x-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm hover:bg-cyan-500/20 transition-all">Launched 3 static websites and an E-Commerce site</p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {['Design Thinking', 'Travelling', 'Problem Solving', 'Innovating', 'Sports', 'Programming', 'Music', 'Sudoku'].map((interest, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Core Values & Philosophy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
                <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4 group-hover:bg-cyan-500/20 transition-all">
                  <div className="text-cyan-400">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
            "Committed to upskilling innovative technologies for efficiency and creating <span className="text-cyan-400 font-semibold">sustainable vehicles</span> for a <span className="text-blue-400 font-semibold">greener future</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;