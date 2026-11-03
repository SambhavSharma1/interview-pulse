# InterviewPulse 🚀
### AI-Powered Interactive Mock Interviewer & Career Readiness Coach
**Official Entry for Ostad Presents YUNet AIgnite Buildathon 2026**  
**Category:** Consumer B2C (Career & Education)  
**Author:** Sambhav Sharma (GLA University)  
**Live Application:** [https://sambhavsharma1.github.io/interview-pulse/](https://sambhavsharma1.github.io/interview-pulse/)

---

## 📌 Problem Statement
Over **80% of university students and fresh graduates** experience crippling communication anxiety during technical and viva interviews. While theoretical coding resources (LeetCode, tutorials) are abundant, students lack realistic verbal practice. Private 1-on-1 human coaching costs \$40-\$100/hr, making it unaffordable for most freshers, and generic rejection emails offer zero diagnostic feedback.

## 💡 The Solution: InterviewPulse
**InterviewPulse** is an accessible, web-native AI interview coach that simulates real-world technical, corporate, and viva interviews:

1. **Local-Context Interview Modes:** Specialized tracks covering **Tech Software Fresher**, **Campus Placement (Corporate HR)**, **Bank & Govt Job Viva (BCS/Banking)**, and **Student Visa & Scholarship Interviews (US F1/Chevening)**.
2. **Resume & Job Description Tailoring:** Paste CV highlights and job postings to generate questions targeted specifically at your projects and required skills.
3. **Speech & Pace Analytics:** Real-time calculation of Words Per Minute (WPM) and detection of hesitation markers ("um", "like", "actually").
4. **STAR-Method Scoring:** Automatically analyzes answers for Situation, Task, Action, and measurable Result.
5. **Side-by-Side Model Answers & "Try Again":** Compare your response against a polished fresher model answer and re-answer to improve your score.
6. **5-Axis Competency Radar:** Evaluates Content, Structure, Confidence, Clarity, and Relevance.
7. **Personalized 7-Day Recovery Roadmap:** Daily study plan tailored to identified weaknesses.

---

## 🏆 Buildathon Compliance
- [x] **Solves a Real-World B2C Problem:** Empowers students and job seekers to overcome interview anxiety and land career opportunities.
- [x] **Meaningful Use of AI:** Evaluates responses for technical accuracy, speech cadence, and STAR methodology depth.
- [x] **Mandatory Banner:** Prominently featured at the top of the navbar:  
  `"Built For Ostad Presents YUNet AIgnite Buildathon 2026"`
- [x] **Live Hosted Solution:** Deployed and publicly accessible.

---

## 🚀 How to Run Locally
No complex runtime or build step required:
1. Double-click [`index.html`](./index.html) to open directly in Google Chrome or Microsoft Edge.
2. Or run any local static server (e.g. `python -m http.server 3000`).

---

## 🛠️ Tech Stack
* **Frontend:** Modern HTML5, Tailwind CSS, Lucide Icons, Chart.js.
* **Audio & Voice Engine:** Web Speech API (`SpeechRecognition` & `SpeechSynthesis`).
* **Evaluation Architecture:** Dual-engine system combining Google Gemini API with a client-side deterministic evaluation engine.
