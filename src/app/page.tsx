import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Workflow, Bot, BrainCircuit, FileSearch, Network, ShieldCheck } from "lucide-react";
import { Gallery } from "@/components/gallery";
import { PageTransition } from "@/components/transition";

export const metadata: Metadata = {
  title: "Independent AI Agency",
  description: "GRAYDOVE designs and builds AI agents, intelligent workflows and connected systems that make complex work clearer, faster and more capable."
};

const capabilities = [
  { n: "01", icon: Bot, title: "AI agents & copilots", text: "Purpose-built agents that reason through bounded tasks, use tools, collaborate with people and move work towards a defined outcome." },
  { n: "02", icon: Workflow, title: "Intelligent automation", text: "Connected workflows that coordinate applications, decisions and hand-offs — with exceptions and human approvals built in." },
  { n: "03", icon: BrainCircuit, title: "Knowledge & intelligence", text: "Knowledge systems that turn scattered information into contextual answers, grounded insights and reusable organisational capability." },
  { n: "04", icon: FileSearch, title: "Document intelligence", text: "Systems that understand, classify, extract and validate information while keeping every important result connected to its source." },
  { n: "05", icon: Network, title: "AI systems & integration", text: "The architecture behind useful AI: models, data, APIs, orchestration, interfaces and the systems your organisation already relies on." },
  { n: "06", icon: ShieldCheck, title: "Evaluation & governance", text: "Practical safeguards, observability and evaluation that make AI behaviour more transparent, measurable and dependable." }
];

const principles = [
  ["01", "Start with the work", "We look beyond the request to understand the process, people, information and outcome that matter."],
  ["02", "Design the whole system", "We connect the experience, intelligence, integrations and controls — not just a model or a chatbot."],
  ["03", "Build in the open", "We prototype early, test with real scenarios and make decisions visible as the system takes shape."],
  ["04", "Make it dependable", "We evaluate performance, plan for exceptions and keep people in control where judgement matters."]
];

export default function Home() {
  return (
    <PageTransition>
      <section className="gd-home-hero">
        <div className="gd-hero-topline"><span>INDEPENDENT AI AGENCY</span><span>STRATEGY · DESIGN · ENGINEERING</span></div>
        <div className="gd-hero-main">
          <div className="gd-hero-copy">
            <p className="gd-overline"><i /> INTELLIGENCE, PUT TO WORK</p>
            <h1>We build AI that<br /><em>moves work forward.</em></h1>
            <p className="gd-hero-description">GRAYDOVE is an independent AI agency designing and building intelligent agents, connected workflows and useful AI systems for the real world.</p>
            <div className="gd-hero-actions">
              <Link href="/contact" className="gd-button gd-button-dark">Start a conversation <ArrowUpRight size={15} /></Link>
              <Link href="#explorations" className="gd-text-link">Explore our work <ArrowDownRight size={15} /></Link>
            </div>
          </div>
          <div className="gd-hero-art" aria-label="Abstract visualisation of connected AI systems">
            <div className="gd-art-orbit gd-orbit-one" /><div className="gd-art-orbit gd-orbit-two" /><div className="gd-art-orbit gd-orbit-three" />
            <div className="gd-art-core"><span>G</span><small>INTELLIGENCE<br/>ENGINE</small></div>
            <div className="gd-art-node gd-node-a"><Bot size={17}/><span>AGENTS</span></div>
            <div className="gd-art-node gd-node-b"><Workflow size={17}/><span>WORKFLOWS</span></div>
            <div className="gd-art-node gd-node-c"><BrainCircuit size={17}/><span>KNOWLEDGE</span></div>
            <div className="gd-art-node gd-node-d"><Network size={17}/><span>SYSTEMS</span></div>
            <div className="gd-art-caption"><span>FIG. 01</span><span>CONNECTED INTELLIGENCE / 2026</span></div>
          </div>
        </div>
        <div className="gd-hero-foot"><span>FROM COMPLEXITY TO CAPABILITY</span><span>INDEPENDENT · CURIOUS · SYSTEMS-LED</span></div>
      </section>

      <section className="gd-intro-strip">
        <span className="gd-section-index">01 / THE AGENCY</span>
        <p>AI should do more than answer questions. It should <em>understand context, connect systems and help meaningful work happen.</em></p>
        <span className="gd-intro-aside">THOUGHTFUL BY DESIGN<br/>BUILT FOR REAL WORK</span>
      </section>

      <section className="gd-capabilities" id="capabilities">
        <div className="gd-section-heading"><div><span className="gd-section-index">02 / WHAT WE DO</span><h2>From intelligent ideas<br/>to <em>working systems.</em></h2></div><p>We bring strategy, experience design and engineering together to make AI useful in the places where work actually happens.</p></div>
        <div className="gd-capability-grid">{capabilities.map((item) => { const Icon = item.icon; return <article className="gd-capability" key={item.n}><div className="gd-capability-top"><span>{item.n}</span><Icon size={20} strokeWidth={1.4}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="gd-capability-rule" /></article>; })}</div>
      </section>

      <section className="gd-method">
        <div className="gd-method-heading"><span className="gd-section-index">03 / HOW WE WORK</span><h2>Clear thinking.<br/><em>Careful execution.</em></h2><p>Good AI is not a feature bolted onto a process. It is a system designed around a real outcome, with the right intelligence in the right place.</p></div>
        <div className="gd-principles">{principles.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={16}/></article>)}</div>
      </section>

      <section className="gd-work-intro" id="explorations"><div><span className="gd-section-index">04 / SELECTED EXPLORATIONS</span><h2>Ideas made <em>tangible.</em></h2></div><p>A growing collection of AI products, interfaces and systems. Each exploration tests a different way intelligence can become useful, observable and connected.</p></section>
      <Gallery />

      <section className="gd-final-cta"><div><span className="gd-section-index">05 / HAVE A QUESTION?</span><h2>Let&apos;s make something<br/><em>meaningful.</em></h2></div><div className="gd-final-copy"><p>Bring us a process that needs rethinking, a problem worth solving or an idea you want to explore. We can help shape the next step.</p><Link href="/contact" className="gd-button gd-button-light">Talk to GRAYDOVE <ArrowUpRight size={15}/></Link></div></section>
    </PageTransition>
  );
}
