
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "Python", level: 85, color: "neon-blue" },
    { name: "Web Development", level: 80, color: "neon-purple" },
    { name: "Machine Learning", level: 75, color: "neon-green" },
    { name: "AI & Deep Learning", level: 70, color: "neon-pink" },
    { name: "Problem Solving", level: 90, color: "neon-blue" },
    { name: "Research & Analysis", level: 85, color: "neon-purple" }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "neon-blue": return "text-neon-blue";
      case "neon-purple": return "text-neon-purple";
      case "neon-green": return "text-neon-green";
      case "neon-pink": return "text-neon-pink";
      default: return "text-neon-blue";
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and expertise I've developed through learning and practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="glass-morphism neon-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`text-lg font-semibold ${getColorClass(skill.color)}`}>
                    {skill.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-neon-blue">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              'Python', 'JavaScript', 'React', 'Node.js', 
              'TensorFlow', 'PyTorch', 'SQL', 'Git',
              'HTML/CSS', 'MongoDB', 'Docker', 'AWS'
            ].map((tech) => (
              <Card key={tech} className="glass-morphism text-center p-4 hover:neon-border transition-all duration-300">
                <CardContent className="p-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    {tech}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
