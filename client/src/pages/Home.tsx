import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  TrendingDown,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">

<div
  className="fixed inset-0 opacity-[0.08] pointer-events-none bg-center bg-no-repeat bg-contain"
  style={{
    backgroundImage: "url('/logo-radar.png')",
    backgroundSize: "70%"
  }}
></div>
      {/* Radar Background - Suave e Contínuo */}
      <div className="radar-background">
        <div className="radar-circles">
          <div className="radar-circle"></div>
          <div className="radar-circle"></div>
          <div className="radar-circle"></div>
          <div className="radar-circle"></div>
        </div>
        <div className="radar-lines">
          <div className="radar-line"></div>
          <div className="radar-line"></div>
          <div className="radar-line"></div>
          <div className="radar-line"></div>
        </div>
        <div className="radar-center"></div>
      </div>

           {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-green-500/50 shadow-lg shadow-green-500/20">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/logo-radar.png"
              alt="Radar de Ofertas"
              className="w-28 h-16 object-contain drop-shadow-[0_0_18px_rgba(0,255,100,0.8)]"
            />
          </div>
      
          <a href={siteConfig.links.grupoWhatsapp} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-background font-bold shadow-lg shadow-green-500/50">
              Entrar no Grupo
            </Button>
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 border-b border-green-500/30 z-10">
        <div className="container relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-green-500 text-background font-bold shadow-lg shadow-green-500/50 animate-pulse">
              🎯 DESCONTOS DE ATÉ 80% OFF
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-foreground leading-tight">
              <span className="text-white">OFERTAS</span>
              <br />
              <span className="text-yellow-400">IMPERDÍVEIS</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-2 font-semibold">
              AS MELHORES OFERTAS, TODOS OS DIAS!
            </p>
            <p className="text-lg text-foreground/70 mb-8">
              Rastreie promoções em tempo real. Seu radar de economia está aqui.
              Nunca mais perca uma oferta imperdível.
            </p>
            <a href={siteConfig.links.grupoWhatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-background font-bold shadow-lg shadow-green-500/50">
                ENTRAR NO GRUPO VIP!
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 md:py-24 border-b border-green-500/30 z-10 relative">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-white mb-2">
              TODAS AS OFERTAS
            </h3>
            <p className="text-lg text-foreground/70">
              Clique em qualquer oferta para abrir no Mercado Livre
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full p-4 rounded-lg border border-green-500/30 bg-card/50 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all group cursor-pointer">
                  {/* Image and Badge */}
                  <div className="relative mb-3 h-32 rounded overflow-hidden bg-card flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/50">
                          {product.badge}
                        </Badge>
                      </div>
                    )}
                    <Badge className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 text-xs font-bold shadow-lg shadow-yellow-400/30">
                      -{product.discount}%
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="font-semibold text-foreground group-hover:text-green-400 transition line-clamp-2 text-sm mb-2">
                      {product.title}
                    </h4>
                    <p className="text-xs text-foreground/60 mb-2">{product.brand}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3 text-xs">
                      <span className="text-yellow-400">★</span>
                      <span className="font-semibold text-foreground">
                        {product.rating}
                      </span>
                      <span className="text-foreground/60">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-4 mt-auto">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-yellow-400">
                          R$ {product.discountPrice.toLocaleString("pt-BR")}
                        </span>
                        <span className="text-xs text-foreground/50 line-through">
                          R$ {product.originalPrice.toLocaleString("pt-BR")}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <Button
                      size="sm"
                      className="w-full bg-green-500 hover:bg-green-600 text-background font-bold shadow-lg shadow-green-500/50"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      VER OFERTA
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-b border-green-500/30 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-orange-500/20 relative overflow-hidden z-10">
        <div className="container relative">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              NUNCA PERCA UMA OFERTA
            </h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Junte-se ao nosso grupo VIP no WhatsApp e receba notificações das
              melhores promoções em tempo real!
            </p>
            <a href={siteConfig.links.grupoWhatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-background font-bold shadow-lg shadow-green-500/50">
                ENTRAR NO GRUPO VIP!
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 border-b border-green-500/30 z-10 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-white">
              SOBRE O RADAR DE OFERTAS
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              O Radar de Ofertas é uma comunidade dedicada a ajudar você a
              economizar nas melhores compras do Mercado Livre. Rastreamos ofertas
              em tempo real das principais categorias da plataforma.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Nosso objetivo é simples: garantir que você nunca perca uma boa
              promoção. Com análises detalhadas, dicas de economia e alertas em
              tempo real, você tem tudo que precisa para fazer compras inteligentes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-500/50 bg-card/60 p-6 hover:shadow-lg hover:shadow-green-400/50 transition-all">
                <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">RÁPIDO</h4>
                <p className="text-foreground/70">
                  Atualizações em tempo real
                </p>
              </Card>
              <Card className="border-green-500/50 bg-card/60 p-6 hover:shadow-lg hover:shadow-orange-400/50 transition-all">
                <TrendingDown className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">
                  ECONÔMICO
                </h4>
                <p className="text-foreground/70">
                  Economize até 80%
                </p>
              </Card>
              <Card className="border-green-500/50 bg-card/60 p-6 hover:shadow-lg hover:shadow-green-400/50 transition-all">
                <MessageCircle className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">
                  COMUNIDADE
                </h4>
                <p className="text-foreground/70">
                  Milhares de pessoas economizando
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-green-500/30 py-12 z-10 relative">
        <div className="container">
          <div className="text-center text-sm text-foreground/50 mb-8">
            <p>
              © 2026 Radar de Ofertas. Todos os direitos reservados. | Seu grupo
              de economia inteligente.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center hover:bg-green-500/40 hover:shadow-lg hover:shadow-green-400/50 transition text-green-400"
            >
              📷
            </a>
            <a
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center hover:bg-green-500/40 hover:shadow-lg hover:shadow-green-400/50 transition text-green-400"
            >
              🎵
            </a>
            <a
              href={siteConfig.links.grupoWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center hover:bg-green-500/40 hover:shadow-lg hover:shadow-green-400/50 transition text-green-400"
            >
              💬
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
