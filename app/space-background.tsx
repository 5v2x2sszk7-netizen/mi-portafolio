"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
};

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = media.matches;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;
    let lastFrameTime = 0;
    let stars: Star[] = [];

    const maxDepth = 1600;
    const fov = 560;

    const createStar = (): Star => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random() * maxDepth,
      size: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.55 + 0.2,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.8);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const starCount = prefersReducedMotion
        ? Math.max(45, Math.floor(width / 32))
        : Math.max(90, Math.floor(width / 18));

      stars = Array.from({ length: starCount }, createStar);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / width - 0.5) * 2;
      pointerY = (event.clientY / height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    const render = (time: number) => {
      const deltaMs = lastFrameTime === 0 ? 16.67 : Math.min(time - lastFrameTime, 34);
      const deltaFactor = deltaMs / 16.67;
      lastFrameTime = time;

      currentPointerX += (pointerX - currentPointerX) * 0.05 * deltaFactor;
      currentPointerY += (pointerY - currentPointerY) * 0.05 * deltaFactor;

      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const driftX = currentPointerX * 42;
      const driftY = currentPointerY * 30;
      const depthSpeed = prefersReducedMotion ? 0.48 : 1.3;

      for (const star of stars) {
        star.z -= depthSpeed * deltaMs;

        if (star.z <= 1) {
          star.x = (Math.random() - 0.5) * 2;
          star.y = (Math.random() - 0.5) * 2;
          star.z = maxDepth;
          star.size = Math.random() * 1.6 + 0.4;
          star.alpha = Math.random() * 0.55 + 0.2;
        }

        const scale = fov / (fov + star.z);
        const x = centerX + star.x * width * 0.72 * scale + driftX * scale;
        const y = centerY + star.y * height * 0.72 * scale + driftY * scale;
        const radius = star.size * scale * 2.2;

        if (x < -40 || x > width + 40 || y < -40 || y > height + 40) {
          continue;
        }

        const glow = context.createRadialGradient(x, y, 0, x, y, radius * 8);
        glow.addColorStop(0, `rgba(255,255,255,${star.alpha})`);
        glow.addColorStop(0.35, `rgba(186,204,255,${star.alpha * 0.26})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, radius * 8, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `rgba(255,255,255,${Math.min(star.alpha + 0.15, 0.9)})`;
        context.beginPath();
        context.arc(x, y, Math.max(radius, 0.35), 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    animationFrame = window.requestAnimationFrame(render);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-80"
    />
  );
}
