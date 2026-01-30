import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getFeaturedProducts } from '@/lib/mock-data'

export function FeaturedProducts() {
  const containerRef = useRef<HTMLElement>(null)
  const products = getFeaturedProducts()

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border/40 text-foreground/70 text-sm tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Flagship Collection
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Designed for Excellence
          </h2>

          <p className="max-w-2xl mx-auto text-foreground/60 text-lg">
            Experience the perfect blend of innovation and elegance with our most popular products.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
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
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
          >
            <span className="text-sm tracking-wider uppercase">
              View All Collections
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
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <Link to="/products/$productId" params={{ productId: product.id }} className="block h-full">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <img
              src={product.colors[0].image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* New Badge */}
          {product.isNew && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-medium tracking-wider rounded-full shadow-sm z-10">
              New Arrival
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3 px-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              {product.category}
            </span>
            {/* Color Swatches */}
            <div className="flex items-center gap-1.5">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.id}
                  className="w-3 h-3 rounded-full border border-border/60"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-muted-foreground text-[10px]">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>

          <h3 className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          <p className="text-foreground/60 text-sm line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          <div className="flex items-center gap-2 text-primary font-medium pt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <span className="text-sm uppercase tracking-wider">Discover</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
