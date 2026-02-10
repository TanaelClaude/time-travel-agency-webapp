import { motion } from "framer-motion";
import { Shield, Zap, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité absolue",
    desc: "Nos protocoles temporels garantissent votre sécurité à chaque instant du voyage.",
  },
  {
    icon: Zap,
    title: "Technologie avancée",
    desc: "Portails quantiques de dernière génération pour un transfert temporel optimal.",
  },
  {
    icon: Clock,
    title: "Précision temporelle",
    desc: "Arrivée garantie à la date et au lieu exact de votre choix, à la seconde près.",
  },
  {
    icon: Users,
    title: "Guides experts",
    desc: "Des historiens et scientifiques vous accompagnent pour une immersion totale.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">
            À propos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi <span className="text-gradient-gold">nous choisir</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Depuis 2087, TimeTravel Agency est le leader mondial du voyage temporel. 
            Notre expertise et notre technologie sont inégalées.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card-gradient border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
