import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { products } from '@/lib/mock-data'
import { useState } from 'react'

export const Route = createFileRoute('/_public/products/')({
  component: ProductsPage,
})

const categories = [
  'All',
  'Mixers',
  'Toasters',
  'Refrigerators',
  'Coffee Machines',
]

function VideoEmbed({ id, className = '' }: { id: string; className?: string }) {
  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden border border-white/10 ${className}`}>
      <iframe
        key={id}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1`}
        title="Product Video"
        className="w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  )
}

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const videoByCategory: Record<string, string | null> = {
    'Coffee Machines': 'yiQbQRJ9dio',
    Mixers: 'FvbdzwjktsE',
    Toasters: null,
    Refrigerators: null,
    All: 'yiQbQRJ9dio',
  }
  const currentVideoId = videoByCategory[activeCategory] ?? null

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/20 to-transparent" />

        {activeCategory === 'All' && (
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#B8860B] text-sm tracking-widest uppercase mb-4"
            >
              Our Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            >
              Luxury Appliances
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-white/60 text-lg"
            >
              Discover our complete range of premium kitchen appliances, each
              designed to elevate your culinary experience.
            </motion.p>
          </div>
        )}

        {currentVideoId && (
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-10">
            <VideoEmbed id={currentVideoId} />
          </div>
        )}
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/products/$productId"
                  params={{ productId: product.id }}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4">
                    <img
                      src={product.colors[0].image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="px-3 py-1 bg-[#B8860B] text-black text-xs tracking-wider uppercase rounded-full">
                          New
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white/50 text-sm tracking-wider uppercase">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-2xl text-white mt-1 group-hover:text-[#C0C0C0] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-2">
                    {product.colors.slice(0, 4).map((color) => (
                      <div
                        key={color.id}
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                    {product.colors.length > 4 && (
                      <span className="text-white/40 text-xs">
                        +{product.colors.length - 4}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
