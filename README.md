# Inkure — pacote SEO final

Este pacote consolida a home, o cluster de 18 páginas sobre tattoo care, os assets compartilhados e os arquivos técnicos essenciais para deploy na Vercel.

## Estrutura recomendada

Todos os HTML ficam na raiz do projeto:

```txt
/
├── index.html
├── 404.html
├── guia-tatuagem-completo.html
├── como-cuidar-da-tatuagem.html
├── como-hidratar-a-tatuagem.html
├── como-tatuagem-funciona-na-pele.html
├── manter-tatuagem-bonita.html
├── melhor-creme-para-tatuagem.html
├── o-que-nao-pode-fazer-depois-de-tatuar.html
├── o-que-passar-na-tatuagem.html
├── pode-molhar-tatuagem.html
├── pode-pegar-sol-com-tatuagem.html
├── produtos-para-tatuagem.html
├── quanto-tempo-dura-tatuagem.html
├── quanto-tempo-tatuagem-cicatriza.html
├── tatuagem-cicatrizacao-cuidados.html
├── tatuagem-descascando-e-normal.html
├── tatuagem-faz-mal.html
├── tatuagem-inflamada.html
├── tipos-de-pele-tatuagem.html
├── robots.txt
├── sitemap.xml
├── vercel.json
└── assets/
    ├── inkure.css
    └── inkure.js
```

Com `cleanUrls: true`, a Vercel publica `guia-tatuagem-completo.html` como `/guia-tatuagem-completo`.

## Sitemaps

Use apenas `sitemap.xml` como sitemap principal. O arquivo antigo `sitemap-conteudo-tatuagem.xml` foi consolidado e deve ser removido do repositório. O `vercel.json` redireciona `/sitemap-conteudo-tatuagem.xml` para `/sitemap.xml` por segurança.

## Robots

O `robots.txt` está aberto para indexação e aponta somente para:

```txt
Sitemap: https://inkure.com.br/sitemap.xml
```

Não bloqueie CSS, JS ou imagens. O Google precisa acessar esses recursos para renderizar e avaliar a experiência da página.

## Checklist pós-deploy

1. Substitua os arquivos antigos pelos arquivos deste pacote.
2. Remova `sitemap-conteudo-tatuagem.xml` do repositório, se existir.
3. Faça deploy.
4. Teste:
   - `https://inkure.com.br/sitemap.xml`
   - `https://inkure.com.br/robots.txt`
   - `https://inkure.com.br/guia-tatuagem-completo`
   - `https://inkure.com.br/como-cuidar-da-tatuagem`
5. No Google Search Console, envie apenas `https://inkure.com.br/sitemap.xml`.
6. Solicite indexação da home, da página pilar e de 3 a 5 páginas principais.

## Páginas mais importantes para solicitar indexação primeiro

1. `/`
2. `/guia-tatuagem-completo`
3. `/como-cuidar-da-tatuagem`
4. `/produtos-para-tatuagem`
5. `/melhor-creme-para-tatuagem`
6. `/tatuagem-cicatrizacao-cuidados`
7. `/pode-pegar-sol-com-tatuagem`

## Observação

O cluster foi organizado com URLs curtas na raiz, página pilar e interlinking. Isso favorece clareza semântica, distribuição de autoridade interna e rastreamento mais simples.
