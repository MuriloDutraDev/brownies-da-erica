import { CONTACT } from '../constants/contact';
export function createWhatsAppLink(message){return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`}
