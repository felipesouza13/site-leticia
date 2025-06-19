import React from 'react';

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent("Olá, como posso te ajudar hoje?");
  const whatsappNumber = "5562993608741";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 transition-all duration-300 z-50 hover:scale-105"
      aria-label="Conversar no WhatsApp"
    >
      <img 
        src="https://i.imgur.com/RoL1F4C.png"
        alt="WhatsApp"
        className="w-16 h-16 object-contain"
      />
    </a>
  );
};

export default WhatsAppButton;

