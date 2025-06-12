"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Meteor {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  opacity: number;
  tail: { x: number; y: number }[];
  tailLength: number;
}

interface ThemeColors {
  background: string;
  meteorHead: string;
  meteorTailStart: string;
  meteorTailMiddle: string;
  meteorTailEnd: string;
}

export default function MeteorShower({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Main animation logic
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0 || !mounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Define theme colors
    const themeColors: ThemeColors =
      theme === "dark"
        ? {
            background: "#000000",
            meteorHead: "rgba(255, 255, 255, 1)",
            meteorTailStart: "rgba(255, 255, 255, 1)",
            meteorTailMiddle: "rgba(255, 240, 200, 0.8)",
            meteorTailEnd: "rgba(255, 200, 100, 0.1)"
          }
        : {
            background: "#ffffff", // Light blue sky
            meteorHead: "rgba(70, 90, 120, 1)",
            meteorTailStart: "rgba(70, 90, 120, 1)",
            meteorTailMiddle: "rgba(100, 120, 150, 0.8)",
            meteorTailEnd: "rgba(130, 150, 180, 0.1)"
          };

    // Create meteors with varied starting positions
    const createMeteor = (): Meteor => {
      // Determine a random starting position across the screen
      // We'll use different edges and positions for variety

      // Random position factor (0-1)
      const positionFactor = Math.random();

      // Choose a starting position based on screen dimensions
      let x, y;

      // Start from left side of screen
      if (positionFactor < 0.25) {
        x = -20;
        y = dimensions.height * Math.random() * 0.7; // Random position on left edge
      }
      // Start from top of screen
      else if (positionFactor < 0.5) {
        x = dimensions.width * Math.random();
        y = -20; // Just above the top edge
      }
      // Start from right side of screen
      else if (positionFactor < 0.75) {
        x = dimensions.width + 20;
        y = dimensions.height * Math.random() * 0.7; // Random position on right edge
      }
      // Start from middle-top area
      else {
        x = dimensions.width * 0.3 + Math.random() * dimensions.width * 0.4; // Middle 40% of screen width
        y = -20;
      }

      // Random size between 1 and 3
      const size = 1 + Math.random() * 10;

      // Medium-slow speed (consistent for all meteors)
      const speed = 3;

      // Fixed angle for consistent direction (45 degrees in radians)
      const angle = Math.PI / 4;

      // Fixed tail length
      const tailLength = 15;

      return {
        x,
        y,
        size,
        speed,
        angle,
        opacity: 0.7 + Math.random() * 0.3,
        tail: [],
        tailLength
      };
    };

    // Initialize meteors
    meteorsRef.current = Array.from({ length: 5 }, createMeteor);

    // Animation loop
    const animate = () => {
      // Fill with theme background
      ctx.fillStyle = themeColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw meteors
      meteorsRef.current.forEach((meteor, index) => {
        // Update position
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;

        // Add current position to tail
        meteor.tail.unshift({ x: meteor.x, y: meteor.y });

        // Limit tail length
        if (meteor.tail.length > meteor.tailLength) {
          meteor.tail.pop();
        }

        // Draw meteor tail (gradient line)
        if (meteor.tail.length > 1) {
          ctx.beginPath();

          // Create gradient for tail
          const gradient = ctx.createLinearGradient(
            meteor.tail[0].x,
            meteor.tail[0].y,
            meteor.tail[meteor.tail.length - 1].x,
            meteor.tail[meteor.tail.length - 1].y
          );

          gradient.addColorStop(0, themeColors.meteorTailStart.replace("1)", `${meteor.opacity})`));
          gradient.addColorStop(
            0.3,
            themeColors.meteorTailMiddle.replace("0.8)", `${meteor.opacity * 0.8})`)
          );
          gradient.addColorStop(
            1,
            themeColors.meteorTailEnd.replace("0.1)", `${meteor.opacity * 0.1})`)
          );

          ctx.strokeStyle = gradient;
          ctx.lineWidth = meteor.size;

          // Draw the tail path
          ctx.moveTo(meteor.tail[0].x, meteor.tail[0].y);
          for (let i = 1; i < meteor.tail.length; i++) {
            ctx.lineTo(meteor.tail[i].x, meteor.tail[i].y);
          }

          ctx.stroke();
        }

        // Draw meteor head (small circle)
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.meteorHead.replace("1)", `${meteor.opacity})`);
        ctx.fill();

        // Reset meteor if it goes off screen
        if (meteor.y > dimensions.height || meteor.x < -50 || meteor.x > dimensions.width + 50) {
          meteorsRef.current[index] = createMeteor();
        }
      });

      // Add new meteors randomly
      if (Math.random() < 0.02 && meteorsRef.current.length < 12) {
        meteorsRef.current.push(createMeteor());
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, theme, mounted]);

  return (
    <div className={cn("relative w-full", className)}>
      <canvas
        ref={canvasRef}
        className="absolute h-full w-full"
        style={{ display: dimensions.width > 0 ? "block" : "none" }}
      />
      <div className="z-10">{children}</div>
    </div>
  );
}
