"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "919559184181"
  const message = `Hi Money Mantra Team, 🚀\n\nI'm interested in scaling my business. I'd love to discuss a potential marketing strategy with you.\n\nMy Website/Business:`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-foreground border-solid border-1 border-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white rounded-lg shadow-md text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  )
}
