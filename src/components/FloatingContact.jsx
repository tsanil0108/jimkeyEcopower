import './FloatingContact.css'
import {
  Phone,
  MessageCircle,
} from 'lucide-react'

import { company } from '../data/content'

export default function FloatingContact() {
  return (
    <div
      className="
        fixed

        bottom-4
        left-3

        z-[900]

        flex
        flex-col
        gap-2

        sm:bottom-6
        sm:left-5
        sm:gap-3
      "
    >

      {/* CALL */}
      <a
        href={`tel:${company.phone}`}
        aria-label="Call us"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full

          bg-navy
          text-white

          shadow-lg
          shadow-navy/25

          transition-transform
          hover:-translate-y-0.5
          hover:scale-105

          sm:h-[52px]
          sm:w-[52px]
        "
      >
        <Phone
          size={18}
          className="sm:h-5 sm:w-5"
        />
      </a>

      {/* WHATSAPP */}
      <a
        href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=Hi`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="
          pulse-ring

          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full

          bg-[#25D366]
          text-white

          shadow-lg

          transition-transform
          hover:-translate-y-0.5
          hover:scale-105

          sm:h-[52px]
          sm:w-[52px]
        "
      >
        <MessageCircle
          size={18}
          className="sm:h-5 sm:w-5"
        />
      </a>

    </div>
  )
}