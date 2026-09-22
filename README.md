# Inkure — Tattoo Skincare Platform

Plataforma Web desenvolvida para a **Inkure**, conceito de tattoo skincare criado para organizar os cuidados com a pele tatuada em diferentes etapas.

O projeto combina **desenvolvimento front-end, arquitetura de conteúdo, componentes reutilizáveis, Quality Assurance, SEO técnico, dados estruturados e deploy via Vercel**.

🌐 **Produção:** https://inkure.com.br

---

## 🎯 Sobre o projeto

A Inkure foi concebida como uma plataforma digital para uma marca de cuidados especializados com pele tatuada.

O produto digital reúne:

- apresentação institucional da marca;
- sistema de cuidados dividido em etapas;
- apresentação de produtos;
- conteúdo educacional;
- páginas especializadas sobre cuidados com tatuagens;
- direcionamento para canais de compra;
- experiência responsiva;
- arquitetura preparada para SEO.

Além da landing page principal, o projeto possui uma estrutura de páginas de conteúdo voltadas a diferentes dúvidas e etapas relacionadas aos cuidados com tatuagens.

---

## 👨‍💻 Minha atuação

Minha atuação no projeto envolve produto, estrutura, desenvolvimento, validação e evolução da plataforma.

Entre as principais atividades:

- definição e organização da estrutura do produto digital;
- desenvolvimento com HTML, CSS e JavaScript;
- desenvolvimento assistido por IA;
- estruturação da arquitetura de páginas;
- centralização de componentes compartilhados;
- organização e evolução do design system;
- implementação de páginas de conteúdo;
- validação funcional;
- validação responsiva;
- testes exploratórios;
- testes de regressão após alterações globais;
- identificação e correção de inconsistências;
- execução de retestes;
- implementação de SEO técnico;
- implementação de dados estruturados;
- configuração de URLs, redirects e rewrites;
- configuração de cache e headers HTTP;
- versionamento com Git/GitHub;
- configuração e publicação utilizando Vercel.

---

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura Web estática com separação entre conteúdo, apresentação e comportamento.

```text
inkure-site/
│
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

A separação permite manter a raiz do projeto organizada enquanto páginas de conteúdo permanecem agrupadas em `pages/` e recursos compartilhados em `assets/`.

---

## ♻️ Componentes globais

Um dos principais pontos da arquitetura é a centralização de elementos compartilhados em:

```text
assets/inkure.js
```

O JavaScript global é responsável por componentes utilizados em diferentes páginas, incluindo:

- header;
- navegação;
- menu mobile;
- modal "Onde comprar";
- links e ícones de marketplaces;
- footer;
- sticky CTA mobile.

Essa abordagem reduz duplicação de código e permite que alterações em componentes globais sejam realizadas em um único ponto.

---

## 🎨 Estilos compartilhados

O design global está concentrado em:

```text
assets/inkure.css
```

O arquivo reúne elementos como:

- reset;
- variáveis globais;
- tipografia;
- navegação;
- botões;
- cards;
- layouts;
- páginas de conteúdo;
- componentes responsivos;
- estados de interação.

A centralização facilita manutenção e consistência visual entre a home e as páginas internas.

---

## 🧪 Quality Assurance

A arquitetura compartilhada torna a validação especialmente importante.

Uma alteração em `inkure.js` ou `inkure.css`, por exemplo, pode afetar simultaneamente diversas páginas da plataforma.

Por isso, o processo de evolução considera testes funcionais, exploratórios, responsivos e de regressão.

### Testes funcionais

São validados elementos como:

- navegação;
- menu mobile;
- header;
- footer;
- CTAs;
- modal de compra;
- links;
- páginas internas;
- componentes compartilhados;
- direcionamento para canais externos.

### Testes exploratórios

O produto é explorado para identificar:

- comportamentos inesperados;
- inconsistências visuais;
- problemas de navegação;
- links incorretos;
- problemas introduzidos por alterações globais;
- diferenças de comportamento entre páginas.

### Testes responsivos

A interface é validada em diferentes tamanhos de tela, considerando:

- navegação;
- tipografia;
- cards;
- CTAs;
- conteúdo;
- menu mobile;
- sticky CTA;
- páginas de artigos;
- componentes compartilhados.

### Testes de regressão

Como diferentes páginas compartilham CSS e JavaScript, alterações nesses arquivos exigem nova validação dos principais fluxos.

O processo pode ser representado como:

```text
Requisito / melhoria
        ↓
