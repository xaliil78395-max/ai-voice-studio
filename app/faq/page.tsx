import Link from "next/link";

export default function FAQPage() {
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
          Frequently Asked Questions
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Find answers to common questions about AI Voice Studio, voice
          generation, languages, and generated audio.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">
              What is AI Voice Studio?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              AI Voice Studio is an online text-to-speech tool that converts
              written text into natural-sounding speech. You can choose an
              available voice and language, adjust the speaking speed, and
              generate audio online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Is AI Voice Studio free to use?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              AI Voice Studio currently provides its voice-generation
              functionality online. Availability and usage limits may change
              as the service develops.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Which languages are supported?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              AI Voice Studio supports a growing selection of languages and
              regional voices. Available languages and voices are shown
              directly in the voice selection interface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Can I choose different voices?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Yes. Available voices can be selected according to the supported
              language and voice options provided by the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Can I change the speaking speed?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Yes. The speaking speed can be adjusted before generating the
              audio, allowing you to create speech that better fits your
              intended use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              What can I use generated audio for?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Generated audio can be useful for educational content,
              presentations, narration, accessibility, prototypes, videos,
              and other lawful projects. You are responsible for ensuring
              that your use of the generated audio complies with applicable
              laws and third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Does AI Voice Studio store my text?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Text submitted for voice generation may be processed and
              generated files may be temporarily stored when necessary to
              provide the requested service. See our Privacy Policy for more
              information about data handling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Why does generated speech sometimes sound different from
              expected?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Speech synthesis can vary depending on the language, voice,
              punctuation, spelling, numbers, names, and structure of the
              submitted text. Different voices may also produce different
              pronunciations and speaking styles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              How can I report a problem?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              If you experience a technical problem or have feedback about the
              service, please contact us using the email address provided on
              our Contact page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Where can I learn more?
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              You can learn more about AI Voice Studio on our About page and
              explore the service directly from the main Voice Studio page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
