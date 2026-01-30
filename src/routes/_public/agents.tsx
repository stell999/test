import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/_public/agents')({
  component: AgentsPage,
})

const regions = [
  'All Regions',
  'Europe',
  'North America',
  'Asia',
  'Middle East',
  'Oceania',
]

const agents = [
  {
    id: 1,
    name: 'Kozano Milano Flagship',
    region: 'Europe',
    country: 'Italy',
    city: 'Milan',
    address: 'Via Montenapoleone 8, 20121 Milano',
    phone: '+39 02 7600 1234',
    email: 'milano@kozano.com',
    website: 'www.kozano.com/milano',
    hours: 'Mon-Sat: 10:00-19:00',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    isflagship: true,
  },
  {
    id: 2,
    name: 'Kozano Paris',
    region: 'Europe',
    country: 'France',
    city: 'Paris',
    address: '28 Avenue Montaigne, 75008 Paris',
    phone: '+33 1 5367 8900',
    email: 'paris@kozano.com',
    website: 'www.kozano.com/paris',
    hours: 'Mon-Sat: 10:00-19:00',
    image:
      'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80',
    isflagship: false,
  },
  {
    id: 3,
    name: 'Kozano New York',
    region: 'North America',
    country: 'USA',
    city: 'New York',
    address: '595 Madison Avenue, New York, NY 10022',
    phone: '+1 212 753 4000',
    email: 'newyork@kozano.com',
    website: 'www.kozano.com/newyork',
    hours: 'Mon-Sat: 10:00-20:00, Sun: 12:00-18:00',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    isflagship: true,
  },
  {
    id: 4,
    name: 'Kozano Tokyo',
    region: 'Asia',
    country: 'Japan',
    city: 'Tokyo',
    address: '5-7-5 Ginza, Chuo-ku, Tokyo 104-0061',
    phone: '+81 3 5537 1234',
    email: 'tokyo@kozano.com',
    website: 'www.kozano.com/tokyo',
    hours: 'Daily: 11:00-20:00',
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    isflagship: false,
  },
  {
    id: 5,
    name: 'Kozano Dubai',
    region: 'Middle East',
    country: 'UAE',
    city: 'Dubai',
    address: 'The Dubai Mall, Fashion Avenue, Dubai',
    phone: '+971 4 339 8888',
    email: 'dubai@kozano.com',
    website: 'www.kozano.com/dubai',
    hours: 'Daily: 10:00-22:00',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    isflagship: false,
  },
  {
    id: 6,
    name: 'Kozano Sydney',
    region: 'Oceania',
    country: 'Australia',
    city: 'Sydney',
    address: '88 Pitt Street, Sydney NSW 2000',
    phone: '+61 2 9231 4567',
    email: 'sydney@kozano.com',
    website: 'www.kozano.com/sydney',
    hours: 'Mon-Sat: 10:00-18:00, Sun: 11:00-17:00',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    isflagship: false,
  },
]

function AgentsPage() {
  const [activeRegion, setActiveRegion] = useState('All Regions')

  const filteredAgents =
    activeRegion === 'All Regions'
      ? agents
      : agents.filter((agent) => agent.region === activeRegion)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#B8860B] text-sm tracking-widest uppercase mb-4"
          >
            Worldwide Presence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            Showrooms & Dealers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/60 text-lg"
          >
            Experience Kozano luxury in person at our flagship showrooms and
            authorized dealers around the world.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeRegion === region
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Can't Find a Location?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contact our team to find the nearest authorized dealer or inquire
              about becoming a Kozano partner.
            </p>
            <a
              href="mailto:info@kozano.com"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface AgentCardProps {
  agent: (typeof agents)[0]
  index: number
}

function AgentCard({ agent, index }: AgentCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {agent.isflagship && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#B8860B] text-white text-xs tracking-wider uppercase rounded-full">
              Flagship
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-[#C0C0C0] transition-colors">
          {agent.name}
        </h3>
        <p className="text-white/40 text-sm mb-4">
          {agent.city}, {agent.country}
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 text-white/60 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{agent.address}</span>
          </div>

          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a
              href={`tel:${agent.phone}`}
              className="hover:text-white transition-colors"
            >
              {agent.phone}
            </a>
          </div>

          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <a
              href={`mailto:${agent.email}`}
              className="hover:text-white transition-colors"
            >
              {agent.email}
            </a>
          </div>

          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{agent.hours}</span>
          </div>

          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Globe className="w-4 h-4 flex-shrink-0" />
            <a
              href={`https://${agent.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {agent.website}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
