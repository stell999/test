import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Calendar, ArrowRight } from 'lucide-react'
import { newsArticles } from '@/lib/mock-data'
import { useState } from 'react'

export const Route = createFileRoute('/_public/news')({
  component: NewsPage,
})

const categories = [
  'All',
  'Social',
  'Awards',
  'Sustainability',
  'Events',
  'Partnerships',
  'Technology',
  'Products',
]

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredNews =
    activeCategory === 'All'
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory)

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/cover.jpg"
            alt="News Cover"
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
            Latest Updates
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            News & Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg"
          >
            Stay informed about our latest innovations, partnerships, and the
            stories behind our luxury appliances.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface NewsCardProps {
  article: (typeof newsArticles)[0]
  index: number
}

function NewsCard({ article, index }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-foreground/5 border border-border/40">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="px-3 py-1 bg-background/70 backdrop-blur-sm text-foreground text-xs tracking-wider uppercase rounded-full border border-border/40">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Date */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.date}>{formattedDate}</time>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-muted-foreground transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3 mb-4">
            {article.excerpt}
          </p>

          {/* Read More */}
          <span className="inline-flex items-center gap-2 text-foreground/70 group-hover:text-foreground transition-colors text-sm">
            Read Article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
