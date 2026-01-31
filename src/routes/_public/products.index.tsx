import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { products } from '@/lib/mock-data'
import { useState } from 'react'
import {
  ChefHat,
  ChevronRight,
  ArrowRight,
  PanelLeftClose,
  PanelLeftOpen,
  Coffee,
  LayoutGrid,
  Microwave,
  Refrigerator,
  SlidersHorizontal,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/_public/products/')({
  component: ProductsPage,
})

const categories: Array<{ label: string; icon: LucideIcon }> = [
  { label: 'All', icon: LayoutGrid },
  { label: 'Mixers', icon: ChefHat },
  { label: 'Toasters', icon: Microwave },
  { label: 'Refrigerators', icon: Refrigerator },
  { label: 'Coffee Machines', icon: Coffee },
]

function CategoryFilter({
  activeCategory,
  onChange,
}: {
  activeCategory: string
  onChange: (category: string) => void
}) {
  return (
    <div className="flex flex-col">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = activeCategory === category.label
        return (
          <button
            key={category.label}
            type="button"
            onClick={() => onChange(category.label)}
            className={cn(
              'group w-full flex items-center justify-between gap-4 px-4 py-4 text-sm transition-colors rounded-lg mb-1',
              isActive
                ? 'text-primary bg-primary/5 font-medium'
                : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
            )}
          >
            <span className="flex items-center gap-3">
              <Icon
                className={cn(
                  'h-5 w-5',
                  isActive ? 'text-primary' : 'text-foreground/50 group-hover:text-foreground'
                )}
              />
              <span className="font-medium tracking-wide">{category.label}</span>
            </span>
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                isActive ? 'text-primary rotate-90' : 'text-foreground/30 group-hover:text-foreground/50'
              )}
            />
          </button>
        )
      })}
    </div>
  )
}

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const videoByCategory: Record<string, string | null> = {
    'Coffee Machines': 'yiQbQRJ9dio',
    Mixers: 'FvbdzwjktsE',
    Toasters: '-a9IAgXOtNw',
    Refrigerators: 'Db11CjExJtw',
    All: 'yiQbQRJ9dio',
  }
  const currentVideoId = videoByCategory[activeCategory] ?? null

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0b0b0c]">
          {currentVideoId ? (
            <iframe
              key={currentVideoId}
              src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&mute=1&loop=1&playlist=${currentVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
              title="Category Video"
              className="h-full w-full object-cover pointer-events-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1E3A5F] to-[#0b0b0c]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-white/80 text-sm tracking-widest uppercase mb-4"
          >
            {activeCategory === 'All' ? 'Our Collection' : activeCategory}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            {activeCategory === 'All' ? 'Luxury Appliances' : `Premium ${activeCategory}`}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/70 text-lg"
          >
            Discover our complete range of premium kitchen appliances, each
            designed to elevate your culinary experience.
          </motion.p>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 md:hidden mb-6">
            <div className="text-sm text-foreground/70">
              Category: <span className="text-foreground font-medium">{activeCategory}</span>
            </div>
            <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <SheetHeader>
                  <SheetTitle>Categories</SheetTitle>
                </SheetHeader>
                <div className="px-4 pb-4">
                  <CategoryFilter
                    activeCategory={activeCategory}
                    onChange={(category) => {
                      setActiveCategory(category)
                      setIsFiltersOpen(false)
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div
          className={cn(
            'grid grid-cols-1 gap-0 transition-all duration-300 ease-in-out',
            isSidebarOpen ? 'md:grid-cols-[260px_1fr]' : 'md:grid-cols-[0px_1fr]'
          )}
        >
            <aside 
              className={cn(
                "hidden md:block h-full transition-all duration-300",
                isSidebarOpen
                ? "w-[260px] pl-0 pr-6 opacity-100"
                : "w-0 pl-0 pr-0 opacity-0 border-none overflow-hidden"
              )}
            >
              <div className="sticky top-20 lg:top-24 max-h-[calc(100vh-5rem)] lg:max-h-[calc(100vh-6rem)] overflow-auto flex flex-col">
                <div className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-3">
                    <SlidersHorizontal className="h-4 w-4 text-primary" />
                    <div className="text-sm font-bold tracking-wide uppercase text-foreground">Categories</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsSidebarOpen(false)}>
                    <PanelLeftClose className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 py-4">
                  <CategoryFilter
                    activeCategory={activeCategory}
                    onChange={setActiveCategory}
                  />
                </div>
                <div className="py-6">
                  <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium uppercase tracking-widest flex items-center gap-2 group">
                    See all categories
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </aside>

            <div className={cn("transition-all duration-300", isSidebarOpen ? "md:pl-10" : "md:pl-0")}>
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {!isSidebarOpen && (
                  <div className="hidden md:flex mb-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setIsSidebarOpen(true)}
                      className="gap-2"
                    >
                      <PanelLeftOpen className="h-4 w-4" />
                      Show Filters
                    </Button>
                  </div>
                )}
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
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                          >
                            <img
                              src={product.colors[0].image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </motion.div>

                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.isNew && (
                              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider uppercase rounded-full">
                                New
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mb-4 px-1">
                          <span className="text-muted-foreground text-sm tracking-wider uppercase">
                            {product.category}
                          </span>
                          <h3 className="font-serif text-2xl text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium pt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <span className="text-sm uppercase tracking-wider">Discover</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-2">
                          {product.colors.slice(0, 4).map((color) => (
                            <div
                              key={color.id}
                              className="w-4 h-4 rounded-full border border-border/60"
                              style={{ backgroundColor: color.hex }}
                              title={color.name}
                            />
                          ))}
                          {product.colors.length > 4 && (
                            <span className="text-muted-foreground text-xs">
                              +{product.colors.length - 4}
                            </span>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}
