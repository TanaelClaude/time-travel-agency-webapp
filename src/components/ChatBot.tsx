import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FAQ: Record<string, string> = {
  "paris": "Paris 1889 vous transporte à l'Exposition Universelle ! Vous assisterez à l'inauguration de la Tour Eiffel, flânerez sur les Champs-Élysées et dégusterez la cuisine de la Belle Époque. Durée recommandée : 3 à 5 jours.",
  "crétacé": "Le Crétacé est notre destination la plus aventureuse ! Observez des T-Rex et Tricératops dans leur habitat naturel, explorez des jungles primordiales et des volcans actifs. Durée : 2 à 4 jours. Équipement de protection fourni !",
  "florence": "Florence 1504, la perle de la Renaissance ! Rencontrez Michel-Ange pendant la création du David, visitez l'atelier de Léonard de Vinci et admirez le Duomo. Durée : 4 à 7 jours.",
  "prix": "Nos tarifs varient selon la destination et la durée. Paris 1889 à partir de 4 500€, le Crétacé à partir de 7 200€, et Florence 1504 à partir de 5 800€ par personne. Consultez notre formulaire de réservation pour un devis personnalisé !",
  "sécurité": "Votre sécurité est notre priorité absolue ! Nos portails quantiques sont certifiés ISO-Temporel 9001. Chaque voyage inclut un guide expert, un kit de survie adapté à l'époque, et une balise de retour instantané.",
  "réserv": "Vous pouvez réserver directement via notre formulaire en bas de page ! Remplissez vos informations et nous vous contacterons sous 24h pour finaliser votre voyage.",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(FAQ)) {
    if (lower.includes(key)) return response;
  }
  if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello")) {
    return "Bonjour ! 👋 Bienvenue chez TimeTravel Agency. Je suis votre assistant virtuel. Comment puis-je vous aider ? Vous pouvez me poser des questions sur nos destinations (Paris 1889, le Crétacé, Florence 1504), les tarifs ou la sécurité.";
  }
  return "Merci pour votre question ! Je suis spécialisé dans nos 3 destinations : **Paris 1889**, le **Crétacé** et **Florence 1504**. N'hésitez pas à me demander des détails sur l'une d'entre elles, nos tarifs ou nos mesures de sécurité. 😊";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Bonjour ! 👋 Je suis l'assistant TimeTravel. Comment puis-je vous aider à planifier votre voyage temporel ?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-gold-light transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] rounded-xl overflow-hidden border border-border bg-card flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Assistant TimeTravel</p>
                  <p className="font-body text-xs text-muted-foreground">En ligne</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={12} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg font-body text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                      <User size={12} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot size={12} className="text-primary" />
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-secondary">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-gold" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-gold" style={{ animationDelay: "0.2s" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-gold" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  onClick={sendMessage}
                  className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-gold-light transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
