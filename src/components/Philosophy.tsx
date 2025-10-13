import philosophyBackground from "@/assets/philosophy-background.jpg";

const Philosophy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-brand-warm-earth">
              Our Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                We believe wellness during pregnancy should be simple, intentional, and backed by both medical science and nature's wisdom.
              </p>
              <p>
                Every product we curate is chosen with care—researched, tested, and recommended by midwifery professionals who understand the unique needs of expecting mothers.
              </p>
              <p>
                We're not extreme. We're not preachy. We're confident mothers and wellness advocates who choose proven, natural ingredients that promote health for you and your baby.
              </p>
              <p className="font-serif text-brand-warm-earth italic text-lg pt-4">
                "Modern wellness that celebrates the simple joys of life."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={philosophyBackground} 
              alt="Natural wellness philosophy" 
              className="rounded-lg shadow-lg w-3/5 h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
