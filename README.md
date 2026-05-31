# 💡 Random Quote Generator

Ein interaktives Web-Tool, das bei jedem Klick inspirierende Zitate generiert und diese mit dynamischen Informationen über den jeweiligen Autor sowie einem atmosphärischen Hintergrundbild kombiniert.

Dieses Projekt wurde entwickelt, um asynchrone API-Datenverarbeitung, moderne CSS-Layout-Techniken und dynamische DOM-Manipulation zu demonstrieren.

## 🚀 Live-Demo
*(Füge hier später den Link zu deiner gehosteten Seite ein, z.B. GitHub Pages)*

## 🛠️ Eingesetzte Technologien
*   **HTML5:** Semantisches Markup für eine klare Struktur.
*   **CSS3:** Einsatz von modernen Layout-Techniken (Flexbox), "Glassmorphism"-Design und CSS-Keyframe-Animationen für flüssige Übergänge.
*   **JavaScript (ES6+):** Asynchrone Programmierung mittels `async/await` und `fetch API` zur Einbindung externer Datenquellen.

## ⚙️ Features
*   **Dynamische Daten:** Abruf von zufälligen Zitaten über die [DummyJSON API](https://dummyjson.com/).
*   **Erweiterte Kontext-Informationen:** Automatisches Abrufen von Autoren-Biografien und Profilbildern via [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/).
*   **Fallbacks:** Intelligente Fehlerbehandlung mit Platzhalter-Avataren (via [UI Avatars API](https://ui-avatars.com/)), falls keine Wikipedia-Daten gefunden werden.
*   **Visuelle Dynamik:** Bei jedem Klick wird ein neues, zufälliges Full-HD Hintergrundbild von [Lorem Picsum](https://picsum.photos/) geladen.
*   **Responsives Design:** Optimiert für ein ästhetisches Nutzererlebnis auf verschiedenen Bildschirmgrößen mit zufälliger Positionierung des Quote-Cards.

## 🧠 Was ich gelernt habe
*   **API-Integration:** Umgang mit mehreren APIs in einer Kette, um ein vollständiges Nutzererlebnis zu schaffen.
*   **Asynchrones JavaScript:** Effiziente Nutzung von `Promise` und `async/await` zur Vermeidung von Blocking-Calls.
*   **CSS-Animationen:** Techniken, um Animationen durch DOM-Reflow (Forced Reflow) neu zu starten, um einen "Fade-In"-Effekt bei jedem Klick zu ermöglichen.
*   **UI/UX-Design:** Anwendung von modernen Design-Trends wie Glassmorphism, um eine ansprechende und moderne Oberfläche zu erstellen.

## 🚀 Installation & Nutzung
Dieses Projekt benötigt keinen Build-Prozess.

1. Klone das Repository:
   ```bash
   git clone https://github.com/DEIN_USERNAME/random-quote-generator.git
   ```
2. Öffne die `index.html` direkt in deinem Browser.

---
*Entwickelt als Projekt für mein Portfolio.*