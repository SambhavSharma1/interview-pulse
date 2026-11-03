/**
 * InterviewPulse - AI Career & Mock Interview Engine
 * Built for Ostad Presents YUNet AIgnite Buildathon 2026
 * Author: Sambhav Sharma
 */

// ==========================================
// ROLE & LOCAL-CONTEXT KNOWLEDGE BASE
// ==========================================
const ROLE_DATA = {
  "Tech Software Fresher": {
    interviewerName: "Alex (Engineering Lead)",
    interviewerDesc: "Tech Panel • System Architecture & Code",
    questions: [
      {
        q: "Can you explain the key difference between lists and tuples in Python, and in what practical scenario would you strictly prefer a tuple over a list?",
        hint: "Think about mutability, memory allocation overhead, and dictionary hashable keys.",
        criteria: ["mutable", "immutable", "memory", "hashable", "dict key", "tuple", "list"],
        idealAnswer: "Lists are mutable sequences suitable for collections that change, whereas tuples are immutable. Tuples consume less memory, offer faster iteration, and because they are hashable, they can be safely used as dictionary keys or in sets, preventing accidental data mutation.",
        starTip: "Explain Situation (handling immutable configuration), Action (using tuple), and Result (zero accidental state mutation)."
      },
      {
        q: "In a production web application (like with FastAPI or Django), how would you optimize an endpoint that is running slow SQL database queries?",
        hint: "Think about indexing, N+1 query problems, caching (Redis), and connection pooling.",
        criteria: ["index", "n+1", "cache", "redis", "query", "explain analyze", "orm"],
        idealAnswer: "First, use SQL `EXPLAIN ANALYZE` or query profilers to check execution plans. Then add database indexes on frequently filtered columns, fix N+1 ORM queries using eager loading (like `select_related`), implement Redis caching, and use connection pooling.",
        starTip: "Mention the Situation (high query latency), Task (reduce response time), Action (added index & eager loading), and Result (cut latency from 450ms to 60ms)."
      },
      {
        q: "Tell me about a time you encountered a tricky bug or race condition in a project, and the exact steps you took to diagnose and resolve it.",
        hint: "Use the STAR method: Situation, Task, Action, Result with tools like debuggers, logs, or unit tests.",
        criteria: ["debug", "log", "reproduce", "test", "root cause", "resolved", "fix"],
        idealAnswer: "In a multi-threaded web scraper project, shared state caused intermittent NoneType errors. I added structured logging to capture state transitions, reproduced the issue locally, implemented thread locking with `threading.Lock`, and wrote automated pytest tests to ensure stability.",
        starTip: "Structure with: S (the bug), T (need for reliability), A (debugging with logs/locks), R (100% test pass rate)."
      }
    ],
    roadmap: [
      { day: "Day 1", topic: "Memory & Data Structures", desc: "List vs tuple internals, generator expressions, and hashing." },
      { day: "Day 2", topic: "Closures & Decorators", desc: "Build custom timing decorators and context managers." },
      { day: "Day 3", topic: "Concurrency & Async", desc: "Master asyncio event loops, threading GIL, and worker queues." },
      { day: "Day 4", topic: "Database Indexing", desc: "Practice SQL EXPLAIN queries and fix ORM N+1 bottlenecks." },
      { day: "Day 5", topic: "REST API Design", desc: "Build idempotent endpoints with rate-limiting and JWT auth." },
      { day: "Day 6", topic: "System Design Basics", desc: "Design a URL shortener or caching layer under 30 minutes." },
      { day: "Day 7", topic: "STAR Story Polish", desc: "Practice explaining your top 2 portfolio projects with quantified metrics." }
    ]
  },

  "Campus Placement Corporate HR": {
    interviewerName: "Priya (Senior HR Manager)",
    interviewerDesc: "Campus Hiring Panel • Culture & Soft Skills",
    questions: [
      {
        q: "Tell me about yourself in 90 seconds. Walk me through your academic journey, your key projects, and why our company fits your career goals.",
        hint: "Use Present -> Past -> Future structure: Current skills, past project triumphs, future aspirations.",
        criteria: ["journey", "project", "passion", "skills", "goals", "culture", "contribute"],
        idealAnswer: "I am a Computer Science student passionate about full-stack systems and AI. Recently, I built real-world projects involving agentic AI workflows and database optimization. I thrive in collaborative teams and want to bring my rapid learning ability and proactive ownership to your engineering group.",
        starTip: "Focus on your unique passion, highlight 1 major technical milestone, and tie it to the company's mission."
      },
      {
        q: "Describe a situation where a group project had a looming deadline and team members disagreed on technical direction. How did you handle the conflict?",
        hint: "Focus on empathy, objective criteria (benchmarks/data), and driving consensus.",
        criteria: ["disagree", "listen", "compromise", "data", "outcome", "deadline", "team"],
        idealAnswer: "During a hackathon, our team was divided between using SQL or NoSQL. To resolve it objectively, I scheduled a 15-minute sync where we listed our data access patterns. Seeing that our transaction data required strict ACID compliance, we chose PostgreSQL. We finished on time and placed in the top 3.",
        starTip: "State the conflict (S/T), your mediation step with data (A), and the successful project completion (R)."
      },
      {
        q: "Where do you see yourself in 3 years, and what specific technical and leadership qualities do you plan to develop?",
        hint: "Balance individual technical depth with mentorship and business impact.",
        criteria: ["growth", "senior", "ownership", "mentor", "impact", "learning"],
        idealAnswer: "In 3 years, I aspire to be a reliable core contributor with deep backend and cloud expertise. I want to own end-to-end features from architecture to deployment, maintain high code standards, and mentor incoming freshers just as seniors mentored me.",
        starTip: "Highlight technical mastery, team contribution, and eagerness to handle bigger architectural scope."
      }
    ],
    roadmap: [
      { day: "Day 1", topic: "The 90-Second Hook", desc: "Refine your elevator pitch into a crisp Present-Past-Future narrative." },
      { day: "Day 2", topic: "Overcoming Failures", desc: "Prepare a genuine story where you failed, took ownership, and learned." },
      { day: "Day 3", topic: "Conflict Resolution", desc: "Structure an answer demonstrating empathy and data-driven compromises." },
      { day: "Day 4", topic: "Company Research", desc: "Analyze the hiring company's products, tech stack, and core values." },
      { day: "Day 5", topic: "Reverse Interviewing", desc: "Formulate 5 insightful questions to ask the interview panel." },
      { day: "Day 6", topic: "Body Language & Voice", desc: "Eliminate filler words and practice calm, conversational pacing." },
      { day: "Day 7", topic: "Full Mock Session", desc: "Run a complete simulated HR round with randomized questions." }
    ]
  },

  "Bank and Government Job Viva": {
    interviewerName: "Chairman (Viva Board Panel)",
    interviewerDesc: "Public Service & Banking Selection Board",
    questions: [
      {
        q: "Why do you want to join the banking sector or civil service when you have an engineering degree? How will your technical background add value to this institution?",
        hint: "Don't say 'job security'. Emphasize digitization, data-driven fraud detection, process automation, and public impact.",
        criteria: ["digitization", "automation", "integrity", "data", "public service", "efficiency", "financial"],
        idealAnswer: "Modern banking and public administration rely heavily on digital transformation, cybersecurity, and data analytics. My engineering training taught me analytical problem-solving and systems thinking, which enables me to optimize operational workflows, mitigate digital transaction fraud, and serve citizens with efficiency and integrity.",
        starTip: "Highlight how technical problem solving directly benefits institutional efficiency and transparency."
      },
      {
        q: "Explain the difference between Monetary Policy and Fiscal Policy. What tools does the Central Bank use to control inflation?",
        hint: "Monetary policy is controlled by the Central Bank (interest rates, CRR, SLR); Fiscal policy is controlled by the Ministry of Finance (taxes, government spending).",
        criteria: ["monetary", "fiscal", "central bank", "interest rate", "inflation", "taxes", "crr", "spending"],
        idealAnswer: "Monetary policy is managed by the Central Bank to regulate money supply and inflation using instruments like policy interest rates, repo rates, and cash reserve ratios (CRR). Fiscal policy is managed by the government via taxation, national budgets, and public expenditure to stimulate economic growth.",
        starTip: "Define both clearly, contrast the governing bodies, and cite interest rate adjustments as the prime inflation tool."
      },
      {
        q: "If an influential superior or public figure pressures you to approve an irregular loan or non-compliant tender, how will you respond while protecting your professional integrity?",
        hint: "Emphasize rule of law, institutional compliance, written documentation, and transparent escalation.",
        criteria: ["rules", "compliance", "integrity", "written", "escalate", "documentation", "audit"],
        idealAnswer: "I would respectfully adhere strictly to institutional compliance guidelines. I would politely explain the regulatory requirements, document all findings in writing according to standard audit procedures, and if pressure persists, escalate the matter through official oversight channels to protect the institution.",
        starTip: "Demonstrate unwavering adherence to regulatory procedures without being confrontational."
      }
    ],
    roadmap: [
      { day: "Day 1", topic: "Macroeconomics 101", desc: "Master GDP, inflation, monetary vs fiscal policy, and exchange rates." },
      { day: "Day 2", topic: "Financial Regulations", desc: "Learn CAMELS rating, Basel III norms, and AML/KYC requirements." },
      { day: "Day 3", topic: "Career Switch Justification", desc: "Craft an articulate, high-integrity reason for choosing public/banking sector." },
      { day: "Day 4", topic: "Ethical Dilemmas", desc: "Practice handling pressure scenarios with institutional compliance." },
      { day: "Day 5", topic: "National Current Affairs", desc: "Review key development projects, budget allocations, and trade balances." },
      { day: "Day 6", topic: "Viva Board Decorum", desc: "Practice formal greeting, poised posture, and respectful disagreement etiquette." },
      { day: "Day 7", topic: "Full Viva Simulation", desc: "Complete a timed stress round with unexpected conceptual questions." }
    ]
  },

  "Student Visa and Scholarship Interview": {
    interviewerName: "Consular Visa Officer (Embassy)",
    interviewerDesc: "International Student Visa & Scholarship Panel",
    questions: [
      {
        q: "Why did you choose this specific university and degree program instead of continuing your studies or working in your home country?",
        hint: "Cite specific curriculum modules, faculty research labs, specialized courses not offered locally, and clear academic progression.",
        criteria: ["curriculum", "professors", "specialization", "research", "course", "unique", "progression"],
        idealAnswer: "My target university offers specialized advanced coursework in Agentic AI and Autonomous Robotics that is not available locally. Specifically, Professor Smith's lab conducts cutting-edge research on embedded PID systems, which directly aligns with my goal of building high-efficiency automation systems.",
        starTip: "Give at least 2 concrete details: a specific professor, lab, or course module unique to that institution."
      },
      {
        q: "Who is sponsoring your education and living expenses, and can you explain the source of funds in your financial documentation?",
        hint: "Be clear, concise, and definitive: state parents' professions, annual income, liquid savings, and education loans without hesitation.",
        criteria: ["sponsor", "funds", "savings", "income", "loan", "parents", "afford"],
        idealAnswer: "My education is fully sponsored by my parents along with an approved student education loan. My father is a senior civil engineer earning \$35,000 annually, and we have \$45,000 in dedicated liquid bank deposits which comfortably covers my full tuition and living expenses.",
        starTip: "State the exact numbers clearly without stammering—confidence in financial stability is critical."
      },
      {
        q: "What are your post-graduation career plans? What ties guarantee that you will return to your home country after completing your degree?",
        hint: "Do NOT say you want to settle abroad. Highlight family ties, property, and specific booming industries in your home country.",
        criteria: ["return", "home country", "ties", "family", "career", "industry", "opportunities"],
        idealAnswer: "Immediately upon graduating, I plan to return to India/Bangladesh to join the rapidly expanding tech ecosystem as an AI Systems Architect. My long-term family roots, parental property, and the high demand for specialized AI engineers in my home country guarantee my return.",
        starTip: "Frame your degree as an asset to accelerate your career in your home country's growing economy."
      }
    ],
    roadmap: [
      { day: "Day 1", topic: "University & Course Justification", desc: "Memorize 3 specific course modules and professor research projects." },
      { day: "Day 2", topic: "Financial Clarty", desc: "Practice articulating annual income, sponsor sources, and liquid funds without hesitation." },
      { day: "Day 3", topic: "Home Ties Justification", desc: "Articulate family roots, property, and long-term career opportunities in home country." },
      { day: "Day 4", topic: "Concise 30s Delivery", desc: "Visa officers have 2 minutes; practice delivering answers in under 35 seconds." },
      { day: "Day 5", topic: "Scholarship Pitch (Chevening/Fulbright)", desc: "Structure your personal statement around community impact and leadership." },
      { day: "Day 6", topic: "Pressure & Red Flag Drills", desc: "Practice handling questions about study gaps or visa rejection risks." },
      { day: "Day 7", topic: "Mock Consular Interview", desc: "Run a high-speed simulation with rapid-fire questions." }
    ]
  },

  "Freelancer Client-Call Pitch": {
    interviewerName: "Marcus (Startup Founder & Client)",
    interviewerDesc: "US/EU Startup Client • Upwork Discovery Call",
    questions: [
      {
        q: "I reviewed your proposal. Can you walk me through your technical approach to building our MVP in 4 weeks, and why we should hire you over an agency?",
        hint: "Focus on agility, direct communication with zero agency bloat, and milestone breakdown.",
        criteria: ["mvp", "milestones", "communication", "architecture", "fast", "direct", "deliver"],
        idealAnswer: "I specialize in rapid, modular MVP development. In Week 1, I establish database schemas and core authentication. Week 2 delivers API endpoints and business logic. Week 3 focuses on frontend integration, and Week 4 covers end-to-end testing and deployment on Vercel/Render. You get daily updates and direct code commits without agency overhead.",
        starTip: "Provide a concrete 4-week timeline with clear deliverables to prove execution confidence."
      },
      {
        q: "What happens if our product scope changes mid-project or if a third-party API we rely on undergoes breaking changes?",
        hint: "Emphasize agile sprint checkpoints, clear change-request documentation, and defensive API wrapper design.",
        criteria: ["scope", "change", "agile", "checkpoint", "communication", "contract", "wrapper"],
        idealAnswer: "I architect integrations using adapter wrappers so external API changes only require updating a single service file. For feature scope changes, we evaluate the impact together: we either swap non-critical features to preserve the deadline or adjust the milestone budget transparently.",
        starTip: "Demonstrate both technical resilience (adapter pattern) and professional project management."
      },
      {
        q: "What is your rate structure, and how do you guarantee code quality and post-launch bug fixes?",
        hint: "Offer clear milestone-based pricing, GitHub PR reviews, test suites, and a 14-day post-launch warranty.",
        criteria: ["milestone", "warranty", "tests", "quality", "clean code", "support", "github"],
        idealAnswer: "I work on milestone-based payments tied to verified deliverables. Every release includes automated unit tests, clean documentation, and an active GitHub repo. Furthermore, I provide a complimentary 14-day post-launch bug-fixing warranty to ensure smooth production adoption.",
        starTip: "Offering a free 14-day warranty removes all hiring friction for international clients."
      }
    ],
    roadmap: [
      { day: "Day 1", topic: "The Discovery Call Framework", desc: "Master the 3-part call: Listen to client pain -> Propose architecture -> Close." },
      { day: "Day 2", topic: "Handling Price Objections", desc: "Practice articulating ROI and milestone value instead of competing on cheap rates." },
      { day: "Day 3", topic: "Scope Creep Defense", desc: "Draft clear, professional change-request email templates." },
      { day: "Day 4", topic: "Portfolio Live Walkthrough", desc: "Present a GitHub project showing commit discipline, clean architecture, and tests." },
      { day: "Day 5", topic: "Async Communication", desc: "Master Loom video demos and daily Slack update structures." },
      { day: "Day 6", topic: "Contract & Warranty Pitch", desc: "Practice pitching milestone releases and post-launch warranties with confidence." },
      { day: "Day 7", topic: "Client Call Roleplay", desc: "Simulate a live 10-minute client negotiation call." }
    ]
  },

  "AI and Machine Learning Engineer": {
    interviewerName: "Dr. Elena (Head of AI Research)",
    interviewerDesc: "AI Lab Panel • LLMs, RAG & Agents",
    questions: [
      {
        q: "Can you explain the core architecture of a Retrieval-Augmented Generation (RAG) system, and how chunking strategies impact retrieval recall in production?",
        hint: "Explain embeddings, vector DBs (FAISS), chunk overlap, semantic loss, and prompt context injection.",
        criteria: ["rag", "embedding", "vector", "chunk", "overlap", "faiss", "context", "recall"],
        idealAnswer: "RAG retrieves relevant domain context from a vector database like FAISS using dense semantic embeddings and injects it into the LLM prompt. Optimal chunk size with 10-20% overlap ensures critical semantic continuity across boundaries, maximizing retrieval recall while avoiding token window bloat.",
        starTip: "Highlight the tradeoff between chunk granularity, embedding fidelity, and context window limits."
      },
      {
        q: "What is the concrete difference between Vector Cosine Similarity and Dot Product, and when are they mathematically identical?",
        hint: "Discuss normalization and magnitude.",
        criteria: ["cosine", "dot product", "normalized", "magnitude", "unit", "angle"],
        idealAnswer: "Cosine similarity measures only the angular difference between vectors regardless of magnitude, making it scale-invariant. Dot product measures both angle and magnitude. When all vector embeddings are unit-normalized (L2 norm = 1), Dot Product and Cosine Similarity are mathematically identical.",
        starTip: "Mention L2 normalization and explain why modern vector indexes normalize embeddings for speed."
      },
      {
        q: "How do you evaluate and prevent Hallucinations in an autonomous LLM agent workflow with tool calling?",
        hint: "Mention the RAG Triad (groundedness, context relevance), strict Pydantic JSON schemas, and deterministic validation.",
        criteria: ["hallucination", "groundedness", "guardrails", "eval", "pydantic", "schema", "validation"],
        idealAnswer: "I use frameworks like Ragas to evaluate Groundedness and Answer Relevance. For agent tool loops, I enforce strict Pydantic JSON schemas for structured output and execute deterministic programmatic validation before accepting any tool return value.",
        starTip: "Explain how you combine automated evals (Ragas) with runtime deterministic schema enforcement."
      }
    ],
    roadmap: [
      { day: "Day 1", topic: "Vector Search & Embeddings", desc: "Deep dive into FAISS HNSW indexing, L2 normalization, and recall metrics." },
      { day: "Day 2", topic: "Hybrid RAG Pipelines", desc: "Implement dense vector retrieval combined with BM25 lexical keyword search." },
      { day: "Day 3", topic: "Agentic Tool Loops", desc: "Build autonomous ReAct state machines with self-correcting error recovery." },
      { day: "Day 4", topic: "Evals & Guardrails", desc: "Implement TruLens/Ragas evals and strict JSON schema validators." },
      { day: "Day 5", topic: "Fine-Tuning vs RAG", desc: "Articulate when to use LoRA/PEFT vs dynamic RAG knowledge injection." },
      { day: "Day 6", topic: "Latency & Streaming", desc: "Optimize sub-120ms vector retrieval and token streaming architectures." },
      { day: "Day 7", topic: "Architecture Presentation", desc: "Practice drawing and defending your AI project architecture under scrutiny." }
    ]
  }
};

