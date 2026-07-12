import { events } from '../data/data.js'

export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug)
}

export function getEventPath(slug) {
  return `/evenements/${slug}`
}

export function getEventMediaCount(event) {
  const galleryCount = event.gallery?.length || 0
  const videoCount = event.videos?.length || 0
  const momentCount = event.moments?.length || 0
  return galleryCount + videoCount + momentCount
}