import { useRef, type MouseEvent, type ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  showArrow?: boolean
  showSparkle?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  showArrow = false,
  showSparkle = false,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  const handleRipple = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.className = styles.ripple
    ripple.style.left = `${e.clientX - rect.left}px`
    ripple.style.top = `${e.clientY - rect.top}px`
    el.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())
  }

  const classes = `${styles.button} ${styles[variant]} ${showArrow ? styles.withArrow : ''} ${showSparkle ? styles.withSparkle : ''} ${className}`

  const content = (
    <>
      {showSparkle && (
        <svg className={styles.sparkle} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M7 1v2M7 11v2M1 7h2M11 7h2M2.8 2.8l1.4 1.4M9.8 9.8l1.4 1.4M2.8 11.2l1.4-1.4M9.8 4.2l1.4-1.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="7" cy="7" r="1.75" fill="currentColor" />
        </svg>
      )}
      <span className={styles.label}>{children}</span>
      {showArrow && (
        <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={(e) => {
          handleRipple(e)
          onClick?.()
        }}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={(e) => {
        handleRipple(e)
        onClick?.()
      }}
    >
      {content}
    </button>
  )
}
