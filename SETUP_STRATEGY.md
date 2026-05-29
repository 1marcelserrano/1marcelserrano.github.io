# SETUP_STRATEGY.md — Diagnóstico e roadmap

Documento de registro da auditoria e organização estratégica do repositório.

---

## 1. Levantamento (verificável)

Realizado em **2026-05-29** sobre o estado do repositório na branch
`claude/repo-organization-CGscm`.

| Item | Estado |
|---|---|
| Histórico | **1 commit** (`91bedb2 Initial commit`) |
| 1º commit (data real, `git log --reverse`) | **2026-04-08**, autor `1marcelserrano` |
| Conteúdo versionado | **apenas `README.md`** (2 linhas) |
| Tamanho | ~8 KB de conteúdo; ~236 KB de `.git` |
| Pastas | nenhuma (tudo na raiz) |
| Fundação presente | só `README.md` |
| Fundação ausente | `LICENSE`, `.gitignore`, `.gitattributes`, `CLAUDE.md`/`AGENTS.md`, `.github/`, CI |
| Binários / mídia / artefatos | **nenhum** |
| Build / test / run | **inexistente** (sem manifest, lockfile ou script) |

## 2. Diagnóstico

**Tensão central:** *o nome do repositório promete um produto que o conteúdo ainda
não entrega.*

`1marcelserrano.github.io` é um repositório **GitHub Pages de usuário** — publica
automaticamente em `https://1marcelserrano.github.io`. O README declara a marca
**MSCREATIVE.SYSTEMS™**, mas **não existe site** (sem `index.html`, sem gerador).
O repositório, hoje, não publica nada útil.

Como o repo é efetivamente **greenfield** (sem legado, histórico relevante, mídia
pesada ou artefatos), **não há taxonomia a reorganizar nem higiene de git a
corrigir**. O valor está em estabelecer fundação sólida e, depois, montar o site.

## 3. Decisões do dono

- **Propósito:** site/landing da marca (inferido do nome `*.github.io` + README).
- **Stack:** HTML/CSS/JS estático — sem build, controle total de design
  (recomendação aceita; delegada ao agente).
- **Idioma:** documentação em **português**; mensagens de commit em **inglês**.
- **Licença:** **sem licença** — conteúdo proprietário, todos os direitos reservados.

## 4. Roadmap em fases

### Fase 0 — Fundação ✅ (não-destrutiva)
README como porta de entrada, `CLAUDE.md` + `AGENTS.md`, `.gitignore`,
`.gitattributes`, `.github/` (PR + issue templates), este `SETUP_STRATEGY.md`.
Sem `LICENSE` (decisão do dono). **Um commit semântico.**

### Fase 1 — Taxonomia / scaffold do site ⏳ (aguarda OK)
Criar o esqueleto durável: `index.html` + `assets/{css,js,img}/`. Estrutura que
separa o ativo durável (conteúdo do site) de eventuais arquivos de processo.

### Fase 2 — Convenções ⏳
Já documentadas no `CLAUDE.md` e no `README.md` (kebab-case, padrão de commit,
fluxo de PR). Frontmatter/metadados entram caso o site adote conteúdo estruturado.

### Fase 3 — Higiene de git ⏳
**Nada a executar hoje:** não há artefatos efêmeros, mídia pesada ou histórico a
limpar. O `.gitignore` já é preventivo. Reavaliar quando houver mídia (considerar
otimização web; Git LFS só se surgirem binários grandes — testar suporte do
ambiente antes de migrar pointers).

## 5. Ação manual do dono (fora do sandbox)

1. **Ativar o GitHub Pages:** `Settings → Pages → Source: Deploy from a branch →
   Branch: `main` / `(root)``. (Necessário uma vez para o site ir ao ar.)
2. **Domínio custom** (opcional): se houver domínio próprio da marca, configurar em
   `Settings → Pages → Custom domain` e adicionar um arquivo `CNAME` na raiz.
