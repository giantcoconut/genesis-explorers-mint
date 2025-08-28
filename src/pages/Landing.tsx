import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import mysticalPyramid from '@/assets/mystical-pyramid.jpg';

const Landing = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnecting(false);
    navigate('/mint');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 bg-gradient-cosmic">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Mystical Pyramid */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <img
              src={mysticalPyramid}
              alt="Mystical Pyramid"
              className="w-80 h-80 object-contain animate-float pulse-glow rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-mystical opacity-30 rounded-lg animate-pulse-glow"></div>
          </div>
        </div>

        {/* Headlines */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent leading-tight">
          Cement Your Place as an Early Intuit
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light">
          250 Genesis NFTs reserved for the first explorers
        </p>

        {/* Connect Wallet Button */}
        <Button
          variant="mystical"
          size="lg"
          onClick={handleConnectWallet}
          disabled={isConnecting}
          className="text-xl px-12 py-6 h-auto"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>

        {/* Mystical decoration */}
        <div className="mt-16 flex justify-center space-x-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-16 bg-gradient-energy rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;