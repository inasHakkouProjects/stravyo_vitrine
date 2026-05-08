import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardCheck,
  Cpu,
  Droplets,
  Gauge,
  Layers,
  LineChart,
  Microscope,
  Radar,
  ScanSearch,
  Shield,
  Sparkles,
  Target,
  ThermometerSun,
  Waves,
  Waypoints,
  Wrench,
} from "lucide-react";

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#expertises", label: "Expertises" },
  { href: "#services", label: "Services" },
  { href: "#technologies", label: "Technologies" },
  { href: "#soutien-strategique", label: "Stratégie" },
  { href: "#post-sinistre", label: "Post-sinistre" },
  { href: "#clients-secteurs", label: "Clients" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroMetrics = [
  "Diagnostic structurel",
  "Génie civil",
  "Inspections réglementaires",
  "Expertise post-sinistre",
] as const;

export const valueCards = [
  {
    title: "Durabilité",
    description:
      "Des décisions techniques alignées sur la durée de vie réelle des ouvrages et sur la performance énergétique du patrimoine.",
  },
  {
    title: "Expertise",
    description:
      "Une équipe d’ingénieurs et de spécialistes dédiés au diagnostic structurel, à la modélisation et à la conformité réglementaire.",
  },
  {
    title: "Innovation",
    description:
      "Des méthodes d’investigation de pointe — capteurs connectés, drones, essais non destructifs — intégrées à chaque mission.",
  },
  {
    title: "Prévention",
    description:
      "Une lecture proactive des risques pour anticiper les interventions, sécuriser les usages et maîtriser les coûts.",
  },
] as const;

export const expertiseItems: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Diagnostics structurels",
    description:
      "Évaluation approfondie des bâtiments existants et des ouvrages de génie civil : état des matériaux, pathologies, charges et chemins de transmission — avec rapports argumentés et plans d’actions priorisés.",
    icon: ScanSearch,
  },
  {
    title: "Ouvrages de génie civil",
    description:
      "Inspections spécialisées et expertises pour ponts, tunnels, ouvrages hydrauliques et grandes infrastructures : accès difficiles, zones sensibles et exigences de continuité de service.",
    icon: Waypoints,
  },
  {
    title: "Inspections réglementaires",
    description:
      "Audits périodiques et vérifications de conformité pour sécuriser les structures face aux référentiels en vigueur, documenter l’état patrimonial et préparer les cycles d’entretien.",
    icon: ClipboardCheck,
  },
];

export const servicePortfolio: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Investigations & sondages",
    description:
      "Essais destructifs et non destructifs, calibrés selon la nature de l’ouvrage : carottages, ressuage, sondages géophysiques et campagnes ciblées pour réduire l’incertitude technique.",
    icon: Microscope,
  },
  {
    title: "Calculs de structure",
    description:
      "Modélisation numérique avancée et vérification des capacités portantes — béton, acier, bois — avec scénarios de charge, vérifications réglementaires et optimisation des renforcements.",
    icon: Cpu,
  },
  {
    title: "Technologies innovantes",
    description:
      "Inspections par drone et endoscopie pour zones inaccessibles ou sensibles ; restitution visuelle haute définition et suivi comparatif dans le temps.",
    icon: Sparkles,
  },
  {
    title: "Expertise multi-matériaux",
    description:
      "Essais en laboratoire et in situ sur béton, bois, métaux, maçonneries et composites pour caractériser les propriétés mécaniques et corréler avec les modèles de calcul.",
    icon: Layers,
  },
];

export const techMethods: {
  title: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Géophysique & ultrasons",
    detail:
      "Détection des matériaux et armatures par radar, Ferroscan et ultrasons pour cartographier l’intérieur des structures sans les dégrader.",
    icon: Radar,
  },
  {
    title: "Caractérisation des matériaux",
    detail:
      "Évaluation de l’état des matériaux par essais in situ et au laboratoire, avec protocoles adaptés aux enjeux juridiques et d’assurance.",
    icon: Gauge,
  },
  {
    title: "Thermographie infrarouge",
    detail:
      "Caméra thermique pour identifier ponts thermiques, infiltrations et zones d’anomalie avant qu’elles ne deviennent critiques.",
    icon: ThermometerSun,
  },
  {
    title: "Corrosion & humidité",
    detail:
      "Systèmes de mesure dédiés pour suivre la corrosion des armatures et l’humidité des parois, et prioriser les traitements.",
    icon: Droplets,
  },
  {
    title: "Inspection par drone",
    detail:
      "Inspection visuelle à distance des zones élevées, tabliers de ponts et façades complexes, avec géoréférencement des observations.",
    icon: Building2,
  },
  {
    title: "Instrumentation connectée",
    detail:
      "Suivi des fissures par fissuromètres connectés et relevés d’ouverture pour objectiver l’évolution dans le temps.",
    icon: Waves,
  },
];

export const strategicBlocks: {
  title: string;
  description: string;
  step: string;
}[] = [
  {
    step: "01",
    title: "Diagnostics préventifs",
    description:
      "Identification précoce des désordres structurels, hiérarchisation des risques et feuille de route d’interventions pour éviter l’aggravation et prolonger la durée de vie des actifs.",
  },
  {
    step: "02",
    title: "Gestion des risques",
    description:
      "Évaluation technique des dangers, priorisation des actions et cadre budgétaire pluriannuel pour piloter la maintenance et les investissements sur le long terme.",
  },
  {
    step: "03",
    title: "Changement de destination",
    description:
      "Études de faisabilité structurelle pour transformations, extensions et réhabilitations — du diagnostic initial aux préconceptions de renfort.",
  },
];

export const postDisasterServices: string[] = [
  "Évaluation immédiate de la sécurité structurelle et des risques résiduels",
  "Mesures de protection temporaire et préconisations de stabilisation",
  "Témoignage d’expert pour réclamations d’assurance et contentieux",
  "Conception technique des solutions de renforcement et de réparation",
  "Supervision des travaux et contrôle qualité sur chantier",
];

export const advantageCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Focus spécialisé",
    description:
      "Une concentration exclusive sur le diagnostic structurel et l’ingénierie associée, pour une profondeur d’analyse et une crédibilité technique maximales.",
    icon: Target,
  },
  {
    title: "Technologie de pointe",
    description:
      "Investissement continu dans drones, endoscopes, capteurs intelligents et logiciels de modélisation 3D pour des missions plus sûres et plus rapides.",
    icon: Wrench,
  },
  {
    title: "Approche proactive",
    description:
      "Une vision préventive qui anticipe les désordres, optimise le budget de maintenance et prolonge la durée de vie utile des structures.",
    icon: LineChart,
  },
  {
    title: "Accompagnement complet",
    description:
      "De l’audit initial à la supervision de chantier, avec conseil stratégique pour la gestion patrimoniale sur plusieurs cycles.",
    icon: Shield,
  },
];

export const footerContact = {
  email: "contact@stravyo.com",
  phone: "+33 (0)6 25 09 40 91",
  address1: "Paris & Île-de-France",
  address2: "Bordeaux & Aquitaine",
  address3: "Lyon & Rhône-Alpes",
};
