const READINGS = [
  {
    sign: "The Aurora of Momentum",
    title: "Action will open the door",
    text: "Your next steps are not meant to be perfect. The cosmos favors courage, timing, and a willingness to move before certainty arrives."
  },
  {
    sign: "Moonlit Alignment",
    title: "Trust the quiet signal",
    text: "The answer is already present, but it speaks softly. Pause, listen, and follow the thread that brings calm instead of noise."
  },
  {
    sign: "The Crown of Renewal",
    title: "A new chapter is forming",
    text: "Release what has already finished its work. This cycle is ending so that a more luminous path can emerge with clarity."
  },
  {
    sign: "Solar Flame",
    title: "Confidence will sharpen your direction",
    text: "You do not need every answer before stepping forward. The next move becomes clear when your intention is sincere and steady."
  },
  {
    sign: "The Horizon Watcher",
    title: "Patience is part of the magic",
    text: "Some truths arrive only after the dust settles. Continue with integrity, and the right opportunity will reveal itself in its own season."
  }
];

const signEl = document.getElementById("sign");
const titleEl = document.getElementById("title");
const bodyEl = document.getElementById("body");
const questionEl = document.getElementById("question");
const consultBtn = document.getElementById("consult");

function firstWords(question) {
  const words = question.trim().split(/\s+/).slice(0, 3).join(" ");
  return words || "your question";
}

function askCosmos() {
  const question = questionEl.value.trim();
  if (!question) {
    signEl.textContent = "The Veil of Possibility";
    titleEl.textContent = "Ask a question before the stars answer.";
    bodyEl.textContent = "The stars are listening. Ask the cosmos a question and the oracle will reveal the next guiding thread.";
    questionEl.focus();
    return;
  }

  const reading = READINGS[Math.floor(Math.random() * READINGS.length)];
  const snippet = firstWords(question);
  signEl.textContent = reading.sign;
  titleEl.textContent = `${reading.title} for ${snippet}`;
  bodyEl.textContent = `${reading.text} Your question, "${question}", is being carried by a current of possibility and personal growth.`;
}

consultBtn.addEventListener("click", askCosmos);
questionEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
    askCosmos();
  }
});
consultBtn.addEventListener("click", askCosmos);
questionEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        askCosmos();
    }
});

function speakCurrentOmen() {
    if (!('speechSynthesis' in window)) {
        console.warn("Speech synthesis is not supported in this browser.");
        return;
    }

    const omenParagraph = document.querySelector('section[aria-live="polite"] p:last-of-type') || 
                           document.querySelector('.oracle-omen-body');

    if (!omenParagraph) return;

    let rawText = omenParagraph.innerText;
    let cleanOmenText = rawText.replace(/Your question,.*?, is being carried by.*?\./gs, "").trim();

    if (!cleanOmenText) {
        cleanOmenText = rawText;
    }

    const utterance = new SpeechSynthesisUtterance(cleanOmenText);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))) || voices[0];
    
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}