Implementação
        ↓
Validação
        ↓
Identificação de inconsistências
        ↓
Correção
        ↓
Reteste
        ↓
Regressão
        ↓
Deploy
```

---

## 📋 Matriz de validação

| Área | Principais validações |
| --- | --- |
| Funcional | Navegação, componentes, CTAs, modal e links |
| Exploratória | Comportamentos inesperados e inconsistências |
| Responsividade | Desktop, tablet e mobile |
| Regressão | Impactos de alterações em CSS e JavaScript globais |
| Conteúdo | Páginas internas e navegação entre conteúdos |
| SEO | Metadata, canonical, sitemap, robots e structured data |
| URLs | Clean URLs, redirects e rewrites |
| Deploy | Comportamento após publicação |

---

## 🛠️ Tecnologias

### Front-end

- HTML5
- CSS3
- JavaScript

### Versionamento e deploy

- Git
- GitHub
- Vercel

### SEO e estrutura Web

- Schema.org
- JSON-LD
- Open Graph
- Sitemap XML
- Robots.txt
- Canonical URLs
- Clean URLs

---

## 🔎 SEO técnico

SEO faz parte da arquitetura da plataforma.

O projeto utiliza recursos como:

- títulos e meta descriptions;
- canonical URLs;
- Open Graph;
- `sitemap.xml`;
- `robots.txt`;
- dados estruturados;
- páginas de conteúdo com URLs amigáveis;
- arquitetura de informação orientada a temas específicos.

A estrutura de conteúdo permite que diferentes dúvidas relacionadas a tatuagens sejam tratadas em páginas independentes.

---

## 🧩 Dados estruturados

A aplicação utiliza **Schema.org / JSON-LD**.

Na página principal estão presentes estruturas relacionadas à organização, website e linha de produtos.

A implementação ajuda mecanismos de busca a interpretar semanticamente informações relacionadas à marca e ao conteúdo da plataforma.

---

## 📚 Arquitetura de conteúdo

Além da apresentação comercial, o projeto possui uma base de conteúdo educacional.

Entre os temas presentes estão:

- cuidados após tatuar;
- cicatrização;
- hidratação;
- exposição solar;
- manutenção da tatuagem;
- comportamento da tatuagem na pele;
- produtos para cuidados;
- alterações comuns durante a cicatrização.

Cada tema pode ser acessado através de uma página específica.

Essa arquitetura separa o conteúdo da landing page principal e permite a evolução independente da área educacional.

---

## 🌐 Clean URLs

Embora as páginas internas estejam fisicamente armazenadas em:

```text
/pages/
```

a configuração da Vercel permite apresentar URLs mais simples para o usuário.

Por exemplo:

```text
/pages/como-cuidar-da-tatuagem.html
```

pode ser acessada como:

```text
/como-cuidar-da-tatuagem
```

Isso mantém a organização interna do repositório sem expor essa estrutura na URL pública.

---

## 🔀 Redirects e rewrites

O arquivo:

```text
vercel.json
```

centraliza diferentes regras relacionadas ao comportamento das rotas.

O projeto utiliza redirects e rewrites para situações como:

- remoção de `.html` das URLs;
- redirecionamento de `/index.html` para `/`;
- tratamento de páginas internas;
- manutenção de URLs amigáveis;
- entrega dos arquivos corretos sem alterar a URL apresentada ao usuário.

Essa separação permite manter uma estrutura estática simples com uma experiência de navegação mais limpa.

---

## 🔐 Headers de segurança

A configuração de deploy inclui headers HTTP como:

```text
X-Content-Type-Options
X-Frame-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
```

Essas configurações adicionam políticas relacionadas a interpretação de conteúdo, framing, referrer, permissões do navegador e transporte seguro.

---

## ⚡ Cache e entrega de conteúdo

O projeto possui diferentes políticas de cache configuradas através da Vercel.

Existem regras específicas para recursos como:

- assets;
- imagens;
- HTML;
- sitemap;
- robots.txt.

Essa configuração permite tratar diferentes tipos de conteúdo de acordo com suas características de atualização.

---

## 🛍️ Integração com marketplaces

A interface possui componentes preparados para direcionamento a canais externos de compra.

Entre os marketplaces representados no projeto estão:

- Amazon;
- Shopee;
- Mercado Livre.

Os ícones utilizados pela interface ficam organizados em:

```text
assets/icons/
```

e são reutilizados pelos componentes globais.

---

## 📱 Experiência mobile

A experiência mobile faz parte da arquitetura do projeto.

Entre os componentes específicos ou especialmente relevantes para dispositivos móveis estão:

- menu responsivo;
- navegação adaptada;
- sticky CTA;
- cards responsivos;
- páginas de conteúdo;
- modal de compra.

O comportamento desses elementos é considerado durante as validações de interface.

---

## 🚀 Deploy

A plataforma utiliza **Vercel** para publicação.

O fluxo de evolução pode ser representado de forma simplificada como:

```text
Desenvolvimento
      ↓
