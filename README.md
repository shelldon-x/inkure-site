# Inkure — Site completo (Fase 1 + 2 + 3)

Site de tattoo skincare premium pronto para produção. **18 páginas + 404**, infraestrutura SEO completa, design system unificado.

---

## 📂 Estrutura final

```
inkure/
├── index.html                       ← Home (migrada para CSS compartilhado)
├── 404.html                         ← Página 404 customizada
├── sitemap.xml                      ← 18 URLs com prioridades
├── robots.txt                       ← Bots permitidos/bloqueados
├── vercel.json                      ← cleanUrls + headers + cache
├── README.md
│
├── assets/
│   ├── inkure.css                   ← Design system unificado
│   └── inkure.js                    ← Modal + nav mobile + scroll reveal
│
└── pages/                           ← 17 páginas de conteúdo
    ├── como-cuidar-da-tatuagem.html         ← HUB principal
    ├── melhor-creme-para-tatuagem.html      ← Comercial
    ├── o-que-passar-na-tatuagem.html        ← Comercial
    ├── produtos-para-tatuagem.html          ← Comercial
    ├── como-hidratar-a-tatuagem.html
    ├── pode-pegar-sol-com-tatuagem.html
    ├── pode-molhar-tatuagem.html
    ├── quanto-tempo-tatuagem-cicatriza.html
    ├── tatuagem-cicatrizacao-cuidados.html
    ├── tatuagem-descascando-e-normal.html
    ├── tatuagem-inflamada.html
    ├── o-que-nao-pode-fazer-depois-de-tatuar.html
    ├── quanto-tempo-dura-tatuagem.html
    ├── como-tatuagem-funciona-na-pele.html  ← Autoridade
    ├── tipos-de-pele-tatuagem.html          ← Autoridade
    ├── manter-tatuagem-bonita.html          ← Autoridade
    └── tatuagem-faz-mal.html
```

---

## 🚀 Deploy na Vercel

**Opção A — mover páginas para a raiz (recomendado, URLs limpas):**
```bash
mv pages/*.html .
rmdir pages
```
URLs ficarão: `inkure.com.br/como-cuidar-da-tatuagem` (sem `.html` por causa do `cleanUrls: true`).

**Opção B — manter em `/pages/` com rewrite:** adicione no `vercel.json`:
```json
"rewrites": [
  { "source": "/:slug", "destination": "/pages/:slug.html" }
]
```

---

## 🎯 O que foi entregue (cronologia)

### Fase 1 — Fundação ✅
- 8 páginas existentes reescritas com shell premium unificado
- `inkure.css` e `inkure.js` externalizados (eliminou ~720 linhas duplicadas)
- Modal "Onde comprar" em todas (Amazon/Shopee/ML)
- Nav e footer consistentes em 100% das páginas

### Fase 2 — Expansão ✅
- 9 páginas novas (3 comerciais + 3 educativas + 3 autoridade)
- Cluster SEO formado: cada página linka para 4-7 correlatas
- Funil completo: topo → meio → fundo

### Fase 3 — Production-ready ✅
- ✅ **Sitemap.xml** com 18 URLs e prioridades por intenção
- ✅ **Robots.txt** com bots de IA permitidos (GPTBot, ClaudeBot, Google-Extended, Perplexity) + bots agressivos bloqueados
- ✅ **vercel.json** com cleanUrls, headers de segurança, cache otimizado, redirects
- ✅ **Home migrada** para CSS compartilhado (40KB → 35KB, ~12% menor)
- ✅ **Página 404 customizada** no padrão premium
- ✅ **Auditoria das 17 páginas:**
  - 14 meta descriptions corrigidas (>165 chars → 110-165 ideais)
  - 0 links quebrados, 100% canonical correto, 100% H1 único
- ✅ **Schema Organization + WebSite global** em todas (sameAs com Instagram + 3 marketplaces, SearchAction para caixa de busca no Google)
- ✅ **Schema ItemList** com os 5 produtos na home
- ✅ **Breadcrumb visual** real em todas as 17 páginas

