import { motion } from 'framer-motion'

interface CartIconProps {
  count: number
  animate: boolean
}

export default function CartIcon({ count, animate }: CartIconProps) {
  return (
    <motion.div
      className="relative text-4xl"
      animate={animate ? { scale: [1, 1.4, 1] } : {}}
      transition={{ duration: 0.4 }}
    >
      🛒
      {count > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </div>
      )}
    </motion.div>
  )
}
