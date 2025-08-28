import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

// Mock NFT data
const mockNFTs = Array.from({ length: 127 }, (_, i) => ({
  id: i + 1,
  name: `Genesis Explorer #${i + 1}`,
  image: `https://picsum.photos/400/400?random=${i + 1}`,
  owner: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
  traits: [
    { 
      trait_type: "Rarity", 
      value: Math.random() > 0.8 ? "Legendary" : Math.random() > 0.6 ? "Epic" : "Common" 
    },
    { 
      trait_type: "Element", 
      value: ["Fire", "Water", "Earth", "Air"][Math.floor(Math.random() * 4)] 
    },
    { 
      trait_type: "Power Level", 
      value: Math.floor(Math.random() * 100) + 1 
    }
  ]
}));

const Gallery = () => {
  const [selectedNFT, setSelectedNFT] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-mystical bg-clip-text text-transparent">
            Genesis Collection
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the {mockNFTs.length} minted Genesis NFTs
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Minted NFTs */}
          {mockNFTs.map((nft) => (
            <Dialog key={nft.id}>
              <DialogTrigger asChild>
                <Card 
                  className="group cursor-pointer hover:shadow-mystical transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm"
                  onClick={() => setSelectedNFT(nft)}
                >
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-cosmic">
                      <img
                        src={nft.image}
                        alt={nft.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 truncate">{nft.name}</h3>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Owner:</span>
                      <span className="font-mono">{nft.owner}</span>
                    </div>
                    
                    <div className="mt-2">
                      <Badge 
                        variant={nft.traits[0].value === 'Legendary' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {nft.traits[0].value}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{nft.name}</DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-mystical">
                    <img
                      src={nft.image}
                      alt={nft.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Owner</h4>
                      <p className="font-mono text-sm bg-muted p-2 rounded">{nft.owner}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Traits</h4>
                      <div className="space-y-2">
                        {nft.traits.map((trait, index) => (
                          <div key={index} className="flex justify-between items-center p-2 rounded bg-muted/50">
                            <span className="text-sm font-medium">{trait.trait_type}</span>
                            <Badge variant="outline">{trait.value}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Token ID</h4>
                      <p className="text-2xl font-bold text-primary">#{nft.id}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
          
          {/* Empty slots */}
          {Array.from({ length: 250 - mockNFTs.length }).map((_, i) => (
            <Card key={`empty-${i}`} className="opacity-30 border-dashed border-2 border-border/50">
              <CardContent className="p-4">
                <div className="aspect-square rounded-lg bg-muted/20 mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Not Minted</span>
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  #{mockNFTs.length + i + 1}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;