---

## 🔍 SEO técnico aplicado

### Em todas as páginas:
- `<html lang="pt-BR">` + canonical correto + 1 H1 único
- Meta description 110-165 chars (sweet spot Google)
- Open Graph completo (title, description, image, type, url, locale)
- Schemas: Article + BreadcrumbList + FAQPage + Organization + WebSite
- TOC semântico, headings em hierarquia
- Links externos com `rel="noopener noreferrer"`

### Performance:
- `preconnect` para Google Fonts
- CSS/JS com cache imutável (1 ano)
- HTML com cache + stale-while-revalidate
- Fonts com `display=swap`

### Segurança (headers via vercel.json):
- HSTS com preload
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy bloqueando APIs sensíveis

---

## 💰 Funil comercial

### Cada página tem 3 caminhos pro modal "Onde comprar":
1. Botão na nav (desktop e mobile)
2. CTA principal no fim do artigo
3. Botão no footer

### Marketplaces atuais (placeholders das homes):
- Amazon: `https://www.amazon.com.br/`
- Shopee: `https://shopee.com.br/`
- Mercado Livre: `https://www.mercadolivre.com.br/`

> **Próximo passo:** quando tiver as páginas reais dos produtos, search/replace global desses 3 URLs.

---

## 🔗 Mapa de interlink (cluster SEO)

**Hubs principais que recebem mais links:**
- `como-cuidar-da-tatuagem` ← 14 outras páginas linkam pra cá
- `produtos-para-tatuagem` ← hub comercial
- `tatuagem-cicatrizacao-cuidados` ← hub de cicatrização
- `como-tatuagem-funciona-na-pele` ← hub de autoridade

**Cada página tem em média 5-7 links internos** distribuídos em:
- Body do texto (links contextuais naturais)
- Aside "Leia também" (4 links curados)
- CTAs no fim com 2-3 caminhos relacionados

---

## ⏭️ Próximos passos sugeridos (Fase 4)

Sem urgência, mas vão maximizar o que já está construído:

1. **Imagens reais dos produtos** — substituir os mockups SVG na home
2. **OG images reais** — criar 18 imagens 1200×630px
3. **Logo SVG real** — substituir o referenciado no schema
4. **Google Analytics 4** com eventos:
   - `click_buy_now` (cliques no modal)
   - `marketplace_chosen` (qual marketplace foi clicado)
   - `scroll_depth_75` (engagement nos artigos)
5. **Search Console** — submeter sitemap.xml após deploy
6. **Performance audit** com Lighthouse — meta 95+ em todas as 4 categorias
7. **Imagens em `<picture>` + AVIF/WebP** ao substituir SVGs
8. **PWA** — manifest.json + service worker simples

---

## 📊 Números finais

| Métrica | Valor |
|---|---|
| Páginas totais | 18 (1 home + 17 conteúdo) + 404 |
| Tamanho do site | ~395 KB (não compactado) |
| Tamanho do ZIP | ~110 KB |
| CSS compartilhado | 274 linhas (eliminou ~80 linhas/página de duplicação) |
| JS compartilhado | 100 linhas (modal + nav + scroll reveal) |
| Schemas JSON-LD por página | 4 em média |
| Links internos total | ~120 referências |

---

## 🛠️ Manutenção

### Para adicionar uma página nova:
1. Copie qualquer arquivo de `pages/` como base
2. Substitua: `<title>`, meta description, canonical, og:*, schema, breadcrumb label, conteúdo
3. Atualize `sitemap.xml`
4. Adicione links contextuais em 2-3 páginas relacionadas

### Para atualizar o design system:
- Edite **só** `assets/inkure.css` — afeta todas as 18 páginas
- Variáveis CSS (`--bg`, `--fg`, `--a`) no `:root` controlam paleta global

### Para mudar marketplaces:
Search/replace global pelos URLs atuais.

---

**Atualizado:** abril 2026
**Versão:** 3.0 — production-ready
**Inkure** — Tattoo skincare premium
