import logoImage from '../assets/logo.png';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer id="footer-section" className="bg-black border-t border-gray-800 py-20 mt-18">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
 
          <a href="#" className="justify-self-center md:justify-self-start">
            <img 
              src={logoImage} 
              alt="Focus Flow Logo" 
              className="h-42 w-auto hover:scale-120 transition-all duration-900" 
            />
          </a>
  
          <p className="text-gray-500 text-sm text-center justify-self-center">
            &copy; {new Date().getFullYear()} FocusFlow. Todos os direitos reservados.
          </p>

          <div className="flex space-x-6 justify-self-center md:justify-self-end">
            <a href="#" aria-label="Link para o Instagram" className="text-gray-500 hover:text-indigo-500 hover:scale-110 transition-all duration-600">
              <FiInstagram size={40} />
            </a>
            <a href="#" aria-label="Link para o GitHub" className="text-gray-500 hover:text-indigo-500 hover:scale-110 transition-all duration-600">
              <FiGithub size={40} />
            </a>
            <a href="#" aria-label="Link para o LinkedIn" className="text-gray-500 hover:text-indigo-500 hover:scale-110 transition-all duration-600">
              <FiLinkedin size={40} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;