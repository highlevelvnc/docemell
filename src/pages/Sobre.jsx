import SEO from '../components/SEO';
import { Heart, Award, Users } from 'lucide-react';

export default function Sobre() {
  return (
    <>
      <SEO title="Sobre o Ateliê" description="Conheça a história do Ateliê Doce Mell e da confeiteira Renata Tavares. Doces artesanais de alto padrão em Iguaba Grande." />
      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Sobre o Ateliê Doce Mell</h1>
              <p className="font-body text-xl text-gray-600">Paixão, dedicação e muito carinho em cada doce</p>
            </div>

            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl mb-12">
              <h2 className="font-display text-3xl mb-6 text-gray-800">Nossa História</h2>
              <div className="space-y-4 font-body text-gray-600 text-lg leading-relaxed">
                <p>
                  O Ateliê Doce Mell nasceu da paixão de Renata Tavares pela confeitaria artesanal e pelo desejo de criar doces que vão além do sabor – que contam histórias e marcam momentos especiais.
                </p>
                <p>
                  Localizado em Iguaba Grande, na belíssima Região dos Lagos, o ateliê se especializou em doces de alto padrão com decoração manual, sempre priorizando a qualidade dos ingredientes e o acabamento impecável.
                </p>
                <p>
                  Cada encomenda é tratada com atenção especial, desde a escolha dos sabores até os detalhes finais da decoração. Acreditamos que um doce bem feito tem o poder de tornar qualquer evento mais memorável.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Heart, title: 'Paixão', desc: 'Amor pela confeitaria em cada detalhe' },
                { icon: Award, title: 'Qualidade', desc: 'Ingredientes premium e técnicas aprimoradas' },
                { icon: Users, title: 'Dedicação', desc: 'Atendimento personalizado para cada cliente' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-display text-2xl mb-2 text-gray-800">{item.title}</h3>
                  <p className="font-body text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-primary-light/20 rounded-3xl p-10 text-center">
              <h2 className="font-display text-3xl mb-4 text-gray-800">Renata Tavares</h2>
              <p className="font-body text-lg text-gray-600 italic">
                "Minha missão é transformar momentos especiais em experiências ainda mais doces. Cada doce que sai do ateliê carrega um pedacinho do meu coração e muito amor pela arte da confeitaria."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
