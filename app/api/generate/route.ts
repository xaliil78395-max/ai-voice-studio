import { NextRequest } from "next/server";
import { spawn } from "child_process";
import { existsSync } from "fs";
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
        : "en-US-AvaNeural";

    const language =
      typeof body.language === "string"
        ? body.language
        : "en-US";

    if (!text) {
      return Response.json(
        { error: "Text is required." },
        { status: 400 }
      );
    }

    if (text.length > 5000) {
      return Response.json(
        {
          error:
            "Text is too long. Maximum is 5000 characters.",
        },
        { status: 400 }
      );
    }

    const projectRoot =
      process.platform === "win32" &&
      process.cwd().endsWith(
        path.join(".next", "standalone")
      )
        ? path.resolve(process.cwd(), "..", "..")
        : process.cwd();

    const pythonPath =
      process.platform === "win32"
        ? path.join(
            projectRoot,
            "voice-env",
            "Scripts",
            "python.exe"
          )
        : "/opt/voice-env/bin/python";

    const scriptPath = path.join(
      projectRoot,
      "scripts",
      "generate_voice.py"
    );

    const generatedDir = path.join(
      projectRoot,
      "generated"
    );

    console.log("=== VOICE DEBUG ===");
    console.log("CWD:", process.cwd());
    console.log("PROJECT ROOT:", projectRoot);
    console.log("PYTHON:", pythonPath);
    console.log("PYTHON EXISTS:", existsSync(pythonPath));
    console.log("PYVENV:", path.join(
      projectRoot,
      "voice-env",
      "pyvenv.cfg"
    ));
    console.log("PYVENV EXISTS:", existsSync(
      path.join(
        projectRoot,
        "voice-env",
        "pyvenv.cfg"
      )
    ));
    console.log("SCRIPT:", scriptPath);
    console.log("SCRIPT EXISTS:", existsSync(scriptPath));
    console.log("GENERATED DIR:", generatedDir);
    console.log("===================");

    const generatedBefore = new Set(
      await readdir(generatedDir).catch(() => [])
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
          env: {
            ...process.env,
            PYTHONUNBUFFERED: "1",
          },
        }
      );

      let stdout = "";
      let stderr = "";

      child.stdout.on("data", (data) => {
        const output = data.toString();
        stdout += output;
        console.log(output);
      });

      child.stderr.on("data", (data) => {
        const output = data.toString();
        stderr += output;
        console.error(output);
      });

      child.on("error", (error) => {
        reject(error);
      });

      child.on("close", (code) => {
        if (code === 0) {
          resolve();
          return;
        }

        reject(
          new Error(
            stderr ||
              stdout ||
              `Python exited with code ${code}`
          )
        );
      });
    });

    const generatedFiles = await readdir(generatedDir);

    const newFiles = generatedFiles.filter(
      (file) => !generatedBefore.has(file)
    );

    const wavFile = newFiles.find((file) =>
      file.toLowerCase().endsWith(".wav")
    );

    const mp3File = newFiles.find((file) =>
      file.toLowerCase().endsWith(".mp3")
    );

    if (!wavFile) {
      return Response.json(
        {
          error:
            "Voice generation completed but WAV file was not found.",
        },
        { status: 500 }
      );
    }

    const wavPath = path.join(
      generatedDir,
      wavFile
    );

    const wavBuffer = await readFile(wavPath);

    let mp3Buffer: Buffer | null = null;

    if (mp3File) {
      const mp3Path = path.join(
        generatedDir,
        mp3File
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
      error
    );

    return Response.json(
      {
        error: "Voice generation failed.",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}
