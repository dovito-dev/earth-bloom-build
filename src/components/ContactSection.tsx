import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thank you for reaching out! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-brand-warm-earth">
              Get in Touch
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Questions about our products? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-sans text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, newsletter: checked as boolean })
                }
              />
              <label
                htmlFor="newsletter"
                className="font-sans text-sm text-muted-foreground cursor-pointer"
              >
                I'd like to receive wellness tips and product updates
              </label>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
