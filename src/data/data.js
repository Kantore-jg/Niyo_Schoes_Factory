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
    'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.44%20PM/WhatsApp%20Image%202026-07-06%20at%203.03.11%20PM.jpeg?updatedAt=1783361918949',
  title: 'Niyo Shoes Factory',
  subtitle: 'L\'art du cuir, l\'élégance à vos pieds',
  description:
    'Découvrez l\'excellence de la fabrication de sandales premium, alliant tradition artisanale et design contemporain pour un confort inégalé.',
  ctaPrimary: { label: 'Découvrir nos collections', href: '#produits' },
  ctaSecondary: { label: 'Nous contacter sur WhatsApp', href: '#contact' },
}

export const navigation = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'apropos', label: 'À propos', href: '#apropos' },
  { id: 'produits', label: 'Produits', href: '#produits' },
  { id: 'evenements', label: 'Événements', href: '#evenements' },
  { id: 'marches', label: 'Marchés', href: '#marches' },
  { id: 'galerie', label: 'Galerie', href: '#galerie' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const about = {
  title: 'À propos de nous',
  subtitle: 'Une histoire de passion et d\'excellence',
  history:
    'Fondée en 2020 à Gitega, Niyo Shoes Factory est née de la vision d\'un artisan passionné par le cuir et la confection de chaussures. Notre atelier a grandi pour devenir une référence dans la fabrication de sandales de qualité supérieure au Burundi et à l\'international.',
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
    name: 'Sandales Homme',
    description: 'Sandale en cuir pleine fleur avec semelle anatomique et finitions main.',
    image: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.00.58%20PM.jpeg?updatedAt=1783361918956',
    colors: ['Marron', 'Noir', 'Cognac'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
  },
  {
    id: 2,
    category: 'homme',
    name: 'PAEEJ',
    description: 'Design contemporain avec bride croisée et semelle antidérapante.',
    image: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.02.24%20PM.jpeg?updatedAt=1783361918630',
    colors: ['Noir', 'Brun foncé', 'Sable'],
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: 3,
    category: 'homme',
    name: 'Femmes & Hommes',
    description: 'Modèle artisanal avec coutures visibles et cuir vieilli naturellement.',
    image: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.01.35%20PM.jpeg?updatedAt=1783361918287',
    colors: ['Cognac', 'Marron', 'Noir'],
    sizes: ['40', '41', '42', '43', '44', '45'],
  },
  {
    id: 4,
    category: 'femme',
    name: 'Niyo Élégance Femme',
    description: 'Sandale féminine raffinée avec talon compensé et brides ajustables.',
    image: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.02.24%20PM.jpeg?updatedAt=1783361918630',
    colors: ['Nude', 'Noir', 'Bordeaux', 'Or'],
    sizes: ['36', '37', '38', '39', '40', '41'],
  },
  {
    id: 5,
    category: 'femme',
    name: 'Niyo Summer Femme',
    description: 'Légèreté et confort pour les journées ensoleillées, finition dorée.',
    image: 'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/476281320_1120268489793906_2065771755404960301_n.jpg?stp=dst-jpg_tt6&cstp=mx720x478&ctp=s720x478&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dZJmkOogM3EQ7kNvwHhAK7r&_nc_oc=Adr6uLA4SJthZGm-uByAA4_EmuZ6Wc843h079_EFLNyxweiGvE4wCr3FMbaJTV7nUIM&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=GNMKCdyruP8hmm3HpEpVZQ&_nc_ss=7b2a8&oh=00_AQApqnl55zHr98gp8Y6twoUyn-ayWLwAz0dTqK-v5aqvTA&oe=6A52AB1E',
    colors: ['Blanc', 'Or', 'Rose poudré', 'Noir'],
    sizes: ['35', '36', '37', '38', '39', '40'],
  },
]

export const events = [
  {
    id: 1,
    name: "Salon International de l'UNFPA",
    date: 'Janvier 2026',
    location: 'Bujumbura, Source du Nil',
    description: 'Présentation de la collection Premium 2026 devant plus de 400 visiteurs professionnels.',
    image: 'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/601016819_1362397192247700_8280626106810243167_n.jpg?stp=dst-jpg_tt6&cstp=mx780x1040&ctp=s780x1040&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vW8g7-tLS2gQ7kNvwF-d_3y&_nc_oc=AdoqWFpnUMXvmkBIvC9RJD5rq9h7oTZLGkffEVsqYaPyfbUeDJCTHPnsKUswQ-8kPcYKYpL_UXnv8aDaxJNlBAeH&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=69mbjoaVmlDc1xoTW8OeYg&_nc_ss=7b2a8&oh=00_AQD9A5sjUAOHXeFpremygG3fLY_rQOmW3cc0mM4kZNtcCw&oe=6A5280A2',
  },
  {
    id: 2,
    name: 'Foire Artisanale Africaine',
    date: 'Juin 2025',
    location: 'Gitega, Burundi',
    description: 'Exposition de notre savoir-faire artisanal et démonstrations en direct.',
    image: 'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/476353308_1120892359731519_6180291981451020554_n.jpg?stp=dst-jpg_tt6&cstp=mx780x1032&ctp=s780x1032&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P2ixO2OR72kQ7kNvwFmVtWj&_nc_oc=Adp5GtwnsmzK0-L-1TlpRM6-2p1abofV2zeFyI9nCZBgVhwMAYhhlWBdaYRcWhH19vHqag4S3vYhjyhRpGEEWclk&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=fustaaz4kpgY0X50YYT6hA&_nc_ss=7b2a8&oh=00_AQB5iB3WmeGptfJMa5R1RaLZ0KF6SaBTlkHXK_7GHSfwEw&oe=6A527EB1',
  },
]

export const markets = [
  {
    id: '1',
    address: 'Gitega, Bwoga, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/677155360_1460929245727827_7329390299645018764_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x1536&ctp=s2040x1536&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9oVYqzOqrX8Q7kNvwGgWVcN&_nc_oc=Ado4D00mnfSPF7aE34vWQ5xQMbujKQY2GgTZANgUz8LZf9JPpx1dSf6NNwZohiXXUOM&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=2b9oz_fpLtYqj8qfY9lgNw&_nc_ss=7b2a8&oh=00_AQBY-xubE3v7Ag5kUkmKWUNGKFgdtAQC4nFjb4G-Cx4aVg&oe=6A51D571',
  },
  {
    id: '2',
    address: 'Muyinga, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.00.58%20PM.jpeg?updatedAt=1783361918956',
  },
  {
    id: '3',
    address: 'Ngozi, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.02.24%20PM.jpeg?updatedAt=1783361918630',
  },
  {
    id: '4',
    address: 'Bujumbura, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.01.35%20PM.jpeg?updatedAt=1783361918287',
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
    { id: 2, category: 'produits', src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.01.35%20PM.jpeg?updatedAt=1783361918287', alt: 'Sandale homme classique' },
    { id: 3, category: 'fabrication', src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.44%20PM/WhatsApp%20Image%202026-07-06%20at%203.03.11%20PM.jpeg?updatedAt=1783361918949', alt: 'Processus de fabrication' },
    { id: 9, category: 'produits', src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.00.58%20PM.jpeg?updatedAt=1783361918956', alt: 'Collection été' },
    { id: 10, category: 'fabrication', src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/WhatsApp%20Image%202026-07-06%20at%203.01.35%20PM.jpeg?updatedAt=1783361918287', alt: 'Finitions main' },
  ],
}

export const contact = {
  title: 'Contactez-nous',
  subtitle: 'Nous sommes à votre écoute',
  address: 'Gitega, Bwoga, Burundi',
  phone: '+257 76 51 04 03',
  email: 'contact@niyoshoesfactory.com',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d29.9246!3d-3.4260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19a0f3e2f3b8f8b1%3A0x0!2zR2l0ZWdhLCBCdXJ1bmRp!5e0!3m2!1sfr!2sbi!4v1',
  mapLink: 'https://www.google.com/maps/search/Gitega+Bwoga+Burundi',
}

export const socialLinks = [
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054322970161', icon: 'facebook' },
  // { id: 'instagram', label: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  // { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  // { id: 'twitter', label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
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
  number: '25776510403',
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
