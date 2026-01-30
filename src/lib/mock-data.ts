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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
        image:
          'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
      },
      {
        id: 'matte-black',
        name: 'Matte Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80',
      },
      {
        id: 'arctic-white',
        name: 'Arctic White',
        hex: '#F0F8FF',
        image:
          'https://images.unsplash.com/photo-1571175351734-1f0de2ecff52?w=800&q=80',
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
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80',
      'https://images.unsplash.com/photo-1571175351734-1f0de2ecff52?w=600&q=80',
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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isFeatured: false,
    isNew: true,
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
