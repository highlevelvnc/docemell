import SEO from '../components/SEO';
import { MapPin, Truck, Clock } from 'lucide-react';
import { siteConfig } from '../config';

export default function Entrega() {
  return (
    <>
      <SEO title="Entrega e Área de Atendimento" description="Atendemos Iguaba Grande e toda a Região dos Lagos. Entregas em todo o estado do Rio de Janeiro. Confira prazos e condições." />
      <div className="min-h-screen bg-gradient-to-br from-brown-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Entrega e Área de Atendimento</h1>
              <p className="font-body text-xl text-gray-600">Levamos nossos doces até você com segurança e pontualidade</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: MapPin, title: 'Área de Atendimento', desc: 'Região dos Lagos e todo o estado do RJ' },
                { icon: Truck, title: 'Entrega Segura', desc: 'Embalagem especial para preservar qualidade' },
                { icon: Clock, title: 'Pontualidade', desc: 'Entregas sempre no horário combinado' }
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

            <div className="bg-white rounded-3xl p-10 shadow-xl mb-12">
              <h2 className="font-display text-3xl mb-8 text-gray-800">Cidades Atendidas - Região dos Lagos</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {siteConfig.cidades.slice(0, 6).map((cidade, i) => (
                  <div key={i} className="flex items-center space-x-2 font-body text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{cidade}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-primary font-semibold mt-6 text-center">+ Entregas em todo o estado do Rio de Janeiro</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-brown-light/20 rounded-3xl p-10">
              <h2 className="font-display text-3xl mb-6 text-gray-800">Como Funciona</h2>
              <div className="space-y-4 font-body text-gray-600">
                <p><strong>Região dos Lagos:</strong> Entrega gratuita para pedidos acima de R$ 150. Entregas realizadas em até 24h após confirmação.</p>
                <p><strong>Outras cidades do RJ:</strong> Taxa de entrega sob consulta. Prazo conforme localização.</p>
                <p><strong>Retirada:</strong> Disponível em Iguaba Grande mediante agendamento prévio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
