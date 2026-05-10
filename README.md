# Cloud Resume

Portfolio site for **Deonarayan**, Cloud DevOps Engineer — built with React, Vite, and TypeScript. Delivered via Azure DevOps pipelines to Vercel.

## Live site

Deploy preview on PRs; production on `main` after approval.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run lint
npm run build
npm run preview
```

## Azure DevOps setup

1. Import this repository into Azure DevOps.
2. Create pipeline from `.azuredevops/azure-pipelines.yml`.
3. Add pipeline variables (Library → Variable groups):
   - `VERCEL_TOKEN` — Vercel deploy token (mark secret)
   - `VERCEL_ORG_ID` — from `.vercel/project.json` after `vercel link`
   - `VERCEL_PROJECT_ID` — from `.vercel/project.json`
4. Create **production** environment with approval check for `DeployProduction` stage.

## Vercel setup

```bash
npm i -g vercel
vercel login
vercel link
```

`vercel.json` configures SPA rewrites and Vite build output.

## Pipeline behavior

| Trigger | Stages |
|---------|--------|
| PR | CI → Vercel preview deploy |
| `main` | CI → Vercel production (with approval) |

## Project structure

```
src/
  components/   Hero, Skills, Experience, Projects, Contact
  content/      profile.ts — resume data
```

## No secrets in Git

Store `VERCEL_TOKEN` only in Azure DevOps secret variables.
