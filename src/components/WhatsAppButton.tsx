import React from "react";
import { Steps, Box } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "244900000000"; // Substitua pelo número real
  const message = "Olá Kluivert! Vi seu site e quero entender como você pode me ajudar com desenvolvimento de sistema, segurança ou DevOps.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={999}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "white",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(37,211,102,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
        }}
      >
        <FaWhatsapp size={32} />
      </a>
    </Box>
  );
};

export default WhatsAppButton;