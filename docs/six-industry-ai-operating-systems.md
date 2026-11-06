# GRAYDOVE — Six Industry AI Operating Systems
**Research baseline:** 6 November 2026  
**Status:** Internal strategy and product architecture — not public website positioning

## Executive recommendation

Build six vertical AI operating systems on one shared platform foundation:

1. **Financial services & insurance**
2. **Healthcare & life sciences**
3. **Manufacturing & industrial operations**
4. **Logistics, transport & supply chain**
5. **Retail, commerce & consumer goods**
6. **Construction, infrastructure & property**

These are not six unrelated software products. They are six industry-specific operating environments built on the same GRAYDOVE intelligence layer: connected data, workflows, AI agents, document intelligence, operational analytics, approvals, auditability and human control.

The selection balances:
- High volumes of repeatable, document-heavy and exception-driven work.
- Operational decisions that depend on fragmented data and multiple systems.
- Strong demand for visibility, cost control, productivity and risk reduction.
- Multiple agentic workflows that can be delivered incrementally.
- A credible path from an initial workflow automation project to a wider operating system.

**Important positioning constraint:** this is an internal product and market strategy. Do not add an industries-served section, industry list, or vertical-specific marketing claims to the public GRAYDOVE website yet.

## Research approach and interpretation

The pain points below are a synthesis of current 2025–2026 industry surveys, regulator publications and sector research. They are not claimed to be identical across every geography or company size. The cited statistics are directional evidence from the stated study populations, not universal market averages.

The research is global-first and weighted toward operational pain that AI can realistically address. Before selling a vertical in a specific country, validate regulation, terminology, integrations, data residency, procurement practices and buyer priorities in that market.

---

# 1. Shared GRAYDOVE platform foundation

Each industry receives its own **Universal Operations Dashboard** and a set of specialist dashboards. The universal dashboard is the sector's command centre; it is not a generic dashboard with the industry name changed.

## Universal Operations Dashboard — common modules

| Module | What it gives the operator |
|---|---|
| Executive command | Live view of throughput, backlog, cost, service levels, risk and key outcomes |
| Work and case control | A unified queue of cases, jobs, orders, claims, referrals, projects or tasks, with ownership and next action |
| Workflow control | Active processes, stage, elapsed time, bottlenecks, exceptions, hand-offs and SLA breaches |
| Agent operations | Agent status, assigned work, tool calls, outputs, confidence, exceptions, approvals and execution history |
| Document and knowledge hub | Searchable source documents, extracted data, linked records, version history and evidence trails |
| Risk and exception centre | Prioritised anomalies, overdue items, policy or control breaches, missing information and human-review tasks |
| Performance intelligence | Trends, forecasting, root-cause analysis, workload, productivity and configurable KPIs |
| Governance and audit | User permissions, approvals, decision records, model/version traceability, audit events and retention controls |

Every dashboard should answer six operational questions:
1. What is happening now?
2. What needs attention?
3. What is blocked, late or at risk?
4. What is driving the result?
5. What can the system safely do next?
6. What requires a person to decide or approve?

## Shared platform architecture

- **Experience layer:** role-based dashboards, queues, forms, command views and responsive interfaces.
- **Workflow layer:** event triggers, orchestration, routing, timers, approvals, retries and exception paths.
- **Agent layer:** specialist agents with bounded responsibilities, explicit tools, scoped permissions and human escalation.
- **Knowledge and document layer:** ingestion, OCR/parsing, classification, retrieval, source citations and structured extraction.
- **Integration layer:** APIs, webhooks, file imports/exports and connectors to existing systems.
- **Intelligence layer:** analytics, forecasting, anomaly detection, recommendations and performance measurement.
- **Trust layer:** identity, access control, audit trails, evaluation, observability, data protection and model governance.

The same base should support multiple LLM providers and deterministic non-LLM automation. Do not use an LLM for a task that is better handled by a rule, calculation, database query or conventional integration.

---

# 2. Financial services & insurance

## Why this vertical

Financial services has high-value, risk-sensitive processes and large volumes of structured and unstructured information. Insurance adds especially strong opportunities in claims, underwriting, policy servicing, renewals, recoveries and broker operations.

