import { useState, useRef } from 'react';
import Confetti from './Confetti';

const ValentineCard = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const teasingMessages = [
    "Not an option 😏",
    "Try again, May 💗",
    "Nice try! 😘",
    "Nope, won't work 💕",
    "You can't escape my love! 💖",
  ];

  const handleYesClick = () => {
    setShowConfetti(true);
    setAnswered(true);
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    
    setNoButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => (prev + 1) % teasingMessages.length);
    handleNoHover();
  };

  if (answered) {
    return (
      <div className="text-center px-6 relative z-10">
        {showConfetti && <Confetti />}
        
        <div className="animate-fade-in-up">
          <div className="text-8xl mb-8 animate-heart-pulse">💖</div>
          
          <h1 className="font-romantic text-5xl md:text-7xl text-foreground mb-6">
            Yay!!
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-md mx-auto leading-relaxed">
            I can't wait to spend Valentine's Day with you, May ❤️
          </p>
          
          <div className="mt-12 flex justify-center gap-4 text-4xl">
            <span className="animate-sparkle" style={{ animationDelay: '0s' }}>✨</span>
            <span className="animate-sparkle" style={{ animationDelay: '0.3s' }}>💕</span>
            <span className="animate-sparkle" style={{ animationDelay: '0.6s' }}>✨</span>
            <span className="animate-sparkle" style={{ animationDelay: '0.9s' }}>💕</span>
            <span className="animate-sparkle" style={{ animationDelay: '1.2s' }}>✨</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center px-6 relative z-10 max-w-2xl mx-auto">
      {/* Opening */}
      <div className="animate-fade-in-up">
        <span className="text-5xl animate-heart-pulse inline-block mb-4">💕</span>
        <h1 className="font-romantic text-5xl md:text-7xl text-foreground mb-2">
          Hey May
        </h1>
        <p className="text-lg text-muted-foreground italic">
          I have a very important question for you…
        </p>
      </div>

      {/* Love message */}
      <div className="animate-fade-in-up delay-300 my-12">
        <p className="text-lg md:text-xl text-foreground font-body leading-relaxed max-w-lg mx-auto">
          Every moment with you feels like a beautiful dream I never want to wake up from. 
          Your smile lights up my world, and your love makes every day feel like a celebration.
          You're my favorite person, my best friend, and the one I want to share all my adventures with.
        </p>
      </div>

      {/* The Question */}
      <div className="animate-fade-in-up delay-500 mb-12">
        <h2 className="font-romantic text-4xl md:text-6xl text-foreground leading-tight">
          May, will you be my Valentine?
        </h2>
        <span className="text-4xl inline-block mt-4 animate-heart-pulse">💖</span>
      </div>

      {/* Buttons */}
      <div className="animate-fade-in-up delay-700 flex flex-col sm:flex-row items-center justify-center gap-6 relative">
        <button
          onClick={handleYesClick}
          className="px-12 py-4 bg-primary text-primary-foreground font-body font-semibold text-xl rounded-full 
                     glow-rose hover:scale-110 transition-all duration-300 
                     shadow-lg hover:shadow-xl active:scale-105"
        >
          Yes 💘
        </button>

        <div className="relative">
          <button
            ref={noButtonRef}
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="px-6 py-2 bg-secondary text-secondary-foreground font-body text-sm rounded-full 
                       transition-all duration-300 hover:opacity-70"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
          >
            No
          </button>
          
          {noClickCount > 0 && (
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-rose font-medium animate-fade-in-up">
              {teasingMessages[noClickCount - 1]}
            </p>
          )}
        </div>
      </div>

      {/* Decorative hearts at bottom */}
      <div className="animate-fade-in-up delay-800 mt-16 flex justify-center gap-3 text-2xl opacity-60">
        <span>💕</span>
        <span>💗</span>
        <span>💕</span>
        <span>💗</span>
        <span>💕</span>
      </div>
    </div>
  );
};

export default ValentineCard;