// ==========================================
// APPLICATION STATE
// ==========================================
let state = {
  role: "Tech Software Fresher",
  pressureMode: "realistic",
  coachingLang: "en",
  questionCount: 3,
  enableTTS: true,
  enableBreathing: true,
  resumeText: "",
  jobDescText: "",

  // Session State
  currentQuestionIndex: 0,
  activeQuestions: [],
  sessionAnswers: [],
  timerSeconds: 0,
  timerInterval: null,
  isRecording: false,
  recognition: null,
  speechStartTime: 0,
  currentFillersCount: 0,
  apiKey: localStorage.getItem("gemini_api_key") || "",

  // Chart Instance
  radarChartInstance: null,
  
  // Temporary storage for re-answering
  reAnswerTargetIdx: null
};

// ==========================================
// DOM ELEMENTS
// ==========================================
const views = {
  setup: document.getElementById("view-setup"),
  session: document.getElementById("view-session"),
  report: document.getElementById("view-report")
};

const elements = {
  btnStart: document.getElementById("btn-start-interview"),
  roleButtons: document.querySelectorAll(".role-btn"),
  tailorResume: document.getElementById("tailor-resume"),
  tailorJob: document.getElementById("tailor-job"),
  selectPressure: document.getElementById("select-pressure-mode"),
  selectLanguage: document.getElementById("select-language"),
  questionCountSelect: document.getElementById("question-count"),
  toggleTTS: document.getElementById("toggle-tts"),
  toggleBreathing: document.getElementById("toggle-breathing"),
  btnQuickDemo: document.getElementById("btn-quick-demo"),

  // Breathing Modal
  modalBreathing: document.getElementById("modal-breathing"),
  breathingText: document.getElementById("breathing-text"),
  breathingCountdown: document.getElementById("breathing-countdown"),
  btnSkipBreathing: document.getElementById("btn-skip-breathing"),

  // Session Elements
  sessionRoleBadge: document.getElementById("session-role-badge"),
  sessionPressureBadge: document.getElementById("session-pressure-badge"),
  sessionTimer: document.getElementById("session-timer"),
  sessionProgress: document.getElementById("session-progress"),
  interviewerAvatar: document.getElementById("interviewer-avatar"),
  interviewerName: document.getElementById("interviewer-name"),
  interviewerDesc: document.getElementById("interviewer-desc"),
  interviewerQuestion: document.getElementById("interviewer-question"),
  btnReplayAudio: document.getElementById("btn-replay-audio"),
  btnRequestHint: document.getElementById("btn-request-hint"),
  questionContextBox: document.getElementById("question-context-box"),
  questionHintText: document.getElementById("question-hint-text"),
  candidateInput: document.getElementById("candidate-answer-input"),
  btnMicToggle: document.getElementById("btn-mic-toggle"),
  micIcon: document.getElementById("mic-icon"),
  micText: document.getElementById("mic-text"),
  liveWpm: document.getElementById("live-wpm"),
  liveFillers: document.getElementById("live-fillers"),
  btnSubmitAnswer: document.getElementById("btn-submit-answer"),

  // Report Elements
  reportOverallScore: document.getElementById("report-overall-score"),
  reportVerdictBadge: document.getElementById("report-verdict-badge"),
  reportWpmMetric: document.getElementById("report-wpm-metric"),
  reportFillersMetric: document.getElementById("report-fillers-metric"),
  reportFillersDetail: document.getElementById("report-fillers-detail"),
  reportSpeechFeedback: document.getElementById("report-speech-feedback"),
  starBadgesContainer: document.getElementById("star-badges-container"),
  starSummaryText: document.getElementById("star-summary-text"),
  reportStrengthsList: document.getElementById("report-strengths-list"),
  reportFlagsList: document.getElementById("report-flags-list"),
  reportRoadmapContainer: document.getElementById("report-roadmap-container"),
  reportQuestionsBreakdown: document.getElementById("report-questions-breakdown"),
  btnRetake: document.getElementById("btn-retake"),
  btnResetNav: document.getElementById("btn-reset-nav"),
  btnPrintReport: document.getElementById("btn-print-report"),

  // History Modal
  btnNavHistory: document.getElementById("btn-nav-history"),
  modalHistory: document.getElementById("modal-history"),
  btnCloseHistory: document.getElementById("btn-close-history"),
  histTotalSessions: document.getElementById("hist-total-sessions"),
  histAvgScore: document.getElementById("hist-avg-score"),
  histNextFocus: document.getElementById("hist-next-focus"),
  historyItemsList: document.getElementById("history-items-list"),
  btnClearHistory: document.getElementById("btn-clear-history"),

  // Try Again Modal
  modalTryAgain: document.getElementById("modal-try-again"),
  btnCloseTryAgain: document.getElementById("btn-close-try-again"),
  tryAgainQuestionText: document.getElementById("try-again-question-text"),
  tryAgainTipText: document.getElementById("try-again-tip-text"),
  tryAgainInput: document.getElementById("try-again-input"),
  btnSaveTryAgain: document.getElementById("btn-save-try-again"),

  // API Modal
  btnApiModal: document.getElementById("btn-api-modal"),
  modalApiKey: document.getElementById("modal-api-key"),
  btnCloseModal: document.getElementById("btn-close-modal"),
  inputApiKey: document.getElementById("input-api-key"),
  btnSaveKey: document.getElementById("btn-save-key")
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  if (state.apiKey) elements.inputApiKey.value = state.apiKey;

  setupEventListeners();
  initSpeechRecognition();
  updateHistoryUI();
});

