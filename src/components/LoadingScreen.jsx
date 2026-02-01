import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-brown-light">
      <div className="text-center">
        <h1 className="font-display text-5xl md:text-7xl mb-8 animate-fade-in" 
            style={{ 
              background: 'linear-gradient(135deg, #F7B6C8 0%, #C8A27A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
          Ateliê Doce Mell
        </h1>
        
        <div className="w-64 h-1 bg-white/30 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-primary to-brown transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-6 text-brown-dark font-body text-sm tracking-wider animate-pulse">
          Preparando algo especial...
        </p>
      </div>
    </div>
  );
}
