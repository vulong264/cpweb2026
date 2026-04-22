export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  stack: string[];
  caseStudy?: { slug: string; label: string };
};

export const services: Service[] = [
  {
    id: "ai",
    title: "AI Development & Integration",
    short:
      "RAG pipelines, agent systems, and LLM-powered workflows that hit production — not slide decks.",
    description:
      "We design, build, and operate production AI systems. From retrieval pipelines to agent orchestration and fine-tuning, we handle evaluation, cost, latency, and hallucination budgets like any other SLO.",
    bullets: [
      "Retrieval-augmented generation (RAG) with eval harness + drift monitoring",
      "Agentic workflows: tool use, long-horizon planning, human-in-the-loop",
      "Model selection, distillation, and fine-tuning (OSS + frontier APIs)",
      "LLM observability: traces, evals, cost/latency dashboards",
    ],
    stack: [
      "AWS Bedrock",
      "SageMaker",
      "Anthropic Claude",
      "OpenAI",
      "LangGraph",
      "LlamaIndex",
      "Weights & Biases",
    ],
    caseStudy: { slug: "production-ai", label: "99.9% uptime production AI system" },
  },
  {
    id: "teams",
    title: "Embedded Engineering Teams",
    short:
      "Senior full-stack and platform engineers who integrate into your sprint — owning outcomes, not tickets.",
    description:
      "Staff-level engineers embedded in your codebase, on your standups, writing in your PR review style. We ship with your team; we don't throw work over a wall.",
    bullets: [
      "Cross-functional pods: full-stack, platform, ML, QA",
      "Time zone coverage across US, EU, and APAC",
      "Your repo, your workflow, your definition of done",
      "Transparent velocity + retention guarantees",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React Native",
      "Go",
      "Python",
      "Kotlin",
      "Postgres",
    ],
    caseStudy: { slug: "marketplace-gmv", label: "10× GMV growth for B2B marketplace" },
  },
  {
    id: "cloud",
    title: "Cloud-Native Delivery (AWS / GCP)",
    short:
      "AWS-native architectures built for scale, cost, and compliance — not lock-in for its own sake.",
    description:
      "As an AWS Advanced Tier Partner with Generative AI Competency, we architect, migrate, and operate workloads on AWS and GCP. Infrastructure as code, cost-aware by default.",
    bullets: [
      "Greenfield architecture: serverless, containers, event-driven",
      "Lift-and-reshape migrations with measurable TCO reduction",
      "Platform engineering: IaC, CI/CD, SRE, DX tooling",
      "SOC 2 / HIPAA / ISO-ready baselines",
    ],
    stack: [
      "AWS",
      "GCP",
      "Terraform",
      "Kubernetes",
      "ECS",
      "Lambda",
      "Datadog",
    ],
    caseStudy: { slug: "cloud-migration", label: "20× performance cloud migration" },
  },
  {
    id: "on-prem",
    title: "On-Premise AI Deployment",
    short:
      "Private LLM stacks for regulated industries — your weights, your VPC, your audit trail.",
    description:
      "For data that can't leave the building. We deploy open-weight models on-prem or in air-gapped VPCs with full evaluation, guardrails, and RAG over your private corpus.",
    bullets: [
      "Open-weight model deployment (Llama, Qwen, Mistral, DeepSeek)",
      "Air-gapped RAG over sensitive document corpora",
      "GPU capacity planning and inference optimization (vLLM, TensorRT-LLM)",
      "Role-based access, audit logs, and policy guardrails",
    ],
    stack: [
      "vLLM",
      "Triton",
      "NVIDIA GPUs",
      "Qdrant",
      "pgvector",
      "Kubernetes",
    ],
    caseStudy: { slug: "production-ai", label: "Production AI system" },
  },
];

