import Clock from "./Clock";
import styles from "./page.module.css";

const projects = [
  { title: "Cloudsquid", tags: ["AI", "Startup"], image: "/images/cloudsquid.png" },
  { title: "Fairgen", tags: ["AI", "Startup"], image: "/images/fairgen.png" },
  {
    title: "Prophet, Black Hat 2026 Page",
    tags: ["AI", "Startup"],
    image: "/images/prophet.png",
  },
  { title: "Perimeter8", tags: ["Cybersecurity"], image: "/images/perimeter8.png" },
  { title: "MOXFIVE", tags: ["Cybersecurity"], image: "/images/moxfive.png" },
  { title: "Omlet", tags: ["AI", "Startup"], image: "/images/omlet.png" },
  {
    title: "Everest Carbon",
    tags: ["Environment", "Startup"],
    image: "/images/everest.png",
  },
  {
    title: "Desnis, World Cup 2026 Page",
    tags: ["Agency", "Marketing"],
    image: "/images/desnis-worldcup.png",
  },
  {
    title: "Desnis, Homepage",
    tags: ["Agency", "Marketing"],
    image: "/images/desnis-homepage.png",
  },
];

const artworks = [
  { title: "GDESTE", tags: ["Agency", "Marketing"], image: "/images/gdeste.png" },
  { title: "TANKA NIT", tags: ["Agency", "Marketing"], image: "/images/tankanit.png" },
];

function Dots() {
  return (
    <div className={styles.dots}>
      <span className={`${styles.dot} ${styles.dotActive}`} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}

function Tags({ tags }) {
  return (
    <div className={styles.tags}>
      {tags.map((t) => (
        <span key={t} className={styles.tag}>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
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
            opportunity to work with raw talent across the AI and tech industry.
          </p>
          <p>
            We live in a world, which comes into life only through encounter.
            Feel free to contact me for a free <span className={styles.cal}>Cal</span>
            -Conversation on your idea.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        {projects.map((p) => (
          <article key={p.title} className={styles.project}>
            <div className={styles.projTitle}>{p.title}</div>
            <div className={styles.projMedia}>
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className={styles.projFooter}>
              <Dots />
              <Tags tags={p.tags} />
            </div>
          </article>
        ))}
      </section>

      {/* Artworks */}
      <p className={styles.artHeading}>
        Sometimes I make house tunes, and artworks for them.
      </p>
      <section className={styles.artGrid}>
        {artworks.map((a) => (
          <article key={a.title} className={styles.artItem}>
            <div className={styles.artMedia}>
              <img src={a.image} alt={a.title} loading="lazy" />
            </div>
            <div className={styles.artFooter}>
              <Tags tags={a.tags} />
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>Stevan Stojanovic &copy; 2026</span>
        <Clock />
      </footer>
    </main>
  );
}
