"use client";

import { useState } from "react";
import styles from "./page.module.css";

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

export default function ProjectCard({ project }) {
  const slides = project.slides;
  const isCarousel = slides.length > 1;
  const [current, setCurrent] = useState(0);

  return (
    <section className={styles.projectSection}>
      <div className={styles.cardContainer}>
        <div className={styles.projTitle}>{project.title}</div>

        <div className={styles.projMediaClean}>
          <div className={styles.mediaBlock}>
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title}${isCarousel ? ` — slide ${i + 1}` : ""}`}
                className={i === current ? styles.slideActive : styles.slide}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>

        <div className={styles.projFooter}>
          {isCarousel ? (
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === current}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                />
              ))}
            </div>
          ) : (
            <span />
          )}
          <Tags tags={project.tags} />
        </div>
      </div>
    </section>
  );
}
