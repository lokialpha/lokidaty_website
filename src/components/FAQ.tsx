import ScrollReveal from './ScrollReveal'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Is Loki-Daty free?',
    answer:
      'Yes — Loki-Daty is free to download. We offer a generous free tier for personal use.',
  },
  {
    question: 'Do I need an account?',
    answer:
      'No account required. Your dates are stored locally on your device, keeping your personal moments private.',
  },
  {
    question: 'Which platforms are supported?',
    answer:
      'Loki-Daty is available now on Android. An iOS version is in development and coming soon.',
  },
  {
    question: 'How are reminders delivered?',
    answer:
      'Gentle push notifications arrive days before each event — enough time to plan something thoughtful, never stressful.',
  },
  {
    question: 'Can I sync across devices?',
    answer:
      'Not yet. We\'re focused on a beautiful offline-first experience for now, with sync on our roadmap.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <ScrollReveal className={styles.intro}>
          <span className={styles.label}>FAQ</span>
          <h2 id="faq-heading" className={styles.heading}>
            Common questions
          </h2>
          <p className={styles.description}>
            Everything you need to know before downloading.
          </p>
        </ScrollReveal>
        <ul className={styles.list}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} as="li" delay={i * 80}>
              <details className={styles.item}>
                <summary className={styles.question}>{faq.question}</summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
