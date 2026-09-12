import styles from './PixelPhoneMockup.module.css'

export interface PixelPhoneMockupProps {
  label?: string
  src?: string
  variant?: 'hero' | 'gallery'
}

export default function PixelPhoneMockup({
  label = 'Loki-Daty app preview showing upcoming events',
  src = '/app-screenshot.png',
  variant = 'hero',
}: PixelPhoneMockupProps) {
  const isHero = variant === 'hero'

  return (
    <div
      className={`${styles.phone} ${isHero ? styles.phoneHero : ''} ${variant === 'gallery' ? styles.phoneGallery : ''}`}
    >
      <div className={styles.frame}>
        <span className={styles.edgeHighlight} aria-hidden="true" />
        <span className={styles.sideButtonVolume} aria-hidden="true" />
        <span className={styles.sideButtonPower} aria-hidden="true" />
        <div className={styles.screen}>
          <img
            src={src}
            alt={label}
            className={styles.screenshot}
            width={472}
            height={1024}
            loading={isHero ? 'eager' : 'lazy'}
            decoding="async"
          />
          <span className={styles.punchHole} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
