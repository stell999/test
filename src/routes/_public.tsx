import { createFileRoute, Outlet } from '@tanstack/react-router'
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
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
