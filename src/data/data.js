export const company = {
  name: 'Niyo Shoes Factory',
  tagline: 'Portez des chaussures niyo, marchez confortablement!',
  description:
    'Des sandales de qualité fabriquées avec passion au Burundi. Confortables - Durables - Écologiques.',
  founded: 2020,
  logo: '/logo.png',
}

export const hero = {
  backgroundImage:
    'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_124841_HDR.jpg?updatedAt=1785910150517',
  title: 'Niyo Shoes Factory',
  subtitle: 'Portez des chaussures niyo, marchez confortablement!',
  description:
    'Découvrez l\'excellence de la fabrication de sandales  , alliant tradition artisanale et design contemporain pour un confort inégalé.',
  ctaPrimary: { label: 'Découvrir nos collections', href: '/produits' },
  ctaSecondary: { label: 'Nous contacter sur WhatsApp', href: '/contact' },
}

export const navigation = [
  { id: 'accueil', label: 'Accueil', href: '/' },
  { id: 'apropos', label: 'À propos', href: '/a-propos' },
  { id: 'produits', label: 'Produits', href: '/produits' },
  { id: 'evenements', label: 'Événements', href: '/evenements' },
  { id: 'marches', label: 'Marchés', href: '/marches' },
  { id: 'galerie', label: 'Galerie', href: '/galerie' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]

export const about = {
  title: 'À propos de nous',
  subtitle: 'pour un avenir plus propre et durable.',
  history:
    'Fondée en 2020 à Gitega.Par NIYOMWUNGERE Willy.',
  mission:
    'Nous transformons des materiaux recyclés en chausures durable , confortable et accessibles.',
  vision:"Faire de Niyo Shoes Factory une référence africaine dans la fabrication de chaussures écologiques.",
  values: [
    { title: 'Matériaux recyclés', description: 'Nous valorisons les déchets pour réduire la pollution.' },
    { title: 'Innovation Locale', description: 'Des produits conçus et fabriqués avec passion au Burundi.' },
    { title: 'Impacts sociaux', description: 'Création d\'emplois et formation des jeunes.' },
    { title: 'Developpement Durable', description: 'Nous oeuvrons pour un avenir meilleur pour tous.' },
  ],
  capabilities: [
    { label: 'Capacité de production', value: '2000', unit: 'paires/an' },
    { label: 'Années d\'expérience', value: '8', unit: 'ans' },
    { label: 'Provinces exportées', value: '4+', unit: 'marchés' },
    { label: 'Employés qualifiés', value: '10', unit: 'artisans' },
  ],
  image:
    'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.44%20PM/WhatsApp%20Image%202026-07-06%20at%203.04.26%20PM.jpeg?updatedAt=1783361919267',
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
    colors: ['Marron', 'Noir', 'brown'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
  },
  {
    id: 2,
    category: 'homme',
    name: '--',
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
    image: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.44%20PM/WhatsApp%20Image%202026-07-06%20at%203.03.11%20PM.jpeg?updatedAt=1783361918949',
    colors: ['Blanc', 'Or', 'Rose poudré', 'Noir'],
    sizes: ['35', '36', '37', '38', '39', '40'],
  },
]

export const events = [
  {
    id: 1,
    slug: 'salon-international-source-du-nil-2026',
    name: 'Salon International',
    date: 'Janvier 2026',
    location: 'Bujumbura, Source du Nil',
    description: 'Présentation de la collection 2026 devant plus de 400 visiteurs professionnels.',
    summary:
      'Niyo Shoes Factory a participé au Salon International à la Source du Nil pour présenter sa nouvelle collection de sandales en cuir. Une occasion de rencontrer des acheteurs, partager notre savoir-faire artisanal et faire découvrir l\'excellence de nos finitions.',
    image:
      'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103502.jpg?updatedAt=1783850067305',
    highlights: [
      '400+ visiteurs professionnels',
      'Collection 2026 dévoilée',
      'Rencontres avec des partenaires locaux et internationaux',
    ],
    gallery: [
      {
        id: 1,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103502.jpg?updatedAt=1783850067305',
        alt: 'Stand Niyo Shoes Factory au salon',
        caption: 'Notre stand au Salon International, Source du Nil',
      },
      {
        id: 2,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_104524.jpg?updatedAt=1783850060803',
        alt: 'Sandales présentées au salon',
        caption: 'Présentation de la collection 2026 aux visiteurs',
      },
      {
        id: 3,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103825.jpg?updatedAt=1783850043348',
        alt: 'Notre stand avec les visiteurs',
        caption: 'avec des acheteurs et partenaires potentiels',
      }
    ],
    videos: [
  {
    id: 1,
    url: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Video/VID_20251210_103454.mp4?updatedAt=1783850304084',
    type: 'mp4',
    title: 'Salon International à la Source du Nil',
    description: 'Présentation de notre stand et de nos sandales.',
    thumbnail: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103434.jpg?updatedAt=1783850068945'
  }
],
    moments: [
      {
        id: 1,
        title: 'Accueil des visiteurs',
        description: 'Ouverture du stand et présentation de la marque Niyo Shoes Factory.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103502.jpg?updatedAt=1783850067305',
        date: '10 déc. 2025',
      },
      {
        id: 2,
        title: 'Découverte des collections',
        description: 'Les visiteurs ont pu essayer et admirer nos sandales en cuir.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_104524.jpg?updatedAt=1783850060803',
        date: '10 déc. 2025',
      },
    ],
  },
  {
    id: 2,
    slug: 'foire-artisanale-burundaise-2025',
    name: 'Foire Artisanale Burundaise',
    date: 'Juin 2025',
    location: 'Gitega, Burundi',
    description: 'Exposition de notre savoir-faire artisanal et démonstrations en direct.',
    summary:
      'Lors de la Foire Artisanale Burundaise à Gitega, nous avons exposé notre processus de fabrication et nos dernières créations. Les visiteurs ont pu assister à des démonstrations en direct et échanger avec nos artisans.',
    image:
      'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_104524.jpg?updatedAt=1783850060803',
    highlights: [
      'Démonstrations de fabrication en direct',
      'Rencontre avec les artisans Niyo',
      'Forte affluence du public local',
    ],
    gallery: [
      {
        id: 1,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_104524.jpg?updatedAt=1783850060803',
        alt: 'Stand à la foire artisanale de Gitega',
        caption: 'Notre espace d\'exposition à Gitega',
      },
      {
        id: 2,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103502.jpg?updatedAt=1783850067305',
        alt: 'Artisans au travail pendant la foire',
        caption: 'Démonstration du savoir-faire artisanal',
      },
    ],
    videos: [],
    moments: [
      {
        id: 1,
        title: 'Démonstration en atelier',
        description: 'Présentation des étapes de fabrication d\'une sandale en cuir.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_104524.jpg?updatedAt=1783850060803',
        date: 'Juin 2025',
      },
      {
        id: 2,
        title: 'Échanges avec le public',
        description: 'Rencontres enrichissantes avec les visiteurs et les artisans locaux.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/source%20du%20nil/Image/IMG_20251210_103502.jpg?updatedAt=1783850067305',
        date: 'Juin 2025',
      },
    ],
  },




  {
    id: 3,
    slug: 'foire-donatus-conference-center-2026',
    name: 'African Incubation Summit',
    date: 'août 2026',
    location: 'bujumbura, Burundi',
    description: 'Exposition de notre savoir-faire artisanal et démonstration .de notre upcoming project (recyclage des déchets plastiques en talon des sandales).',
    summary:
      'Lors de la Foire Donatus Conference Center à Bujumbura, nous avons exposé notre processus de fabrication et nos dernières créations. Les visiteurs ont pu assister à des démonstrations en direct et échanger avec nos artisans.',
    image:
      'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_124815_HDR.jpg?updatedAt=1785910153498',
    highlights: [
      'Rencontre avec les artisans Niyo',
      'Forte affluence du public local',
    ],
    gallery: [
      {
        id: 1,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_124815_HDR.jpg?updatedAt=1785910153498',
        alt: 'Stand à la foire artisanale de Bujumbura',
        caption: 'Notre espace d\'exposition à Bujumbura',
      },
      {
        id: 2,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_111931_HDR.jpg?updatedAt=1785910382771',
        alt: 'Artisans au travail pendant la foire',
        caption: 'Démonstration du savoir-faire artisanal',
      },
      {
        id: 3,
        src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_124841_HDR.jpg?updatedAt=1785910150517',
        alt: 'Stand Niyo Shoes Factory au salon',
        caption: 'Présentation de notre stand et de nos sandales.',
      }

    ],
    videos: [],
    moments: [
      {
        id: 1,
        title: 'Démonstration en atelier',
        description: 'Présentation des étapes de fabrication d\'une sandale en cuir.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_124815_HDR.jpg?updatedAt=1785910153498',
        date: 'août 2026',
      },
      {
        id: 2,
        title: 'Échanges avec le public',
        description: 'Rencontres enrichissantes avec les visiteurs et les artisans locaux.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_111931_HDR.jpg?updatedAt=1785910382771',
        date: 'août 2026',
      },
      {
        id: 3,
        title: 'Présentation de la collection',
        description: 'Découverte des dernières créations de la marque Niyo Shoes Factory.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Niyo/event/donatus%20conference%20center/IMG_20260804_124841_HDR.jpg?updatedAt=1785910150517',
        date: 'août 2026',
      },
    ],
  },
]

export const markets = [
  {
    id: '1',
    address: 'Gitega, Bwoga, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1IFlxbcRkTcEZl76DZNVxqVONpQg4QgRnEEudzCjxh_GN2ZfQiLkKaUQ&s=10',
  },
  {
    id: '2',
    address: 'Muyinga, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JR4wOF69NK1WZA7AB24cM7nEPGkfrE6-0Lt1zIiV4m-_tvfyN__GwhI&s=10',
  },
  {
    id: '3',
    address: 'Ngozi, Burundi',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kZpuH82kGrP3qP0QedDWyayQK2q1yxPS1yNIUX554qav5rvtT5KjNQA&s=10',
  },
  {
    id: '4',
    address: 'Bujumbura, Burundi (palais des arts)',
    phone: '+257 76 51 04 03',
    phoneHref: '+25776510403',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5NuKepCq965kvPFgVJqb-ZKK4T1Z6_uJpD92q33wMQ&s=10',
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
    { id: 11, category: 'atelier', src: 'https://ik.imagekit.io/cy3dy3vcm/Niyo/WhatsApp%20Unknown%202026-07-06%20at%208.07.37%20PM/Screenshot_20260724-141418%20(1).png?updatedAt=1785812733419' },
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
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Produits', href: '/produits' },
    { label: 'Contact', href: '/contact' },
  ],
  productLinks: [
    { label: 'Sandales Homme', href: '/sandales-homme' },
    { label: 'Sandales Femme', href: '/sandales-femme' },
    { label: 'Toute la collection', href: '/produits' },
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
