import brandStoryBackground from "@/assets/brand-story-background.jpg";

const BrandStory = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={brandStoryBackground} 
          alt="The Rosa Terra story" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-brand-warm-earth">
              The Why Behind Rosa Terra
            </h2>
            <p className="font-serif text-xl text-muted-foreground mb-8 italic leading-relaxed">
              "I created Rosa Terra because I wanted wellness products I could trust during the most 
              important journey of my life."
            </p>
            <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
              As a midwife and mother, I've seen firsthand how overwhelming the wellness industry can be 
              for expecting parents. Too many products, too many claims, not enough transparency.
            </p>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Rosa Terra is my answer to that chaos. Every product is something I've personally researched, 
              tested, and would recommend to my clients. Simple, science-backed wellness that celebrates 
              the beauty of motherhood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
