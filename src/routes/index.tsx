import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import imgChandelier from "@/assets/projects/dining-chandelier.png";
import imgPassthrough from "@/assets/projects/passthrough.png";
import imgKitchen1 from "@/assets/projects/kitchen-1.png";
import imgKitchen2 from "@/assets/projects/kitchen-2.png";
import imgBathroom from "@/assets/projects/bathroom.png";
import imgBeforeAfter from "@/assets/projects/before-after.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "K&H Construction — Brooklyn Home Building, Remodeling & Kitchens" },
      {
        name: "description",
        content:
          "Family-owned general contractors in Brooklyn, NY. Kitchen remodels, bathrooms, additions, masonry & full home renovations — licensed, insured, free estimates.",
      },
      { property: "og:title", content: "K&H Construction — Brooklyn, NY" },
      { property: "og:description", content: "Quality you can stand on. Brooklyn's trusted remodelers since day one." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
});

const services = [
  { n: "01", t: "Kitchen Remodeling", d: "Custom cabinetry, quartz & marble countertops, islands built to anchor the room — from layout to last detail." },
  { n: "02", t: "Bathroom Renovations", d: "Spa-grade tile work, frameless glass, modern vanities. Quiet, clean installs that respect your home." },
  { n: "03", t: "Home Building & Additions", d: "New rooms, full additions, top-to-bottom rebuilds. Engineered to code, finished like a showpiece." },
  { n: "04", t: "Masonry & Concrete", d: "Brick, stone, retaining walls, patios and waterproofing. Structural work that lasts decades." },
  { n: "05", t: "Interior & Exterior Painting", d: "Surface prep done right, premium finishes, sharp lines — interiors and façades alike." },
];

const reviews = [
  { q: "K&H Construction did an amazing job on my bathroom remodel. Huzi is really professional and the quality of their work was outstanding. My bathroom now looks modern and beautiful.", a: "Hanan Farooq" },
  { q: "I wanted a kitchen island that looked like it was made of bricks to match the historic brick walls in the living room — they absolutely nailed it.", a: "Yahya Mudassar" },
  { q: "When National Grid turned off my gas because of old valves on my boiler, I didn't know where to start. So thankful for K&H — they took care of everything.", a: "Emma Greco" },
  { q: "The team at K&H did an excellent job rejuvenating my house. Utmost professionals and masters of their craft.", a: "Humza Iqbal" },
  { q: "Khizar and his team did an outstanding job with our waterproofing and masonry. Exceptional quality.", a: "Nabiha Farooq" },
  { q: "Family owned, very professional, and worked around every surprise that came up. Couldn't be happier with the result.", a: "Fahad Khan" },
];

