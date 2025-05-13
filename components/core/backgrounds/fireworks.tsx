"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;
  lifetime: number;
  size: number;
}

interface Firework {
  x: number;
  y: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  particles: Particle[];
  exploded: boolean;
  timeToExplode: number;
}

function FireworksBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireworksRef = useRef<Firework[]>([]);
  const animationFrameRef = useRef<number>(0);
  const lastFireworkTimeRef = useRef<number>(Date.now());

  const colors = [
    "#9b87f5", // purple
    "#D946EF", // magenta
    "#F97316", // orange
    "#0EA5E9", // blue
    "#ea384c", // red
    "#10B981", // green
    "#FCD34D", // yellow
  ];

  const createFirework = (x?: number, y?: number, targetY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const startX = x || Math.random() * canvas.width;
    const startY = canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.random() * Math.PI) / 2 - Math.PI / 4; // Random angle between -45 and 45 degrees
    const velocity = 6 + Math.random() * 4; // Random velocity between 6 and 10

    const target = targetY || canvas.height * (0.1 + Math.random() * 0.4); // Target height between 10% and 50% of canvas height

    const firework: Firework = {
      x: startX,
      y: startY,
      color,
      velocity: {
        x: Math.sin(angle) * velocity,
        y: -Math.cos(angle) * velocity * 1.5,
      },
      particles: [],
      exploded: false,
      timeToExplode: target,
    };

    fireworksRef.current.push(firework);
  };

  const explodeFirework = (firework: Firework) => {
    const particleCount = 60 + Math.floor(Math.random() * 40);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 5 + 1;

      firework.particles.push({
        x: firework.x,
        y: firework.y,
        color: firework.color,
        velocity: {
          x: Math.cos(angle) * velocity * (0.5 + Math.random()),
          y: Math.sin(angle) * velocity * (0.5 + Math.random()),
        },
        alpha: 1,
        lifetime: Math.random() * 30 + 30,
        size: Math.random() * 3 + 1,
      });
    }
  };

  const updateAndDraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const currentFireworks = fireworksRef.current;
    for (let i = 0; i < currentFireworks.length; i++) {
      const firework = currentFireworks[i];

      if (!firework.exploded) {
        firework.x += firework.velocity.x;
        firework.y += firework.velocity.y;
        firework.velocity.y += 0.1;

        ctx.beginPath();
        ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();

        if (
          firework.y <= firework.timeToExplode ||
          firework.velocity.y >= 0 ||
          firework.x < 0 ||
          firework.x > canvas.width
        ) {
          if (firework.y > 0 && firework.y < canvas.height) {
            explodeFirework(firework);
          }

          firework.exploded = true;
        }
      } else {
        for (let j = 0; j < firework.particles.length; j++) {
          const particle = firework.particles[j];

          particle.x += particle.velocity.x;
          particle.y += particle.velocity.y;
          particle.velocity.y += 0.05;
          particle.alpha -= 1 / particle.lifetime;

          if (particle.alpha <= 0.1) {
            firework.particles.splice(j, 1);
            j--;
            continue;
          }

          ctx.globalAlpha = particle.alpha;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        if (firework.particles.length === 0) {
          currentFireworks.splice(i, 1);
          i--;
        }
      }
    }

    const now = Date.now();
    if (now - lastFireworkTimeRef.current > 1000 + Math.random() * 2000) {
      const numberOfFireworks = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < numberOfFireworks; i++) {
        createFirework();
      }
      lastFireworkTimeRef.current = now;
    }

    animationFrameRef.current = requestAnimationFrame(updateAndDraw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    for (let i = 0; i < 3; i++) {
      createFirework();
    }
    lastFireworkTimeRef.current = Date.now();

    animationFrameRef.current = requestAnimationFrame(updateAndDraw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div className={cn("relative w-full", className)}>
      <canvas ref={canvasRef} className="absolute w-full inset-0 h-full" />
      {children}
    </div>
  );
}

export default FireworksBackground;
