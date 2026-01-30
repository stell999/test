// Kozano Luxury Appliances - Mock Data

export interface ProductColor {
  id: string
  name: string
  hex: string
  image: string
}

export interface ProductFeature {
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  price: number
  description: string
  colors: ProductColor[]
  features: ProductFeature[]
  specifications: Record<string, string>
  galleryImages: string[]
  videoUrl?: string
  isFeatured: boolean
  isNew: boolean
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

export interface Distributor {
  id: string
  country: string
  city: string
  name: string
  address: string
  phone: string
  email: string
  coordinates: { lat: number; lng: number }
}

export const products: Product[] = [
  {
    id: 'artisan-stand-mixer',
    name: 'Artisan Stand Mixer',
    category: 'Mixers',
    tagline: 'The heart of every kitchen',
    price: 899,
    description:
      'The Kozano Artisan Stand Mixer combines timeless elegance with unparalleled performance. Featuring a powerful 800W motor and 10-speed precision control, this masterpiece transforms your culinary aspirations into reality. The die-cast metal construction ensures decades of reliable service, while the tilt-head design provides effortless access to your creations.',
    colors: [
      {
        id: 'matte-black',
        name: 'Matte Black',
        hex: '#1a1a1a',
        image: '/assets/mix1.jpeg',
      },
      {
        id: 'brushed-silver',
        name: 'Brushed Silver',
        hex: '#C0C0C0',
        image: '/assets/mix2.jpeg',
      },
      {
        id: 'deep-navy',
        name: 'Deep Navy',
        hex: '#1E3A5F',
        image: '/assets/mix3.jpeg',
      },
      {
        id: 'burgundy',
        name: 'Burgundy',
        hex: '#722F37',
        image: '/assets/mix1.jpeg',
      },
    ],
    features: [
      {
        title: 'Planetary Mixing Action',
        description:
          'The beater rotates in one direction while the shaft rotates in the opposite direction, reaching every part of the bowl for thorough ingredient incorporation.',
      },
      {
        title: '10-Speed Precision Control',
        description:
          'From a gentle stir to a powerful whip, find the perfect speed for every task with our intuitive speed dial.',
      },
      {
        title: 'Die-Cast Metal Construction',
        description:
          'Built to last generations, the solid metal body provides stability and durability that plastic simply cannot match.',
      },
      {
        title: 'Tilt-Head Design',
        description:
          'Easy access to the bowl and beater for adding ingredients or changing attachments mid-recipe.',
      },
    ],
    specifications: {
      'Motor Power': '800W',
      'Bowl Capacity': '6.9 Liters',
      'Speed Settings': '10',
      Weight: '11.3 kg',
      Dimensions: '36 x 24 x 37 cm',
      Warranty: '5 Years',
    },
    galleryImages: [
      '/assets/mix1.jpeg',
      '/assets/mix2.jpeg',
      '/assets/mix3.jpeg',
      '/assets/mix2.jpeg',
      '/assets/mix3.jpeg',
      '/assets/mix1.jpeg',
    ],
    videoUrl:
      'https://www.youtube-nocookie.com/embed/sslfsM-gOMw?list=PLcesGDgG8rt5wMTLCgi8_TZqPWfwbrbRi&rel=0&modestbranding=1&playsinline=1',
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'precision-toaster',
    name: 'Precision Toaster',
    category: 'Toasters',
    tagline: 'Perfect toast, every time',
    price: 349,
    description:
      'The Kozano Precision Toaster elevates the simple act of toasting to an art form. With intelligent browning technology and extra-wide slots, achieve consistent, golden results whether you prefer a light crisp or a deep toast. The sleek stainless steel body complements any kitchen aesthetic.',
    colors: [
      {
        id: 'brushed-silver',
        name: 'Brushed Silver',
        hex: '#C0C0C0',
        image: '/assets/tost.jpeg',
      },
      {
        id: 'matte-black',
        name: 'Matte Black',
        hex: '#1a1a1a',
        image: '/assets/tost2.jpeg',
      },
      {
        id: 'cream-white',
        name: 'Cream White',
        hex: '#FFFDD0',
        image: '/assets/tost.jpeg',
      },
    ],
    features: [
      {
        title: 'Intelligent Browning Technology',
        description:
          'Advanced sensors monitor and adjust heat for consistent results regardless of bread type or room temperature.',
      },
      {
        title: 'Extra-Wide Slots',
        description:
          'Accommodate everything from thin sliced bread to thick artisan loaves and bagels with ease.',
      },
      {
        title: 'One-Touch Functions',
        description:
          'Dedicated buttons for bagel, defrost, and reheat modes provide perfect results for any situation.',
      },
    ],
    specifications: {
      Power: '1800W',
      Slots: '4',
      'Browning Levels': '7',
      Weight: '2.8 kg',
      Dimensions: '30 x 18 x 20 cm',
      Warranty: '3 Years',
    },
    galleryImages: [
      '/assets/tost.jpeg',
      '/assets/tost2.jpeg',
      '/assets/tost2.jpeg',
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'grand-refrigerator',
    name: 'Grand Refrigerator',
    category: 'Refrigerators',
    tagline: 'Where freshness meets elegance',
    price: 4999,
    description:
      'The Kozano Grand Refrigerator is a statement piece that redefines kitchen luxury. With its French door design, smart temperature zones, and whisper-quiet operation, it preserves your ingredients at their peak while serving as the centerpiece of your culinary space.',
    colors: [
      {
        id: 'stainless-steel',
        name: 'Stainless Steel',
        hex: '#8B8B8B',
        image: '/assets/IMG_65FCB60F7E9F-21_2.jpeg',
      },
      {
        id: 'matte-black',
        name: 'Matte Black',
        hex: '#1a1a1a',
        image: '/assets/IMG_65FCB60F7E9F-27_2.jpeg',
      },
      {
        id: 'arctic-white',
        name: 'Arctic White',
        hex: '#F0F8FF',
        image: '/assets/IMG_65FCB60F7E9F-32_2.jpeg',
      },
    ],
    features: [
      {
        title: 'Smart Temperature Zones',
        description:
          'Independent cooling systems for the refrigerator and freezer maintain optimal conditions for every type of food.',
      },
      {
        title: 'French Door Design',
        description:
          'Elegant double doors provide wide access to fresh food storage while the bottom freezer drawer offers convenient organization.',
      },
      {
        title: 'Whisper-Quiet Operation',
        description:
          'Advanced compressor technology ensures near-silent operation, preserving the tranquility of your home.',
      },
      {
        title: 'Smart Home Integration',
        description:
          'Connect to your home network for remote temperature monitoring, maintenance alerts, and energy usage tracking.',
      },
    ],
    specifications: {
      'Total Capacity': '680 Liters',
      Refrigerator: '450 Liters',
      Freezer: '230 Liters',
      'Energy Rating': 'A+++',
      Dimensions: '91 x 72 x 178 cm',
      Warranty: '10 Years',
    },
    galleryImages: [
      '/assets/IMG_65FCB60F7E9F-21_2.jpeg',
      '/assets/IMG_65FCB60F7E9F-27_2.jpeg',
      '/assets/IMG_65FCB60F7E9F-32_2.jpeg',
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'espresso-maestro',
    name: 'Espresso Maestro',
    category: 'Coffee Machines',
    tagline: 'Barista quality at home',
    price: 2499,
    description:
      'The Kozano Espresso Maestro brings the art of Italian coffee making into your home. With its dual boiler system, PID temperature control, and commercial-grade portafilter, craft café-quality espresso, cappuccinos, and lattes with professional precision.',
    colors: [
      {
        id: 'chrome',
        name: 'Chrome',
        hex: '#E8E8E8',
        image: '/assets/exp.jpeg',
      },
      {
        id: 'matte-black',
        name: 'Matte Black',
        hex: '#1a1a1a',
        image: '/assets/exp.jpeg',
      },
    ],
    features: [
      {
        title: 'Dual Boiler System',
        description:
          'Separate boilers for brewing and steaming allow simultaneous operation without temperature compromise.',
      },
      {
        title: 'PID Temperature Control',
        description:
          'Precise digital temperature management ensures extraction consistency shot after shot.',
      },
      {
        title: 'Commercial-Grade Portafilter',
        description:
          '58mm stainless steel portafilter compatible with professional accessories and baskets.',
      },
    ],
    specifications: {
      'Boiler Capacity': '2.5L + 1.5L',
      'Pump Pressure': '15 Bar',
      'Water Tank': '3.5 Liters',
      Weight: '18 kg',
      Dimensions: '40 x 35 x 42 cm',
      Warranty: '5 Years',
    },
    galleryImages: [
      '/assets/exp.jpeg',
      '/assets/exp.jpeg',
      '/assets/exp.jpeg',
    ],
    videoUrl:
      'https://www.youtube-nocookie.com/embed/sslfsM-gOMw?list=PLcesGDgG8rt5wMTLCgi8_TZqPWfwbrbRi&rel=0&modestbranding=1&playsinline=1',
    isFeatured: false,
    isNew: true,
  },
  {
    id: 'heritage-stand-mixer',
    name: 'Heritage Stand Mixer',
    category: 'Mixers',
    tagline: 'Built for generations',
    price: 1099,
    description:
      'The Kozano Heritage Stand Mixer pairs bold engineering with refined finishes. Designed for daily performance, it delivers consistent torque, smooth speed transitions, and a stable, vibration-resistant base.',
    colors: [
      {
        id: 'graphite',
        name: 'Graphite',
        hex: '#2B2F36',
        image: '/assets/IMG_65FCB60F7E9F-14.jpeg',
      },
      {
        id: 'champagne',
        name: 'Champagne',
        hex: '#D6C7A1',
        image: '/assets/IMG_65FCB60F7E9F-15.jpeg',
      },
      {
        id: 'midnight',
        name: 'Midnight',
        hex: '#0F172A',
        image: '/assets/IMG_65FCB60F7E9F-16.jpeg',
      },
    ],
    features: [
      {
        title: 'High-Torque Drive',
        description:
          'Optimized power delivery for dense doughs, large batches, and long mixing sessions without overheating.',
      },
      {
        title: 'Soft-Start Control',
        description:
          'Starts gently to reduce splash, then ramps smoothly to your selected speed for clean, consistent results.',
      },
      {
        title: 'Stable Metal Chassis',
        description:
          'A rigid frame and weighted base keep the mixer steady while maintaining a premium look and feel.',
      },
    ],
    specifications: {
      'Motor Power': '900W',
      'Bowl Capacity': '7.2 Liters',
      'Speed Settings': '12',
      Weight: '12.4 kg',
      Dimensions: '38 x 25 x 39 cm',
      Warranty: '5 Years',
    },
    galleryImages: [
      '/assets/IMG_65FCB60F7E9F-14.jpeg',
      '/assets/IMG_65FCB60F7E9F-15.jpeg',
      '/assets/IMG_65FCB60F7E9F-16.jpeg',
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: 'signature-toaster',
    name: 'Signature Toaster',
    category: 'Toasters',
    tagline: 'Crisp edges, golden center',
    price: 429,
    description:
      'The Kozano Signature Toaster combines precision browning with a clean, architectural silhouette. Its intelligent heat management adapts to your routine for reliably even toast every time.',
    colors: [
      {
        id: 'stainless',
        name: 'Stainless',
        hex: '#A3A3A3',
        image: '/assets/tost.jpeg',
      },
      {
        id: 'obsidian',
        name: 'Obsidian',
        hex: '#111827',
        image: '/assets/tost2.jpeg',
      },
    ],
    features: [
      {
        title: 'EvenHeat Algorithm',
        description:
          'Balances radiant and convection heat for uniform browning from the first slice to the last.',
      },
      {
        title: 'Lift & Look',
        description:
          'Check progress without interrupting the cycle to dial in the perfect shade of toast.',
      },
      {
        title: 'Wide Artisan Slots',
        description:
          'Handles bagels and thick bread comfortably while keeping results consistent and crisp.',
      },
    ],
    specifications: {
      Power: '2000W',
      Slots: '2',
      'Browning Levels': '9',
      Weight: '2.4 kg',
      Dimensions: '28 x 18 x 21 cm',
      Warranty: '3 Years',
    },
    galleryImages: ['/assets/tost.jpeg', '/assets/tost2.jpeg', '/assets/tost.jpeg'],
    isFeatured: false,
    isNew: false,
  },
  {
    id: 'panoramic-refrigerator',
    name: 'Panoramic Refrigerator',
    category: 'Refrigerators',
    tagline: 'Freshness, beautifully organized',
    price: 5799,
    description:
      'The Kozano Panoramic Refrigerator is designed around visibility and control. With flexible storage zones, refined lighting, and advanced cooling stability, it keeps ingredients pristine and accessible.',
    colors: [
      {
        id: 'steel',
        name: 'Brushed Steel',
        hex: '#9CA3AF',
        image: '/assets/IMG_65FCB60F7E9F-21.jpeg',
      },
      {
        id: 'black-glass',
        name: 'Black Glass',
        hex: '#111827',
        image: '/assets/IMG_65FCB60F7E9F-27.jpeg',
      },
      {
        id: 'pearl',
        name: 'Pearl',
        hex: '#F3F4F6',
        image: '/assets/IMG_65FCB60F7E9F-32.jpeg',
      },
    ],
    features: [
      {
        title: 'Adaptive Cooling',
        description:
          'Stabilizes temperature quickly after door openings to protect produce, dairy, and frozen items.',
      },
      {
        title: 'Flexible Storage Zones',
        description:
          'Reconfigure shelves and bins to match weekly shopping and meal prep without wasted space.',
      },
      {
        title: 'Quiet Night Mode',
        description:
          'Reduces sound levels during evening hours while maintaining consistent cooling performance.',
      },
    ],
    specifications: {
      'Total Capacity': '710 Liters',
      Refrigerator: '470 Liters',
      Freezer: '240 Liters',
      'Energy Rating': 'A+++',
      Dimensions: '92 x 74 x 179 cm',
      Warranty: '10 Years',
    },
    galleryImages: [
      '/assets/IMG_65FCB60F7E9F-21.jpeg',
      '/assets/IMG_65FCB60F7E9F-27.jpeg',
      '/assets/IMG_65FCB60F7E9F-32.jpeg',
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'cafe-duo-espresso',
    name: 'Café Duo Espresso',
    category: 'Coffee Machines',
    tagline: 'Brew and steam together',
    price: 2899,
    description:
      'Café Duo Espresso focuses on rhythm: stable extraction, confident steaming, and simple controls. A premium build and balanced workflow help you make café-style drinks at home.',
    colors: [
      {
        id: 'polished',
        name: 'Polished',
        hex: '#E5E7EB',
        image: '/assets/IMG_65FCB60F7E9F-18.jpeg',
      },
      {
        id: 'carbon',
        name: 'Carbon',
        hex: '#111827',
        image: '/assets/IMG_65FCB60F7E9F-19.jpeg',
      },
    ],
    features: [
      {
        title: 'Stable Extraction',
        description:
          'Fine temperature control supports repeatable shots and consistent flavor from bean to bean.',
      },
      {
        title: 'Powerful Steam',
        description:
          'Create glossy microfoam quickly for cappuccinos, lattes, and flat whites with minimal effort.',
      },
      {
        title: 'Low-Mess Maintenance',
        description:
          'Easy-access cleaning and smart reminders help keep the system performing at its best.',
      },
    ],
    specifications: {
      'Boiler Capacity': '2.2L + 1.4L',
      'Pump Pressure': '15 Bar',
      'Water Tank': '3.0 Liters',
      Weight: '17 kg',
      Dimensions: '39 x 34 x 41 cm',
      Warranty: '5 Years',
    },
    galleryImages: [
      '/assets/IMG_65FCB60F7E9F-18.jpeg',
      '/assets/IMG_65FCB60F7E9F-19.jpeg',
      '/assets/IMG_65FCB60F7E9F-20.jpeg',
    ],
    isFeatured: false,
    isNew: false,
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: 'design-awards-2024',
    title: 'Kozano Wins Three Red Dot Design Awards',
    excerpt:
      'Our commitment to exceptional design has been recognized with three prestigious Red Dot Awards for the Artisan Stand Mixer, Precision Toaster, and Espresso Maestro.',
    date: '2024-03-15',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    category: 'Awards',
  },
  {
    id: 'sustainability-initiative',
    title: 'Our Journey to Carbon Neutrality',
    excerpt:
      'Kozano announces ambitious sustainability goals, including carbon-neutral manufacturing by 2026 and 100% recyclable packaging by 2025.',
    date: '2024-02-28',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80',
    category: 'Sustainability',
  },
  {
    id: 'new-showroom-milan',
    title: 'Kozano Opens Flagship Showroom in Milan',
    excerpt:
      'Experience the full Kozano collection in our stunning new Milan showroom, designed by renowned architect Patricia Urquiola.',
    date: '2024-02-10',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    category: 'Events',
  },
  {
    id: 'chef-collaboration',
    title: 'Collaboration with Chef Massimo Bottura',
    excerpt:
      'World-renowned chef Massimo Bottura joins Kozano as culinary ambassador, bringing his expertise to our product development.',
    date: '2024-01-20',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    category: 'Partnerships',
  },
  {
    id: 'smart-home-integration',
    title: 'Introducing Kozano Connect',
    excerpt:
      'Our new smart home platform allows seamless integration of Kozano appliances with your connected home ecosystem.',
    date: '2024-01-05',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    category: 'Technology',
  },
  {
    id: 'heritage-collection',
    title: 'The Heritage Collection: A Tribute to Craftsmanship',
    excerpt:
      'Celebrating 50 years of excellence with a limited edition collection featuring hand-finished details and premium materials.',
    date: '2023-12-15',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    category: 'Products',
  },
]

export const distributors: Distributor[] = [
  {
    id: 'usa-new-york',
    country: 'United States',
    city: 'New York',
    name: 'Kozano NYC Flagship',
    address: '520 Madison Avenue, New York, NY 10022',
    phone: '+1 212 555 0123',
    email: 'nyc@kozano.com',
    coordinates: { lat: 40.7614, lng: -73.9776 },
  },
  {
    id: 'uk-london',
    country: 'United Kingdom',
    city: 'London',
    name: 'Kozano Mayfair',
    address: '45 Mount Street, London W1K 2NT',
    phone: '+44 20 7123 4567',
    email: 'london@kozano.com',
    coordinates: { lat: 51.5094, lng: -0.1478 },
  },
  {
    id: 'france-paris',
    country: 'France',
    city: 'Paris',
    name: 'Kozano Paris',
    address: '112 Rue du Faubourg Saint-Honoré, 75008 Paris',
    phone: '+33 1 42 65 00 00',
    email: 'paris@kozano.com',
    coordinates: { lat: 48.8714, lng: 2.3089 },
  },
  {
    id: 'uae-dubai',
    country: 'United Arab Emirates',
    city: 'Dubai',
    name: 'Kozano Dubai Mall',
    address: 'The Dubai Mall, Financial Center Road, Dubai',
    phone: '+971 4 123 4567',
    email: 'dubai@kozano.com',
    coordinates: { lat: 25.1972, lng: 55.2744 },
  },
  {
    id: 'germany-berlin',
    country: 'Germany',
    city: 'Berlin',
    name: 'Kozano Berlin',
    address: 'Kurfürstendamm 195, 10707 Berlin',
    phone: '+49 30 123 4567',
    email: 'berlin@kozano.com',
    coordinates: { lat: 52.503, lng: 13.327 },
  },
  {
    id: 'japan-tokyo',
    country: 'Japan',
    city: 'Tokyo',
    name: 'Kozano Ginza',
    address: '4-6-16 Ginza, Chuo-ku, Tokyo 104-0061',
    phone: '+81 3 1234 5678',
    email: 'tokyo@kozano.com',
    coordinates: { lat: 35.6721, lng: 139.7636 },
  },
  {
    id: 'italy-milan',
    country: 'Italy',
    city: 'Milan',
    name: 'Kozano Milano',
    address: 'Via Montenapoleone 8, 20121 Milano',
    phone: '+39 02 1234 5678',
    email: 'milan@kozano.com',
    coordinates: { lat: 45.4685, lng: 9.1954 },
  },
  {
    id: 'australia-sydney',
    country: 'Australia',
    city: 'Sydney',
    name: 'Kozano Sydney',
    address: '188 Pitt Street, Sydney NSW 2000',
    phone: '+61 2 1234 5678',
    email: 'sydney@kozano.com',
    coordinates: { lat: -33.8688, lng: 151.2093 },
  },
]

export const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'ru', name: 'Русский', dir: 'ltr' },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isFeatured)
}

export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.isNew)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  )
}
