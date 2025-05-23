
import { useEffect } from "react";
import emailjs from 'emailjs-com';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("kmQo5w3gh9q-mgGrM");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Saran Lakshman MS. Built with passion for innovation and inclusivity.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            AI Enthusiast | Problem Solver | Future Software Developer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
