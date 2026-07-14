import { Phone, MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-5 z-40 flex flex-col gap-3.5">
      <a
        href={`tel:${company.phone}`}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 transition-transform hover:-translate-y-0.5 hover:scale-105"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
      <a
        href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=Hi`}
        target="_blank"
        rel="noreferrer"
        className="pulse-ring flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:scale-105"
        aria-label="WhatsApp us"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  )
}
