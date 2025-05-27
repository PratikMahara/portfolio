
import { Code, Smartphone, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-white" size={24} />,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Database className="text-white" size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-white" size={24} />,
      skills: ["Flutter", "Dart", "Firebase", "Cross-platform"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-white" size={24} />,
      skills: ["JavaScript", "Python", "C++", "Dart", "TypeScript"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const softSkills = [
    "Teamwork in multicultural environments",
    "Flexibility and adaptation to project changes",
    "Excellent communication skills",
    "Problem analysis and resolution",
    "Git version control",
    "Agile methodology"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full w-fit mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Soft Skills & Personal Attributes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
