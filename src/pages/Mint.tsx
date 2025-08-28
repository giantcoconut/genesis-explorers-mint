import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

const Mint = () => {
  const [claimed, setClaimed] = useState(127);
  const [isMinting, setIsMinting] = useState(false);
  const [mintedNFT, setMintedNFT] = useState<any>(null);
  const [hasMinted, setHasMinted] = useState(false);
  const { toast } = useToast();

  const handleMint = async () => {
    if (hasMinted) {
      toast({
        title: "Already Minted",
        description: "You have already minted your Genesis NFT. Limit: 1 per wallet.",
        variant: "destructive",
      });
      return;
    }

    setIsMinting(true);
    
    // Simulate minting process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock NFT data
    const newNFT = {
      id: claimed + 1,
      name: `Genesis Explorer #${claimed + 1}`,
      image: 'https://picsum.photos/400/400?random=' + (claimed + 1),
      traits: [
        { trait_type: "Rarity", value: Math.random() > 0.8 ? "Legendary" : Math.random() > 0.6 ? "Epic" : "Common" },
        { trait_type: "Element", value: ["Fire", "Water", "Earth", "Air"][Math.floor(Math.random() * 4)] },
        { trait_type: "Power Level", value: Math.floor(Math.random() * 100) + 1 }
      ]
    };

    setMintedNFT(newNFT);
    setClaimed(prev => prev + 1);
    setHasMinted(true);
    setIsMinting(false);

    toast({
      title: "Genesis NFT Minted!",
      description: `Successfully minted ${newNFT.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-mystical bg-clip-text text-transparent">
              Mint Your Genesis NFT
            </h1>
            
            {/* Live Counter */}
            <div className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-mystical">
              <div className="text-3xl font-bold text-primary">{claimed}</div>
              <div className="text-xl text-muted-foreground">/</div>
              <div className="text-3xl font-bold">250</div>
              <div className="text-lg text-muted-foreground ml-2">claimed</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mint Section */}
            <Card className="shadow-cosmic border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Genesis Mint</CardTitle>
                <CardDescription className="text-center">
                  Each wallet can mint exactly 1 Genesis NFT
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0.1 ETH</div>
                  <div className="text-muted-foreground">Mint Price</div>
                </div>
                
                <Button
                  variant="mystical"
                  size="lg"
                  onClick={handleMint}
                  disabled={isMinting || hasMinted}
                  className="w-full h-14 text-lg"
                >
                  {isMinting ? 'Minting...' : hasMinted ? 'Already Minted' : 'Mint NFT'}
                </Button>

                {hasMinted && (
                  <div className="text-center">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      ✓ Minted Successfully
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Minted NFT Preview */}
            {mintedNFT && (
              <Card className="shadow-energy border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center">{mintedNFT.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-mystical">
                    <img
                      src={mintedNFT.image}
                      alt={mintedNFT.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Traits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {mintedNFT.traits.map((trait: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-2 rounded bg-muted/50">
                          <span className="text-sm font-medium">{trait.trait_type}</span>
                          <Badge variant="outline">{trait.value}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;