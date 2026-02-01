import { useState } from 'react';
import { MapPin, Cake, Send } from 'lucide-react';
import { siteConfig } from '../config';
import { generateQuickOrderMessage } from '../utils/whatsapp';

export default function QuickOrder() {
  const [cidade, setCidade] = useState('');
  const [tipoDoce, setTipoDoce] = useState('');

  const handleSubmit = () => {
    if (!cidade || !tipoDoce) {
      alert('Por favor, selecione a cidade e o tipo de doce!');
      return;
    }

    const tipoSelecionado = siteConfig.tiposDoces.find(t => t.id === tipoDoce);
    const link = generateQuickOrderMessage(cidade, tipoSelecionado.nome);
    window.open(link, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-light/40 to-brown-light/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-gray-800">
            Peça em 2 cliques
          </h2>
          <p className="font-body text-gray-600 text-lg">
            Selecione sua cidade e o tipo de doce. Vamos preparar um orçamento perfeito para você!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="space-y-6">
            {/* Passo 1: Cidade */}
            <div>
              <label className="flex items-center font-body font-semibold text-gray-700 mb-3">
                <MapPin className="mr-2 text-primary" size={20} />
                Passo 1: Sua cidade
              </label>
              <select
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors font-body"
              >
                <option value="">Selecione sua cidade</option>
                {siteConfig.cidades.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Passo 2: Tipo de Doce */}
            <div>
              <label className="flex items-center font-body font-semibold text-gray-700 mb-3">
                <Cake className="mr-2 text-primary" size={20} />
                Passo 2: O que você procura?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.tiposDoces.map((tipo) => (
                  <button
                    key={tipo.id}
                    onClick={() => setTipoDoce(tipo.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left font-body ${
                      tipoDoce === tipo.id
                        ? 'border-primary bg-primary/10 text-primary font-semibold'
                        : 'border-gray-200 hover:border-primary/50 text-gray-700'
                    }`}
                  >
                    {tipo.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* Botão de Envio */}
            <button
              onClick={handleSubmit}
              disabled={!cidade || !tipoDoce}
              className={`w-full py-4 px-6 rounded-lg font-body font-semibold text-white flex items-center justify-center space-x-2 transition-all ${
                cidade && tipoDoce
                  ? 'bg-green-500 hover:bg-green-600 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
              <span>Abrir WhatsApp com mensagem pronta</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
