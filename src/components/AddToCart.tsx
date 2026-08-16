import { useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'

export function AddToCart({ compact = false }: { compact?: boolean }) {
  const [added, setAdded] = useState(false)
  const add = () => {
    const next = Number(localStorage.getItem('apex-cart-count') || 0) + 1
    localStorage.setItem('apex-cart-count', String(next))
    window.dispatchEvent(new Event('apex-cart'))
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }
  return <button className={compact ? 'button primary compact' : 'button primary'} onClick={add}>{added ? <><Check size={18}/> Added to cart</> : <><ShoppingBag size={18}/> Add to cart</>}</button>
}
