import styles from './Logo.module.css'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'nav'
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', size = 'md', variant = 'light' }: LogoProps) {
  const dim = size === 'sm' ? 36 : size === 'nav' ? 46 : 48

  return (
    <span className={`${styles.logo} ${className}`}>
      <span
        className={`${styles.markWrap} ${size === 'sm' ? styles.markWrapSm : ''} ${size === 'nav' ? styles.markWrapNav : ''} ${variant === 'dark' ? styles.markWrapDark : ''}`}
      >
        <img
          src="/logo.png"
          alt=""
          className={styles.mark}
          width={dim}
          height={dim}
          decoding="async"
        />
      </span>
    </span>
  )
}
