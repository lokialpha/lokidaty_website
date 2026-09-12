import ScrollReveal from './ScrollReveal'
import styles from './Problem.module.css'

const painPoints = [
  {
    icon: '♡',
    title: 'Forgotten birthdays hurt',
    description:
      'Missing someone\'s special day leaves a quiet ache — even when life gets overwhelmingly busy.',
  },
  {
    icon: '◦',
    title: 'Calendars weren\'t built for this',
    description:
      'Work meetings and grocery runs shouldn\'t sit beside the dates that define your relationships.',
  },
  {
    icon: '◷',
    title: 'Last-minute panic',
    description:
      'Scrambling for a gift the night before? The people you love deserve better than that stress.',
  },
]

export default function Problem() {
  return (
    <section id="story" className={styles.section} aria-labelledby="problem-heading">
      <div className={styles.container}>
        <ScrollReveal className={styles.intro}>
          <span className={styles.label}>The feeling</span>
          <h2 id="problem-heading" className={styles.heading}>
            Life moves fast. The moments that matter shouldn&apos;t slip away.
          </h2>
          <p className={styles.description}>
            We all have people we never want to disappoint — birthdays, anniversaries,
            milestones that deserve more than a calendar notification buried in noise.
          </p>
        </ScrollReveal>
        <ul className={styles.grid}>
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} as="li" className={styles.card} delay={i * 100}>
              <span className={styles.icon} aria-hidden="true">{point.icon}</span>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardText}>{point.description}</p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
