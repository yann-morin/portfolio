import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'circle' | 'triangle' | 'square';
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const shapesRef = useRef<FloatingShape[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBubbles = () => {
      const bubbles: Bubble[] = [];
      const colors = [
        'rgba(139, 92, 246, 0.8)', // purple
        'rgba(59, 130, 246, 0.8)',  // blue
        'rgba(16, 185, 129, 0.8)',  // emerald
        'rgba(245, 158, 11, 0.8)',  // amber
        'rgba(236, 72, 153, 0.8)',  // pink
      ];

      for (let i = 0; i < 6; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 80 + 50,
          speed: Math.random() * 0.8 + 0.4,
          opacity: 0.6,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      bubblesRef.current = bubbles;
      console.log('Bubbles created:', bubbles.length);
    };

    const createFloatingShapes = () => {
      // Supprimé - on garde seulement les bulles
      shapesRef.current = [];
    };

    const drawBubble = (bubble: Bubble) => {
      ctx.save();
      ctx.globalAlpha = bubble.opacity;
      
      // Dessiner le cercle principal
      ctx.fillStyle = bubble.color;
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Ajouter un effet de gradient pour plus de beauté
      const gradient = ctx.createRadialGradient(
        bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, 0,
        bubble.x, bubble.y, bubble.size
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.globalAlpha = shape.opacity;
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      const gradient = ctx.createLinearGradient(-shape.size, -shape.size, shape.size, shape.size);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
          ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
        case 'square':
          ctx.beginPath();
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          ctx.fill();
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate bubbles avec mouvement plus smooth
      bubblesRef.current.forEach(bubble => {
        bubble.y -= bubble.speed;
        bubble.opacity = Math.sin(Date.now() * 0.001 + bubble.x * 0.01) * 0.2 + 0.6;
        
        // Mouvement horizontal très subtil
        bubble.x += Math.sin(Date.now() * 0.0008 + bubble.y * 0.005) * 0.3;
        
        if (bubble.y + bubble.size < 0) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
        
        // Garder les bulles dans les limites horizontales
        if (bubble.x < -bubble.size) bubble.x = canvas.width + bubble.size;
        if (bubble.x > canvas.width + bubble.size) bubble.x = -bubble.size;
        
        drawBubble(bubble);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createBubbles();
    createFloatingShapes();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createBubbles();
      createFloatingShapes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent', mixBlendMode: 'normal' }}
    />
  );
}