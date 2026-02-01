import { useState } from 'react';
import SEO from '../components/SEO';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <SEO title="Perguntas Frequentes (FAQ)" description="Tire suas dúvidas sobre encomendas, entregas, personalização e muito mais. Respostas rápidas para as perguntas mais comuns." />
      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Perguntas Frequentes</h1>
              <p className="font-body text-xl text-gray-600">Tire suas dúvidas sobre nossos doces e serviços</p>
            </div>

            <div className="space-y-4">
              {siteConfig.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-body font-semibold text-gray-800 text-lg pr-4">{item.pergunta}</span>
                    <ChevronDown className={`text-primary flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} size={24} />
                  </button>
                  {openIndex === i && (
                    <div className="px-8 pb-6">
                      <p className="font-body text-gray-600 leading-relaxed">{item.resposta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
