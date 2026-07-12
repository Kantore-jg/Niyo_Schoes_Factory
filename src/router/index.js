import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Niyo Shoes Factory — Sandales en cuir artisanales | Gitega, Burundi',
      description:
        'Fabricant de sandales en cuir haut de gamme à Gitega, Burundi. Collections homme et femme, savoir-faire artisanal depuis 2020. Livraison au Burundi et à l\'export.',
      canonicalPath: '/',
    },
  },
  {
    path: '/a-propos',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'À propos — Niyo Shoes Factory | Fabricant de sandales au Burundi',
      description:
        'Découvrez l\'histoire de Niyo Shoes Factory, fabricant de sandales en cuir à Gitega depuis 2020. Mission, vision et savoir-faire artisanal.',
      canonicalPath: '/a-propos',
    },
  },
  {
    path: '/produits',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    meta: {
      title: 'Nos produits — Sandales en cuir | Niyo Shoes Factory',
      description:
        'Découvrez nos sandales en cuir pour hommes et femmes. Fabrication artisanale, finitions main et confort exceptionnel au Burundi.',
      canonicalPath: '/produits',
      category: null,
    },
  },
  {
    path: '/sandales-homme',
    name: 'products-men',
    component: () => import('../views/ProductsView.vue'),
    meta: {
      title: 'Sandales homme en cuir — Niyo Shoes Factory',
      description:
        'Sandales homme en cuir pleine fleur, semelle anatomique et finitions main. Fabrication artisanale à Gitega, Burundi.',
      canonicalPath: '/sandales-homme',
      category: 'homme',
    },
  },
  {
    path: '/sandales-femme',
    name: 'products-women',
    component: () => import('../views/ProductsView.vue'),
    meta: {
      title: 'Sandales femme en cuir — Niyo Shoes Factory',
      description:
        'Sandales femme élégantes en cuir, talon compensé et brides ajustables. Collection artisanale Niyo Shoes Factory au Burundi.',
      canonicalPath: '/sandales-femme',
      category: 'femme',
    },
  },
  {
    path: '/evenements',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Événements — Salons et foires | Niyo Shoes Factory',
      description:
        'Retrouvez Niyo Shoes Factory aux salons, foires artisanales et expositions au Burundi et en Afrique.',
      canonicalPath: '/evenements',
    },
  },
  {
    path: '/evenements/:slug',
    name: 'event-detail',
    component: () => import('../views/EventDetailView.vue'),
  },
  {
    path: '/marches',
    name: 'markets',
    component: () => import('../views/MarketsView.vue'),
    meta: {
      title: 'Nos marchés — Points de vente | Niyo Shoes Factory',
      description:
        'Retrouvez nos sandales Niyo à Gitega, Muyinga, Ngozi et Bujumbura. Adresses et contacts de nos points de vente au Burundi.',
      canonicalPath: '/marches',
    },
  },
  {
    path: '/galerie',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue'),
    meta: {
      title: 'Galerie — Atelier et collections | Niyo Shoes Factory',
      description:
        'Photos de nos sandales, atelier de fabrication et événements. Découvrez le savoir-faire artisanal de Niyo Shoes Factory.',
      canonicalPath: '/galerie',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact — Commander vos sandales | Niyo Shoes Factory',
      description:
        'Contactez Niyo Shoes Factory à Gitega, Burundi. Commandez vos sandales en cuir par WhatsApp, téléphone ou email.',
      canonicalPath: '/contact',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  },
})

export default router