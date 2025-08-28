import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold bg-gradient-mystical bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Genesis Explorers
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Button
              variant={location.pathname === '/mint' ? 'default' : 'ghost'}
              onClick={() => navigate('/mint')}
              className="hover:shadow-mystical transition-all"
            >
              Mint
            </Button>
            
            <Button
              variant={location.pathname === '/gallery' ? 'default' : 'ghost'}
              onClick={() => navigate('/gallery')}
              className="hover:shadow-mystical transition-all"
            >
              Gallery
            </Button>

            {/* Wallet Status */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border/50">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">0x1234...5678</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;