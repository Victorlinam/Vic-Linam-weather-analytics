# Vic-Linam Weather Analytics

A production-inspired, full-stack weather analytics platform demo built as a monorepo with a modern frontend, API backend, and AI microservice.

<a href="https://victorlinam.github.io/Vic-Linam-weather-analytics/">
  <img src="/images/app-image.png" width="100%" />
</a>

---

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Features](#features)
- [Local Development](#local-development)
- [Environment Variables](#environment-variables)
- [Build & CI](#build--ci)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Security Notes](#security-notes)
- [Roadmap](#roadmap)
- [License](#license)

## Overview
Vic-Linam Weather Analytics demonstrates enterprise dashboard patterns for weather intelligence: KPI cards, forecast pulse visualizations, AI summary workflows, and deployment automation.

## Architecture
- **Frontend** (`apps/frontend`): Next.js 15, TypeScript, Tailwind, Framer Motion.
- **Backend** (`apps/backend`): NestJS API with Swagger, validation, and modular domain structure.
- **AI Service** (`apps/ai-service`): FastAPI service for trend prediction and anomaly detection.
- **Data Layer**: PostgreSQL schema via Prisma and Redis-ready integration points.
- **Infra**: Docker Compose topology with Nginx reverse proxy and GitHub Actions pipelines.

## Tech Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
- NestJS, Node.js, class-validator, Swagger
- FastAPI, NumPy, pandas/scikit-learn dependency base
- PostgreSQL + Prisma
- Redis + BullMQ-ready layout
- Docker, Docker Compose, GitHub Actions

## Repository Structure

```bash
Vic-Linam-weather-analytics/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-pages.yml
├── .gitignore
├── .gitkeep
├── .env.example
├── LICENSE
├── README.md
├── apps/
│   ├── ai-service/
│   │   ├── Dockerfile
│   │   ├── app/
│   │   │   └── main.py
│   │   └── requirements.txt
│   ├── backend/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── app.module.ts
│   │   │   ├── main.ts
│   │   │   └── modules/
│   │   │       ├── admin/
│   │   │       │   ├── admin.controller.ts
│   │   │       │   └── admin.module.ts
│   │   │       ├── analytics/
│   │   │       │   ├── analytics.controller.ts
│   │   │       │   └── analytics.module.ts
│   │   │       ├── auth/
│   │   │       │   ├── auth.controller.ts
│   │   │       │   ├── auth.module.ts
│   │   │       │   └── auth.service.ts
│   │   │       └── weather/
│   │   │           ├── weather.controller.ts
│   │   │           └── weather.module.ts
│   │   └── tsconfig.json
│   └── frontend/
│       ├── Dockerfile
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.js
│       ├── src/
│       │   ├── app/
│       │   │   ├── admin/
│       │   │   │   └── page.tsx
│       │   │   ├── ai-insights/
│       │   │   │   └── page.tsx
│       │   │   ├── api-monitoring/
│       │   │   │   └── page.tsx
│       │   │   ├── dashboard/
│       │   │   │   └── page.tsx
│       │   │   ├── forecast/
│       │   │   │   └── page.tsx
│       │   │   ├── globals.css
│       │   │   ├── historical/
│       │   │   │   └── page.tsx
│       │   │   ├── layout.tsx
│       │   │   ├── login/
│       │   │   │   └── page.tsx
│       │   │   ├── map/
│       │   │   │   └── page.tsx
│       │   │   ├── overview/
│       │   │   │   └── page.tsx
│       │   │   ├── page.tsx
│       │   │   ├── register/
│       │   │   │   └── page.tsx
│       │   │   └── settings/
│       │   │       └── page.tsx
│       │   └── components/
│       │       └── page-shell.tsx
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── docker-compose.yml
├── docs/
│   ├── api.md
│   └── architecture.md
├── images/
│   └── app-image.png
├── nginx/
│   └── default.conf
├── package.json
├── prisma/
│   └── schema.prisma
└── scripts/
    └── seed.ts
```


## Features
- Interactive animated KPI dashboard with live Forecast Pulse transitions.
- Dark/light mode toggle with contrast-safe color tokens.
- Modular backend endpoints (`auth`, `weather`, `analytics`, `admin`).
- AI endpoints: trend prediction and anomaly detection.
- Static export-compatible frontend for GitHub Pages.

## Local Development
```bash
cp .env.example .env
npm install
npm run setup
npm run dev
```

### Run frontend only
```bash
npm --workspace apps/frontend run dev
```

### Build frontend static export
```bash
npm --workspace apps/frontend run build
```

## Environment Variables
Copy `.env.example` to `.env` and configure:
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`, `JWT_REFRESH_SECRET`
- Provider keys (`OPENWEATHER_API_KEY`, `WEATHERAPI_KEY`, `TOMORROW_API_KEY`)
- `NEXT_PUBLIC_API_BASE_URL`, `AI_SERVICE_URL`

## Build & CI
- CI workflow: `.github/workflows/ci.yml`
- Pages workflow: `.github/workflows/deploy-pages.yml`

CI validates frontend/backend builds on push and pull_request.

## GitHub Pages Deployment
1. Push to `main`.
2. In GitHub repository settings, go to **Pages** and set **Source** to **GitHub Actions**.
3. The `deploy-pages.yml` workflow builds `apps/frontend` and publishes `apps/frontend/out`.
4. Final URL pattern:
   `https://<your-github-username>.github.io/Vic-Linam-weather-analytics/`

## Security Notes
This demo includes baseline hardening (Helmet, CORS enablement, global validation pipe) and should be extended before production.

## Roadmap
- Add provider adapters + fallback orchestration.
- Add authentication persistence and RBAC guards.
- Add charting with live APIs and WebSocket streams.
- Add test suites (unit/integration/e2e).

## License
Licensed under the MIT License. See [LICENSE](./LICENSE).
