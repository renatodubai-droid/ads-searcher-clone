export const BRANDS = [
  "Hotmart", "Kabum", "Insider", "Amaro", "Cimed",
  "Alura", "Rocketseat", "Vivara", "Multilaser", "Track.co",
  "Nubank", "iFood", "Shopee", "Magazine Luiza", "Americanas"
];

export const COUNTRIES = [
  { code: "BR", name: "Brasil" },
  { code: "US", name: "Estados Unidos" },
  { code: "PT", name: "Portugal" },
  { code: "ES", name: "Espanha" },
  { code: "MX", name: "Mexico" },
  { code: "AR", name: "Argentina" },
  { code: "CO", name: "Colombia" },
];

export const LANGUAGES = ["Portugues", "Ingles", "Espanhol", "Frances", "Italiano", "Alemao", "Japones"];

export const CTA_TYPES = ["Comprar agora", "Saiba mais", "Cadastre-se", "Baixar", "Assinar", "Ver oferta", "Fale conosco"];

export const FORMATS = ["Imagem", "Video", "Carrossel", "Stories", "Reels"];

export const PLATFORMS = ["Meta", "TikTok"];

export function generateMockAds(count = 50) {
  const hooks = [
    "Voce esta perdendo dinheiro se ainda nao usa isso...",
    "Descubra o segredo que os top media buyers nao contam",
    "3 erros fatais que destroem suas campanhas",
    "O metodo que gerou R$500k em 30 dias",
    "Pare de gastar com ads que nao convertem",
    "A verdade sobre trafego pago que ninguem fala",
    "Como escalei de R$0 a R$100k/mes com um unico criativo",
    "Se voce roda ads e nao faz isso, esta jogando dinheiro fora",
    "O framework de copy que triplicou meu ROAS",
    "Atencao: esta estrategia vai mudar seu jogo",
    "Por que 97% dos anunciantes falham (e como evitar)",
    "O segredo dos anuncios que ficam meses no ar",
    "Esta tecnica simples aumentou minhas conversoes em 340%",
    "Voce NAO precisa de orcamento alto pra escalar",
    "O que R$10/dia de ads pode fazer pelo seu negocio",
  ];

  const advertisers = [
    "Digital Growth Co", "ScaleUp Media", "ConvertMax", "AdPro Brasil",
    "Turbo Ads Agency", "ResultaAds", "Pixel Performance", "Growth Hackers BR",
    "MediaBuyers Pro", "Creative Lab", "FastScale", "Ads Masters",
    "Revenue Engine", "Conversion Kings", "Scale Factory", "FunnelPro",
    "AdVenture Media", "ROI Builders", "Click Convert", "Lead Machine",
  ];

  const categories = [
    "E-commerce", "Infoproduto", "SaaS", "App", "Servicos",
    "Moda", "Saude", "Educacao", "Financas", "Tecnologia"
  ];

  const ads = [];
  for (let i = 0; i < count; i++) {
    const platform = PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)];
    const daysActive = Math.floor(Math.random() * 180) + 1;
    const likes = Math.floor(Math.random() * 50000);
    const comments = Math.floor(Math.random() * (likes * 0.1));
    const shares = Math.floor(Math.random() * (likes * 0.05));
    const score = Math.min(100, Math.floor((daysActive * 0.3 + likes * 0.001 + comments * 0.01 + shares * 0.02) * (0.5 + Math.random() * 0.5)));

    ads.push({
      id: `ad-${i + 1}`,
      hook: hooks[Math.floor(Math.random() * hooks.length)],
      advertiser: advertisers[Math.floor(Math.random() * advertisers.length)],
      platform,
      format: FORMATS[Math.floor(Math.random() * FORMATS.length)],
      country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)],
      language: LANGUAGES[Math.floor(Math.random() * 3)],
      cta: CTA_TYPES[Math.floor(Math.random() * CTA_TYPES.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      daysActive,
      likes,
      comments,
      shares,
      score,
      startDate: new Date(Date.now() - daysActive * 86400000).toISOString().split("T")[0],
      isActive: Math.random() > 0.3,
      hasVideo: Math.random() > 0.5,
      hasLandingPage: Math.random() > 0.4,
      thumbnailColor: `hsl(${Math.floor(Math.random() * 360)}, 60%, 25%)`,
    });
  }

  return ads.sort((a, b) => b.score - a.score);
}

