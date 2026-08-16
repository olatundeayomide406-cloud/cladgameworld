import { Link, createFileRoute } from '@tanstack/react-router'
import { BadgeCheck, Check, ChevronDown, Clock3, Headphones, ShieldCheck, Star } from 'lucide-react'
import { AddToCart } from '@/components/AddToCart'
import { ProductCard } from '@/components/ProductCard'
import { getProduct, products } from '@/data/catalog'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => {
    const product = getProduct(params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
  component: ProductPage,
})

function ProductPage() {
  const product = Route.useLoaderData()
  return <div className="inner-page"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/games/$gameSlug" params={{gameSlug:product.gameSlug}}>{product.game}</Link><span>/</span>{product.name}</div><section className="product-detail"><div className="detail-visual" style={{'--accent':product.accent} as React.CSSProperties}><span>{product.game.split(/\s/).slice(0,2).map((word)=>word[0]).join('')}</span><small>{product.game}</small><div className="visual-grid"/></div><div className="detail-config"><span className="kicker">{product.service}</span><h1>{product.name}</h1><div className="detail-rating"><span className="stars">★★★★★</span><b>{product.rating}</b><span>{product.reviews} verified reviews</span></div><p>{product.description}</p><label>Platform<select><option>Choose your platform</option><option>PC</option><option>PlayStation 5</option><option>Xbox Series X|S</option></select><ChevronDown/></label><label>Delivery speed<select><option>Standard — {product.delivery}</option><option>Priority delivery (+25%)</option></select><ChevronDown/></label><div className="detail-price"><span><small>YOUR TOTAL</small><strong>${product.price.toFixed(2)}</strong></span><AddToCart/></div><div className="payment-line">Secure checkout · Stripe · PayPal · Apple Pay · Google Pay · Crypto</div></div></section><section className="assurance-grid"><div><ShieldCheck/><b>Buyer protection</b><p>Your payment stays protected until delivery is confirmed.</p></div><div><Clock3/><b>Live tracking</b><p>Follow milestones and chat from your customer dashboard.</p></div><div><BadgeCheck/><b>Vetted experts</b><p>Every specialist is reviewed for quality and reliability.</p></div><div><Headphones/><b>24/7 support</b><p>Real help whenever your order needs attention.</p></div></section><section className="content-split"><div><span className="kicker">WHAT'S INCLUDED</span><h2>Built around your order.</h2>{['Dedicated order specialist','Live milestone updates','Secure, private fulfillment','Post-delivery quality check'].map(item=><p className="check-line" key={item}><Check/>{item}</p>)}</div><div className="faq-stack"><span className="kicker">COMMON QUESTIONS</span>{['How does delivery work?','Is my account information protected?','Can I change my order after checkout?','What happens if I need help?'].map(item=><details key={item}><summary>{item}<span>+</span></summary><p>Your dashboard shows every step, and our support team can adjust eligible orders before fulfillment begins.</p></details>)}</div></section><section className="related"><div className="section-heading"><div><span className="kicker">KEEP EXPLORING</span><h2>Related services.</h2></div></div><div className="product-grid">{products.filter(item=>item.id!==product.id).slice(0,4).map(item=><ProductCard key={item.id} product={item}/>)}</div></section></div>
}
