import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Testimonial = {
  id: number
  name: string
  role?: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Afande Munyumya',
    role: 'Founder, Beauty Co.',
    quote:
      "Outstanding service and such a warm atmosphere — my go-to place for a fresh look!",
  },
  {
    id: 2,
    name: 'Rubangira Rada',
    role: 'Stylist',
    quote:
      "Skilled staff and the best hair treatments in town — I always leave feeling confident.",
  },
  {
    id: 3,
    name: 'Nataka Venus',
    role: 'Makeup Artist',
    quote:
      "A stunning space with premium products — beauty and care in every detail.",
  },
  {
    id: 4,
    name: 'Anna',
    role: 'Customer',
    quote:
      "Friendly, professional, and creative — I always recommend them to friends!",
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.96,
  }),
}

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
      {initials}
    </div>
  )
}

const Testimonials: React.FC = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
  const [isPaused, setIsPaused] = useState(false)
  const count = TESTIMONIALS.length
  const intervalRef = useRef<number | null>(null)

  const paginate = useCallback(
    (newDirection: number) => {
      setIndex(([i]) => {
        const next = (i + newDirection + count) % count
        return [next, newDirection]
      })
    },
    [count]
  )

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = window.setInterval(() => paginate(1), 5000)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [isPaused, paginate])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [paginate])

  return (
    <section className="py-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold">What People Say</h2>
            <p className="text-yellow-400 mt-2">Real experiences from our clients</p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={() => paginate(-1)}
              className="bg-yellow-400 text-black px-3 py-2 rounded-md shadow-md hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {/* left arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L6.586 10l4.707-4.707a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => paginate(1)}
              className="bg-transparent border border-yellow-400 text-yellow-400 px-3 py-2 rounded-md shadow-md hover:bg-yellow-400 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {/* right arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0L13.414 10l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={TESTIMONIALS[index].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-black/80 border border-yellow-400 p-8 rounded-2xl shadow-2xl min-h-45 flex gap-6 items-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                console.log(e)
                const swipe = Math.abs(offset.x) * velocity.x
                if (swipe < -1000) paginate(1)
                else if (swipe > 1000) paginate(-1)
              }}
            >
              <Avatar name={TESTIMONIALS[index].name} />

              <div>
                <p className="text-xl text-yellow-400 font-semibold">“{TESTIMONIALS[index].quote}”</p>
                <div className="mt-4">
                  <div className="text-white font-bold">{TESTIMONIALS[index].name}</div>
                  <div className="text-sm text-gray-300">{TESTIMONIALS[index].role}</div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? 'bg-yellow-400' : 'bg-yellow-800/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
