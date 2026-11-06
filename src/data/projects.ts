export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  number: string;
  short: string;
  description: string;
  image: string;
  accent: string;
  concept: string;
  approach: string;
  capabilities: string[];
  system: string[];
  layout: "wide" | "tall" | "square";
};

export const projects: Project[] = [
  {
    slug: "autonomous-operations",
    title: "Autonomous Operations",
    category: "AI Agents",
    year: "2026",
    number: "01",
    short: "A coordinated environment for agents that move work forward.",
    description: "A multi-agent operations environment that receives an objective, plans the work, calls connected tools and validates outcomes before handing control back to a person.",
    image: "/work/autonomous-operations.svg",
    accent: "#72d9c2",
    layout: "wide",
    concept: "A system where specialised agents collaborate around a shared objective, with every action observable and every hand-off accountable.",
    approach: "A central orchestration layer delegates bounded tasks to specialist agents. Human review remains available at consequential decision points.",
    capabilities: ["Multi-agent orchestration", "Tool use and task routing", "Human approval gates", "Execution trace and reporting"],
    system: ["Instruction intake", "Planning agent", "Specialist agents", "Tool execution", "Validation layer", "Outcome report"]
  },
  {
    slug: "document-intelligence",
    title: "Document Intelligence",
    category: "Document Intelligence",
    year: "2026",
    number: "02",
    short: "Unstructured information, made usable.",
    description: "An intelligent document environment for extracting, classifying, validating and connecting information across complex files.",
    image: "/work/document-intelligence.svg",
    accent: "#f2a36f",
    layout: "tall",
    concept: "Transform high-volume documents into structured, searchable knowledge without losing source context or traceability.",
    approach: "A staged pipeline combines OCR, extraction, classification, retrieval and human verification, with confidence indicators at each step.",
    capabilities: ["Document extraction", "Classification and validation", "Semantic search", "Source-linked summaries"],
    system: ["Ingestion", "OCR and parsing", "Entity extraction", "Classification", "Review queue", "Knowledge index"]
  },
  {
    slug: "flowos",
    title: "FlowOS",
    category: "Process Automation",
    year: "2026",
    number: "03",
    short: "A living map of connected processes.",
    description: "A visual workflow environment for designing, monitoring and improving multi-stage processes with triggers, decisions, approvals and exception paths.",
    image: "/work/flowos.svg",
    accent: "#69d9b6",
    layout: "wide",
    concept: "Make complex processes legible: from the first trigger to the final hand-off, with status, ownership and exceptions visible.",
    approach: "Composable workflow blocks connect events, decisions, actions and approvals. Exception paths remain visible instead of disappearing into the background.",
    capabilities: ["Visual workflow design", "Event-based triggers", "Conditional routing", "Exception handling"],
    system: ["Trigger", "Enrich", "Decision", "Action", "Approval", "Complete"]
  },
  {
    slug: "intelligence-grid",
    title: "Intelligence Grid",
    category: "AI Systems",
    year: "2026",
    number: "04",
    short: "Signals arranged into a clearer picture.",
    description: "A decision-support interface that brings operational signals, emerging patterns and contextual analysis into one intelligent view.",
    image: "/work/intelligence-grid.svg",
    accent: "#a99bff",
    layout: "square",
    concept: "Turn fragmented data into a coherent picture that supports better questions and more informed decisions.",
    approach: "A modular intelligence layer combines data ingestion, anomaly detection, contextual analysis and explainable recommendations.",
    capabilities: ["Signal monitoring", "Pattern recognition", "Anomaly detection", "Decision support"],
    system: ["Data sources", "Signal layer", "Analysis engine", "Insight stream", "Decision workspace"]
  },
  {
    slug: "agent-network",
    title: "Agent Network",
    category: "AI Agents",
    year: "2026",
    number: "05",
    short: "Specialists working as one system.",
    description: "A multi-agent coordination model for routing work between focused agents, connected tools and review checkpoints.",
    image: "/work/agent-network.svg",
    accent: "#d89aff",
    layout: "tall",
    concept: "A network of specialised agents can solve broader tasks when their responsibilities, context and boundaries are explicit.",
    approach: "A supervisor agent coordinates specialist workers through shared state, structured messages and verification checkpoints.",
    capabilities: ["Agent collaboration", "Shared context", "Task delegation", "Guardrails and monitoring"],
    system: ["Supervisor", "Research agent", "Analysis agent", "Action agent", "Verifier", "Human review"]
  },
  {
    slug: "knowledge-engine",
    title: "Knowledge Engine",
    category: "AI Systems",
    year: "2026",
    number: "06",
    short: "A connected memory for complex work.",
    description: "A retrieval and knowledge environment that makes information, institutional memory and reusable agent skills easier to find and apply.",
    image: "/work/knowledge-engine.svg",
    accent: "#74cde4",
    layout: "wide",
    concept: "Useful knowledge is more than a library. It is connected, contextual and available at the moment a decision or task requires it.",
    approach: "A retrieval layer indexes source material, maps relationships and returns grounded answers and reusable skills with traceable references.",
    capabilities: ["Knowledge retrieval", "Semantic indexing", "Skill discovery", "Grounded responses"],
    system: ["Source library", "Indexing", "Vector retrieval", "Context assembly", "Skill invocation", "Grounded response"]
  },
  {
    slug: "research-lab",
    title: "Research Lab",
    category: "Generative AI",
    year: "2026",
    number: "07",
    short: "A space to test the edges of intelligence.",
    description: "An experimental environment for exploring generative model behaviour, multimodal interfaces and new ways to work with information.",
    image: "/work/research-lab.svg",
    accent: "#f0c36c",
    layout: "square",
    concept: "Research begins with a question, not a feature list. This lab makes room for testing, observing and reframing.",
    approach: "Small experiments combine model capabilities, structured prompts, multimodal inputs and evaluation loops.",
    capabilities: ["Generative exploration", "Model evaluation", "Multimodal interaction", "Prototype testing"],
    system: ["Question", "Hypothesis", "Experiment", "Observation", "Evaluation", "Iteration"]
  },
  {
    slug: "processos",
    title: "ProcessOS",
    category: "Process Automation",
    year: "2026",
    number: "08",
    short: "Operational clarity, from end to end.",
    description: "A connected operations concept that brings tasks, approvals, information and reporting into one coherent intelligent environment.",
    image: "/work/processos.svg",
    accent: "#ee9876",
    layout: "wide",
    concept: "A shared operational layer can reduce fragmentation by connecting the work people do with the systems that support it.",
    approach: "Events from connected applications feed a central process layer. Teams can see progress, exceptions and performance in context.",
    capabilities: ["Process visibility", "Application integration", "Task management", "Operational reporting"],
    system: ["Connected apps", "Event stream", "Process layer", "Team workspace", "Reporting"]
  }
];

export const categories = [
  "All",
  "AI Agents",
  "Process Automation",
  "Generative AI",
  "AI Systems",
  "Document Intelligence"
];
