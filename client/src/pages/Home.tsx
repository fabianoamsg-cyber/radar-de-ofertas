import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
Send,
Tags,
Flame,
Users,
ShieldCheck,
Radar,
Store,
Star
} from "lucide-react";

export default function Home() {
return (

<div className="min-h-screen bg-black text-white overflow-hidden relative">

<div
className="fixed inset-0 opacity-[0.08] bg-center bg-no-repeat bg-cover"
style={{
backgroundImage:"url('/logo-radar.png')"
}}
/>

<header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-green-500/50">

<div className="container mx-auto flex items-center justify-between h-20 px-6">

<div className="flex items-center gap-3">

<img
src="/logo-radar.png"
className="w-28 object-contain"
alt="Radar"
/>

</div>

<nav className="hidden md:flex gap-8 font-semibold">

<a href="#">Início</a>
<a href="#ofertas">Ofertas</a>
<a href="#lojas">Lojas</a>
<a href="#">Cupons</a>

</nav>

<Button className="bg-green-500 text-black font-bold">

<Send className="mr-2 h-4 w-4"/>

Entrar no Grupo VIP

</Button>

</div>

</header>

<section className="container mx-auto py-20 px-6 grid lg:grid-cols-2 gap-10 items-center">

<div>

<Badge className="bg-green-600 mb-5">

<Tags className="w-4 h-4 mr-2"/>

DESCONTOS DE ATÉ 80%

</Badge>

<h1 className="text-6xl font-black">

AS MELHORES

<br/>

<span className="text-yellow-400">

OFERTAS

</span>

<br/>

TODOS OS DIAS!

</h1>

<p className="mt-6 text-white/70 text-xl">

Rastreie promoções em tempo real.

Nunca mais perca uma oferta.

</p>

<div className="flex gap-4 mt-8">

<Button
size="lg"
className="bg-green-500 text-black font-bold"
>

Entrar no Grupo VIP

</Button>

<Button
size="lg"
variant="outline"
>

<Star className="mr-2"/>

Ver ofertas

</Button>

</div>

</div>

<div className="grid grid-cols-2 gap-4">

{[
["2.489+","Ofertas ativas",Radar],
["80%","Descontos",Tags],
["500+","Novas ofertas",Flame],
["12.350+","Membros VIP",Users]
].map(([num,text,Icon])=>(

<Card
key={String(text)}
className="bg-black/50 border border-green-500/40 p-6 text-center"
>

<Icon className="mx-auto text-green-400 mb-3"/>

<div className="text-3xl font-bold">

{num}

</div>

<div className="text-green-400">

{text}

</div>

</Card>

))}

</div>

</section>

<section
id="lojas"
className="container mx-auto py-16 px-6"
>

<h2 className="text-center text-4xl font-black mb-10">

Encontre ofertas nas principais lojas

</h2>

<div className="grid md:grid-cols-3 gap-6">

{[
["Mercado Livre","As melhores ofertas","/mercadolivre.png","border-yellow-400"],
["Shopee","Ofertas imperdíveis","/shopee.png","border-orange-500"],
["Amazon","As melhores ofertas","/amazon.png","border-yellow-400"]
].map(([titulo,descricao,logo,border])=>(

<Card
key={String(titulo)}
className={`bg-black/60 border ${border} p-6`}
>

<div className="flex gap-5 items-center">

<img
src={String(logo)}
className="w-28 h-28 object-contain"
/>

<div>

<h3 className="text-2xl font-bold">

{titulo}

</h3>

<p className="text-white/70">

{descricao}

</p>

<Button className="mt-4">

Ver ofertas →

</Button>

</div>

</div>

</Card>

))}

</div>

</section>

<section
id="ofertas"
className="container mx-auto py-16 px-6"
>

<h2 className="text-center text-4xl font-black mb-10">

🔥 Ofertas quentes

</h2>

</section>

</div>

);

}
