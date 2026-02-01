# 🍰 Ateliê Doce Mell - Site Completo

Site profissional e moderno para confeitaria artesanal de alto padrão.

## 🚀 Início Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Acessar
# http://localhost:3000
```

## 📦 Build para Produção

```bash
npm run build
npm run preview
```

## ✨ Funcionalidades

- ✅ 14 páginas completas
- ✅ Design responsivo (mobile-first)
- ✅ Integração completa com WhatsApp
- ✅ Simulador de orçamento (wizard 4 etapas)
- ✅ CTA "2 cliques" (cidade + doce)
- ✅ SEO otimizado para Região dos Lagos
- ✅ Carrossel de depoimentos
- ✅ KPIs animados
- ✅ Blog com 6 artigos
- ✅ FAQ com accordion
- ✅ Loading screen elegante

## 📁 Estrutura

```
atelie-doce-mell/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/          # Páginas do site
│   ├── utils/          # Funções utilitárias
│   ├── config.js       # ⚙️ CONFIGURAÇÕES (EDITE AQUI!)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/             # Imagens e assets
├── package.json
└── README.md
```

## ⚙️ Configurações (IMPORTANTE!)

**Tudo está editável em: `src/config.js`**

- WhatsApp e contatos
- Cores da marca
- Cidades atendidas
- Tipos de doces
- KPIs (números)
- Pacotes
- Depoimentos
- Posts do blog
- FAQ

### Exemplo:

```javascript
// src/config.js
export const siteConfig = {
  whatsapp: '+5522998911904',  // ALTERE AQUI
  
  kpis: {
    encomendas: 1500,          // ALTERE AQUI
    clientes: 850,
    // ...
  }
};
```

## 🎨 Personalização

### Cores
Edite em `src/config.js` e `tailwind.config.js`

### Imagens
Adicione em `public/`:
- `logo.png`
- `hero-bg.jpg`
- Fotos de produtos

### Fontes
- Display: Playfair Display
- Body: Inter

## 📱 WhatsApp

Mensagens personalizadas para:
- CTA 2 cliques
- Simulador completo
- Pacotes
- Contato
- CTAs gerais

Funções em: `src/utils/whatsapp.js`

## 🔍 SEO

- Meta tags únicas
- Schema.org LocalBusiness
- Open Graph
- URLs amigáveis
- Palavras-chave: Iguaba Grande, Região dos Lagos, Cabo Frio, Araruama, São Pedro da Aldeia, Saquarema, Bacaxá

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
Arraste a pasta para netlify.com

### Outros
```bash
npm run build
# Upload pasta dist/ para servidor
```

## 📄 Páginas Incluídas

1. Home
2. Doces Alto Padrão
3. Doces Festas
4. Brownies
5. Pães de Mel
6. Pacotes
7. Simulador
8. Sobre
9. Depoimentos
10. Entrega
11. FAQ
12. Blog
13. Post Individual
14. Contato

## 🛠️ Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- React Helmet Async
- Lucide Icons

## 📞 Dados do Ateliê

- **Nome**: Ateliê Doce Mell
- **Proprietária**: Renata Tavares
- **WhatsApp**: (22) 99891-1904
- **Local**: Iguaba Grande - RJ
- **Atendimento**: Região dos Lagos + Todo RJ

---

Desenvolvido com 💝 para o Ateliê Doce Mell