function setupEventListeners() {
  // Role selector buttons
  elements.roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.roleButtons.forEach(b => {
        b.className = "role-btn p-3.5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 text-left transition flex flex-col justify-between h-28";
      });
      btn.className = "role-btn active p-3.5 rounded-lg border-2 border-slate-900 bg-slate-50 text-left transition flex flex-col justify-between h-28";
      state.role = btn.getAttribute("data-role");
      if (window.lucide) window.lucide.createIcons();
    });
  });

  // Start interview button
  elements.btnStart.addEventListener("click", handleStartInterviewClick);

  // Quick Demo for Judges
  elements.btnQuickDemo.addEventListener("click", runInstantJudgeDemo);

  // Skip breathing button
  elements.btnSkipBreathing.addEventListener("click", launchInterviewDirectly);

  // Candidate Answer Live Monitoring
  elements.candidateInput.addEventListener("input", updateLiveSpeechMetrics);

  // Submit response
  elements.btnSubmitAnswer.addEventListener("click", handleAnswerSubmit);

  // Replay Question Audio
  elements.btnReplayAudio.addEventListener("click", () => {
    const currentQ = state.activeQuestions[state.currentQuestionIndex];
    if (currentQ) speakText(currentQ.q);
  });

  // Hint button
  elements.btnRequestHint.addEventListener("click", () => {
    const currentQ = state.activeQuestions[state.currentQuestionIndex];
    if (currentQ && currentQ.hint) {
      elements.questionHintText.textContent = currentQ.hint;
      elements.questionContextBox.classList.remove("hidden");
    }
  });

  // Speech Recognition (Mic Toggle)
  elements.btnMicToggle.addEventListener("click", toggleVoiceRecording);

  // Navigation / Retake
  elements.btnRetake.addEventListener("click", resetToSetup);
  elements.btnResetNav.addEventListener("click", resetToSetup);

  // Print PDF Scorecard
  elements.btnPrintReport.addEventListener("click", () => {
    window.print();
  });

  // History Modal
  elements.btnNavHistory.addEventListener("click", () => {
    updateHistoryUI();
    elements.modalHistory.classList.remove("hidden");
  });
  elements.btnCloseHistory.addEventListener("click", () => elements.modalHistory.classList.add("hidden"));
  elements.btnClearHistory.addEventListener("click", () => {
    localStorage.removeItem("interviewpulse_history");
    updateHistoryUI();
  });

  // Try Again Modal
  elements.btnCloseTryAgain.addEventListener("click", () => elements.modalTryAgain.classList.add("hidden"));
  elements.btnSaveTryAgain.addEventListener("click", handleSaveReAnswer);

  // API Key Modal
  elements.btnApiModal.addEventListener("click", () => elements.modalApiKey.classList.remove("hidden"));
  elements.btnCloseModal.addEventListener("click", () => elements.modalApiKey.classList.add("hidden"));
  elements.btnSaveKey.addEventListener("click", () => {
    state.apiKey = elements.inputApiKey.value.trim();
    localStorage.setItem("gemini_api_key", state.apiKey);
    elements.modalApiKey.classList.add("hidden");
    alert("API Key saved successfully!");
  });
}

