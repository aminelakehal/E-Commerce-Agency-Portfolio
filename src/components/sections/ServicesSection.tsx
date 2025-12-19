import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Palette, 
  CreditCard, 
  Search, 
  Code, 
  Rocket,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Custom E-commerce Development",
    description: "Tailored online stores built from the ground up to match your unique business needs and brand identity.",
  },
  {
    icon: Code,
    title: "Shopify & WooCommerce",
    description: "Expert development on popular platforms with custom themes, plugins, and seamless integrations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to maximize conversions and provide exceptional user experiences.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure payment gateways including Stripe, PayPal, and regional payment methods for global reach.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical SEO and content optimization to increase organic traffic and improve search rankings.",
  },
  {
    icon: Rocket,
    title: "Performance & Speed",
    description: "Lightning-fast load times and optimized performance for better UX and higher conversions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            E-commerce{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions to build, optimize, and scale your online business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl glass-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={16} className="ml-1" />
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
