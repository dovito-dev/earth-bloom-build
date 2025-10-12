import { Link } from "react-router-dom";
import logo from "@/assets/rosa-terra-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="Rosa Terra Wellness" 
              className="h-12 w-auto mb-4"
            />
            <p className="font-sans text-sm text-muted-foreground max-w-md">
              Modern prenatal wellness backed by medical science and nature's wisdom. 
              Intentional care for every stage of motherhood.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium text-brand-warm-earth mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-serif text-lg font-medium text-brand-warm-earth mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rosa Terra Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
