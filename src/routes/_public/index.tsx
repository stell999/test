import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/home/Hero'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { NewsPreview } from '@/components/home/NewsPreview'

export const Route = createFileRoute('/_public/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutTeaser />
      <NewsPreview />
    </>
  )
}
