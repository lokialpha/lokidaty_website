import { Link } from 'react-router-dom'
import Logo from './Logo'
import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Support', href: '/support' },
  { label: 'Terms', href: '/terms' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink} aria-label="Loki-Daty home">
            <Logo variant="dark" size="sm" />
            <span className={styles.logoText}>Loki-Daty</span>
          </Link>
          <p className={styles.tagline}>
            A gentle reminder for birthdays, anniversaries, and the relationships
            that shape your life.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Footer navigation">
          <ul className={styles.linkList}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copyright}>
          &copy; {year} Loki-Daty. Made with care for the moments that matter.
        </p>
      </div>
    </footer>
  )
}
