import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import navLinks from './navLinks'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logoLink} aria-label="Loki-Daty home">
          <Logo size="nav" />
          <span className={styles.logoText}>Loki-Daty</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Button
            href="/#cta"
            variant="primary"
            className={styles.ctaButton}
            onClick={handleNavClick}
          >
            Download
          </Button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileNavLink} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#cta" className={styles.mobileNavCta} onClick={handleNavClick}>
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

