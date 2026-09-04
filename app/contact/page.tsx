import Link from "next/link";

export default function ContactPage() {
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
          Contact AI Voice Studio
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Have a question, need help, or want to report an issue? We are happy
          to hear from you.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Get in touch
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            For questions, support requests, feedback, or other inquiries,
            please contact us by email.
          </p>

          <a
            href="mailto:xaliil78395@gmail.com"
            className="mt-6 inline-block text-lg font-medium text-gray-900 underline underline-offset-4"
          >
            xaliil78395@gmail.com
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Feedback and suggestions
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            We welcome feedback about voices, languages, pronunciation,
            usability, and other aspects of AI Voice Studio. Your suggestions
            can help us improve the service.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Support
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            When contacting us about a technical issue, please describe the
            problem clearly and include any relevant details that can help us
            understand and resolve the issue.
          </p>
        </section>
      </div>
    </main>
  );
}
