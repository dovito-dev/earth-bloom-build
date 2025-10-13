import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/rosa-terra-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Rosa Terra Wellness" 
              className="h-24 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/shop" 
              className="font-sans text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="font-sans text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-sans text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <ShoppingCart className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
