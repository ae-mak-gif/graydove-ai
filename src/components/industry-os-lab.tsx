"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle, ArrowDownRight, ArrowUpRight, Bot, Building2,
  CheckCircle2, ChevronRight, CircleDot, Factory, Gauge, HeartPulse, Landmark,
  Layers3, Search, ShieldCheck, ShoppingBag, Sparkles, Truck, Workflow
} from "lucide-react";

type KPI = { label: string; value: string; change: string; note: string; direction: "up" | "down" | "flat" };
type Item = { title: string; description: string; status?: string; owner?: string; progress?: number };
type Industry = {
  id: string; name: string; subtitle: string; accent: string; accentSoft: string;
  kpis: KPI[]; dashboards: Item[]; workflows: Item[]; agents: Item[]; painPoints: string[]; skills: string[];
  exceptions: Item[]; signals: string[];
};

const industries: Industry[] = [
  {
    id:"finance",name:"Financial services & insurance",subtitle:"Risk, claims, policy and customer operations",accent:"#5b74e8",accentSoft:"#edf0ff",
    kpis:[{label:"Open cases",value:"248",change:"−8.4%",note:"vs. previous period",direction:"down"},{label:"SLA attainment",value:"93.4%",change:"+2.1 pts",note:"across active queues",direction:"up"},{label:"Evidence gaps",value:"36",change:"12 need review",note:"claims and onboarding",direction:"flat"},{label:"Agent-assisted work",value:"1,482",change:"+18.6%",note:"completed this month",direction:"up"}],
    dashboards:[{title:"Claims & loss operations",description:"Claim intake, evidence, assessment, reserves and recoveries"},{title:"Underwriting & portfolio",description:"Submission flow, risk appetite, referrals and renewals"},{title:"Fraud & financial crime",description:"Anomalies, investigations, entity links and dispositions"},{title:"Compliance & KYC",description:"Onboarding, screening, reviews and reporting"},{title:"Customer & broker service",description:"Policy servicing, enquiries, renewals and complaints"}],
    workflows:[{title:"New claim intake and triage",description:"Extracts documents, checks completeness and routes the case",status:"Running",owner:"Claims operations",progress:78},{title:"KYC periodic review",description:"Collects evidence, screens entities and creates review tasks",status:"Needs approval",owner:"Compliance",progress:62},{title:"Underwriting submission review",description:"Assembles exposure, history and appetite checks",status:"Running",owner:"Underwriting",progress:91},{title:"Renewal readiness",description:"Flags missing information and creates broker follow-ups",status:"Running",owner:"Policy services",progress:46}],
    agents:[{title:"Intake & triage agent",description:"Classifies new cases and identifies missing evidence",status:"Active",owner:"1,204 tasks this month"},{title:"Document intelligence agent",description:"Extracts and validates policy, claim and identity documents",status:"Active",owner:"98.2% extraction review pass"},{title:"Policy analyst",description:"Retrieves relevant clauses with source-linked evidence",status:"Human review",owner:"18 items awaiting approval"},{title:"Fraud investigation assistant",description:"Builds timelines from anomalies and connected records",status:"Active",owner:"42 investigations supported"},{title:"Compliance case assistant",description:"Assembles review packs and tracks regulatory actions",status:"Active",owner:"No overdue reviews in sample"}],
    painPoints:["Fragmented customer, policy, account and transaction data","Manual claims and underwriting work","Fraud, financial crime and suspicious activity","Regulatory and compliance workload","Slow customer and intermediary servicing","AI governance, legacy integration and technology risk"],
    skills:["Policy wording retrieval","Claims file summarisation","Evidence checklist generation","KYC document extraction","Entity resolution","Transaction anomaly explanation","Regulatory change summaries","Audit-pack assembly"],
    exceptions:[{title:"Claim file missing repair estimate",description:"CLM-2048 · Evidence gap · 18 hours in queue",status:"Review"},{title:"KYC refresh due in 3 days",description:"ORG-1182 · Compliance · Relationship owner notified",status:"Due soon"},{title:"Possible duplicate invoice",description:"CLM-1991 · Similarity flag · Source comparison ready",status:"Review"}],
    signals:["Claims evidence backlog has fallen for three consecutive weeks","Two broker submissions are missing exposure schedules","New fraud signal cluster requires investigator review"]
  },
  {
    id:"healthcare",name:"Healthcare & life sciences",subtitle:"Patient access, capacity and administrative operations",accent:"#168b83",accentSoft:"#e8f7f4",
    kpis:[{label:"Access work queue",value:"186",change:"−11.2%",note:"referrals and requests",direction:"down"},{label:"Authorisation status",value:"89.1%",change:"+3.4 pts",note:"ready or approved",direction:"up"},{label:"Documentation backlog",value:"42",change:"9 high priority",note:"awaiting completion",direction:"flat"},{label:"Capacity utilisation",value:"84.6%",change:"+1.8 pts",note:"across sample services",direction:"up"}],
    dashboards:[{title:"Patient access & capacity",description:"Referrals, waitlists, appointment demand and service capacity"},{title:"Revenue cycle & authorisations",description:"Eligibility, authorisation, denials and billing readiness"},{title:"Clinical documentation operations",description:"Notes, discharge tasks, referrals and record requests"},{title:"Workforce & service operations",description:"Rota coverage, staffing gaps and workload distribution"},{title:"Quality, safety & compliance",description:"Incidents, audit evidence and follow-up actions"}],
    workflows:[{title:"Referral intake and routing",description:"Validates referral details and routes to the correct service",status:"Running",owner:"Patient access",progress:84},{title:"Prior authorisation preparation",description:"Checks requirements and assembles payer evidence",status:"Needs approval",owner:"Revenue cycle",progress:57},{title:"Discharge coordination",description:"Tracks summary, follow-up and referral hand-offs",status:"Running",owner:"Care coordination",progress:73},{title:"Denial root-cause review",description:"Groups denial reasons and prepares supporting evidence",status:"Running",owner:"Billing operations",progress:41}],
    agents:[{title:"Referral intake agent",description:"Checks referral completeness and identifies missing details",status:"Active",owner:"368 referrals processed"},{title:"Patient access coordinator",description:"Coordinates bounded scheduling and reminder tasks",status:"Active",owner:"92 appointments supported"},{title:"Authorisation assistant",description:"Assembles payer requirements and follow-up packs",status:"Human review",owner:"11 approvals awaiting staff"},{title:"Revenue-cycle assistant",description:"Flags documentation gaps and groups denial reasons",status:"Active",owner:"74 cases analysed"},{title:"Operations analyst",description:"Highlights demand, capacity and workload pressure",status:"Active",owner:"Daily capacity brief ready"}],
    painPoints:["Patient access, referrals and appointment coordination","Staffing and workforce capacity","Prior authorisation, eligibility and insurance verification","Revenue-cycle leakage and claims denials","Clinical and operational documentation burden","Fragmented patient and operational information"],
    skills:["Referral extraction","Appointment coordination","Authorisation checklist creation","Eligibility verification support","Clinical document summarisation","Discharge-pack assembly","Denial categorisation","Capacity analysis"],
    exceptions:[{title:"Referral missing clinical attachment",description:"REF-0421 · Access queue · Awaiting source document",status:"Review"},{title:"Procedure authorisation expires tomorrow",description:"AUTH-883 · Revenue cycle · Payer response pending",status:"Urgent"},{title:"Discharge follow-up not scheduled",description:"ENC-2104 · Care coordination · Owner assigned",status:"Due soon"}],
    signals:["Cardiology referral volume is 14% above the four-week baseline","Authorisation delays are concentrated in two payer workflows","Discharge follow-up completion improved in the latest sample week"]
  },
  {
    id:"manufacturing",name:"Manufacturing & industrial operations",subtitle:"Production, quality, maintenance and supply operations",accent:"#b66b27",accentSoft:"#fbf1e7",
    kpis:[{label:"Production plan",value:"96.8%",change:"+2.6 pts",note:"schedule attainment",direction:"up"},{label:"Unplanned downtime",value:"14.2h",change:"−9.7%",note:"this reporting period",direction:"down"},{label:"Quality exceptions",value:"23",change:"6 critical",note:"open non-conformances",direction:"flat"},{label:"Material availability",value:"91.3%",change:"−1.2 pts",note:"priority work orders",direction:"down"}],
    dashboards:[{title:"Production control",description:"Line status, work orders, throughput and schedule adherence"},{title:"Quality intelligence",description:"Defects, inspections, non-conformances and corrective actions"},{title:"Maintenance & asset health",description:"Asset condition, downtime, service history and parts"},{title:"Supply & procurement",description:"Supplier performance, materials, shortages and lead times"},{title:"Workforce & knowledge",description:"Shift coverage, skills, training and approved SOPs"}],
    workflows:[{title:"Machine alert to maintenance task",description:"Classifies event and prepares asset history and work order",status:"Running",owner:"Maintenance",progress:69},{title:"Quality deviation investigation",description:"Collects batch evidence and tracks corrective action",status:"Needs approval",owner:"Quality",progress:48},{title:"Material shortage response",description:"Identifies affected orders and sourcing alternatives",status:"Running",owner:"Planning",progress:82},{title:"Shift handover briefing",description:"Summarises open issues, safety notes and next-shift actions",status:"Running",owner:"Plant operations",progress:100}],
    agents:[{title:"Production planner",description:"Compares capacity and demand scenarios",status:"Active",owner:"3 schedules prepared"},{title:"Maintenance coordinator",description:"Triage alerts and prepares work orders",status:"Active",owner:"26 work orders supported"},{title:"Quality investigator",description:"Structures defect evidence and root-cause context",status:"Human review",owner:"7 corrective actions awaiting sign-off"},{title:"Supplier monitor",description:"Tracks material and supplier exceptions",status:"Active",owner:"4 supply risks detected"},{title:"Shift knowledge assistant",description:"Retrieves approved SOPs and shift history",status:"Active",owner:"112 knowledge lookups"}],
    painPoints:["Unplanned downtime and maintenance coordination","Quality defects and inconsistent process control","Supplier, material and supply-chain volatility","Legacy systems and fragmented plant data","Workforce shortages and knowledge loss","Cost, throughput and production planning pressure"],
    skills:["Machine-event classification","Maintenance log summarisation","SOP retrieval","Production schedule analysis","BOM comparison","Supplier risk summaries","Defect categorisation","Shift handover generation"],
    exceptions:[{title:"Filler line vibration above threshold",description:"ASSET-07 · Maintenance · Technician review required",status:"Urgent"},{title:"Batch QA result outside tolerance",description:"BATCH-552 · Quality · Containment initiated",status:"Review"},{title:"Critical component delivery at risk",description:"PO-9031 · Procurement · Alternate source identified",status:"Due soon"}],
    signals:["Line 3 changeover time is trending above target","One critical component is now the constraint for two orders","Repeat defect pattern detected across the same product family"]
  },
  {
    id:"logistics",name:"Logistics, transport & supply chain",subtitle:"Shipment visibility, fleet, warehouse and carrier operations",accent:"#2475a7",accentSoft:"#eaf4fa",
    kpis:[{label:"Active shipments",value:"1,284",change:"+6.2%",note:"across tracked lanes",direction:"up"},{label:"On-time delivery",value:"94.2%",change:"+1.1 pts",note:"rolling 30 days",direction:"up"},{label:"Shipments at risk",value:"37",change:"8 high impact",note:"ETA or milestone alert",direction:"flat"},{label:"Freight variance",value:"2.8%",change:"−0.6 pts",note:"against contracted rate",direction:"down"}],
    dashboards:[{title:"Shipment control tower",description:"Milestones, ETA confidence, delays and proof of delivery"},{title:"Transport & fleet",description:"Vehicle status, routes, utilisation, fuel and maintenance"},{title:"Warehouse operations",description:"Inbound/outbound queues, inventory and dock capacity"},{title:"Carrier & procurement",description:"Rates, capacity, service levels and invoice exceptions"},{title:"Supply & disruption risk",description:"Supplier signals, critical lanes and contingency planning"}],
    workflows:[{title:"Order to proof of delivery",description:"Coordinates carrier, dispatch, milestones and delivery evidence",status:"Running",owner:"Transport operations",progress:87},{title:"Delay detection and recovery",description:"Builds customer impact and alternative route options",status:"Needs approval",owner:"Control tower",progress:54},{title:"Freight invoice audit",description:"Checks contract rates and accessorial charges",status:"Running",owner:"Finance operations",progress:76},{title:"Inbound receiving coordination",description:"Matches supplier shipment and warehouse slot",status:"Running",owner:"Warehouse",progress:64}],
    agents:[{title:"Dispatch planner",description:"Prepares load and route options against constraints",status:"Active",owner:"31 plans supported"},{title:"Shipment tracking agent",description:"Reconciles milestones and explains ETA changes",status:"Active",owner:"1,284 shipments monitored"},{title:"Carrier sourcing assistant",description:"Compares approved carriers and service history",status:"Human review",owner:"5 carrier awards awaiting approval"},{title:"Warehouse flow coordinator",description:"Prioritises receiving, picking and dispatch queues",status:"Active",owner:"9 queue interventions"},{title:"Freight audit agent",description:"Compares invoices against rates and shipment events",status:"Active",owner:"$18.4k illustrative variance flagged"}],
    painPoints:["Limited end-to-end shipment visibility","Freight and operating cost pressure","Capacity and carrier coordination","Inefficient routing and planning","Warehouse and fulfilment friction","Disruption, compliance and exception management"],
    skills:["Route and load optimisation","ETA estimation","Shipment event reconciliation","Carrier scorecards","Freight invoice auditing","POD extraction","Customs document checks","Disruption scenario analysis"],
    exceptions:[{title:"Shipment delayed at transfer hub",description:"SHP-8821 · Customer impact · Revised ETA requested",status:"Urgent"},{title:"Carrier invoice exceeds contracted rate",description:"INV-4402 · Freight audit · Rate comparison ready",status:"Review"},{title:"Warehouse dock capacity conflict",description:"WH-02 · Inbound operations · Slot reassignment needed",status:"Due soon"}],
    signals:["North corridor delivery times are 8% slower than baseline","Carrier connectivity gaps are concentrated on two lanes","Invoice variance is declining after contract-rule automation"]
  },
  {
    id:"retail",name:"Retail, commerce & consumer goods",subtitle:"Demand, inventory, fulfilment and customer operations",accent:"#a34f87",accentSoft:"#f8edf4",
    kpis:[{label:"Sales vs. plan",value:"102.4%",change:"+3.1 pts",note:"sample trading period",direction:"up"},{label:"Inventory risk",value:"64 SKUs",change:"18 stockout risks",note:"next 14 days",direction:"flat"},{label:"Forecast confidence",value:"87.6%",change:"+4.2 pts",note:"weighted forecast",direction:"up"},{label:"Returns under review",value:"31",change:"7 high risk",note:"policy and anomaly checks",direction:"flat"}],
    dashboards:[{title:"Demand & merchandising",description:"Forecast accuracy, SKU performance, promotions and margin"},{title:"Inventory & replenishment",description:"Stock cover, stockouts, excess stock and reorder proposals"},{title:"Omnichannel fulfilment",description:"Order queues, fulfilment source, delivery and returns"},{title:"Customer intelligence",description:"Enquiries, sentiment, service levels and retention signals"},{title:"Loss prevention & returns",description:"Return patterns, transaction anomalies and shrink"}],
    workflows:[{title:"Demand signal to replenishment",description:"Combines sales signals and stock risk into buyer proposals",status:"Running",owner:"Merchandising",progress:82},{title:"Omnichannel order fulfilment",description:"Selects stock source and tracks pick, pack and delivery",status:"Running",owner:"E-commerce operations",progress:91},{title:"Returns risk review",description:"Checks policy and transaction history for anomalies",status:"Needs approval",owner:"Loss prevention",progress:58},{title:"Markdown recommendation",description:"Compares margin, stock age and promotion scenarios",status:"Running",owner:"Category team",progress:47}],
    agents:[{title:"Demand planner",description:"Builds forecasts and explains material changes",status:"Active",owner:"420 SKUs analysed"},{title:"Inventory optimiser",description:"Flags stockout and overstock risk",status:"Active",owner:"64 exceptions monitored"},{title:"Merchandising analyst",description:"Analyses SKU, promotion and margin performance",status:"Active",owner:"12 category briefs ready"},{title:"Order concierge",description:"Handles bounded order and product enquiries",status:"Active",owner:"326 enquiries supported"},{title:"Returns & loss analyst",description:"Flags unusual returns and prepares investigation cases",status:"Human review",owner:"7 cases awaiting review"}],
    painPoints:["Unreliable demand forecasting","Inventory imbalance and working capital pressure","Returns, shrinkage and transaction abuse","Omnichannel fulfilment complexity","Margin and pricing pressure","Customer experience and service workload"],
    skills:["Demand signal synthesis","Forecast explanation","Stock cover calculation","Replenishment proposals","SKU and margin analysis","Returns pattern detection","Product catalogue enrichment","Customer enquiry classification"],
    exceptions:[{title:"High-velocity SKU at stockout risk",description:"SKU-1048 · Inventory · 4.2 days of cover",status:"Urgent"},{title:"Return pattern deviates from category norm",description:"RET-3301 · Loss prevention · Review evidence",status:"Review"},{title:"Promotion margin below threshold",description:"CAM-212 · Merchandising · Approval required",status:"Due soon"}],
    signals:["Three seasonal SKUs have forecast confidence below 70%","Excess stock is concentrated in two slow-moving categories","Returns-related exceptions increased after a recent promotion"]
  },
  {
    id:"construction",name:"Construction, infrastructure & property",subtitle:"Project controls, commercial, procurement and site operations",accent:"#697a42",accentSoft:"#f1f4e9",
    kpis:[{label:"Projects in delivery",value:"18",change:"2 at risk",note:"active programme",direction:"flat"},{label:"Cost variance",value:"+2.6%",change:"−0.8 pts",note:"against approved budget",direction:"down"},{label:"Open RFIs",value:"74",change:"16 overdue",note:"across active projects",direction:"flat"},{label:"Site actions closed",value:"91.8%",change:"+5.4 pts",note:"quality and safety",direction:"up"}],
    dashboards:[{title:"Project controls",description:"Milestones, critical path, progress and schedule variance"},{title:"Cost & commercial",description:"Budget, commitments, variations, payment applications and margin"},{title:"Procurement & materials",description:"Requisitions, supplier lead times and delivery status"},{title:"Document & contract control",description:"Drawings, revisions, RFIs, submittals and obligations"},{title:"Site quality & safety",description:"Inspections, defects, permits, incidents and corrective actions"}],
    workflows:[{title:"Daily site reporting",description:"Consolidates site updates and flags programme variance",status:"Running",owner:"Project controls",progress:88},{title:"RFI routing and response",description:"Classifies request and tracks accountable response dates",status:"Running",owner:"Document control",progress:61},{title:"Variation evidence assembly",description:"Collects source records and drafts cost/time impact",status:"Needs approval",owner:"Commercial",progress:42},{title:"Inspection and corrective action",description:"Tracks defect evidence through reinspection and close-out",status:"Running",owner:"Quality & safety",progress:79}],
    agents:[{title:"Project reporting agent",description:"Consolidates daily reports and contractor updates",status:"Active",owner:"18 reports assembled"},{title:"Schedule intelligence agent",description:"Identifies slippage and recovery scenarios",status:"Active",owner:"2 projects flagged"},{title:"Cost & variation assistant",description:"Assembles commercial evidence for review",status:"Human review",owner:"6 change events in review"},{title:"Document controller agent",description:"Classifies, versions and routes project documents",status:"Active",owner:"1,840 documents indexed"},{title:"Procurement coordinator",description:"Monitors materials, suppliers and delivery risks",status:"Active",owner:"11 supply alerts tracked"}],
    painPoints:["Project reporting and fragmented progress visibility","Cost overruns and weak cost forecasting","Schedule delays and resource coordination","Document and contract administration","Procurement and supply uncertainty","Quality, safety and compliance evidence"],
    skills:["Daily report extraction","Drawing/specification retrieval","RFI classification","Contract clause retrieval","Variation evidence assembly","Programme variance analysis","Procurement comparison","Inspection checklist generation"],
    exceptions:[{title:"Critical RFI has no response owner",description:"RFI-0842 · Project controls · 2 days overdue",status:"Urgent"},{title:"Concrete delivery at risk",description:"PO-1182 · Procurement · Pour sequence affected",status:"Review"},{title:"Variation evidence incomplete",description:"VO-029 · Commercial · Labour records missing",status:"Due soon"}],
    signals:["Two projects have critical-path dependencies with limited float","Variation turnaround is the largest commercial bottleneck","Document revision mismatches detected in one work package"]
  }
];

