import { useState } from 'react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { siteConfig } from '../config';
import { generateContactMessage } from '../utils/whatsapp';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    const link = generateContactMessage(formData.nome, formData.email, formData.mensagem);
    window.open(link, '_blank');
  };

  return (
    <>
      <SEO title="Contato" description="Entre em contato com o Ateliê Doce Mell. Estamos em Iguaba Grande, RJ. WhatsApp, email e redes sociais." />
      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Contato</h1>
              <p className="font-body text-xl text-gray-600">Vamos conversar sobre seu próximo evento!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="font-display text-3xl mb-6 text-gray-800">Fale conosco</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-gray-800 mb-1">Localização</h3>
                      <p className="font-body text-gray-600">{siteConfig.localizacao.endereco}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-gray-800 mb-1">WhatsApp</h3>
                      <p className="font-body text-gray-600">{siteConfig.whatsappFormatado}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="font-body text-gray-600">contato@docemell.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="font-display text-3xl mb-6 text-gray-800">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Seu nome *</label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Seu email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Mensagem *</label>
                    <textarea
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-brown text-white py-4 rounded-lg font-body font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Enviar via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
