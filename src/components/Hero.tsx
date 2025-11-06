import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-background">
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-transparent to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-brand-warm-earth mb-6 leading-tight">
            Nurturing Wellness for Every Stage of Motherhood
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Carefully curated, research-backed natural products for expecting mothers. 
            Simple wellness that honors both medical science and nature's wisdom.
          </p>
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-6 text-base shadow-md hover:shadow-lg transition-all"
            >
              Explore Our Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
