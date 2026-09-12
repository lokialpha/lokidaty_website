import { useEffect, useRef } from 'react'
import Button from './Button'
import GooglePlayBadge from './GooglePlayBadge'
import HeroBackground from './HeroBackground'
import PixelPhoneMockup from './PixelPhoneMockup'
import styles from './Hero.module.css'

export default function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const mockup = mockupRef.current
    if (!section || !mockup) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 1024px)').matches
    if (prefersReduced || !desktop) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mockup.style.setProperty('--parallax-x', `${x * 8}px`)
      mockup.style.setProperty('--parallax-y', `${y * 5}px`)
    }

    section.addEventListener('mousemove', handleMouseMove)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-heading">
      <HeroBackground />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`${styles.badge} ${styles.fadeUp}`} style={{ animationDelay: '0.1s' }}>
            For the moments you never want to forget
          </span>
          <h1 id="hero-heading" className={`${styles.headline} ${styles.fadeUp}`} style={{ animationDelay: '0.22s' }}>
            Remember the people and moments that{' '}
            <span className={styles.headlineAccent}>matter</span> most
          </h1>
          <p className={`${styles.subheadline} ${styles.fadeUp}`} style={{ animationDelay: '0.36s' }}>
            Never miss a birthday, anniversary, or meaningful moment again. Loki-Daty keeps
            life&apos;s most important dates close, so the people you care about always come first.
          </p>
          <div className={`${styles.actions} ${styles.fadeUp}`} style={{ animationDelay: '0.5s' }}>
            <GooglePlayBadge
              size="large"
              className={styles.primaryCta}
              eyebrow="Download on"
              title="Google Play"
            />
            <Button href="#features" variant="secondary" showArrow>
              Learn More
            </Button>
          </div>
          <p className={`${styles.platformNote} ${styles.fadeUp}`} style={{ animationDelay: '0.58s' }}>
            Available on Android now. iOS coming soon.
          </p>
        </div>
        <div ref={mockupRef} className={styles.mockup}>
          <div className={`${styles.mockupInner} ${styles.fadeUp}`} style={{ animationDelay: '0.65s' }}>
            <div className={styles.mockupGlow} aria-hidden="true" />
            <div className={styles.mockupGlowSecondary} aria-hidden="true" />
            <div className={styles.mockupFloat}>
              <PixelPhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
