
import './FloatingContact.css'
import { Phone, MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function FloatingContact() {
  return (
    <div
      className="
        fixed
        bottom-3
        left-3
        z-[900]
        flex
        flex-col
        gap-2
        sm:bottom-4
        sm:left-4
      "
    >
      {/* CALL BUTTON */}
      <a
        href={`tel:${company.phone}`}
        aria-label="Call us"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-navy
          text-white
          shadow-md
          shadow-navy/20
          transition-transform
          hover:-translate-y-0.5
          hover:scale-105
          sm:h-10
          sm:w-10
        "
      >
        <Phone
          size={16}
          className="sm:h-[18px] sm:w-[18px]"
        />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=Hi`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="
          pulse-ring
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-md
          transition-transform
          hover:-translate-y-0.5
          hover:scale-105
          sm:h-10
          sm:w-10
        "
      >
        <MessageCircle
          size={16}
          className="sm:h-[18px] sm:w-[18px]"
        />
      </a>
    </div>
  )
}
