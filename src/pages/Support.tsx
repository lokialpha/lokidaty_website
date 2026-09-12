import LegalPage from '../components/LegalPage'

export default function Support() {
  return (
    <LegalPage title="Support">
      <section>
        <h2>Get help</h2>
        <p>
          Loki-Daty is available on Android. If you need help with the app, email{' '}
          <a href="mailto:support@aungaung.org">support@aungaung.org</a>.
        </p>
        <p>
          Including screenshots and relevant log or device details can help us
          understand the issue more quickly.
        </p>
      </section>

      <section>
        <h2>Quick troubleshooting</h2>
        <ul>
          <li>
            Confirm notifications are enabled for Loki-Daty in Android system settings.
          </li>
          <li>
            Check that battery optimization or similar system restrictions are not
            delaying or blocking reminders.
          </li>
          <li>Make sure the event date, time, and reminder settings look correct.</li>
          <li>
            If something looks wrong after an update, try force-stopping the app and
            reopening it, or reinstalling if needed. Keep a backup first if you rely on
            exported data.
          </li>
        </ul>
      </section>

      <section>
        <h2>What to include in your email</h2>
        <ul>
          <li>A short description of the problem</li>
          <li>Your Android version and device model, if known</li>
          <li>Steps to reproduce the issue</li>
          <li>Screenshots or log details when useful</li>
        </ul>
      </section>

      <section>
        <h2>Developer</h2>
        <p>
          Loki-Daty is developed by Aung Aung - Ace. Website:{' '}
          <a href="https://lokidaty.aungaung.org">https://lokidaty.aungaung.org</a>
        </p>
      </section>
    </LegalPage>
  )
}
