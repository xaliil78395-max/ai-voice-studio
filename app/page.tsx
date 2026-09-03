"use client";

import { useState } from "react";

const languages = [
  {
    name: "English (US)",
    code: "en-US",
    voices: [
      ["af_bella", "Bella — Female"],
      ["af_heart", "Heart — Female"],
      ["af_jessica", "Jessica — Female"],
      ["af_nicole", "Nicole — Female"],
      ["af_nova", "Nova — Female"],
      ["af_sarah", "Sarah — Female"],
      ["am_adam", "Adam — Male"],
      ["am_michael", "Michael — Male"],
      ["am_onyx", "Onyx — Male"],
      ["en-US-AvaNeural", "Ava — Female"],
      ["en-US-EmmaNeural", "Emma — Female"],
      ["en-US-AriaNeural", "Aria — Female"],
      ["en-US-JennyNeural", "Jenny — Female"],
      ["en-US-MichelleNeural", "Michelle — Female"],
      ["en-US-AndrewNeural", "Andrew — Male"],
      ["en-US-BrianNeural", "Brian — Male"],
      ["en-US-ChristopherNeural", "Christopher — Male"],
      ["en-US-EricNeural", "Eric — Male"],
      ["en-US-GuyNeural", "Guy — Male"],
      ["en-US-RogerNeural", "Roger — Male"],
      ["en-US-SteffanNeural", "Steffan — Male"],
    ],
  },

  {
    name: "English (UK)",
    code: "en-GB",
    voices: [
      ["bf_alice", "Alice — Female"],
      ["bf_emma", "Emma — Female"],
      ["bf_isabella", "Isabella — Female"],
      ["bf_lily", "Lily — Female"],
      ["bm_daniel", "Daniel — Male"],
      ["bm_fable", "Fable — Male"],
      ["bm_george", "George — Male"],
      ["bm_lewis", "Lewis — Male"],
      ["en-GB-LibbyNeural", "Libby — Female"],
      ["en-GB-MaisieNeural", "Maisie — Female"],
      ["en-GB-SoniaNeural", "Sonia — Female"],
      ["en-GB-RyanNeural", "Ryan — Male"],
      ["en-GB-ThomasNeural", "Thomas — Male"],
    ],
  },

  {
    name: "Arabic",
    code: "ar",
    voices: [
      ["ar-SA-HamedNeural", "Hamed — Saudi Arabia — Male"],
      ["ar-SA-ZariyahNeural", "Zariyah — Saudi Arabia — Female"],
      ["ar-EG-ShakirNeural", "Shakir — Egypt — Male"],
      ["ar-EG-SalmaNeural", "Salma — Egypt — Female"],
      ["ar-AE-HamdanNeural", "Hamdan — UAE — Male"],
      ["ar-AE-FatimaNeural", "Fatima — UAE — Female"],
      ["ar-MA-JamalNeural", "Jamal — Morocco — Male"],
      ["ar-MA-MounaNeural", "Mouna — Morocco — Female"],
      ["ar-DZ-IsmaelNeural", "Ismael — Algeria — Male"],
      ["ar-DZ-AminaNeural", "Amina — Algeria — Female"],
      ["ar-TN-HediNeural", "Hedi — Tunisia — Male"],
      ["ar-TN-ReemNeural", "Reem — Tunisia — Female"],
      ["ar-LB-RamiNeural", "Rami — Lebanon — Male"],
      ["ar-LB-LaylaNeural", "Layla — Lebanon — Female"],
      ["ar-JO-TaimNeural", "Taim — Jordan — Male"],
      ["ar-JO-SanaNeural", "Sana — Jordan — Female"],
      ["ar-IQ-BasselNeural", "Bassel — Iraq — Male"],
      ["ar-IQ-RanaNeural", "Rana — Iraq — Female"],
      ["ar-KW-FahedNeural", "Fahed — Kuwait — Male"],
      ["ar-KW-NouraNeural", "Noura — Kuwait — Female"],
      ["ar-QA-MoazNeural", "Moaz — Qatar — Male"],
      ["ar-QA-AmalNeural", "Amal — Qatar — Female"],
      ["ar-OM-AbdullahNeural", "Abdullah — Oman — Male"],
      ["ar-OM-AyshaNeural", "Aysha — Oman — Female"],
      ["ar-BH-AliNeural", "Ali — Bahrain — Male"],
      ["ar-BH-LailaNeural", "Laila — Bahrain — Female"],
      ["ar-SY-LaithNeural", "Laith — Syria — Male"],
      ["ar-SY-AmanyNeural", "Amany — Syria — Female"],
      ["ar-YE-SalehNeural", "Saleh — Yemen — Male"],
      ["ar-YE-MaryamNeural", "Maryam — Yemen — Female"],
      ["ar-LY-OmarNeural", "Omar — Libya — Male"],
      ["ar-LY-ImanNeural", "Iman — Libya — Female"],
    ],
  },

  {
    name: "French",
    code: "fr-FR",
    voices: [
      ["ff_siwis", "Siwis — Female"],
      ["fr-FR-DeniseNeural", "Denise — Female"],
      ["fr-FR-EloiseNeural", "Eloise — Female"],
      ["fr-FR-HenriNeural", "Henri — Male"],
      ["fr-FR-RemyMultilingualNeural", "Remy — Male"],
      ["fr-FR-VivienneMultilingualNeural", "Vivienne — Female"],
      ["fr-BE-CharlineNeural", "Charline — Belgium — Female"],
      ["fr-BE-GerardNeural", "Gerard — Belgium — Male"],
      ["fr-CA-SylvieNeural", "Sylvie — Canada — Female"],
      ["fr-CA-ThierryNeural", "Thierry — Canada — Male"],
      ["fr-CH-ArianeNeural", "Ariane — Switzerland — Female"],
      ["fr-CH-FabriceNeural", "Fabrice — Switzerland — Male"],
    ],
  },

  {
    name: "Spanish",
    code: "es-ES",
    voices: [
      ["ef_dora", "Dora — Female"],
      ["em_alex", "Alex — Male"],
      ["em_santa", "Santa — Male"],
      ["es-ES-XimenaNeural", "Ximena — Spain — Female"],
      ["es-ES-AlvaroNeural", "Alvaro — Spain — Male"],
      ["es-ES-ElviraNeural", "Elvira — Spain — Female"],
      ["es-MX-DaliaNeural", "Dalia — Mexico — Female"],
      ["es-MX-JorgeNeural", "Jorge — Mexico — Male"],
      ["es-US-PalomaNeural", "Paloma — US — Female"],
      ["es-US-AlonsoNeural", "Alonso — US — Male"],
      ["es-AR-ElenaNeural", "Elena — Argentina — Female"],
      ["es-AR-TomasNeural", "Tomas — Argentina — Male"],
      ["es-CO-SalomeNeural", "Salome — Colombia — Female"],
      ["es-CO-GonzaloNeural", "Gonzalo — Colombia — Male"],
      ["es-PE-CamilaNeural", "Camila — Peru — Female"],
      ["es-PE-AlexNeural", "Alex — Peru — Male"],
    ],
  },

  {
    name: "German",
    code: "de-DE",
    voices: [
      ["de-DE-AmalaNeural", "Amala — Female"],
      ["de-DE-KatjaNeural", "Katja — Female"],
      ["de-DE-ConradNeural", "Conrad — Male"],
      ["de-DE-KillianNeural", "Killian — Male"],
      ["de-DE-SeraphinaMultilingualNeural", "Seraphina — Female"],
      ["de-DE-FlorianMultilingualNeural", "Florian — Male"],
      ["de-AT-IngridNeural", "Ingrid — Austria — Female"],
      ["de-AT-JonasNeural", "Jonas — Austria — Male"],
      ["de-CH-LeniNeural", "Leni — Switzerland — Female"],
      ["de-CH-JanNeural", "Jan — Switzerland — Male"],
    ],
  },

  {
    name: "Italian",
    code: "it-IT",
    voices: [
      ["if_sara", "Sara — Female"],
      ["im_nicola", "Nicola — Male"],
      ["it-IT-ElsaNeural", "Elsa — Female"],
      ["it-IT-IsabellaNeural", "Isabella — Female"],
      ["it-IT-DiegoNeural", "Diego — Male"],
      ["it-IT-GiuseppeMultilingualNeural", "Giuseppe — Male"],
    ],
  },

  {
    name: "Hindi",
    code: "hi-IN",
    voices: [
      ["hf_alpha", "Alpha — Female"],
      ["hf_beta", "Beta — Female"],
      ["hm_omega", "Omega — Male"],
      ["hm_psi", "Psi — Male"],
      ["hi-IN-SwaraNeural", "Swara — Female"],
      ["hi-IN-MadhurNeural", "Madhur — Male"],
    ],
  },

  {
    name: "Urdu",
    code: "ur-PK",
    voices: [
      ["ur-PK-UzmaNeural", "Uzma — Pakistan — Female"],
      ["ur-PK-AsadNeural", "Asad — Pakistan — Male"],
      ["ur-IN-GulNeural", "Gul — India — Female"],
      ["ur-IN-SalmanNeural", "Salman — India — Male"],
    ],
  },

  {
    name: "Bengali",
    code: "bn-BD",
    voices: [
      ["bn-BD-NabanitaNeural", "Nabanita — Bangladesh — Female"],
      ["bn-BD-PradeepNeural", "Pradeep — Bangladesh — Male"],
      ["bn-IN-TanishaaNeural", "Tanishaa — India — Female"],
      ["bn-IN-BashkarNeural", "Bashkar — India — Male"],
    ],
  },

  {
    name: "Turkish",
    code: "tr-TR",
    voices: [
      ["tr-TR-EmelNeural", "Emel — Female"],
      ["tr-TR-AhmetNeural", "Ahmet — Male"],
    ],
  },

  {
    name: "Chinese",
    code: "zh-CN",
    voices: [
      ["zf_xiaobei", "Xiaobei — Female"],
      ["zf_xiaoni", "Xiaoni — Female"],
      ["zf_xiaoxiao", "Xiaoxiao — Female"],
      ["zf_xiaoyi", "Xiaoyi — Female"],
      ["zm_yunjian", "Yunjian — Male"],
      ["zm_yunxi", "Yunxi — Male"],
      ["zm_yunxia", "Yunxia — Male"],
      ["zm_yunyang", "Yunyang — Male"],
      ["zh-CN-XiaoxiaoNeural", "Xiaoxiao — Neural — Female"],
      ["zh-CN-XiaoyiNeural", "Xiaoyi — Neural — Female"],
      ["zh-CN-YunjianNeural", "Yunjian — Neural — Male"],
      ["zh-CN-YunxiNeural", "Yunxi — Neural — Male"],
      ["zh-CN-YunxiaNeural", "Yunxia — Neural — Male"],
      ["zh-CN-YunyangNeural", "Yunyang — Neural — Male"],
    ],
  },

  {
    name: "Japanese",
    code: "ja-JP",
    voices: [
      ["jf_alpha", "Alpha — Female"],
      ["jf_gongitsune", "Gongitsune — Female"],
      ["jf_nezumi", "Nezumi — Female"],
      ["jf_tebukuro", "Tebukuro — Female"],
      ["jm_kumo", "Kumo — Male"],
      ["ja-JP-NanamiNeural", "Nanami — Female"],
      ["ja-JP-KeitaNeural", "Keita — Male"],
    ],
  },

  {
    name: "Korean",
    code: "ko-KR",
    voices: [
      ["ko-KR-SunHiNeural", "SunHi — Female"],
      ["ko-KR-InJoonNeural", "InJoon — Male"],
      ["ko-KR-HyunsuMultilingualNeural", "Hyunsu — Male"],
    ],
  },

  {
    name: "Portuguese",
    code: "pt-PT",
    voices: [
      ["pt-BR-FranciscaNeural", "Dora — Female"],
      ["pt-BR-AntonioNeural", "Alex — Male"],
      ["pt-PT-DuarteNeural", "Santa — Male"],
    ],
  },
];




