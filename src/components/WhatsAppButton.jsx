import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre os doces do Ateliê Doce Mell.';
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
      
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </button>
  );
}
