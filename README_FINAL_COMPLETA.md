# Inkure — Versão final completa auditada

## Nota atual após auditoria
**9.1 / 10**

## O que foi corrigido
- Pacote agora está completo: home, páginas internas, assets, robots, sitemap, vercel e README.
- Instagram atualizado para `@inkure.care` em HTML e JS.
- Marketplaces agora fazem busca por `inkure tattoo skincare`.
- Criadas duas versões da logo:
  - `assets/logo.svg` para fundo claro
  - `assets/logo-light.svg` para fundo escuro/footer
- `color-scheme: light` aplicado para evitar inversões automáticas estranhas em modo escuro.
- Footer premium com contraste reforçado.
- SVGs de Amazon, Shopee e Mercado Livre padronizados em 64x64.
- CSS preservado e corrigido com patch final limpo, sem remover o design system original.
- JS global validado com `node --check`.

## Observação sobre busca nos marketplaces
Usei `inkure tattoo skincare`, e não `inkure premium tattoo skincare`.

Motivo:
- é mais curto;
- reduz risco de nenhum resultado;
- mantém intenção de busca clara;
- “premium” deve ficar na copy/posicionamento, não necessariamente na query de marketplace.

## Estrutura
- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `vercel.json`
- `pages/`
- `assets/`
