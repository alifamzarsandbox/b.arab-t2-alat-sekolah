/**
 * ============================================================================
 * MISI BAHASA ARAB — DUNIA ALAT SEKOLAH
 * Skrip Utama Permainan (Vanilla JavaScript)
 * ============================================================================
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. SISTEM AUDIO (Web Audio API Synthesizer)
  // Tidak memerlukan fail audio luaran — 100% andal dalam talian & luar talian
  // ==========================================================================
  const SoundSystem = {
    audioCtx: null,
    isMuted: false,

    init: function () {
      const savedMute = localStorage.getItem("misi_arabic_muted");
      if (savedMute !== null) {
        this.isMuted = savedMute === "true";
      }
      this.updateIcon();
    },

    getAudioContext: function () {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    },

    toggleMute: function () {
      this.isMuted = !this.isMuted;
      localStorage.setItem("misi_arabic_muted", this.isMuted);
      this.updateIcon();
      if (!this.isMuted) {
        this.playPop();
      }
    },

    updateIcon: function () {
      const iconEl = document.getElementById("sound-icon");
      if (iconEl) {
        iconEl.textContent = this.isMuted ? "🔇" : "🔊";
      }
    },

    playPop: function () {
      if (this.isMuted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
      } catch (e) {}
    },

    playCorrect: function () {
      if (this.isMuted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Arpeggio riang)
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.24);
        });
      } catch (e) {}
    },

    playWrong: function () {
      if (this.isMuted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const notes = [311.13, 233.08]; // Nada lembut yang tidak menakutkan kanak-kanak
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.18, now + idx * 0.12);
          gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.12 + 0.18);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.2);
        });
      } catch (e) {}
    },

    playMilestone: function () {
      if (this.isMuted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const melody = [
          { f: 440.00, d: 0.1 },
          { f: 554.37, d: 0.1 },
          { f: 659.25, d: 0.15 },
          { f: 880.00, d: 0.3 }
        ];
        let t = now;
        melody.forEach(item => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(item.f, t);
          gain.gain.setValueAtTime(0.22, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + item.d);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + item.d + 0.02);
          t += item.d;
        });
      } catch (e) {}
    },

    playVictory: function () {
      if (this.isMuted) return;
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0.25, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.42);
        });
      } catch (e) {}
    }
  };

  // ==========================================================================
  // 2. SISTEM CONFETTI (Canvas Pure JS)
  // ==========================================================================
  const Confetti = {
    canvas: null,
    ctx: null,
    particles: [],
    animId: null,
    isActive: false,

    init: function () {
      this.canvas = document.getElementById("confetti-canvas");
      if (this.canvas) {
        this.ctx = this.canvas.getContext("2d");
        this.resize();
        window.addEventListener("resize", () => this.resize());
      }
    },

    resize: function () {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
    },

    start: function () {
      if (!this.canvas || !this.ctx) return;
      this.resize();
      this.particles = [];
      const colors = ["#38bdf8", "#facc15", "#10b981", "#f43f5e", "#a855f7", "#fb923c"];
      for (let i = 0; i < 90; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * -this.canvas.height,
          size: Math.random() * 8 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 3 + 2.5,
          rot: Math.random() * 360,
          vrot: Math.random() * 8 - 4
        });
      }
      this.isActive = true;
      this.loop();
      // Berhenti secara automatik selepas 4.5 saat
      setTimeout(() => this.stop(), 4500);
    },

    loop: function () {
      if (!this.isActive || !this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
        this.ctx.restore();

        if (p.y > this.canvas.height) {
          p.y = -20;
          p.x = Math.random() * this.canvas.width;
        }
      });
      this.animId = requestAnimationFrame(() => this.loop());
    },

    stop: function () {
      this.isActive = false;
      if (this.animId) cancelAnimationFrame(this.animId);
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  };

  // ==========================================================================
  // 3. KEADAAN PERMAINAN (GAME STATE)
  // ==========================================================================
  const state = {
    studentName: "",
    studentClass: "2 Elite",
    currentQuestionIndex: 0,
    score: 0,
    correctCount: 0,
    startTime: null,
    endTime: null,
    durationSeconds: 0,
    attemptId: "",
    isAnswerLocked: false,
    
    // Format C state
    formatCSlots: ["", ""], // [Slot 1 (Kanan), Slot 2 (Kiri)]
    formatCAvailable: [],
    
    // Rekod semua jawapan murid untuk semakan
    history: []
  };

  // Utiliti Rawak Susunan (Fisher-Yates)
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Menjana ID Percubaan Unik
  function generateAttemptId() {
    const timestamp = Date.now();
    const randomHex = Math.random().toString(36).substring(2, 8);
    return `att_${timestamp}_${randomHex}`;
  }

  // ==========================================================================
  // 4. NAVIGASI SKRIN
  // ==========================================================================
  function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // ==========================================================================
  // 5. PERMULAAN PERMAINAN
  // ==========================================================================
  function startGame() {
    const nameInput = document.getElementById("student-name-input");
    const classInput = document.getElementById("student-class-input");
    const errorMsg = document.getElementById("name-error-msg");
    const rawName = nameInput ? nameInput.value.trim() : "";
    const rawClass = (classInput && classInput.value) ? classInput.value.trim() : "2 Elite";

    if (!rawName || rawName.length === 0) {
      if (errorMsg) errorMsg.style.display = "block";
      if (nameInput) nameInput.focus();
      SoundSystem.playWrong();
      return;
    }

    if (errorMsg) errorMsg.style.display = "none";

    // Setkan maklumat permainan
    state.studentName = rawName.substring(0, 30);
    state.studentClass = rawClass || "2 Elite";
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.correctCount = 0;
    state.startTime = Date.now();
    state.endTime = null;
    state.durationSeconds = 0;
    state.attemptId = generateAttemptId();
    state.history = [];

    // Kemas kini nama dan kelas pada header game
    const nameBadge = document.getElementById("game-student-name");
    const classBadge = document.getElementById("game-student-class");
    if (nameBadge) nameBadge.textContent = state.studentName;
    if (classBadge) classBadge.textContent = state.studentClass;

    SoundSystem.playPop();
    showScreen("screen-game");
    loadQuestion(0);
  }

  // ==========================================================================
  // 6. PAPARAN SOALAN (20 SOALAN)
  // ==========================================================================
  function loadQuestion(index) {
    if (index >= QUESTIONS_DATA.length) {
      finishGame();
      return;
    }

    state.currentQuestionIndex = index;
    state.isAnswerLocked = false;
    const q = QUESTIONS_DATA[index];

    // Kemas kini indikator
    const qNumEl = document.getElementById("current-q-num");
    const scoreValEl = document.getElementById("current-score-val");
    const progressFill = document.getElementById("mission-progress-fill");
    const formatBadge = document.getElementById("question-format-badge");
    const instructionEl = document.getElementById("question-instruction");
    const feedbackPanel = document.getElementById("feedback-panel");

    if (qNumEl) qNumEl.textContent = index + 1;
    if (scoreValEl) scoreValEl.textContent = state.score;
    if (progressFill) {
      const progressPercent = ((index + 1) / QUESTIONS_DATA.length) * 100;
      progressFill.style.width = `${progressPercent}%`;
    }
    if (formatBadge) formatBadge.textContent = `${q.formatName} (Bahagian ${q.format})`;
    if (instructionEl) instructionEl.textContent = q.instruction;

    // Sembunyikan panel maklum balas
    if (feedbackPanel) {
      feedbackPanel.style.display = "none";
      feedbackPanel.className = "feedback-panel";
    }

    // Bina UI Mengikut Format A, B, C, D
    const container = document.getElementById("question-interactive-area");
    if (!container) return;
    container.innerHTML = "";

    switch (q.format) {
      case "A":
        renderFormatA(q, container);
        break;
      case "B":
        renderFormatB(q, container);
        break;
      case "C":
        renderFormatC(q, container);
        break;
      case "D":
        renderFormatD(q, container);
        break;
    }
  }

  // --------------------------------------------------------------------------
  // FORMAT A — KENALI GAMBAR (Soalan 1 - 5)
  // --------------------------------------------------------------------------
  function renderFormatA(q, container) {
    const graphicHtml = ASSETS[q.graphicKey] || "";
    const shuffledOptions = shuffleArray(q.options);

    container.innerHTML = `
      <div class="graphic-box">
        ${graphicHtml}
      </div>
      <div class="options-grid">
        ${shuffledOptions.map((opt, i) => `
          <button class="btn-option arabic-option" data-option="${opt}">
            <span lang="ar" dir="rtl">${opt}</span>
          </button>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".btn-option").forEach(btn => {
      btn.addEventListener("click", () => {
        handleChoice(q, btn.getAttribute("data-option"), btn);
      });
    });
  }

  // --------------------------------------------------------------------------
  // FORMAT B — PILIH MAKSUD (Soalan 6 - 10)
  // --------------------------------------------------------------------------
  function renderFormatB(q, container) {
    const shuffledOptions = shuffleArray(q.options);

    container.innerHTML = `
      <div class="large-arabic-card">
        <div class="large-arabic-word" lang="ar" dir="rtl">${q.promptArabic}</div>
        <span class="arabic-transliteration-badge">Pilih Maksud Bahasa Melayu</span>
      </div>
      <div class="options-grid">
        ${shuffledOptions.map(opt => `
          <button class="btn-option" data-option="${opt}">
            <span>${opt}</span>
          </button>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".btn-option").forEach(btn => {
      btn.addEventListener("click", () => {
        handleChoice(q, btn.getAttribute("data-option"), btn);
      });
    });
  }

  // --------------------------------------------------------------------------
  // FORMAT C — SUSUN PERKATAAN (Soalan 11 - 20)
  // Menyokong 2 atau 3 perkataan secara dinamik & responsif
  // --------------------------------------------------------------------------
  function renderFormatC(q, container) {
    const graphicHtml = ASSETS[q.graphicKey] || "";
    const wordCount = q.targetOrder.length;
    // Susun rawak perkataan permulaan
    state.formatCAvailable = shuffleArray(q.words);
    state.formatCSlots = new Array(wordCount).fill("");

    // Jana HTML bagi setiap slot mengikut bilangan perkataan (Urutan RTL: Kanan ke Kiri)
    let slotsHtml = "";
    for (let i = 0; i < wordCount; i++) {
      let placeholderText = "";
      if (wordCount === 2) {
        placeholderText = i === 0 ? "Perkataan 1 (Kanan)" : "Perkataan 2 (Kiri)";
      } else {
        if (i === 0) placeholderText = "Perkataan 1 (Kanan)";
        else if (i === 1) placeholderText = "Perkataan 2 (Tengah)";
        else placeholderText = "Perkataan 3 (Kiri)";
      }
      slotsHtml += `
        <div class="phrase-slot" id="slot-${i}" data-index="${i}" title="Tekan untuk padam perkataan ini">
          <span class="phrase-slot-placeholder">${placeholderText}</span>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="graphic-box">
        ${graphicHtml}
      </div>

      <div class="phrase-building-area">
        <div class="phrase-target-hint">
          <span class="phrase-target-label">Maksud yang dikehendaki:</span>
          <div class="phrase-target-text">"${q.promptMalay}"</div>
        </div>

        <!-- Ruang Jawapan Slot (Urutan Arab dari Kanan ke Kiri) -->
        <div class="phrase-slots-container">
          ${slotsHtml}
        </div>

        <!-- Kad Bank Perkataan Untuk Ditekan -->
        <div class="word-bank-container" id="word-bank-box">
          <!-- Kad akan dijana oleh updateFormatCUI -->
        </div>

        <!-- Butang Padam & Semak -->
        <div class="phrase-actions">
          <button id="btn-format-c-clear" class="btn btn-secondary btn-sm" disabled>
            ✕ Padam Pilihan
          </button>
          <button id="btn-format-c-check" class="btn btn-primary btn-sm" disabled>
            ✓ SEMAK JAWAPAN
          </button>
        </div>
      </div>
    `;

    updateFormatCUI(q);

    // Listener Butang Padam (Padam slot terakhir yang terisi)
    const btnClear = document.getElementById("btn-format-c-clear");
    if (btnClear) {
      btnClear.addEventListener("click", () => {
        if (state.isAnswerLocked) return;
        SoundSystem.playPop();
        for (let i = state.formatCSlots.length - 1; i >= 0; i--) {
          if (state.formatCSlots[i] !== "") {
            state.formatCSlots[i] = "";
            break;
          }
        }
        updateFormatCUI(q);
      });
    }

    // Listener Butang Semak Jawapan
    const btnCheck = document.getElementById("btn-format-c-check");
    if (btnCheck) {
      btnCheck.addEventListener("click", () => {
        handleFormatCCheck(q);
      });
    }

    // Listener Klik pada Setiap Slot (Keluarkan perkataan dan anjakkan baki perkataan)
    for (let i = 0; i < wordCount; i++) {
      const slotEl = document.getElementById(`slot-${i}`);
      if (slotEl) {
        slotEl.addEventListener("click", () => {
          if (state.isAnswerLocked || !state.formatCSlots[i]) return;
          SoundSystem.playPop();
          state.formatCSlots.splice(i, 1);
          state.formatCSlots.push(""); // Kekalkan panjang array slot
          updateFormatCUI(q);
        });
      }
    }
  }

  function updateFormatCUI(q) {
    const wordCount = q.targetOrder.length;
    const wordBankBox = document.getElementById("word-bank-box");
    const btnClear = document.getElementById("btn-format-c-clear");
    const btnCheck = document.getElementById("btn-format-c-check");

    // Kemas kini setiap slot paparan
    for (let i = 0; i < wordCount; i++) {
      const slot = document.getElementById(`slot-${i}`);
      if (slot) {
        if (state.formatCSlots[i]) {
          slot.innerHTML = `<span lang="ar" dir="rtl">${state.formatCSlots[i]}</span>`;
          slot.classList.add("filled");
        } else {
          let placeholderText = "";
          if (wordCount === 2) {
            placeholderText = i === 0 ? "Perkataan 1 (Kanan)" : "Perkataan 2 (Kiri)";
          } else {
            if (i === 0) placeholderText = "Perkataan 1 (Kanan)";
            else if (i === 1) placeholderText = "Perkataan 2 (Tengah)";
            else placeholderText = "Perkataan 3 (Kiri)";
          }
          slot.innerHTML = `<span class="phrase-slot-placeholder">${placeholderText}</span>`;
          slot.classList.remove("filled");
        }
      }
    }

    // Kemas kini Kad Word Bank
    if (wordBankBox) {
      wordBankBox.innerHTML = "";
      state.formatCAvailable.forEach(word => {
        const isUsed = state.formatCSlots.includes(word);
        const cardBtn = document.createElement("button");
        cardBtn.className = "btn-word-card";
        cardBtn.disabled = isUsed || state.isAnswerLocked;
        cardBtn.innerHTML = `<span lang="ar" dir="rtl">${word}</span>`;
        cardBtn.addEventListener("click", () => {
          if (state.isAnswerLocked) return;
          SoundSystem.playPop();
          const firstEmptyIndex = state.formatCSlots.indexOf("");
          if (firstEmptyIndex !== -1) {
            state.formatCSlots[firstEmptyIndex] = word;
            updateFormatCUI(q);
          }
        });
        wordBankBox.appendChild(cardBtn);
      });
    }

    const hasAnyWord = state.formatCSlots.some(w => w !== "");
    const isAllFilled = state.formatCSlots.every(w => w !== "");

    if (btnClear) btnClear.disabled = !hasAnyWord || state.isAnswerLocked;
    if (btnCheck) btnCheck.disabled = !isAllFilled || state.isAnswerLocked;
  }

  function handleFormatCCheck(q) {
    if (state.isAnswerLocked) return;
    state.isAnswerLocked = true;

    const wordCount = q.targetOrder.length;
    // Cantumkan perkataan mengikut urutan slot
    const formedPhrase = state.formatCSlots.join(" ").trim();
    const targetPhrase = q.targetOrder.join(" ").trim();
    const isCorrect = formedPhrase === targetPhrase;

    const btnClear = document.getElementById("btn-format-c-clear");
    const btnCheck = document.getElementById("btn-format-c-check");

    if (btnClear) btnClear.disabled = true;
    if (btnCheck) btnCheck.disabled = true;

    // Berikan maklum balas visual pada setiap slot
    for (let i = 0; i < wordCount; i++) {
      const slot = document.getElementById(`slot-${i}`);
      if (slot) {
        if (isCorrect) {
          slot.classList.add("correct-choice");
        } else {
          slot.classList.add("wrong-choice");
        }
      }
    }

    if (isCorrect) {
      state.score += q.points;
      state.correctCount += 1;
      SoundSystem.playCorrect();
      showFeedback(true, "Hebat! Susunan Perkataan Betul!", q.explanation);
    } else {
      SoundSystem.playWrong();
      showFeedback(
        false, 
        "Kurang Tepat", 
        `Susunan yang betul ialah: ${targetPhrase}. (${q.explanation})`
      );
    }

    // Rekod jawapan
    state.history.push({
      questionId: q.id,
      format: q.format,
      formatName: q.formatName,
      instruction: q.instruction,
      promptText: q.promptMalay,
      userChoice: formedPhrase,
      correctAnswer: targetPhrase,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    // Kemas kini markah
    const scoreValEl = document.getElementById("current-score-val");
    if (scoreValEl) scoreValEl.textContent = state.score;
  }

  // --------------------------------------------------------------------------
  // FORMAT D — MISI PEMERHATI (Soalan 16 - 20)
  // --------------------------------------------------------------------------
  function renderFormatD(q, container) {
    const graphicHtml = ASSETS[q.graphicKey] || "";
    const shuffledOptions = shuffleArray(q.options);

    container.innerHTML = `
      <div class="graphic-box">
        ${graphicHtml}
      </div>
      <div class="options-grid">
        ${shuffledOptions.map(opt => `
          <button class="btn-option arabic-option" data-option="${opt}">
            <span lang="ar" dir="rtl">${opt}</span>
          </button>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".btn-option").forEach(btn => {
      btn.addEventListener("click", () => {
        handleChoice(q, btn.getAttribute("data-option"), btn);
      });
    });
  }

  // ==========================================================================
  // 7. PENGENDALIAN PILIHAN JAWAPAN (FORMAT A, B, D)
  // ==========================================================================
  function handleChoice(q, selectedOption, clickedBtn) {
    if (state.isAnswerLocked) return;
    state.isAnswerLocked = true;

    const isCorrect = selectedOption === q.answer;
    const allButtons = document.querySelectorAll(".btn-option");

    // Kunci semua butang pilihan
    allButtons.forEach(btn => {
      btn.disabled = true;
      const optVal = btn.getAttribute("data-option");
      if (optVal === q.answer) {
        btn.classList.add("revealed-correct");
      }
    });

    if (isCorrect) {
      state.score += q.points;
      state.correctCount += 1;
      clickedBtn.classList.remove("revealed-correct");
      clickedBtn.classList.add("correct-choice");
      SoundSystem.playCorrect();
      showFeedback(true, "Tahniah! Jawapan Betul!", q.explanation);
    } else {
      clickedBtn.classList.add("wrong-choice");
      SoundSystem.playWrong();
      showFeedback(
        false, 
        "Jawapan Kurang Tepat", 
        `Jawapan yang betul ialah: ${q.answer}. ${q.explanation}`
      );
    }

    // Rekod jawapan
    state.history.push({
      questionId: q.id,
      format: q.format,
      formatName: q.formatName,
      instruction: q.instruction,
      promptText: q.promptArabic || q.graphicLabel || q.instruction,
      userChoice: selectedOption,
      correctAnswer: q.answer,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    // Kemas kini markah
    const scoreValEl = document.getElementById("current-score-val");
    if (scoreValEl) scoreValEl.textContent = state.score;
  }

  // ==========================================================================
  // 8. MAKLUM BALAS SEGERA & BUTANG SETERUSNYA
  // ==========================================================================
  function showFeedback(isSuccess, title, desc) {
    const feedbackPanel = document.getElementById("feedback-panel");
    const feedbackIcon = document.getElementById("feedback-icon");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackDesc = document.getElementById("feedback-desc");

    if (!feedbackPanel) return;

    feedbackPanel.className = `feedback-panel ${isSuccess ? "success" : "error"}`;
    if (feedbackIcon) feedbackIcon.textContent = isSuccess ? "🌟" : "💡";
    if (feedbackTitle) feedbackTitle.textContent = title;
    if (feedbackDesc) feedbackDesc.textContent = desc;
    feedbackPanel.style.display = "flex";

    // Skrol perlahan ke maklum balas jika pada skrin kecil
    feedbackPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function handleNextQuestion() {
    SoundSystem.playPop();
    const nextIndex = state.currentQuestionIndex + 1;

    // Semak pencapaian kecil setiap 5 soalan (selepas soalan 5, 10, 15)
    if (nextIndex === 5 || nextIndex === 10 || nextIndex === 15) {
      showAchievementModal(nextIndex);
    } else {
      loadQuestion(nextIndex);
    }
  }

  // Modal Pencapaian Kecil (Milestone)
  function showAchievementModal(completedCount) {
    SoundSystem.playMilestone();
    const modal = document.getElementById("modal-achievement");
    const title = document.getElementById("achievement-title");
    const desc = document.getElementById("achievement-desc");

    if (title) title.textContent = `Hebat! ${completedCount} Soalan Berjaya!`;
    if (desc) {
      if (completedCount === 5) {
        desc.textContent = "Format Kenali Gambar selesai! Sekarang masa menguji maksud perkataan!";
      } else if (completedCount === 10) {
        desc.textContent = "Separuh jalan telah dilalui! Mari mulakan cabaran menyusun perkataan Arab!";
      } else if (completedCount === 15) {
        desc.textContent = "Tahniah! 15 soalan telah berjaya! Teruskan 5 soalan susunan perkataan terakhir!";
      }
    }

    if (modal) modal.style.display = "flex";
  }

  // ==========================================================================
  // 9. HALAMAN KEPUTUSAN (TAMAT PERMAINAN)
  // ==========================================================================
  function finishGame() {
    state.endTime = Date.now();
    state.durationSeconds = Math.max(1, Math.round((state.endTime - state.startTime) / 1000));

    // Kemas kini Elemen Keputusan
    const finalScoreEl = document.getElementById("final-score-val");
    const finalCorrectEl = document.getElementById("final-correct-val");
    const finalPercentEl = document.getElementById("final-percent-val");
    const finalTimeEl = document.getElementById("final-time-val");
    const resultCommentEl = document.getElementById("result-comment");
    const starsContainer = document.getElementById("result-stars");
    const resultNameEl = document.getElementById("result-student-name");
    const resultClassEl = document.getElementById("result-student-class");

    if (finalScoreEl) finalScoreEl.textContent = state.score;
    if (finalCorrectEl) finalCorrectEl.textContent = state.correctCount;
    if (finalPercentEl) finalPercentEl.textContent = `${Math.round((state.score / CONFIG.MAX_SCORE) * 100)}%`;
    if (finalTimeEl) finalTimeEl.textContent = formatDuration(state.durationSeconds);
    if (resultNameEl) resultNameEl.textContent = state.studentName;
    if (resultClassEl) resultClassEl.textContent = state.studentClass;

    // Kategori Bintang & Ulasan
    let starsHtml = "";
    let comment = "";

    if (state.score >= 90) {
      starsHtml = `<span class="star-item">⭐</span><span class="star-item">⭐</span><span class="star-item">⭐</span>`;
      comment = "Hebat! Kamu juara Bahasa Arab!";
      Confetti.start();
      SoundSystem.playVictory();
    } else if (state.score >= 70) {
      starsHtml = `<span class="star-item">⭐</span><span class="star-item">⭐</span>`;
      comment = "Bagus! Teruskan usaha!";
      SoundSystem.playMilestone();
    } else if (state.score >= 50) {
      starsHtml = `<span class="star-item">⭐</span>`;
      comment = "Usaha yang baik. Cuba lagi!";
      SoundSystem.playPop();
    } else {
      starsHtml = `<span class="star-item">🌱</span>`;
      comment = "Jangan putus asa. Terus belajar!";
      SoundSystem.playPop();
    }

    if (starsContainer) starsContainer.innerHTML = starsHtml;
    if (resultCommentEl) resultCommentEl.textContent = comment;

    showScreen("screen-result");

    // Hantar markah ke Google Apps Script backend
    submitScoreToBackend();
  }

  function formatDuration(totalSeconds) {
    if (totalSeconds < 60) {
      return `${totalSeconds} saat`;
    }
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins} min ${secs} saat`;
  }

  // ==========================================================================
  // 10. INTEGRASI LEADERBOARD GOOGLE SHEETS
  // ==========================================================================
  async function submitScoreToBackend() {
    const syncCard = document.getElementById("sync-status-card");
    const syncIcon = document.getElementById("sync-icon");
    const syncTitle = document.getElementById("sync-title");
    const syncDesc = document.getElementById("sync-desc");
    const btnRetry = document.getElementById("btn-retry-sync");

    if (!syncCard) return;

    // Semak sama ada URL Google Apps Script telah ditetapkan
    if (!CONFIG.GOOGLE_APPS_SCRIPT_URL || CONFIG.GOOGLE_APPS_SCRIPT_URL.trim() === "") {
      syncCard.className = "sync-status-card status-pending";
      if (syncIcon) syncIcon.textContent = "ℹ️";
      if (syncTitle) syncTitle.textContent = "Google Apps Script Belum Dikonfigurasi";
      if (syncDesc) syncDesc.textContent = "Sila masukkan URL Web App Google Apps Script ke dalam config.js untuk menyimpan rekod di Google Sheets.";
      if (btnRetry) btnRetry.style.display = "none";
      return;
    }

    // Status: Sedang Menghantar
    syncCard.className = "sync-status-card status-pending";
    if (syncIcon) syncIcon.textContent = "⏳";
    if (syncTitle) syncTitle.textContent = "Menghantar keputusan...";
    if (syncDesc) syncDesc.textContent = "Sila tunggu sementara markah direkodkan ke Google Sheets.";
    if (btnRetry) btnRetry.style.display = "none";

    const payload = {
      action: "submitScore",
      nama: state.studentName,
      kelas: state.studentClass,
      markah: state.score,
      jawapanBetul: state.correctCount,
      jumlahSoalan: CONFIG.TOTAL_QUESTIONS,
      masa: state.durationSeconds,
      attemptId: state.attemptId
    };

    try {
      // Menggunakan POST dengan text/plain bagi mengelakkan isu CORS preflight dengan Google Apps Script
      const response = await fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result && result.status === "success") {
        syncCard.className = "sync-status-card status-success";
        if (syncIcon) syncIcon.textContent = "✅";
        if (syncTitle) syncTitle.textContent = "Keputusan berjaya direkodkan!";
        if (syncDesc) syncDesc.textContent = "Markah kamu telah disimpan di Google Sheets.";
        if (btnRetry) btnRetry.style.display = "none";
      } else {
        throw new Error((result && result.message) || "Gagal menyimpan keputusan.");
      }
    } catch (err) {
      // Sandaran penghantaran GET jika POST disekat
      try {
        const queryParams = new URLSearchParams({
          action: "submitScore",
          nama: state.studentName,
          kelas: state.studentClass,
          markah: String(state.score),
          jawapanBetul: String(state.correctCount),
          jumlahSoalan: String(CONFIG.TOTAL_QUESTIONS),
          masa: String(state.durationSeconds),
          attemptId: state.attemptId
        });
        const getUrl = `${CONFIG.GOOGLE_APPS_SCRIPT_URL}?${queryParams.toString()}`;
        const getRes = await fetch(getUrl);
        const getResult = await getRes.json();

        if (getResult && getResult.status === "success") {
          syncCard.className = "sync-status-card status-success";
          if (syncIcon) syncIcon.textContent = "✅";
          if (syncTitle) syncTitle.textContent = "Keputusan berjaya direkodkan!";
          if (syncDesc) syncDesc.textContent = "Markah kamu telah disimpan di Google Sheets.";
          if (btnRetry) btnRetry.style.display = "none";
          return;
        }
      } catch (getErr) {
        // Kegagalan mutlak
      }

      syncCard.className = "sync-status-card status-error";
      if (syncIcon) syncIcon.textContent = "❌";
      if (syncTitle) syncTitle.textContent = "Tidak dapat menyimpan keputusan. Cuba lagi.";
      if (syncDesc) syncDesc.textContent = "Semak sambungan internet anda atau hubungi guru.";
      if (btnRetry) {
        btnRetry.style.display = "inline-flex";
        btnRetry.onclick = () => submitScoreToBackend();
      }
    }
  }

  // ==========================================================================
  // 11. MEMUATKAN LEADERBOARD (TOP 10 & 20 TERKINI)
  // ==========================================================================
  async function loadLeaderboard() {
    const modal = document.getElementById("modal-leaderboard");
    const statusBox = document.getElementById("leaderboard-status-box");
    const top10Tbody = document.getElementById("top-10-tbody");
    const recent20Tbody = document.getElementById("recent-20-tbody");
    const top10Empty = document.getElementById("top-10-empty");
    const recent20Empty = document.getElementById("recent-20-empty");
    const lastUpdated = document.getElementById("leaderboard-last-updated");

    if (modal) modal.style.display = "flex";
    if (top10Tbody) top10Tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px;">⏳ Memuatkan data Top 10...</td></tr>`;
    if (recent20Tbody) recent20Tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">⏳ Memuatkan rekod aktiviti...</td></tr>`;
    if (top10Empty) top10Empty.style.display = "none";
    if (recent20Empty) recent20Empty.style.display = "none";
    if (statusBox) statusBox.style.display = "none";

    // Semak sama ada URL Google Apps Script telah ditetapkan
    if (!CONFIG.GOOGLE_APPS_SCRIPT_URL || CONFIG.GOOGLE_APPS_SCRIPT_URL.trim() === "") {
      if (statusBox) {
        statusBox.className = "leaderboard-status info";
        statusBox.textContent = "ℹ️ Pangkalan data Leaderboard belum disambungkan. Sila tetapkan URL Web App Google Apps Script di dalam config.js mengikut panduan di README.md.";
        statusBox.style.display = "block";
      }
      if (top10Tbody) top10Tbody.innerHTML = "";
      if (recent20Tbody) recent20Tbody.innerHTML = "";
      if (top10Empty) {
        top10Empty.innerHTML = `<span class="empty-icon">⚠️</span><p>Sambungan Google Sheets belum ditetapkan.</p>`;
        top10Empty.style.display = "block";
      }
      return;
    }

    try {
      const fetchUrl = `${CONFIG.GOOGLE_APPS_SCRIPT_URL}?action=getLeaderboard&t=${Date.now()}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();

      if (data && data.status === "success") {
        if (lastUpdated) {
          const now = new Date();
          lastUpdated.textContent = `Dikemas kini: ${now.toLocaleTimeString("ms-MY")}`;
        }

        // 1. Paparkan Top 10
        renderTop10(data.top10 || []);

        // 2. Paparkan 20 Terkini
        renderRecent20(data.recent20 || []);
      } else {
        throw new Error((data && data.message) || "Gagal mendapatkan data leaderboard.");
      }
    } catch (err) {
      if (statusBox) {
        statusBox.className = "leaderboard-status error";
        statusBox.textContent = "❌ Tidak dapat memuatkan data dari Google Sheets. Sila pastikan Web App telah dideploy dengan akses 'Anyone' dan sambungan internet aktif.";
        statusBox.style.display = "block";
      }
      if (top10Tbody) top10Tbody.innerHTML = "";
      if (recent20Tbody) recent20Tbody.innerHTML = "";
      if (top10Empty) {
        top10Empty.innerHTML = `<span class="empty-icon">📡</span><p>Data tidak dapat dimuatkan pada masa ini.</p>`;
        top10Empty.style.display = "block";
      }
    }
  }

  function renderTop10(items) {
    const tbody = document.getElementById("top-10-tbody");
    const emptyState = document.getElementById("top-10-empty");
    if (!tbody) return;

    if (!items || items.length === 0) {
      tbody.innerHTML = "";
      if (emptyState) {
        emptyState.innerHTML = `<span class="empty-icon">🎒</span><p>Belum ada murid menyelesaikan misi.</p>`;
        emptyState.style.display = "block";
      }
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    tbody.innerHTML = items.map((item, index) => {
      let badgeClass = "regular";
      let rowClass = "";
      let rankDisplay = index + 1;

      if (index === 0) {
        badgeClass = "gold";
        rowClass = "row-rank-1";
        rankDisplay = "🥇 1";
      } else if (index === 1) {
        badgeClass = "silver";
        rowClass = "row-rank-2";
        rankDisplay = "🥈 2";
      } else if (index === 2) {
        badgeClass = "bronze";
        rowClass = "row-rank-3";
        rankDisplay = "🥉 3";
      }

      return `
        <tr class="${rowClass}">
          <td>
            <span class="rank-badge ${badgeClass}">${rankDisplay}</span>
          </td>
          <td><strong>${escapeHtml(item.nama)}</strong></td>
          <td><span class="class-badge">${escapeHtml(item.kelas || "-")}</span></td>
          <td class="score-cell">${item.markah}/100</td>
          <td>${formatDuration(item.masa)}</td>
        </tr>
      `;
    }).join("");
  }

  function renderRecent20(items) {
    const tbody = document.getElementById("recent-20-tbody");
    const emptyState = document.getElementById("recent-20-empty");
    if (!tbody) return;

    if (!items || items.length === 0) {
      tbody.innerHTML = "";
      if (emptyState) {
        emptyState.innerHTML = `<p>Belum ada rekod percubaan.</p>`;
        emptyState.style.display = "block";
      }
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    tbody.innerHTML = items.map(item => `
      <tr>
        <td>${escapeHtml(item.nama)}</td>
        <td><span class="class-badge">${escapeHtml(item.kelas || "-")}</span></td>
        <td><strong>${item.markah}/100</strong></td>
        <td><span style="color: #059669; font-weight: 800;">✓ Selesai</span></td>
      </tr>
    `).join("");
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ==========================================================================
  // 12. HALAMAN SEMAKAN JAWAPAN (REVIEW)
  // ==========================================================================
  function showReviewScreen() {
    SoundSystem.playPop();
    const listContainer = document.getElementById("review-list-container");
    if (!listContainer) return;

    listContainer.innerHTML = state.history.map((item, idx) => `
      <div class="review-item ${item.isCorrect ? "is-correct" : "is-wrong"}">
        <div class="review-item-header">
          <span class="review-q-num">Soalan ${idx + 1} (${item.formatName})</span>
          <span class="review-badge ${item.isCorrect ? "correct" : "wrong"}">
            ${item.isCorrect ? "✓ BETUL (+5)" : "✕ SALAH (0)"}
          </span>
        </div>

        <div class="review-instruction">${escapeHtml(item.instruction)}</div>

        <div class="review-answers-grid">
          <div class="review-ans-col">
            <span class="review-ans-label">Jawapan Kamu:</span>
            <span class="review-ans-val ${item.isCorrect ? "" : "user-wrong"}">
              ${escapeHtml(item.userChoice)}
            </span>
          </div>
          <div class="review-ans-col">
            <span class="review-ans-label">Jawapan Betul:</span>
            <span class="review-ans-val correct-val">
              ${escapeHtml(item.correctAnswer)}
            </span>
          </div>
        </div>

        <div class="review-explanation">
          💡 ${escapeHtml(item.explanation)}
        </div>
      </div>
    `).join("");

    showScreen("screen-review");
  }

  // ==========================================================================
  // 13. PENGENDALIAN ACARA & INITIALIZATION
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    SoundSystem.init();
    Confetti.init();

    // Suntik Hero SVG ke Laman Utama
    const heroContainer = document.getElementById("hero-graphic-container");
    if (heroContainer && ASSETS.heroMascot) {
      heroContainer.innerHTML = ASSETS.heroMascot;
    }

    // Butang Suis Bunyi
    const btnSound = document.getElementById("btn-toggle-sound");
    if (btnSound) {
      btnSound.addEventListener("click", () => SoundSystem.toggleMute());
    }

    // Pilihan Kelas (2 Elite & 2 Unggul)
    const classButtons = document.querySelectorAll(".btn-class-card");
    const classHiddenInput = document.getElementById("student-class-input");
    classButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        classButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-checked", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-checked", "true");
        const chosenClass = btn.getAttribute("data-class") || "2 Elite";
        if (classHiddenInput) {
          classHiddenInput.value = chosenClass;
        }
        state.studentClass = chosenClass;
        SoundSystem.playPop();
      });
    });

    // Butang Mula Misi
    const btnStart = document.getElementById("btn-start-game");
    if (btnStart) {
      btnStart.addEventListener("click", startGame);
    }

    // Input Enter untuk Mula Misi
    const nameInput = document.getElementById("student-name-input");
    if (nameInput) {
      nameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          startGame();
        }
      });
    }

    // Butang Soalan Seterusnya
    const btnNext = document.getElementById("btn-next-question");
    if (btnNext) {
      btnNext.addEventListener("click", handleNextQuestion);
    }

    // Butang Teruskan Milestone
    const btnContinueMilestone = document.getElementById("btn-continue-achievement");
    if (btnContinueMilestone) {
      btnContinueMilestone.addEventListener("click", () => {
        const modal = document.getElementById("modal-achievement");
        if (modal) modal.style.display = "none";
        SoundSystem.playPop();
        loadQuestion(state.currentQuestionIndex + 1);
      });
    }

    // Butang Semak Jawapan dari Skrin Keputusan
    const btnReview = document.getElementById("btn-review-answers");
    if (btnReview) {
      btnReview.addEventListener("click", showReviewScreen);
    }

    // Butang Kembali dari Semakan Jawapan
    const btnBack1 = document.getElementById("btn-back-to-results");
    const btnBack2 = document.getElementById("btn-back-to-results-bottom");
    if (btnBack1) btnBack1.addEventListener("click", () => showScreen("screen-result"));
    if (btnBack2) btnBack2.addEventListener("click", () => showScreen("screen-result"));

    // Butang Main Lagi
    const btnPlayAgain = document.getElementById("btn-play-again");
    if (btnPlayAgain) {
      btnPlayAgain.addEventListener("click", () => {
        SoundSystem.playPop();
        Confetti.stop();
        showScreen("screen-welcome");
        if (nameInput) {
          nameInput.value = state.studentName;
          nameInput.focus();
        }
      });
    }

    // Butang Buka Leaderboard
    const btnHeaderLb = document.getElementById("btn-header-leaderboard");
    const btnWelcomeLb = document.getElementById("btn-view-leaderboard-welcome");
    const btnResultLb = document.getElementById("btn-view-leaderboard-result");
    const btnRefreshLb = document.getElementById("btn-refresh-leaderboard");

    if (btnHeaderLb) btnHeaderLb.addEventListener("click", () => { SoundSystem.playPop(); loadLeaderboard(); });
    if (btnWelcomeLb) btnWelcomeLb.addEventListener("click", () => { SoundSystem.playPop(); loadLeaderboard(); });
    if (btnResultLb) btnResultLb.addEventListener("click", () => { SoundSystem.playPop(); loadLeaderboard(); });
    if (btnRefreshLb) btnRefreshLb.addEventListener("click", () => { SoundSystem.playPop(); loadLeaderboard(); });

    // Butang Tutup Leaderboard
    const btnCloseLb = document.getElementById("btn-close-leaderboard");
    const btnCloseLbFooter = document.getElementById("btn-close-leaderboard-footer");
    const modalLb = document.getElementById("modal-leaderboard");

    if (btnCloseLb) btnCloseLb.addEventListener("click", () => { if (modalLb) modalLb.style.display = "none"; SoundSystem.playPop(); });
    if (btnCloseLbFooter) btnCloseLbFooter.addEventListener("click", () => { if (modalLb) modalLb.style.display = "none"; SoundSystem.playPop(); });

    // Tutup Modal jika klik di luar
    if (modalLb) {
      modalLb.addEventListener("click", (e) => {
        if (e.target === modalLb) {
          modalLb.style.display = "none";
          SoundSystem.playPop();
        }
      });
    }
  });

})();
