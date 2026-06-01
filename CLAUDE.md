# CLAUDE.md — Contexto para agentes de IA

Este arquivo orienta agentes de IA (Claude e outros) que trabalham neste repositório.
Leia antes de propor ou executar qualquer mudança.

## Propósito do repositório

Repositório `usuário.github.io` de **GitHub Pages**: publica o site público da marca
**MSCREATIVE.SYSTEMS™ — Creative Intelligence & Branding** em
`https://1marcelserrano.github.io`. O que está versionado na branch de publicação
(`main`) **é o site no ar**.

## Stack

- **Site estático**: HTML + CSS + JavaScript puro. **Sem build, sem framework, sem
  toolchain.** Essa simplicidade é deliberada (controle total do design, zero
  manutenção de build).
- Deploy automático via GitHub Pages a partir da `main` (raiz).

> Se houver proposta de adotar um gerador (Jekyll, Astro etc.), **pare e pergunte ao
> dono** — é uma mudança de arquitetura, não uma decisão de implementação.

## Como rodar / visualizar

```bash
python3 -m http.server 8000   # serve a raiz em http://localhost:8000
```

Não há testes automatizados nem etapa de build. Verificação = abrir no navegador.

## Como contribuir (fluxo)

1. Nunca commite direto na `main`. Use uma branch (`feature/*` ou `claude/*`).
2. Um commit semântico por unidade lógica de mudança.
3. **Mensagens de commit em inglês**, imperativas e curtas
   (`Add contact form`, `Fix mobile nav overflow`).
4. **Documentação em português.**
5. Abra Pull Request (use o template em `.github/`). PRs grandes ou estruturais
   começam como **draft**.

## Convenções

- Arquivos novos em **`kebab-case`**.
- Imagens otimizadas antes do commit; preferir `.svg` para logos/ícones e
  `.webp`/`.avif` para fotos quando possível.
- Mídia durável vai em `assets/img/`. Não despeje binários soltos na raiz.

## O que NÃO commitar

- Segredos, tokens, chaves de API, `.env`.
- Lixo de SO/editor: `.DS_Store`, `Thumbs.db`, `.vscode/`, `.idea/`.
- Artefatos de build, `node_modules/`, dumps, zips, arquivos temporários.
- Mídia pesada bruta (originais gigantes) — versione a versão otimizada para web.

(O `.gitignore` já cobre os casos comuns; mantenha-o atualizado.)

## Regras invioláveis

- **Preserve histórico**: mova arquivos com `git mv`, nunca delete-e-recrie.
- **Não invente dados** (datas, status). Datas reais vêm de
  `git log --diff-filter=A`. Quando não for verificável, diga "não verificável".
- **Confirme antes de qualquer passo destrutivo**: reescrever histórico,
  force-push, deletar arquivos. Aprovação numa fase não vale para a próxima.
- Reporte falhas com honestidade — o que falhou, por quê, e a alternativa.