// ==========================================
// INTERVIEW FLOW & ANXIETY BREATHING
// ==========================================
function handleStartInterviewClick() {
  state.pressureMode = elements.selectPressure.value;
  state.coachingLang = elements.selectLanguage.value;
  state.questionCount = parseInt(elements.questionCountSelect.value, 10);
  state.enableTTS = elements.toggleTTS.checked;
  state.enableBreathing = elements.toggleBreathing.checked;
  state.resumeText = elements.tailorResume.value.trim();
  state.jobDescText = elements.tailorJob.value.trim();

  if (state.enableBreathing) {
    runBreathingExercise();
  } else {
    launchInterviewDirectly();
  }
}

function runBreathingExercise() {
  elements.modalBreathing.classList.remove("hidden");
  let timeLeft = 8;
  elements.breathingCountdown.textContent = `Starting interview in ${timeLeft} seconds...`;
  elements.breathingText.textContent = "Inhale slowly...";

  const breathTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft === 4) {
      elements.breathingText.textContent = "Hold & Exhale gently...";
    }
    if (timeLeft <= 0) {
      clearInterval(breathTimer);
      elements.modalBreathing.classList.add("hidden");
      launchInterviewDirectly();
    } else {
      elements.breathingCountdown.textContent = `Starting interview in ${timeLeft} seconds...`;
    }
  }, 1000);

  elements.btnSkipBreathing.onclick = () => {
    clearInterval(breathTimer);
    elements.modalBreathing.classList.add("hidden");
    launchInterviewDirectly();
  };
}

