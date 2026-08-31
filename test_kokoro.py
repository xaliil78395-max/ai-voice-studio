from kokoro import KPipeline
import soundfile as sf
import time

print("Loading Kokoro...")

pipeline = KPipeline(lang_code="a")

text = "Welcome to AI Voice Studio. This is a test of the English voice generation system."

print("Generating audio...")
start = time.time()

generator = pipeline(text, voice="af_heart")

for i, (gs, ps, audio) in enumerate(generator):
    output = f"kokoro-test-{i}.wav"
    sf.write(output, audio, 24000)
    print(f"Created: {output}")

elapsed = time.time() - start
print(f"Generation time: {elapsed:.2f} seconds")
print("KOKORO TEST: OK")
