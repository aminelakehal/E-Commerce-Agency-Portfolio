import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPhp, 
  SiLaravel, 
  SiTailwindcss,
  SiShopify,
  SiWoo,
  SiStripe,
  SiPaypal,
  SiTypescript,
  SiMongodb
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, level: 95 },
  { name: "Next.js", icon: SiNextdotjs, level: 90 },
  { name: "Node.js", icon: SiNodedotjs, level: 85 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "PHP", icon: SiPhp, level: 80 },
  { name: "Laravel", icon: SiLaravel, level: 75 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
  { name: "Shopify", icon: SiShopify, level: 90 },
  { name: "WooCommerce", icon: SiWoo, level: 85 },
  { name: "Stripe", icon: SiStripe, level: 90 },
  { name: "PayPal", icon: SiPaypal, level: 85 },
  { name: "MongoDB", icon: SiMongodb, level: 80 },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Turning Ideas Into{" "}
              <span className="gradient-text">Digital Success</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm a passionate full-stack developer with over 5 years of experience 
                specializing in e-commerce solutions. I've helped businesses of all sizes 
                launch and scale their online presence.
              </p>
              <p>
                My expertise spans from custom-built solutions to platform-based stores 
                like Shopify and WooCommerce. I believe in creating not just functional 
                websites, but memorable digital experiences that convert visitors into 
                loyal customers.
              </p>
              <p>
                When I'm not coding, I stay updated with the latest e-commerce trends 
                and technologies to ensure my clients always get cutting-edge solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "50+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "12", label: "Technologies" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl glass">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative p-4 rounded-xl glass-hover text-center cursor-pointer"
                >
                  <skill.icon 
                    className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" 
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                  
                  {/* Skill Level Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {skill.level}% Proficiency
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
