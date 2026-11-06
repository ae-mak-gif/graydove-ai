"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Grid2X2, Layers3 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects, categories } from "@/data/projects";

const UnveilGalleryScene = dynamic(() => import("./unveil-gallery-scene").then((module) => module.UnveilGalleryScene), {
  ssr: false,
  loading: () => <div className="unveil-scene-loading" />
});

export function Gallery() {
  const [category, setCategory] = useState("All");
  const [mode, setMode] = useState<"overview" | "index">("overview");
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const router = useRouter();
  const filtered = useMemo(() => projects.filter((project) => category === "All" || project.category === category), [category]);

  return <section className="gallery-section unveil-gallery" aria-label="Selected AI projects">
    <div className="gallery-toolbar unveil-toolbar">
      <div className="gallery-count">
        <span className="eyebrow">GRAYDOVE / PROJECTS</span>
        <span className="count-number">{String(filtered.length).padStart(2, "0")} <i>/ {String(projects.length).padStart(2, "0")}</i></span>
      </div>
      <div className="filters" aria-label="Filter projects">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <span className="unveil-hint">SELECT A PROJECT TO EXPLORE <ArrowUpRight size={12}/></span>
    </div>
    <div className="unveil-stage">
      <div className="unveil-stage-top"><span>SELECTED EXPLORATIONS</span><span>2026 — ONGOING</span></div>
      <AnimatePresence mode="wait">
        {mode === "overview" ? <motion.div key="overview" className="unveil-overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.65 }}>
          <UnveilGalleryScene projects={filtered} onSelect={(slug) => router.push("/project/" + slug)} onHover={setActive} active={active} reduced={!!reduce}/>
          <div className="unveil-mobile-grid">
            {filtered.map((project) => <Link key={project.slug} href={"/project/" + project.slug} className="unveil-mobile-card">
              <div><Image src={project.image} alt={project.title + " interface concept"} fill sizes="50vw"/></div>
              <span><b>{project.number} / {project.title}</b><i>{project.category}</i></span>
            </Link>)}
          </div>
        </motion.div> : <motion.div key="index" className="unveil-index" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: reduce ? 0 : 0.35 }}>
          <div className="unveil-index-head"><span>NO.</span><span>PROJECT</span><span>DISCIPLINE</span><span>YEAR</span><span/></div>
          {filtered.map((project) => <Link key={project.slug} className="unveil-index-row" href={"/project/" + project.slug}>
            <span>{project.number}</span><strong>{project.title}</strong><span>{project.category}</span><span>{project.year}</span><ArrowUpRight size={15}/>
          </Link>)}
        </motion.div>}
      </AnimatePresence>
      <div className="unveil-stage-bottom">
        <span>AN INDEPENDENT AI AGENCY</span>
        <div className="unveil-mode-switch" aria-label="Project view">
          <button type="button" onClick={() => setMode("overview")} aria-pressed={mode === "overview"} className={mode === "overview" ? "selected" : ""}><Layers3 size={13}/> OVERVIEW</button>
          <button type="button" onClick={() => setMode("index")} aria-pressed={mode === "index"} className={mode === "index" ? "selected" : ""}><Grid2X2 size={13}/> INDEX</button>
        </div>
      </div>
    </div>
  </section>;
}
