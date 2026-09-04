import Link from "next/link";

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last updated: September 2026
        </p>

        <div className="mt-10 space-y-8 text-gray-600 leading-7">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using AI Voice Studio, you agree to these Terms
              of Service. If you do not agree with these terms, please do not
              use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Description of the Service
            </h2>
            <p className="mt-3">
              AI Voice Studio provides an online text-to-speech service that
              allows users to convert written text into generated speech,
              select available voices and languages, adjust speaking speed,
              and create audio output.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Acceptable Use
            </h2>
            <p className="mt-3">
              You agree to use AI Voice Studio only for lawful purposes. You
              must not use the service to create, distribute, or facilitate
              content that violates applicable laws, infringes the rights of
              others, or abuses, harms, deceives, or threatens other people.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. User Content
            </h2>
            <p className="mt-3">
              You are responsible for the text and other content you submit
              to AI Voice Studio. You must have the necessary rights and
              permissions to use any content you submit or convert into
              speech.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Generated Audio
            </h2>
            <p className="mt-3">
              Generated audio is provided for use through the service. You are
              responsible for ensuring that your use of generated audio
              complies with applicable laws, third-party rights, and any
              restrictions that may apply to the content you create.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Availability and Changes
            </h2>
            <p className="mt-3">
              We may modify, suspend, or discontinue parts of the service at
              any time. We do not guarantee that AI Voice Studio will always
              be available, uninterrupted, or free from errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Third-Party Services
            </h2>
            <p className="mt-3">
              AI Voice Studio may rely on third-party technologies and
              services to provide certain functionality. Availability and use
              of those services may be subject to additional terms or
              policies established by their respective providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Disclaimer
            </h2>
            <p className="mt-3">
              AI Voice Studio is provided on an as-available basis. We make no
              guarantee that generated speech will always meet a particular
              quality, pronunciation, accent, or intended-use requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the extent permitted by applicable law, AI Voice Studio and
              its operators are not responsible for losses or damages arising
              from the use of the service, generated content, service
              interruptions, or reliance on generated audio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms of Service when necessary. Updated
              terms will be published on this page, and continued use of the
              service after an update constitutes acceptance of the revised
              terms to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Contact
            </h2>
            <p className="mt-3">
              If you have questions about these Terms of Service, please
              contact us through the contact information provided on the
              website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
