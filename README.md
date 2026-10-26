# Twitch Stream Layout - Neon Blue Style

Komplettes Stream-Overlay-Paket im dunkelblauen Design mit neon-grünen Akzenten, inspiriert von modernen Gaming-Streams.

## Features

- BRB-Screen (Be Right Back)
- Starting-Soon-Screen mit Countdown
- Live-Overlay mit Webcam-Rahmen, Chat, Stats und Social-Bar
- Einheitliche Neon-Blue-Farbwelt
- Einfach anpassbar über zentrale CSS-Variablen
- OBS/Streamlabs-freundlich (Browser Source)

## Projektstruktur

```text
.
├── README.md
├── assets
│   ├── css
│   │   └── theme.css
│   └── js
│       └── countdown.js
└── scenes
    ├── brb.html
    ├── overlay.html
    └── starting-soon.html
```

## Farbpalette

- Haupt-Hintergrund: `#1a3a5c`
- Akzentfarbe: `#7fff00`
- Text Haupt: `#ffffff`
- Text Sekundär: `#7fff00`

## Verwendung in OBS / Streamlabs

### 1) Dateien lokal bereitstellen
- Repo klonen oder ZIP laden.
- Pfade der HTML-Dateien merken:
  - `scenes/starting-soon.html`
  - `scenes/brb.html`
  - `scenes/overlay.html`

### 2) Szenen anlegen
- In OBS je Szene eine Browser-Quelle hinzufügen.
- Quelle auf lokale Datei setzen ("Lokale Datei").
- Auflösung pro Quelle: `1920x1080`.

### 3) Countdown konfigurieren
Für `starting-soon.html` kannst du URL-Parameter nutzen:
- `minutes` (Anzahl Minuten)
- `label` (Text unter dem Titel)

Beispiel:

```text
file:///.../scenes/starting-soon.html?minutes=10&label=Stream%20starts%20soon
```

### 4) Overlay personalisieren
In `assets/css/theme.css` unter `:root` ändern:
- Farben (`--bg-main`, `--accent`, ...)
- Transparenzen (`--panel-opacity`)
- Rahmenstärken (`--border-thickness`)
- Schriftgrößen

## Chat & Alerts Integration

### Chat (z. B. StreamElements / Streamlabs)
- Füge in OBS eine zusätzliche Browser-Quelle als Chat-Widget hinzu.
- Positioniere sie in der vorgesehenen Chat-Zone (links im Overlay).

### Alerts
- Füge Alerts als eigene Browser-Quelle über dem Overlay hinzu.
- Nutze denselben Neon-Akzent im Alert-Tool für ein einheitliches Design.

## Empfohlene Stream-Einstellungen

- Auflösung: 1920x1080
- FPS: 60
- Bitrate: 6000 Kbps
- Keyframe-Intervall: 2 Sekunden

## Hinweise

- Diese Version liefert funktionsfähige HTML/CSS/JS-Layouts als Basis.
- Bilder/Animationen (`png`, `webm`) können später in `assets/` ergänzt und in den Szenen eingebunden werden.

Viel Spaß beim Streamen! 🚀
