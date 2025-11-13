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
              <p className="text-gray-400">Bannari Amman Institute of Technology</p>
              <p className="text-gray-400 mt-2">Class 12: 80.2% | Class 10: 87.6%</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Beyond Tech</h3>
              <div className="space-y-2 text-gray-300">
                <p>🥋 Karate Black Dan 1</p>
                <p>🧘 Advanced Yoga Certificate</p>
                <p>🎯 Silambam 1 Star</p>
                <p>🏆 Sports House Captain (Class 5,6,7)</p>
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