const projects = [
  { src: imgChandelier, t: "Dining Bar Build-Out", l: "Brooklyn, NY" },
  { src: imgPassthrough, t: "Kitchen Pass-Through", l: "Sheepshead Bay" },
  { src: imgKitchen1, t: "Galley Kitchen Remodel", l: "Brooklyn, NY" },
  { src: imgKitchen2, t: "Calacatta Kitchen", l: "Brooklyn, NY" },
  { src: imgBathroom, t: "Spa Bathroom", l: "Brooklyn, NY" },
  { src: imgBeforeAfter, t: "Full Suite Renovation", l: "Hospitality" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="h-8 w-8 grid place-items-center bg-onyx text-bone font-display text-sm tracking-tight">K</span>
          <span className="font-display text-lg tracking-tight">K&amp;H Construction</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
        </nav>
        <a href="tel:+13478637961" className="inline-flex items-center gap-2 bg-onyx text-bone px-4 py-2 text-sm hover:bg-foreground/90 transition">
          <span className="hidden sm:inline">Free Estimate</span>
          <span className="sm:hidden">Call</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-16">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              <span className="h-px w-10 bg-foreground/40" />
              Brooklyn · Est. Family Owned
            </div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
              Built once.<br />
              <span className="italic font-light">Built right.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Custom kitchens, bathrooms, additions and masonry across Brooklyn — engineered with the
              precision of a craftsman and the care of a family business.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-onyx text-bone px-7 py-4 text-sm tracking-wide hover:bg-foreground/90 transition">
                Request a Free Estimate
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 px-2 py-4 text-sm border-b border-foreground/40 hover:border-foreground transition">
                View our work
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              {[
                ["5.0★", "Google rated"],
                ["Licensed", "& insured"],
                ["Free", "estimates"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-2xl">{k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 reveal" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={hero} alt="Modern marble kitchen renovated by K&H Construction" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
              <div className="absolute inset-0 ring-1 ring-foreground/10" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Project No. 042</span>
              <span>Sheepshead Bay, BK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Kitchens", "Bathrooms", "Additions", "Masonry", "Painting", "Waterproofing", "Concrete", "Renovations"];
  return (
    <div className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-5">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display italic text-2xl px-8 text-foreground/70">
            {it} <span className="text-accent not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
            A family business with a builder's standard.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            K&amp;H Construction is a Brooklyn-based general contractor specializing in residential
            and commercial remodeling — led by Khizar, Huzi and a tight-knit team that treats every
            project like it's their own home.
          </p>
          <p>
            We don't outsource the parts that matter. From the first walkthrough to the final coat
            of paint, the same craftsmen show up every day. That's how trim lines stay clean, tile
            lines stay straight, and timelines stay honest.
          </p>
          <p>
            Licensed, insured, and proudly serving Sheepshead Bay, Brighton Beach, Marine Park,
            Manhattan Beach and the wider New York area.
          </p>
          <div className="pt-8 grid sm:grid-cols-3 gap-6 text-foreground">
            {[
              ["Honest pricing", "No surprise invoices. Detailed scopes from day one."],
              ["Master craftsmen", "Decades of combined experience under one roof."],
              ["On-time delivery", "We work around your life, not the other way around."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-foreground/20 pt-5">
                <div className="font-display text-xl">{t}</div>
                <div className="text-sm text-muted-foreground mt-2">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-onyx text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-bone/50">Services</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight max-w-2xl">
              Everything your home needs, <span className="italic font-light">under one roof.</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm border-b border-bone/50 pb-1 hover:border-bone transition">Get a quote →</a>
        </div>
        <div className="border-t border-bone/15">
          {services.map((s) => (
            <div key={s.n} className="group grid md:grid-cols-12 gap-6 items-baseline border-b border-bone/15 py-8 lg:py-10 hover:bg-bone/[0.03] transition px-2 -mx-2">
              <div className="md:col-span-1 font-display text-sm text-accent">{s.n}</div>
              <div className="md:col-span-4 font-display text-2xl lg:text-3xl">{s.t}</div>
              <div className="md:col-span-6 text-bone/60 leading-relaxed">{s.d}</div>
              <div className="md:col-span-1 text-right text-bone/40 group-hover:text-accent group-hover:translate-x-1 transition">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected Work</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight max-w-2xl">
            Recent projects across <span className="italic font-light">Brooklyn.</span>
          </h2>
        </div>
        <a href="https://www.instagram.com/kandh_construction/" target="_blank" rel="noreferrer" className="text-sm border-b border-foreground/40 pb-1 hover:border-foreground transition">
          @kandh_construction →
        </a>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        <Tile p={projects[0]} className="col-span-12 md:col-span-7 aspect-[4/5] md:aspect-[5/6]" />
        <Tile p={projects[1]} className="col-span-12 md:col-span-5 aspect-[4/5] md:aspect-[5/6]" />
        <Tile p={projects[2]} className="col-span-6 md:col-span-4 aspect-[4/5]" />
        <Tile p={projects[3]} className="col-span-6 md:col-span-4 aspect-[4/5]" />
        <Tile p={projects[4]} className="col-span-12 md:col-span-4 aspect-[4/5]" />
        <Tile p={projects[5]} className="col-span-12 aspect-[16/9]" />
      </div>
    </section>
  );
}

function Tile({ p, className = "" }: { p: { src: string; t: string; l: string }; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden ${className}`}>
      <img src={p.src} alt={p.t} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent opacity-90" />
      <figcaption className="absolute bottom-0 inset-x-0 p-5 lg:p-7 text-bone flex items-end justify-between">
        <div>
          <div className="font-display text-xl lg:text-2xl">{p.t}</div>
          <div className="text-xs uppercase tracking-widest text-bone/70 mt-1">{p.l}</div>
        </div>
        <span className="text-bone/70 group-hover:text-accent transition">↗</span>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="bg-secondary/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="mb-16 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Word of mouth</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight">
            5.0 on Google. <span className="italic font-light">Earned, not bought.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {reviews.map((r, i) => (
            <blockquote key={i} className="bg-background p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="text-accent text-lg tracking-widest mb-5">★★★★★</div>
                <p className="font-display text-xl lg:text-2xl leading-snug text-balance">"{r.q}"</p>
              </div>
              <footer className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">— {r.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative bg-onyx text-bone overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-48">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.25em] text-bone/50">Ready when you are</div>
            <h2 className="mt-6 font-display text-5xl lg:text-8xl leading-[0.95] tracking-tight">
              Let's build something <span className="italic font-light text-accent">worth keeping.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-bone/70 leading-relaxed">
              Tell us about your project — kitchen, bathroom, addition, or full renovation. We'll
              walk the space, scope the work and get you a clear, honest estimate. Free of charge.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <a href="tel:+13478637961" className="group block border-t border-bone/30 pt-5">
              <div className="text-xs uppercase tracking-widest text-bone/50">Call</div>
              <div className="font-display text-3xl mt-1 group-hover:text-accent transition">(347) 863-7961</div>
            </a>
            <a href="https://www.instagram.com/kandh_construction/" target="_blank" rel="noreferrer" className="group block border-t border-bone/30 pt-5">
              <div className="text-xs uppercase tracking-widest text-bone/50">Instagram</div>
              <div className="font-display text-3xl mt-1 group-hover:text-accent transition">@kandh_construction</div>
            </a>
            <div className="border-t border-bone/30 pt-5">
              <div className="text-xs uppercase tracking-widest text-bone/50">Visit</div>
              <div className="font-display text-xl mt-1">2414 Bragg St, Brooklyn, NY 11235</div>
              <div className="text-sm text-bone/60 mt-1">Open daily · 9:00 AM – 9:00 PM</div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-4">
          <a href="tel:+13478637961" className="inline-flex items-center gap-3 bg-bone text-onyx px-8 py-5 text-sm tracking-wide hover:bg-accent hover:text-bone transition">
            Get My Free Estimate
            <span>→</span>
          </a>
          <span className="text-sm text-bone/60">No obligation · Licensed · Insured</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-onyx text-bone/60 border-t border-bone/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>© {new Date().getFullYear()} K&amp;H Construction Inc. — Brooklyn, NY</div>
        <div className="flex items-center gap-6">
          <span>General Contractors</span>
          <span>·</span>
          <span>Masonry / Concrete</span>
          <span>·</span>
          <span>Painters</span>
        </div>
      </div>
    </footer>
  );
}
