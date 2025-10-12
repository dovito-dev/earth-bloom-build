import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-brand-warm-earth">
            Featured Products
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected wellness essentials for your journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans font-medium"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
