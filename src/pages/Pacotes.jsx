import SEO from '../components/SEO';
import { siteConfig } from '../config';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function Pacotes() {
  return (
    <>
      <SEO title="Pacotes" description="Pacotes completos de doces para festas, eventos premium e corporativos. Soluções personalizadas para cada ocasião." />
      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-brown-light/20 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Nossos Pacotes</h1>
            <p className="font-body text-gray-600 text-lg">Soluções completas e personalizadas para tornar seu evento inesquecível</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {siteConfig.pacotes.map((pacote, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-br from-primary to-primary-dark' :
                  index === 1 ? 'bg-gradient-to-br from-brown-light to-brown' :
                  'bg-gradient-to-br from-primary-light to-primary'
                }`}>
                  <span className="font-display text-2xl text-white">{index + 1}</span>
                </div>
                
                <h2 className="font-display text-3xl mb-4 text-gray-800">{pacote.nome}</h2>
                <p className="font-body text-gray-600 mb-6 text-lg">{pacote.descricao}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-body font-bold text-primary mb-2">Ideal para:</h3>
                    <p className="font-body text-gray-700">{pacote.idealPara}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-body font-bold text-primary mb-2">O que pode incluir:</h3>
                    <p className="font-body text-gray-700">{pacote.inclui}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-body font-bold text-primary mb-2">Antecedência:</h3>
                    <p className="font-body text-gray-700">{pacote.antecedencia}</p>
                  </div>
                </div>

                <a
                  href={generateWhatsAppLink(`Olá! Tenho interesse no ${pacote.nome}. Gostaria de mais informações!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary to-brown text-white text-center py-4 rounded-lg font-body font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  {pacote.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-display text-3xl mb-4 text-gray-800 text-center">Personalize seu pacote</h2>
            <p className="font-body text-gray-600 text-center mb-6">
              Todos os pacotes podem ser ajustados conforme suas necessidades. Entre em contato e vamos criar a solução perfeita para seu evento!
            </p>
            <div className="text-center">
              <a
                href={generateWhatsAppLink('Olá! Gostaria de personalizar um pacote para meu evento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-body font-semibold transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
