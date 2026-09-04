import Link from "next/link";

const languages = [
  {
    flag: "🇺🇸",
    name: "English",
    voices: "Multiple male and female voices",
  },
  {
    flag: "🇸🇦",
    name: "Arabic",
    voices: "Multiple regional voices",
  },
  {
    flag: "🇫🇷",
    name: "French",
    voices: "French, Canadian, Belgian, and Swiss voices",
  },
  {
    flag: "🇪🇸",
    name: "Spanish",
    voices: "Multiple regional voices",
  },
  {
    flag: "🇩🇪",
    name: "German",
    voices: "German regional voices",
  },
  {
    flag: "🇮🇹",
    name: "Italian",
    voices: "Male and female voices",
  },
  {
    flag: "🇵🇹",
    name: "Portuguese",
    voices: "Brazilian and European Portuguese",
  },
  {
    flag: "🇨🇳",
    name: "Chinese",
    voices: "Mandarin, Hong Kong, and Taiwanese voices",
  },
  {
    flag: "🇯🇵",
    name: "Japanese",
    voices: "Male and female voices",
  },
  {
    flag: "🇰🇷",
    name: "Korean",
    voices: "Male and female voices",
  },
  {
    flag: "🇮🇳",
    name: "Hindi",
    voices: "Male and female voices",
  },
  {
    flag: "🇵🇰",
    name: "Urdu",
    voices: "Indian and Pakistani voices",
  },
  {
    flag: "🇹🇷",
    name: "Turkish",
    voices: "Male and female voices",
  },
  {
    flag: "🇧🇩",
    name: "Bengali",
    voices: "Bangladesh and Indian voices",
  },
];

export default function LanguagesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          ← Back to Voice Studio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight">
          Supported Languages & Voices
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          AI Voice Studio supports a growing collection of languages,
          regional accents, and natural voices. Choose the language and voice
          that best fits your project.
        </p>

        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          {languages.map((language) => (
            <div
              key={language.name}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">
                  {language.flag}
                </span>

                <div>
                  <h2 className="text-xl font-semibold">
                    {language.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {language.voices}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold">
            More languages and regional voices
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            Voice availability can vary by language and region. AI Voice
            Studio continues to expand its supported voice collection so
            users can create speech for more audiences and types of content.
          </p>
        </section>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Try AI Voice Studio
          </Link>
        </div>
      </div>
    </main>
  );
}