function launchInterviewDirectly() {
  const roleInfo = ROLE_DATA[state.role] || ROLE_DATA["Tech Software Fresher"];
  let questions = [...roleInfo.questions];

  // Feature #1: Tailor questions if user supplied CV or Job Description
  if (state.resumeText || state.jobDescText) {
    const tailoredQ = generateTailoredQuestion(state.resumeText, state.jobDescText, state.role);
    questions.unshift(tailoredQ);
  }

  state.activeQuestions = questions.slice(0, state.questionCount);
  state.currentQuestionIndex = 0;
  state.sessionAnswers = [];
  state.timerSeconds = 0;

  views.setup.classList.add("hidden");
  views.report.classList.add("hidden");
  views.session.classList.remove("hidden");
  elements.btnResetNav.classList.remove("hidden");

  // Update Header Badges
  elements.sessionRoleBadge.textContent = state.role;
  const modeLabels = {
    gentle: "🌿 Gentle Coaching",
    realistic: "⚖️ Realistic Mode",
    stress: "⚡ Stress Viva Mode"
  };
  elements.sessionPressureBadge.textContent = modeLabels[state.pressureMode] || "Realistic";

  // Update Interviewer Profile
  elements.interviewerName.textContent = roleInfo.interviewerName || "Alex (Interviewer)";
  elements.interviewerDesc.textContent = roleInfo.interviewerDesc || "Evaluation Board";

  startTimer();
  loadQuestion(0);
}

function generateTailoredQuestion(resume, job, role) {
  let qText = "";
  if (resume && resume.length > 20) {
    qText = `Looking at your CV, you noted: "${resume.substring(0, 110)}...". Walk me through the technical tradeoffs you made in that project and how you verified its success.`;
  } else {
    qText = `For the target role (${role}), how would your current engineering and problem-solving skills meet the demands of this position from Day 1?`;
  }

  return {
    q: qText,
    hint: "Use the STAR method: explain the Situation, your specific Action, and the measurable Result.",
    criteria: ["tradeoff", "result", "implemented", "architecture", "impact", "metric"],
    idealAnswer: "I designed the architecture to balance maintainability and performance. In that project, I implemented modular interfaces, validated latency improvements, and cut error rates through automated testing.",
    starTip: "State the problem (S), your role (T), your technical design (A), and quantifiable outcome (R)."
  };
}

function loadQuestion(index) {
  state.currentQuestionIndex = index;
  const qData = state.activeQuestions[index];

  elements.sessionProgress.textContent = `Q ${index + 1} / ${state.activeQuestions.length}`;
  elements.interviewerQuestion.textContent = qData.q;
  elements.questionContextBox.classList.add("hidden");
  elements.candidateInput.value = "";
  elements.liveWpm.textContent = "0 WPM";
  elements.liveFillers.textContent = "0 Fillers";
  state.speechStartTime = Date.now();
  state.currentFillersCount = 0;

  // In gentle mode, show hint immediately
  if (state.pressureMode === "gentle" && qData.hint) {
    elements.questionHintText.textContent = qData.hint;
    elements.questionContextBox.classList.remove("hidden");
  }

  elements.candidateInput.focus();

  if (state.enableTTS) {
    speakText(qData.q);
  }
}

// ==========================================
// SPEECH & ANSWER EVALUATION
// ==========================================
function updateLiveSpeechMetrics() {
  const text = elements.candidateInput.value.trim();
  const words = text.length === 0 ? [] : text.split(/\s+/).filter(Boolean);
  
  // WPM calculation
  const elapsedMinutes = Math.max(0.08, (Date.now() - state.speechStartTime) / 60000);
  const wpm = Math.round(words.length / elapsedMinutes);
  elements.liveWpm.textContent = `${Math.min(220, wpm)} WPM`;

  // Detect fillers
  const fillersRegex = /\b(um|uh|like|actually|basically|you know|literally)\b/gi;
  const matches = text.match(fillersRegex) || [];
  state.currentFillersCount = matches.length;
  elements.liveFillers.textContent = `${matches.length} Fillers`;
}

function handleAnswerSubmit() {
  const answerText = elements.candidateInput.value.trim();
  if (!answerText || answerText.length < 15) {
    alert("Please provide a more complete answer so we can evaluate your speech metrics and STAR breakdown.");
    elements.candidateInput.focus();
    return;
  }

  if (state.isRecording) toggleVoiceRecording();

  const elapsedSeconds = Math.max(5, Math.round((Date.now() - state.speechStartTime) / 1000));
  const words = answerText.split(/\s+/).filter(Boolean);
  const wpm = Math.round(words.length / (elapsedSeconds / 60));

  const currentQ = state.activeQuestions[state.currentQuestionIndex];
  state.sessionAnswers.push({
    question: currentQ.q,
    userAnswer: answerText,
    criteria: currentQ.criteria || [],
    idealAnswer: currentQ.idealAnswer || "",
    hint: currentQ.hint || "",
    starTip: currentQ.starTip || "",
    durationSec: elapsedSeconds,
    wpm: Math.min(240, wpm),
    fillersCount: state.currentFillersCount
  });

  if (state.currentQuestionIndex + 1 < state.activeQuestions.length) {
    loadQuestion(state.currentQuestionIndex + 1);
  } else {
    finishInterviewSession();
  }
}

