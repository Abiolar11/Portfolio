<h1 align="center">Umar Odulaja</h1>
<p align="center"><strong>Senior Data Scientist</strong> — turning ambiguous business problems into production AI that moves millions.</p>

<p align="center">
  8+ years across <strong>Financial Services · Defense · Consumer Tech</strong> &nbsp;•&nbsp; Active Secret Clearance &nbsp;•&nbsp; Dallas–Fort Worth, TX
</p>

<p align="center">
  <a href="mailto:odulaja1@gmail.com">Email</a> &nbsp;·&nbsp;
  <a href="https://linkedin.com/in/umarodulaja">LinkedIn</a> &nbsp;·&nbsp;
  <a href="https://github.com/Abiolar11">GitHub</a>
</p>

> **🟢 Open to new opportunities** — Senior Data Scientist / ML Engineer / GenAI roles. Let's talk.

---

## Who I am

Senior Data Scientist with **8 years** designing, deploying, and scaling end-to-end machine learning, generative AI, and cloud-native data solutions. I've shipped LLM-powered products at a global bank, built the data platforms behind a **$500M** defense program, and started my career solving hardware problems on the factory floor. The throughline: I make complex systems legible — and profitable — and I can explain any of it to an executive in the room.

## Impact at a glance

| Metric | Outcome |
| --- | --- |
| **$4M+** | Annual loss drivers surfaced from unstructured customer text data |
| **70%** | Faster analyst time-to-insight via a production LLM agent |
| **90%** | Reduction in batch ETL processing time on F-35 sustainment data |
| **35%** | Faster model deployment cycle time after instituting CI/CD standards |
| **Multi-billion $** | Loan & lease portfolio protected by fraud/anomaly detection models |

## What I do

- **Generative AI & LLMs** — production agents, multi-agent systems, RAG, prompt engineering, embeddings & vector search, fine-tuning, MCP
- **Machine Learning** — predictive risk & fraud models, deep learning, XGBoost, feature engineering, model validation & evaluation
- **Data & Cloud** — Snowflake, AWS (SageMaker, Bedrock, Lambda, Glue, S3), Alteryx, PostgreSQL, Oracle
- **MLOps** — Docker, Kubernetes, GitHub Actions, CI/CD, model deployment & monitoring
- **Storytelling** — Tableau, Power BI, Streamlit, Plotly, executive-ready insight delivery

## Selected experience

- **JPMorgan Chase** — Senior Data Scientist *(2024–Present)* · production LLM agents, GenAI analytics, fraud/risk ML
- **Lockheed Martin** — Senior Data Analyst *(2022–2024)* · F-35 data platforms, secure AWS, spend forecasting
- **Lockheed Martin** — Manufacturing / Aeronautical Engineer *(2018–2022)* · F-16 engineering & process improvement

## Credentials

**Education:** M.S. Systems Engineering, Southern Methodist University · B.S. Mechanical Engineering (Math minor), Baylor University
**Certifications:** AWS Certified AI Practitioner · DataCamp Certified Data Scientist · IBM Data Science Professional Certificate · Alteryx Designer Core · AI Fundamentals

---

## About this repository

This repo is my personal portfolio website — a fast, animated, fully responsive single-page site.

**Built with:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Anthropic Claude

### AI "Digital Twin" chat

A floating assistant (bottom-right) answers recruiter questions about my career in the first person, powered by **Claude Sonnet** with streaming responses. It's grounded in my résumé and declines to invent details.

- Server route: [`app/api/chat/route.ts`](app/api/chat/route.ts) · UI: [`components/DigitalTwin.tsx`](components/DigitalTwin.tsx)
- Requires an Anthropic API key in the environment as **`API_KEY`** (kept in `.env`, which is git-ignored). When deploying (e.g. Vercel), set `API_KEY` in the host's environment variables.

### Run locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3005**.

### Editing content

All copy lives in one place — [`lib/content.ts`](lib/content.ts). Update text, roles, projects, and links there; no component edits needed.

### Production build

```bash
npm run build && npm run start
```

---

<p align="center"><em>Have a problem worth solving? <a href="mailto:odulaja1@gmail.com">odulaja1@gmail.com</a></em></p>
