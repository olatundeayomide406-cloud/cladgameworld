import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { StoreShell } from '@/components/StoreShell'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Premium gaming boosting, currency, leveling, unlocks, accounts, and recovery services.' },
      { title: 'ADME — Apex Gaming Hub' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><HeadContent /><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,600;0,700;0,800;0,900;1,700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body><StoreShell>{children}</StoreShell><Scripts /></body></html>
}
