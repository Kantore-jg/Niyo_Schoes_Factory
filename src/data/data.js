export const company = {
  name: 'Niyo Shoes Factory',
  tagline: 'L\'art du cuir, l\'élégance à vos pieds',
  description:
    'Fabricant de sandales haut de gamme depuis plus de deux décennies, Niyo Shoes Factory allie savoir-faire artisanal et innovation industrielle pour créer des chaussures d\'exception.',
  founded: 2020,
  logo: '/logo.png',
}

export const hero = {
  backgroundImage:
    'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/677155360_1460929245727827_7329390299645018764_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x1536&ctp=s2040x1536&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9oVYqzOqrX8Q7kNvwGgWVcN&_nc_oc=Ado4D00mnfSPF7aE34vWQ5xQMbujKQY2GgTZANgUz8LZf9JPpx1dSf6NNwZohiXXUOM&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=2b9oz_fpLtYqj8qfY9lgNw&_nc_ss=7b2a8&oh=00_AQBY-xubE3v7Ag5kUkmKWUNGKFgdtAQC4nFjb4G-Cx4aVg&oe=6A51D571',
  title: 'Niyo Shoes Factory',
  subtitle: 'L\'art du cuir, l\'élégance à vos pieds',
  description:
    'Découvrez l\'excellence de la fabrication de sandales premium, alliant tradition artisanale et design contemporain pour un confort inégalé.',
  ctaPrimary: { label: 'Découvrir nos collections', href: '#produits' },
  ctaSecondary: { label: 'Nous contacter sur WhatsApp', href: '#contact' },
}

export const navigation = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'produits', label: 'Produits', href: '#produits' },
  { id: 'evenements', label: 'Événements', href: '#evenements' },
  { id: 'marches', label: 'Marchés', href: '#marches' },
  { id: 'galerie', label: 'Galerie', href: '#galerie' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'apropos', label: 'À propos', href: '#apropos' },

]

export const about = {
  title: 'À propos de nous',
  subtitle: 'Une histoire de passion et d\'excellence',
  history:
    'Fondée en 2020, Niyo Shoes Factory est née de la vision d\'un artisan passionné par le cuir et la confection de chaussures. Depuis plus de vingt ans, notre atelier a grandi pour devenir une référence dans la fabrication de sandales de qualité supérieure, exportées dans le monde entier.',
  mission:
    'Créer des sandales qui allient confort, durabilité et esthétique, en respectant les traditions artisanales tout en intégrant les innovations les plus récentes.',
  vision:
    'Devenir la marque de référence mondiale pour les sandales en cuir premium, reconnue pour son excellence et son engagement envers la qualité.',
  values: [
    {  title: 'Qualité', description: 'Chaque paire est inspectée avec le plus grand soin.' },
    {  title: 'Artisanat', description: 'Un savoir-faire transmis de génération en génération.' },
    {  title: 'Innovation', description: 'Des techniques modernes au service de la tradition.' },
    {  title: 'Durabilité', description: 'Des matériaux responsables pour un avenir meilleur.' },
  ],
  capabilities: [
    { label: 'Capacité de production', value: '200', unit: 'paires/an' },
    { label: 'Années d\'expérience', value: '5', unit: 'ans' },
    { label: 'Pays exportés', value: '4+', unit: 'marchés' },
    { label: 'Employés qualifiés', value: '6', unit: 'artisans' },
  ],
  image:
    'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/677155360_1460929245727827_7329390299645018764_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x1536&ctp=s2040x1536&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9oVYqzOqrX8Q7kNvwGgWVcN&_nc_oc=Ado4D00mnfSPF7aE34vWQ5xQMbujKQY2GgTZANgUz8LZf9JPpx1dSf6NNwZohiXXUOM&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=2b9oz_fpLtYqj8qfY9lgNw&_nc_ss=7b2a8&oh=00_AQBY-xubE3v7Ag5kUkmKWUNGKFgdtAQC4nFjb4G-Cx4aVg&oe=6A51D571',
}

export const categories = [
  { id: 'homme', label: 'Sandales Homme', slug: 'homme' },
  { id: 'femme', label: 'Sandales Femme', slug: 'femme' },
]