function finishInterviewSession() {
  stopTimer();
  views.session.classList.add("hidden");
  views.report.classList.remove("hidden");

  calculateAndRenderEvaluation();
}

// ==========================================
// SCORING ENGINE & RADAR METRICS
// ==========================================
function calculateAndRenderEvaluation() {
  let totalWpm = 0;
  let totalFillers = 0;
  let totalScore = 0;

  // 5 Radar Competency Dimensions
  let dimContent = 0;
  let dimStructure = 0;
  let dimConfidence = 0;
  let dimClarity = 0;
  let dimRelevance = 0;

  const questionsBreakdown = [];
  const count = state.sessionAnswers.length;

  state.sessionAnswers.forEach((item, idx) => {
    totalWpm += item.wpm;
    totalFillers += item.fillersCount;

    const textLower = item.userAnswer.toLowerCase();
    const wordCount = item.userAnswer.split(/\s+/).filter(Boolean).length;

    // 1. STAR detection
    const starStatus = evaluateSTARCompleteness(textLower);

    // 2. Keyword relevance
    let matches = 0;
    item.criteria.forEach(k => {
      if (textLower.includes(k.toLowerCase())) matches++;
    });
    const matchRatio = item.criteria.length > 0 ? matches / item.criteria.length : 0.6;

    // Dimension calculations
    const qContent = Math.min(96, Math.max(55, Math.round(55 + matchRatio * 40)));
    const qStructure = Math.min(95, Math.max(50, 50 + (starStatus.score * 11)));
    
    // Confidence penalized by heavy fillers or extreme pace
    let qConfidence = 85;
    if (item.fillersCount > 4) qConfidence -= (item.fillersCount * 3);
    if (item.wpm > 180 || item.wpm < 90) qConfidence -= 8;
    qConfidence = Math.min(95, Math.max(50, qConfidence));

    // Clarity based on length & structure
    let qClarity = 78;
    if (wordCount >= 35 && wordCount <= 140) qClarity += 12;
    else if (wordCount < 25) qClarity -= 14;

    const qRelevance = Math.min(96, Math.max(55, Math.round(60 + matchRatio * 35)));

    dimContent += qContent;
    dimStructure += qStructure;
    dimConfidence += qConfidence;
    dimClarity += qClarity;
    dimRelevance += qRelevance;

    const qOverall = Math.round((qContent + qStructure + qConfidence + qClarity + qRelevance) / 5);
    totalScore += qOverall;

    questionsBreakdown.push({
      questionNum: idx + 1,
      question: item.question,
      userAnswer: item.userAnswer,
      score: qOverall,
      starStatus,
      wpm: item.wpm,
      fillers: item.fillersCount,
      growthTip: !starStatus.hasResult 
        ? "Add a measurable Result (e.g. 'reduced latency by 25%' or 'saved 3 hours per week')."
        : "Excellent STAR formulation with clear technical ownership.",
      idealAnswer: item.idealAnswer,
      fresherModelAnswer: generateFresherModelAnswer(item.question, item.idealAnswer, item.userAnswer),
      starTip: item.starTip
    });
  });

  const avgWpm = Math.round(totalWpm / count);
  const finalOverall = Math.round(totalScore / count);

  const evalResult = {
    overall: finalOverall,
    avgWpm: avgWpm,
    totalFillers: totalFillers,
    radar: {
      content: Math.round(dimContent / count),
      structure: Math.round(dimStructure / count),
      confidence: Math.round(dimConfidence / count),
      clarity: Math.round(dimClarity / count),
      relevance: Math.round(dimRelevance / count)
    },
    questionsBreakdown
  };

  renderReportUI(evalResult);
  saveSessionToHistory(finalOverall, state.role);
}

function evaluateSTARCompleteness(text) {
  // Simple heuristic pattern matching for STAR
  const hasSituation = /(when|during|in my|project|semester|hackathon|at my|client|facing|tasked)/i.test(text);
  const hasTask = /(needed to|goal was|had to|responsible for|objective|problem was)/i.test(text);
  const hasAction = /(i built|i designed|i used|i implemented|i wrote|i investigated|i decided|i solved|i added)/i.test(text);
  const hasResult = /(result|achieved|improved|boosted|cut|reduced|won|passed|deployed|by \d+%|in \d+ms)/i.test(text);

  let score = 0;
  if (hasSituation) score++;
  if (hasTask) score++;
  if (hasAction) score++;
  if (hasResult) score++;

  return { hasSituation, hasTask, hasAction, hasResult, score };
}

function generateFresherModelAnswer(question, idealAnswer, userAnswer) {
  // Generates natural, peer-level fresher improved answer
  return idealAnswer || "In my academic and personal projects, I implemented modular architecture with clear separation of concerns. By adding robust validation and profiling execution time, I achieved consistent, reliable performance.";
}

