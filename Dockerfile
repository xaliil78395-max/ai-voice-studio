FROM node:22-bookworm

ENV NODE_ENV=production
ENV PYTHONUNBUFFERED=1
ENV PIP_NO_CACHE_DIR=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    python3-venv \
    python3-pip \
    ffmpeg \
    espeak-ng \
    libsndfile1 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN python3 -m venv /opt/voice-env

ENV PATH="/opt/voice-env/bin:$PATH"

RUN pip install --upgrade pip setuptools wheel && \
    pip install kokoro soundfile numpy edge-tts

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build && \
    cp -r public .next/standalone/public && \
    cp -r .next/static .next/standalone/.next/static

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
