"use client";

import { useRef, useState } from "react";
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

// "Prophet, Black Hat 2026 Page" -> "Prophet," white + rest at 75% opacity
function Title({ text }) {
  const i = text.indexOf(",");
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i + 1)}
      <span className={styles.projTitleRest}>{text.slice(i + 1)}</span>
    </>
  );
}

export default function ProjectCard({ project }) {
  const slides = project.slides;
  const isCarousel = slides.length > 1;

  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [drag, setDrag] = useState(0); // live px offset while dragging
  const startX = useRef(0);
  const blockRef = useRef(null);

  const onPointerDown = (e) => {
    if (!isCarousel) return;
    startX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    setDrag(e.clientX - startX.current);
  };

  const endDrag = (e) => {
    if (!dragging) return;
    setDragging(false);
    const width = blockRef.current?.offsetWidth || 1;
    const dx = e.clientX - startX.current;
    const threshold = width * 0.15;
    let next = current;
    if (dx <= -threshold) next = Math.min(current + 1, slides.length - 1);
    else if (dx >= threshold) next = Math.max(current - 1, 0);
    setCurrent(next);
    setDrag(0);
  };

  const trackStyle = {
    transform: `translateX(calc(${-current * 100}% + ${drag}px))`,
    transition: dragging
      ? "none"
      : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <section className={styles.projectSection}>
      <div className={styles.cardContainer}>
        <div className={styles.projTitle}>
          <Title text={project.title} />
        </div>

        <div className={styles.projMediaClean}>
          <div
            className={styles.mediaBlock}
            ref={blockRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            style={{
              cursor: isCarousel ? (dragging ? "grabbing" : "grab") : "default",
            }}
          >
            <div
              className={styles.track}
              style={isCarousel ? trackStyle : undefined}
            >
              {slides.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title}${isCarousel ? ` — slide ${i + 1}` : ""}`}
                  className={styles.slideItem}
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
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
