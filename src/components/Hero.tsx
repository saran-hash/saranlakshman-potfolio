
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-neon-purple/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2aaf6d1d-36aa-4271-b936-9d1e6c7d5720.png" 
                  alt="Saran Lakshman MS" 
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Saran Lakshman MS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            AI Enthusiast | Problem Solver | Future Software Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate 3rd-year AI & ML student building impactful tech solutions 
            that solve real-world problems through intelligent innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon-blue hover:bg-neon-blue/80 text-background font-semibold px-8 py-3 neon-border"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
