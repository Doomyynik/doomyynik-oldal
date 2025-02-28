document.addEventListener("DOMContentLoaded", function () {
    // Szöveg váltogatás
    const texts = ["Szia,Dominik vagyok!", "Ha nem hallgatsz Krúbit, megtalállak;)", "Kövesssss beee! "];
    let index = 0;
    const textElement = document.getElementById("changing-text");

    function changeText() {
        textElement.style.opacity = 0; // Elhalványít
        setTimeout(() => {
            textElement.textContent = texts[index];
            textElement.style.opacity = 1; // Visszahoz
            index = (index + 1) % texts.length;
        }, 500); // Fél másodperc múlva cserélődik a szöveg
    }

    setInterval(changeText, 3000); // 3 másodpercenként vált
    changeText(); // Azonnal indítsd az első váltást

    // Görgetés animáció
    const musicSection = document.querySelector(".music-section");

    function checkScroll() {
        const sectionPosition = musicSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            musicSection.classList.add("show");
        }
    }

    // Azonnal ellenőrizd a scroll pozíciót, ha az oldal betöltődik
    checkScroll();
    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        // Ha a felhasználó az oldal aljához közeledik
        if (scrollPosition > pageHeight - 100) {
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
});