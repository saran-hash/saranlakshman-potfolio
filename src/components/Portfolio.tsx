
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Agriculture Chatbot",
      description: "An intelligent chatbot that provides modern agriculture tips and helps farmers diagnose plant diseases using machine learning. Covers precision farming, IoT, drones, and vertical farming techniques.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "NLP", "Agriculture AI", "IoT"],
      features: [
        "Plant disease diagnosis using ML",
        "Modern farming techniques guidance", 
        "Precision agriculture recommendations",
        "IoT and drone integration tips",
        "Real-time farmer assistance"
      ],
      color: "neon-green"
    },
    {
      title: "AI Tutor for Blind Students",
      description: "An inclusive AI tutor designed for blind and visually impaired students. Features PDF upload, topic selection, study time management, and lessons read aloud using TTS technology.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["AI", "DeepSeek-R1:7B", "TTS", "PDF Processing", "Accessibility"],
      features: [
        "PDF upload and parsing",
        "AI-powered lesson generation", 
        "Text-to-speech integration",
        "Accessible user interface",
        "Personalized learning paths"
      ],
      color: "neon-blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "neon-green": 
        return {
          text: "text-neon-green",
          border: "border-neon-green/30",
          bg: "bg-neon-green/10"
        };
      case "neon-blue": 
        return {
          text: "text-neon-blue",
          border: "border-neon-blue/30",
          bg: "bg-neon-blue/10"
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
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI-powered solutions that make a difference in people's lives
          </p>
        </div>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const isEven = index % 2 === 0;
            
            return (
              <Card 
                key={project.title} 
                className={`glass-morphism ${colors.border} overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className={`text-2xl lg:text-3xl ${colors.text} mb-4`}>
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className={`${colors.border} ${colors.text}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start text-sm text-muted-foreground">
                              <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button 
                          className={`${colors.bg} ${colors.text} ${colors.border} hover:bg-opacity-20`}
                          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Learn More
                        </Button>
                        <Button 
                          variant="outline"
                          className={`${colors.border} ${colors.text}`}
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
