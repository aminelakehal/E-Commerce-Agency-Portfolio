import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* =======================
   Types
======================= */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: "E-commerce" | "Marketplace" | "SaaS";
  liveUrl?: string;
  githubUrl?: string;
}

/* =======================
   Projects Data
======================= */
export const projects: Project[] = [
  {
    id: 1,
    title: "LuxeWear Fashion",
    description: "High-end fashion e-commerce with advanced filtering.",
    image: "",
    techStack: ["Next.js", "Shopify", "Tailwind", "Stripe"],
    category: "E-commerce",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "TechGear Pro",
    description: "Electronics marketplace with real-time inventory.",
    image: "",
    techStack: ["React", "Node.js", "MongoDB", "PayPal"],
    category: "Marketplace",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Organic Harvest",
    description: "Farm-to-table grocery delivery platform.",
    image: "",
    techStack: ["WooCommerce", "PHP", "MySQL", "Stripe"],
    category: "E-commerce",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "HomeStyle Decor",
    description: "Interior design marketplace with 3D visualization.",
    image: "",
    techStack: ["React", "Three.js", "Firebase", "Stripe"],
    category: "Marketplace",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "FitZone Athletics",
    description: "Sports equipment store with recommendations.",
    image: "",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    category: "E-commerce",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Artisan Crafts",
    description: "Handmade marketplace connecting artisans.",
    image: "",
    techStack: ["Shopify", "React", "GraphQL", "PayPal"],
    category: "SaaS",
    liveUrl: "#",
  },
];

/* =======================
   Project Card
======================= */
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

        {/* Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

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

/* =======================
   Projects Section
======================= */
interface ProjectsSectionProps {
  showAll?: boolean;
}

export function ProjectsSection({ showAll = false }: ProjectsSectionProps) {
  const categories = ["All", "E-commerce", "Marketplace", "SaaS"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of e-commerce solutions across multiple industries.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/70"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