// ==========================================
// REPORT UI RENDERING & RADAR CHART
// ==========================================
function renderReportUI(data) {
  elements.reportOverallScore.textContent = data.overall;

  // Verdict Badge
  if (data.overall >= 80) {
    elements.reportVerdictBadge.textContent = "High Readiness & Strong Hire";
    elements.reportVerdictBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300";
    if (window.confetti) window.confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
  } else if (data.overall >= 65) {
    elements.reportVerdictBadge.textContent = "Promising - Minor Polish Needed";
    elements.reportVerdictBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300";
  } else {
    elements.reportVerdictBadge.textContent = "Foundational Review Recommended";
    elements.reportVerdictBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300";
  }

  // Render Radar Chart with Chart.js (Feature #8)
  renderRadarChart(data.radar);

  // Speech Metrics Display (Feature #3)
  elements.reportWpmMetric.textContent = `${data.avgWpm} WPM`;
  elements.reportFillersMetric.textContent = `${data.totalFillers} Fillers`;
  elements.reportFillersDetail.textContent = data.totalFillers > 0 
    ? `Detected hesitation markers ("like", "um")` 
    : "Zero hesitation markers detected!";
  
  if (data.avgWpm > 165) {
    elements.reportSpeechFeedback.textContent = `Your pace averaged ${data.avgWpm} WPM. You spoke slightly too fast when diving into technical details—slowing down to 130-150 WPM projects greater calm and authority.`;
  } else if (data.avgWpm < 100) {
    elements.reportSpeechFeedback.textContent = `Your pace was ${data.avgWpm} WPM. Take fewer long pauses—structuring your thoughts in bullet points helps deliver answers with crisp momentum.`;
  } else {
    elements.reportSpeechFeedback.textContent = `Your pace averaged ${data.avgWpm} WPM, which is within the optimal conversational zone (120-150 WPM) for high-stakes interviews.`;
  }

  // STAR method global feedback (Feature #4)
  const hasMissingResults = data.questionsBreakdown.some(q => !q.starStatus.hasResult);
  if (hasMissingResults) {
    elements.starSummaryText.innerHTML = "You set up strong Situations and Actions, but missed quantifying the <strong>measurable Result</strong> in at least one answer. Always state: <em>'This resulted in a 30% reduction in query time'</em> or <em>'The team completed the release 2 days ahead of schedule'</em>.";
  } else {
    elements.starSummaryText.innerHTML = "Excellent STAR formulation! You consistently linked your direct actions to tangible business or project outcomes.";
  }

  // Strengths
  elements.reportStrengthsList.innerHTML = [
    `Strong technical relevance tailored to ${state.role}.`,
    `Maintained conversational presence with an average pace of ${data.avgWpm} WPM.`,
    "Demonstrated good ownership and structured thinking under interview conditions."
  ].map(s => `
    <li class="flex items-start gap-2">
      <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
      <span>${s}</span>
    </li>
  `).join("");

  // Red Flags / Specific Diagnostics
  const flags = [];
  if (data.totalFillers >= 4) flags.push(`Frequent filler words detected (${data.totalFillers} instances). Replace 'like' and 'um' with a deliberate 1-second silent pause.`);
  if (hasMissingResults) flags.push("Unquantified outcomes: Missing measurable numbers (percentages, latency, time saved) in project stories.");
  if (flags.length === 0) flags.push("No critical red flags observed! Keep maintaining steady eye contact and crisp STAR summaries.");

  elements.reportFlagsList.innerHTML = flags.map(f => `
    <li class="flex items-start gap-2">
      <i data-lucide="alert-circle" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
      <span>${f}</span>
    </li>
  `).join("");

  // 7-Day Roadmap (Feature #10)
  const roleInfo = ROLE_DATA[state.role] || ROLE_DATA["Tech Software Fresher"];
  const roadmapItems = roleInfo.roadmap || ROLE_DATA["Tech Software Fresher"].roadmap;
  elements.reportRoadmapContainer.innerHTML = roadmapItems.map(item => `
    <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
      <span class="text-[10px] font-mono font-bold text-slate-700 uppercase">${item.day}</span>
      <h5 class="text-xs font-semibold text-slate-800 leading-tight">${item.topic}</h5>
      <p class="text-[10px] text-slate-600 leading-tight">${item.desc}</p>
    </div>
  `).join("");

  // Question Breakdown Cards with Before/After Comparison & "Try Again" Button (Feature #5)
  elements.reportQuestionsBreakdown.innerHTML = data.questionsBreakdown.map((item, idx) => `
    <div class="clean-card p-5 space-y-3">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <span class="text-xs font-mono font-semibold text-slate-900">Question ${idx + 1}</span>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
            ${item.wpm} WPM &bull; ${item.fillers} Fillers
          </span>
          <span class="text-xs px-2.5 py-0.5 rounded font-semibold ${item.score >= 75 ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-slate-800 border border-slate-200'}">
            Score: ${item.score}/100
          </span>
        </div>
      </div>

      <p class="text-sm font-semibold text-slate-900">${item.question}</p>

      <!-- Side-by-Side Before & After (Feature #5) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <!-- Before: What you said -->
        <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
          <strong class="text-slate-500 block text-[11px]">Your Response:</strong>
          <p class="leading-relaxed">${item.userAnswer}</p>
          <div class="pt-2 text-[11px] text-slate-600 flex items-center gap-1">
            <i data-lucide="info" class="w-3.5 h-3.5 text-slate-500"></i>
            <span>${item.growthTip}</span>
          </div>
        </div>

        <!-- After: Improved Model Answer -->
        <div class="p-3 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-900 space-y-1">
          <strong class="text-slate-800 block text-[11px] flex items-center justify-between">
            <span>Revised Model Answer:</span>
            <span class="text-[10px] bg-slate-200 px-1.5 py-0.2 rounded font-mono">STAR Format</span>
          </strong>
          <p class="leading-relaxed text-slate-800">${item.fresherModelAnswer}</p>
        </div>
      </div>

      <!-- Action Row: Try Again Button (Feature #5) -->
      <div class="pt-2 flex justify-end">
        <button onclick="openTryAgainModal(${idx})" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-medium flex items-center gap-1.5 transition">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5 text-slate-600"></i>
          <span>Re-Answer Question</span>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function renderRadarChart(radarData) {
  const ctx = document.getElementById("radarChart");
  if (!ctx) return;

  if (state.radarChartInstance) {
    state.radarChartInstance.destroy();
  }

  state.radarChartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Content", "Structure", "Confidence", "Clarity", "Relevance"],
      datasets: [{
        label: "Your Score",
        data: [
          radarData.content,
          radarData.structure,
          radarData.confidence,
          radarData.clarity,
          radarData.relevance
        ],
        backgroundColor: "rgba(15, 23, 42, 0.08)",
        borderColor: "#0F172A",
        pointBackgroundColor: "#0F172A",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#0F172A",
        borderWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 40,
          max: 100,
          ticks: { display: false, stepSize: 20 },
          pointLabels: {
            font: { size: 10, family: "Inter", weight: "500" },
            color: "#475569"
          },
          grid: { color: "rgba(0, 0, 0, 0.07)" },
          angleLines: { color: "rgba(0, 0, 0, 0.07)" }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ==========================================
// FEATURE #5: "TRY AGAIN" MODAL LOOP
// ==========================================
window.openTryAgainModal = function(questionIndex) {
  state.reAnswerTargetIdx = questionIndex;
  const item = state.sessionAnswers[questionIndex];
  if (!item) return;

  elements.tryAgainQuestionText.textContent = item.question;
  elements.tryAgainTipText.textContent = item.starTip || "Be sure to state the Situation, Action, and measurable Result clearly.";
  elements.tryAgainInput.value = item.userAnswer;
  elements.modalTryAgain.classList.remove("hidden");
  elements.tryAgainInput.focus();
};

function handleSaveReAnswer() {
  const updatedText = elements.tryAgainInput.value.trim();
  if (!updatedText || updatedText.length < 15) {
    alert("Please provide a complete updated answer to re-evaluate.");
    return;
  }

  const targetIdx = state.reAnswerTargetIdx;
  if (targetIdx !== null && state.sessionAnswers[targetIdx]) {
    // Update answer
    state.sessionAnswers[targetIdx].userAnswer = updatedText;
    state.sessionAnswers[targetIdx].fillersCount = 0; // Fresh polished attempt
    elements.modalTryAgain.classList.add("hidden");

    // Re-run evaluation & observe score improvement
    calculateAndRenderEvaluation();
  }
}

// ==========================================
// FEATURE #9: PROGRESS DASHBOARD (LocalStorage)
// ==========================================
function saveSessionToHistory(score, role) {
  try {
    const raw = localStorage.getItem("interviewpulse_history");
    const history = raw ? JSON.parse(raw) : [];
    history.unshift({
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      score: score,
      role: role
    });
    // Keep last 15
    localStorage.setItem("interviewpulse_history", JSON.stringify(history.slice(0, 15)));
    updateHistoryUI();
  } catch (e) {
    console.warn("Storage error", e);
  }
}

function updateHistoryUI() {
  try {
    const raw = localStorage.getItem("interviewpulse_history");
    const history = raw ? JSON.parse(raw) : [];

    elements.histTotalSessions.textContent = history.length;
    if (history.length > 0) {
      const avg = Math.round(history.reduce((acc, h) => acc + h.score, 0) / history.length);
      elements.histAvgScore.textContent = avg;
      elements.histNextFocus.textContent = avg < 75 ? "STAR Results" : "Pacing (WPM)";

      elements.historyItemsList.innerHTML = history.map(item => `
        <div class="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-xs">
          <div>
            <span class="font-bold text-slate-800 block">${item.role}</span>
            <span class="text-[10px] text-slate-500">${item.date}</span>
          </div>
          <span class="px-2 py-0.5 rounded-full font-mono font-bold ${item.score >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${item.score}/100
          </span>
        </div>
      `).join("");
    } else {
      elements.histAvgScore.textContent = "0";
      elements.historyItemsList.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">No past sessions yet. Complete an interview to see your trend!</p>`;
    }
  } catch (e) {
    console.warn("History parse error", e);
  }
}

