from pathlib import Path
import sys
import time
import asyncio
import subprocess
import edge_tts


BASE_DIR = Path(__file__).resolve().parent.parent
OUTPUT_DIR = BASE_DIR / "generated"
OUTPUT_DIR.mkdir(exist_ok=True)


async def generate_with_edge_tts_async(
    text: str,
    voice: str,
    speed: float,
):
    timestamp = int(time.time() * 1000)

    mp3_path = OUTPUT_DIR / f"voice-{timestamp}.mp3"
    wav_path = OUTPUT_DIR / f"voice-{timestamp}.wav"

    rate_percent = int((speed - 1.0) * 100)

    if rate_percent >= 0:
        rate = f"+{rate_percent}%"
    else:
        rate = f"{rate_percent}%"

    print(
        f"Generating with Edge TTS: "
        f"voice={voice}, speed={speed}, rate={rate}",
        flush=True,
    )

    available_voices = await edge_tts.list_voices()

    valid_voice_names = {
        item["ShortName"]
        for item in available_voices
    }

    if voice not in valid_voice_names:
        raise ValueError(
            f"Unsupported Edge TTS voice: {voice}"
        )

    communicate = edge_tts.Communicate(
        text,
        voice,
        rate=rate,
    )

    await communicate.save(
        str(mp3_path)
    )

    print(
        f"Created MP3: {mp3_path}",
        flush=True,
    )

    result = subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(mp3_path),
            "-ar",
            "24000",
            "-ac",
            "1",
            str(wav_path),
        ],
        capture_output=True,
        text=True,
    )

    if result.returncode != 0:
        raise RuntimeError(
            "FFmpeg WAV conversion failed: "
            + (result.stderr or result.stdout)
        )

    print(
        f"Created WAV: {wav_path}",
        flush=True,
    )

    try:
        import wave

        with wave.open(str(wav_path), "rb") as wf:
            frames = wf.getnframes()
            sample_rate = wf.getframerate()

        duration = frames / sample_rate

        print(
            f"Audio duration: {duration:.2f} seconds",
            flush=True,
        )

    except Exception:
        pass

    return wav_path, mp3_path


def generate_with_edge_tts(
    text: str,
    voice: str,
    speed: float,
):
    return asyncio.run(
        generate_with_edge_tts_async(
            text=text,
            voice=voice,
            speed=speed,
        )
    )


def generate_voice(
    text: str,
    speed: float,
    voice: str,
    language: str,
):
    if not text.strip():
        raise ValueError(
            "Text cannot be empty."
        )

    speed = max(
        0.5,
        min(2.0, speed),
    )

    return generate_with_edge_tts(
        text=text,
        voice=voice,
        speed=speed,
    )


if __name__ == "__main__":

    if len(sys.argv) < 5:
        print(
            'Usage: python scripts/generate_voice.py '
            '"TEXT" SPEED VOICE LANGUAGE'
        )
        sys.exit(1)

    text = sys.argv[1]

    try:
        speed = float(sys.argv[2])
    except ValueError:
        speed = 1.0

    voice = sys.argv[3]
    language = sys.argv[4]

    try:

        wav_path, mp3_path = generate_voice(
            text=text,
            speed=speed,
            voice=voice,
            language=language,
        )

        print()
        print(
            "VOICE GENERATION: OK",
            flush=True,
        )

        print(
            f"WAV: {wav_path}",
            flush=True,
        )

        print(
            f"MP3: {mp3_path}",
            flush=True,
        )

    except Exception as error:

        print(
            f"VOICE GENERATION ERROR: {error}",
            file=sys.stderr,
            flush=True,
        )

        sys.exit(1)
