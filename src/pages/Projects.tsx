import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, Project } from "@/components/sections/ProjectsSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

/* =======================
   Categories (CORRECT)
======================= */
const categories: ("All" | Project["category"])[] = [
  "All",
  "E-commerce",
  "Marketplace",
  "SaaS",
];

/* =======================
   Extended Projects
======================= */
const allProjects: Project[] = [
  ...projects,
  {
    id: 7,
    title: "PetPalace Store",
    description:
      "Premium pet supplies with subscription boxes and pet profile management.",
    image:
      "",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    category: "E-commerce",
  },
  {
    id: 8,
    title: "Vintage Treasures",
    description:
      "Curated vintage and antique marketplace with authentication services.",
    image:
      "",
    techStack: ["Shopify", "React", "Node.js", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Marketplace",
  },
  {
    id: 9,
    title: "GreenLife Wellness",
    description:
      "Health supplements and wellness products with personalized recommendations.",
    image:
      "",
    techStack: ["WooCommerce", "PHP", "MySQL", "PayPal"],
    liveUrl: "#",
    category: "E-commerce",
  },
];

/* =======================
   Page Component
======================= */
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] =
    useState<"All" | Project["category"]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore my complete portfolio of e-commerce solutions across
              various industries.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  activeCategory === category ? "default" : "outline"
                }
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                    {project.category}
                  </span>

                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80"
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
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
