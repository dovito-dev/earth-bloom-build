import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

const ProductCard = ({ image, name, price, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-brand-warm-earth mb-2">
          {name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-lg font-medium text-primary">
            {price}
          </span>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
