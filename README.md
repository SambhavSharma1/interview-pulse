# InterviewPulse 🚀
### AI-Powered Interactive Mock Interviewer & Career Readiness Coach
**Official Entry for Ostad Presents YUNet AIgnite Buildathon 2026**  
**Category:** Consumer B2C (Career & Education)  
**Author:** Sambhav Sharma (GLA University)

---

## 📌 Problem Statement
Over **80% of Computer Science students and fresh graduates** experience crippling interview anxiety. While theoretical coding resources (LeetCode, tutorials) are abundant, students lack realistic, verbal interview practice. Private 1-on-1 human coaching costs \$50-\$100/hr, making it unaffordable for most freshers.

## 💡 The Solution: InterviewPulse
**InterviewPulse** is an accessible, web-native AI interview coach that simulates real-world technical and HR interview rounds:
1. **Dynamic Questioning:** Multi-turn questions tailored to target roles (Python, React/Frontend, AI/ML, Full-Stack, SQL, HR/Behavioral) or custom job descriptions.
2. **Integrated Voice & Speech:** Native speech recognition (Speech-to-Text) allows users to practice speaking answers aloud, reducing communication anxiety.
3. **AI Voice Synthesis:** The AI interviewer actually speaks the question aloud using browser-native TTS.
4. **Instant Diagnostic Dashboard:** Calculates readiness scores (0-100), flags critical gaps, provides model senior engineer answers, and outputs a personalized 5-day study plan.
5. **Fail-Safe Dual AI Architecture:** Powered by Google Gemini Flash API with an intelligent local heuristic evaluator fallback, guaranteeing 100% reliability during judging.

---

## 🏆 Buildathon Compliance Checklist
- [x] **Solves a Real-World B2C Problem:** Helps students and freshers master job interviews and land career opportunities.
- [x] **Meaningful Use of AI:** Evaluates responses for technical accuracy, communication clarity, and problem-solving depth.
- [x] **Mandatory Sticker/Banner:** Prominently featured at the top of the navbar:  
  `"Built For Ostad Presents YUNet AIgnite Buildathon 2026"`
- [x] **5-Slide Presentation Deck:** Prepared in [`presentation_deck.md`](./presentation_deck.md).
- [x] **Demo Video Script:** Included in [`presentation_deck.md`](./presentation_deck.md).

---

## 🚀 How to Run Locally

You don't need any complex installation or Node.js environment:
1. Simply double-click [`index.html`](./index.html) to open it directly in Google Chrome or Microsoft Edge.
2. Or use any local static server (e.g., Python `py -m http.server 3000` or VS Code Live Server).

---

## 🌐 How to Deploy in 2 Minutes (Free)

### Option A: GitHub Pages (Recommended - 100% Free)
1. Create a new public repository on GitHub (e.g. `interview-pulse`).
2. Upload `index.html`, `app.js`, and `README.md`.
3. In GitHub repo settings, go to **Pages** > Select `Branch: main` and `/root` > Click **Save**.
4. In 60 seconds, your live URL will be active at: `https://<your-username>.github.io/interview-pulse/`.

### Option B: Vercel (1-Click)
1. Go to [vercel.com](https://vercel.com).
2. Click **Add New Project** and connect your GitHub repository.
3. Click **Deploy** (zero build configuration needed).

---

## 🛠️ Tech Stack
* **Frontend:** Modern HTML5, Tailwind CSS, Lucide Icons, Canvas Confetti.
* **Audio & Voice:** Web Speech API (`SpeechRecognition` & `SpeechSynthesis`).
* **AI Evaluation Engine:** Google Gemini API (Flash 1.5/2.0) with local client-side heuristic fallback.
