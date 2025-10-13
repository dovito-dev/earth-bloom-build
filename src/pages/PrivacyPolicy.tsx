import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-light mb-4 text-brand-warm-earth">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-muted-foreground mb-12">Last Updated: {currentDate}</p>

          <div className="font-sans text-lg text-muted-foreground space-y-8 leading-relaxed">
            <section>
              <p className="mb-6">
                At Rosa Terra Wellness, we respect your privacy and are committed to protecting your personal information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Information We Collect
              </h2>
              <ul className="space-y-2 ml-6">
                <li>• Name, email address, shipping address</li>
                <li>• Payment information (processed securely through Stripe)</li>
                <li>• Order history and preferences</li>
                <li>• Website usage data through cookies and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                How We Use Your Information
              </h2>
              <ul className="space-y-2 ml-6">
                <li>• Process and fulfill your orders</li>
                <li>• Send order confirmations and shipping updates</li>
                <li>• Respond to customer service requests</li>
                <li>• Send marketing emails (with your consent)</li>
                <li>• Improve our website and products</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Third-Party Services
              </h2>
              <p>
                We use trusted partners including Shopify for e-commerce, Stripe for payment processing, and Google Analytics for website analytics. These partners have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Your Rights
              </h2>
              <ul className="space-y-2 ml-6">
                <li>• Access your personal data</li>
                <li>• Request data deletion</li>
                <li>• Opt out of marketing emails</li>
                <li>• Update your information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium mb-4 text-brand-warm-earth">
                Contact Us
              </h2>
              <p>
                Questions about this privacy policy? Email <a href="mailto:hello@rosaterrawellness.com" className="text-primary hover:underline">hello@rosaterrawellness.com</a>
              </p>
              <p className="text-sm italic mt-4">
                Note: This is a sample privacy policy. Consult with legal counsel for a complete privacy policy tailored to your business.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
