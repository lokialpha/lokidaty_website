import type { ReactNode } from 'react'
import styles from './LegalPage.module.css'

type LegalPageProps = {
  title: string
  effectiveDate?: string
  children: ReactNode
}

export default function LegalPage({ title, effectiveDate, children }: LegalPageProps) {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {effectiveDate ? (
          <p className={styles.meta}>Effective date: {effectiveDate}</p>
        ) : null}
        <div className={styles.prose}>{children}</div>
      </article>
    </main>
  )
}
