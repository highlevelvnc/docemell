import SEO from '../components/SEO';
import { Cookie, Award } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function Brownies() {
  return (
    <>
      <SEO title="Brownies" description="Brownies artesanais com textura perfeita e sabor intenso. Opções tradicionais e decorados para eventos na Região dos Lagos." keywords="brownies iguaba grande, brownies artesanais região dos lagos" />
      <div className="min-h-screen bg-gradient-to-br from-brown-light/30 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-7xl mb-6"><span className="bg-gradient-to-r from-brown-dark to-brown bg-clip-text text-transparent">Brownies</span><br /><span className="text-gray-800">Artesanais</span></h1>
              <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">Sabor intenso e textura perfeita. Nossos brownies são feitos com chocolate de qualidade premium.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[{ icon: Cookie, title: 'Textura Perfeita', desc: 'Crocante por fora, macio e úmido por dentro' }, { icon: Award, title: 'Chocolate Premium', desc: 'Ingredientes selecionados para sabor incomparável' }].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brown-dark to-brown rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="text-white" size={28} /></div>
                  <h3 className="font-display text-2xl mb-3 text-gray-800">{item.title}</h3>
                  <p className="font-body text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-brown-dark to-brown rounded-3xl p-10 md:p-16 text-center shadow-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">Experimente nossos brownies!</h2>
              <a href={generateWhatsAppLink('Olá! Quero encomendar brownies!')} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-brown-dark px-10 py-4 rounded-full font-body font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">Fazer Pedido</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
