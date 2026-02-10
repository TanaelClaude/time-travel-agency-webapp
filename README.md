# ⏳ TimeTravel Agency — Webapp

Application web interactive pour l'agence de voyages temporels **TimeTravel Agency**, proposant 3 destinations : **Paris 1889**, le **Crétacé** et **Florence 1504**.

---

## 🚀 Technologies utilisées

| Technologie | Rôle |
|---|---|
| **React 18** | Framework UI (composants réactifs, SPA) |
| **TypeScript** | Typage statique du code JavaScript |
| **Vite** | Bundler & serveur de développement ultra-rapide |
| **Tailwind CSS** | Framework CSS utility-first pour le styling |
| **Framer Motion** | Animations et transitions fluides |
| **shadcn/ui** | Bibliothèque de composants UI (boutons, formulaires, toasts…) |
| **React Router DOM** | Navigation client-side (SPA routing) |
| **Lucide React** | Icônes SVG modernes |
| **React Hook Form + Zod** | Gestion et validation des formulaires |
| **TanStack React Query** | Gestion du state serveur et du cache |

---

## 💬 Chatbot intégré

Le chatbot est un **agent conversationnel local** (sans appel API externe). Il fonctionne avec un système de **matching par mots-clés** :

- **Moteur** : Logique JavaScript côté client (pas d'IA cloud)
- **Méthode** : Recherche de mots-clés dans le message utilisateur (`paris`, `crétacé`, `florence`, `prix`, `sécurité`, `réserv`…)
- **Réponses** : Base de données FAQ statique intégrée au composant `ChatBot.tsx`
- **UX** : Simulation de temps de réponse (délai aléatoire), animation de "typing", interface de chat moderne avec Framer Motion

> ⚠️ Ce n'est **pas** un modèle d'IA (type GPT ou LLM). Pour des réponses intelligentes, il faudrait connecter une API comme OpenAI, Mistral ou Perplexity.

---

## 📁 Structure du projet

```
src/
├── assets/              # Images des destinations (générées par IA)
├── components/
│   ├── Navbar.tsx        # Barre de navigation
│   ├── HeroSection.tsx   # Section héro avec animations
│   ├── DestinationsSection.tsx  # Galerie des 3 destinations
│   ├── DestinationCard.tsx      # Card interactive par destination
│   ├── AboutSection.tsx  # Présentation de l'agence
│   ├── BookingForm.tsx   # Formulaire de réservation
│   ├── ChatBot.tsx       # Agent conversationnel (FAQ)
│   ├── Footer.tsx        # Pied de page
│   └── ui/               # Composants shadcn/ui
├── pages/
│   ├── Index.tsx         # Page d'accueil principale
│   └── NotFound.tsx      # Page 404
└── index.css             # Design system (tokens CSS, thème sombre doré)
```

---

## 🎨 Design System

- **Thème** : Sombre cinématique avec accents dorés
- **Polices** : *Playfair Display* (titres) + *Inter* (corps)
- **Tokens CSS** : Variables HSL personnalisées dans `index.css`
- **Effets** : Glassmorphism, dégradés dorés, animations flottantes

---

## ⚙️ Lancer le projet

```bash
npm install
npm run dev
```

---

## 📝 Fonctionnalités

- ✅ Hero section animée avec particules
- ✅ Galerie interactive des 3 destinations temporelles
- ✅ Chatbot FAQ avec matching par mots-clés
- ✅ Formulaire de réservation avec validation
- ✅ Design responsive
- ✅ Animations Framer Motion
