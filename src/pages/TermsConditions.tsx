import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-light mb-4 text-brand-warm-earth">
            Terms & Conditions
          </h1>
          <p className="font-sans text-sm text-muted-foreground mb-12">Last Updated: {currentDate}</p>

          <div className="font-sans text-lg text-muted-foreground space-y-8 leading-relaxed">
            <section>
              <p className="mb-6">
                Welcome to Rosa Terra Wellness. By using our website and purchasing our products, you agree to these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Use of Website
              </h2>
              <p>
                This website is for personal, non-commercial use. You may not reproduce, distribute, or create derivative works from our content without permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Products & Availability
              </h2>
              <p>
                We strive for accuracy in product descriptions and pricing. We reserve the right to correct errors and update information. Product availability may vary.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Pricing & Payment
              </h2>
              <p>
                All prices are in USD. Payment is processed securely through Stripe. We accept major credit cards.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Medical Disclaimer
              </h2>
              <p className="bg-muted p-6 rounded-lg">
                Our products are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before using any new wellness products during pregnancy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Limitation of Liability
              </h2>
              <p>
                Rosa Terra Wellness is not liable for any indirect, incidental, or consequential damages arising from use of our products or website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the United States.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Contact
              </h2>
              <p>
                Questions about these terms? Email <a href="mailto:hello@rosaterrawellness.com" className="text-primary hover:underline">hello@rosaterrawellness.com</a>
              </p>
              <p className="text-sm italic mt-4">
                Note: This is a sample terms and conditions document. Consult with legal counsel for complete terms and conditions tailored to your business.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
