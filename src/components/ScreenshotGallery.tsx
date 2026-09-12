import { useState } from 'react'
import PixelPhoneMockup from './PixelPhoneMockup'
import ScrollReveal from './ScrollReveal'
import styles from './ScreenshotGallery.module.css'

type Theme = 'light' | 'dark'

const screenshots = [
  {
    id: 'home',
    label: 'Home screen with upcoming events and offline greetings',
    caption: 'Your next meaningful moment, front and center',
    light: '/screenshots/home-light.png',
    dark: '/screenshots/home-dark.png',
  },
  {
    id: 'events',
    label: 'All events screen with countdowns',
    caption: 'Every date you care about, beautifully organized',
    light: '/screenshots/events-light.png',
    dark: '/screenshots/events-dark.png',
  },
  {
    id: 'notifications',
    label: 'Notifications screen with local reminders',
    caption: 'Gentle reminders that keep you prepared',
    light: '/screenshots/notifications-light.png',
    dark: '/screenshots/notifications-dark.png',
  },
  {
    id: 'settings',
    label: 'Settings screen with display and backup options',
    caption: 'Light, dark, or system — your choice',
    light: '/screenshots/settings-light.png',
    dark: '/screenshots/settings-dark.png',
  },
] as const

export default function ScreenshotGallery() {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <section id="screenshots" className={styles.section} aria-labelledby="screenshots-heading">
      <div className={styles.decorative} aria-hidden="true">
        <div className={styles.glowBlob} />
      </div>
      <div className={styles.container}>
        <ScrollReveal className={styles.intro}>
          <span className={styles.label}>App preview</span>
          <h2 id="screenshots-heading" className={styles.heading}>
            Designed to feel calm, warm, and deeply personal
          </h2>
          <p className={styles.description}>
            An interface that puts the people you love front and center — in light or dark mode,
            never buried beneath notifications and noise.
          </p>
        </ScrollReveal>

        <ScrollReveal className={styles.themeToggleWrap} delay={80}>
          <div className={styles.themeToggle} role="group" aria-label="Preview color mode">
            <button
              type="button"
              className={`${styles.themeButton} ${theme === 'light' ? styles.themeButtonActive : ''}`}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              Light
            </button>
            <button
              type="button"
              className={`${styles.themeButton} ${theme === 'dark' ? styles.themeButtonActive : ''}`}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              Dark
            </button>
          </div>
        </ScrollReveal>

        <ul className={styles.gallery}>
          {screenshots.map((shot, i) => (
            <ScrollReveal key={shot.id} as="li" className={styles.item} delay={i * 100}>
              <div className={styles.phoneWrap}>
                <PixelPhoneMockup
                  label={shot.label}
                  src={theme === 'light' ? shot.light : shot.dark}
                  variant="gallery"
                />
              </div>
              <p className={styles.caption}>{shot.caption}</p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
