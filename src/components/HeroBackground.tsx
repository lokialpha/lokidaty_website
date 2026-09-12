import styles from './HeroBackground.module.css'

const STARS = [
  { top: '8%', left: '14%', delay: '0s', size: 'sm' },
  { top: '12%', left: '68%', delay: '1.4s', size: 'md' },
  { top: '22%', left: '42%', delay: '2.8s', size: 'sm' },
  { top: '28%', left: '78%', delay: '0.6s', size: 'lg' },
  { top: '35%', left: '6%', delay: '3.2s', size: 'sm' },
  { top: '38%', left: '52%', delay: '1.8s', size: 'md' },
  { top: '48%', left: '88%', delay: '4s', size: 'sm' },
  { top: '55%', left: '22%', delay: '0.4s', size: 'md' },
  { top: '62%', left: '72%', delay: '2.2s', size: 'sm' },
  { top: '68%', left: '38%', delay: '3.6s', size: 'lg' },
  { top: '75%', left: '58%', delay: '1s', size: 'sm' },
  { top: '82%', left: '12%', delay: '2.6s', size: 'md' },
  { top: '88%', left: '82%', delay: '0.2s', size: 'sm' },
  { top: '18%', left: '92%', delay: '3.8s', size: 'sm' },
  { top: '72%', left: '46%', delay: '1.6s', size: 'sm' },
] as const

const STAR_SIZE_CLASS = {
  sm: styles.starSm,
  md: styles.starMd,
  lg: styles.starLg,
} as const

const PARTICLES = [
  { top: '20%', left: '30%', delay: '0s', duration: '14s' },
  { top: '45%', left: '65%', delay: '2s', duration: '18s' },
  { top: '60%', left: '20%', delay: '4s', duration: '16s' },
  { top: '30%', left: '80%', delay: '1s', duration: '20s' },
  { top: '75%', left: '50%', delay: '3s', duration: '15s' },
  { top: '15%', left: '55%', delay: '5s', duration: '17s' },
  { top: '50%', left: '10%', delay: '2.5s', duration: '19s' },
  { top: '85%', left: '70%', delay: '1.5s', duration: '16s' },
] as const

export default function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.baseGradient} />
      <div className={`${styles.glow} ${styles.glowOne}`} />
      <div className={`${styles.glow} ${styles.glowTwo}`} />
      <div className={`${styles.glow} ${styles.glowThree}`} />
      <div className={`${styles.glow} ${styles.glowFour}`} />
      <div className={`${styles.glow} ${styles.glowFive}`} />
      <div className={`${styles.glow} ${styles.glowSix}`} />
      <div className={styles.noise} />

      <svg
        className={styles.orbitLines}
        viewBox="0 0 500 600"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <ellipse cx="250" cy="300" rx="220" ry="160" className={styles.orbitRing} />
        <ellipse cx="250" cy="300" rx="175" ry="125" className={styles.orbitRing} />
        <ellipse cx="250" cy="300" rx="130" ry="92" className={styles.orbitRing} />
        <ellipse cx="250" cy="300" rx="85" ry="58" className={styles.orbitRing} />
        <path
          d="M 30 300 A 220 160 0 0 1 470 300"
          className={styles.orbitArc}
        />
        <path
          d="M 470 300 A 220 160 0 0 1 30 300"
          className={styles.orbitArc}
          style={{ animationDelay: '3s' }}
        />
        <path
          d="M 250 140 A 175 125 0 0 1 250 460"
          className={styles.orbitArc}
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      <div className={`${styles.circle} ${styles.circleOne}`} />
      <div className={`${styles.circle} ${styles.circleTwo}`} />
      <div className={`${styles.circle} ${styles.circleThree}`} />

      <svg className={styles.constellation} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <line x1="120" y1="80" x2="200" y2="140" />
        <line x1="200" y1="140" x2="280" y2="100" />
        <line x1="280" y1="100" x2="340" y2="180" />
        <line x1="580" y1="120" x2="640" y2="200" />
        <line x1="640" y1="200" x2="720" y2="160" />
        <line x1="100" y1="420" x2="180" y2="480" />
        <line x1="180" y1="480" x2="260" y2="440" />
        <circle cx="120" cy="80" r="2" />
        <circle cx="200" cy="140" r="2" />
        <circle cx="280" cy="100" r="2" />
        <circle cx="340" cy="180" r="2" />
        <circle cx="580" cy="120" r="2" />
        <circle cx="640" cy="200" r="2" />
        <circle cx="720" cy="160" r="2" />
        <circle cx="100" cy="420" r="2" />
        <circle cx="180" cy="480" r="2" />
        <circle cx="260" cy="440" r="2" />
      </svg>

      {STARS.map((star, i) => (
        <span
          key={i}
          className={`${styles.star} ${STAR_SIZE_CLASS[star.size]}`}
          style={{ top: star.top, left: star.left, animationDelay: star.delay }}
        />
      ))}

      {PARTICLES.map((particle, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}
