import { Cake, CalendarDays, Heart, Hourglass, LockKeyhole, Sparkles } from 'lucide-react'
import FeatureCard from './FeatureCard'
import ScrollReveal from './ScrollReveal'
import styles from './Features.module.css'

const features = [
  {
    icon: Cake,
    title: 'Birthday Reminders',
    description: 'Gentle nudges days before the celebration — so you can plan something meaningful, not rushed.',
  },
  {
    icon: Heart,
    title: 'Anniversary Tracking',
    description: 'Honor the milestones that mark your journey together, with reminders that feel thoughtful.',
  },
  {
    icon: Sparkles,
    title: 'Custom Events',
    description: 'Graduations, reunions, pet birthdays — every date that holds a place in your heart.',
  },
  {
    icon: Hourglass,
    title: 'Countdown View',
    description: 'Watch the days unfold until each moment arrives, building anticipation along the way.',
  },
  {
    icon: CalendarDays,
    title: 'Beautiful Calendar',
    description: 'Pick dates with an interface as calm and warm as the moments you\'re saving.',
  },
  {
    icon: LockKeyhole,
    title: 'Private & Offline',
    description: 'Your personal dates stay on your device. No accounts, no cloud — just your memories.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section} aria-labelledby="features-heading">
      <div className={styles.container}>
        <ScrollReveal className={styles.intro}>
          <span className={styles.label}>Features</span>
          <h2 id="features-heading" className={styles.heading}>
            Everything you need to stay close to what matters
          </h2>
          <p className={styles.description}>
            Purpose-built for relationships, not productivity. Simple, focused, and
            designed with the warmth your memories deserve.
          </p>
        </ScrollReveal>
        <ul className={styles.grid}>
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} as="li" delay={i * 80}>
              <FeatureCard
                icon={<feature.icon size={22} strokeWidth={1.75} aria-hidden="true" />}
                title={feature.title}
                description={feature.description}
              />
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
