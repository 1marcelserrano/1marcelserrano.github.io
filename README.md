# MSCREATIVE.SYSTEMS™

> Creative Intelligence &amp; Branding

Repositório do site público da marca, publicado via **GitHub Pages** em
**https://1marcelserrano.github.io**.

---

## O que é isto

Este é o repositório `usuário.github.io` de [@1marcelserrano](https://github.com/1marcelserrano).
O GitHub Pages publica o conteúdo da raiz da branch de publicação diretamente em
`https://1marcelserrano.github.io` — ou seja, **o que está versionado aqui é o site
no ar**.

> **Estado atual (verificável):** a fundação (documentação, convenções, configuração)
> e o **esqueleto inicial do site** estão em pé. O scaffold é um ponto de partida —
> a identidade visual e o conteúdo devem ser refinados a partir daqui. Veja o roadmap
> em [`SETUP_STRATEGY.md`](./SETUP_STRATEGY.md).

## Mapa do repositório

```
.
├── index.html           ← página inicial (a porta do site)
├── assets/
│   ├── css/             ← estilos (style.css)
│   ├── js/              ← scripts (main.js)
│   └── img/             ← imagens e mídia
│
├── README.md            ← você está aqui: porta de entrada + mapa
├── CLAUDE.md            ← contexto para agentes de IA (propósito, como rodar, o que não commitar)
├── AGENTS.md            ← ponteiro para o CLAUDE.md
├── SETUP_STRATEGY.md    ← diagnóstico do repo + roadmap das fases
├── .gitignore           ← o que nunca entra no versionamento
├── .gitattributes       ← normalização de fim de linha + tratamento de binários
└── .github/             ← templates de PR e issues
```

## Como visualizar localmente

Site estático, sem build. Basta servir a raiz:

```bash
# Python 3 (já vem na maioria dos sistemas)
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Publicação

O deploy é **automático** pelo GitHub Pages a partir da branch de publicação
(`main`). Não há etapa de build. Para configurar (uma vez, manualmente):

`Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root)`

## Convenções

- **Nomes de arquivos:** `kebab-case` (ex.: `sobre-a-marca.html`, `logo-principal.svg`).
- **Commits:** mensagens em **inglês**, no formato imperativo curto
  (ex.: `Add hero section to landing page`). Documentação em **português**.
- **Branches:** trabalho em branches `feature/*` ou `claude/*`; nunca commit direto
  na `main` sem revisão.

## Licença

© MSCREATIVE.SYSTEMS™ / Marcel Serrano. **Todos os direitos reservados.**
Conteúdo proprietário — não licenciado para reuso.
