import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { authMiddleware } from '@/server/functions/auth'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const Route = createFileRoute('/_public')({
  loader: async () => {
    const { currentUser } = await authMiddleware()

    return {
      currentUser,
    }
  },
  component: PublicLayout,
})

function PublicLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
