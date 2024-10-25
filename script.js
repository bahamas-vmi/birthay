// Kreiraj višestruke čestice za svaki vatromet
setInterval(createFireworkExplosion, 500);

function createFireworkExplosion() {
  const numberOfParticles = 20; // Broj čestica po vatrometu
  const explosionCenterX = Math.random() * window.innerWidth;
  const explosionCenterY = Math.random() * window.innerHeight;

  for (let i = 0; i < numberOfParticles; i++) {
    const fireworkParticle = document.createElement("div");
    fireworkParticle.classList.add("firework");

    // Nasumično pozicioniranje čestica u krugu
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 50; // Udaljenost čestica od centra eksplozije

    fireworkParticle.style.left = `${explosionCenterX + Math.cos(angle) * distance}px`;
    fireworkParticle.style.top = `${explosionCenterY + Math.sin(angle) * distance}px`;

    // Nasumična boja za različite čestice
    fireworkParticle.style.backgroundColor = getRandomColor();

    document.body.appendChild(fireworkParticle);

    // Ukloni česticu posle animacije
    setTimeout(() => fireworkParticle.remove(), 1500);
  }
}

function getRandomColor() {
  const colors = ["#FF66B2", "#FF33A6", "#FF99CC", "#FF69B4", "#FFB6C1", "#FF1493"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Funkcija za otvaranje modala
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Funkcija za otvaranje modala
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Funkcije za zatvaranje modala
function closeWineModal() {
    document.getElementById("wineModal").style.display = "none";
}

function closeMapModal() {
    document.getElementById("mapModal").style.display = "none";
}

function closeSurpriseModal() {
    document.getElementById("surpriseModal").style.display = "none";
}

// Zatvori modal kada se klikne van sadržaja
window.onclick = function(event) {
    const modals = ["wineModal", "mapModal", "surpriseModal"];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            document.getElementById(modalId).style.display = "none";
        }
    });
}

// Dodeljivanje dugmadi za otvaranje modala
document.querySelector(".wine-button").onclick = () => openModal("wineModal");
document.querySelector(".map-button").onclick = () => openModal("mapModal");
document.querySelector(".surprise-button").onclick = () => openModal("surpriseModal");