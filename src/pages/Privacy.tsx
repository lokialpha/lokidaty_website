import LegalPage from '../components/LegalPage'

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="August 10, 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          Loki-Daty is developed by Aung Aung - Ace. This Privacy Policy explains how
          Loki-Daty handles information when you use the Android app and related
          website at{' '}
          <a href="https://lokidaty.aungaung.org">https://lokidaty.aungaung.org</a>.
        </p>
        <p>
          Contact:{' '}
          <a href="mailto:support@aungaung.org">support@aungaung.org</a>
        </p>
      </section>

      <section>
        <h2>Local-first by design</h2>
        <p>
          Loki-Daty is a local-first reminder app. No account is required. There is no
          cloud sync. Event names, dates, notes, reminders, profile images, and backups
          are stored and handled locally on your device.
        </p>
      </section>

      <section>
        <h2>Information we do not collect</h2>
        <p>Loki-Daty does not include ads, analytics, or tracking. We do not sell personal data.</p>
        <p>
          Your app data is not transmitted to Aung Aung - Ace unless you voluntarily
          email support and choose to include information in that message.
        </p>
      </section>

      <section>
        <h2>Data stored on your device</h2>
        <p>Depending on how you use the app, Loki-Daty may store locally:</p>
        <ul>
          <li>Event names, dates, and notes</li>
          <li>Reminder settings</li>
          <li>Profile images you select</li>
          <li>Backup or export files you create</li>
        </ul>
        <p>
          Profile images and other files are user-selected. Backup and export files are
          under your control; you decide when to create, share, move, or delete them.
        </p>
      </section>

      <section>
        <h2>Permissions</h2>
        <p>
          Notification permission is used only to deliver local reminders on your
          device. Loki-Daty does not intentionally request camera, contacts, location,
          microphone, SMS, or broad modern media permissions.
        </p>
        <p>
          The app may rely on platform or Expo libraries required for normal app
          operation. Those libraries support core device features such as local storage
          and notifications; they are not used to advertise to you, track you, or sell
          your data.
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>
          Loki-Daty is not directed at children under 13. Because the app stores data
          locally and does not collect personal information from users through the app,
          we do not knowingly collect personal information from children.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          revise the effective date above and post the updated policy at this URL. We
          encourage you to review this page periodically.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy or Loki-Daty, email{' '}
          <a href="mailto:support@aungaung.org">support@aungaung.org</a>.
        </p>
      </section>
    </LegalPage>
  )
}
