import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Gallery } from "@/components/gallery";
import { PageTransition } from "@/components/transition";

export const metadata: Metadata = {
  title: "Independent AI Agency",
  description: "GRAYDOVE is an independent AI agency designing and building agents, intelligent workflows and connected AI systems."
};

export default function Home() {
  return <PageTransition>
    <section className="gd-home-intro">
      <div className="gd-home-intro-top"><span>INDEPENDENT AI AGENCY</span><span>STRATEGY / DESIGN / ENGINEERING</span></div>
      <div className="gd-home-intro-main">
        <h1>Intelligence,<br/><em>designed into the work.</em></h1>
        <div className="gd-home-intro-copy">
          <p>GRAYDOVE designs and builds AI agents, connected workflows and intelligent systems that help people do meaningful work better.</p>
          <Link href="/studio" className="gd-home-studio-link">Discover the studio <ArrowUpRight size={14}/></Link>
        </div>
      </div>
      <div className="gd-home-intro-bottom"><span>THOUGHTFUL BY DESIGN</span><span>BUILT FOR REAL WORK</span></div>
    </section>
    <section className="gd-home-projects" id="explorations">
      <div className="gd-home-projects-heading"><span>SELECTED EXPLORATIONS</span><span>IDEAS / INTERFACES / SYSTEMS</span></div>
      <Gallery/>
    </section>
    <section className="gd-home-end">
      <div><span>HAVE A QUESTION?</span><h2>Bring us the<br/><em>hard question.</em></h2></div>
      <div><p>Bring us a process that needs rethinking, a problem worth solving or an idea you want to explore.</p><Link href="/contact">Start a conversation <ArrowUpRight size={15}/></Link></div>
    </section>
  </PageTransition>;
}
