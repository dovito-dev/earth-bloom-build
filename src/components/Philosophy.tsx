import philosophyImage from "@/assets/philosophy-image.jpg";

const Philosophy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <img 
              src={philosophyImage} 
              alt="Expecting mother enjoying herbal tea" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-fade-in">
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
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