export type CaseStudy = {
  slug: string;
  industry: string;
  metric: string;
  metricLabel: string;
  title: string;
  summary: string;
  challenge?: string;
  approach?: string[];
  stack?: string[];
  outcomes?: { metric: string; label: string }[];
  quote?: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "marketplace-gmv",
    industry: "Marketplace",
    metric: "10×",
    metricLabel: "GMV growth",
    title: "Rebuilding a B2B marketplace for 10× transaction volume",
    summary:
      "Replatformed a legacy PHP monolith into a TypeScript + Go microservices stack serving 2M+ monthly buyers across SEA.",
    challenge:
      "The incumbent platform couldn't clear Friday peak traffic. Checkout conversion dropped 38% during sales events, and the team was spending 60% of sprint capacity on incident response instead of features.",
    approach: [
      "Strangler-fig migration from PHP monolith to a services-oriented TypeScript + Go stack",
      "Event-driven order pipeline on AWS (EventBridge + SQS + DynamoDB) with idempotent handlers",
      "Embedded a 9-person pod covering platform, payments, and buyer experience",
      "Weekly shipping cadence with feature flags and staged rollouts",
    ],
    stack: ["Next.js", "Go", "PostgreSQL", "DynamoDB", "AWS EventBridge", "Terraform"],
    outcomes: [
      { metric: "10×", label: "GMV growth over 18 months" },
      { metric: "p95 < 300ms", label: "checkout latency at peak" },
      { metric: "99.98%", label: "order pipeline availability" },
    ],
    quote: {
      text: "CoderPush engineers don't feel like an agency. They review my PRs harder than my own staff do.",
      author: "A. Tran",
      role: "VP Engineering, Regional Marketplace",
    },
  },
  {
    slug: "production-ai",
    industry: "Enterprise AI",
    metric: "99.9%",
    metricLabel: "uptime",
    title: "A production AI assistant handling 4M queries/month",
    summary:
      "Built an agentic customer-support AI on AWS Bedrock with strict evaluation gates and on-call rotation — the first AI system at this enterprise to hit a real uptime SLO.",
    challenge:
      "Previous vendor delivered a demo that passed QA but failed in production within two weeks. Hallucinations, cost spikes, and no path to measure quality meant the system was pulled offline.",
    approach: [
      "Defined evaluation suite with human labels + LLM-as-judge, gated to CI",
      "Hybrid retrieval (BM25 + dense) with per-tenant knowledge isolation",
      "Guardrails and policy layer with runtime refusal auditing",
      "Cost and latency SLOs wired to PagerDuty — AI treated as a real system",
    ],
    stack: ["AWS Bedrock", "Anthropic Claude", "OpenSearch", "pgvector", "LangGraph", "Datadog"],
    outcomes: [
      { metric: "99.9%", label: "answer availability over 9 months" },
      { metric: "-62%", label: "per-resolution cost vs. human baseline" },
      { metric: "0.8%", label: "escalation rate (target: <2%)" },
    ],
    quote: {
      text: "We'd run three pilots before this. CoderPush shipped the first AI system that our on-call team trusted.",
      author: "M. Hughes",
      role: "Director of Platform, Fortune 500 Retail",
    },
  },
  {
    slug: "cloud-migration",
    industry: "FinTech",
    metric: "20×",
    metricLabel: "performance",
    title: "Migrating a Tier-1 FinTech workload to AWS",
    summary:
      "Replatformed a data-intensive pricing engine from on-prem VMs to a serverless AWS architecture. 20× faster, 48% cheaper.",
    challenge:
      "Month-end pricing runs took 14 hours on aging on-prem hardware and blocked downstream reporting. Auditors flagged the lack of reproducibility and change control.",
    approach: [
      "Rearchitected the pricing engine around AWS Step Functions + Lambda + Aurora",
      "Introduced IaC (Terraform) and GitOps with per-PR ephemeral environments",
      "Introduced parallelized batch execution with cost-aware concurrency controls",
      "SOC 2-ready audit trail and KMS-backed data encryption at every hop",
    ],
    stack: ["AWS Lambda", "Step Functions", "Aurora", "S3", "Terraform", "GitHub Actions"],
    outcomes: [
      { metric: "20×", label: "faster month-end pricing runs" },
      { metric: "-48%", label: "total cost of ownership" },
      { metric: "100%", label: "reproducible with IaC + CI" },
    ],
    quote: {
      text: "The audit team stopped flagging us. That alone paid for the engagement.",
      author: "S. Okafor",
      role: "CTO, Tier-1 FinTech",
    },
  },
  {
    slug: "healthtech-ehr",
    industry: "HealthTech",
    metric: "6 weeks",
    metricLabel: "to HIPAA-ready",
    title: "HIPAA-ready clinical data platform",
    summary:
      "Shipped a HIPAA-eligible clinical data platform on AWS with end-to-end encryption, audit logging, and FHIR interoperability.",
  },
  {
    slug: "edtech-personalization",
    industry: "EdTech",
    metric: "+41%",
    metricLabel: "completion rate",
    title: "Adaptive learning with on-device ML",
    summary:
      "Built an adaptive personalization engine with on-device inference for low-bandwidth regions — lifted course completion by 41%.",
  },
  {
    slug: "logistics-fleet",
    industry: "Logistics",
    metric: "2.3×",
    metricLabel: "dispatch throughput",
    title: "Real-time dispatch optimization",
    summary:
      "Rebuilt the dispatch engine with a streaming architecture and route optimization — 2.3× more deliveries per driver-hour.",
  },
  {
    slug: "saas-analytics",
    industry: "SaaS",
    metric: "p95 < 120ms",
    metricLabel: "query latency",
    title: "Query layer for multi-tenant analytics",
    summary:
      "Designed a new query layer for a multi-tenant analytics SaaS — sub-second dashboards at 10× the prior data volume.",
  },
];

export const testimonials = [
  {
    quote:
      "CoderPush engineers don't feel like an agency. They review my PRs harder than my own staff do, and they ship on Fridays.",
    author: "A. Tran",
    role: "VP Engineering, Regional Marketplace",
  },
  {
    quote:
      "We'd run three pilots before this. CoderPush shipped the first AI system that our on-call team actually trusted in production.",
    author: "M. Hughes",
    role: "Director of Platform, Fortune 500 Retail",
  },
];

export const clientLogos = [
  "Northbeam",
  "Quorix",
  "Lumen Retail",
  "Harbor FinTech",
  "Meridian Health",
  "Kinetic Logistics",
];
