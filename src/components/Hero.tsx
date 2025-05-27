
import { Github, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
         <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
  <img src="me.jpg" className="w-full h-full object-cover rounded-full" />
</div>

          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-fade-in">
            Pratik Mahara
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Aspiring MERN Stack Developer
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Passionate about building responsive and user-friendly web applications. 
            Eager to take on real-world challenges and apply creativity to full-stack 
            development using MongoDB, Express.js, React.js, and Node.js.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/PratikMahara"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              View GitHub
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a
              href="https://github.com/PratikMahara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:maharapratik5@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917458027317"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
