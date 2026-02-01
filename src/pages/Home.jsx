import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Award, Heart, Clock, ChevronRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import QuickOrder from '../components/QuickOrder';
import { siteConfig } from '../config';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function Home() {
  const [counts, setCounts] = useState({ encomendas: 0, clientes: 0, eventos: 0, pedidosRegiaoLagos: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const duration = 2000, steps = 60, interval = duration / steps;
    const timer = setInterval(() => {
      setCounts(prev => ({
        encomendas: Math.min(prev.encomendas + Math.ceil(siteConfig.kpis.encomendas / steps), siteConfig.kpis.encomendas),
        clientes: Math.min(prev.clientes + Math.ceil(siteConfig.kpis.clientes / steps), siteConfig.kpis.clientes),
        eventos: Math.min(prev.eventos + Math.ceil(siteConfig.kpis.eventos / steps), siteConfig.kpis.eventos),
        pedidosRegiaoLagos: Math.min(prev.pedidosRegiaoLagos + Math.ceil(siteConfig.kpis.pedidosRegiaoLagos / steps), siteConfig.kpis.pedidosRegiaoLagos)
      }));
    }, interval);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTestimonial((prev) => (prev + 1) % siteConfig.depoimentos.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { title: 'Alto Padrão', description: 'Doces finos com decoração manual impecável', link: '/doces-alto-padrao', gradient: 'from-primary to-primary-dark' },
    { title: 'Festas', description: 'Variedade e qualidade para seu evento', link: '/doces-festas', gradient: 'from-brown-light to-brown' },
    { title: 'Brownies', description: 'Sabor intenso e textura perfeita', link: '/brownies', gradient: 'from-primary-light to-primary' },
    { title: 'Pães de Mel', description: 'Lembrancinhas e delícias especiais', link: '/paes-mel', gradient: 'from-brown to-brown-dark' }
  ];

  return (
    <>
      <SEO />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light/30 via-white to-brown-light/30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brown/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-lg">
              <Sparkles className="text-primary" size={20} />
              <span className="font-body text-sm text-gray-700">Decoração manual • Alto padrão</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-brown to-primary bg-clip-text text-transparent">Doces que encantam</span>
              <br />
              <span className="text-gray-800">e marcam momentos</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Do simples ao sofisticado, criamos doces artesanais com acabamento impecável para tornar seu evento inesquecível na Região dos Lagos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href={generateWhatsAppLink('Olá! Quero um orçamento de doces de alto padrão para meu evento!')} target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-brown text-white px-8 py-4 rounded-full font-body font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center space-x-2">
                <span>Quero um doce de alto padrão</span>
                <ChevronRight size={20} />
              </a>
              <Link to="/simulador" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-body font-semibold hover:border-primary hover:text-primary transition-all hover:scale-105">
                Simular orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-800">
                Alto padrão e <span className="bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">artesanal</span>
              </h2>
              <p className="font-body text-gray-600 text-lg mb-6">
                Cada doce é criado com dedicação e atenção aos detalhes. Nossa decoração manual garante acabamento impecável e exclusividade para tornar seu evento único.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-body font-semibold text-gray-800">Decoração manual</h3>
                    <p className="font-body text-gray-600 text-sm">Cada detalhe pensado e executado com perfeição</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-body font-semibold text-gray-800">Ingredientes selecionados</h3>
                    <p className="font-body text-gray-600 text-sm">Qualidade premium em cada mordida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-body font-semibold text-gray-800">Feito com tempo e carinho</h3>
                    <p className="font-body text-gray-600 text-sm">Processo artesanal que valoriza cada etapa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-light to-brown-light rounded-3xl shadow-2xl flex items-center justify-center">
                <p className="font-display text-gray-400 text-xl">Imagem: Doces de Alto Padrão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-gray-800">Nossas especialidades</h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">Explore nossas categorias e descubra o doce perfeito para seu evento</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <Link key={i} to={cat.link} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cat.gradient} mb-4 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-2 text-gray-800 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="font-body text-gray-600 text-sm mb-4">{cat.description}</p>
                <div className="flex items-center text-primary font-body font-semibold text-sm">
                  <span>Ver mais</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">{counts.encomendas}+</div>
              <div className="font-body text-gray-600 text-sm md:text-base">Encomendas entregues</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">{counts.clientes}+</div>
              <div className="font-body text-gray-600 text-sm md:text-base">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">{counts.eventos}+</div>
              <div className="font-body text-gray-600 text-sm md:text-base">Eventos atendidos</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">{counts.pedidosRegiaoLagos}+</div>
              <div className="font-body text-gray-600 text-sm md:text-base">Pedidos Região dos Lagos</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-brown-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-gray-800">Como funciona</h2>
            <p className="font-body text-gray-600 text-lg">Simples, rápido e personalizado</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: '1', title: 'Escolher', desc: 'Navegue por nossas categorias ou use o simulador para descobrir as melhores opções' },
              { num: '2', title: 'Personalizar', desc: 'Conte suas preferências e receba um orçamento personalizado via WhatsApp' },
              { num: '3', title: 'Entregar', desc: 'Seus doces chegam no prazo, fresquinhos e com o capricho que você merece' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${i === 0 ? 'from-primary to-primary-dark' : i === 1 ? 'from-brown-light to-brown' : 'from-primary-light to-primary'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="font-display text-3xl text-white">{step.num}</span>
                </div>
                <h3 className="font-display text-2xl mb-3 text-gray-800">{step.title}</h3>
                <p className="font-body text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickOrder />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-gray-800">Nossos pacotes</h2>
            <p className="font-body text-gray-600 text-lg">Soluções completas para cada tipo de evento</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.pacotes.map((pac, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <h3 className="font-display text-3xl mb-4 text-gray-800">{pac.nome}</h3>
                <p className="font-body text-gray-600 mb-6">{pac.descricao}</p>
                <div className="space-y-3 mb-6">
                  <div><h4 className="font-body font-semibold text-gray-700 text-sm mb-1">Ideal para:</h4><p className="font-body text-gray-600 text-sm">{pac.idealPara}</p></div>
                  <div><h4 className="font-body font-semibold text-gray-700 text-sm mb-1">O que pode incluir:</h4><p className="font-body text-gray-600 text-sm">{pac.inclui}</p></div>
                  <div><h4 className="font-body font-semibold text-gray-700 text-sm mb-1">Antecedência recomendada:</h4><p className="font-body text-gray-600 text-sm">{pac.antecedencia}</p></div>
                </div>
                <a href={generateWhatsAppLink(`Olá! Tenho interesse no ${pac.nome}. Gostaria de saber mais!`)} target="_blank" rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary to-brown text-white text-center py-3 rounded-lg font-body font-semibold hover:shadow-xl transition-all hover:scale-105">
                  {pac.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-gray-800">O que dizem nossos clientes</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
              <Star className="absolute top-6 right-6 text-primary fill-primary" size={32} />
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-primary fill-primary" size={20} />)}
                </div>
                <p className="font-body text-gray-700 text-lg md:text-xl italic leading-relaxed">
                  "{siteConfig.depoimentos[currentTestimonial].texto}"
                </p>
              </div>
              <div>
                <p className="font-body font-semibold text-gray-800">{siteConfig.depoimentos[currentTestimonial].nome}</p>
                <p className="font-body text-sm text-gray-600">{siteConfig.depoimentos[currentTestimonial].cidade}</p>
              </div>
              <div className="flex justify-center space-x-2 mt-8">
                {siteConfig.depoimentos.map((_, i) => (
                  <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-primary w-8' : 'bg-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-brown rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">Pronto para adoçar seu evento?</h2>
            <p className="font-body text-white/90 text-lg mb-8">Fale conosco agora e receba um orçamento personalizado</p>
            <a href={generateWhatsAppLink('Olá, Renata! Quero fazer uma encomenda de doces!')} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-body font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
              Falar com a Renata no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
