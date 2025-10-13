import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-light mb-8 text-brand-warm-earth">
            Shipping & Returns
          </h1>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-medium mb-6 text-brand-warm-earth">
              Shipping Policy
            </h2>
            <div className="font-sans text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                We process all orders within 1-2 business days. You'll receive a tracking number via email once your order ships.
              </p>
              
              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="font-sans font-medium text-brand-warm-earth mb-4">Shipping Methods:</h3>
                <ul className="space-y-2">
                  <li>• <strong>Standard Shipping (5-7 business days):</strong> FREE on orders $50+, $6.99 under $50</li>
                  <li>• <strong>Expedited Shipping (2-3 business days):</strong> $12.99</li>
                </ul>
              </div>

              <p>
                We currently ship to addresses within the United States. International shipping coming soon.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-medium mb-6 text-brand-warm-earth">
              Returns & Exchanges
            </h2>
            <div className="font-sans text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                We want you to love your Rosa Terra products. If you're not completely satisfied, you may return unused products within 30 days of delivery for a full refund.
              </p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="font-sans font-medium text-brand-warm-earth mb-4">To initiate a return:</h3>
                <ol className="space-y-2">
                  <li>1. Email hello@rosaterrawellness.com with your order number</li>
                  <li>2. We'll provide return instructions and address</li>
                  <li>3. Ship items back in original packaging</li>
                  <li>4. Refund processed within 5-7 business days of receiving return</li>
                </ol>
              </div>

              <p className="text-base italic">
                <strong>Please note:</strong> For safety and hygiene reasons, we cannot accept returns on opened or used products. Return shipping costs are the customer's responsibility.
              </p>

              <p className="mt-8">
                Questions? Contact us at <a href="mailto:hello@rosaterrawellness.com" className="text-primary hover:underline">hello@rosaterrawellness.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingReturns;
