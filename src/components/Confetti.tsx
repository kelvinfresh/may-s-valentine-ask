import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  shape: 'heart' | 'circle' | 'star';
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(346, 77%, 75%)', // rose
      'hsl(346, 60%, 85%)', // light rose
      'hsl(280, 40%, 88%)', // lavender
      'hsl(38, 70%, 65%)', // gold
      'hsl(346, 77%, 65%)', // darker rose
    ];

    const shapes: ('heart' | 'circle' | 'star')[] = ['heart', 'circle', 'star'];

    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 80; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 8,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 0.5,
        rotation: Math.random() * 360,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setPieces(newPieces);
  }, []);

  const getShape = (shape: 'heart' | 'circle' | 'star') => {
    switch (shape) {
      case 'heart':
        return '💖';
      case 'star':
        return '✨';
      case 'circle':
        return '●';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            fontSize: `${piece.size}px`,
            color: piece.shape === 'circle' ? piece.color : undefined,
            transform: `rotate(${piece.rotation}deg)`,
            '--fall-duration': `${piece.duration}s`,
            '--fall-delay': `${piece.delay}s`,
          } as React.CSSProperties}
        >
          {getShape(piece.shape)}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
