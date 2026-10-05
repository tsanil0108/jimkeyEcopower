<<<<<<< HEAD

import './FloatingContact.css'
import { Phone, MessageCircle } from 'lucide-react'
=======
import './FloatingContact.css'
import {
  Phone,
  MessageCircle,
} from 'lucide-react'

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
import { company } from '../data/content'

export default function FloatingContact() {
  return (
    <div
      className="
        fixed
<<<<<<< HEAD
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
=======

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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      <a
        href={`tel:${company.phone}`}
        aria-label="Call us"
        className="
          flex
<<<<<<< HEAD
          h-9 w-9
          items-center justify-center
          rounded-full
          bg-navy
          text-white
          shadow-md
          shadow-navy/20
          transition-transform
          hover:-translate-y-0.5
          hover:scale-105
          sm:h-10 sm:w-10
        "
      >
        <Phone size={16} className="sm:h-[18px] sm:w-[18px]" />
      </a>

      {/* WHATSAPP BUTTON */}
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      <a
        href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=Hi`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="
          pulse-ring
<<<<<<< HEAD
          flex
          h-9 w-9
          items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-md
          transition-transform
          hover:-translate-y-0.5
          hover:scale-105
          sm:h-10 sm:w-10
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
=======

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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
