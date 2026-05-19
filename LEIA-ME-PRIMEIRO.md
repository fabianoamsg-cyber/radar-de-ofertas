# 🎯 Radar de Ofertas - Exportação Completa

Bem-vindo! Este é o seu projeto **Radar de Ofertas** completamente exportado e pronto para usar independentemente do Manus.

## 📦 O que você recebeu

- ✅ **Código-fonte completo** (React + TypeScript)
- ✅ **Todas as dependências** (package.json + pnpm-lock.yaml)
- ✅ **Configurações** (Vite, Tailwind, TypeScript)
- ✅ **16 produtos** do Mercado Livre
- ✅ **Documentação completa** (EXPORT_DOCUMENTATION.md)
- ✅ **Pronto para rodar localmente**

## 🚀 Começar Rápido (5 minutos)

### 1. Extrair o ZIP
```bash
unzip radar-de-ofertas-blog-export.zip
cd radar-ofertas-export
```

### 2. Instalar dependências
```bash
npm install -g pnpm  # Se não tiver pnpm
pnpm install
```

### 3. Rodar localmente
```bash
pnpm run dev
```

Abra: **http://localhost:3000**

## 📚 Documentação Completa

Leia o arquivo `EXPORT_DOCUMENTATION.md` para:
- Estrutura de pastas
- Stack tecnológico
- Código dos cards de produtos
- Código do botão "Ver Oferta"
- Como customizar
- Como fazer deploy

## 🔧 Customizações Importantes

### 1. Adicionar seus links de afiliado
Edite: `client/src/data/products.ts`

```typescript
affiliateLink: "https://seu-link-de-afiliado-aqui"
```

### 2. Adicionar seus links sociais
Edite: `client/src/config.ts`

```typescript
links: {
  grupoWhatsapp: "seu-link-whatsapp",
  instagram: "seu-instagram",
  // ... outros links
}
```

### 3. Trocar imagens
Edite: `client/src/data/products.ts`

```typescript
image: "https://sua-imagem-aqui.jpg"
```

## 📤 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel deploy --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/public
```

### Railway
```bash
npm install -g @railway/cli
railway deploy
```

## 💡 Próximos Passos

1. **Customizar produtos** - Adicione seus links de afiliado reais
2. **Adicionar mais produtos** - Edite `client/src/data/products.ts`
3. **Integrar API do Mercado Livre** - Para atualizar preços automaticamente
4. **Adicionar banco de dados** - Para armazenar comentários/avaliações
5. **Implementar notificações** - Para alertar sobre novas ofertas

## 📞 Precisa de Ajuda?

- **Documentação Vite:** https://vitejs.dev
- **Documentação React:** https://react.dev
- **Documentação Tailwind:** https://tailwindcss.com
- **Documentação shadcn/ui:** https://ui.shadcn.com

## ✅ Checklist de Customização

- [ ] Adicionar links de afiliado reais
- [ ] Adicionar links sociais (WhatsApp, Instagram, etc)
- [ ] Trocar imagens dos produtos
- [ ] Customizar cores (se desejar)
- [ ] Adicionar mais produtos
- [ ] Testar localmente
- [ ] Fazer deploy

## 🎉 Pronto!

Seu blog está pronto para usar. Divirta-se! 🚀

---

**Versão:** 5d6383e0  
**Domínio Original:** https://radarblog-epyrrtzw.manus.space  
**Exportado em:** 19 de Maio de 2026
