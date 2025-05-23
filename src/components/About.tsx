
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by curiosity and passion for innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="glass-morphism neon-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-neon-blue">My Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a 3rd-year student in Artificial Intelligence and Machine Learning, 
                  passionate about solving real-world problems through technology. My interests 
                  include AI, web development, and biking. My goal is to become a software 
                  developer who builds inclusive and intelligent solutions that make a positive 
                  impact on society.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism neon-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-neon-purple">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-3">
                  {['AI & Machine Learning', 'Web Development', 'Biking', 'Problem Solving', 'Tech Innovation'].map((interest) => (
                    <span 
                      key={interest}
                      className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full text-sm border border-neon-blue/30"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Education Section */}
          <div>
            <Card className="glass-morphism neon-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-neon-green">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-neon-blue pl-6">
                    <h4 className="text-xl font-semibold text-neon-blue">
                      B.Tech in Artificial Intelligence and Machine Learning
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      Sri Shakthi Institute of Engineering and Technology
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      2022 – Present
                    </p>
                    <p className="text-muted-foreground mt-3">
                      Focusing on advanced AI concepts, machine learning algorithms, 
                      and practical applications in software development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="glass-morphism text-center p-6">
                <div className="text-2xl font-bold text-neon-blue">3+</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </Card>
              <Card className="glass-morphism text-center p-6">
                <div className="text-2xl font-bold text-neon-purple">2+</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
