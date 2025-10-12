import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import founderImage from "@/assets/founder-image.jpg";
import philosophyImage from "@/assets/philosophy-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-light mb-6 text-brand-warm-earth">
              About Rosa Terra
            </h1>
            <p className="font-serif text-xl text-muted-foreground italic">
              Modern wellness that celebrates the simple joys of motherhood
            </p>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl font-light mb-6 text-brand-warm-earth">
                Our Mission
              </h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>
                  Rosa Terra Wellness exists to simplify prenatal wellness by offering carefully curated, research-backed natural products that expecting mothers can trust.
                </p>
                <p>
                  We bridge the gap between medical science and natural wellness, providing products that are both evidence-based and beautifully simple.
                </p>
                <p>
                  Every product in our collection has been personally vetted by midwifery professionals and tested by real mothers who value quality, safety, and intentional care.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={philosophyImage} 
                alt="Wellness philosophy" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Founder Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 animate-fade-in">
              <img 
                src={founderImage} 
                alt="Founder" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="font-display text-4xl font-light mb-6 text-brand-warm-earth">
                Meet Our Founder
              </h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>
                  As a certified midwife and mother of three, I've spent years navigating the overwhelming world of pregnancy wellness products.
                </p>
                <p>
                  I founded Rosa Terra because I saw a need for a different approach—one that honors both medical expertise and the wisdom of natural ingredients, without the noise and confusion.
                </p>
                <p>
                  Every product we offer reflects my professional standards and personal values: proven ingredients, transparent sourcing, and genuine care for maternal health.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-muted rounded-lg p-12 animate-fade-in">
            <h2 className="font-display text-4xl font-light mb-8 text-brand-warm-earth text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-brand-warm-earth mb-3">
                  Evidence-Based
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Every product choice is backed by medical research and professional expertise
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-brand-warm-earth mb-3">
                  Intentionally Simple
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  We believe in quality over quantity, choosing only what truly matters
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-brand-warm-earth mb-3">
                  Mother-Centered
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Your wellness journey guides everything we do, from curation to customer care
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
