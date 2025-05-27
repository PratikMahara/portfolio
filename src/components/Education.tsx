import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      location: "Bhubaneswar",
      duration: "2022–2026",
      grade: "CGPA: 9.25 / 10",
      details: [
        "Specialization in Full-Stack Web Development (MERN Stack)",
        "Intermediate Machine Learning concepts",
        "Relevant subjects: Data Structures, Operating Systems, Machine Learning, Web Development, Database Management System"
      ]
    },
    {
      degree: "High School (Science Stream)",
      field: "Physics, Chemistry, Mathematics, Computer Science",
      institution: "Oxford Secondary School",
      location: "Butwal",
      duration: "2020–2022",
      grade: "Percentage: 84.5%",
      details: []
    },
    {
      degree: "Flutter Mobile App Development",
      field: "Cross-platform Development",
      institution: "Online (Udemy, Coursera)",
      location: "Remote",
      duration: "Summer 2024",
      grade: "30+ hours invested",
      details: [
        "Dart programming language",
        "Cross-platform mobile development",
        "Firebase integration"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-full">
                    {index === 0 ? (
                      <GraduationCap className="text-white" size={24} />
                    ) : index === 1 ? (
                      <Award className="text-white" size={24} />
                    ) : (
                      <BookOpen className="text-white" size={24} />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {edu.institution}, {edu.location}
                      </span>
                      <span>{edu.duration}</span>
                      <span className="font-semibold text-green-600">{edu.grade}</span>
                    </div>
                    
                    {edu.details.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {edu.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
