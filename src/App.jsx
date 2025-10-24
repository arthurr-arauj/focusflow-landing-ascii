import { useState } from "react";
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Features from './components/features.jsx'
import Pricing from './components/pricing.jsx'
import ComoFunciona from "./components/comofunciona.jsx";
import CTA from './components/CTA.jsx'
import Footer from './components/footer.jsx'
import Modal from './components/modal.jsx';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <Header />

      <main className="pt-28 mt-18">
        <Hero />
        <Features />
        <Pricing onOpenModal={openModal} />
        <ComoFunciona />
        <CTA onOpenModal={openModal} />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
}




export default App