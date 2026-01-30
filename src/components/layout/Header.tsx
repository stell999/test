import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Globe, Moon, Sun, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { languages } from '@/lib/mock-data'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/agents', label: 'Distributors' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const { theme, setTheme } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/_public/' || location.pathname === '/products' || location.pathname === '/products/'
  const [headerVariant, setHeaderVariant] = useState<'transparent' | 'white'>(isHome ? 'transparent' : 'white')
  const variantRef = useRef<'transparent' | 'white'>(isHome ? 'transparent' : 'white')
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const threshold = 24

    const applyVariant = () => {
      const nextVariant: 'transparent' | 'white' = !isHome
        ? 'white'
        : window.scrollY <= threshold
          ? 'transparent'
          : 'white'

      if (variantRef.current !== nextVariant) {
        variantRef.current = nextVariant
        setHeaderVariant(nextVariant)
      }
    }

    const onScroll = () => {
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        applyVariant()
      })
    }

    applyVariant()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
    }
  }, [isHome])

  const isWhite = headerVariant === 'white'
  const isTransparent = headerVariant === 'transparent'

  const chromeClassName = isTransparent
    ? 'bg-transparent border-transparent backdrop-blur-0'
    : isWhite
      ? 'bg-background/95 border-border/10 backdrop-blur-xl'
      : 'bg-background/70 border-border/40 backdrop-blur-xl'

  const linkClassName = isWhite
    ? 'text-foreground/80 hover:text-foreground'
    : isTransparent
      ? 'text-white/80 hover:text-white'
      : 'text-foreground/80 hover:text-foreground'

  const activeLinkClassName = "text-primary font-bold"

  const topLinkClassName = isWhite
    ? 'text-foreground/60 hover:text-foreground'
    : isTransparent
      ? 'text-white/60 hover:text-white'
      : 'text-foreground/60 hover:text-foreground'

  const buttonClassName = isWhite
    ? 'text-foreground hover:bg-accent/40'
    : isTransparent
      ? 'text-white hover:bg-white/10'
      : 'text-foreground hover:bg-accent/40'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`absolute inset-0 border-b ${chromeClassName}`} />

      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="hidden lg:block h-24">
          <div className="grid grid-cols-3 items-center h-16">
            <div
              className={`flex items-center gap-6 text-[11px] tracking-widest uppercase transition-colors ${topLinkClassName}`}
            >
              <Link to="/about" className="transition-colors">
                Worldwide
              </Link>
              <Link to="/news" className="transition-colors">
                Sustainability
              </Link>
            </div>
            <Link to="/" className="justify-self-center">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <img
                  src="/logo.png"
                  alt="Kozano"
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <div className="justify-self-end flex items-center gap-2">
              <Select value={currentLang} onValueChange={setCurrentLang}>
                <SelectTrigger
                  className={`h-7 w-[110px] transition-colors ${isWhite ? 'bg-white/70 border-black/10 text-black hover:bg-white' : isTransparent ? 'bg-white/5 border-white/20 text-white hover:bg-white/10' : 'bg-background/40 border-border/60 text-foreground hover:bg-background/60'}`}
                >
                  <Globe className="w-4 h-4 mr-2 opacity-70 text-primary" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background/90 backdrop-blur-xl border-border/60">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.code}
                      value={lang.code}
                      className="text-foreground hover:bg-accent/50 focus:bg-accent/50 focus:text-foreground cursor-pointer"
                    >
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${buttonClassName}`}
                aria-label="Toggle theme"
                type="button"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>
              <button
                className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${buttonClassName}`}
                aria-label="Search"
                type="button"
              >
                <Search className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center h-8">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  activeProps={{
                    className: `text-xs font-medium tracking-widest uppercase transition-colors ${activeLinkClassName} ${theme === 'dark' ? 'text-black' : ''}`
                  }}
                  inactiveProps={{
                    className: `text-xs font-medium tracking-widest uppercase transition-colors ${linkClassName}`
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-20 lg:hidden">
          <Link to="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <img src="/iconlogo.png" alt="Kozano" className="h-9 w-9 rounded-md" />
              <img src="/logo.png" alt="Kozano" className="h-7 w-auto" />
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`inline-flex p-2 rounded-lg transition-colors ${buttonClassName}`}
              aria-label="Toggle theme"
              type="button"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${buttonClassName}`}
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden relative border-b ${isTransparent ? 'bg-black/40 border-white/10 backdrop-blur-xl' : 'bg-background/90 border-border/40 backdrop-blur-xl'}`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors py-2"
                type="button"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="pt-4 border-t border-border/40"
              >
                <Select value={currentLang} onValueChange={setCurrentLang}>
                  <SelectTrigger className="w-full bg-background/40 border-border/60 text-foreground">
                    <Globe className="w-4 h-4 mr-2 opacity-70 text-primary" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background/90 backdrop-blur-xl border-border/60">
                    {languages.map((lang) => (
                      <SelectItem
                        key={lang.code}
                        value={lang.code}
                        className="text-foreground hover:bg-accent/50 focus:bg-accent/50 focus:text-foreground"
                      >
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
