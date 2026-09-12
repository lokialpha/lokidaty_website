import type { MouseEvent } from 'react'
import { GOOGLE_PLAY_URL } from '../config/links'
import styles from './GooglePlayBadge.module.css'

interface GooglePlayBadgeProps {
  className?: string
  size?: 'default' | 'large'
  eyebrow?: string
  title?: string
}

export default function GooglePlayBadge({
  className = '',
  size = 'default',
  eyebrow = 'GET IT ON',
  title = 'Google Play',
}: GooglePlayBadgeProps) {
  const isPlaceholder = GOOGLE_PLAY_URL === '#'

  return (
    <a
      href={GOOGLE_PLAY_URL}
      className={`${styles.badge} ${size === 'large' ? styles.badgeLarge : ''} ${className}`}
      aria-label={`${eyebrow} ${title}`}
      {...(isPlaceholder ? { 'aria-disabled': true, onClick: (e: MouseEvent) => e.preventDefault() } : {})}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
    >
      <span className={styles.icon} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path
            d="M3.6 1.8c-.3.2-.5.6-.5 1v18.4c0 .4.2.8.5 1l.1.1 10.3-10.3v-.2L3.7 1.7l-.1.1z"
            fill="#4285F4"
          />
          <path
            d="M16.8 12.3 6.5 22.6l.1.1c.3.2.7.2 1.1.1l11.5-6.6-2.4-3.9z"
            fill="#FBBC04"
          />
          <path
            d="M16.8 11.7 6.5 1.4c-.4-.2-.8-.2-1.1 0l10.3 10.3h1.1z"
            fill="#34A853"
          />
          <path
            d="M19.2 10.8 6.5 1.4c-.4-.2-.8-.2-1.1 0l12.7 7.3c.5.3.5 1 0 1.3l-2.4 1.4 3.5-2.1c.5-.3.5-1 0-1.3z"
            fill="#EA4335"
          />
        </svg>
      </span>
      <span className={styles.text}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.storeName}>{title}</span>
      </span>
    </a>
  )
}
