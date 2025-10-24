import { useInView } from 'react-intersection-observer';

function Hero() {

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className={`relative w-full py-24 text-center transition-all duration-2000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}>
      
     <div className="absolute inset-0 -z-10">

      <div className="absolute inset-0 -z-10 
          animate-aurora 
          w-full h-full rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%),radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1),transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(142,36,170,0.15),transparent_70%)] 
          blur-[100px]
          opacity-80 
          pointer-events-none"/>
     </div>

      <h1 className="text-5xl md:text-7xl font-bold  max-w-3xl mx-auto">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 drop-shadow-[0_0_10px_rgba(79,70,229,0.5)]">Recupere seu </span>
        <span className="inline-block text-transparent bg-clip-text bg-linear-to-l from-indigo-800 via-purple-500 to-purple-700 hover:scale-110 transition-all duration-1000 ease-in-out hover:brightness-100 hover:saturate-50 [text-shadow:0_0_40px_rgba(0,172,193,0.5)] hover:[text-shadow:0_0_6px_rgba(0,172,193,0.8)] drop-shadow-[0_0_60px_rgba(79,70,229,0.5)] hover:drop-shadow-[0_0_40px_rgba(79,70,229,0.8)] animate-degrade">foco.</span>
        <span className="text-transparent bg-clip-text bg-linear-to-l from-indigo-500 to-purple-500 drop-shadow-[0_0_10px_rgba(79,70,229,0.5)]">Domine seu dia.</span>
      </h1>

      <p className="text-lg md:text-xl text-transparent bg-clip-text bg-linear-to-l from-gray-300 to-purple-300 mt-6 max-w-xl mx-auto">
        FocusFlow combina técnicas comprovadas de produtividade para melhorar seu foco no dia a dia,
        Pomodoro, Time Blocking, Eat the Frog em um único app.
        Pare de procrastinar e comece a produzir.
      </p>


      <a 
        href="#pricing-section" 
        className="inline-block bg-indigo-600 hover:bg-indigo-800 hover:scale-105 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-900 mt-10 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)] hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.8)]"
      >
        Começar Agora (É Grátis)
      </a>

    </section>
  )
}

export default Hero