"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923086484348";

  const message =
    "Assalam o Alaikum! I want to know more about The Nain Collection.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.35)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)]
        "
      >
        <FaWhatsapp className="text-[32px]" />
      </a>

      {/* Tooltip */}
      <div
        className="
          absolute
          right-[70px]
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          rounded-lg
          bg-gray-900
          px-4
          py-2
          text-sm
          font-medium
          text-white
          opacity-0
          translate-x-2
          pointer-events-none
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      >
        Chat with us
      </div>
    </div>
  );
}