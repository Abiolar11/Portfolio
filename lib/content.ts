export const profile = {
  name: "Umar Odulaja",
  first: "Umar",
  last: "Odulaja",
  title: "Senior Data Scientist",
  tagline: "I turn ambiguous business problems into production AI that moves millions.",
  location: "Dallas–Fort Worth, TX",
  clearance: "Active Secret Clearance",
  email: "odulaja1@gmail.com",
  phone: "832-614-7308",
  linkedin: "https://linkedin.com/in/umarodulaja",
  github: "https://github.com/Abiolar11",
  resume: "/Umar-Odulaja-Resume.pdf",
  summary:
    "Senior Data Scientist with 8 years of experience designing, deploying, and scaling end-to-end machine learning, generative AI, and cloud-native data solutions across financial services, defense, and consumer technology. I architect LLM-powered products, predictive risk models, and production ETL pipelines that translate ambiguous business problems into measurable, multi-million-dollar outcomes — and I can explain any of it to an executive in the room. I hold an active Secret-level security clearance.",
};

export const stats = [
  { value: "8+", label: "Years building data & AI systems" },
  { value: "$4M+", label: "Annual loss drivers surfaced from text data" },
  { value: "70%", label: "Faster analyst time-to-insight via LLM agents" },
  { value: "90%", label: "Reduction in batch ETL processing time" },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  location?: string;
  tag: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "JPMorgan Chase",
    role: "Senior Data Scientist",
    period: "Sept 2024 — Present",
    tag: "Financial Services · GenAI",
    points: [
      "Built and deployed a production LLM-powered agent that lets business users query Chase Auto complaints data in natural language — backed by Markdown business context, Bitbucket retrieval for historical SQL, Claude Sonnet for reasoning, and secure Snowflake integration — accelerating analyst time-to-insight by 70% and cutting ad-hoc reporting volume by 40%.",
      "Engineered an internal multi-agent AI system that automates the team's Jira request workflow end-to-end, with specialized sub-agents that update Jira fields, generate change-request docs, push code to Bitbucket, and open pull requests — saving ~2 hours per request per team member.",
      "Developed NLP and LLM-driven analytics to classify and extract insights from unstructured auto-complaint data, improving taxonomy labeling accuracy by 60% and surfacing ~$4M in annual loss drivers that shaped a digital payments solution.",
      "Built ML models to detect high-risk account behavior, anomaly patterns, and potential fraud signals across a multi-billion-dollar auto loan and lease portfolio, improving proactive detection and reducing loss exposure.",
      "Delivered a scalable customer analytics product integrating multiple enterprise sources into executive-ready Tableau dashboards, and mentored 3 junior data scientists while instituting peer review, CI/CD checks, and deployment standards that cut model deployment cycle time by 35%.",
    ],
  },
  {
    company: "Lockheed Martin",
    role: "Senior Data Analyst",
    period: "May 2022 — Sept 2024",
    tag: "Defense · Data Platforms",
    points: [
      "Built and productionized a Python ETL pipeline automating ingestion, transformation, and delivery of F-35 sustainment data into Tableau — reducing batch-processing time by 90% while improving visibility into material shortages, cost drivers, and sustainment planning.",
      "Developed and maintained interactive Tableau dashboards for 150+ monthly users across F-35 production teams, cutting data response time by 50%.",
      "Designed a secure AWS-based relational data platform for 50+ daily users, using IAM access controls, encryption at rest, and CloudWatch monitoring to improve governance, reliability, and self-service access.",
      "Built a predictive forecasting model for quarterly and annual spend planning across a $500M F-35 sustainment budget, enabling leadership to forecast expenditures and flag budget risks.",
    ],
  },
  {
    company: "Lockheed Martin",
    role: "Manufacturing / Aeronautical Engineer",
    period: "April 2018 — May 2022",
    tag: "Aerospace Engineering",
    points: [
      "Resolved 50+ aircraft engineering issues across F-16 programs by analyzing engineering drawings and 3D CAD models to identify root causes, implement design changes, and release revised technical documentation.",
      "Partnered with engineering, manufacturing, and quality stakeholders to execute design changes, translating complex findings into clear recommendations for technical and non-technical audiences.",
      "Led cross-functional process-improvement projects using data-driven root-cause analysis and corrective action plans to improve manufacturing workflows and secure producibility funding.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    name: "AI Fitness Coach",
    blurb:
      "An AI fitness app powered by OpenAI GPT-5 that generates personalized workout plans from user goals, exercise history, and performance trends — with tracking, progression monitoring, and adaptive goal-based recommendations.",
    stack: ["OpenAI GPT-5", "Python", "Recommendation Engine"],
    accent: "from-emerald-400/20 to-teal-500/5",
  },
  {
    name: "Adaptive Scheduler",
    blurb:
      "An AI scheduling app that converts daily to-do lists into time-blocked schedules, with interactive timeline editing, completion tracking, and an online-learning engine that improves future schedules from historical behavior.",
    stack: ["LLMs", "Online Learning", "React"],
    accent: "from-violet-400/20 to-indigo-500/5",
  },
  {
    name: "Sonic Identity Curator",
    blurb:
      "An automated playlist-curation system using the Spotify API and Claude to discover, score, and add weekly releases that match a playlist's evolving sonic identity — a three-stage discovery pipeline on GitHub Actions for fully autonomous updates.",
    stack: ["Claude", "Spotify API", "GitHub Actions"],
    accent: "from-cyan-400/20 to-sky-500/5",
  },
  {
    name: "NBA Stat Predictor",
    blurb:
      "An XGBoost machine-learning pipeline that predicts NBA player statistics, applying advanced feature engineering and rigorous model evaluation to iteratively improve forecast accuracy.",
    stack: ["XGBoost", "Feature Engineering", "Python"],
    accent: "from-amber-400/20 to-orange-500/5",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL"] },
  {
    group: "Gen AI & LLMs",
    items: ["Claude", "OpenAI / ChatGPT", "RAG", "Agentic Workflows", "Prompt Engineering", "Embeddings", "Vector Databases", "Fine-Tuning", "MCP", "NLP Classification", "Text Analytics"],
  },
  {
    group: "ML & Deep Learning",
    items: ["Deep Learning", "Scikit-Learn", "MLflow", "XGBoost", "Predictive Modeling", "Feature Engineering", "Model Evaluation", "Model Validation"],
  },
  {
    group: "Data & Cloud",
    items: ["Snowflake", "Alteryx", "PostgreSQL", "Oracle", "AWS SageMaker", "AWS Bedrock", "Lambda", "Glue", "S3"],
  },
  {
    group: "MLOps & DevOps",
    items: ["Docker", "Kubernetes", "Git / GitHub Actions", "CI/CD", "Model Deployment & Monitoring"],
  },
  {
    group: "Statistics",
    items: ["A/B Testing", "Statistical Modeling", "Time Series Forecasting", "Anomaly Detection"],
  },
  {
    group: "Visualization & Storytelling",
    items: ["Tableau", "Power BI", "Streamlit", "Plotly"],
  },
];

export const certifications = [
  "AWS Certified AI Practitioner",
  "DataCamp Certified Data Scientist",
  "IBM Data Science Professional Certificate",
  "Alteryx Designer Core Certification",
  "AI Fundamentals",
];

export const languages = [
  { name: "English", level: "Native / Professional" },
  { name: "Yoruba", level: "Native / Bilingual" },
  { name: "Arabic", level: "Elementary" },
];

export const education = [
  {
    school: "Southern Methodist University",
    degree: "M.S. Systems Engineering",
    period: "2019 — 2022",
  },
  {
    school: "Baylor University",
    degree: "B.S. Mechanical Engineering, Minor in Mathematics",
    period: "2013 — 2017",
  },
];

export const marquee = [
  "Generative AI",
  "Multi-Agent Systems",
  "LLM Products",
  "Predictive Risk Models",
  "Production ETL",
  "Snowflake",
  "AWS",
  "MLOps",
  "Fraud Detection",
  "Executive Storytelling",
];
