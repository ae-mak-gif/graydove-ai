import { Gallery } from "@/components/gallery";
import { PageTransition } from "@/components/transition";

export default function Home() {
  return (
    <PageTransition>
      <section className="home-intro">
        <div className="intro-kicker">
          <span>GRAYDOVE / INDEPENDENT AI AGENCY</span>
          <span>PROJECTS / 01—08</span>
        </div>
        <div className="intro-bottom">
          <h1>Intelligence, <em>in motion.</em></h1>
          <p>Selected explorations in autonomous agents, intelligent workflows and systems designed to move work forward.</p>
          <span className="intro-index">AN OPEN COLLECTION · 2026</span>
        </div>
      </section>
      <Gallery />
    </PageTransition>
  );
}
