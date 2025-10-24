import { FiX } from 'react-icons/fi';

function Modal({ isOpen, onClose }) {

  if (!isOpen) {
    return null;
  }

  return (
    <>

      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose} 
        aria-hidden="true"
      />

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm md:max-w-md z-50 p-1">

        <div className="relative bg-gray-900 p-4 md:p-8 rounded-2xl overflow-hidden">


          <div
            className="absolute -inset-px rounded-2xl bg-linear-to-r from-indigo-500 to-purple-600 opacity-80 blur-lg -z-10"
            aria-hidden="true"
          />


          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            aria-label="Fechar modal"
          >
            <FiX size={24} />
          </button>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-600 mb-3 md:mb-4">
              Lançamento em Breve!
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              O FocusFlow ainda está em desenvolvimento.
              Deixe seu e-mail abaixo para ser o primeiro a saber quando lançarmos.
            </p>

            <form className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-8">
              <input
                type="email"
                placeholder="seu.email@exemplo.com"
                className="w-full py-3 px-4 bg-gray-800 rounded-full text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-900 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)] hover:drop-shadow-[0_0_6px_rgba(79,70,229,0.8)] text-sm md:text-base"
                onClick={onClose}
              >
                Avise-me!
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;