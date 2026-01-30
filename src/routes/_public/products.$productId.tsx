import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronRight, Check, Play, MapPin } from 'lucide-react'
import { getProductById, products } from '@/lib/mock-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const Route = createFileRoute('/_public/products/$productId')({
  component: ProductDetailPage,
})

const FULL_VIDEO_PLAYLIST_URL =
  'https://www.youtube.com/watch?v=-a9IAgXOtNw&list=PLcesGDgG8rt5utVWf9TRe9XDohdRcDUfu'

import MagicBento from '@/components/ui/MagicBento'

function ProductDetailPage() {
  const { productId } = Route.useParams()
  const product = getProductById(productId)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const selectedColor = product.colors[selectedColorIndex]
  const fullVideoUrl = product.videoUrl ? FULL_VIDEO_PLAYLIST_URL : null
  const featureA = product.features[0]
  const featureB = product.features[1]
  const storyBlocks = [
    {
      image: product.galleryImages[0] ?? selectedColor.image,
      title: featureA?.title ?? 'Designed for Everyday Luxury',
      description:
        featureA?.description ??
        'Elevate your daily routine with premium design details and effortless performance.',
    },
    {
      image: product.galleryImages[1] ?? product.galleryImages[0] ?? selectedColor.image,
      title: featureB?.title ?? 'Crafted to Fit Your Space',
      description:
        featureB?.description ??
        'A refined presence that blends seamlessly into modern kitchens while delivering reliable results.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground/70">{product.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
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
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/0 border border-border/40">
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
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium tracking-wider rounded-full">
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
                        ? 'border-foreground'
                        : 'border-border/40 hover:border-border/80'
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
                    className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-border/40 hover:border-border/80 transition-all bg-background/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-foreground" />
                  </button>
                )}
              </div>

              {/* Video Player */}
              {product.videoUrl && showVideo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 rounded-xl overflow-hidden border border-border/40"
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
            <span className="text-primary text-sm tracking-widest uppercase">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-4">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="text-foreground/60 text-lg italic mb-8">
              "{product.tagline}"
            </p>

            {/* Color Picker */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-foreground/70 text-sm">
                  Color:{' '}
                  <span className="text-foreground">{selectedColor.name}</span>
                </span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColorIndex(index)}
                    className={`relative w-12 h-12 rounded-full transition-all ${
                      index === selectedColorIndex
                        ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background'
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
              <h3 className="text-foreground font-medium mb-3">Description</h3>
              <p className="text-foreground/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features Accordion */}
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="features" className="border-border/40">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 hover:no-underline">
                  Features & Benefits
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-foreground font-medium mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specs" className="border-border/40">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 hover:no-underline">
                  Technical Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{key}</span>
                          <span className="text-foreground">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Find a Dealer CTA */}
            <div className="mt-8 p-6 bg-foreground/5 border border-border/40 rounded-xl">
              <h3 className="text-foreground font-medium mb-2">
                Experience in Person
              </h3>
              <p className="text-foreground/60 text-sm mb-4">
                Visit one of our  to see this product and speak with
                our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {fullVideoUrl && (
                  <a
                    href={fullVideoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-lg font-medium transition-colors text-sm"
                  >
                    <Play className="w-4 h-4" />
                    Watch Full Video
                  </a>
                )}
                <Link
                  to="/agents"
                  className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Find Nearest Dealer
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-16 lg:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center"
          >
            In Your Kitchen
          </motion.h2>

          <div className="space-y-10 lg:space-y-14">
            {storyBlocks.map((block, index) => (
              <motion.div
                key={`${block.image}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <MagicBento
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={19}
                    glowColor="237,28,36"
                    disableAnimations={false}
                    className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-foreground/5 border border-border/82 shadow-xl"
                  >
                    <img
                      src={block.image}
                      alt={`${product.name} lifestyle ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </MagicBento>
                </div>

                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="max-w-xl">
                    <div className="text-primary text-xs tracking-widest uppercase mb-3">
                      {product.category}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                      {block.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed mb-6">
                      {block.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {fullVideoUrl && (
                        <a
                          href={fullVideoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                          <Play className="w-4 h-4 text-primary" />
                          Watch Full Video
                        </a>
                      )}
                      <Link
                        to="/agents"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        Find Nearest Dealer
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-foreground mb-10"
          >
            You May Also Like
          </motion.h2>

          <Carousel opts={{ align: 'start', loop: false }} className="relative">
            <CarouselContent className="-ml-4">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 8)
                .map((relatedProduct) => (
                  <CarouselItem
                    key={relatedProduct.id}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      to="/products/$productId"
                      params={{ productId: relatedProduct.id }}
                      className="group block"
                    >
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                        <img
                          src={relatedProduct.colors[0].image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="mb-2 px-1">
                        <span className="text-muted-foreground text-sm tracking-wider uppercase">
                          {relatedProduct.category}
                        </span>
                        <h3 className="font-serif text-xl text-foreground mt-1 group-hover:text-muted-foreground transition-colors">
                          {relatedProduct.name}
                        </h3>
                      </div>
                      <div className="flex gap-2 px-1">
                        {relatedProduct.colors.slice(0, 3).map((c) => (
                          <div
                            key={c.id}
                            className="w-3 h-3 rounded-full border border-border/60"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="!left-3 !-translate-y-1/2 bg-background/80 backdrop-blur-xl border-border/40" />
            <CarouselNext className="!right-3 !-translate-y-1/2 bg-background/80 backdrop-blur-xl border-border/40" />
          </Carousel>
        </div>
      </section>
    </div>
  )
}
