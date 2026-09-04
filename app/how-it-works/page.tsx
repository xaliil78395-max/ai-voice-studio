import Link from "next/link";

export default function HowItWorksPage() {
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
          How AI Voice Studio Works
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          AI Voice Studio makes it simple to turn written text into natural
          speech. You can enter your text, choose a language and voice,
          adjust the speaking speed, and generate audio online.
        </p>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">1. Enter your text</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Start by entering or pasting the text you want to convert into
              speech. You can use a short sentence, a longer paragraph, a
              script, an educational text, or other written content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">2. Choose a language</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Select the language you want your generated speech to use.
              AI Voice Studio supports a growing collection of languages and
              regional voices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3. Select a voice</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Choose the voice that best fits your content. Different voices
              can provide different speaking styles, accents, and vocal
              characteristics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">4. Adjust speaking speed</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Adjust the speaking speed to match your needs. A slower speed
              can be useful for language learning and educational content,
              while a faster speed may work well for longer scripts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">5. Generate your audio</h2>
            <p className="mt-3 leading-7 text-gray-600">
              When your settings are ready, generate the speech. The service
              processes your text and creates an audio file that you can
              listen to and use for your content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">6. Use your generated voice</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Generated audio can be useful for videos, presentations,
              educational materials, prototypes, accessibility projects,
              personal projects, and other creative work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Built for simplicity</h2>
            <p className="mt-3 leading-7 text-gray-600">
              AI Voice Studio is designed to keep voice generation
              straightforward. You do not need specialized audio software or
              complicated technical knowledge to create speech from text.
            </p>
          </div>
        </section>

        <div className="mt-14 border-t border-gray-200 pt-8">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Start Generating Voices
          </Link>
        </div>
      </div>
    </main>
  );
}
