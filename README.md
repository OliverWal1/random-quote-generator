📜 Dynamic Quote & Biography Generator

Ein interaktiver, webbasierter Zitate-Generator, der nicht nur inspirierende Zitate liefert, sondern über eine API-Anbindung vollautomatisch biografische Informationen und Porträtbilder der Autoren aus der Wikipedia-Datenbank nachlädt. Das Design wechselt dynamisch mit jedem Klick das Hintergrundbild und passt seine Position spielerisch an.

Dieses Projekt wurde als Teil meines Portfolios entwickelt, um meine Fähigkeiten im Bereich Asynchrones JavaScript (ES6+), REST-API-Integration und modernes CSS (Glassmorphic Design) zu demonstrieren.
🚀 Features

    Zwei-Stufen-API-Pipeline: Holt ein zufälliges Zitat und fragt anschließend die Wikipedia-API ab, um Echtzeit-Informationen und Bilder des entsprechenden Autors zu laden.

    Intelligentes Fallback-System: Falls Wikipedia keine Daten oder kein Porträt zum Autor findet, generiert die App automatisch einen personalisierten Platzhalter-Avatar via ui-avatars.com.

    Modernes Glassmorphism-UI: Milchglas-Effekt mittels CSS backdrop-filter, gepaart mit flüssigen Animationen und Mikrointeraktionen.

    Dynamisches UX-Layout: Bei jedem Klick wechselt das hochauflösende Hintergrundbild via Lorem Picsum, während sich die Zitate-Box zufällig links oder rechts positioniert, um das Hintergrundbild perfekt in Szene zu setzen.

    Performance & Animation-Tricks: Nutzung des DOM-Reflow-Tricks in JavaScript, um CSS3-Keyframe-Animationen bei jedem Klick zuverlässig neu zu triggern.

🛠️ Tech Stack & Konzepte

    Frontend: HTML5, CSS3 (Flexbox, Keyframe Animations, Glassmorphism CSS)

    JavaScript (Vanilla JS):

        Asynchrones Programmieren mit async/await und Fehlerbehandlung via try/catch.

        Dynamische DOM-Manipulation.

        Verwendung von URL-Encoding für sichere API-Anfragen bei Sonderzeichen in Namen.

    Verwendete APIs:

        DummyJSON Quotes API – Für die Zitate.

        Wikipedia REST API – Für Biografien und Autoren-Bilder.

        Lorem Picsum – Für hochauflösende, zufällige Hintergrundbilder.

        UI Avatars – Als Fallback für Autoren-Grafiken.

📂 Projektstruktur

    index.html – Struktur der Anwendung mit semantischem HTML5.

    style.css – Styling inklusive Glassmorphism, Responsive Design & Animationen.

    script.js – App-Logik, API-Fetching und UI-Zustandsänderungen.

💡 Technische Highlights (Code Insights)
1. Asynchrones API-Chaining

Die App wartet intelligent auf das Ergebnis der Zitate-API, um den Autorennamen zu extrahieren, und füttert damit direkt die Wikipedia-Schnittstelle:
JavaScript

const response = await fetch('https://dummyjson.com/quotes/random');
const data = await response.json();

// Verknüpfung der APIs
await fetchAuthorDetails(data.author);

2. CSS-Animation Reset via DOM-Reflow

Um die Einblende-Animation (fadeInSmooth) bei jedem Klick neu zu starten, nutzt das Skript einen gezielten Reflow-Trigger über die Layout-Engine des Browsers:
JavaScript

container.style.animation = "none";
void container.offsetWidth; // Erzwingt den Reflow
container.style.animation = "fadeInSmooth 0.8s ease forwards";

🔧 Installation & Lokaler Start

Da das Projekt aus reinem Vanilla-Webcode besteht, ist keine komplexe Installation oder ein Build-Schritt notwendig.

    Repository klonen:
    git clone https://github.com/DEIN-BENUTZERNAME/DEIN-REPO-NAME.git

    Die index.html direkt im Browser öffnen oder über eine IDE (z.B. VS Code mit der Extension "Live Server") starten.

📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.
