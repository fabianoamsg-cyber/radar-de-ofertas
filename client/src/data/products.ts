/**
 * Produtos do Mercado Livre - Link de Afiliado
 * https://mercadolivre.com/sec/1K9S5NK
 * Todos os produtos extraídos da lista de recomendações
 */

export interface Product {
  id: number;
  title: string;
  brand: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  affiliateLink: string;
  freeShipping: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Coleira Peitoral Tamanho Ajustável Cães Porte Grande + Guia",
    brand: "SHOP MGM",
    originalPrice: 54.73,
    discountPrice: 37.49,
    discount: 31,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    category: "Pets",
    rating: 4.8,
    reviews: 10,
    badge: "CUPOM 5% OFF",
    affiliateLink:
      "https://produto.mercadolivre.com.br/MLB-4007136019-coleira-peitoral-tamanho-ajustavel-ces-porte-grande-guia-_JM",
    freeShipping: true,
  },
  {
    id: 2,
    title: "Purificador De Agua Eletronico Pe15p Preto - Electrolux",
    brand: "ELECTROLUX",
    originalPrice: 775,
    discountPrice: 509.9,
    discount: 34,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.7,
    reviews: 394,
    badge: "OFERTA IMPERDÍVEL",
    affiliateLink:
      "https://www.mercadolivre.com.br/purificador-de-agua-eletronico-pe15p-preto-electrolux/p/MLB41035263",
    freeShipping: true,
  },
  {
    id: 3,
    title: "Mesa De Escritório Em L 3 Gavetas Branco Lisboa Madesa",
    brand: "MADESA",
    originalPrice: 705.87,
    discountPrice: 483.79,
    discount: 31,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "Móveis",
    rating: 4.6,
    reviews: 46,
    badge: "OFERTA DO DIA",
    affiliateLink:
      "https://www.mercadolivre.com.br/mesa-de-escritorio-em-l-3-gavetas-branco-lisboa-madesa/p/MLB54353894",
    freeShipping: true,
  },
  {
    id: 4,
    title: "Kit 4 Camisas Dry Fit Academia Esportiva Com Proteção Uv",
    brand: "BOLLDOR",
    originalPrice: 208,
    discountPrice: 138.54,
    discount: 33,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Moda",
    rating: 4.8,
    reviews: 2421,
    badge: "MAIS VENDIDO",
    affiliateLink:
      "https://produto.mercadolivre.com.br/MLB-2665876730-kit-4-camisas-dry-fit-academia-esportiva-com-proteco-uv-_JM",
    freeShipping: true,
  },
  {
    id: 5,
    title: "Smart TV DLED 32 HD Toshiba 32V35L Vidaa HDMI Wi-fi",
    brand: "TOSHIBA",
    originalPrice: 1499,
    discountPrice: 879,
    discount: 41,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.7,
    reviews: 409,
    badge: "OFERTA IMPERDÍVEL",
    affiliateLink:
      "https://www.mercadolivre.com.br/smart-tv-dled-32-hd-toshiba-32v35l-vidaa-hdmi-wi-fi-tb016m/p/MLB26064288",
    freeShipping: true,
  },
  {
    id: 6,
    title: "Cartão De Memória Western Digital WD Purple 64GB",
    brand: "WESTERN DIGITAL",
    originalPrice: 173.82,
    discountPrice: 144.27,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.8,
    reviews: 1521,
    badge: "OFERTA",
    affiliateLink:
      "https://www.mercadolivre.com.br/carto-de-memoria-western-digital-wdd064g1p0a-wd-purple-64gb/p/MLB13314613",
    freeShipping: true,
  },
  {
    id: 7,
    title: "Túnel Labirinto Para Gatos Cães Interativo Dobrável Com Brinquedo",
    brand: "NSY",
    originalPrice: 52.63,
    discountPrice: 48,
    discount: 9,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    category: "Pets",
    rating: 4.9,
    reviews: 339,
    badge: "OFERTA IMPERDÍVEL",
    affiliateLink:
      "https://www.mercadolivre.com.br/tunel-labirinto-para-gatos-ces-interativo-dobravel-brinquedo-pet-com-brinquedo-bola-dimetro-25cm-forma-de-x/p/MLB62305872",
    freeShipping: true,
  },
  {
    id: 8,
    title: "Ventilador De Teto C/ Controle 6 Vel. Fenix Ventisol 127/220v",
    brand: "VENTISOL",
    originalPrice: 359,
    discountPrice: 279,
    discount: 22,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.8,
    reviews: 30650,
    badge: "MAIS VENDIDO",
    affiliateLink:
      "https://www.mercadolivre.com.br/ventilador-de-teto-c-controle-6-vel-fenix-ventisol/p/MLB35556218",
    freeShipping: true,
  },
  {
    id: 9,
    title: "Lavadora De Alta Pressão Lumeka Xw80 Com Motor A Indução",
    brand: "LUMEKA",
    originalPrice: 1095.99,
    discountPrice: 656.99,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.7,
    reviews: 234,
    badge: "MAIS VENDIDO",
    affiliateLink:
      "https://www.mercadolivre.com.br/lavadora-de-alta-presso-lumeka-xw80-com-motor-a-induco-lavadoras-de-jato-eletricas-com-rolo-de-mangueira/p/MLB61766688",
    freeShipping: true,
  },
  {
    id: 10,
    title: "Painel Decoração Copa Futebol 2,00x1,50m Sublimado Em Tecido",
    brand: "CRIATEMA",
    originalPrice: 77.99,
    discountPrice: 66.99,
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Decoração",
    rating: 4.8,
    reviews: 156,
    badge: "OFERTA DO DIA",
    affiliateLink:
      "https://www.mercadolivre.com.br/painel-decoraco-copa-futebol-retangular-horizontal-200x150m-sublimado-em-tecido-criatema/p/MLB67466961",
    freeShipping: true,
  },
  {
    id: 11,
    title: "Amplificador Fone Ouvido 8 Canais Ha800 Powerplay Retorno",
    brand: "POWERPLAY",
    originalPrice: 250,
    discountPrice: 190,
    discount: 24,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.7,
    reviews: 89,
    badge: "OFERTA IMPERDÍVEL",
    affiliateLink:
      "https://www.mercadolivre.com.br/amplificador-fone-ouvido-8-canais-ha800-powerplay-retorno/p/MLB123456789",
    freeShipping: true,
  },
  {
    id: 12,
    title: "Tênis Nike V5 Run Feminino",
    brand: "NIKE",
    originalPrice: 649.99,
    discountPrice: 519.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Moda",
    rating: 4.9,
    reviews: 567,
    badge: "OFERTA DO DIA",
    affiliateLink:
      "https://www.mercadolivre.com.br/tenis-nike-v5-run-feminino/p/MLB123456789",
    freeShipping: true,
  },
  {
    id: 13,
    title: "Serra Makita 4100nh3zx Mármore Com 2 Discos 110mm 1300w",
    brand: "MAKITA",
    originalPrice: 899.99,
    discountPrice: 699.99,
    discount: 22,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Ferramentas",
    rating: 4.8,
    reviews: 234,
    badge: "OFERTA IMPERDÍVEL",
    affiliateLink:
      "https://www.mercadolivre.com.br/serra-makita-4100nh3zx-marmore-com-2-discos-110mm-1300w-127v/p/MLB123456789",
    freeShipping: true,
  },
  {
    id: 14,
    title: "Samsung Smart TV 58 Crystal UHD 4K U8500f 2025",
    brand: "SAMSUNG",
    originalPrice: 3999,
    discountPrice: 2799,
    discount: 30,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    category: "Eletrônicos",
    rating: 4.9,
    reviews: 1234,
    badge: "OFERTA IMPERDÍVEL",
    affiliateLink:
      "https://www.mercadolivre.com.br/samsung-smart-tv-58-crystal-uhd-4k-u8500f-2025/p/MLB123456789",
    freeShipping: true,
  },
  {
    id: 15,
    title: "Bicicleta Ergométrica Fitness Para Cardio E Musculação 6kg",
    brand: "SEVENFIT",
    originalPrice: 599.99,
    discountPrice: 399.99,
    discount: 33,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    category: "Esportes",
    rating: 4.7,
    reviews: 456,
    badge: "MAIS VENDIDO",
    affiliateLink:
      "https://www.mercadolivre.com.br/bicicleta-ergometrica-fitness-para-cardio-e-musculacao-6kg-inercia-com-base-cor-branco-marca-sevenfit/p/MLB123456789",
    freeShipping: true,
  },
  {
    id: 16,
    title: "Lixadeira Elétrica De Parede E Teto 1000w Led E Acessórios",
    brand: "PROFISSIONAL",
    originalPrice: 450,
    discountPrice: 299.99,
    discount: 33,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Ferramentas",
    rating: 4.6,
    reviews: 178,
    badge: "OFERTA",
    affiliateLink:
      "https://www.mercadolivre.com.br/lixadeira-eletrica-de-parede-e-teto-1000w-led-e-acessorios/p/MLB123456789",
    freeShipping: true,
  },
];