const tabs = [
  {id:"overview",label:"Universal dashboard",icon:Gauge},
  {id:"dashboards",label:"Specialist dashboards",icon:Layers3},
  {id:"workflows",label:"Workflows",icon:Workflow},
  {id:"agents",label:"AI agents",icon:Bot},
  {id:"pain",label:"Pain points",icon:AlertTriangle},
  {id:"skills",label:"Skills library",icon:Sparkles}
] as const;
type Tab = typeof tabs[number]["id"];
const icons: Record<string,LucideIcon> = {finance:Landmark,healthcare:HeartPulse,manufacturing:Factory,logistics:Truck,retail:ShoppingBag,construction:Building2};

function MetricCard({item}:{item:KPI}) {
  const Icon = item.direction==="up" ? ArrowUpRight : item.direction==="down" ? ArrowDownRight : CircleDot;
  return <article className="iol-metric">
    <span className="iol-metric-label">{item.label}</span>
    <strong>{item.value}</strong>
    <div><span className={"iol-change "+item.direction}><Icon size={13}/>{item.change}</span><small>{item.note}</small></div>
  </article>;
}

export default function IndustryOSLab() {
  const [industryId,setIndustryId] = useState("finance");
  const [tab,setTab] = useState<Tab>("overview");
  const [query,setQuery] = useState("");
  const industry = useMemo(()=>industries.find(item=>item.id===industryId) ?? industries[0], [industryId]);
  const filteredExceptions = industry.exceptions.filter(item=>(item.title+" "+item.description).toLowerCase().includes(query.toLowerCase()));
  return <div className="industry-os-lab" style={{"--iol-accent":industry.accent,"--iol-accent-soft":industry.accentSoft} as CSSProperties}>
    <aside className="iol-sidebar">
      <a href="/" className="iol-brand"><span>G.</span><b>GRAYDOVE</b><small>INTELLIGENCE SYSTEMS</small></a>
      <div className="iol-side-label">INDUSTRY WORKSPACES</div>
      <nav className="iol-industries" aria-label="Industry workspaces">
        {industries.map(item=>{const IndustryIcon=icons[item.id];return <button key={item.id} onClick={()=>{setIndustryId(item.id);setTab("overview");}} className={industryId===item.id?"active":""} aria-pressed={industryId===item.id}><IndustryIcon size={16}/><span>{item.name}</span><ChevronRight size={13}/></button>;})}
      </nav>
      <div className="iol-sidebar-foot"><span className="iol-live-dot"/> PLATFORM STATUS <b>ALL SYSTEMS NORMAL</b><small>INTERNAL PRODUCT PREVIEW</small></div>
    </aside>
    <main className="iol-main">
      <header className="iol-topbar">
        <div className="iol-breadcrumb"><span>GRAYDOVE</span><b>/</b><span>INDUSTRY OS LAB</span><b>/</b><strong>{industry.name.toUpperCase()}</strong></div>
        <div className="iol-top-actions"><span className="iol-preview-tag">ILLUSTRATIVE DATA</span><button aria-label="Search exceptions" className="iol-search-icon"><Search size={16}/></button><div className="iol-avatar">G</div></div>
      </header>
      <section className="iol-page-head">
        <div><span className="iol-eyebrow">VERTICAL OPERATING SYSTEM / 0{industries.findIndex(item=>item.id===industry.id)+1}</span><h1>{industry.name}</h1><p>{industry.subtitle}. A unified operational workspace for teams, workflows and AI agents.</p></div>
        <div className="iol-head-status"><span className="iol-live-dot"/> WORKSPACE ONLINE <small>UPDATED JUST NOW</small></div>
      </section>
      <nav className="iol-tabs" aria-label="Workspace sections">
        {tabs.map(item=>{const TabIcon=item.icon;return <button key={item.id} onClick={()=>setTab(item.id)} className={tab===item.id?"active":""} aria-pressed={tab===item.id}><TabIcon size={14}/>{item.label}</button>;})}
      </nav>
      <div className="iol-content">
        {tab==="overview" && <>
          <div className="iol-section-intro"><div><span>01 / UNIVERSAL OPERATIONS DASHBOARD</span><h2>Operational command</h2></div><p>One view of work, process health, risk and intelligence across the organisation.</p></div>
          <div className="iol-kpis">{industry.kpis.map((item)=><MetricCard key={item.label} item={item}/>)}</div>
          <div className="iol-overview-grid">
            <section className="iol-panel iol-queue-panel">
              <div className="iol-panel-head"><div><span>PRIORITY WORK QUEUE</span><h3>Exceptions requiring attention</h3></div><span className="iol-count">{industry.exceptions.length} OPEN</span></div>
              <div className="iol-search-field"><Search size={14}/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search exceptions..." aria-label="Search exceptions"/></div>
              <div className="iol-exceptions">{filteredExceptions.map((item,index)=><article key={item.title}><span className={"iol-priority p"+index}><AlertTriangle size={14}/></span><div><b>{item.title}</b><small>{item.description}</small></div><em>{item.status}</em><ChevronRight size={14}/></article>)}</div>
              <button className="iol-quiet-action" onClick={()=>setTab("workflows")}>View workflow operations <ArrowUpRight size={14}/></button>
            </section>
            <section className="iol-panel iol-signals-panel">
              <div className="iol-panel-head"><div><span>INTELLIGENCE SIGNALS</span><h3>What needs context</h3></div><Sparkles size={17}/></div>
              {industry.signals.map((signal,index)=><div className="iol-signal" key={signal}><span>0{index+1}</span><p>{signal}</p><ArrowUpRight size={14}/></div>)}
              <div className="iol-signal-foot"><ShieldCheck size={14}/> Source-aware insights / human review enabled</div>
            </section>
          </div>
          <div className="iol-lower-grid">
            <section className="iol-panel">
              <div className="iol-panel-head"><div><span>WORKFLOW HEALTH</span><h3>Active operations</h3></div><button onClick={()=>setTab("workflows")}>View all <ArrowUpRight size={13}/></button></div>
              {industry.workflows.slice(0,3).map(item=><div className="iol-work-row" key={item.title}><div><b>{item.title}</b><small>{item.owner} · {item.status}</small></div><div className="iol-progress"><i style={{width:item.progress+"%"}}/></div><strong>{item.progress}%</strong></div>)}
            </section>
            <section className="iol-panel">
              <div className="iol-panel-head"><div><span>AGENT OPERATIONS</span><h3>Specialists at work</h3></div><button onClick={()=>setTab("agents")}>View agents <ArrowUpRight size={13}/></button></div>
              {industry.agents.slice(0,3).map(item=><div className="iol-agent-row" key={item.title}><span><Bot size={15}/></span><div><b>{item.title}</b><small>{item.owner}</small></div><em className={item.status==="Active"?"on":"review"}>{item.status}</em></div>)}
            </section>
          </div>
        </>}
        {tab==="dashboards" && <><div className="iol-section-intro"><div><span>02 / SPECIALIST VIEWS</span><h2>Dashboards for the work</h2></div><p>Focused workspaces built around the decisions and operating responsibilities of this sector.</p></div><div className="iol-card-grid">{industry.dashboards.map((item,index)=><article className="iol-feature-card" key={item.title}><span>0{index+1} / SPECIALIST DASHBOARD</span><div className="iol-feature-icon"><Layers3 size={19}/></div><h3>{item.title}</h3><p>{item.description}</p><button onClick={()=>setTab("overview")}>Open workspace <ArrowUpRight size={14}/></button></article>)}</div></>}
        {tab==="workflows" && <><div className="iol-section-intro"><div><span>03 / PROCESS ORCHESTRATION</span><h2>Connected workflows</h2></div><p>Repeatable processes with visible ownership, progress, approval gates and exception handling.</p></div><div className="iol-list-panel">{industry.workflows.map((item,index)=><article key={item.title}><span className="iol-list-number">0{index+1}</span><div className="iol-list-copy"><b>{item.title}</b><p>{item.description}</p><small>OWNER / {item.owner}</small></div><div className="iol-list-progress"><div><i style={{width:item.progress+"%"}}/></div><small>{item.progress}% COMPLETE</small></div><em className={item.status==="Running"?"on":"review"}>{item.status}</em><ChevronRight size={15}/></article>)}</div></>}
        {tab==="agents" && <><div className="iol-section-intro"><div><span>04 / AGENT ORCHESTRATION</span><h2>Specialists with clear roles</h2></div><p>Bounded agents use approved tools, produce traceable outputs and escalate decisions that require a person.</p></div><div className="iol-card-grid iol-agent-grid">{industry.agents.map((item,index)=><article className="iol-agent-card" key={item.title}><div className="iol-agent-card-top"><span><Bot size={18}/></span><em className={item.status==="Active"?"on":"review"}>{item.status}</em></div><h3>{item.title}</h3><p>{item.description}</p><small>{item.owner}</small><div className="iol-agent-card-foot"><span>PERMISSION-SCOPED</span><span>TRACE ENABLED</span></div></article>)}</div></>}
        {tab==="pain" && <><div className="iol-section-intro"><div><span>05 / RESEARCHED OPERATIONAL PAIN</span><h2>Where work gets stuck</h2></div><p>Six recurring challenges translated into operational opportunities for automation, intelligence and better control.</p></div><div className="iol-pain-list">{industry.painPoints.map((item,index)=><article key={item}><span>0{index+1}</span><div><b>{item}</b><p>Opportunity for connected data, structured workflows, exception visibility and human-supervised AI assistance.</p></div><ArrowUpRight size={15}/></article>)}</div></>}
        {tab==="skills" && <><div className="iol-section-intro"><div><span>06 / REUSABLE INTELLIGENCE</span><h2>Industry skill library</h2></div><p>Composable capabilities that agents and workflows can invoke with explicit inputs, permissions and outputs.</p></div><div className="iol-skill-grid">{industry.skills.map((skill,index)=><article key={skill}><span>SKILL / {String(index+1).padStart(2,"0")}</span><b>{skill}</b><small><CheckCircle2 size={13}/> AVAILABLE IN DESIGN SYSTEM</small></article>)}</div></>}
      </div>
      <footer className="iol-footer"><span>GRAYDOVE / INDUSTRY OS LAB</span><span>INTERNAL PROTOTYPE · SAMPLE WORKSPACE DATA · NOT CONNECTED TO LIVE CUSTOMER SYSTEMS</span></footer>
    </main>
  </div>;
}
