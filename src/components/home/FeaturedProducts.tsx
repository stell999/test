import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getFeaturedProducts } from '@/lib/mock-data'

export function FeaturedProducts() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLElement>(null)
  const products = getFeaturedProducts()

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#B8860B]" />
            {t('featured.flagship_collection')}
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {t('featured.title_prefix')}
            <span className="block mt-2 bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] bg-clip-text text-transparent">
              {t('featured.title_suffix')}
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            {t('featured.description')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm tracking-wider uppercase">
              {t('featured.view_all')}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

interface ProductCardProps {
  product: ReturnType<typeof getFeaturedProducts>[0]
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  const { t } = useTranslation()
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative"
    >
      <Link to="/products/$productId" params={{ productId: product.id }}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
          {/* Image Container */}
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0"
          >
            <img
              src={product.colors[0].image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>

          {/* New Badge */}
          {product.isNew && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="absolute top-4 right-4 px-3 py-1 bg-[#B8860B] text-black text-xs font-medium tracking-wider rounded-full"
            >
              {t('featured.new_badge')}
            </motion.div>
          )}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div style={{ y }}>
              <span className="text-white/50 text-sm tracking-wider uppercase mb-2 block">
                {product.category}
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 group-hover:text-[#C0C0C0] transition-colors">
                {product.name}
              </h3>
              <p className="text-white/60 text-sm mb-4 line-clamp-2">
                {product.tagline}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-end">
                <span className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                  <span className="text-sm">{t('featured.discover')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-500" />
        </div>
      </Link>

      {/* Color Swatches Preview */}
      <div className="flex items-center gap-2 mt-4 px-2">
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
    </motion.div>
  )
}
