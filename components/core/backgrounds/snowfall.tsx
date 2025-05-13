"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  wind: number;
  amplitude: number;
  frequency: number;
  angle: number;
}

export default function SnowfallBackground({
  children,
  count = 100,
  minRadius = 1,
  maxRadius = 4,
  minSpeed = 0.5,
  maxSpeed = 2,
  wind = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  minSpeed?: number;
  maxSpeed?: number;
  wind?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Helper function to create a natural distribution
  const naturalDistribution = () => {
    // Use a weighted random approach to create more realistic distribution
    const r = Math.random();

    // 30% chance of very little movement (almost straight down)
    if (r < 0.3) {
      return 0.1 + Math.random() * 0.3; // Very small amplitude (0.1-0.4)
    }
    // 60% chance of moderate movement
    else if (r < 0.9) {
      return 0.5 + Math.random() * 1.0; // Moderate amplitude (0.5-1.5)
    }
    // 10% chance of pronounced drifting
    else {
      return 1.6 + Math.random() * 1.4; // Larger amplitude (1.6-3.0)
    }
  };

  // Initialize snowflakes
  const initSnowflakes = (width: number, height: number) => {
    const snowflakes: Snowflake[] = [];

    // Adjust count based on screen size for performance
    const adjustedCount = Math.min(count, Math.floor((width * height) / 10000));

    for (let i = 0; i < adjustedCount; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: minRadius + Math.random() * (maxRadius - minRadius),
        speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
        opacity: 0.3 + Math.random() * 0.7,
        wind: (Math.random() - 0.5) * wind * 0.5, // Reduced base wind effect
        amplitude: naturalDistribution(), // Natural distribution of movement
        frequency: 0.001 + Math.random() * 0.008, // Random frequency for the sine wave
        angle: Math.random() * Math.PI * 2, // Random starting angle
      });
    }

    snowflakesRef.current = snowflakes;
  };

  // Update canvas dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } =
          canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        initSnowflakes(width, height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0)
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Set color based on theme
      const snowColor =
        theme === "dark" ? "rgba(255, 255, 255," : "rgba(220, 235, 255,";

      snowflakesRef.current.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${snowColor} ${flake.opacity})`;
        ctx.fill();

        // Update position with natural side-to-side movement
        flake.y += flake.speed;
        flake.angle += flake.frequency;

        // Add sine wave movement to create natural drifting
        flake.x += flake.wind + Math.sin(flake.angle) * flake.amplitude;

        // Reset if out of bounds
        if (flake.y > dimensions.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * dimensions.width;
          // Reassign movement properties for variety when recycling
          flake.amplitude = naturalDistribution();
          flake.frequency = 0.001 + Math.random() * 0.008;
        }

        if (flake.x > dimensions.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = dimensions.width;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, theme]);

  return (
    <div className={cn("relative w-full", className)}>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{ zIndex: 0 }}
      />
      <div className="z-10">{children}</div>
    </div>
  );
}
