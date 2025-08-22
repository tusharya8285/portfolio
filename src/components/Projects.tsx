import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills and projects with beautiful animations and clean design.",
      image: "bg-gradient-to-br from-purple-500 to-blue-600",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "PlatePlanner",
      description: "A comprehensive restaurant reservation booking system with real-time availability, table management, and customer notifications.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Shop_lane",
      description: "A full-featured e-commerce application with product catalog, shopping cart, payment integration, and order management.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      tech: ["Next.js", "React", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-glow transition-all duration-500 group border-border/50 overflow-hidden"
            >
              {/* Project Image/Preview */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <Badge className="gradient-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-200"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;