export const MOCK_ADS = generateMockAds(80);

export const TESTIMONIALS = [
  {
    name: "Lucas Ferreira",
    role: "Media Buyer, Growth Agency",
    text: "Ads Searcher entregou o que a minha ultima ferramenta de ad spy so prometia. E a primeira coisa que abro toda manha.",
    avatar: "LF",
  },
  {
    name: "Mariana Costa",
    role: "Head de Trafego, E-commerce DTC",
    text: "Economizamos 15h por semana em pesquisa criativa. O filtro de idioma e um game changer pra quem roda no Brasil.",
    avatar: "MC",
  },
  {
    name: "Rafael Santos",
    role: "Founder, Dropship Masters",
    text: "Encontrei 3 produtos vencedores na primeira semana. O ROI da ferramenta se pagou em 2 dias.",
    avatar: "RS",
  },
  {
    name: "Ana Paula Lima",
    role: "Diretora de Marketing, SaaS B2B",
    text: "A curva de engajamento e absurda. Consigo ver exatamente quando um criativo comeca a decair. Nunca mais lancei campanha no escuro.",
    avatar: "AL",
  },
];

export const FAQ_ITEMS = [
  {
    question: "O que e o Ads Searcher?",
    answer: "O Ads Searcher e uma plataforma de inteligencia de anuncios que unifica a Biblioteca de Anuncios do Meta (Facebook/Instagram) e o TikTok Creative Center. Voce pode buscar, filtrar e analisar milhoes de criativos com precisao cirurgica."
  },
  {
    question: "Posso testar gratis?",
    answer: "Sim! O cadastro e 100% gratuito. Voce cria sua conta, explora a plataforma e assina um plano dentro do app quando quiser usar todas as ferramentas."
  },
  {
    question: "Quais plataformas sao cobertas?",
    answer: "Atualmente cobrimos Meta (Facebook e Instagram) e TikTok. O acervo e atualizado diariamente com milhoes de criativos novos."
  },
  {
    question: "Como funciona o rastreamento de concorrentes?",
    answer: "Voce monta listas com as marcas que deseja acompanhar. O Ads Searcher monitora automaticamente os anuncios que elas estao rodando e te notifica sobre novos criativos."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, sem multa e sem burocracia. Voce cancela direto na plataforma em dois cliques. O acesso continua ate o fim do periodo pago."
  },
  {
    question: "Aceita PIX?",
    answer: "Sim! Aceitamos PIX e cartao de credito. Os pagamentos sao processados pela Cakto com total seguranca."
  },
];

export const FEATURES = [
  {
    icon: "Search",
    title: "Encontre anuncios lucrativos na hora",
    description: "O indexador atualiza milhoes de criativos do Meta e do TikTok todos os dias. Consulta em milissegundos."
  },
  {
    icon: "BarChart3",
    title: "Analise criativa avancada",
    description: "Destrinche cada gancho, angulo e CTA. Extraia o padrao por tras dos anuncios que ficam no ar."
  },
  {
    icon: "SlidersHorizontal",
    title: "Filtros cirurgicos",
    description: "Pais, idioma, engajamento, duracao, CTA, formato, tipo de midia e muito mais."
  },
  {
    icon: "Eye",
    title: "Rastreie concorrentes",
    description: "Monte listas das marcas que voce persegue e acompanhe o que elas estao rodando em um lugar so."
  },
  {
    icon: "FolderHeart",
    title: "Salve em colecoes",
    description: "Organize seu swipe file por nicho, oferta ou angulo. Compartilhe com o time inteiro."
  },
  {
    icon: "Languages",
    title: "Filtro por idioma",
    description: "Anunciante gringo rodando no Brasil aparece separado - o acervo tem sete idiomas detectados na copy."
  },
  {
    icon: "TrendingUp",
    title: "Curvas de engajamento",
    description: "Veja como o anuncio performou ao longo do tempo - proxy de spend, curtidas, comentarios e shares."
  },
  {
    icon: "ShoppingBag",
    title: "Produtos vencedores",
    description: "Filtre por pagina de produto detectada. Pule o anuncio e va direto pra loja que esta vendendo."
  },
];
