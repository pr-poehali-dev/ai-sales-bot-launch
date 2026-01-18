import Icon from "@/components/ui/icon";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppWidget({ 
  phoneNumber, 
  message = "Здравствуйте! Интересует ИИ-автоматизация для бизнеса" 
}: WhatsAppWidgetProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={32} className="drop-shadow-lg" />
    </button>
  );
}
