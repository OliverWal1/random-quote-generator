const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const authorInfo = document.getElementById("author-info");
const authorImg = document.getElementById("author-img");
const quoteBtn = document.getElementById("quote-btn");
const container = document.querySelector(".container");

async function loadRandomQuote() {
    try {
        // 1. Zitat von DummyJSON holen
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) throw new Error("Failed to fetch quote");

        const data = await response.json();

        // Texte setzen
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = data.author;

        // 2. Wikipedia-Daten (Bild & Info) basierend auf dem Autor holen
        await fetchAuthorDetails(data.author);

        // 3. Zufälliges Hintergrundbild (Full HD)
        document.body.style.backgroundImage = `url(https://picsum.photos/1920/1080?random=${data.id})`;

        // 4. Layout & Animation aktualisieren
        setRandomContainerPosition();
        restartFadeAnimation();

    } catch (error) {
        console.error("Error loading application data:", error);
        quoteText.textContent = "Oops! Something went wrong while loading the quote.";
        quoteAuthor.textContent = "Error";
        authorInfo.textContent = "Could not retrieve biography.";
        authorImg.src = "https://ui-avatars.com/api/?name=Error&size=140&background=222&color=fff";
    }
}

async function fetchAuthorDetails(name) {
    try {
        // Wikipedia-API aufrufen auf EN-Wikipedia, weil cooler
        const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`)

        if (wikiResponse.ok) {
            const wikiData = await wikiResponse.json();

            // Zusammenfassung setzen
            authorInfo.textContent = wikiData.extract || "No further information available.";

            // Bild setzen (Wikipedia-Bild oder Fallback auf UI-Avatars)
            if (wikiData.thumbnail && wikiData.thumbnail.source) {
                authorImg.src = wikiData.thumbnail.source;
            } else {
                authorImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=140&background=random`;
            }
        } else {
            // Fallback, wenn Wikipedia die Person nicht kennt
            authorInfo.textContent = "Famous personality.";
            authorImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=140&background=random`;
        }
    } catch (err) {
        console.error("Error fetching author details:", err);
        authorInfo.textContent = "Biography temporarily unavailable.";
        authorImg.src = "https://ui-avatars.com/api/?name=Error&size=140&background=222&color=fff"
    }
}

function setRandomContainerPosition() {
    if (!container) return;

    // Zufällig links oder rechts positionieren
    const side = Math.random() < 0.5 ? "left" : "right";

    // Erst alles zurücksetzen
    container.style.left = "auto";
    container.style.right = "auto";

    if (side === "left") {
        container.style.left = "40px";
    } else {
        container.style.right = "40px";
    }
}

function restartFadeAnimation() {
    // Verhindert Layout-Crashes auf dem Smartphone (Verschiebung nur ab Desktop)
    if (window.innerWidth < 768) {
        document.body.style.justifyContent = "center";
        return;
    }

    // Nutzt das Flexbox-System des Bodys statt unsauberes absolute Positioning
    const positions = ["flex-start", "center", "flex-end"];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    document.body.style.justifyContent = randomPosition;
}

// Event Listener
quoteBtn.addEventListener("click", loadRandomQuote);

// Initial beim Laden ausführen
window.addEventListener("DOMContentLoaded", loadRandomQuote);