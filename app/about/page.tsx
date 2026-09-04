import Link from "next/link";

export default function AboutPage() {
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
          About AI Voice Studio
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          AI Voice Studio is an online text-to-speech tool designed to make
          natural voice generation simple, accessible, and easy to use.
        </p>

        <section className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">What we do</h2>
            <p className="mt-3 leading-7 text-gray-600">
              AI Voice Studio allows users to turn written text into natural
              speech, choose from different voices and languages, adjust
              speaking speed, and generate audio directly online.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Our goal</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Our goal is to provide a straightforward voice-generation
              experience for creators, students, educators, developers, and
              anyone who needs spoken audio from written content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Languages and voices</h2>
            <p className="mt-3 leading-7 text-gray-600">
              AI Voice Studio supports multiple languages and a growing
              collection of natural voices. We aim to make voice generation
              useful for different accents, audiences, and types of content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Simple by design</h2>
            <p className="mt-3 leading-7 text-gray-600">
              We believe voice generation should not require complicated
              software or technical knowledge. AI Voice Studio is designed
              around a simple workflow: enter your text, choose your voice,
              adjust the settings, and generate your audio.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
