import SEO from '../components/SEO';
import { PartyPopper, Users, Heart } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function DocesFestas() {
  return (
    <>
      <SEO 
        title="Doces para Festas"
        description="Variedade e qualidade para aniversários e eventos. Doces deliciosos para tornar sua festa inesquecível na Região dos Lagos."
        keywords="doces para festa iguaba grande, doces aniversário região dos lagos, doces festa araruama"
      />

      <div className="min-h-screen bg-gradient-to-br from-brown-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-7xl mb-6">
                <span className="bg-gradient-to-r from-brown to-primary bg-clip-text text-transparent">Doces para</span>
                <br />
                <span className="text-gray-800">Festas</span>
              </h1>
              <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                Variedade deliciosa para deixar sua festa ainda mais especial. Qualidade e sabor para todos os gostos!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: PartyPopper, title: 'Variedade', desc: 'Amplo cardápio com opções para todos os gostos e preferências' },
                { icon: Users, title: 'Quantidade', desc: 'Atendemos de pequenas festas a grandes eventos' },
                { icon: Heart, title: 'Qualidade', desc: 'Sabor impecável em cada doce, sempre fresquinho' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brown to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-display text-2xl mb-3 text-gray-800">{item.title}</h3>
                  <p className="font-body text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-brown to-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">Faça seu pedido!</h2>
              <p className="font-body text-white/90 text-lg mb-8">Entre em contato e monte o cardápio perfeito para sua festa</p>
              <a href={generateWhatsAppLink('Olá! Quero doces para minha festa!')} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-brown px-10 py-4 rounded-full font-body font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                Pedir Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
