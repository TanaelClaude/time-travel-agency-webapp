import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const destinations = ["Paris 1889", "Crétacé", "Florence 1504"];

const BookingForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    travelers: "1",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.destination || !form.date) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Réservation envoyée !", description: "Nous vous contacterons sous 24h." });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto max-w-lg text-center"
        >
          <CheckCircle size={64} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Merci !</h2>
          <p className="font-body text-muted-foreground mb-6">
            Votre demande de réservation a été envoyée. Notre équipe vous contactera dans les 24 heures.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", destination: "", date: "", travelers: "1", message: "" }); }}
            className="px-6 py-3 border border-primary/30 text-primary font-body text-sm rounded-lg hover:bg-primary/10 transition-colors uppercase tracking-wider"
          >
            Nouvelle réservation
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">Réservation</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planifiez votre <span className="text-gradient-gold">voyage</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="p-8 rounded-xl bg-card-gradient border border-border space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Nom complet *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="jean@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Destination *</label>
              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Choisir une destination</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Date de départ *</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2">Nombre de voyageurs</label>
            <input
              name="travelers"
              type="number"
              min="1"
              max="10"
              value={form.travelers}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2">Message (optionnel)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Des demandes particulières ?"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2 shine"
          >
            <Send size={16} />
            Envoyer ma réservation
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
