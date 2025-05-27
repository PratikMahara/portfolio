
import { User, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated Computer Science and Engineering student at KIIT University 
                with a strong passion for full-stack web development. Currently maintaining 
                a CGPA of 9.25/10, I specialize in the MERN stack and have hands-on experience 
                with modern web technologies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in technology is driven by curiosity and a desire to create 
                meaningful solutions. I'm continuously learning and exploring new tools 
                and best practices to grow as a developer.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-gray-700">Born: July 04, 2004</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Location: Bhubaneswar, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="text-blue-600" size={20} />
                  <span className="text-gray-700">Role: MERN Stack Developer</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">English</span>
                    <span className="text-sm text-gray-600">Professional</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Hindi</span>
                    <span className="text-sm text-gray-600">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Nepali</span>
                    <span className="text-sm text-gray-600">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
