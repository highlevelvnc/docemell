import SEO from '../components/SEO';
import { Sparkles, Heart, Award } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function DocesAltoPadrao() {
  return (
    <>
      <SEO 
        title="Doces de Alto Padrão"
        description="Doces finos com decoração manual impecável. Criações artesanais exclusivas para eventos sofisticados na Região dos Lagos."
        keywords="doces alto padrão iguaba grande, doces decorados região dos lagos, doces finos cabo frio"
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full mb-6 shadow-lg">
                <Sparkles className="text-primary" size={20} />
                <span className="font-body text-sm text-gray-700">Decoração manual • Exclusividade garantida</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl mb-6">
                <span className="bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">Doces de</span>
                <br />
                <span className="text-gray-800">Alto Padrão</span>
              </h1>
              <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Criações artesanais com acabamento impecável para eventos que merecem perfeição. 
                Cada doce é único, decorado manualmente com atenção aos mínimos detalhes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-3 text-gray-800">Decoração Manual</h3>
                <p className="font-body text-gray-600">Cada detalhe pensado e executado à mão com precisão artesanal</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brown-light to-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-3 text-gray-800">Ingredientes Premium</h3>
                <p className="font-body text-gray-600">Seleção rigorosa de insumos de alta qualidade para sabor excepcional</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-3 text-gray-800">Exclusividade</h3>
                <p className="font-body text-gray-600">Personalização completa de cores, temas e estilos para seu evento</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl mb-16">
              <h2 className="font-display text-4xl mb-8 text-gray-800 text-center">Ideal para eventos especiais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Casamentos e bodas',
                  'Formaturas',
                  'Aniversários de luxo',
                  'Chás sofisticados',
                  'Eventos corporativos premium',
                  'Celebrações VIP'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 font-body text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-brown rounded-3xl p-10 md:p-16 text-center shadow-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">
                Pronto para criar algo único?
              </h2>
              <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato e vamos criar doces de alto padrão perfeitos para seu evento especial
              </p>
              <a
                href={generateWhatsAppLink('Olá! Quero encomendar doces de alto padrão para meu evento!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full font-body font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
