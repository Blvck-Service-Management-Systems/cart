import { useState } from 'react'
import CartIcon from './CartIcon'

export default function ProductCard() {
  const [cartCount, setCartCount] = useState(0)
  const [animate, setAnimate] = useState(false)

  const handleAdd = () => {
    setCartCount(cartCount + 1)
    setAnimate(true)
    setTimeout(() => setAnimate(false), 400)
  }

  return (
    <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-xl gap-2">
      <div className="text-xl font-bold">🍩 Donut</div>
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Dodaj do koszyka
      </button>
      <CartIcon count={cartCount} animate={animate} />
    </div>
  )
}
