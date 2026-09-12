import GooglePlayBadge from './GooglePlayBadge'
import ScrollReveal from './ScrollReveal'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <ScrollReveal className={styles.card}>
          <span className={styles.eyebrow}>Download now</span>
          <h2 id="cta-heading" className={styles.heading}>
            Don&apos;t let another important moment pass you by
          </h2>
          <p className={styles.description}>
            Loki-Daty is ready on Android — a gentle reminder app built with heart for birthdays,
            anniversaries, and every date that holds meaning.
          </p>
          <div className={styles.downloadArea}>
            <GooglePlayBadge size="large" />
          </div>
          <p className={styles.platformNote}>Available now on Android. iOS coming soon.</p>
          <p className={styles.note}>Free to download. Your dates stay private on your device.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
