
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Custom, modern websites built using the latest web technologies. Responsive designs that work perfectly across all devices with focus on user experience.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimized", "SEO Friendly"],
      color: "neon-blue"
    },
    {
      title: "Freelance Development",
      description: "End-to-end solutions for websites and lightweight applications. From concept to deployment, I provide complete development services.",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Deployment Support"],
      color: "neon-purple"
    },
    {
      title: "AI Solutions",
      description: "Intelligent applications powered by machine learning and AI. Custom solutions for automation, data analysis, and smart decision making.",
      features: ["Machine Learning Models", "Data Analysis", "Chatbot Development", "AI Integration"],
      color: "neon-green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "neon-blue": 
        return {
          text: "text-neon-blue",
          border: "border-neon-blue/30",
          bg: "bg-neon-blue/10"
        };
      case "neon-purple": 
        return {
          text: "text-neon-purple",
          border: "border-neon-purple/30", 
          bg: "bg-neon-purple/10"
        };
      case "neon-green": 
        return {
          text: "text-neon-green",
          border: "border-neon-green/30",
          bg: "bg-neon-green/10"
        };
      default: 
        return {
          text: "text-neon-blue",
          border: "border-neon-blue/30",
          bg: "bg-neon-blue/10"
        };
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional services tailored to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card 
                key={service.title} 
                className={`glass-morphism ${colors.border} hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className={`text-2xl ${colors.text}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full ${colors.border} ${colors.text} hover:${colors.bg}`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
