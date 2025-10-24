import { FiClock, FiCheckSquare, FiTarget } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const featureData = [
  {
    icon: <FiClock size={32} className=" text-indigo-500 group-hover:text-indigo-300 drop-shadow-[0_0_6px_rgba(79,70,229,0.6)] transition-all duration-300" />,
    title: 'Time Blocking',
    description: 'Planeje seu dia em blocos de tempo dedicados para cada tarefa, garantindo foco total.',
  },
  {
    icon: <FiCheckSquare size={32} className="text-purple-500  group-hover:text-purple-300 drop-shadow-[0_0_6px_rgba(79,70,229,0.6)] transition-all duration-300" />,
    title: 'Pomodoro Timer',
    description: 'Alterne entre períodos de foco intenso e pausas curtas para maximizar sua produtividade sem esgotamento.',
  },
  {
    icon: <FiTarget size={32} className="text-violet-500  group-hover:text-purple-300 drop-shadow-[0_0_6px_rgba(79,70,229,0.6)] transition-all duration-300" />,
    title: 'Eat the Frog (Priorização)',
    description: 'Identifique e complete sua tarefa mais importante primeiro, garantindo progresso real logo no início do dia.',
  },
];

function Features() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section id="features-section" ref={ref} className={`py-16 bg-black transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6 mt-18">


        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tudo que você precisa para <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">manter o <span className="inline-block bg-clip-text bg-linear-to-l from-indigo-500 via-violet-500 to-purple-600 hover:scale-110 hover:[text-shadow:0_0_40px_rgba(56,189,248,0.8)] hover:[drop-shadow:0_0_60px_rgba(147,51,234,0.5)] animate-degrade transition-all duration-900 ease-in-out">foco</span></span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            <span className="font-semibold">FocusFlow</span> não é apenas um timer. É um sistema <span className="font-semibold">completo</span> de produtividade.
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          
          {featureData.map((feature, index) => (
  
            <div key={index} className={`relative bg-gray-900 p-8 rounded-2xl hover:scale-105 transform transition-all duration-700 ease-out delay-[${index * 300}ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
              
              <div 
                className="absolute -inset-px rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-30 blur-xl -z-10 transition-all duration-700 ease-out group-hover:opacity-60 group-hover:blur-lg"
                aria-hidden="true"
              />

              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">{feature.title}</h3>

              <p className="text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;