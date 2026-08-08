"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");
  const [offset, setOffset] = useState("GMT+2");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          timeZone: "Europe/Belgrade",
        })
      );
      try {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Belgrade",
          timeZoneName: "shortOffset",
        }).formatToParts(now);
        const tz = parts.find((p) => p.type === "timeZoneName");
        if (tz) setOffset(tz.value);
      } catch (_) {}
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <span>{time || " "}</span>
      <span>{`Belgrade (${offset})`}</span>
    </>
  );
}
