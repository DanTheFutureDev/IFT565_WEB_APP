const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
const meterBar = document.getElementById("meterBar");
const scoreText = document.getElementById("scoreText");
const roastLine = document.getElementById("roastLine");
const checklist = document.querySelectorAll("#checklist li");

const roastCatalog = [
  { min: 0, text: "Legend says this password can be guessed by a toaster." },
  { min: 15, text: "A raccoon with Wi-Fi could crack that." },
  { min: 30, text: "Not great, but at least your cat might struggle." },
  { min: 45, text: "Mildly concerning for hackers. Mildly." },
  { min: 60, text: "Okay, now we are pretending to be serious." },
  { min: 75, text: "Respect. You might survive at least one data breach." },
  { min: 90, text: "Suspiciously strong. Are you a cybersecurity wizard?" }
];

function evaluatePassword(password) {
  const tests = {
    length: password.length >= 10,
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[^a-zA-Z0-9]/.test(password)
  };

  let score = 0;

  // Score structure keeps behavior easy to tune during iteration.
  score += Math.min(password.length * 4, 40);
  if (tests.lower) score += 12;
  if (tests.upper) score += 14;
  if (tests.number) score += 16;
  if (tests.symbol) score += 18;

  // Penalize obvious low-effort patterns.
  if (/^(.)\1+$/.test(password)) score -= 20;
  if (/password|qwerty|1234|admin|letmein/i.test(password)) score -= 20;
  if (/([a-zA-Z0-9])\1{2,}/.test(password)) score -= 10;

  score = Math.max(0, Math.min(100, score));
  return { score, tests };
}

function pickRoast(score, passwordLength) {
  if (passwordLength === 0) {
    return "Awaiting a questionable password choice...";
  }

  let selected = roastCatalog[0].text;
  roastCatalog.forEach((entry) => {
    if (score >= entry.min) {
      selected = entry.text;
    }
  });
  return selected;
}

function updateChecklist(tests) {
  checklist.forEach((item) => {
    const key = item.getAttribute("data-rule");
    if (tests[key]) {
      item.classList.add("pass");
      item.classList.remove("fail");
    } else {
      item.classList.add("fail");
      item.classList.remove("pass");
    }
  });
}

function updateUI() {
  const password = passwordInput.value;
  const { score, tests } = evaluatePassword(password);

  meterBar.style.width = `${score}%`;
  scoreText.textContent = `Strength Score: ${score} / 100`;
  roastLine.textContent = pickRoast(score, password.length);

  meterBar.classList.remove("weak", "mid", "strong");
  if (score < 35) {
    meterBar.classList.add("weak");
  } else if (score < 70) {
    meterBar.classList.add("mid");
  } else {
    meterBar.classList.add("strong");
  }

  updateChecklist(tests);
}

passwordInput.addEventListener("input", updateUI);
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
});

updateUI();
