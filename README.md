# Inkure — estrutura global centralizada

Este pacote usa uma estrutura profissional com a raiz limpa e páginas internas dentro de `pages/`.

## Mapa de pastas

```txt
inkure/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── README.md
│
├── pages/
│   ├── guia-tatuagem-completo.html
│   ├── como-cuidar-da-tatuagem.html
│   ├── como-hidratar-a-tatuagem.html
│   ├── como-tatuagem-funciona-na-pele.html
│   ├── manter-tatuagem-bonita.html
│   ├── melhor-creme-para-tatuagem.html
│   ├── o-que-nao-pode-fazer-depois-de-tatuar.html
│   ├── o-que-passar-na-tatuagem.html
│   ├── pode-molhar-tatuagem.html
│   ├── pode-pegar-sol-com-tatuagem.html
│   ├── produtos-para-tatuagem.html
│   ├── quanto-tempo-dura-tatuagem.html
│   ├── quanto-tempo-tatuagem-cicatriza.html
│   ├── tatuagem-cicatrizacao-cuidados.html
│   ├── tatuagem-descascando-e-normal.html
│   ├── tatuagem-faz-mal.html
│   ├── tatuagem-inflamada.html
│   └── tipos-de-pele-tatuagem.html
│
└── assets/
    ├── inkure.css
    ├── inkure.js
    ├── logo.svg
    ├── favicon.svg
    └── icons/
        ├── amazon.svg
        ├── shopee.svg
        └── mercado-livre.svg
```

## Como funciona

- `index.html`, `404.html`, `robots.txt`, `sitemap.xml` e `vercel.json` ficam na raiz.
- As páginas internas ficam em `pages/`.
- O `vercel.json` entrega URLs limpas: `pages/como-cuidar-da-tatuagem.html` abre como `/como-cuidar-da-tatuagem`.
- O layout global agora é centralizado em `assets/inkure.js`.

## Componentes globais centralizados

O arquivo `assets/inkure.js` injeta automaticamente:

- header/nav
- menu mobile
- modal "Onde comprar"
- ícones Amazon/Shopee/Mercado Livre
- footer
- sticky CTA mobile

A partir de agora, para trocar links do menu, ícones do modal ou footer, edite apenas `assets/inkure.js`.

## Ícones externos

Os SVGs dos marketplaces ficam em:

```txt
/assets/icons/amazon.svg
/assets/icons/shopee.svg
/assets/icons/mercado-livre.svg
```

A logo do header e o favicon ficam em:

```txt
/assets/logo.svg
/assets/favicon.svg
```

## Importante

Os HTML foram limpos para não duplicar header, modal e footer. O conteúdo das páginas permanece preservado.

Antes do deploy, substitua a estrutura atual por este pacote completo.


## Ajuste mobile + footer premium

Esta versão ajusta as páginas de conteúdo para ficarem menos apertadas no mobile e substitui o footer simples por um footer global escuro, com colunas, links úteis e atalhos para marketplaces.

Arquivos principais alterados:
- `assets/inkure.css`
- `assets/inkure.js`

O HTML das páginas não precisa ser editado para estes ajustes.