export const products = [
  {
    id: 1,
    category: 'homme',
    name: 'Niyo Classic Homme',
    description: 'Sandale en cuir pleine fleur avec semelle anatomique et finitions main.',
    image: 'https://images.unsplash.com/photo-1603487748961-7a0e0b0b0b0b?w=600&q=80',
    colors: ['Marron', 'Noir', 'Cognac'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
  },
  {
    id: 2,
    category: 'homme',
    name: 'Niyo Urban Homme',
    description: 'Design contemporain avec bride croisée et semelle antidérapante.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    colors: ['Noir', 'Brun foncé', 'Sable'],
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: 3,
    category: 'homme',
    name: 'Niyo Artisan Homme',
    description: 'Modèle artisanal avec coutures visibles et cuir vieilli naturellement.',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8d077?w=600&q=80',
    colors: ['Cognac', 'Marron', 'Noir'],
    sizes: ['40', '41', '42', '43', '44', '45'],
  },
  {
    id: 4,
    category: 'femme',
    name: 'Niyo Élégance Femme',
    description: 'Sandale féminine raffinée avec talon compensé et brides ajustables.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    colors: ['Nude', 'Noir', 'Bordeaux', 'Or'],
    sizes: ['36', '37', '38', '39', '40', '41'],
  },
  {
    id: 5,
    category: 'femme',
    name: 'Niyo Summer Femme',
    description: 'Légèreté et confort pour les journées ensoleillées, finition dorée.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    colors: ['Blanc', 'Or', 'Rose poudré', 'Noir'],
    sizes: ['35', '36', '37', '38', '39', '40'],
  },
  {
    id: 6,
    category: 'femme',
    name: 'Niyo Premium Femme',
    description: 'Collection premium avec ornements dorés et cuir nappa souple.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    colors: ['Noir', 'Bordeaux', 'Camel', 'Or'],
    sizes: ['36', '37', '38', '39', '40', '41'],
  },
]

export const events = [
  {
    id: 1,
    name: 'Salon International de la Chaussure',
    date: 'Mars 2024',
    location: 'Milan, Italie',
    description: 'Présentation de la collection Premium 2024 devant plus de 500 visiteurs professionnels.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    id: 2,
    name: 'Foire Artisanale Africaine',
    date: 'Juin 2023',
    location: 'Dakar, Sénégal',
    description: 'Exposition de notre savoir-faire artisanal et démonstrations en direct.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f39d4662?w=600&q=80',
  },
  {
    id: 3,
    name: 'Expo Mode & Cuir',
    date: 'Septembre 2023',
    location: 'Paris, France',
    description: 'Participation au salon européen de référence pour l\'industrie du cuir.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
  },
  {
    id: 4,
    name: 'Fashion Week Lagos',
    date: 'Octobre 2022',
    location: 'Lagos, Nigeria',
    description: 'Défilé en collaboration avec des créateurs africains émergents.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
  },
]

export const markets = [
  {
    id: 'sn',
    country: 'Sénégal',
    code: 'SN',
    description: 'Marché domestique principal avec un réseau de 25 points de vente.',
    distribution: 'Distributeurs nationaux, boutiques partenaires',
    x: 48,
    y: 52,
  },
  {
    id: 'ci',
    country: 'Côte d\'Ivoire',
    code: 'CI',
    description: 'Présence forte en Afrique de l\'Ouest avec croissance annuelle de 15%.',
    distribution: 'Importateurs régionaux, grandes surfaces',
    x: 46,
    y: 54,
  },
  {
    id: 'fr',
    country: 'France',
    code: 'FR',
    description: 'Premier marché européen, distribution sélective dans 40 boutiques.',
    distribution: 'Boutiques de luxe, e-commerce partenaire',
    x: 50,
    y: 32,
  },
  {
    id: 'de',
    country: 'Allemagne',
    code: 'DE',
    description: 'Marché en expansion avec focus sur la qualité et la durabilité.',
    distribution: 'Distributeurs spécialisés chaussures',
    x: 52,
    y: 30,
  },
  {
    id: 'us',
    country: 'États-Unis',
    code: 'US',
    description: 'Lancement récent sur le marché nord-américain via partenaires.',
    distribution: 'Importateurs, boutiques concept stores',
    x: 22,
    y: 38,
  },
  {
    id: 'ae',
    country: 'Émirats Arabes Unis',
    code: 'AE',
    description: 'Marché premium du Golfe avec forte demande pour le luxe artisanal.',
    distribution: 'Boutiques de luxe, hôtels 5 étoiles',
    x: 62,
    y: 48,
  },
]

export const gallery = {
  categories: [
    { id: 'all', label: 'Tout' },
    { id: 'produits', label: 'Produits' },
    { id: 'fabrication', label: 'Fabrication' },
    { id: 'atelier', label: 'Atelier' },
    { id: 'evenements', label: 'Événements' },
    { id: 'equipe', label: 'Équipe' },
  ],
  images: [
    { id: 1, category: 'produits', src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.02.24%20PM.jpeg?updatedAt=1783361918630', alt: 'Sandale femme élégante' },
    { id: 2, category: 'produits', src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80', alt: 'Sandale homme classique' },
    { id: 3, category: 'fabrication', src: 'https://images.unsplash.com/photo-1556906781-95a0d59b1efe?w=600&q=80', alt: 'Processus de fabrication' },
    { id: 4, category: 'atelier', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', alt: 'Atelier de production' },
    { id: 5, category: 'atelier', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80', alt: 'Machines de couture' },
    { id: 6, category: 'evenements', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Salon professionnel' },
    { id: 7, category: 'evenements', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', alt: 'Défilé de mode' },
    { id: 8, category: 'equipe', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', alt: 'Équipe Niyo' },
    { id: 9, category: 'produits', src: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80', alt: 'Collection été' },
    { id: 10, category: 'fabrication', src: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8d077?w=600&q=80', alt: 'Finitions main' },
    { id: 11, category: 'atelier', src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80', alt: 'Stockage cuir' },
    { id: 12, category: 'equipe', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', alt: 'Artisan au travail' },
  ],
}

export const contact = {
  title: 'Contactez-nous',
  subtitle: 'Nous sommes à votre écoute',
  address: 'Gitega,Bwoga',
  phone: '+257 76 51 04 03',
  email: 'contact@niyoshoesfactory.com',
  mapEmbed:
    '',
}

export const socialLinks = [
  { id: 'facebook', label: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { id: 'twitter', label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
]

export const footer = {
  copyright: `© ${new Date().getFullYear()} Niyo Shoes Factory. Tous droits réservés.`,
  tagline: 'L\'excellence du cuir, depuis 2020.',
  quickLinks: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Produits', href: '#produits' },
    { label: 'Contact', href: '#contact' },
  ],
  productLinks: [
    { label: 'Sandales Homme', href: '#produits' },
    { label: 'Sandales Femme', href: '#produits' },
    { label: 'Collection Premium', href: '#produits' },
  ],
}

export const whatsapp = {
  number: '+257 76 51 04 03',
  message: 'Bonjour, je souhaite en savoir plus sur vos sandales Niyo Shoes Factory.',
  label: 'WhatsApp',
}

export default {
  company,
  hero,
  navigation,
  about,
  categories,
  products,
  events,
  markets,
  gallery,
  contact,
  socialLinks,
  footer,
  whatsapp,
}