import founderImage from "@/assets/founder-image.jpg";

const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-brand-warm-earth">
              The Why Behind Rosa Terra
            </h2>
            <p className="font-serif text-xl text-muted-foreground italic">
              Rose of the Earth
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center animate-fade-in">
            <div className="md:col-span-2">
              <img 
                src={founderImage} 
                alt="Founder of Rosa Terra Wellness" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div className="md:col-span-3 space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                As a midwifery professional and mother, I've witnessed firsthand the overwhelming amount of conflicting advice expecting mothers receive about wellness products.
              </p>
              <p>
                Rosa Terra was born from a simple question: <em>What if we could cut through the noise and offer products that are both naturally sourced and medically sound?</em>
              </p>
              <p>
                We don't chase trends. We don't make extreme claims. Instead, we carefully curate products with proven ingredients, backed by research and recommended by healthcare professionals who understand pregnancy.
              </p>
              <p className="font-serif text-brand-warm-earth text-lg pt-4">
                "Every product tells a story of intentional care—for you, your baby, and the earth we share."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
