import { watch } from 'vue'
import { useRoute } from 'vue-router'

const SITE_URL = 'https://niyoshoesfactory.com'
const SITE_NAME = 'Niyo Shoes Factory'
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

const DEFAULT_META = {
  title: `${SITE_NAME} — Sandales en cuir artisanales | Gitega, Burundi`,
  description:
    'Fabricant de sandales en cuir haut de gamme à Gitega, Burundi. Collections homme et femme, savoir-faire artisanal depuis 2020.',
}

function setMetaTag(selector, content) {
  const element = document.querySelector(selector)
  if (element) {
    element.setAttribute('content', content)
  }
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function applyPageMeta(meta) {
  const title = meta.title || DEFAULT_META.title
  const description = meta.description || DEFAULT_META.description
  const path = meta.canonicalPath || '/'
  const canonicalUrl = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

  document.title = title

  setMetaTag('meta[name="description"]', description)
  setMetaTag('meta[property="og:title"]', title)
  setMetaTag('meta[property="og:description"]', description)
  setMetaTag('meta[property="og:url"]', canonicalUrl)
  setMetaTag('meta[property="og:image"]', DEFAULT_IMAGE)
  setMetaTag('meta[name="twitter:title"]', title)
  setMetaTag('meta[name="twitter:description"]', description)
  setMetaTag('meta[name="twitter:image"]', DEFAULT_IMAGE)

  setCanonical(canonicalUrl)
}

export function usePageMeta() {
  const route = useRoute()

  watch(
    () => route.meta,
    (meta) => applyPageMeta(meta),
    { immediate: true, deep: true }
  )
}