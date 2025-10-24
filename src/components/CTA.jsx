import { useInView } from 'react-intersection-observer';

function CTA({onOpenModal}) {

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    });
  return (
    <section id="cta-section" ref={ref} className={`py-24 bg-purple-900/5 transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}>
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
          Pronto para <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">recuperar seu <span className="inline-block bg-clip-text bg-linear-to-l from-indigo-500 via-violet-500 to-purple-600 hover:scale-110 hover:[text-shadow:0_0_40px_rgba(56,189,248,0.8)] hover:[drop-shadow:0_0_60px_rgba(147,51,234,0.5)] animate-degradetransition-all duration-900 ease-in-out">foco?</span></span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl mx-auto">
          Comece a organizar seu dia e a completar suas tarefas. 
          Baixe o FocusFlow e sinta a diferença.
        </p>

        <button 
          type="button"
          onClick={onOpenModal} 
          className="mt-5 inline-block bg-indigo-600 hover:bg-indigo-700 py-3 px-8 rounded-full text-lg transition-all duration-600 hover:scale-105 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)] hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.8)]"
        >
          <span className="text-transparent font-bold bg-clip-text bg-linear-to-r from-white via-indigo-600 to-white animate-degrade drop-shadow-[0_0_6px_rgba(147,51,234,0.6)]">
          Download
          </span>
        </button>
      </div>
    </section>
  )
}

export default CTA

