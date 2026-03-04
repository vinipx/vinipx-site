import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Expertise } from "./components/expertise";
import { Portfolio } from "./components/portfolio";
import { Insights } from "./components/insights";
import { Timeline } from "./components/timeline";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="insights">
          <Insights />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
