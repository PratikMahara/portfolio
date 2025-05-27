
import { Github, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pratik Mahara
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring MERN Stack Developer passionate about creating innovative 
              web solutions and building the future through technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:maharapratik5@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={18} />
                <span>maharapratik5@gmail.com</span>
              </a>
              <a
                href="tel:+917458027317"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>(+91) 7458027317</span>
              </a>
              <a
                href="https://github.com/PratikMahara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Pratik Mahara. Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and lots of coffee ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
