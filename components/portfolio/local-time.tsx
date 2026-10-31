"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-GB", {
        timeZone: site.timezone,
        hour: "2-digit",
        minute: "2-digit",
      });
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className}>
      Da Nang <span className="tabular-nums text-ink-2">{time ?? "--:--"}</span> GMT+7
    </span>
  );
}
