import { siteConfig } from '../config';

export const generateWhatsAppLink = (message) => {
  const phone = siteConfig.whatsapp.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const generateQuickOrderMessage = (cidade, tipoDoce) => {
  const mensagem = `Olá, Renata! Sou de ${cidade} e quero um orçamento de ${tipoDoce}. Gostaria de saber mais sobre opções e valores!`;
  return generateWhatsAppLink(mensagem);
};

export const generatePackageMessage = (pacote) => {
  const mensagem = `Olá, Renata! Tenho interesse no ${pacote.nome}. Gostaria de saber mais sobre as opções disponíveis e como funciona!`;
  return generateWhatsAppLink(mensagem);
};

export const generateSimulatorMessage = (dados) => {
  const {
    tipoEvento,
    dataEvento,
    cidade,
    local,
    itens,
    estilo,
    convidados,
    quantidade,
    restricoes,
    observacoes,
    entrega,
    embalagem,
    nome,
    telefone
  } = dados;

  let mensagem = `Olá, Renata! Gostaria de um orçamento.\n\n`;
  
  if (nome) mensagem += `📝 Nome: ${nome}\n`;
  if (telefone) mensagem += `📞 Telefone: ${telefone}\n\n`;
  
  mensagem += `📍 Cidade: ${cidade}\n`;
  mensagem += `🎉 Evento: ${tipoEvento}\n`;
  if (dataEvento) mensagem += `📅 Data: ${dataEvento}\n`;
  if (local) mensagem += `📌 Local: ${local}\n\n`;
  
  mensagem += `🍰 Itens desejados:\n${itens.join('\n')}\n\n`;
  
  if (estilo) mensagem += `🎨 Estilo: ${estilo}\n`;
  mensagem += `👥 Convidados: ${convidados}\n`;
  if (quantidade) mensagem += `📊 Quantidade estimada: ${quantidade} unidades\n`;
  if (restricoes && restricoes.length > 0) mensagem += `⚠️ Restrições: ${restricoes.join(', ')}\n`;
  
  mensagem += `\n🚚 Entrega/Retirada: ${entrega}\n`;
  mensagem += `📦 Embalagem: ${embalagem}\n`;
  
  if (observacoes) mensagem += `\n💬 Observações:\n${observacoes}`;

  return generateWhatsAppLink(mensagem);
};

export const generateContactMessage = (nome, email, mensagem) => {
  const texto = `Olá! Me chamo ${nome}.\n\nEmail: ${email}\n\nMensagem:\n${mensagem}`;
  return generateWhatsAppLink(texto);
};
