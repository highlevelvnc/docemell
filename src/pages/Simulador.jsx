import { useState } from 'react';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { siteConfig } from '../config';
import { generateSimulatorMessage } from '../utils/whatsapp';
import SEO from '../components/SEO';

export default function Simulador() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipoEvento: '',
    dataEvento: '',
    cidade: '',
    local: '',
    itens: [],
    estilo: '',
    convidados: '',
    quantidade: '',
    restricoes: [],
    observacoes: '',
    entrega: '',
    embalagem: '',
    nome: '',
    telefone: ''
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleItem = (item) => {
    setFormData(prev => ({
      ...prev,
      itens: prev.itens.includes(item)
        ? prev.itens.filter(i => i !== item)
        : [...prev.itens, item]
    }));
  };

  const toggleRestricao = (restricao) => {
    setFormData(prev => ({
      ...prev,
      restricoes: prev.restricoes.includes(restricao)
        ? prev.restricoes.filter(r => r !== restricao)
        : [...prev.restricoes, restricao]
    }));
  };

  const handleSubmit = () => {
    const link = generateSimulatorMessage(formData);
    window.open(link, '_blank');
  };

  const progress = (step / 4) * 100;

  return (
    <>
      <SEO 
        title="Simulador de Orçamento"
        description="Simule seu orçamento de doces personalizados. Informe suas preferências e receba uma proposta completa via WhatsApp."
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-brown-light/20 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-display text-4xl md:text-5xl mb-4 text-gray-800">
                Simulador de Orçamento
              </h1>
              <p className="font-body text-gray-600 text-lg">
                Preencha suas preferências e receba um orçamento personalizado
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-body text-sm text-gray-600">Etapa {step} de 4</span>
                <span className="font-body text-sm text-gray-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-brown h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl mb-6 text-gray-800">Sobre o evento</h2>
                  
                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Tipo de evento *</label>
                    <select
                      value={formData.tipoEvento}
                      onChange={(e) => updateField('tipoEvento', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecione</option>
                      <option value="Aniversário">Aniversário</option>
                      <option value="Casamento">Casamento</option>
                      <option value="Chá">Chá (revelação/bebê/lingerie)</option>
                      <option value="Corporativo">Evento corporativo</option>
                      <option value="Formatura">Formatura</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Data do evento</label>
                    <input
                      type="date"
                      value={formData.dataEvento}
                      onChange={(e) => updateField('dataEvento', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Cidade *</label>
                    <select
                      value={formData.cidade}
                      onChange={(e) => updateField('cidade', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecione</option>
                      {siteConfig.cidades.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Local do evento</label>
                    <input
                      type="text"
                      value={formData.local}
                      onChange={(e) => updateField('local', e.target.value)}
                      placeholder="Ex: Salão de festas, casa, clube..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl mb-6 text-gray-800">O que você deseja?</h2>
                  
                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-3 block">Selecione os itens *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {siteConfig.tiposDoces.map((tipo) => (
                        <button
                          key={tipo.id}
                          onClick={() => toggleItem(tipo.nome)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            formData.itens.includes(tipo.nome)
                              ? 'border-primary bg-primary/10 text-primary font-semibold'
                              : 'border-gray-200 hover:border-primary/50 text-gray-700'
                          }`}
                        >
                          {tipo.nome}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Estilo desejado</label>
                    <select
                      value={formData.estilo}
                      onChange={(e) => updateField('estilo', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecione</option>
                      <option value="Clássico">Clássico</option>
                      <option value="Romântico">Romântico</option>
                      <option value="Infantil">Infantil</option>
                      <option value="Luxo">Luxo</option>
                      <option value="Minimalista">Minimalista</option>
                      <option value="Temático">Temático</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl mb-6 text-gray-800">Quantidade e preferências</h2>
                  
                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Número de convidados *</label>
                    <select
                      value={formData.convidados}
                      onChange={(e) => updateField('convidados', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecione</option>
                      <option value="Até 20">Até 20</option>
                      <option value="21-50">21-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Quantidade estimada de doces</label>
                    <input
                      type="number"
                      value={formData.quantidade}
                      onChange={(e) => updateField('quantidade', e.target.value)}
                      placeholder="Ex: 100"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-3 block">Restrições alimentares</label>
                    <div className="space-y-2">
                      {['Sem lactose', 'Sem glúten', 'Sem nozes', 'Vegano'].map((restricao) => (
                        <label key={restricao} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.restricoes.includes(restricao)}
                            onChange={() => toggleRestricao(restricao)}
                            className="w-5 h-5 text-primary"
                          />
                          <span className="font-body text-gray-700">{restricao}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Observações</label>
                    <textarea
                      value={formData.observacoes}
                      onChange={(e) => updateField('observacoes', e.target.value)}
                      rows="4"
                      placeholder="Cores, temas, detalhes especiais..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl mb-6 text-gray-800">Finalização</h2>
                  
                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Preferência de entrega *</label>
                    <select
                      value={formData.entrega}
                      onChange={(e) => updateField('entrega', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecione</option>
                      <option value="Entrega">Entrega</option>
                      <option value="Retirada">Retirada</option>
                      <option value="A combinar">A combinar</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Tipo de embalagem</label>
                    <select
                      value={formData.embalagem}
                      onChange={(e) => updateField('embalagem', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecione</option>
                      <option value="Simples">Simples</option>
                      <option value="Premium">Premium</option>
                      <option value="Presenteável">Presenteável</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Seu nome</label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => updateField('nome', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-gray-700 mb-2 block">Seu telefone</label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => updateField('telefone', e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-body font-semibold hover:border-primary hover:text-primary transition-all"
                  >
                    <ChevronLeft size={20} />
                    <span>Voltar</span>
                  </button>
                )}

                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="ml-auto flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-brown text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all"
                  >
                    <span>Próximo</span>
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="ml-auto flex items-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all"
                  >
                    <Send size={20} />
                    <span>Enviar no WhatsApp</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
