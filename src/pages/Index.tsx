import FloatingHearts from '@/components/FloatingHearts';
import ValentineCard from '@/components/ValentineCard';

const Index = () => {
  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center overflow-hidden relative">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Subtle sparkles */}
      <div className="fixed top-20 left-10 text-2xl animate-sparkle opacity-40">✨</div>
      <div className="fixed top-40 right-20 text-xl animate-sparkle opacity-30" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="fixed bottom-32 left-20 text-lg animate-sparkle opacity-35" style={{ animationDelay: '1s' }}>✨</div>
      <div className="fixed bottom-20 right-10 text-2xl animate-sparkle opacity-40" style={{ animationDelay: '1.5s' }}>✨</div>
      
      {/* Main content */}
      <main className="relative z-10 py-12">
        <ValentineCard />
      </main>
    </div>
  );
};

export default Index;
