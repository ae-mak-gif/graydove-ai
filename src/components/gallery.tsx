"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Grid2X2, Layers3 } from "lucide-react";
import { projects, categories } from "@/data/projects";

const OrbitalScene = dynamic(() => import("./orbital-scene").then((m) => m.OrbitalScene), {
  ssr: false,
  loading: () => <div className="orbital-placeholder" />
});

const positions = ["panel-a", "panel-b", "panel-c", "panel-d", "panel-e", "panel-f", "panel-g", "panel-h"];

export function Gallery() {
  const [category, setCategory] = useState("All");
  const [mode, setMode] = useState<"overview" | "index">("overview");
  const [active, setActive] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const root = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => projects.filter((project) => category === "All" || project.category === category),
    [category]
  );

  useEffect(() => {
    const element = root.current;
    if (!element || reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(".gallery-toolbar", { y: 18, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%" }
      });
      gsap.fromTo(".gallery-bottom", { opacity: 0 }, {
        opacity: 1,
        duration: 0.7,
        scrollTrigger: { trigger: element, start: "top 72%" }
      });
    }, element);
    return () => context.revert();
  }, [reduce]);

  useEffect(() => {
    if (reduce || mode !== "overview") return;
    const element = root.current;
    if (!element) return;
    const move = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      setPointer({
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5
      });
    };
    element.addEventListener("pointermove", move);
    return () => element.removeEventListener("pointermove", move);
  }, [reduce, mode]);

  return (
    <section className="gallery-section" ref={root} aria-label="Selected AI projects">
      <div className="gallery-toolbar">
        <div className="gallery-count">
          <span className="eyebrow">Selected explorations</span>
          <span className="count-number">{String(filtered.length).padStart(2, "0")} <i>/ {String(projects.length).padStart(2, "0")}</i></span>
        </div>
        <div className="filters" aria-label="Filter projects">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="view-switch" aria-label="Gallery view">
          <button type="button" aria-pressed={mode === "overview"} onClick={() => setMode("overview")} className={mode === "overview" ? "selected" : ""}>
            <Layers3 size={13} /> Overview
          </button>
          <button type="button" aria-pressed={mode === "index"} onClick={() => setMode("index")} className={mode === "index" ? "selected" : ""}>
            <Grid2X2 size={13} /> Index
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === "overview" ? (
          <motion.div key="overview" className="gallery-canvas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="gallery-orbit">
              <OrbitalScene />
              <span>FIG. 01 — INTELLIGENCE IN MOTION</span>
            </div>
            {filtered.map((project, index) => {
              const position = positions[projects.findIndex((item) => item.slug === project.slug)] || "panel-a";
              return (
                <motion.div
                  key={project.slug}
                  layout
                  className={"project-panel " + position + (active === project.slug ? " is-active" : "")}
                  initial={{ opacity: 0, scale: 0.94, y: 18 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: reduce ? 0 : pointer.x * (index % 2 === 0 ? 9 : -7),
                    y: reduce ? 0 : pointer.y * (index % 2 === 0 ? -7 : 8)
                  }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.65, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActive(project.slug)}
                  onMouseLeave={() => setActive(null)}
                >
                  <Link href={"/project/" + project.slug} className={"panel-link " + project.layout}>
                    <div className="panel-image">
                      <Image src={project.image} alt={project.title + " full-colour AI interface concept"} fill sizes="(max-width: 700px) 70vw, 34vw" priority={index < 3} />
                      <span className="panel-open"><ArrowUpRight size={16} /></span>
                    </div>
                    <div className="panel-meta">
                      <span>{project.number} / {project.title}</span>
                      <span>{project.category}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
            <div className="gallery-note">
              <span>AN ONGOING COLLECTION</span>
              <span>Ideas in motion, systems in progress.</span>
            </div>
          </motion.div>
        ) : (
          <motion.div key="index" className="project-index" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <div className="index-heading"><span>NO.</span><span>PROJECT</span><span>DISCIPLINE</span><span>YEAR</span><span /></div>
            {filtered.map((project) => (
              <Link className="index-row" key={project.slug} href={"/project/" + project.slug}>
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <span>{project.category}</span>
                <span>{project.year}</span>
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="gallery-bottom">
        <span>01 — {String(projects.length).padStart(2, "0")} / EXPERIMENTS & SYSTEMS</span>
        <span>Scroll to explore <ArrowDown size={13} /></span>
      </div>
    </section>
  );
}
