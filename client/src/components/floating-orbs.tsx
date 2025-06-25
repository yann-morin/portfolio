import { useEffect, useState } from 'react';

interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  duration: number;
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const colors = [
      'bg-blue-400/20',
      'bg-purple-400/20',
      'bg-emerald-400/20',
      'bg-amber-400/20',
      'bg-pink-400/20',
      'bg-cyan-400/20',
    ];

    const generateOrbs = () => {
      const newOrbs: Orb[] = [];
      for (let i = 0; i < 8; i++) {
        newOrbs.push({
          id: i,
          size: Math.random() * 150 + 50, // 50-200px
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5, // 0-5s delay
          duration: Math.random() * 10 + 15, // 15-25s duration
        });
      }
      setOrbs(newOrbs);
    };

    generateOrbs();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`floating-orb ${orb.color} animate-pulse-soft`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
      
      {/* Additional geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-blue-300/30 animate-rotate-slow" />
      <div className="absolute top-3/4 right-1/4 w-12 h-12 border border-purple-300/30 animate-rotate-slow" 
           style={{ animationDelay: '5s', animationDirection: 'reverse' }} />
      <div className="absolute top-1/2 left-3/4 w-8 h-8 bg-emerald-300/20 animate-bounce-slow" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/6 right-1/6 w-6 h-6 bg-amber-300/25 rounded-full animate-pulse-soft" 
           style={{ animationDelay: '3s' }} />
    </div>
  );
}