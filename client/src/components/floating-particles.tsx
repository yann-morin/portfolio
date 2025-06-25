import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = [
      'rgba(139, 92, 246, 0.6)', // purple
      'rgba(59, 130, 246, 0.6)',  // blue
      'rgba(16, 185, 129, 0.6)',  // emerald
      'rgba(245, 158, 11, 0.6)',  // amber
      'rgba(236, 72, 153, 0.6)',  // pink
      'rgba(255, 255, 255, 0.8)', // white
    ];

    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 0.5;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
    };

    const updateParticles = () => {
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        
        // Fade out towards end of life
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = (1 - lifeRatio) * 0.8;
        
        // Apply slight gravity and wind
        particle.vy += 0.01;
        particle.vx += Math.sin(Date.now() * 0.001 + particle.y * 0.01) * 0.02;
        
        // Remove particles that are too old or off screen
        return particle.life < particle.maxLife && 
               particle.x > -50 && particle.x < canvas.width + 50 &&
               particle.y > -50 && particle.y < canvas.height + 50;
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const generateParticles = () => {
      // Generate particles from random edges
      if (Math.random() < 0.3) {
        const edge = Math.random();
        let x, y;
        
        if (edge < 0.25) { // top
          x = Math.random() * canvas.width;
          y = -10;
        } else if (edge < 0.5) { // right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
        } else if (edge < 0.75) { // bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
        } else { // left
          x = -10;
          y = Math.random() * canvas.height;
        }
        
        particlesRef.current.push(createParticle(x, y));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Create particles on mouse movement
      if (Math.random() < 0.1) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawParticles();
      generateParticles();
      
      // Keep particle count reasonable
      if (particlesRef.current.length > 150) {
        particlesRef.current = particlesRef.current.slice(0, 150);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
}