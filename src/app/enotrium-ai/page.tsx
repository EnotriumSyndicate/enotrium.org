"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowDown,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Zap,
  Brain,
  Server,
  Leaf,
  Shield,
  ChevronDown,
} from "lucide-react";

// ============================================
// ABSTRACT FIELD PARTICLE ANIMATION
// ============================================
function AbstractField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    };

    let particles: Particle[] = [];
    const COUNT = 140;

    const spawn = (W: number, H: number): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      life: Math.random() * 160,
      maxLife: 140 + Math.random() * 120,
      size: 0.6 + Math.random() * 1.2,
    });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const W = canvas.width;
      const H = canvas.height;
      particles = Array.from({ length: COUNT }, () => spawn(W, H));
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const flowX = (x: number, y: number, t: number) => {
      const targetX = x / canvas.width; // Normalized position (0 to 1)
      const convergenceForce = (1 - targetX) * 0.8; // Stronger convergence toward right
      return Math.cos(x * 0.003 + t * 0.3) * Math.sin(y * 0.0025 + t * 0.35) * 0.3 +
             Math.cos(x * 0.005 + y * 0.003 - t * 0.5) * 0.3 +
             convergenceForce * 0.5; // Add rightward convergence
    };

    const flowY = (x: number, y: number, t: number) =>
      Math.sin(x * 0.0025 - t * 0.4) * Math.cos(y * 0.003 + t * 0.3) * 0.3 +
      Math.sin(x * 0.004 - y * 0.006 + t * 0.55) * 0.3;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.fillStyle = "rgba(10,10,10,0.18)";
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        p.vx = p.vx * 0.94 + flowX(p.x, p.y, t) * 0.06;
        p.vy = p.vy * 0.94 + flowY(p.x, p.y, t) * 0.06;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.x < -10 || p.x > W + 10 || p.y < -10 || p.y > H + 10 || p.life > p.maxLife) {
          Object.assign(p, spawn(W, H));
          return;
        }

        const lifeAlpha = Math.min(1, p.life / 30) * Math.min(1, (p.maxLife - p.life) / 30);
        const topFade = Math.min(1, p.y / (H * 0.35));
        const alpha = lifeAlpha * topFade * 0.65;
        if (alpha < 0.01) return;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 220, 255,${alpha.toFixed(3)})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 7000) {
            const topFade = Math.min(1, Math.min(particles[i].y, particles[j].y) / (H * 0.35));
            const alpha = (1 - dist / 7000) * 0.08 * topFade;
            ctx.strokeStyle = `rgba(150, 220, 255,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      t += 0.004;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const scrollToSpiking = () => {
    const element = document.getElementById("spiking-neural-networks");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <AbstractField />
      </div>

      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0a0a0a 20%, transparent)" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
        style={{ height: 280, background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />

      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 lg:px-16 max-w-[1400px] mx-auto w-full py-32">
        <ScrollReveal animation="fade-up" duration={1}>
          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-6 font-[family-name:var(--font-inter)] font-medium">
            ENOTRIUM AI
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extralight leading-[0.95] max-w-5xl text-white mb-10 font-[family-name:var(--font-inter)] text-balance text-glow">
            ENOTRIUM AI
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15} duration={1}>
          <div className="max-w-2xl space-y-5 text-white/60 text-lg md:text-xl leading-[1.7] font-[family-name:var(--font-inter)] font-light">
            <p className="text-balance">
              Spiking Intelligence at the Edge.
            </p>
            <p className="text-balance">
              While frontier labs waste gigawatts on ever-larger transformer models that serve only the elite, we create <span className="text-white font-medium">sovereign, low-power, neuron based intelligence</span> that actually serves humanity.
            </p>
            <p className="text-balance">
              Frontier labs are failing humanity. Spiking neural nets + local LLMs are the only viable path. Artificial Super Intelligence, deployed across local networks.
            </p>
            <p className="text-white/90 font-normal tracking-wide">
              This is the <span className="text-white font-medium">only viable path forward</span>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3} duration={1}>
          <div className="flex flex-col sm:flex-row gap-4 mt-14">
            <button
              onClick={scrollToSpiking}
              className="group magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500 font-[family-name:var(--font-inter)] focus-ring"
            >
              Enter the Spiking Frontier
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <Link
              href="#edge-deployment"
              className="group magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500 font-[family-name:var(--font-inter)] focus-ring"
            >
              See Edge Deployments
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToSpiking}
          className="text-white/30 hover:text-white/60 transition-all duration-500 focus-ring rounded-full p-2"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}

// ============================================
// SPIKING NEURAL REACTOR CANVAS COMPONENT
// ============================================
function SpikingNeuralReactor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    // Node types
    type Node = {
      x: number;
      y: number;
      type: 'sphere' | 'hexagon';
      size: number;
      pulsePhase: number;
      connections: number[];
      energy: number;
    };

    // Connection type
    type Connection = {
      from: number;
      to: number;
      progress: number;
      speed: number;
      active: boolean;
      particles: number[];
      energy: number;
    };

    // Spike type
    type Spike = {
      nodeIndex: number;
      progress: number;
      intensity: number;
    };

    // Floating particle type
    type FloatingParticle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    };

    let nodes: Node[] = [];
    let connections: Connection[] = [];
    let spikes: Spike[] = [];
    let floatingParticles: FloatingParticle[] = [];

    const NODE_COUNT = 80;
    const CONNECTION_DENSITY = 0.15;
    const FLOATING_PARTICLE_COUNT = 50;

    // Initialize nodes
    const initNodes = (W: number, H: number) => {
      nodes = [];
      const centerX = W / 2;
      const centerY = H / 2;
      const maxRadius = Math.min(W, H) * 0.35;

      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = (i / NODE_COUNT) * Math.PI * 2 + Math.random() * 0.5;
        const radius = Math.random() * maxRadius * 0.8 + maxRadius * 0.2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        nodes.push({
          x,
          y,
          type: Math.random() > 0.5 ? 'sphere' : 'hexagon',
          size: 3 + Math.random() * 5,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
          energy: Math.random(),
        });
      }

      // Add some central nodes
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * maxRadius * 0.3;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        nodes.push({
          x,
          y,
          type: Math.random() > 0.3 ? 'hexagon' : 'sphere',
          size: 5 + Math.random() * 8,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
          energy: 0.5 + Math.random() * 0.5,
        });
      }
    };

    // Initialize connections
    const initConnections = () => {
      connections = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150 && Math.random() < CONNECTION_DENSITY) {
            connections.push({
              from: i,
              to: j,
              progress: Math.random(),
              speed: 0.005 + Math.random() * 0.01,
              active: true,
              particles: [],
              energy: Math.random(), // Initialize energy property
            });
            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
          }
        }
      }
    };

    // Initialize floating particles
    const initFloatingParticles = (W: number, H: number) => {
      floatingParticles = [];
      for (let i = 0; i < FLOATING_PARTICLE_COUNT; i++) {
        floatingParticles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 0.5 + Math.random() * 1.5,
          alpha: 0.1 + Math.random() * 0.3,
        });
      }
    };

    // Draw hexagon
    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };

    // Draw connection with energy flow
    const drawConnection = (ctx: CanvasRenderingContext2D, conn: Connection, t: number) => {
      const fromNode = nodes[conn.from];
      const toNode = nodes[conn.to];

      if (!fromNode || !toNode) return;

      const dx = toNode.x - fromNode.x;
      const dy = toNode.y - fromNode.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Update progress
      conn.progress += conn.speed;
      if (conn.progress > 1) conn.progress = 0;

      // Randomly deactivate/reactivate connections
      if (Math.random() < 0.002) {
        conn.active = !conn.active;
      }

      if (!conn.active) return;

      // Draw base line
      const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
      gradient.addColorStop(0, `rgba(6, 182, 212, ${0.1 + conn.energy * 0.2})`);
      gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.2 + conn.energy * 0.3})`);
      gradient.addColorStop(1, `rgba(6, 182, 212, ${0.1 + conn.energy * 0.2})`);

      ctx.beginPath();
      ctx.moveTo(fromNode.x, fromNode.y);
      ctx.lineTo(toNode.x, toNode.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.5 + conn.energy * 1;
      ctx.stroke();

      // Draw energy particle
      const particleX = fromNode.x + dx * conn.progress;
      const particleY = fromNode.y + dy * conn.progress;

      ctx.beginPath();
      ctx.arc(particleX, particleY, 2 + conn.energy * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(150, 220, 255, ${0.6 + conn.energy * 0.4})`;
      ctx.fill();

      // Glow effect
      ctx.beginPath();
      ctx.arc(particleX, particleY, 4 + conn.energy * 4, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(particleX, particleY, 0, particleX, particleY, 8 + conn.energy * 8);
      glowGradient.addColorStop(0, `rgba(150, 220, 255, ${0.3 + conn.energy * 0.3})`);
      glowGradient.addColorStop(1, 'rgba(150, 220, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fill();
    };

    // Draw node
    const drawNode = (ctx: CanvasRenderingContext2D, node: Node, t: number) => {
      const pulse = Math.sin(t * 2 + node.pulsePhase) * 0.5 + 0.5;
      const energyPulse = Math.sin(t * 3 + node.pulsePhase * 2) * 0.5 + 0.5;

      // Inner glow
      const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
      glowGradient.addColorStop(0, `rgba(150, 220, 255, ${0.2 + node.energy * 0.3})`);
      glowGradient.addColorStop(1, 'rgba(150, 220, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw shape
      if (node.type === 'sphere') {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        const fillGradient = ctx.createRadialGradient(node.x - node.size * 0.3, node.y - node.size * 0.3, 0, node.x, node.y, node.size);
        fillGradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 + node.energy * 0.2})`);
        fillGradient.addColorStop(0.5, `rgba(150, 220, 255, ${0.6 + node.energy * 0.4})`);
        fillGradient.addColorStop(1, `rgba(6, 182, 212, ${0.4 + node.energy * 0.3})`);
        ctx.fillStyle = fillGradient;
        ctx.fill();
      } else {
        drawHexagon(ctx, node.x, node.y, node.size * (0.8 + pulse * 0.4));
        ctx.fillStyle = `rgba(150, 220, 255, ${0.5 + node.energy * 0.3})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.7 + node.energy * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Outer ring
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size * (1.2 + energyPulse * 0.3), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 + energyPulse * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    // Draw orbiting rings
    const drawOrbitingRings = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, t: number) => {
      const rings = [
        { radius: 80, speed: 0.5, width: 1 },
        { radius: 120, speed: 0.3, width: 1.5 },
        { radius: 160, speed: 0.2, width: 0.5 },
      ];

      rings.forEach((ring, i) => {
        const angle = t * ring.speed + (i * Math.PI / 3);
        const x = centerX + Math.cos(angle) * ring.radius * 0.1;
        const y = centerY + Math.sin(angle) * ring.radius * 0.1;

        ctx.beginPath();
        ctx.arc(centerX + x, centerY + y, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 + Math.sin(t * 2 + i) * 0.05})`;
        ctx.lineWidth = ring.width;
        ctx.stroke();

        // Arc segments
        for (let j = 0; j < 3; j++) {
          const startAngle = angle + (j * Math.PI * 2 / 3);
          const endAngle = startAngle + Math.PI / 4;
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, ring.radius, startAngle, endAngle);
          ctx.strokeStyle = `rgba(150, 220, 255, ${0.2 + Math.sin(t * 3 + i + j) * 0.1})`;
          ctx.lineWidth = ring.width + 0.5;
          ctx.stroke();
        }
      });
    };

    // Draw circuit traces
    const drawCircuitTraces = (ctx: CanvasRenderingContext2D, W: number, H: number, t: number) => {
      const traces = 8;
      for (let i = 0; i < traces; i++) {
        const angle = (i / traces) * Math.PI * 2 + t * 0.1;
        const innerRadius = Math.min(W, H) * 0.4;
        const outerRadius = Math.min(W, H) * 0.45;

        const x1 = W / 2 + Math.cos(angle) * innerRadius;
        const y1 = H / 2 + Math.sin(angle) * innerRadius;
        const x2 = W / 2 + Math.cos(angle + 0.2) * outerRadius;
        const y2 = H / 2 + Math.sin(angle + 0.2) * outerRadius;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.05 + Math.sin(t * 2 + i) * 0.03})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // Draw spike propagation
    const drawSpikePropagation = (ctx: CanvasRenderingContext2D, t: number) => {
      // Randomly trigger spikes
      if (Math.random() < 0.05 && nodes.length > 0) {
        const randomNode = Math.floor(Math.random() * nodes.length);
        spikes.push({
          nodeIndex: randomNode,
          progress: 0,
          intensity: 0.5 + Math.random() * 0.5,
        });
      }

      // Update and draw spikes
      spikes = spikes.filter(spike => {
        spike.progress += 0.02;
        if (spike.progress > 1) return false;

        const node = nodes[spike.nodeIndex];
        if (!node) return false;

        // Draw spike wave
        const radius = spike.progress * 100;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(150, 220, 255, ${spike.intensity * (1 - spike.progress) * 0.5})`;
        ctx.lineWidth = 2 * (1 - spike.progress);
        ctx.stroke();

        return true;
      });
    };

    // Draw floating particles
    const drawFloatingParticles = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
      floatingParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 220, 255, ${p.alpha})`;
        ctx.fill();
      });
    };

    // Draw text overlay
    const drawTextOverlay = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
      const text = "SPIKING NEURAL NETWORKS × EDGE DEPLOYMENT";
      ctx.font = "10px var(--font-inter)";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      // Text glow
      ctx.shadowColor = "rgba(150, 220, 255, 0.8)";
      ctx.shadowBlur = 15;
      ctx.fillStyle = "rgba(150, 220, 255, 0.9)";
      ctx.fillText(text, W / 2, H - 30);

      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(150, 220, 255, 0.5)";
      ctx.lineWidth = 0.5;
      ctx.strokeText(text, W / 2, H - 30);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const W = canvas.width;
      const H = canvas.height;
      initNodes(W, H);
      initConnections();
      initFloatingParticles(W, H);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Clear with dark background
      ctx.fillStyle = "rgba(5, 10, 15, 0.1)";
      ctx.fillRect(0, 0, W, H);

      // Draw floating particles
      drawFloatingParticles(ctx, W, H);

      // Draw circuit traces
      drawCircuitTraces(ctx, W, H, t);

      // Draw orbiting rings
      drawOrbitingRings(ctx, W / 2, H / 2, t);

      // Draw connections
      connections.forEach(conn => {
        conn.energy = Math.sin(t * 2 + conn.from * 0.1) * 0.5 + 0.5;
        drawConnection(ctx, conn, t);
      });

      // Draw nodes
      nodes.forEach(node => {
        node.energy = Math.sin(t * 2 + node.pulsePhase) * 0.5 + 0.5;
        drawNode(ctx, node, t);
      });

      // Draw spike propagation
      drawSpikePropagation(ctx, t);

      // Draw text overlay
      drawTextOverlay(ctx, W, H);

      // Central reactor glow
      const centerX = W / 2;
      const centerY = H / 2;
      const reactorGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
      reactorGradient.addColorStop(0, `rgba(150, 220, 255, ${0.1 + Math.sin(t * 2) * 0.05})`);
      reactorGradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.05})`);
      reactorGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = reactorGradient;
      ctx.fillRect(0, 0, W, H);

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

// ============================================
// TEASER SECTION
// ============================================
function TeaserSection() {
  return (
    <section id="teaser" className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden grain-overlay">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal animation="fade-up" duration={1}>
            <div className="space-y-10">
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 font-[family-name:var(--font-inter)] font-medium">
                The Edge Imperative
              </p>

              <div className="space-y-8 text-white/70 text-2xl md:text-3xl lg:text-4xl leading-[1.4] font-[family-name:var(--font-inter)] font-extralight">
                <p className="text-balance">
                  Transformer architecture is unnecessarily energy-intensive, centralizing, and unsustainable.
                </p>
                <p className="text-white font-light">
                  Frontier labs are failing humanity. Spiking neural nets + local LLMs are the only viable path.
                </p>
              </div>

              <div className="w-32 h-px bg-gradient-to-r from-white/30 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
            <div className="relative aspect-[4/3] bg-[#050a0f] border border-cyan-500/30 overflow-hidden hover-lift group"
              style={{
                boxShadow: "inset 0 0 60px rgba(6, 182, 212, 0.1), 0 0 40px rgba(6, 182, 212, 0.15)"
              }}
            >
              <SpikingNeuralReactor />
              
              {/* Corner tech brackets */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-500/40" />
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-500/40" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-500/40" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-500/40" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SPIKING NEURAL NETWORKS SECTION
// ============================================
function SpikingNeuralNetworksSection() {
  const concepts = [
    { icon: Brain, label: "Event-Driven", desc: "Fires only when needed" },
    { icon: Zap, label: "Ultra-Efficient", desc: "1000x less energy" },
    { icon: Cpu, label: "Biologically Inspired", desc: "Like real neurons" },
    { icon: Server, label: "True Edge", desc: "No cloud dependency" },
  ];

  return (
    <section id="spiking-neural-networks" className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden grain-overlay">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <ScrollReveal animation="fade-up" duration={1}>
          <div className="max-w-4xl mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-5 font-[family-name:var(--font-inter)] font-medium">
              Architecture
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white mb-10 font-[family-name:var(--font-inter)] text-balance leading-[1.1]">
              Spiking Neural Networks
            </h2>
            <p className="text-white/50 text-xl leading-[1.8] max-w-3xl font-[family-name:var(--font-inter)] font-light">
              Spiking Neural Networks are event-driven, biologically inspired, and possess extreme energy efficiency. They fire only when needed — unlike transformers that continuously consume power regardless of input. This is the <span className="text-white font-medium">massive advantage</span> over wasteful transformer architecture.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-20">
            {concepts.map((concept, index) => (
              <div
                key={concept.label}
                className="group relative p-8 md:p-10 border border-white/[0.06] hover:border-white/[0.15] bg-transparent hover:bg-white/[0.02] transition-all duration-700 ease-dramatic hover-lift"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <concept.icon className="w-10 h-10 text-white/30 mb-6 group-hover:text-white/50 transition-all duration-500" strokeWidth={1} />
                <p className="text-xl font-light text-white mb-2 font-[family-name:var(--font-inter)] tracking-wide">
                  {concept.label}
                </p>
                <p className="text-sm text-white/30 font-[family-name:var(--font-inter)]">
                  {concept.desc}
                </p>
                
                <div className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700 ease-dramatic" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3} duration={1}>
          <div className="relative p-12 md:p-16 border border-white/[0.06] bg-white/[0.01]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <p className="text-2xl md:text-3xl lg:text-4xl text-white/60 font-extralight leading-[1.5] font-[family-name:var(--font-inter)] text-center text-balance">
              Transformer based Models are capital intensive and waste. Spiking neural nets follow patterns of elegance and efficency. On edge devices, the choice is obvious.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// EDGE DEPLOYMENT SECTION
// ============================================
function EdgeDeploymentSection() {
  const principles = [
    { title: "True Edge Intelligence", desc: "Drones, manufacturing, offline environments" },
    { title: "Sovereign Local LLMs", desc: "Run without cloud dependency or massive energy cost" },
    { title: "Industrial Sovereignty", desc: "Real-world deployment with minimal power" },
  ];

  return (
    <section id="edge-deployment" className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden grain-overlay">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-white/[0.08]" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-white/[0.08]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-up" duration={1}>
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-5 font-[family-name:var(--font-inter)] font-medium">
                Deployment
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white mb-8 font-[family-name:var(--font-inter)] text-balance leading-[1.1]">
                Intelligence at the Edge
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
              <div className="space-y-10">
                <p className="text-white/50 text-xl leading-[1.8] font-[family-name:var(--font-inter)] font-light text-balance">
                  EnotriumAI deploys ultra-efficient Spiking Neural Networks directly at the edge — on drones scanning farmland, in autonomous manufacturing facilities, and across real industrial systems. Local LLMs run offline with minimal power, ensuring industrial sovereignty and true independence from centralized cloud infrastructure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/[0.08]">
                  {principles.map((principle, index) => (
                    <div key={principle.title} className="group space-y-3" style={{ transitionDelay: `${index * 100}ms` }}>
                      <p className="text-base font-light text-white font-[family-name:var(--font-inter)] tracking-wide">
                        {principle.title}
                      </p>
                      <p className="text-sm text-white/30 font-[family-name:var(--font-inter)] leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION DIVIDER: FUTURIST GRID SPACER
// ============================================
function SectionDivider() {
  // Generate random positions for glowing dots (avoiding top/bottom fade zones)
  const dots = [
    { left: 8, top: 35, delay: 0, size: 3 },
    { left: 15, top: 55, delay: 1.5, size: 2 },
    { left: 23, top: 42, delay: 0.8, size: 4 },
    { left: 31, top: 65, delay: 2.2, size: 2.5 },
    { left: 42, top: 30, delay: 1.2, size: 3 },
    { left: 48, top: 70, delay: 0.5, size: 2 },
    { left: 56, top: 45, delay: 1.8, size: 3.5 },
    { left: 64, top: 60, delay: 0.3, size: 2 },
    { left: 72, top: 38, delay: 2.5, size: 3 },
    { left: 79, top: 68, delay: 1.0, size: 2.5 },
    { left: 87, top: 50, delay: 1.6, size: 3 },
    { left: 93, top: 32, delay: 0.7, size: 2 },
  ];

  return (
    <section className="relative h-[100px] md:h-[180px] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Top fade gradient */}
      <div 
        className="absolute inset-x-0 top-0 h-16 md:h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0a0a0a, transparent)" }}
      />
      
      {/* Bottom fade gradient */}
      <div 
        className="absolute inset-x-0 bottom-0 h-16 md:h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}
      />

      {/* Perspective grid background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(150, 220, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(150, 220, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Horizontal accent lines */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[rgba(150,220,255,0.4)] to-transparent" />
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[rgba(150,220,255,0.3)] to-transparent mt-8 md:mt-12" />
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[rgba(150,220,255,0.4)] to-transparent mt-8 md:mt-12" />
      </div>

      {/* Glowing dots */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: "rgba(150, 220, 255, 1)",
            boxShadow: "0 0 16px 4px rgba(150, 220, 255, 0.8), 0 0 32px 8px rgba(150, 220, 255, 0.5)",
            animation: `pulse 4s ease-in-out ${dot.delay}s infinite`,
          }}
        />
      ))}

      {/* Subtle ambient glow orbs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(150, 220, 255, 0.45), transparent)" }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-24 h-24 rounded-full opacity-45 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(170, 230, 255, 0.4), transparent)" }}
      />
    </section>
  );
}

// ============================================
// OUR STORY SECTION
// ============================================
function OurStorySection() {
  return (
    <section className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden grain-overlay">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal animation="fade-up" duration={1}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-5 font-[family-name:var(--font-inter)] font-medium">
                Arthedain
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-8xl font-extralight text-white font-[family-name:var(--font-inter)] text-balance leading-[1.05]">
                Systems Deployment
              </h2>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-white/30 to-transparent" />
                <p className="text-sm text-white/30 font-[family-name:var(--font-inter)] tracking-widest uppercase">dev 2026</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
            <div className="space-y-8 text-white/50 text-lg md:text-xl leading-[1.8] font-[family-name:var(--font-inter)] font-light">
              <p className="text-2xl md:text-3xl text-white/80 font-extralight leading-[1.4] text-balance">
                EnotriumAI was born from the realization that frontier labs are wasting humanity's energy budget on inefficient transformers.
              </p>

              <p className="text-balance">
                We are the full stack of Edge AI research and development — from UAVs and consensus to distributed manufacturing systems, user autonomy and supply chain design — combining rigorous agriculture foundations with practical AI systems engineering.
              </p>

              <p className="text-balance">
                While the world chases ever-larger transformer models that serve only scale ambitions, we build <span className="text-white font-medium">sovereign, low-power, biologically-inspired intelligence</span> that actually serves humanity. This is the only viable path forward.
              </p>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ============================================
// WHY SPIKING NEURAL NETWORKS CAROUSEL SECTION
// ============================================
const benefits = [
  {
    icon: Zap,
    title: "Extreme Energy Efficiency",
    description: "1000x less energy than transformers. Fires only when needed. This is the massive advantage.",
  },
  {
    icon: Cpu,
    title: "True Edge Intelligence",
    description: "Deploy on drones, in manufacturing facilities, across real industrial systems. No cloud dependency.",
  },
  {
    icon: Shield,
    title: "Sovereign Local LLMs",
    description: "Run offline with minimal power. Industrial sovereignty. Independence from centralized infrastructure.",
  },
  {
    icon: Leaf,
    title: "Biological Inspiration Over Silicon Waste",
    description: "Spiking neural nets mimic real neurons. Elegant, efficient, and sustainable by design.",
  },
];

function WhySpikingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  
  // Duplicate benefits array for infinite scroll
  const infiniteBenefits = [...benefits, ...benefits, ...benefits];
  const totalItems = infiniteBenefits.length;
  const maxIndex = totalItems - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        // Reset to beginning seamlessly
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  // Auto-scroll carousel continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden grain-overlay">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <ScrollReveal animation="fade-up" duration={1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-5 font-[family-name:var(--font-inter)] font-medium">
                Advantage
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white font-[family-name:var(--font-inter)] text-balance leading-[1.1]">
                Why Spiking Neural Networks
              </h2>
            </div>

            <p className="text-white/30 text-base font-[family-name:var(--font-inter)] font-light">
              Navigate to explore
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-dramatic gap-5"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount + 2)}%)` }}
              >
                {infiniteBenefits.map((benefit, index) => (
                  <div key={`${benefit.title}-${index}`} className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] group" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="relative h-full p-10 border border-white/[0.06] hover:border-white/[0.12] bg-transparent hover:bg-white/[0.02] transition-all duration-700 ease-dramatic hover-lift">
                      <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-8 bg-white/[0.03] group-hover:bg-white/[0.06] transition-all duration-500">
                        <benefit.icon className="w-7 h-7 text-white/30 group-hover:text-white/50 transition-all duration-500" strokeWidth={1} />
                      </div>

                      <h3 className="text-2xl font-light text-white mb-4 font-[family-name:var(--font-inter)] tracking-wide">
                        {benefit.title}
                      </h3>
                      <p className="text-white/40 text-base leading-[1.7] font-[family-name:var(--font-inter)] font-light">
                        {benefit.description}
                      </p>

                      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white/30 to-transparent group-hover:w-full transition-all duration-700 ease-dramatic" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-12">
              <div className="flex gap-3">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-[2px] rounded-full transition-all duration-500 ease-dramatic ${
                      Math.floor(currentIndex % benefits.length) === index
                        ? "bg-white w-10"
                        : "bg-white/20 w-4 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 border border-white/[0.1] hover:border-white/[0.25] hover:bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-white transition-all duration-500 ease-dramatic focus-ring"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 border border-white/[0.1] hover:border-white/[0.25] hover:bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-white transition-all duration-500 ease-dramatic focus-ring"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// NEWSLETTER SECTION
// ============================================
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden grain-overlay">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Abstract Field Particle Animation */}
      <div className="absolute inset-0 z-0">
        <AbstractField />
      </div>

      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Subtle radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fade-up" duration={1}>
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-5 font-[family-name:var(--font-inter)] font-medium">
              Access
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white mb-8 font-[family-name:var(--font-inter)] text-balance leading-[1.1]">
              Contact
            </h2>
            <p className="text-white/40 text-xl mb-12 font-[family-name:var(--font-inter)] font-light leading-relaxed">
              Reach out to learn more about spiking neural networks, edge deployment, and the future of efficient AI.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-8 py-5 bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.05] transition-all duration-500 font-[family-name:var(--font-inter)] font-light tracking-wide"
              />
              <button
                type="submit"
                className="px-10 py-5 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500 font-[family-name:var(--font-inter)] magnetic-btn focus-ring"
              >
                {submitted ? "Sent!" : "Send"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function EnotriumAIPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-inter)]">
      <Navbar darkText />

      <HeroSection />
      <TeaserSection />
      <SpikingNeuralNetworksSection />
      <EdgeDeploymentSection />
      <SectionDivider />
      <OurStorySection />
      <WhySpikingSection />
      <NewsletterSection />

      <Footer />
    </main>
  );
}
