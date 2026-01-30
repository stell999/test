import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Globe, Clock, Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCity, setActiveCity] = useState('All Cities')

  const baseAgents = useMemo(() => {
    return activeRegion === 'All Regions'
      ? agents
      : agents.filter((agent) => agent.region === activeRegion)
  }, [activeRegion])

  const cityOptions = useMemo(() => {
    const uniqueCities = Array.from(new Set(baseAgents.map((a) => a.city))).sort()
    return ['All Cities', ...uniqueCities]
  }, [baseAgents])

  useEffect(() => {
    if (!cityOptions.includes(activeCity)) setActiveCity('All Cities')
  }, [activeCity, cityOptions])

  const regionAndCityAgents =
    activeCity === 'All Cities'
      ? baseAgents
      : baseAgents.filter((agent) => agent.city === activeCity)

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredAgents =
    normalizedQuery.length === 0
      ? regionAndCityAgents
      : regionAndCityAgents.filter((agent) => {
          const haystack = `${agent.name} ${agent.region} ${agent.country} ${agent.city} ${agent.address}`
            .toLowerCase()
          return haystack.includes(normalizedQuery)
        })

  const headquarters = agents[0]

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/imagedealers.png"
            alt="Distributors Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-widest uppercase mb-4"
          >
            Worldwide Presence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            Distributors & Dealers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg"
          >
            Experience Kozano luxury in person at our flagship distributors and
            authorized dealers around the world.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-4 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px_220px] gap-4 items-end">
              <label
                htmlFor="distributors-search"
                className="block text-xs tracking-widest uppercase text-foreground/60 mb-2 lg:col-span-1"
              >
                Search
              </label>
              <div className="lg:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                  <input
                    id="distributors-search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city, country, or showroom"
                    className="w-full h-11 rounded-xl bg-background/60 border border-border/40 pl-10 pr-3 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-foreground/60 mb-2">
                  Region
                </label>
                <Select
                  value={activeRegion}
                  onValueChange={(value) => {
                    setActiveRegion(value)
                    setActiveCity('All Cities')
                  }}
                >
                  <SelectTrigger className="w-full h-11 rounded-xl bg-background/60 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background/90 backdrop-blur-xl border-border/60">
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-foreground/60 mb-2">
                  City
                </label>
                <Select value={activeCity} onValueChange={setActiveCity}>
                  <SelectTrigger className="w-full h-11 rounded-xl bg-background/60 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background/90 backdrop-blur-xl border-border/60">
                    {cityOptions.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
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
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index} />
              ))
            ) : (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 lg:col-span-3"
              >
                <div className="rounded-2xl border border-border/40 bg-foreground/5 p-8">
                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    <div>
                      <h3 className="font-serif text-2xl text-foreground mb-2">
                        No distributors found
                      </h3>
                      <p className="text-foreground/60 text-sm">
                        Try a different keyword, or contact our headquarters for help.
                      </p>
                    </div>
                    <a
                      href="mailto:info@kozano.com"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-lg font-medium transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      Email Headquarters
                    </a>
                  </div>

                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="rounded-2xl overflow-hidden border border-border/40 bg-background/60">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={headquarters.image}
                          alt={headquarters.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider uppercase rounded-full">
                            Headquarters
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-serif text-2xl text-foreground mb-1">
                          {headquarters.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          {headquarters.city}, {headquarters.country}
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 text-foreground/60 text-sm">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{headquarters.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/60 text-sm">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <a
                              href={`tel:${headquarters.phone}`}
                              className="hover:text-foreground transition-colors"
                            >
                              {headquarters.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/60 text-sm">
                            <Mail className="w-4 h-4 flex-shrink-0" />
                            <a
                              href={`mailto:${headquarters.email}`}
                              className="hover:text-foreground transition-colors"
                            >
                              {headquarters.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/60 text-sm">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            <span>{headquarters.hours}</span>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/60 text-sm">
                            <Globe className="w-4 h-4 flex-shrink-0" />
                            <a
                              href={`https://${headquarters.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground transition-colors"
                            >
                              {headquarters.website}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/40 bg-background/60 p-6">
                      <h4 className="font-serif text-2xl text-foreground mb-2">
                        Want to become a distributor?
                      </h4>
                      <p className="text-foreground/60 text-sm mb-5">
                        Send us your company details and region, and our partnerships team will get back to you.
                      </p>
                      <a
                        href="mailto:info@kozano.com"
                        className="inline-flex items-center gap-2 border border-border/60 hover:bg-foreground/5 px-6 py-3 rounded-lg font-medium transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        Contact Partnerships
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Can't Find a Location?
            </h2>
            <p className="text-foreground/60 text-lg mb-8">
              Contact our team to find the nearest authorized dealer or inquire
              about becoming a Kozano partner.
            </p>
            <a
              href="mailto:info@kozano.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-8 py-4 rounded-lg font-medium transition-colors"
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
      className="group bg-foreground/5 border border-border/40 rounded-2xl overflow-hidden hover:bg-foreground/10 transition-all"
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
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider uppercase rounded-full">
              Flagship
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-muted-foreground transition-colors">
          {agent.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {agent.city}, {agent.country}
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 text-foreground/60 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{agent.address}</span>
          </div>

          <div className="flex items-center gap-3 text-foreground/60 text-sm">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a
              href={`tel:${agent.phone}`}
              className="hover:text-foreground transition-colors"
            >
              {agent.phone}
            </a>
          </div>

          <div className="flex items-center gap-3 text-foreground/60 text-sm">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <a
              href={`mailto:${agent.email}`}
              className="hover:text-foreground transition-colors"
            >
              {agent.email}
            </a>
          </div>

          <div className="flex items-center gap-3 text-foreground/60 text-sm">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{agent.hours}</span>
          </div>

          <div className="flex items-center gap-3 text-foreground/60 text-sm">
            <Globe className="w-4 h-4 flex-shrink-0" />
            <a
              href={`https://${agent.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {agent.website}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
