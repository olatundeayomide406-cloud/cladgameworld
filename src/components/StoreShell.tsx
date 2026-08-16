import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronDown, Gamepad2, Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { games, services } from '@/data/catalog'

export function StoreShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const sync = () => setCartCount(Number(localStorage.getItem('apex-cart-count') || 0))
    sync()
    window.addEventListener('apex-cart', sync)
    return () => window.removeEventListener('apex-cart', sync)
  }, [])

  if (pathname.startsWith('/admin')) return <>{children}</>

  return (
    <div className="site-shell">
      <div className="sale-bar"><span>◆</span> FLASH DROP — SAVE 20% WITH CODE <strong>LEVELUP20</strong><span>◆</span></div>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Apex Gaming Hub home">
          <span className="brand-mark"><Gamepad2 size={21} /></span>
          <span><b>ADME</b><small>APEX GAMING HUB</small></span>
        </Link>
        <nav className="desktop-nav">
          <Link to="/catalog">Services</Link>
          <div className="nav-dropdown">
            <button>Games <ChevronDown size={14} /></button>
            <div className="mega-menu">
              <div><span className="menu-label">Popular games</span>{games.slice(0, 10).map((game) => <Link key={game.slug} to="/games/$gameSlug" params={{ gameSlug: game.slug }}>{game.name}</Link>)}</div>
              <div><span className="menu-label">Shop by service</span>{services.slice(0, 7).map((service) => <Link key={service.slug} to="/services/$serviceSlug" params={{ serviceSlug: service.slug }}>{service.name}</Link>)}</div>
              <div className="mega-promo"><span>150+ GAMES</span><b>Find your next upgrade.</b><Link to="/catalog">Explore full catalog →</Link></div>
            </div>
          </div>
          <Link to="/info/$page" params={{ page: 'how-it-works' }}>How it works</Link>
          <Link to="/blog">News</Link>
          <Link to="/info/$page" params={{ page: 'contact' }}>Support</Link>
        </nav>
        <div className="header-actions">
          <button aria-label="Search" onClick={() => setSearchOpen(true)}><Search size={19} /></button>
          <Link to="/account" aria-label="Account"><UserRound size={19} /></Link>
          <Link to="/account" aria-label="Wishlist"><Heart size={19} /></Link>
          <Link to="/cart" aria-label="Cart" className="cart-link"><ShoppingBag size={20} />{cartCount > 0 && <span>{cartCount}</span>}</Link>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Menu"><Menu /></button>
        </div>
      </header>
      {searchOpen && <div className="search-overlay"><button onClick={() => setSearchOpen(false)}><X /></button><div><span>SEARCH THE GAMEWORLD</span><form action="/catalog"><Search /><input name="q" autoFocus placeholder="Search games, services, unlocks..." /></form><p>Popular: GTA V · Call of Duty · Elden Ring · WoW</p></div></div>}
      {menuOpen && <div className="mobile-drawer"><button onClick={() => setMenuOpen(false)}><X /></button><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link><Link to="/catalog" onClick={() => setMenuOpen(false)}>All games & services</Link><Link to="/account" onClick={() => setMenuOpen(false)}>My account</Link><Link to="/blog" onClick={() => setMenuOpen(false)}>News</Link><Link to="/info/$page" params={{ page: 'contact' }} onClick={() => setMenuOpen(false)}>Support</Link></div>}
      <main>{children}</main>
      <footer>
        <div className="footer-top"><div><div className="brand footer-brand"><span className="brand-mark"><Gamepad2 /></span><span><b>ADME</b><small>APEX GAMING HUB</small></span></div><p>Premium gaming services, delivered by vetted specialists with live order tracking.</p></div><div><b>Marketplace</b><Link to="/catalog">All services</Link><Link to="/catalog">All games</Link><Link to="/blog">News & guides</Link></div><div><b>Support</b><Link to="/info/$page" params={{page:'faq'}}>FAQ</Link><Link to="/info/$page" params={{page:'contact'}}>Contact</Link><Link to="/account">Track order</Link></div><div><b>Legal</b><Link to="/info/$page" params={{page:'terms'}}>Terms</Link><Link to="/info/$page" params={{page:'privacy'}}>Privacy</Link><Link to="/info/$page" params={{page:'refunds'}}>Refunds</Link></div></div>
        <div className="footer-bottom"><span>© 2026 ADME Apex Gaming Hub</span><span>Stripe · PayPal · Apple Pay · Google Pay · Crypto</span></div>
      </footer>
      <Link to="/info/$page" params={{page:'contact'}} className="live-chat"><span>●</span> Live support</Link>
    </div>
  )
}
