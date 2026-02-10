import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import parisImg from "@/assets/paris-1889.jpg";
import cretaceousImg from "@/assets/cretaceous.jpg";
import florenceImg from "@/assets/florence-1504.jpg";

const destinations = [
  {
    title: "Paris 1889",
    epoch: "XIXe siècle",
    description:
      "Vivez l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Plongez dans le Paris de la Belle Époque, ses cafés littéraires et ses boulevards haussmanniens.",
    image: parisImg,
    highlights: ["Tour Eiffel", "Belle Époque", "Exposition Universelle"],
    duration: "3-5 jours",
  },
  {
    title: "Crétacé",
    epoch: "-68 millions d'années",
    description:
      "Observez les dinosaures dans leur habitat naturel. Explorez des forêts tropicales luxuriantes et des volcans en activité dans une aventure préhistorique unique.",
    image: cretaceousImg,
    highlights: ["T-Rex", "Volcans", "Jungle primaire"],
    duration: "2-4 jours",
  },
  {
    title: "Florence 1504",
    epoch: "Renaissance",
    description:
      "Rencontrez les plus grands artistes de la Renaissance. Assistez à la création du David de Michel-Ange et découvrez l'atelier de Léonard de Vinci.",
    image: florenceImg,
    highlights: ["Michel-Ange", "Léonard", "Art Renaissance"],
    duration: "4-7 jours",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Nos destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choisissez votre <span className="text-gradient-gold">époque</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Trois destinations extraordinaires, trois époques fascinantes. 
            Chaque voyage est une expérience unique et inoubliable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} {...dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
