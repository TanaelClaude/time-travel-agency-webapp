import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

interface DestinationCardProps {
  title: string;
  epoch: string;
  description: string;
  image: string;
  highlights: string[];
  duration: string;
  index: number;
}

const DestinationCard = ({ title, epoch, description, image, highlights, duration, index }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative rounded-xl overflow-hidden bg-card-gradient border border-border hover:border-primary/40 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-body font-semibold rounded-full uppercase tracking-wider">
            {epoch}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        {/* Info */}
        <div className="flex items-center gap-4 mb-4 text-xs font-body text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-primary" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-primary" />
            {title}
          </span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {highlights.map((h) => (
            <span
              key={h}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-body"
            >
              {h}
            </span>
          ))}
        </div>

        <button
          onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full py-3 border border-primary/30 text-primary font-body text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider"
        >
          Réserver cette destination
        </button>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
