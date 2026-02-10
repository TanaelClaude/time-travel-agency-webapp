# TimeTravel Agency - Webapp Interactive

Webapp pédagogique pour une agence de voyage temporel fictive. Prototype UI/UX et intégrations IA pour démonstration.

## Technologies utilisées

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

## Fonctionnalités implémentées
- Landing page interactive
- Galerie de 3 destinations temporelles
- Chatbot conversationnel intégré (connexion API)
- Recommandations simples basées sur une entrée utilisateur
- Transitions et animations UI

## Outils IA / Transparence
- Génération de code et assistance : GitHub Copilot, Lovable
- Visuels / assets : Google Gemini & Lovable

## Installation (rapide, Windows)
Prérequis : Node.js >= 16, npm ou pnpm.
PowerShell :
1. Cloner :
   git clone [<repo-url>](https://github.com/TanaelClaude/time-travel-agency-webapp.git)
   cd time-travel-agency-webapp
2. Installer dépendances :
   npm install
3. Lancer en dev :
   npm run dev
4. Build :
   npm run build
5. Preview :
   npm run preview
6. Consulter en ligne :
    [<Notre site>](https://time-travel-agency-webapp-ruby.vercel.app/)

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

## 🎨 Design System

- **Thème** : Sombre cinématique avec accents dorés
- **Polices** : *Playfair Display* (titres) + *Inter* (corps)
- **Tokens CSS** : Variables HSL personnalisées dans `index.css`
- **Effets** : Glassmorphism, dégradés dorés, animations flottantes

## 📝 Fonctionnalités

- ✅ Hero section animée avec particules
- ✅ Galerie interactive des 3 destinations temporelles
- ✅ Chatbot FAQ
- ✅ Formulaire de réservation avec validation
- ✅ Design responsive
- ✅ Animations Framer Motion

## Licence
Projet pédagogique - M1/M2 Digital & IA

## Crédits
- Visuels : Google Gemini
- Bibliothèques open-source : Vue, Tailwind CSS