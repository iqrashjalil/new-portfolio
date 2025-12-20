
import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../constants';

type LogoPos = {
  x: number; // px
  y: number; // px
  size: number; // px
  delay: string;
  duration: string;
  dx: number; // small movement range x
  dy: number; // small movement range y
  rot: number; // degrees
  rotSpeed: number; // deg/sec
  color: string;
  skillIndex: number;
};

const FloatingLogosBackground: React.FC = () => {
  const logosToRender = [...SKILLS, ...SKILLS]; // Duplicate to fill the space
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<LogoPos[]>([]);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    const n = logosToRender.length;
    const items: LogoPos[] = [];
    const ICON_SIZE = 80; // uniform size for all icons (px)
    const SPEED = 80; // constant speed for all icons (px/sec)

    for (let i = 0; i < n; i++) {
      const size = ICON_SIZE;
      const angle = Math.random() * Math.PI * 2;
      const initialRot = Math.random() * 360 - 180;
      const rotSpeed = (Math.random() * 20 - 10); // deg/sec
      items.push({
        x: Math.random() * (width - size) + size / 2,
        y: Math.random() * (height - size) + size / 2,
        size,
        delay: `${Math.random() * 20}s`,
        duration: `${20 + Math.random() * 20}s`,
        dx: 0,
        dy: 0,
        rot: initialRot,
        rotSpeed,
        color: logosToRender[i].color,
        skillIndex: i,
      } as any);
      // store velocity with constant speed
      items[i].dx = Math.cos(angle) * SPEED;
      items[i].dy = Math.sin(angle) * SPEED;
    }

    // initial relaxation to reduce overlapping
    const padding = 12;
    const maxInitIter = 150;
    for (let iter = 0; iter < maxInitIter; iter++) {
      let moved = false;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = items[i];
          const b = items[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const minDist = (a.size + b.size) / 2 + padding;
          if (dist < minDist) {
            const overlap = (minDist - dist) / 2;
            const ux = dx / dist;
            const uy = dy / dist;
            a.x -= ux * overlap;
            a.y -= uy * overlap;
            b.x += ux * overlap;
            b.y += uy * overlap;
            moved = true;
          }
        }
      }
      if (!moved) break;
    }

    itemsRef.current = items;

    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000); // cap dt
      last = now;
      const arr = itemsRef.current;
      const n = arr.length;
      const rect = container.getBoundingClientRect();

      // integrate positions and rotations
      for (let i = 0; i < n; i++) {
        const p = arr[i];
        p.x += p.dx * dt;
        p.y += p.dy * dt;
        p.rot += p.rotSpeed * dt;

        // wall collisions
        const half = p.size / 2;
        const minX = half;
        const maxX = rect.width - half;
        const minY = half;
        const maxY = rect.height - half;
        if (p.x < minX) { p.x = minX; p.dx *= -1; }
        if (p.x > maxX) { p.x = maxX; p.dx *= -1; }
        if (p.y < minY) { p.y = minY; p.dy *= -1; }
        if (p.y > maxY) { p.y = maxY; p.dy *= -1; }
        
        // Normalize velocity to maintain constant speed
        const currentSpeed = Math.sqrt(p.dx * p.dx + p.dy * p.dy) || 0.001;
        p.dx = (p.dx / currentSpeed) * SPEED;
        p.dy = (p.dy / currentSpeed) * SPEED;
      }

      // collisions between items (simple elastic resolution)
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = arr[i];
          const b = arr[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const minDist = (a.size + b.size) / 2 + 4;
          if (dist < minDist) {
            // move apart
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;

            // relative velocity
            const rvx = b.dx - a.dx;
            const rvy = b.dy - a.dy;
            const velAlongNormal = rvx * nx + rvy * ny;
            if (velAlongNormal > 0) continue; // moving away
            const restitution = 1.0; // perfect elastic collision
            const impulse = -(1 + restitution) * velAlongNormal / 2;
            const ix = impulse * nx;
            const iy = impulse * ny;
            a.dx -= ix;
            a.dy -= iy;
            b.dx += ix;
            b.dy += iy;
            
            // Normalize velocities after collision to maintain constant speed
            const speedA = Math.sqrt(a.dx * a.dx + a.dy * a.dy) || 0.001;
            const speedB = Math.sqrt(b.dx * b.dx + b.dy * b.dy) || 0.001;
            a.dx = (a.dx / speedA) * SPEED;
            a.dy = (a.dy / speedA) * SPEED;
            b.dx = (b.dx / speedB) * SPEED;
            b.dy = (b.dy / speedB) * SPEED;
          }
        }
      }

      // update DOM transforms directly for smooth, GPU-accelerated motion
      const els = elementRefs.current;
      for (let i = 0; i < n; i++) {
        const el = els[i];
        const p = arr[i];
        if (el) {
          // center via translate(-50%,-50%), then translate to position and rotate
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) rotate(${p.rot}deg)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // render fixed set of wrappers and attach refs so we can update transforms directly
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
      {logosToRender.map((skill, index) => {
        const pos = itemsRef.current[index];
        const size = 80; // Fixed uniform size
        const color = pos ? pos.color : skill.color;
        const rot = pos ? pos.rot : 0;

        const wrapperStyle: React.CSSProperties = {
          position: 'absolute',
          left: 0,
          top: 0,
          transform: `translate3d(${pos ? pos.x : 0}px, ${pos ? pos.y : 0}px, 0) translate(-50%, -50%) rotate(${rot}deg)`,
          width: size,
          height: size,
          color,
          pointerEvents: 'none',
          willChange: 'transform, opacity',
          opacity: 0.32,
          filter: 'brightness(0.75) saturate(0.95)',
        };

        return (
          <div
            key={index}
            ref={el => { elementRefs.current[index] = el; }}
            style={wrapperStyle}
            aria-hidden
            className="flex items-center justify-center"
          >
            <skill.Icon style={{ width: size, height: size, display: 'block' }} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingLogosBackground;
