import { Shield, Award, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Medical-Backed",
    description: "Every product curated by midwifery professionals with evidence-based research"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and verification of all ingredient sources and formulations"
  },
  {
    icon: Heart,
    title: "Mother-Tested",
    description: "Real feedback from real mothers who've used and loved these products"
  },
  {
    icon: Leaf,
    title: "Naturally Sourced",
    description: "Intentional selection of proven natural ingredients, never synthetic fillers"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-brand-warm-earth">
            Built on Trust & Evidence
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just sell products. We offer confidence through carefully researched, professionally curated wellness solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-warm-earth mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
