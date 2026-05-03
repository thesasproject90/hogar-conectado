export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagenUrl: string;
  linkAmazon: string;
  rating: number;
  opiniones: number;
  esTop: boolean;
}

export const productos: Producto[] = [
  {
    id: "echo-dot-5",
    nombre: "Echo Dot (5.ª gen) con Alexa",
    descripcion: "El altavoz inteligente más vendido. Sonido potente y control total de tu hogar por voz.",
    precio: "64,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B09B8W5FW7?tag=TU_TAG-21",
    rating: 4.8, opiniones: 25400, esTop: true
  },
  {
    id: "enchufe-tapo-p110",
    nombre: "TP-Link Tapo P110 (Control Consumo)",
    descripcion: "Enchufe inteligente que monitoriza el consumo de energía en tiempo real. Ahorra en tu factura de luz.",
    precio: "14,90 €",
    imagenUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B097SBCS38?tag=TU_TAG-21",
    rating: 4.7, opiniones: 12100, esTop: true
  },
  {
    id: "philips-hue-starter",
    nombre: "Philips Hue Set Inicio",
    descripcion: "El mejor sistema de iluminación inteligente del mundo. Incluye 2 bombillas y el puente de conexión.",
    precio: "119,00 €",
    imagenUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B0748MY3RX?tag=TU_TAG-21",
    rating: 4.8, opiniones: 8500, esTop: false
  },
  {
    id: "ring-video-doorbell",
    nombre: "Ring Video Doorbell Wired",
    descripcion: "Timbre con vídeo HD para que sepas quién llama a tu puerta desde cualquier lugar mediante tu móvil.",
    precio: "59,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B08CK632CH?tag=TU_TAG-21",
    rating: 4.5, opiniones: 18900, esTop: true
  },
  {
    id: "xiaomi-mi-vacuum",
    nombre: "Xiaomi Robot Vacuum S10",
    descripcion: "Robot aspirador y friegasuelos con navegación láser LDS para una limpieza profunda y automática.",
    precio: "229,00 €",
    imagenUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B0C3R8Y1X9?tag=TU_TAG-21",
    rating: 4.6, opiniones: 4300, esTop: false
  },
  {
    id: "blink-outdoor-3",
    nombre: "Cámara Blink Outdoor",
    descripcion: "Cámara de seguridad inalámbrica con autonomía de 2 años. Resistente a la intemperie.",
    precio: "99,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B086DKVGPD?tag=TU_TAG-21",
    rating: 4.4, opiniones: 32000, esTop: true
  },
  {
    id: "meross-tira-led",
    nombre: "Meross Tira LED WiFi 10M",
    descripcion: "Tira LED compatible con HomeKit, Alexa y Google Home. Millones de colores para ambientar tu casa.",
    precio: "35,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B08BC8H5T4?tag=TU_TAG-21",
    rating: 4.6, opiniones: 6700, esTop: false
  },
  {
    id: "fire-tv-stick-4k",
    nombre: "Fire TV Stick 4K Max",
    descripcion: "Convierte tu tele en Smart TV con la mayor potencia y WiFi 6. Compatible con todas las apps.",
    precio: "79,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1544244015-0cd4b3ff6f34?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B08MT4S966?tag=TU_TAG-21",
    rating: 4.8, opiniones: 45000, esTop: true
  },
  {
    id: "nuki-smart-lock",
    nombre: "Nuki Smart Lock Pro",
    descripcion: "La cerradura inteligente definitiva. Abre tu puerta sin llaves y controla los accesos.",
    precio: "279,00 €",
    imagenUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B09M3Y8L5B?tag=TU_TAG-21",
    rating: 4.6, opiniones: 5200, esTop: false
  },
  {
    id: "tado-termostato",
    nombre: "Tado° Termostato Inteligente",
    descripcion: "Ahorra energía controlando la calefacción desde el móvil. Se adapta a tu ubicación.",
    precio: "199,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1567924675637-283a6742993e?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B07F7P8QJC?tag=TU_TAG-21",
    rating: 4.5, opiniones: 9800, esTop: true
  },
  {
    id: "govee-glide-wall",
    nombre: "Govee Glide Wall Light",
    descripcion: "Barras de luz modulares para decorar tu setup gaming o salón con efectos RGBIC dinámicos.",
    precio: "89,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B099S81M6M?tag=TU_TAG-21",
    rating: 4.7, opiniones: 4100, esTop: false
  },
  {
    id: "tp-link-c200",
    nombre: "TP-Link TAPO C200 Cámara",
    descripcion: "Cámara WiFi de vigilancia 360º. La más vendida para vigilar bebés o mascotas.",
    precio: "29,90 €",
    imagenUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B07XLML2YS?tag=TU_TAG-21",
    rating: 4.7, opiniones: 95000, esTop: true
  },
  {
    id: "switchbot-curtain",
    nombre: "SwitchBot Curtain Motor",
    descripcion: "Robot para cortinas. Automatiza la apertura y cierre de tus cortinas sin instalaciones ruidosas.",
    precio: "85,00 €",
    imagenUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B0876N6V65?tag=TU_TAG-21",
    rating: 4.3, opiniones: 3100, esTop: false
  },
  {
    id: "echo-show-8",
    nombre: "Echo Show 8 con Pantalla",
    descripcion: "Controla tu casa de forma visual y haz videollamadas con su pantalla HD de 8 pulgadas.",
    precio: "149,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1544244015-0cd4b3ff6f34?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B084TNK1B6?tag=TU_TAG-21",
    rating: 4.7, opiniones: 12000, esTop: false
  },
  {
    id: "broadlink-rm4",
    nombre: "BroadLink RM4 Mini",
    descripcion: "Mando universal WiFi. Controla tu aire acondicionado y TV antiguos desde el móvil.",
    precio: "25,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B083L89WPR?tag=TU_TAG-21",
    rating: 4.4, opiniones: 14000, esTop: false
  },
  {
    id: "nanoleaf-shapes",
    nombre: "Nanoleaf Shapes Hexagons",
    descripcion: "Paneles de luz táctiles y modulares. La joya de la corona de la decoración inteligente.",
    precio: "199,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B08HKW9ZMK?tag=TU_TAG-21",
    rating: 4.6, opiniones: 2800, esTop: false
  },
  {
    id: "eufy-security-s40",
    nombre: "Eufy Security S40 Solar",
    descripcion: "Cámara con panel solar integrado. No necesita cables ni recargas externas nunca.",
    precio: "179,00 €",
    imagenUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B096KDRS83?tag=TU_TAG-21",
    rating: 4.5, opiniones: 1500, esTop: false
  },
  {
    id: "shelly-1-relay",
    nombre: "Shelly 1 Relé WiFi",
    descripcion: "El relé más pequeño para automatizar interruptores de luz existentes detrás de la pared.",
    precio: "18,90 €",
    imagenUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B07G33LNDY?tag=TU_TAG-21",
    rating: 4.7, opiniones: 7500, esTop: true
  },
  {
    id: "netatmo-estacion",
    nombre: "Netatmo Estación Meteorológica",
    descripcion: "Mide la calidad del aire, temperatura y humedad interior/exterior con precisión profesional.",
    precio: "169,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1567924675637-283a6742993e?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B0098MG75K?tag=TU_TAG-21",
    rating: 4.5, opiniones: 22000, esTop: false
  },
  {
    id: "ezviz-ty1",
    nombre: "EZVIZ TY1 Cámara 2K",
    descripcion: "Visión nocturna inteligente y seguimiento de movimiento. Ideal para seguridad interior completa.",
    precio: "39,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B08F56TWSJ?tag=TU_TAG-21",
    rating: 4.6, opiniones: 11200, esTop: false
  }
];