Git
      ↓
GitHub
      ↓
Vercel
      ↓
Produção
      ↓
Validação
```

A configuração do deploy também concentra regras de URLs, cache, headers, redirects e rewrites.

---

## 🤖 Desenvolvimento assistido por IA

Ferramentas de Inteligência Artificial foram utilizadas como apoio em diferentes etapas do desenvolvimento.

A abordagem inclui apoio em atividades como:

- prototipação;
- geração assistida de código;
- engenharia de prompts;
- revisão;
- refatoração;
- documentação;
- organização da arquitetura;
- sugestões de interface;
- identificação de inconsistências;
- apoio à resolução de problemas.

As implementações são revisadas e validadas antes de serem consolidadas no projeto.

O uso de componentes globais também reforça a importância de testes de regressão: uma alteração assistida por IA em um recurso compartilhado pode impactar diversas páginas simultaneamente.

---

## 💡 O que este projeto demonstra

Este projeto representa a aplicação prática de conhecimentos em desenvolvimento Web, arquitetura, qualidade e evolução de produto digital.

Ele demonstra conhecimentos e experiência relacionados a:

- análise e organização de requisitos;
- desenvolvimento front-end;
- HTML, CSS e JavaScript;
- arquitetura de páginas;
- componentes reutilizáveis;
- redução de duplicação;
- Quality Assurance;
- testes funcionais;
- testes exploratórios;
- testes responsivos;
- testes de regressão;
- identificação e correção de inconsistências;
- Git e GitHub;
- deploy com Vercel;
- SEO técnico;
- structured data;
- redirects e rewrites;
- headers HTTP;
- políticas de cache;
- desenvolvimento assistido por IA.

---

## 🔄 Próximas evoluções

O projeto também pode ser utilizado como ambiente para expansão de práticas de engenharia de qualidade.

Entre as possíveis evoluções estão:

- automação de testes E2E;
- automação dos principais fluxos de navegação;
- validação automatizada de links;
- testes automatizados do menu e modal;
- testes de regressão automatizados;
- validações de acessibilidade;
- otimizações adicionais de performance;
- integração dos testes ao CI/CD;
- monitoramento automatizado de páginas.

---

## 📚 Contexto do projeto

A Inkure foi desenvolvida como um projeto de produto digital que integra **marca, produto, conteúdo, tecnologia e qualidade**.

Para meu portfólio profissional, o projeto demonstra especialmente a capacidade de trabalhar com uma aplicação multipágina, componentes compartilhados, organização arquitetural e validação de alterações com potencial de impacto global.

---

## 👤 Autor

**Shelldon Linhares**

QA Analyst | QA Engineer

- LinkedIn: https://linkedin.com/in/shelldon
- GitHub: https://github.com/shelldon-x

---

> Este repositório faz parte do meu portfólio profissional e documenta a construção e evolução de uma plataforma Web com arquitetura compartilhada, Quality Assurance, SEO técnico e deploy via Vercel.
