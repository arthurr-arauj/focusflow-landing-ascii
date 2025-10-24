import { FiCheck } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

function Pricing({ onOpenModal }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        
        <section id="pricing-section" ref={ref} className={`py-32 bg-linear-to-r from-black via-indigo-900/25 to-black transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}>
            <div className="container mx-auto px-4 md:px-6">

   
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Um preço simples para <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500 ">total produtividade</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 mt-4">
                        Comece de graça e evolua quando precisar de mais recursos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-12 md:mt-16 max-w-4xl mx-auto">

                    <div className="bg-gray-900 p-4 md:p-8 rounded-2xl hover:scale-105 transition-all duration-900">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-400">Gratuito</h3>

                        <div className="mt-4">
                            <span className="text-4xl md:text-5xl font-bold text-white">R$0</span>
                            <span className="text-base md:text-lg text-gray-400">/mês</span>
                        </div>

                        <p className="text-gray-400 mt-2 text-sm md:text-base">Para quem está começando a organizar o foco.</p>

                        <ul className="space-y-3 md:space-y-4 mt-6 md:mt-8 text-gray-300 text-sm md:text-base">
                            <li className="flex items-center space-x-3">
                                <FiCheck className="text-indigo-400" />
                                <span>Timer Pomodoro</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiCheck className="text-indigo-400" />
                                <span>Até 3 projetos</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiCheck className="text-indigo-400" />
                                <span>Relatórios básicos</span>
                            </li>
                        </ul>

                        <button
                            type="button"
                            onClick={onOpenModal}
                            className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 mt-8 md:mt-10 text-sm md:text-base"
                        >
                            Começar de Graça
                        </button>
                    </div>

                    <div className="relative group">

                        <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 via-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 group-hover:scale-106 group-hover:[text-shadow:0_0_10px_rgba(56,189,248,0.8)] group-hover:[drop-shadow:0_0_10px_rgba(147,51,234,0.5)] ease-in-out transition-all duration-700"></div>

                        <div className="relative bg-gray-800 p-4 md:p-8 rounded-2xl transition-all duration-700 hover:scale-105">

                            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-l from-white via-indigo-600 to-white animate-degrade">
                                Pro
                            </h3>

                            <div className="mt-4">
                                <span className="text-4xl md:text-5xl font-bold text-white">R$9,90</span>
                                <span className="text-base md:text-lg text-gray-400">/mês</span>
                            </div>

                            <p className="text-gray-400 mt-2 text-sm md:text-base">Para quem leva a sério a produtividade máxima.</p>

                            <ul className="space-y-3 md:space-y-4 mt-6 md:mt-8 text-gray-300 text-sm md:text-base">
                                <li className="flex items-center space-x-3">
                                    <FiCheck className="text-indigo-400" />
                                    <span>Tudo do Gratuito, e mais:</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FiCheck className="text-indigo-400" />
                                    <span>Time Blocking e Eat the Frog</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FiCheck className="text-indigo-400" />
                                    <span>Projetos ilimitados</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FiCheck className="text-indigo-400" />
                                    <span>Relatórios detalhados do seu foco</span>
                                </li>
                            </ul>

                            <button
                                type="button"
                                onClick={onOpenModal}
                                className="block w-full text-center font-bold py-3 px-6 rounded-full transition-all duration-600 mt-8 md:mt-10 hover:scale-101 bg-indigo-600 hover:bg-indigo-700 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)] hover:drop-shadow-[0_0_10px_rgba(79,70,229,0.8)] text-sm md:text-base"
                            >
                                Começar o Teste Pro
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Pricing;