// ==========================================
// ONE-CLICK INSTANT DEMO FOR JUDGES
// ==========================================
function runInstantJudgeDemo() {
  // Pre-configured student response with realistic fillers and missing Result in STAR
  state.role = "Tech Software Fresher";
  state.pressureMode = "realistic";
  state.activeQuestions = [
    {
      q: "Can you explain the key difference between lists and tuples in Python, and in what practical scenario would you strictly prefer a tuple over a list?",
      hint: "Think about mutability and memory allocation.",
      criteria: ["mutable", "immutable", "memory", "hashable", "tuple"],
      idealAnswer: "Lists are mutable sequences suitable for collections that change, whereas tuples are immutable. Tuples consume less memory, offer faster iteration, and because they are hashable, they can be safely used as dictionary keys or in sets, preventing accidental data mutation.",
      starTip: "Mention Situation (handling config), Action (used tuple), and Result (zero accidental state mutation)."
    },
    {
      q: "In a production web application, how would you optimize an endpoint that is running slow database queries?",
      hint: "Think about indexing and caching.",
      criteria: ["index", "cache", "query", "explain analyze"],
      idealAnswer: "First, use SQL `EXPLAIN ANALYZE` or query profilers to check execution plans. Then add database indexes on frequently filtered columns, fix N+1 ORM queries using eager loading (like `select_related`), implement Redis caching, and use connection pooling.",
      starTip: "Explain Situation (slow query), Task (reduce latency), Action (added index), and Result (cut latency from 450ms to 60ms)."
    }
  ];

  state.sessionAnswers = [
    {
      question: state.activeQuestions[0].q,
      userAnswer: "Um, so basically lists in Python are mutable, which means like you can append and delete items. But tuples are immutable. In my university project, I actually used tuples for coordinates because they shouldn't change.",
      criteria: state.activeQuestions[0].criteria,
      idealAnswer: state.activeQuestions[0].idealAnswer,
      hint: state.activeQuestions[0].hint,
      starTip: state.activeQuestions[0].starTip,
      durationSec: 14,
      wpm: 142,
      fillersCount: 4
    },
    {
      question: state.activeQuestions[1].q,
      userAnswer: "When our college portal endpoint was slow, I used EXPLAIN to inspect the SQL query and noticed it was scanning the whole table. I added a composite index on student_id and created_at.",
      criteria: state.activeQuestions[1].criteria,
      idealAnswer: state.activeQuestions[1].idealAnswer,
      hint: state.activeQuestions[1].hint,
      starTip: state.activeQuestions[1].starTip,
      durationSec: 16,
      wpm: 135,
      fillersCount: 1
    }
  ];

  views.setup.classList.add("hidden");
  views.session.classList.add("hidden");
  views.report.classList.remove("hidden");
  elements.btnResetNav.classList.remove("hidden");

  calculateAndRenderEvaluation();
}

// ==========================================
// AUDIO & SPEECH APIS
// ==========================================
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha")));
  if (englishVoice) utterance.voice = englishVoice;

  window.speechSynthesis.speak(utterance);
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    elements.btnMicToggle.style.display = "none";
    return;
  }

  state.recognition = new SpeechRecognition();
  state.recognition.continuous = true;
  state.recognition.interimResults = true;
  state.recognition.lang = "en-US";

  state.recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    elements.candidateInput.value = (elements.candidateInput.value + " " + transcript).trim();
    updateLiveSpeechMetrics();
  };

  state.recognition.onerror = (err) => {
    console.warn("Speech recognition error:", err);
    stopRecordingUI();
  };

  state.recognition.onend = () => {
    if (state.isRecording) stopRecordingUI();
  };
}

function toggleVoiceRecording() {
  if (!state.recognition) {
    alert("Speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
    return;
  }

  if (state.isRecording) {
    state.recognition.stop();
    stopRecordingUI();
  } else {
    try {
      state.recognition.start();
      startRecordingUI();
    } catch (e) {
      console.error("Mic start failed", e);
    }
  }
}

function startRecordingUI() {
  state.isRecording = true;
  elements.micText.textContent = "Listening... (Click to Stop)";
  elements.btnMicToggle.classList.add("bg-rose-600", "text-white", "animate-pulse");
  elements.btnMicToggle.classList.remove("bg-slate-100", "text-slate-700");
}

function stopRecordingUI() {
  state.isRecording = false;
  elements.micText.textContent = "Speak Answer";
  elements.btnMicToggle.classList.remove("bg-rose-600", "text-white", "animate-pulse");
  elements.btnMicToggle.classList.add("bg-slate-100", "text-slate-700");
}

// ==========================================
// TIMER & RESET
// ==========================================
function startTimer() {
  stopTimer();
  state.timerSeconds = 0;
  elements.sessionTimer.textContent = "00:00";
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    const mins = String(Math.floor(state.timerSeconds / 60)).padStart(2, '0');
    const secs = String(state.timerSeconds % 60).padStart(2, '0');
    elements.sessionTimer.textContent = `${mins}:${secs}`;
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function resetToSetup() {
  stopTimer();
  if (state.isRecording && state.recognition) {
    state.recognition.stop();
    stopRecordingUI();
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  views.session.classList.add("hidden");
  views.report.classList.add("hidden");
  views.setup.classList.remove("hidden");
  elements.btnResetNav.classList.add("hidden");

  if (window.lucide) window.lucide.createIcons();
}
