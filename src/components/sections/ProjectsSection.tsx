import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LuxeWear Fashion",
    description: "High-end fashion e-commerce with advanced filtering and AR try-on features.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    techStack: ["Next.js", "Shopify", "Tailwind", "Stripe"],
    liveUrl: "#",
    category: "Fashion",
  },
  {
    id: 2,
    title: "TechGear Pro",
    description: "Electronics marketplace with real-time inventory and comparison tools.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&q=80",
    techStack: ["React", "Node.js", "MongoDB", "PayPal"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Organic Harvest",
    description: "Farm-to-table grocery delivery with subscription and local sourcing.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    techStack: ["WooCommerce", "PHP", "MySQL", "Stripe"],
    liveUrl: "#",
    category: "Food & Grocery",
  },
  {
    id: 4,
    title: "HomeStyle Decor",
    description: "Interior design marketplace with 3D room visualization features.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    techStack: ["React", "Three.js", "Firebase", "Stripe"],
    liveUrl: "#",
    category: "Home & Living",
  },
  {
    id: 5,
    title: "FitZone Athletics",
    description: "Sports equipment store with personalized recommendations and training plans.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Sports & Fitness",
  },
  {
    id: 6,
    title: "Artisan Crafts",
    description: "Handmade marketplace connecting artisans with buyers worldwide.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
    techStack: ["Shopify", "React", "GraphQL", "PayPal"],
    liveUrl: "#",
    category: "Handmade",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden glass-hover"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
          {project.category}
        </span>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectsSectionProps {
  showAll?: boolean;
}

export function ProjectsSection({ showAll = false }: ProjectsSectionProps) {
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of e-commerce solutions I've crafted for clients across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
