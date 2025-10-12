import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    image: product1,
    name: "Mama's Blend Herbal Tea",
    price: "$24.00",
    description: "Organic blend of chamomile, rose petals, and raspberry leaf"
  },
  {
    image: product2,
    name: "Prenatal Body Oil",
    price: "$38.00",
    description: "Nourishing oil with vitamin E, jojoba, and eucalyptus"
  },
  {
    image: product3,
    name: "Belly Butter",
    price: "$32.00",
    description: "Rich shea butter blend with calendula and lavender"
  },
  {
    image: product1,
    name: "Evening Calm Tea",
    price: "$22.00",
    description: "Soothing evening blend with chamomile and lavender"
  },
  {
    image: product2,
    name: "Stretch Mark Oil",
    price: "$42.00",
    description: "Intensive care oil with rosehip and vitamin E"
  },
  {
    image: product3,
    name: "Nourishing Balm",
    price: "$28.00",
    description: "Multi-purpose balm for dry skin and nipple care"
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-light mb-4 text-brand-warm-earth">
              Our Collection
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated wellness products for every stage of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
