import SEO from '../components/SEO';
import { Star } from 'lucide-react';
import { siteConfig } from '../config';

export default function Depoimentos() {
  return (
    <>
      <SEO title="Depoimentos" description="Veja o que nossos clientes dizem sobre os doces do Ateliê Doce Mell. Experiências reais de satisfação e qualidade." />
      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Depoimentos</h1>
              <p className="font-body text-xl text-gray-600">O que nossos clientes falam sobre os doces do ateliê</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {siteConfig.depoimentos.map((dep, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="text-primary fill-primary" size={18} />)}
                  </div>
                  <p className="font-body text-gray-700 italic mb-6 leading-relaxed">"{dep.texto}"</p>
                  <div className="border-t pt-4">
                    <p className="font-body font-semibold text-gray-800">{dep.nome}</p>
                    <p className="font-body text-sm text-gray-600">{dep.cidade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
