const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;
let noScale = 1;

const noTexts = [
    "😅 Are you sure?",
    "🤨 Weak already?",
    "😂 Can't survive 24 days?",
    "😏 I knew it...",
    "🤏 This close to giving up?",
    "🤭 Just click Yes already"
];

noBtn.addEventListener("click", () => {

    noScale *= 0.8;
    yesScale *= 1.2;

    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;

    noBtn.textContent =
        noTexts[Math.floor(Math.random() * noTexts.length)];

    if (noScale < 0.4) {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 70 + "%";
        noBtn.style.top = Math.random() * 70 + "%";
    }
});

yesBtn.addEventListener("click", () => {

    document.querySelector(".card").innerHTML = `
        <div style="font-size:100px;">🎉</div>

        <h1 style="margin-top:15px;">
            Challenge Accepted! 🔥
        </h1>

        <p class="subtitle" style="font-size:1.2rem;">
            See you in 24 days 😏<br><br>
            Don't break the streak.
        </p>
    `;
});