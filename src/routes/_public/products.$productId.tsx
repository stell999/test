import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronRight, Check, Play } from 'lucide-react'
import { getProductById, products } from '@/lib/mock-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Route = createFileRoute('/_public/products/$productId')({
  component: ProductDetailPage,
})

function ProductDetailPage() {
  const { productId } = Route.useParams()
  const product = getProductById(productId)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="text-[#B8860B] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const selectedColor = product.colors[selectedColorIndex]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-white/50"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/70">{product.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{product.name}</span>
        </motion.nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-28">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedColor.id}
                    src={selectedColor.image}
                    alt={`${product.name} in ${selectedColor.name}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </AnimatePresence>

                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-[#B8860B] text-black text-sm font-medium tracking-wider rounded-full">
                    NEW ARRIVAL
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {product.galleryImages.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedColorIndex(index % product.colors.length)
                    }
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedColorIndex
                        ? 'border-white'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
                {product.videoUrl && (
                  <button
                    onClick={() => setShowVideo(!showVideo)}
                    className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all bg-black/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </button>
                )}
              </div>

              {/* Video Player */}
              {product.videoUrl && showVideo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 rounded-xl overflow-hidden border border-white/10"
                >
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={product.videoUrl}
                      title={`${product.name} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category */}
            <span className="text-[#B8860B] text-sm tracking-widest uppercase">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-4">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="text-white/60 text-lg italic mb-8">
              "{product.tagline}"
            </p>

            {/* Color Picker */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/70 text-sm">
                  Color:{' '}
                  <span className="text-white">{selectedColor.name}</span>
                </span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColorIndex(index)}
                    className={`relative w-12 h-12 rounded-full transition-all ${
                      index === selectedColorIndex
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]'
                        : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {index === selectedColorIndex && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Check
                          className={`w-5 h-5 ${
                            color.hex === '#1a1a1a' ||
                            color.hex === '#1E3A5F' ||
                            color.hex === '#722F37'
                              ? 'text-white'
                              : 'text-black'
                          }`}
                        />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-white font-medium mb-3">Description</h3>
              <p className="text-white/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features Accordion */}
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="features" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline">
                  Features & Benefits
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#B8860B]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#B8860B]" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specs" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline">
                  Technical Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-white/40 text-sm">{key}</span>
                          <span className="text-white">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Find a Dealer CTA */}
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-medium mb-2">
                Experience in Person
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Visit one of our showrooms to see this product and speak with
                our experts.
              </p>
              <Link
                to="/agents"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-colors text-sm"
              >
                Find a Showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-white mb-10 text-center"
          >
            In Your Kitchen
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {product.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl overflow-hidden ${
                  index === 0
                    ? 'col-span-2 row-span-2 aspect-square'
                    : 'aspect-square'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} lifestyle ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-white mb-10"
          >
            You May Also Like
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to="/products/$productId"
                    params={{ productId: relatedProduct.id }}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4">
                      <img
                        src={relatedProduct.colors[0].image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white/50 text-sm">
                          {relatedProduct.category}
                        </span>
                        <h3 className="font-serif text-xl text-white group-hover:text-[#C0C0C0] transition-colors">
                          {relatedProduct.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-2 px-2">
                      {relatedProduct.colors.slice(0, 3).map((c) => (
                        <div
                          key={c.id}
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
