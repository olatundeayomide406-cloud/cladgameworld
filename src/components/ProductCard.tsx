import { Link } from '@tanstack/react-router'
import { Clock3, Heart, Star } from 'lucide-react'
import type { Product } from '@/data/catalog'

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card" style={{ '--accent': product.accent } as React.CSSProperties}>
    <div className="product-visual"><span className="product-game-code">{product.game.split(/\s/).slice(0,2).map((word) => word[0]).join('')}</span>{product.badge && <b>{product.badge}</b>}<button aria-label="Add to wishlist"><Heart size={17}/></button><div className="visual-grid" /></div>
    <div className="product-body"><span className="product-game">{product.game}</span><Link to="/products/$productId" params={{productId: product.slug}}><h3>{product.name}</h3></Link><p>{product.shortDescription}</p><div className="product-meta"><span><Star size={14} fill="currentColor"/> {product.rating} <i>({product.reviews})</i></span><span><Clock3 size={14}/> {product.delivery}</span></div><div className="product-price"><div><small>FROM</small><strong>${product.price.toFixed(2)}</strong>{product.oldPrice && <del>${product.oldPrice.toFixed(2)}</del>}</div><Link to="/products/$productId" params={{productId: product.slug}}>Configure →</Link></div></div>
  </article>
}
