import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 20 + 12,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 8,
          opacity: Math.random() * 0.4 + 0.2,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up text-rose"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            '--duration': `${heart.duration}s`,
            '--delay': `${heart.delay}s`,
          } as React.CSSProperties}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
