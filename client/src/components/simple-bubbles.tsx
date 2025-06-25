import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function SimpleBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = [
      'bg-blue-400/30',
      'bg-purple-400/30', 
      'bg-emerald-400/30',
      'bg-amber-400/30',
      'bg-pink-400/30',
      'bg-cyan-400/30'
    ];

    const newBubbles: Bubble[] = [];
    for (let i = 0; i < 6; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100, // 0-100%
        y: Math.random() * 100, // 0-100%
        size: Math.random() * 60 + 40, // 40-100px
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 10 + 15, // 15-25s
        delay: Math.random() * 5, // 0-5s delay
      });
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} animate-bounce-slow`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            animationIterationCount: 'infinite',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        />
      ))}
    </div>
  );
}