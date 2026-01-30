import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Award, Users, Globe, Heart } from 'lucide-react'

export const Route = createFileRoute('/_public/about')({
  component: AboutPage,
})

const milestones = [
  {
    year: '1974',
    title: 'Foundation',
    description: 'Kozano was born in Milan, Italy',
  },
  {
    year: '1985',
    title: 'First Export',
    description: 'Expanded to European markets',
  },
  {
    year: '1998',
    title: 'Innovation Award',
    description: 'Red Dot Design Award winner',
  },
  {
    year: '2010',
    title: 'Global Presence',
    description: 'Reached 40 countries worldwide',
  },
  {
    year: '2024',
    title: 'Sustainability',
    description: 'Carbon-neutral manufacturing achieved',
  },
]

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Every product is crafted to the highest standards of quality and performance.',
  },
  {
    icon: Users,
    title: 'Craftsmanship',
    description:
      'Our master artisans blend traditional techniques with modern innovation.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description:
      'Committed to environmental responsibility in every aspect of production.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Driven by a love for design and the art of culinary excellence.',
  },
]

function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#B8860B] text-sm tracking-widest uppercase mb-4">
                Our Story
              </span>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                50 Years of
                <span className="block mt-2 text-white/60">
                  Italian Excellence
                </span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Since 1974, Kozano has been synonymous with luxury home
                appliances that transform kitchens into spaces of inspiration.
                Born in the heart of Milan, our brand represents the perfect
                marriage of Italian design heritage and cutting-edge
                engineering.
              </p>

              <p className="text-white/60 text-lg leading-relaxed">
                Each piece we create is more than an appliance—it's a work of
                art, meticulously crafted to elevate your culinary journey and
                become a cherished part of your home for generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Kozano craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#1E3A5F]/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Our Values
            </h2>
            <p className="max-w-2xl mx-auto text-white/60 text-lg">
              The principles that guide everything we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#B8860B]/20 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#B8860B]" />
                </div>
                <h3 className="text-white font-serif text-2xl mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Our Journey
            </h2>
            <p className="max-w-2xl mx-auto text-white/60 text-lg">
              Five decades of innovation and excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}
                  >
                    <div className="inline-block bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
                      <span className="text-[#B8860B] font-serif text-3xl block mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-white font-serif text-2xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/60">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block w-4 h-4 rounded-full bg-[#B8860B] border-4 border-[#0a0a0a] relative z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Experience Kozano
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Visit one of our showrooms worldwide to see our collection in
              person and speak with our expert team.
            </p>
            <a
              href="/agents"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Find a Showroom
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
