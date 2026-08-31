import { NextRequest } from "next/server";
import { spawn } from "child_process";
import { readFile, readdir, unlink } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const text =
      typeof body.text === "string"
        ? body.text.trim()
        : "";

    const speed =
      typeof body.speed === "number"
        ? body.speed
        : 1.0;

    const voice =
      typeof body.voice === "string"
        ? body.voice
        : "af_heart";

    const language =
      typeof body.language === "string"
        ? body.language
        : "a";

    if (!text) {
      return Response.json(
        { error: "Text is required." },
        { status: 400 },
      );
    }

    if (text.length > 5000) {
      return Response.json(
        {
          error:
            "Text is too long. Maximum is 5000 characters.",
        },
        { status: 400 },
      );
    }

    const projectRoot = process.cwd();

    const pythonPath = path.join(
      projectRoot,
      "voice-env",
      "Scripts",
      "python.exe",
    );

    const scriptPath = path.join(
      projectRoot,
      "scripts",
      "generate_voice.py",
    );

    const generatedDir = path.join(
      projectRoot,
      "generated",
    );

    const generatedBefore = new Set(
      await readdir(generatedDir).catch(() => []),
    );

    await new Promise<void>((resolve, reject) => {
      const child = spawn(
        pythonPath,
        [
          scriptPath,
          text,
          String(speed),
          voice,
          language,
        ],
        {
          cwd: projectRoot,
          windowsHide: true,
        },
      );

      let stdout = "";
      let stderr = "";

      child.stdout.on("data", (data) => {
        stdout += data.toString();
        console.log(data.toString());
      });

      child.stderr.on("data", (data) => {
        stderr += data.toString();
        console.error(data.toString());
      });

      child.on("error", reject);

      child.on("close", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(
            new Error(
              stderr ||
                stdout ||
                `Python exited with code ${code}`,
            ),
          );
        }
      });
    });

    const generatedFiles = await readdir(generatedDir);

    const newFiles = generatedFiles.filter(
      (file) => !generatedBefore.has(file),
    );

    const wavFile = newFiles.find((file) =>
      file.toLowerCase().endsWith(".wav"),
    );

    const mp3File = newFiles.find((file) =>
      file.toLowerCase().endsWith(".mp3"),
    );

    if (!wavFile) {
      return Response.json(
        {
          error:
            "Voice generation completed but WAV file was not found.",
        },
        { status: 500 },
      );
    }

    const wavPath = path.join(
      generatedDir,
      wavFile,
    );

    const wavBuffer = await readFile(wavPath);

    let mp3Buffer: Buffer | null = null;

    if (mp3File) {
      const mp3Path = path.join(
        generatedDir,
        mp3File,
      );

      mp3Buffer = await readFile(mp3Path);

      await unlink(mp3Path).catch(() => {});
    }

    await unlink(wavPath).catch(() => {});

    return Response.json({
      success: true,
      wav: wavBuffer.toString("base64"),
      mp3: mp3Buffer
        ? mp3Buffer.toString("base64")
        : null,
      voice,
      language,
    });
  } catch (error) {
    console.error(
      "Voice generation error:",
      error,
    );

    return Response.json(
      {
        error: "Voice generation failed.",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 },
    );
  }
}
