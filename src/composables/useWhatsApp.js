import { whatsapp } from '../data/data.js'

export function useWhatsApp(customMessage) {
  const openWhatsApp = (productName) => {
    let message = customMessage || whatsapp.message
    if (productName) {
      message = `Bonjour, je suis intéressé(e) par le produit "${productName}". Pouvez-vous me donner plus d'informations ?`
    }
    const url = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return { openWhatsApp, whatsapp }
}