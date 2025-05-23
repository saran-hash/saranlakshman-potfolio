
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      await emailjs.send(
        'service_0s57rle', 
        'template_40f6xvl',
        templateParams,
        'kmQo5w3gh9q-mgGrM'
      );
      
      // Show success message
      toast.success("Message sent! Thank you for reaching out.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss exciting opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-blue">
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new projects, innovative ideas, or opportunities 
                  to be part of meaningful tech solutions. Whether you need development services 
                  or want to collaborate on AI projects, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-blue font-semibold">@</span>
                    </div>
                    <div>
                      <p className="font-semibold text-neon-blue">Email</p>
                      <a 
                        href="mailto:sarasivakumar20@gmail.com" 
                        className="text-muted-foreground hover:text-neon-blue transition-colors"
                      >
                        sarasivakumar20@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-purple font-semibold">#</span>
                    </div>
                    <div>
                      <p className="font-semibold text-neon-purple">Phone</p>
                      <a 
                        href="tel:7904911486" 
                        className="text-muted-foreground hover:text-neon-purple transition-colors"
                      >
                        +91 7904911486
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-semibold mb-4 text-foreground">What I can help with:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                      AI & Machine Learning Solutions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                      Web Development & Design
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                      Freelance Development Projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-neon-pink rounded-full mr-3"></div>
                      Technical Consultation
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="glass-morphism neon-border">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-purple">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-neon-blue"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-neon-blue"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-neon-blue"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-neon-blue min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-background font-semibold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
