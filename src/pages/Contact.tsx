import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
