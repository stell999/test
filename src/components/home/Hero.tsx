import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/DT0NM6tOGVk?autoplay=1&mute=1&loop=1&playlist=DT0NM6tOGVk&controls=0&rel=0&modestbranding=1&playsinline=1"
            title="Kozano Hero Video"
            className="absolute left-1/2 top-1/2 h-[56.25vw] w-[100vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center pt-20 sm:pt-28 lg:pt-32">
            <div className="mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary" />
                CRAFTED FOR PERFECTION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-5 sm:mb-6 leading-[0.95] sm:leading-[0.9]">
              <span className="block">The Art of</span>
              <span className="block mt-2">
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-white via-[#595a5c] to-white bg-clip-text text-transparent">
                    Luxury Living
                  </span>
                  <span className="absolute bottom-1.5 sm:bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                </span>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-white/60 mb-7 sm:mb-10 leading-relaxed">
              Where precision engineering meets timeless design. Discover appliances that transform your kitchen into a sanctuary of culinary excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 h-14 px-8 text-base font-medium group w-full sm:w-auto"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}
