# 💡 Random Quote Generator

Ein interaktives Web-Tool, das bei jedem Klick inspirierende Zitate generiert und diese mit dynamischen Informationen über den jeweiligen Autor sowie einem atmosphärischen Hintergrundbild kombiniert.

Dieses Projekt wurde entwickelt, um asynchrone API-Datenverarbeitung, moderne CSS-Layout-Techniken und dynamische DOM-Manipulation zu demonstrieren.

## 🚀 Live-Demo
*(Füge hier später den Link zu deiner gehosteten Seite ein, z.B. GitHub Pages)*

## 🛠️ Eingesetzte Technologien
*   **HTML5:** Semantische Strukturierung der Benutzeroberfläche.
*   **CSS3:** Glassmorphism-Design-Prinzipien, Flexbox-Layouting, CSS-Keyframes für Animationen und dynamische Hintergrund-Styling-Manipulation.
*   **JavaScript (ES6+):** Asynchrone Programmierung (`async/await`, `fetch API`), DOM-Manipulation und Event-Handling.

## ⚙️ Features
*   **Multi-API-Integration:** 
    *   [DummyJSON API](https://dummyjson.com/): Abruf zufälliger Zitate.
    *   [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/): Dynamisches Nachladen von Autorenbiografien und Profilbildern.
*   **Intelligentes Fallback-System:** Automatisches Generieren von Avataren via [UI Avatars API](https://ui-avatars.com/), falls keine Wikipedia-Daten verfügbar sind.
*   **Visuelle Dynamik:** Bei jedem Klick wird durch [Lorem Picsum](https://picsum.photos/) ein neues, zufälliges Full-HD Hintergrundbild gesetzt.
*   **UX-Optimierung:** 
    *   Zufällige Platzierung der Inhalts-Card auf dem Bildschirm bei jedem Aufruf.
    *   Gezieltes Triggern von CSS-Animationen ("Forced Reflow"-Technik) für flüssige Übergänge.

## 🧠 Kompetenzen & Erkenntnisse
*   **API-Chaining:** Effektive Kombination mehrerer Datenquellen zur Anreicherung des User-Contents.
*   **Fehlerbehandlung:** Robuste `try-catch`-Strukturen zur Sicherstellung der App-Stabilität bei Netzwerkfehlern.
*   **DOM-Interaktion:** Dynamische Anpassung von CSS-Properties und Animationen mittels JavaScript.
*   **UX/UI-Design:** Umsetzung moderner Design-Patterns wie "Glassmorphism" für eine ansprechende User Experience.

## 🚀 Installation & Nutzung
Dieses Projekt ist ein Client-side-only Web-Projekt und benötigt keinen Build-Prozess.

1. Klone das Repository:
   ```bash
   git clone https://github.com/OliverWal1/random-quote-generator.git
   ```
2. Öffne die Datei `index.html` in einem modernen Webbrowser.

---
*Entwickelt als Projekt für mein Portfolio.*