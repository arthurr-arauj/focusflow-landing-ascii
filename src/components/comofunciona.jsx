import { FiPlusCircle, FiClock, FiBarChart2 } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';


const steps = [
  {
    icon: <FiPlusCircle size={32} className="text-indigo-400 group-hover:text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.8)] hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.8)] transition-all duration-300" />,
    title: 'Crie sua Tarefa',
    description: 'Defina claramente o que precisa ser feito e adicione à sua lista no FocusFlow.',
  },
  {
    icon: <FiClock size={32} className="text-purple-400 group-hover:text-purple-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.8)] hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.8)] transition-all duration-300" />,
    title: 'Inicie o Foco',
    description: 'Escolha uma técnica (Pomodoro, Time Blocking, Etc) e comece a trabalhar sem distrações.',
  },
  {
    icon: <FiBarChart2 size={32} className="text-violet-400 group-hover:text-violet-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.8)] hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.8)] transition-all duration-300" />,
    title: 'Conclua e Revise',
    description: 'Marque a tarefa como concluída e acompanhe seu progresso com nossos relatórios.',
  },
];

function ComoFunciona() {
  //fade-in
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <section ref={ref} className={`py-24 bg-black transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_80%,transparent_100%)]`}>
         <div className="absolute inset-0 -z-10">

            <div className="absolute inset-0 -z-10 
             animate-aurora 
             w-full h-full rounded-full
             bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.1),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(142,36,170,0.4),transparent_60%)] 
             blur-[150px]
             opacity-80 
             pointer-events-none"/>
            </div>

      <div className="container mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comece a produzir em <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500"><span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500 hover:scale-105 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)] hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.8)] transition-all duration-600">3</span> passos simples</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Veja como é fácil transformar suas intenções em ações concluídas com o FocusFlow.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-16">
          
          {steps.map((step, index) => (
    
            <div key={index} className="md:w-1/3 text-center flex flex-col items-center">
  
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-6 border-2 border-indigo-500/20 hover:scale-105 group transision-all duration-700">
                {step.icon}
              </div>
        
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
      
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;