export default function Home() {
  const [text, setText] = useState("");

  const [languageCode, setLanguageCode] = useState("en-US");

  const selectedLanguage =
    languages.find((item) => item.code === languageCode) ||
    languages[0];

  const [voice, setVoice] = useState(
    selectedLanguage.voices[0][0],
  );

  const [speed, setSpeed] = useState(1);

  const [isGenerating, setIsGenerating] = useState(false);

  const [audioUrl, setAudioUrl] = useState("");

  const [wavUrl, setWavUrl] = useState("");

  const [mp3Url, setMp3Url] = useState("");

  const [error, setError] = useState("");

  const maxCharacters = 5000;

  function handleLanguageChange(code: string) {
    const lang =
      languages.find((item) => item.code === code) ||
      languages[0];

    setLanguageCode(code);
    setVoice(lang.voices[0][0]);
    setError("");
  }

  async function handleGenerate() {
    if (!text.trim() || isGenerating) return;

    setIsGenerating(true);
    setError("");

    if (audioUrl) URL.revokeObjectURL(audioUrl);
    if (wavUrl) URL.revokeObjectURL(wavUrl);
    if (mp3Url) URL.revokeObjectURL(mp3Url);

    setAudioUrl("");
    setWavUrl("");
    setMp3Url("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          speed,
          voice,
          language: languageCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.details ||
            data.error ||
            "Voice generation failed.",
        );
      }

      if (!data.wav) {
        throw new Error("No WAV audio was returned.");
      }

      const wavBytes = Uint8Array.from(
        atob(data.wav),
        (char) => char.charCodeAt(0),
      );

      const wavBlob = new Blob(
        [wavBytes],
        { type: "audio/wav" },
      );

      const newWavUrl = URL.createObjectURL(wavBlob);

      setWavUrl(newWavUrl);
      setAudioUrl(newWavUrl);

      if (data.mp3) {
        const mp3Bytes = Uint8Array.from(
          atob(data.mp3),
          (char) => char.charCodeAt(0),
        );

        const mp3Blob = new Blob(
          [mp3Bytes],
          { type: "audio/mpeg" },
        );

        const newMp3Url = URL.createObjectURL(mp3Blob);

        setMp3Url(newMp3Url);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-zinc-950">

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-violet-200">
              AI
            </div>

            <span className="text-lg font-bold tracking-tight">
              Voice Studio
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-500 sm:flex">
            <a href="#" className="hover:text-zinc-950">
              Studio
            </a>
            <a href="#voices" className="hover:text-zinc-950">
              Voices
            </a>
            <a href="#pricing" className="hover:text-zinc-950">
              Pricing
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-14 pt-10">

        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
            AI-powered voice generation
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create natural voices from text
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
            Write your script, choose a language and voice,
            then generate high-quality speech instantly.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_330px]">

          <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-3 flex items-center justify-between">
              <label
                htmlFor="text"
                className="text-sm font-bold"
              >
                Your script
              </label>

              <span
                className={
                  text.length >= maxCharacters
                    ? "text-xs font-semibold text-red-600"
                    : "text-xs text-zinc-400"
                }
              >
                {text.length.toLocaleString()} / 5,000
              </span>
            </div>

            <textarea
              id="text"
              value={text}
              maxLength={maxCharacters}
              onChange={(event) =>
                setText(event.target.value)
              }
              placeholder="Write or paste your script here..."
              className="min-h-[390px] w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-base leading-7 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={handleGenerate}
                disabled={!text.trim() || isGenerating}
                className="h-12 flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:from-violet-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isGenerating
                  ? "Generating voice..."
                  : "Generate Voice"}
              </button>

              <button
                type="button"
                onClick={() => setText("")}
                disabled={!text}
                className="h-12 rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-40"
              >
                Clear
              </button>

            </div>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

          </section>

          <aside className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

            <div className="mb-5">
              <h2 className="text-base font-bold">
                Voice settings
              </h2>

              <p className="mt-1 text-xs text-zinc-400">
                Choose your language and speaker.
              </p>
            </div>

            <div className="space-y-5">

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Language
                </label>

                <select
                  value={languageCode}
                  onChange={(event) =>
                    handleLanguageChange(
                      event.target.value,
                    )
                  }
                  className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-sm font-medium outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                >
                  {languages.map((lang) => (
                    <option
                      key={lang.code}
                      value={lang.code}
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Voice
                </label>

                <select
                  value={voice}
                  onChange={(event) =>
                    setVoice(event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-sm font-medium outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                >
                  {selectedLanguage.voices.map(
                    ([id, name]) => (
                      <option
                        key={id}
                        value={id}
                      >
                        {name}
                      </option>
                    ),
                  )}
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                    Speed
                  </label>

                  <span className="rounded-lg bg-violet-50 px-2 py-1 text-xs font-bold text-violet-700">
                    {speed.toFixed(1)}x
                  </span>
                </div>

                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={speed}
                  onChange={(event) =>
                    setSpeed(
                      Number(event.target.value),
                    )
                  }
                  className="w-full accent-violet-600"
                />

                <div className="mt-1 flex justify-between text-[10px] text-zinc-400">
                  <span>Slow</span>
                  <span>Normal</span>
                  <span>Fast</span>
                </div>
              </div>

            </div>

          </aside>

        </div>

        <section className="mt-5 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold">
                Generated audio
              </h2>

              <p className="mt-1 text-xs text-zinc-400">
                Listen to your result and download it.
              </p>
            </div>

            {audioUrl && (
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Ready
              </div>
            )}
          </div>

          {audioUrl ? (
            <>
              <audio
                key={audioUrl}
                controls
                autoPlay
                preload="auto"
                src={audioUrl}
                className="w-full"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                {mp3Url && (
                  <a
                    href={mp3Url}
                    download="ai-voice-studio.mp3"
                    className="flex h-11 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white transition hover:bg-zinc-800"
                  >
                    Download MP3
                  </a>
                )}

                <a
                  href={wavUrl}
                  download="ai-voice-studio.wav"
                  className="flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-bold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Download WAV
                </a>

              </div>
            </>
          ) : (
            <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 text-sm text-zinc-400">
              Your generated audio will appear here.
            </div>
          )}

        </section>

      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-7 text-center text-xs text-zinc-400">
          © 2026 AI Voice Studio
        </div>
      </footer>

    </main>
  );
}



