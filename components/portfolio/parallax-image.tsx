"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Shot } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Screenshot that drifts slightly against its frame while scrolling. */
export function ParallaxImage({
  shot,
  sizes,
  preload,
  className,
}: {
  shot: Shot;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "4%"]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div className="absolute -inset-y-[5%] inset-x-0" style={{ y }}>
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes={sizes}
          preload={preload}
          className="shot h-full w-full object-cover object-top group-hover:scale-[1.025]"
        />
      </motion.div>
    </div>
  );
}
