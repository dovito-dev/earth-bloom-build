import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
