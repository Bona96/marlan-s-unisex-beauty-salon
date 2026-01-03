import React from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id?: string
  className?: string
  variant?: 'fade' | 'bounce' | 'slide'
  children: React.ReactNode
}

const variants = {
  fade: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } },
  slide: { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } },
  bounce: { initial: { opacity: 0, y: 30, scale: 0.98 }, whileInView: { opacity: 1, y: 0, scale: 1 } },
}

const Section: React.FC<SectionProps> = ({ id, className = '', variant = 'fade', children }) => {
  const v = variants[variant]
  return (
    <motion.div
      id={id}
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative z-10 w-full px-4 md:px-8 py-12 max-w-6xl mx-auto ${className} snap-start`}
    >
      {children}
    </motion.div>
  )
}

export default Section
