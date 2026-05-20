import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";
import { siteConfig } from "@/config";
import {
  Send,
  Star,
  Tags,
  Flame,
  Users,
  ShieldCheck,
  Radar,
  Store,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const hotProducts = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div
        className="fixed inset-0 opacity-[0.16] pointer-events-none bg-right-top bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/logo-radar.png')" }}
      />

      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-green-500/50 shadow-lg shadow-green-500/20">
        <div className="container h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-radar.png" alt="Radar de Ofertas" className="w-24 h-20 object-contain" />
            <div className="leading-none">
              <div className="text-2xl font-black">RADAR DE</div>
              <div className="text-3xl font-black text-yellow-400">OFERTAS 🔍</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 font-semibold">
            <a className="text-green-400 border-b-2 border-green-400 pb-2" href="#">Início</a>
            <a href="#ofertas">Ofertas</a>
            <a href="#lojas">Lojas</a>
            <a href="#cupons">Cupons</a>
            <a href="#como-funciona">Como Funciona</a>
          </nav>

          <a href={siteConfig.links.grupoWhatsapp} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-black shadow-lg shadow-green-500/50">
              <Send className="w-4 h-4 mr-2" />
              Entrar no Grupo VIP
            </Button>
          </a>
        </div>
      </header>

      <section className="relative z-10 border-b border-green-500/20">
        <div className="container py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-5 bg-green-500/10 border border-green-500 text-green-400 shadow-green-500/40 shadow-lg">
              <Tags className="w-4 h-4 mr-2" />
              DESCONTOS DE ATÉ 80% OFF
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              AS MELHORES <br />
              <span className="text-yellow-400">OFERTAS</span> <br />
              TODOS OS DIAS!
            </h1>

            <p className="text-lg text-white/70 mt-6 max-w-xl">
              Rastreie promoções em tempo real. Seu radar de economia está aqui.
              Nunca mais perca uma oferta imperdível.
            </p>

            <div className="flex gap-4 mt-8">
              <a href={siteConfig.links.grupoWhatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-black shadow-lg shadow-green-500/50">
                  <Send className="w-5 h-5 mr-2" />
                  ENTRAR NO GRUPO VIP!
                </Button>
              </a>
              <a href="#ofertas">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-black/40">
                  <Star className="w-5 h-5 mr-2" />
                  Ver Ofertas
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["2.489+", "Ofertas ativas agora", Radar],
              ["80%", "Descontos de até 80% OFF", Tags],
              ["500+", "Novas ofertas hoje", Flame],
              ["12.350+", "Membros no grupo VIP", Users],
            ].map(([num, label, Icon]) => (
              <Card key={String(label)} className="bg-black/50 border-green-500/40 p-6 text-center shadow-lg shadow-green-500/10">
                <Icon className="w-10 h-10 mx-auto text-green-400 mb-4" />
                <div className="text-3xl font-black text-white">{num}</div>
                <div className="text-green-400 font-semibold mt-2">{label}</div>
              </Card>
            ))}

            <div className="col-span-2 flex items-center gap-3 border border-green-500/30 bg-black/50 rounded-xl p-4">
              <ShieldCheck className="text-green-400" />
              <span>Ofertas verificadas e atualizadas 24h por dia para você economizar sempre!</span>
            </div>
          </div>
        </div>
      </section>

      <section id="lojas" className="relative z-10 py-12 border-b border-green-500/20">
        <div className="container text-center">
          <p className="text-green-400 font-black text-sm">OFERTAS DAS MELHORES LOJAS</p>
          <h2 className="text-3xl font-black mb-8">Encontre ofertas nas principais lojas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["Mercado Livre", "As melhores ofertas do Mercado Livre", "🤝", "border-yellow-400"],
              ["Shopee", "Ofertas imperdíveis na Shopee", "🛍️", "border-orange-500"],
              ["Amazon", "As melhores ofertas da Amazon", "a", "border-yellow-400"],
            ].map(([title, desc, icon, border]) => (
              <Card key={title} className={`bg-black/60 ${border} border p-6 text-left flex items-center justify-between`}>
                <div className="flex items-center gap-5">
                  <div className="text-6xl font-black text-white">{icon}</div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{title}</h3>
                    <p className="text-white/70">{desc}</p>
                    <Button className="mt-4 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                      Ver ofertas →
                    </Button>
                  </div>
                </div>
                <Store className="text-yellow-400" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" className="relative z-10 py-14">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-green-400 font-black text-sm text-center md:text-left">ÚLTIMAS OFERTAS</p>
              <h2 className="text-3xl font-black">Ofertas quentes pra você 🔥</h2>
            </div>
            <Button variant="outline" className="hidden md:flex border-green-500 text-green-400 bg-black/40">
              Ver todas as ofertas →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {hotProducts.map((product) => (
              <a key={product.id} href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                <Card className="bg-zinc-950/90 border-white/10 overflow-hidden hover:border-green-400 transition shadow-lg">
                  <div className="relative h-44 bg-zinc-900">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white">-{product.discount}%</Badge>
                    <Badge className="absolute top-2 right-12 bg-yellow-400 text-black">⚡ FRETE GRÁTIS</Badge>
                    <Heart className="absolute top-3 right-3 w-5 h-5 text-white" />
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-white line-clamp-2 text-sm">{product.title}</h3>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-green-400 text-xl font-black">
                        R$ {product.discountPrice.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <span className="text-white/40 line-through text-sm">
                      R$ {product.originalPrice.toLocaleString("pt-BR")}
                    </span>

                    <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black font-black">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Oferta
                    </Button>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
