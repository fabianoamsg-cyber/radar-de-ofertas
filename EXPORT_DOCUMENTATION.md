# Radar de Ofertas - Documentação de Exportação Completa

**Data de Exportação:** 19 de Maio de 2026  
**Versão do Projeto:** 5d6383e0  
**Domínio Publicado:** https://radarblog-epyrrtzw.manus.space

---

## 📋 Índice

1. [Estrutura de Pastas](#estrutura-de-pastas)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Dependências Instaladas](#dependências-instaladas)
4. [Configurações e Variáveis de Ambiente](#configurações-e-variáveis-de-ambiente)
5. [Código-Fonte Principal](#código-fonte-principal)
6. [Produtos e Links de Afiliado](#produtos-e-links-de-afiliado)
7. [APIs Utilizadas](#apis-utilizadas)
8. [Como Rodar Localmente](#como-rodar-localmente)
9. [Deploy e Publicação](#deploy-e-publicação)
10. [Banco de Dados](#banco-de-dados)

---

## 📁 Estrutura de Pastas

```
radar-de-ofertas-blog/
├── client/                          # Frontend React
│   ├── public/                      # Arquivos estáticos
│   │   ├── __manus__/              # Debug collector (Manus-específico)
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── ui/                 # shadcn/ui components
│   │   │   │   ├── button.tsx      # Botão reutilizável
│   │   │   │   ├── card.tsx        # Card reutilizável
│   │   │   │   ├── badge.tsx       # Badge reutilizável
│   │   │   │   └── ... (40+ componentes)
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx     # Contexto de tema (light/dark)
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts             # Funções utilitárias
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Página principal (CORE DO PROJETO)
│   │   │   └── NotFound.tsx
│   │   ├── data/
│   │   │   └── products.ts          # Array de 16 produtos
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Entrypoint React
│   │   ├── index.css                # Estilos globais + Tailwind
│   │   ├── config.ts                # Configurações do site
│   │   └── const.ts
│   └── index.html                   # Template HTML
├── server/                          # Backend (Express - não usado em web-static)
│   └── index.ts
├── shared/                          # Código compartilhado
│   └── const.ts
├── patches/                         # Patches do pnpm
│   └── wouter@3.7.1.patch
├── .manus-logs/                     # Logs de desenvolvimento (Manus-específico)
├── package.json                     # Dependências
├── pnpm-lock.yaml                   # Lock file
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
├── components.json                  # Configuração shadcn/ui
├── template.json                    # Template metadata
├── README.md                        # README original
└── ideas.md                         # Brainstorm de design

```

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **React** | 19.2.1 | Framework UI |
| **TypeScript** | 5.6.3 | Tipagem estática |
| **Vite** | 7.1.7 | Build tool e dev server |
| **Tailwind CSS** | 4.1.14 | Utility-first CSS |
| **shadcn/ui** | Latest | Componentes UI pré-built |
| **Wouter** | 3.3.5 | Roteamento client-side |
| **Framer Motion** | 12.23.22 | Animações |
| **Lucide React** | 0.453.0 | Ícones |
| **Express** | 4.21.2 | Server (não usado em web-static) |

---

## 📦 Dependências Instaladas

### Dependências Principais (Runtime)

```json
{
  "@hookform/resolvers": "^5.2.2",
  "@radix-ui/*": "^1.x.x",  // 15+ pacotes Radix UI
  "axios": "^1.12.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "^1.1.1",
  "embla-carousel-react": "^8.6.0",
  "express": "^4.21.2",
  "framer-motion": "^12.23.22",
  "input-otp": "^1.4.2",
  "lucide-react": "^0.453.0",
  "nanoid": "^5.1.5",
  "next-themes": "^0.4.6",
  "react": "^19.2.1",
  "react-day-picker": "^9.11.1",
  "react-dom": "^19.2.1",
  "react-hook-form": "^7.64.0",
  "react-resizable-panels": "^3.0.6",
  "recharts": "^2.15.2",
  "sonner": "^2.0.7",
  "streamdown": "^1.4.0",
  "tailwind-merge": "^3.3.1",
  "tailwindcss-animate": "^1.0.7",
  "vaul": "^1.1.2",
  "wouter": "^3.3.5",
  "zod": "^4.1.12"
}
```

### Dependências de Desenvolvimento

```json
{
  "@builder.io/vite-plugin-jsx-loc": "^0.1.1",
  "@tailwindcss/typography": "^0.5.15",
  "@tailwindcss/vite": "^4.1.3",
  "@types/express": "4.17.21",
  "@types/google.maps": "^3.58.1",
  "@types/node": "^24.7.0",
  "@types/react": "^19.2.1",
  "@types/react-dom": "^19.2.1",
  "@vitejs/plugin-react": "^5.0.4",
  "autoprefixer": "^10.4.20",
  "esbuild": "^0.25.0",
  "pnpm": "^10.15.1",
  "postcss": "^8.4.47",
  "prettier": "^3.6.2",
  "tailwindcss": "^4.1.14",
  "tsx": "^4.19.1",
  "tw-animate-css": "^1.4.0",
  "typescript": "5.6.3",
  "vite": "^7.1.7",
  "vite-plugin-manus-runtime": "^0.0.57",
  "vitest": "^2.1.4"
}
```

### Gerenciador de Pacotes

```
pnpm@10.4.1+sha512.c753b6c3ad7afa13af388fa6d808035a008e30ea9993f58c6663e2bc5ff21679aa834db094987129aa4d488b86df57f7b634981b2f827cdcacc698cc0cfb88af
```

---

## ⚙️ Configurações e Variáveis de Ambiente

### Arquivo: `client/src/config.ts`

```typescript
export const siteConfig = {
  name: "Radar de Ofertas",
  description: "Seu guia de economia inteligente",
  
  // Links principais
  links: {
    grupoWhatsapp: "https://chat.whatsapp.com/L1Ddh9HziCeHPRTWtjsY52?mode=gi_t",
    grupoTelegram: "https://t.me/seu-grupo-aqui",
    instagram: "https://instagram.com/seu-usuario",
    tiktok: "https://tiktok.com/@seu-usuario",
    youtube: "https://youtube.com/@seu-canal",
    facebook: "https://facebook.com/seu-pagina",
  },

  // Informações de contato
  contact: {
    email: "contato@radardeofertas.com",
    whatsapp: "+55 11 99999-9999",
  },

  // Páginas e seções
  navigation: [
    { label: "Início", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Lojas", href: "/lojas" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],

  // Cores do tema
  colors: {
    primary: "#00FF00",      // Verde neon
    secondary: "#FFD700",    // Amarelo
    accent: "#0066FF",       // Azul
    warning: "#FF6600",      // Laranja
    background: "#0a0a0a",   // Preto profundo
    card: "#1a1a1a",         // Cinza escuro
  },
};
```

### Variáveis de Ambiente (Manus-específicas)

Essas variáveis são injetadas automaticamente pelo Manus em produção:

```
BUILT_IN_FORGE_API_KEY=<chave-api>
BUILT_IN_FORGE_API_URL=<url-api>
JWT_SECRET=<secret>
OAUTH_SERVER_URL=<url-oauth>
OWNER_NAME=<seu-nome>
OWNER_OPEN_ID=<seu-id>
VITE_ANALYTICS_ENDPOINT=<endpoint-analytics>
VITE_ANALYTICS_WEBSITE_ID=<website-id>
VITE_APP_ID=<app-id>
VITE_APP_LOGO=<logo-url>
VITE_APP_TITLE=Radar de Ofertas
VITE_FRONTEND_FORGE_API_KEY=<chave>
VITE_FRONTEND_FORGE_API_URL=<url>
VITE_OAUTH_PORTAL_URL=<url-portal>
```

---

## 💻 Código-Fonte Principal

### 1. **Arquivo: `client/src/pages/Home.tsx`**

Este é o arquivo CORE do projeto. Contém:

- **Header com logo e botão "Entrar no Grupo"**
- **Hero section com CTA**
- **Grid de 16 produtos com cards interativos**
- **Seção "Nunca Perca uma Oferta"**
- **Seção "Sobre"**
- **Footer com links sociais**

#### Código dos Cards de Produtos:

```tsx
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
```

#### Código do Botão "Ver Oferta":

O botão é um componente `<Button>` do shadcn/ui com classes Tailwind:

```tsx
<Button
  size="sm"
  className="w-full bg-green-500 hover:bg-green-600 text-background font-bold shadow-lg shadow-green-500/50"
>
  <ExternalLink className="w-3 h-3 mr-1" />
  VER OFERTA
</Button>
```

**Funcionalidade:** O botão está dentro de um `<a>` tag que aponta para `product.affiliateLink`, então ao clicar no card ou no botão, abre o link de afiliado do Mercado Livre em uma nova aba.

### 2. **Arquivo: `client/src/components/ui/button.tsx`**

Componente Button reutilizável com variantes:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## 📊 Produtos e Links de Afiliado

### Arquivo: `client/src/data/products.ts`

Contém array com 16 produtos do Mercado Livre. Cada produto tem a seguinte estrutura:

```typescript
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
```

### Lista de 16 Produtos:

| ID | Título | Marca | Preço Original | Preço Desconto | Desconto | Link |
|----|--------|-------|----------------|----------------|----------|------|
| 1 | Coleira Peitoral Tamanho Ajustável Cães Porte Grande + Guia | SHOP MGM | R$ 54,73 | R$ 37,49 | 31% | https://produto.mercadolivre.com.br/MLB-4007136019-... |
| 2 | Purificador De Agua Eletronico Pe15p Preto - Electrolux | ELECTROLUX | R$ 775,00 | R$ 509,90 | 34% | https://www.mercadolivre.com.br/purificador-de-agua-... |
| 3 | Mesa De Escritório Em L 3 Gavetas Branco Lisboa Madesa | MADESA | R$ 705,87 | R$ 483,79 | 31% | https://www.mercadolivre.com.br/mesa-de-escritorio-... |
| 4 | Kit 4 Camisas Dry Fit Academia Esportiva Com Proteção Uv | BOLLDOR | R$ 208,00 | R$ 138,54 | 33% | https://produto.mercadolivre.com.br/MLB-2665876730-... |
| 5 | Smart TV DLED 32 HD Toshiba 32V35L Vidaa HDMI Wi-fi | TOSHIBA | R$ 1.499,00 | R$ 879,00 | 41% | https://www.mercadolivre.com.br/smart-tv-dled-32-hd-... |
| 6 | Cartão De Memória Western Digital WD Purple 64GB | WESTERN DIGITAL | R$ 173,82 | R$ 144,27 | 17% | https://www.mercadolivre.com.br/carto-de-memoria-... |
| 7 | Túnel Labirinto Para Gatos Cães Interativo Dobrável Com Brinquedo | NSY | R$ 52,63 | R$ 48,00 | 9% | https://www.mercadolivre.com.br/tunel-labirinto-... |
| 8 | Ventilador De Teto C/ Controle 6 Vel. Fenix Ventisol 127/220v | VENTISOL | R$ 359,00 | R$ 279,00 | 22% | https://www.mercadolivre.com.br/ventilador-de-teto-... |
| 9 | Lavadora De Alta Pressão Lumeka Xw80 Com Motor A Indução | LUMEKA | R$ 1.095,99 | R$ 656,99 | 40% | https://www.mercadolivre.com.br/lavadora-de-alta-... |
| 10 | Painel Decoração Copa Futebol 2,00x1,50m Sublimado Em Tecido | CRIATEMA | R$ 77,99 | R$ 66,99 | 14% | https://www.mercadolivre.com.br/painel-decoracao-... |
| 11 | Amplificador Fone Ouvido 8 Canais Ha800 Powerplay Retorno | POWERPLAY | R$ 250,00 | R$ 190,00 | 24% | https://www.mercadolivre.com.br/amplificador-fone-... |
| 12 | Tênis Nike V5 Run Feminino | NIKE | R$ 649,99 | R$ 519,99 | 20% | https://www.mercadolivre.com.br/tenis-nike-v5-run-... |
| 13 | Serra Makita 4100nh3zx Mármore Com 2 Discos 110mm 1300w | MAKITA | R$ 899,99 | R$ 699,99 | 22% | https://www.mercadolivre.com.br/serra-makita-... |
| 14 | Samsung Smart TV 58 Crystal UHD 4K U8500f 2025 | SAMSUNG | R$ 3.999,00 | R$ 2.799,00 | 30% | https://www.mercadolivre.com.br/samsung-smart-tv-... |
| 15 | Bicicleta Ergométrica Fitness Para Cardio E Musculação 6kg | SEVENFIT | R$ 599,99 | R$ 399,99 | 33% | https://www.mercadolivre.com.br/bicicleta-ergometrica-... |
| 16 | Lixadeira Elétrica De Parede E Teto 1000w Led E Acessórios | PROFISSIONAL | R$ 450,00 | R$ 299,99 | 33% | https://www.mercadolivre.com.br/lixadeira-eletrica-... |

---

## 🔌 APIs Utilizadas

### 1. **Mercado Livre (Afiliado)**
- **Tipo:** Links de afiliado diretos
- **Endpoint:** Cada produto tem seu próprio link (`product.affiliateLink`)
- **Autenticação:** Nenhuma (links públicos)
- **Uso:** Cada botão "VER OFERTA" abre o link de afiliado em nova aba

### 2. **Unsplash (Imagens)**
- **Tipo:** URLs de imagens públicas
- **Endpoint:** `https://images.unsplash.com/photo-{id}?w=400&h=400&fit=crop`
- **Autenticação:** Nenhuma
- **Uso:** Imagens dos produtos

### 3. **Manus Storage (Manus-específico)**
- **Tipo:** Proxy de armazenamento
- **Endpoint:** `/manus-storage/*`
- **Autenticação:** Via `BUILT_IN_FORGE_API_KEY`
- **Uso:** Armazenar e servir assets

### 4. **Manus Analytics (Manus-específico)**
- **Tipo:** Analytics
- **Endpoint:** `%VITE_ANALYTICS_ENDPOINT%/umami`
- **Autenticação:** Via `VITE_ANALYTICS_WEBSITE_ID`
- **Uso:** Rastrear visitantes e eventos

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)

### Passos

1. **Clonar/Extrair o projeto:**
```bash
cd radar-de-ofertas-blog
```

2. **Instalar dependências:**
```bash
pnpm install
```

3. **Rodar em desenvolvimento:**
```bash
pnpm run dev
```

O servidor estará disponível em: `http://localhost:3000`

4. **Build para produção:**
```bash
pnpm run build
```

5. **Rodar em produção:**
```bash
pnpm run start
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm run dev` | Inicia servidor de desenvolvimento |
| `pnpm run build` | Build para produção |
| `pnpm run start` | Roda em produção |
| `pnpm run preview` | Preview do build |
| `pnpm run check` | Verifica tipos TypeScript |
| `pnpm run format` | Formata código com Prettier |

---

## 📤 Deploy e Publicação

### Publicação no Manus

1. Clique em **"Publish"** no Management UI
2. Escolha o domínio: `radardeofertasblog.manus.space`
3. Confirme a publicação

### Deploy em Outros Serviços

**Vercel:**
```bash
vercel deploy
```

**Netlify:**
```bash
netlify deploy --prod --dir=dist/public
```

**Railway:**
```bash
railway deploy
```

---

## 🗄️ Banco de Dados

**Status:** Nenhum banco de dados é utilizado

Este é um projeto **web-static** (frontend-only). Todos os dados dos produtos são armazenados no arquivo `client/src/data/products.ts` como um array TypeScript.

Se você quiser adicionar banco de dados no futuro:

1. Upgrade para `web-db-user` no Manus
2. Use PostgreSQL, MySQL ou MongoDB
3. Crie API endpoints em `server/index.ts`

---

## 🎨 Estilos e Tema

### Arquivo: `client/src/index.css`

Contém:
- Importação do Tailwind CSS
- Variáveis CSS de cores (OKLCH format)
- Tema light e dark
- Componentes customizados (`.container`, `.flex`)

### Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| Verde Neon | #00FF00 | Primária, borders, glow |
| Amarelo | #FFD700 | Títulos, preços, badges |
| Azul | #0066FF | Acentos |
| Laranja | #FF6600 | Avisos, badges |
| Preto Profundo | #0a0a0a | Background |
| Cinza Escuro | #1a1a1a | Cards |

---

## 📝 Notas Importantes

1. **Links de Afiliado:** Os links atuais são genéricos. Substitua pelos seus links reais de afiliado do Mercado Livre.

2. **Imagens:** As imagens são do Unsplash. Para usar imagens próprias, substitua as URLs em `client/src/data/products.ts`.

3. **Configurações:** Edite `client/src/config.ts` para adicionar seus links de redes sociais e contato.

4. **Manus-específico:** Remova `vite-plugin-manus-runtime` do `vite.config.ts` se não estiver usando Manus.

5. **TypeScript:** O projeto usa TypeScript. Verifique tipos com `pnpm run check`.

---

## 📞 Suporte

Para dúvidas sobre o projeto:
- Consulte a documentação do Vite: https://vitejs.dev
- Consulte a documentação do React: https://react.dev
- Consulte a documentação do Tailwind: https://tailwindcss.com
- Consulte a documentação do shadcn/ui: https://ui.shadcn.com

---

**Exportado em:** 19 de Maio de 2026  
**Versão:** 5d6383e0  
**Domínio:** https://radarblog-epyrrtzw.manus.space
