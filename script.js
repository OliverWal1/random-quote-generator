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
        console.error("Fehler beim Laden:", error);
        quoteText.textContent = "Oops! Konnte kein neues Zitat laden.";
        quoteAuthor.textContent = "Netzwerkfehler";
    }
}

async function fetchAuthorDetails(name) {
    try {
        const wikiResponse = await fetch(`https://de.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);

        if (wikiResponse.ok) {
            const wikiData = await wikiResponse.json();

            // Zusammenfassung setzen
            authorInfo.textContent = wikiData.extract || "Keine weiteren Infos verfügbar.";

            // Bild setzen (Wikipedia-Bild oder Fallback auf UI-Avatars)
            if (wikiData.thumbnail && wikiData.thumbnail.source) {
                authorImg.src = wikiData.thumbnail.source;
            } else {
                authorImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=140&background=random`;
            }
        } else {
            // Fallback, wenn Wikipedia die Person nicht kennt
            authorInfo.textContent = "Berühmte Persönlichkeit.";
            authorImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=140&background=random`;
        }
    } catch (err) {
        authorInfo.textContent = "Informationen konnten nicht geladen werden.";
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
    if (!container) return;

    // Animation zurücksetzen
    container.style.animation = "none";

    // Reflow erzwingen (Trick, um CSS-Animation neu zu triggern)
    void container.offsetWidth;

    // Animation wieder aktivieren (Stelle sicher, dass fadeInSmooth in deinem CSS existiert!)
    container.style.animation = "fadeInSmooth 0.8s ease forwards";
}

// Event Listener
quoteBtn.addEventListener("click", loadRandomQuote);

// Initial beim Laden ausführen
window.addEventListener("DOMContentLoaded", loadRandomQuote);