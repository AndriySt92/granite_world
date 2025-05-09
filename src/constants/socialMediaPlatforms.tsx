import { FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';

const socialMediaPlatforms = [
  {
    name: 'Telegram',
    icon: FaTelegramPlane,
    link: import.meta.env.VITE_TELEGRAM_LINK,
    color: 'text-blue-400',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    link: import.meta.env.VITE_WHATSAPP_LINK,
    color: 'text-green-500',
  },
  {
    name: 'Viber',
    icon: FaViber,
    link: import.meta.env.VITE_VIBER_LINK,
    color: 'text-purple-600',
  },
];

export default socialMediaPlatforms;
