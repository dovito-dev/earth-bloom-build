import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Natural wellness products" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-light text-brand-warm-earth mb-6 leading-tight">
            Nurturing Wellness for Every Stage of Motherhood
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
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