The 2025–2026 HTEC study found AI deployed in at least some areas at 85% of surveyed financial-services and insurance organisations, but only 22.6% of leaders felt ready to capture enterprise-level value; integration and leadership alignment were major barriers. The Cambridge Centre for Alternative Finance's 2026 report highlights data quality, talent, legacy systems, privacy, unreliable outputs and human oversight as material adoption constraints. The IIF/EY bank risk survey also places cybersecurity and technology risk, credit risk, fraud and financial crime high on CRO agendas.

Sources:
- [HTEC — State of AI in Financial Services and Insurance 2025–2026](https://htec.com/insights/reports/executive-summary-the-state-of-ai-in-financial-services-and-insurance-2025/)
- [Cambridge Centre for Alternative Finance — Global AI in Financial Services Report 2026](https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/2026-global-ai-in-financial-services-report/)
- [IIF / EY — Global Bank Risk Management Survey 2026](https://www.iif.com/Publications/ID/6459/IIF-EY-Global-Bank-Risk-Management-Survey---Shifting-priorities--CRO-agendas-in-a-time-of-uncertainty-and-innovation)
- [European Banking Authority — Risk Assessment Report, June 2026](https://www.eba.europa.eu/publications-and-media/publications/risk-assessment-report-june-2026)

## Six researched pain points

1. **Fragmented customer, policy, account and transaction data.** Customer and risk context is spread across core systems, CRM, document stores, spreadsheets, broker systems and third parties. This makes a complete view difficult and slows decisions.
2. **Manual claims and underwriting work.** Intake, document checking, evidence gathering, policy wording analysis, assessment, referral and settlement decisions require repeated reading and hand-offs.
3. **Fraud, financial crime and suspicious activity.** Transaction anomalies, identity abuse, synthetic documents, payment fraud and claims irregularities require faster triage without overwhelming investigators.
4. **Regulatory and compliance workload.** KYC/CDD, sanctions screening, regulatory change, evidence preparation, reporting and control testing create continuous administrative pressure.
5. **Slow customer and intermediary servicing.** Repeated enquiries, missing documents, renewal follow-ups, status requests and manual service tasks increase turnaround time.
6. **AI governance and technology risk.** Poor data, legacy integration, privacy, model explainability, hallucinations, cyber risk and insufficient human oversight prevent safe scaling.

## Universal dashboard

**Financial Operations Command:** portfolio/service overview, case and transaction queues, risk exposure, compliance exceptions, customer service SLAs, agent activity, document backlog and audit status.

## Specialist dashboards

- **Claims & Loss Operations:** claim intake, evidence completeness, reserve movement, assessment status, leakage indicators, settlement cycle and recoveries.
- **Underwriting & Portfolio:** submission pipeline, appetite checks, risk accumulation, quote turnaround, referral decisions and renewal exposure.
- **Fraud & Financial Crime:** suspicious activity, entity relationships, anomaly clusters, investigation queues and disposition.
- **Compliance & KYC:** onboarding status, missing evidence, screening hits, periodic reviews, regulatory actions and reporting deadlines.
- **Customer & Broker Service:** enquiries, policy/account changes, renewals, complaints, service backlog and response times.

## Priority workflows

- Claim or case intake → document extraction → completeness check → policy/account validation → triage → human assessment → decision → communication → closure.
- New business submission → data enrichment → risk screening → appetite/rules check → underwriting referral → quote preparation → approval.
- KYC refresh → identity/document checks → screening → discrepancy resolution → approval → audit record.
- Suspicious activity → anomaly alert → context assembly → investigation brief → analyst decision → escalation/reporting.
- Renewal workflow → exposure and history summary → missing information request → review → renewal recommendation → customer/broker follow-up.

## Agent suite

- **Intake & Triage Agent:** structures new cases and routes them to the right queue.
- **Document Intelligence Agent:** extracts, compares and validates source documents with page-level evidence.
- **Policy & Contract Analyst:** retrieves relevant clauses, limits, exclusions and conditions; never makes an unapproved coverage decision.
- **Risk & Underwriting Assistant:** assembles submission context and highlights appetite or information gaps.
- **Fraud Investigation Assistant:** groups signals, builds timelines and prepares explainable investigation briefs.
- **Compliance Case Assistant:** monitors review requirements, assembles evidence and drafts reporting packs.
- **Customer Service Agent:** handles bounded status and service requests with identity checks and escalation.

## Reusable skills

Policy/wording retrieval; claims file summarisation; evidence checklist generation; invoice and estimate comparison; KYC document extraction; entity resolution; transaction anomaly explanation; regulatory change summarisation; broker submission parsing; audit-pack assembly.

**Guardrails:** human authority for coverage, underwriting, credit, suspicious-activity dispositions and regulatory submissions; source-linked outputs; strict access boundaries; immutable decision logs.

---

# 3. Healthcare & life sciences

## Why this vertical

Healthcare organisations face a combination of access, capacity, workforce and financial pressure. AI opportunities are strongest in administrative and coordination work when clinical decisions remain under qualified human control.

Experian Health's 2026 patient-access survey reports that 64% of providers say staffing shortages reduce patient access; 36% of patients report difficulty with procedure authorisations and 28% experienced delays due to insurance verification. The American Hospital Association's 2026 outlook highlights administrative burden and documentation/revenue-cycle workflows as significant AI opportunities. ACHE's 2025 hospital CEO survey places financial and workforce challenges at the top of the list.

Sources:
- [Experian Health — 2026 State of Patient Access Survey](https://www.experianplc.com/newsroom/press-releases/2026/experian-health-s-2026-state-of-patient-access-survey-reveals-pa)
- [American Hospital Association — Assessing the Health Care Environment for 2026](https://www.aha.org/aha-center-health-innovation-market-scan/2025-12-23-assessing-health-care-environment-2026-key-signals-field)
- [American College of Healthcare Executives — Top Issues Confronting Hospitals](https://www.ache.org/News-and-Insights/ACHE-Research/Research-Studies/Top-Issues-Confronting-Hospitals)
- [Vizient — 2025 Health System Performance Outlook](https://www.vizient.com/insights/reports/2025-health-system-performance-outlook-redefining-performance-in-an-era-of-financial-pressure)
- [McKinsey — Solving the Healthcare Access Challenge, February 2026](https://www.mckinsey.com/industries/healthcare/our-insights/solving-the-healthcare-access-challenge)

## Six researched pain points

1. **Patient access, referrals and appointment coordination.** Long waits, fragmented referral hand-offs, missed appointments and limited visibility into available capacity delay care.
2. **Staffing and workforce capacity.** Shortages, rota complexity, uneven workloads and time spent on administration reduce time available for patient-facing work.
3. **Prior authorisation, eligibility and insurance verification.** Repeated checks, payer response delays and incomplete submissions cause care delays and rework.
4. **Revenue-cycle leakage and claims denials.** Coding/documentation gaps, eligibility errors, missing information, delayed billing and weak denial analysis affect cash flow.
5. **Clinical and operational documentation burden.** Notes, forms, discharge summaries, referrals, correspondence and records require repetitive capture and reconciliation.
6. **Fragmented patient and operational information.** Data spread across EHRs, laboratory systems, imaging, billing and scheduling tools limits coordinated decisions and reliable reporting.

## Universal dashboard

**Care Operations Command:** patient access and queue status, capacity, referrals, staffing, authorisation blockers, revenue-cycle work, documentation backlog, service-level indicators and exception escalation.

## Specialist dashboards

- **Patient Access & Capacity:** appointment demand, waitlists, referral stages, cancellations, no-shows and capacity by service.
- **Revenue Cycle & Authorisations:** eligibility, authorisation, coding/documentation gaps, denials, appeals, ageing and cash-cycle indicators.
- **Clinical Documentation Operations:** documentation completeness, note turnaround, discharge tasks, referral letters and record requests.
- **Workforce & Service Operations:** rota coverage, workload, staffing gaps, task allocation and operational hand-offs.
- **Quality, Safety & Compliance:** incidents, policy checks, audit evidence, follow-up actions and reporting deadlines.

## Priority workflows

- Referral received → data validation → triage to service → capacity check → appointment offer → reminders → attendance/outcome follow-up.
- Procedure request → eligibility check → authorisation requirements → document pack → payer follow-up → approval status → scheduling release.
- Encounter completion → documentation checks → coding support → billing readiness → claim submission → denial follow-up.
- Discharge → task checklist → summary draft → medication/review follow-up coordination → referral hand-off.
- Staff absence → capacity impact → rota options → manager approval → affected appointments/tasks reallocation.

## Agent suite

- **Patient Access Coordinator:** manages bounded scheduling, reminders and referral follow-up.
- **Referral Intake Agent:** validates referral information and identifies missing items.
- **Authorisation Assistant:** assembles payer requirements, checks status and prepares follow-ups.
- **Revenue-Cycle Assistant:** flags coding/documentation gaps and prepares denial/appeal evidence.
- **Clinical Documentation Assistant:** drafts structured administrative documentation from approved source material for clinician review.
- **Operations Analyst:** forecasts workload and highlights capacity bottlenecks.

## Reusable skills

Referral extraction; appointment and waitlist coordination; authorisation checklist creation; eligibility verification support; clinical document summarisation; discharge-pack assembly; coding-support evidence retrieval; denial categorisation; rota and capacity analysis; incident trend summaries.

**Guardrails:** no autonomous diagnosis, treatment recommendation, prescribing, triage that replaces clinical judgement, or final clinical record sign-off. Apply health-data privacy, role-based access, auditability and clinical validation.

---

# 4. Manufacturing & industrial operations

## Why this vertical

Manufacturers are investing in AI but still struggle to operationalise it across plants and supply networks. The Parsec 2026 global survey of 1,200 manufacturing leaders found 72% had adopted AI in some form, but only 10% had scaled it across operations. It highlights workforce constraints, fragmented systems, integration costs, data quality and supply-chain visibility. D&B's 2025 manufacturing pulse survey identifies regulatory changes, supply-chain resilience, critical-supplier dependency and data quality as key procurement challenges.

Sources:
- [Parsec — 2026 State of the Manufacturing Industry](https://www.parsec-corp.com/report-2026/the-state-of-the-manufacturing-industry)
- [Dun & Bradstreet — Manufacturing Pulse Survey 2025](https://www.dnb.com/content/dam/web/int/posts/pdf/DnB-Manufacturing-Survey-2025_Final.pdf)
- [Citrin Cooperman — 2026 Manufacturing and Distribution Pulse Survey](https://www.citrincooperman.com/Focused-Programs/Manufacturing-and-Distribution-Pulse-Survey-Report)

## Six researched pain points

1. **Unplanned downtime and maintenance coordination.** Equipment failures, reactive maintenance and disconnected maintenance records disrupt production and increase cost.
2. **Quality defects and inconsistent process control.** Defect detection, root-cause analysis, non-conformance handling and corrective actions can be slow or inconsistent.
3. **Supplier, material and supply-chain volatility.** Critical-supplier dependency, raw-material shortages, logistics disruption and weak tier-two visibility affect production plans.
4. **Legacy systems and fragmented plant data.** ERP, MES, SCADA, QMS, maintenance and spreadsheets do not always share consistent real-time context.
5. **Workforce shortages and knowledge loss.** Skilled technician gaps, training needs, shift handovers and dependence on experienced staff make operational knowledge difficult to retain.
6. **Cost, throughput and production planning pressure.** Balancing demand, capacity, inventory, labour, energy, yield and delivery commitments requires constant replanning.

## Universal dashboard

**Plant & Operations Command:** production status, output versus plan, downtime, quality, maintenance, material availability, workforce coverage, order commitments and active exceptions.

## Specialist dashboards

- **Production Control:** line status, work orders, schedule adherence, throughput, bottlenecks and yield.
- **Quality Intelligence:** defects, inspection results, non-conformances, root causes, corrective actions and traceability.
- **Maintenance & Asset Health:** asset condition, downtime, maintenance backlog, service history, parts and risk-based maintenance priorities.
- **Supply & Procurement:** supplier performance, material availability, purchase orders, shortages, lead times and disruption risk.
- **Workforce & Knowledge:** shift coverage, skills matrix, training status, handover notes and standard operating procedures.

## Priority workflows

- Machine alert → event classification → asset history retrieval → maintenance priority → technician assignment → parts check → repair record → return-to-service validation.
- Quality deviation → batch/line context → defect classification → containment task → root-cause investigation → corrective action → closure evidence.
- Material shortage → affected orders/lines → supplier and inventory context → alternative sourcing options → planner approval → schedule update.
- Production plan → demand and capacity check → constraints → scenario comparison → supervisor approval → work-order release.
- Shift handover → unresolved issues → maintenance/quality status → safety notes → next-shift briefing.

## Agent suite

- **Production Planner:** assembles constraints and proposes schedule scenarios.
- **Maintenance Coordinator:** triages alerts and prepares work orders.
- **Quality Investigator:** structures defect evidence and assists root-cause analysis.
- **Procurement & Supplier Monitor:** tracks material and supplier exceptions.
- **Shift Knowledge Assistant:** retrieves approved SOPs and shift history.
- **Operations Intelligence Analyst:** explains output, downtime, yield and cost variance.

## Reusable skills

Machine-event classification; maintenance log summarisation; SOP retrieval; production schedule analysis; bill-of-materials comparison; supplier risk summarisation; defect categorisation; non-conformance report drafting; shift handover generation; root-cause evidence assembly.

**Guardrails:** read-only integration first; no direct control of safety-critical machinery or PLC/SCADA commands in the initial product. Require validated sensor data and authorised human approval for operational changes.

---

# 5. Logistics, transport & supply chain

## Why this vertical

Logistics is a high-frequency coordination problem across shippers, carriers, warehouses, drivers, customers and suppliers. Descartes' 2026 transportation benchmark identifies freight cost management as the top challenge for shippers (35%) and logistics service providers (25%); real-time visibility is the leading system gap for shippers (27%). KPMG's 2026 supply-chain survey identifies talent shortages and logistics/transport costs as material constraints.

Sources:
- [Descartes — 2026 Transportation Management Benchmark Survey](https://www.descartes.com/resources/knowledge-center/2026-transportation-management-benchmark-survey)
- [KPMG — Risk Management and Resilience Emerge as Key Concern for Supply Chain Leaders, May 2026](https://kpmg.com/us/en/media/news/risk-management-resilience-supply-chain.html)

## Six researched pain points

1. **Limited end-to-end shipment visibility.** Status information is fragmented across carriers, telematics, warehouse systems, emails and manual updates.
2. **Freight and operating cost pressure.** Fuel, accessorials, empty miles, detention, demurrage and poor load utilisation erode margins.
3. **Capacity and carrier coordination.** Carrier availability, reliability, connectivity, sourcing and service performance are difficult to coordinate at scale.
4. **Inefficient routing and planning.** Static plans, changing demand, disruptions, vehicle constraints and delivery windows require continuous replanning.
5. **Warehouse and fulfilment friction.** Inventory inaccuracies, picking errors, dock congestion, labour allocation and poor hand-offs create delays.
6. **Disruption, compliance and exception management.** Weather, border delays, customs documentation, damaged goods, theft, fraud and missed delivery commitments need fast coordinated action.

## Universal dashboard

**Supply Chain Control Tower:** shipment/order status, on-time performance, cost per shipment, capacity, carrier performance, warehouse queues, exceptions, risk alerts and customer-impact estimates.

## Specialist dashboards

- **Transport & Fleet:** vehicle status, route plans, utilisation, fuel, driver availability, maintenance and delivery performance.
- **Shipment Control Tower:** milestones, ETA confidence, delays, exception queues, customer notifications and proof of delivery.
- **Warehouse Operations:** inbound/outbound queues, inventory accuracy, picking/packing, labour and dock capacity.
- **Carrier & Procurement:** carrier rates, capacity, service levels, compliance, contract terms and invoice exceptions.
- **Supply & Disruption Risk:** supplier signals, critical lanes, border/weather events, inventory exposure and contingency plans.

## Priority workflows

- Order release → load planning → carrier selection → route optimisation → dispatch → milestone tracking → ETA updates → proof of delivery → invoice reconciliation.
- Delay signal → shipment/customer impact → alternative route or carrier options → dispatcher approval → customer notification → resolution tracking.
- Purchase order → supplier confirmation → inbound shipment → warehouse slot → receipt reconciliation → shortage/damage case.
- Freight invoice → contract/rate validation → accessorial check → discrepancy case → approval/payment.
- Driver/vehicle exception → safety and compliance checks → dispatch review → reassignment or recovery plan.

## Agent suite

- **Dispatch Planner:** prepares load and route options against constraints.
- **Shipment Tracking Agent:** reconciles milestones and explains ETA changes.
- **Carrier Sourcing Assistant:** compares approved carriers, rates and service history.
- **Warehouse Flow Coordinator:** prioritises receiving, picking and dispatch queues.
- **Freight Audit Agent:** compares invoices against contracts, rates and shipment events.
- **Disruption Response Agent:** builds impact summaries and recovery options.

## Reusable skills

Route and load optimisation; ETA estimation; shipment event reconciliation; carrier scorecards; freight invoice auditing; proof-of-delivery extraction; customs document checks; exception summarisation; warehouse queue prioritisation; disruption scenario analysis.

**Guardrails:** human approval for dispatch, carrier award, route changes with safety implications, customer commitments and financial settlements. Track source timestamps and confidence for all live status estimates.

---

# 6. Retail, commerce & consumer goods

## Why this vertical

Retail combines fast-moving demand, inventory, pricing, customer service, fulfilment and loss prevention. Deloitte's 2026 Global Retail Outlook highlights the collision of rising expectations for convenience, value and personalisation with cost pressure and operational complexity. DOSS's 2026 inventory research found 51% of retail professionals sometimes proceed with forecasts they consider unreliable, while 64% of surveyed organisations had not deployed AI/ML for inventory management. Appriss Retail's 2026 benchmark estimates substantial preventable losses from returns abuse and shrink.

Sources:
- [Deloitte — 2026 Global Retail Industry Outlook](https://www.deloitte.com/global/en/Industries/consumer/perspectives/global-retail-industry-outlook.html)
- [DOSS — Inventory Stressors Affecting Teams in 2026](https://www.doss.com/resources/research/top-inventory-stressors-affecting-teams)
- [Appriss Retail — 2026 Total Retail Loss Benchmark Report](https://apprissretail.com/2026-total-retail-loss-benchmark-report/)
- [McGrathNicol — Working Capital Report 2026: Retail](https://www.mcgrathnicol.com/working-capital-report-2026/retail/)

## Six researched pain points

1. **Unreliable demand forecasting.** Promotions, seasonality, social trends, weather and fast-changing consumer behaviour make forecasts difficult to trust.
2. **Inventory imbalance and working capital pressure.** Overstock, stockouts, slow-moving items and poor inventory visibility tie up cash and damage availability.
3. **Returns, shrinkage and transaction abuse.** Return fraud, policy abuse, employee theft, inventory errors and organised retail crime create preventable losses.
4. **Omnichannel fulfilment complexity.** Store, warehouse, marketplace and direct-to-consumer orders compete for inventory and fulfilment capacity.
5. **Margin and pricing pressure.** Promotions, supplier costs, markdowns, assortment choices and price changes require more coordinated decisions.
6. **Customer experience and service workload.** High enquiry volumes, inconsistent product information, order-status questions and personalisation expectations challenge service teams.

## Universal dashboard

**Commerce Operations Command:** sales, gross margin, inventory health, forecast confidence, fulfilment, returns, shrink, customer service and supplier exceptions.

## Specialist dashboards

- **Demand & Merchandising:** forecast accuracy, SKU performance, promotion lift, assortment, pricing and markdown exposure.
- **Inventory & Replenishment:** stock cover, stockouts, excess stock, transfers, reorder suggestions and supplier lead times.
- **Omnichannel Fulfilment:** order queues, fulfilment source, pick/pack status, delivery promises, cancellations and returns.
- **Customer Intelligence:** enquiries, sentiment, product questions, service levels, repeat issues and retention signals.
- **Loss Prevention & Returns:** return patterns, suspicious transactions, inventory discrepancies, shrink categories and investigation cases.

## Priority workflows

- Sales and external signals → demand forecast → stock-risk detection → replenishment proposal → buyer approval → purchase order.
- Online order → inventory source selection → pick/pack → dispatch → customer status → delivery exception handling.
- Return request → policy check → transaction history → risk score → approval/review → refund or exchange.
- Low-performing SKU → margin and stock analysis → promotion/markdown scenarios → approval → channel update.
- Customer enquiry → intent classification → order/product context → response or action → escalation if needed.

## Agent suite

- **Demand Planner:** creates forecasts and explains material changes.
- **Inventory Optimisation Agent:** identifies stockout/overstock risk and proposes replenishment or transfer actions.
- **Merchandising Analyst:** analyses SKU, promotion, margin and assortment performance.
- **Order Concierge:** handles bounded order, delivery and product enquiries.
- **Returns & Loss Analyst:** flags anomalous return patterns and prepares investigation cases.
- **Supplier Coordination Agent:** tracks purchase orders, confirmations and delivery exceptions.

## Reusable skills

Demand signal synthesis; forecast explanation; stock cover calculation; replenishment proposal; SKU and margin analysis; promotion analysis; returns pattern detection; product catalogue enrichment; order status resolution; customer enquiry classification.

**Guardrails:** preserve customer privacy; keep refund, pricing, markdown and loss-investigation decisions within approved limits; avoid unfair profiling and explain risk flags.

---

# 7. Construction, infrastructure & property

## Why this vertical

Construction is document-heavy, multi-party and highly exposed to schedule, cost, labour and coordination problems. RICS' 2026 construction productivity research references global construction productivity growth of only 0.4% annually from 2000–2022, compared with about 2% for the total economy. Mastt's 2026 construction project-management survey identifies reporting, document management, cost forecasting and contract administration as high-interest AI tasks. BDO's 2026 construction report points to subdued productivity and low formal AI governance maturity.

Sources:
- [RICS — Construction Productivity Report 2026](https://www.rics.org/news-insights/rics-construction-productivity-report-2026)
- [Mastt — State of AI in Construction Project Management 2026](https://www.mastt.com/research/ai-in-construction-project-management-2026)
- [BDO — 2026 Construction Report](https://www.bdo.com.au/en-au/insights/real-estate-construction/bdo-s-2026-construction-report)

## Six researched pain points

1. **Project reporting and fragmented progress visibility.** Site updates, contractor reports, schedules, photos and cost data are dispersed, making reliable project status difficult.
2. **Cost overruns and weak cost forecasting.** Labour, materials, plant, variations and delayed approvals create budget uncertainty and margin pressure.
3. **Schedule delays and resource coordination.** Dependencies, subcontractors, weather, materials, equipment and workforce availability make programme control difficult.
4. **Document and contract administration.** RFIs, submittals, drawings, contracts, change orders, meeting minutes and correspondence create high-volume administrative work.
5. **Procurement and supply uncertainty.** Material lead times, supplier reliability, price changes and purchase-order tracking can disrupt site progress.
6. **Quality, safety and compliance evidence.** Inspections, non-conformances, toolbox talks, permits, incidents and regulatory evidence need consistent capture and follow-through.

## Universal dashboard

**Project Delivery Command:** project health, schedule variance, cost-to-complete, work-package status, procurement, RFIs/submittals, change orders, site issues, safety/quality actions and document ageing.

## Specialist dashboards

- **Project Controls:** milestones, critical path, progress, dependencies, schedule variance and recovery plans.
- **Cost & Commercial:** budget, commitments, actuals, forecasts, variations, claims, payment applications and margin exposure.
- **Procurement & Materials:** requisitions, purchase orders, supplier lead times, delivery status and material shortages.
- **Document & Contract Control:** drawings, revisions, RFIs, submittals, transmittals, contract obligations and response deadlines.
- **Site Quality & Safety:** inspections, defects, non-conformances, permits, incidents, corrective actions and evidence.
- **Property & Facilities (adjacent extension):** asset register, maintenance requests, planned maintenance, contractor SLAs and lifecycle costs.

## Priority workflows

- Daily site report → extract progress, labour, plant, weather and blockers → compare with programme → highlight variance → prepare project-manager review.
- RFI received → classify → identify drawing/specification context → assign owner → track response deadline → update affected work package.
- Variation/change event → source evidence → contract clause lookup → cost/time impact draft → commercial review → approval and register update.
- Material requirement → procurement check → supplier quote comparison → lead-time risk → approval → delivery tracking.
- Inspection → checklist/evidence capture → defect classification → responsible party → corrective action → reinspection → close-out pack.
- Invoice/payment application → contract and progress evidence → quantity/variation reconciliation → exception review → approval.

## Agent suite

- **Project Reporting Agent:** consolidates site and contractor updates into a consistent project picture.
- **Schedule Intelligence Agent:** identifies dependencies, slippage and recovery scenarios.
- **Cost & Variation Assistant:** assembles commercial evidence and drafts change-event summaries.
- **Document Controller Agent:** classifies, versions, routes and tracks project documents.
- **Procurement Coordinator:** monitors materials, suppliers and delivery risks.
- **Quality & Safety Evidence Assistant:** prepares inspection and corrective-action records for authorised review.
- **Facilities Operations Agent:** triages maintenance requests and tracks contractor performance.

## Reusable skills

Daily report extraction; drawing/specification retrieval; RFI classification; contract clause retrieval; variation evidence assembly; programme variance analysis; cost-to-complete support; procurement comparison; inspection checklist generation; defect tracking; handover pack compilation.

**Guardrails:** no autonomous certification, engineering approval, safety sign-off, contract acceptance, payment authorisation or design instruction. All outputs must retain source references, drawing revisions and accountable human approval.

---

# 8. Product build sequence

Do not attempt to build six complete operating systems simultaneously. Establish a reusable platform, prove it with one vertical, then replicate the architecture while retaining genuine industry differences.

## Phase A — shared platform

1. Identity, roles and organisation/workspace model.
2. Universal Operations Dashboard shell and configurable KPI cards.
3. Work/case/task model with assignment, status, SLA, priority and audit history.
4. Workflow orchestration with triggers, conditions, approvals, retries and exception queues.
5. Agent registry with permissions, tools, status, runs, traces and human escalation.
6. Document ingestion, source-linked extraction, search and knowledge retrieval.
7. Integration framework and event log.
8. Evaluation, observability, governance and security controls.

## Phase B — vertical pilots

| Order | Vertical pilot | First workflow to prove |
|---|---|---|
| 1 | Financial services & insurance | Document-led case/claims intake, validation and triage |
| 2 | Construction | Daily reporting, RFI/document control and project exceptions |
| 3 | Logistics | Shipment visibility, delay exceptions and freight reconciliation |
| 4 | Manufacturing | Quality/maintenance exception management |
| 5 | Healthcare | Referral/authorisation and administrative workflow coordination |
| 6 | Retail | Demand/inventory exceptions and returns analysis |

This pilot order is a recommended build sequence, not a statement that the first two verticals are the only target markets. It prioritises workflows that can demonstrate document intelligence, case management, operational dashboards and agent orchestration without initially requiring autonomous high-risk decisions.

## Phase C — replicate and specialise

For each vertical:
1. Confirm buyer personas and economic owner.
2. Validate the six pain points with interviews and local/regional research.
3. Define measurable baseline KPIs and target outcomes.
4. Build the Universal Operations Dashboard for that vertical.
5. Build the specialist dashboards that directly address the validated pain points.
6. Implement the highest-value workflow first.
7. Add bounded agents and reusable skills.
8. Integrate with the systems already used by the target customer.
9. Add evaluation, audit and human-approval controls.
10. Test with representative data before production deployment.

## Common product acceptance criteria

- Every KPI has a clear definition, source and refresh timestamp.
- Every work item has an owner, status, priority and next action.
- Every agent action is traceable and permission-scoped.
- Every generated factual answer links back to source material.
- Every high-impact action has a configurable human approval step.
- Failed integrations and agent runs create visible exceptions rather than silently disappearing.
- The dashboard distinguishes actual, forecast, estimated and model-generated values.
- Performance is measured against a customer baseline, not invented marketing claims.

## Initial recommendation

Build the shared platform and the first financial-services/insurance workflow as the proving ground, while designing the data model so the same engine can support the other five sectors. Construction should be the second vertical pilot because its document, reporting, commercial and project-control workflows exercise the same core platform in a distinctly different operating environment.

The six-industry strategy remains internal until the product architecture, proof points and go-to-market choices are validated.
