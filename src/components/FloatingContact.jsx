import { Phone, MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-5 z-40 flex flex-col gap-3">
      <a
        href={`tel:${company.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
      <a
        href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=Hi`}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105"
        aria-label="WhatsApp us"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  )
}
