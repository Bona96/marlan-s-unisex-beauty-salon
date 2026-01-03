import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { HeroVideoSliderProps } from '../lib/types'


const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0, scale: 0.98 }),
}

export const HeroVideoSlider: React.FC<HeroVideoSliderProps> = ({ videos = [], interval = 6000 }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const count = videos.length
  const intervalRef = useRef<number | null>(null)

  const paginate = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + count) % count)
      setDirection(dir)
    },
    [count]
  )

  useEffect(() => {
    if (isPaused || count <= 1) return
    intervalRef.current = window.setInterval(() => paginate(1), interval)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [isPaused, paginate, interval, count])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [paginate])

  if (!videos || videos.length === 0) return null

  return (
    <div
      className="w-full flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-3xl shadow-2xl overflow-hidden" style={{ maxWidth: '95vw', maxHeight: '70vh', width: '100%' }}>
        {/* video area */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={videos[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="relative flex items-center justify-center bg-black/20"
            style={{ minHeight: '45vh' }}
          >
            <video
              src={videos[index]}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-3xl"
              style={{ background: 'linear-gradient(135deg, #232526 0%, #181818 100%)' }}
            />

            {/* subtle overlay to make it more pronounced */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-black/30 mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-b from-transparent via-black/20 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
          <button
            aria-label="Previous video"
            onClick={() => paginate(-1)}
            className="bg-black/40 text-yellow-400 p-2 rounded-full hover:bg-black/60 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L6.586 10l4.707-4.707a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
          <button
            aria-label="Next video"
            onClick={() => paginate(1)}
            className="bg-black/40 text-yellow-400 p-2 rounded-full hover:bg-black/60 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0L13.414 10l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {videos.map((v, i) => (
            <button
              key={v}
              aria-label={`Go to video ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === index ? 'bg-yellow-400' : 'bg-black/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroVideoSlider
