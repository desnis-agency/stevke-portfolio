import Clock from "./Clock";
import ProjectCard from "./ProjectCard";
import styles from "./page.module.css";

const projects = [
  {
    title: "Cloudsquid",
    tags: ["AI", "Startup"],
    slides: [
      "/images/cloudsquid/slide-1.avif",
      "/images/cloudsquid/slide-2.avif",
      "/images/cloudsquid/slide-3.avif",
    ],
  },
  {
    title: "Fairgen",
    tags: ["AI", "Startup"],
    slides: ["/images/fairgen-1.avif", "/images/fairgen-2.avif"],
  },
  {
    title: "Prophet, Black Hat 2026 Page",
    tags: ["AI", "Startup"],
    slides: ["/images/prophet-1.avif", "/images/prophet-2.avif"],
  },
  {
    title: "Perimeter8",
    tags: ["Cybersecurity"],
    slides: ["/images/perimeter-1.avif", "/images/perimeter-2.avif"],
  },
  {
    title: "MOXFIVE",
    tags: ["Cybersecurity"],
    slides: ["/images/moxfive.avif"],
  },
  {
    title: "Omlet",
    tags: ["AI", "Startup"],
    slides: [
      "/images/omlet-1.avif",
      "/images/omlet-2.avif",
      "/images/omlet-3.avif",
    ],
  },
  {
    title: "Everest Carbon",
    tags: ["Environment", "Startup"],
    slides: [
      "/images/everest-1.avif",
      "/images/everest-2.avif",
      "/images/everest-3.avif",
    ],
  },
  {
    title: "Desnis, World Cup 2026 Page",
    tags: ["Agency", "Marketing"],
    slides: ["/images/worldcup.avif"],
  },
  {
    title: "Desnis, Homepage",
    tags: ["Agency", "Marketing"],
    slides: ["/images/desnis-1.avif", "/images/desnis-2.avif"],
  },
];

const tunes = [
  { title: "GDESTE", image: "/images/tune-1.avif" },
  { title: "TANKA NIT", image: "/images/tune-2.avif" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroName}>
            <div>Stevan Stojanovic</div>
            <div className={styles.dim}>Web Designer</div>
          </div>
          <div className={styles.heroIntro}>
            <p>Welcome.</p>
            <p>
              One could say I am a digital native. For some years now, I&rsquo;ve
              been working with startups who adhere to the tiniest details and
              operate in rapid environments .
            </p>
            <p>
              Apart from that, I am privileged to regularly be given the
              opportunity to work with raw talent across the AI and tech
              industry.
            </p>
            <p>
              We live in a world, which comes into life only through encounter.
              Feel free to contact me for a free{" "}
              <span className={styles.cal}>Cal</span>-Conversation on your idea.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Projects (one <section> per project) ---------- */}
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}

      {/* ---------- Tune / artwork heading (grid cols 7–9) ---------- */}
      <section>
        <div className={styles.tuneHeadingRow}>
          <p className={styles.tuneHeading}>
            Sometimes I make house tunes, and artworks for them.
          </p>
        </div>
      </section>

      {/* ---------- Tune artwork cards (not on the column grid) ---------- */}
      <section>
        <div className={styles.tuneContainer}>
          {tunes.map((t) => (
            <div className={styles.tuneCard} key={t.title}>
              <img
                src={t.image}
                alt={t.title}
                className={styles.tuneImg}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <section>
        <div className={styles.footerContainer}>
          <span className={styles.footerName}>Stevan Stojanovic &copy; 2026</span>
          <div className={styles.footerClock}>
            <Clock />
          </div>
        </div>
      </section>
    </main>
  );
}
