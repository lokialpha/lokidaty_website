import ScrollReveal from './ScrollReveal'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '1',
    title: 'Add a meaningful date',
    description: 'Name it, set the day, and tell us who it\'s for — it takes just a few seconds.',
  },
  {
    number: '2',
    title: 'Choose what it means',
    description: 'Birthday, anniversary, or something uniquely yours — each type gets the right care.',
  },
  {
    number: '3',
    title: 'Be reminded with warmth',
    description: 'Gentle notifications arrive before the day, so you can show up prepared and present.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="how-heading">
      <div className={styles.container}>
        <ScrollReveal className={styles.intro}>
          <span className={styles.label}>How it works</span>
          <h2 id="how-heading" className={styles.heading}>
            Three calm steps to peace of mind
          </h2>
          <p className={styles.description}>
            No complicated setup. No overwhelming dashboards. Just a simple path
            to never missing what matters.
          </p>
        </ScrollReveal>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} as="li" className={styles.step} delay={index * 120}>
              <div className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
