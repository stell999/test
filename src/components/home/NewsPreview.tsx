import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, Calendar } from 'lucide-react'
import { newsArticles } from '@/lib/mock-data'

export function NewsPreview() {
  const latestNews = newsArticles.slice(0, 3)

  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#B8860B] text-sm tracking-widest uppercase mb-4"
            >
              Latest News
            </motion.span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Stories & Updates
            </h2>
          </div>

          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm tracking-wider uppercase">
              View All News
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestNews.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/news`} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-white/5">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs tracking-wider uppercase rounded-full border border-white/10">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Date */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.date}>{formattedDate}</time>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl lg:text-2xl text-white mb-3 group-hover:text-[#C0C0C0] transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
            {article.excerpt}
          </p>

          {/* Read More */}
          <span className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm">
            Read Article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
