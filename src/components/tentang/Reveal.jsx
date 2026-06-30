import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — wrapper yang memunculkan animasi fade-in + translate
 * saat anaknya masuk viewport (pengganti IntersectionObserver vanilla).
 *
 * Pemakaian:
 *   <Reveal as="section" className="...">
 *     <Anak />
 *   </Reveal>
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  threshold = 0.12,
  once = true,
  children,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Hormati preferensi reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
