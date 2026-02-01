// Configurações editáveis do Ateliê Doce Mell
export const siteConfig = {
  nome: 'Ateliê Doce Mell',
  proprietaria: 'Renata Tavares',
  whatsapp: '+5522998911904',
  whatsappFormatado: '(22) 99891-1904',
  
  localizacao: {
    cidade: 'Iguaba Grande',
    estado: 'RJ',
    endereco: 'Iguaba Grande – RJ'
  },

  cores: {
    primaria: '#F7B6C8',
    branco: '#FFFFFF',
    marrom: '#C8A27A'
  },

  cidades: [
    'Iguaba Grande',
    'Araruama',
    'São Pedro da Aldeia',
    'Cabo Frio',
    'Saquarema',
    'Bacaxá',
    'Outra cidade (RJ)'
  ],

  tiposDoces: [
    { id: 'alto-padrao', nome: 'Doces de alto padrão (decorados)' },
    { id: 'simples', nome: 'Doces simples para festas' },
    { id: 'brownies', nome: 'Brownies' },
    { id: 'paes-mel', nome: 'Pães de mel' },
    { id: 'kit-festa', nome: 'Kit festa / mesa de doces' },
    { id: 'lembrancinhas', nome: 'Lembrancinhas' }
  ],

  kpis: {
    encomendas: 1500,
    clientes: 850,
    eventos: 320,
    pedidosRegiaoLagos: 1200
  },

  pacotes: [
    {
      id: 'festa',
      nome: 'Pacote Festa',
      descricao: 'Ideal para aniversários e eventos simples',
      inclui: 'Doces variados + opções simples e personalizáveis',
      idealPara: 'Aniversários, festas infantis, confraternizações',
      antecedencia: '7 dias',
      cta: 'Quero o Pacote Festa no WhatsApp'
    },
    {
      id: 'premium',
      nome: 'Pacote Premium',
      descricao: 'Para eventos sofisticados, doces finos e decoração manual',
      inclui: 'Acabamento impecável, alto padrão, personalização avançada',
      idealPara: 'Casamentos, formaturas, eventos de luxo',
      antecedencia: '15 dias',
      cta: 'Quero o Pacote Premium no WhatsApp'
    },
    {
      id: 'corporativo',
      nome: 'Pacote Corporativo',
      descricao: 'Eventos de empresa, brindes e lembranças personalizadas',
      inclui: 'Padronização, volumes maiores, embalagem elegante',
      idealPara: 'Eventos corporativos, brindes empresariais, workshops',
      antecedencia: '10 dias',
      cta: 'Quero o Pacote Corporativo no WhatsApp'
    }
  ],

  depoimentos: [
    {
      nome: 'Mariana Silva',
      cidade: 'Iguaba Grande',
      texto: 'Os doces da Renata são simplesmente perfeitos! Fiz meu casamento e todos os convidados elogiaram. Decoração impecável e sabor incrível!',
      nota: 5.0
    },
    {
      nome: 'Carlos Eduardo',
      cidade: 'Araruama',
      texto: 'Encomendei doces para o aniversário da minha filha e superou todas as expectativas. Acabamento artesanal e muito capricho!',
      nota: 5.0
    },
    {
      nome: 'Ana Paula Costa',
      cidade: 'Cabo Frio',
      texto: 'Qualidade premium de verdade! Os brownies são os melhores que já comi. Sempre encomendo para eventos especiais.',
      nota: 5.0
    },
    {
      nome: 'Roberto Fernandes',
      cidade: 'São Pedro da Aldeia',
      texto: 'Profissionalismo e sabor incomparável. Os doces finos para minha formatura ficaram lindos e deliciosos!',
      nota: 5.0
    },
    {
      nome: 'Juliana Martins',
      cidade: 'Saquarema',
      texto: 'A atenção aos detalhes faz toda diferença. Cada doce é uma obra de arte! Recomendo muito!',
      nota: 5.0
    },
    {
      nome: 'Pedro Henrique',
      cidade: 'Iguaba Grande',
      texto: 'Para eventos corporativos, é a melhor escolha. Entrega pontual, qualidade excepcional e embalagem elegante.',
      nota: 5.0
    },
    {
      nome: 'Camila Rocha',
      cidade: 'Araruama',
      texto: 'Os pães de mel são perfeitos para lembrancinhas! Todos adoram e ainda pedem mais. Decoração lindíssima!',
      nota: 5.0
    },
    {
      nome: 'Fernando Santos',
      cidade: 'Cabo Frio',
      texto: 'Fiz uma mesa de doces completa e foi um sucesso absoluto! Sabor e beleza em cada detalhe. Nota 1000!',
      nota: 5.0
    }
  ],

  blogPosts: [
    {
      id: 1,
      slug: 'doces-alto-padrao-quando-escolher',
      titulo: 'Doces de alto padrão: o que são e quando escolher',
      resumo: 'Descubra a diferença entre doces decorados artesanais e quando vale a pena investir em qualidade premium.',
      conteudo: 'Doces de alto padrão são criações artesanais com decoração manual, acabamento impecável e ingredientes selecionados...',
      data: '2026-01-15'
    },
    {
      id: 2,
      slug: 'escolher-doces-aniversario-regiao-lagos',
      titulo: 'Como escolher doces para aniversário na Região dos Lagos',
      resumo: 'Guia completo para acertar na escolha dos doces perfeitos para sua festa na Região dos Lagos.',
      conteudo: 'A Região dos Lagos tem características únicas quando se trata de festas e eventos...',
      data: '2026-01-20'
    },
    {
      id: 3,
      slug: 'doces-personalizados-vs-simples',
      titulo: 'Doces personalizados vs doces simples: qual combina com seu evento?',
      resumo: 'Entenda as diferenças e saiba qual opção é ideal para cada tipo de celebração.',
      conteudo: 'Cada evento tem suas particularidades e merece doces à altura. Veja como escolher...',
      data: '2026-01-25'
    },
    {
      id: 4,
      slug: 'paes-mel-lembrancinhas-elegantes',
      titulo: 'Pães de mel decorados: lembrancinhas elegantes',
      resumo: 'Transforme pães de mel em lembrancinhas sofisticadas e memoráveis para seu evento.',
      conteudo: 'Os pães de mel são versáteis e podem se tornar lembrancinhas inesquecíveis...',
      data: '2026-01-28'
    },
    {
      id: 5,
      slug: 'brownies-mesa-doces-completa',
      titulo: 'Brownies: como montar uma mesa de doces completa',
      resumo: 'Aprenda a harmonizar brownies com outros doces para criar uma mesa irresistível.',
      conteudo: 'Brownies trazem sofisticação e sabor intenso para qualquer mesa de doces...',
      data: '2026-01-30'
    },
    {
      id: 6,
      slug: 'checklist-encomendar-doces-finos',
      titulo: 'Checklist para encomendar doces finos com antecedência',
      resumo: 'Planeje sua encomenda com antecedência e garanta doces perfeitos para seu evento.',
      conteudo: 'Organizar um evento especial requer planejamento. Veja nosso checklist completo...',
      data: '2026-02-01'
    }
  ],

  faq: [
    {
      pergunta: 'Qual a antecedência mínima para fazer uma encomenda?',
      resposta: 'Para doces simples, recomendamos 7 dias. Para doces de alto padrão e eventos especiais, ideal é 15 dias de antecedência.'
    },
    {
      pergunta: 'Vocês atendem toda a Região dos Lagos?',
      resposta: 'Sim! Atendemos Iguaba Grande, Araruama, São Pedro da Aldeia, Cabo Frio, Saquarema e Bacaxá. Fazemos entregas em todo o estado do Rio de Janeiro.'
    },
    {
      pergunta: 'É possível personalizar os doces?',
      resposta: 'Sim! Trabalhamos com decoração manual e podemos personalizar cores, temas e estilos conforme seu evento.'
    },
    {
      pergunta: 'Fazem doces sem lactose ou glúten?',
      resposta: 'Sim, produzimos doces com restrições alimentares. Consulte as opções disponíveis pelo WhatsApp.'
    },
    {
      pergunta: 'Como funciona a entrega?',
      resposta: 'Realizamos entregas na Região dos Lagos e em todo o RJ. O valor e prazo variam conforme a localização. Entre em contato para mais detalhes.'
    },
    {
      pergunta: 'Qual a quantidade mínima de doces?',
      resposta: 'Não temos quantidade mínima! Atendemos desde pequenas encomendas até grandes eventos.'
    },
    {
      pergunta: 'Os doces podem ser retirados no ateliê?',
      resposta: 'Sim! A retirada pode ser feita em Iguaba Grande mediante agendamento prévio.'
    },
    {
      pergunta: 'Como faço o orçamento?',
      resposta: 'É super fácil! Use nosso simulador de orçamento ou entre em contato direto pelo WhatsApp com suas preferências.'
    }
  ],

  seo: {
    titulo: 'Ateliê Doce Mell - Doces Finos e Artesanais na Região dos Lagos | Iguaba Grande RJ',
    descricao: 'Doces de alto padrão com decoração manual em Iguaba Grande. Brownies, pães de mel e doces personalizados para festas na Região dos Lagos. Entrega em todo RJ.',
    palavrasChave: [
      'doces finos Iguaba Grande',
      'doces alto padrão Região dos Lagos',
      'doces decorados Cabo Frio',
      'doces artesanais Araruama',
      'doces personalizados São Pedro da Aldeia',
      'brownies Saquarema',
      'pães de mel Bacaxá',
      'confeitaria Região dos Lagos'
    ]
  }
};
