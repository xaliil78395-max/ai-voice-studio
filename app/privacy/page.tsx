import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          ← Back to Voice Studio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last updated: September 2026
        </p>

        <div className="mt-10 space-y-8 text-gray-600 leading-7">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              AI Voice Studio respects your privacy. This Privacy Policy
              explains how information may be handled when you use our
              text-to-speech service and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Information You Provide
            </h2>
            <p className="mt-3">
              When you use AI Voice Studio, you may provide text that you want
              to convert into speech. We use the information necessary to
              provide the requested voice-generation service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Generated Audio
            </h2>
            <p className="mt-3">
              Text submitted to the service may be processed to generate
              speech audio. Generated files may be temporarily stored as
              necessary to complete the requested operation and provide the
              resulting audio to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Cookies and Similar Technologies
            </h2>
            <p className="mt-3">
              AI Voice Studio may use cookies or similar technologies for
              essential website functionality, security, analytics, and
              improving the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Third-Party Services
            </h2>
            <p className="mt-3">
              Our website may use third-party services for hosting, analytics,
              security, advertising, or other website functions. These
              services may process information according to their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Advertising
            </h2>
            <p className="mt-3">
              If advertising is enabled on AI Voice Studio, advertising
              providers may use cookies or similar technologies to provide
              relevant advertisements, measure performance, and prevent
              fraudulent activity. Users may be able to control personalized
              advertising through the settings provided by their browser or
              advertising providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Data Security
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect information handled by
              the service. However, no internet service can guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              AI Voice Studio is not intended to knowingly collect personal
              information from children. If you believe that a child has
              provided personal information through the service, please
              contact us so that appropriate action can be taken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect
              changes to the service, applicable requirements, or our privacy
              practices. Any updated version will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Contact
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or how AI Voice
              Studio handles information, please contact us through the
              contact information provided on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
