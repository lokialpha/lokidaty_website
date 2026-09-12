import ScrollReveal from './ScrollReveal'
import styles from './WhyLokiDaty.module.css'

const reasons = [
  {
    title: 'Built for relationships',
    description:
      'Not another productivity tool. Loki-Daty exists for the people and moments that give your life meaning.',
  },
  {
    title: 'No clutter, no noise',
    description:
      'No ads, no social feeds, no feature bloat. Just your dates, organized with quiet elegance.',
  },
  {
    title: 'Privacy first',
    description:
      'Your personal dates stay on your device. The people you love deserve discretion and respect.',
  },
  {
    title: 'Gentle reminders',
    description:
      'Notifications that feel like a caring nudge — helpful, never nagging — so you can show up with heart.',
  },
]

export default function WhyLokiDaty() {
  return (
    <section id="why-loki-daty" className={styles.section} aria-labelledby="why-heading">
      <div className={styles.container}>
        <ScrollReveal className={styles.intro}>
          <span className={styles.label}>Why Loki-Daty</span>
          <h2 id="why-heading" className={styles.heading}>
            Because the people you love deserve to be remembered
          </h2>
          <p className={styles.description}>
            In a world of endless notifications, we built something different —
            a quiet space for the dates that truly matter.
          </p>
        </ScrollReveal>
        <ul className={styles.grid}>
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} as="li" className={styles.card} delay={i * 100}>
              <div className={styles.accent} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardText}>{reason.description}</p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
