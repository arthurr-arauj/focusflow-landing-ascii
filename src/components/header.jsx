import logoImage from '../assets/logo.png';
import { FiGrid, FiDollarSign, FiMail } from 'react-icons/fi';

function Header() {

  return (
    <>
      <header className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 w-[85%] max-w-7xl bg-linear-to-r from-indigo-950/80 via-black/60 to-purple-950/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_0_30px_rgba(99,102,241,0.4)] z-40 transition-all duration-700 ease-in-out hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]">

        <div className="container mx-auto flex justify-between items-center px-8 py-2">

          <a href="#" className="group">
            <img
              src={logoImage}
              alt="FocusFlow Logo"
              className="h-14 md:h-16 group-hover:scale-110 w-auto transition-all duration-500 ease-in-out group-hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]"
            />
          </a>
     

          <nav className="flex items-center space-x-8">

            <ul className="hidden md:flex space-x-10">
              <li>
                <a href="#features-section" className="relative inline-block font-semibold text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-500 group">
                  <span className="relative z-10">Features</span>
                </a>
              </li>
              <li>
                <a href="#pricing-section" className="relative inline-block font-semibold text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-500 group">
                  <span className="relative z-10">Preço</span>
                </a>
              </li>
              <li>
                <a href="#footer-section" className="relative inline-block font-semibold text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-500 group">
                  <span className="relative z-10">Contato</span>
                </a>
              </li>
            </ul>

          </nav>

        </div>

      </header>

      
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[85%] max-w-sm bg-linear-to-r from-indigo-950/90 via-black/80 to-purple-950/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_20px_rgba(99,102,241,0.3)] z-40">
        <div className="flex justify-around items-center py-4 px-6">
          <a href="#features-section" aria-label="Features" className="text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-300">
            <FiGrid size={20} />
          </a>
          <a href="#pricing-section" aria-label="Preço" className="text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-300">
            <FiDollarSign size={20} />
          </a>
          <a href="#footer-section" aria-label="Contato" className="text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-300">
            <FiMail size={20} />
          </a>
        </div>
      </nav>

      <div className="md:hidden absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#">
          <img
            src={logoImage}
            alt="FocusFlow Logo"
            className="h-50 hover:scale-110 w-auto transition-all duration-900 ease-in-out"
          />
        </a>
      </div>
    </>
  )
}

export default Header