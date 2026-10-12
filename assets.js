/**
 * MISI BAHASA ARAB — DUNIA ALAT SEKOLAH
 * Koleksi Ilustrasi Vektor SVG (Mesra Kanak-kanak & Beresolusi Tinggi)
 */

const ASSETS = {
  /**
   * 1. BUKU (كِتَابٌ - kitabun)
   */
  book: `
    <svg viewBox="0 0 200 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Buku">
      <defs>
        <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="bookPages" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#0f172a" flood-opacity="0.15"/>
        </filter>
      </defs>
      <!-- Shadow base -->
      <ellipse cx="100" cy="175" rx="70" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Main Book Body -->
      <g filter="url(#shadow)">
        <!-- Back cover edge -->
        <rect x="36" y="38" width="128" height="126" rx="14" fill="#0369a1"/>
        <!-- Paper Pages block -->
        <rect x="42" y="44" width="120" height="114" rx="10" fill="url(#bookPages)"/>
        <!-- Page lines detail -->
        <line x1="160" y1="50" x2="160" y2="152" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="156" y1="50" x2="156" y2="152" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Front Cover -->
        <rect x="34" y="42" width="124" height="116" rx="12" fill="url(#bookCover)"/>
        <!-- Spine -->
        <path d="M 34 42 Q 30 100 34 158 Q 42 158 44 100 Q 42 42 34 42 Z" fill="#0284c7"/>
        <!-- Decorative Bookmark Ribbon -->
        <path d="M 125 42 L 125 90 L 115 80 L 105 90 L 105 42 Z" fill="#f43f5e"/>
        <!-- Cover Emblem / Star -->
        <circle cx="95" cy="100" r="26" fill="#fef08a" stroke="#facc15" stroke-width="3"/>
        <polygon points="95,84 99,94 109,95 101,102 104,112 95,106 86,112 89,102 81,95 91,94" fill="#eab308"/>
        <!-- Subtle stripes on cover -->
        <line x1="50" y1="135" x2="140" y2="135" stroke="#bae6fd" stroke-width="4" stroke-linecap="round"/>
        <line x1="50" y1="145" x2="110" y2="145" stroke="#bae6fd" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  /**
   * 2. BEG (حَقِيبَةٌ - haqibatun)
   */
  bag: `
    <svg viewBox="0 0 200 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beg">
      <defs>
        <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#be123c"/>
        </linearGradient>
        <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fb7185"/>
          <stop offset="100%" stop-color="#e11d48"/>
        </linearGradient>
      </defs>
      <!-- Shadow base -->
      <ellipse cx="100" cy="180" rx="65" ry="10" fill="#cbd5e1" opacity="0.6"/>
      <!-- Top Handle -->
      <path d="M 80 45 C 80 25, 120 25, 120 45" fill="none" stroke="#9f1239" stroke-width="8" stroke-linecap="round"/>
      <!-- Straps behind -->
      <path d="M 50 65 Q 40 100 48 150" fill="none" stroke="#881337" stroke-width="10" stroke-linecap="round"/>
      <path d="M 150 65 Q 160 100 152 150" fill="none" stroke="#881337" stroke-width="10" stroke-linecap="round"/>
      <!-- Main Backpack Body -->
      <rect x="46" y="45" width="108" height="125" rx="36" fill="url(#bagGrad)"/>
      <!-- Side Pockets -->
      <rect x="38" y="105" width="14" height="40" rx="7" fill="#be123c"/>
      <rect x="148" y="105" width="14" height="40" rx="7" fill="#be123c"/>
      <!-- Front Main Pocket -->
      <rect x="60" y="98" width="80" height="64" rx="20" fill="url(#pocketGrad)" stroke="#f43f5e" stroke-width="2"/>
      <!-- Zipper Track -->
      <path d="M 68 112 Q 100 115 132 112" fill="none" stroke="#fef08a" stroke-width="4" stroke-dasharray="6,4" stroke-linecap="round"/>
      <!-- Zipper Puller -->
      <circle cx="100" cy="113" r="6" fill="#facc15"/>
      <polygon points="98,118 102,118 100,126" fill="#ca8a04"/>
      <!-- Cute Star Badge on Pocket -->
      <polygon points="100,132 103,139 110,140 105,145 106,152 100,148 94,152 95,145 90,140 97,139" fill="#fef08a"/>
      <!-- Top Zipper Track -->
      <path d="M 65 62 Q 100 56 135 62" fill="none" stroke="#fda4af" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  /**
   * 3. PEMADAM (مِمْحَاةٌ - mimhatun)
   */
  eraser: `
    <svg viewBox="0 0 200 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pemadam">
      <defs>
        <linearGradient id="eraserPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f472b6"/>
          <stop offset="100%" stop-color="#db2777"/>
        </linearGradient>
        <linearGradient id="eraserBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <!-- Shadow base -->
      <ellipse cx="100" cy="172" rx="68" ry="10" fill="#cbd5e1" opacity="0.6"/>
      <!-- Eraser Body (Angled 3D Isometric View) -->
      <g transform="rotate(-15 100 100)">
        <!-- Left half: Rubber Pink -->
        <rect x="36" y="65" width="60" height="70" rx="14" fill="url(#eraserPink)"/>
        <!-- Right half: Rubber Blue -->
        <rect x="96" y="65" width="68" height="70" rx="14" fill="url(#eraserBlue)"/>
        <!-- Center Sleeve / Paper Cover -->
        <rect x="68" y="60" width="64" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <!-- Sleeve Stripe -->
        <rect x="74" y="70" width="52" height="14" rx="4" fill="#6366f1"/>
        <line x1="74" y1="96" x2="126" y2="96" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="74" y1="106" x2="116" y2="106" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
        <!-- Smiling face on pink part for kid appeal -->
        <circle cx="54" cy="94" r="3" fill="#831843"/>
        <circle cx="64" cy="94" r="3" fill="#831843"/>
        <path d="M 54 102 Q 59 108 64 102" fill="none" stroke="#831843" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  /**
   * 4. PEMBARIS (مِسْطَرَةٌ - mistorotun)
   */
  ruler: `
    <svg viewBox="0 0 200 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pembaris">
      <defs>
        <linearGradient id="rulerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
      </defs>
      <!-- Shadow base -->
      <ellipse cx="100" cy="175" rx="75" ry="10" fill="#cbd5e1" opacity="0.6"/>
      <!-- Ruler Body (Angled diagonally) -->
      <g transform="rotate(-30 100 100)">
        <!-- Main Ruler Slab -->
        <rect x="20" y="80" width="160" height="42" rx="8" fill="url(#rulerGrad)" stroke="#ca8a04" stroke-width="3"/>
        <!-- Shiny highlight -->
        <rect x="25" y="83" width="150" height="6" rx="3" fill="#fef9c3" opacity="0.8"/>
        <!-- Hanging Hole -->
        <circle cx="34" cy="101" r="5" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
        <!-- Measurement Ticks & Numbers -->
        <!-- Tick 1 -->
        <line x1="50" y1="80" x2="50" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="50" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">1</text>
        <line x1="58" y1="80" x2="58" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 2 -->
        <line x1="66" y1="80" x2="66" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="66" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">2</text>
        <line x1="74" y1="80" x2="74" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 3 -->
        <line x1="82" y1="80" x2="82" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="82" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">3</text>
        <line x1="90" y1="80" x2="90" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 4 -->
        <line x1="98" y1="80" x2="98" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="98" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">4</text>
        <line x1="106" y1="80" x2="106" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 5 -->
        <line x1="114" y1="80" x2="114" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="114" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">5</text>
        <line x1="122" y1="80" x2="122" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 6 -->
        <line x1="130" y1="80" x2="130" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="130" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">6</text>
        <line x1="138" y1="80" x2="138" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 7 -->
        <line x1="146" y1="80" x2="146" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="146" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">7</text>
        <line x1="154" y1="80" x2="154" y2="92" stroke="#713f12" stroke-width="1.5"/>
        <!-- Tick 8 -->
        <line x1="162" y1="80" x2="162" y2="102" stroke="#713f12" stroke-width="2.5"/>
        <text x="162" y="114" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">8</text>
      </g>
    </svg>
  `,

  /**
   * 5. PEN (قَلَمٌ - qolamun)
   */
  pen: `
    <svg viewBox="0 0 200 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen">
      <defs>
        <linearGradient id="penBarrel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="50%" stop-color="#34d399"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
        <linearGradient id="metalTip" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
      </defs>
      <!-- Shadow base -->
      <ellipse cx="100" cy="175" rx="70" ry="10" fill="#cbd5e1" opacity="0.6"/>
      <!-- Angled Pen Body -->
      <g transform="rotate(45 100 100)">
        <!-- Clicker button -->
        <rect x="91" y="22" width="18" height="14" rx="3" fill="#64748b"/>
        <!-- Pen Clip -->
        <path d="M 86 42 L 86 85 Q 86 92 82 92" fill="none" stroke="#64748b" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Upper Barrel -->
        <rect x="88" y="34" width="24" height="60" rx="6" fill="url(#penBarrel)"/>
        <!-- Ergonomic Rubber Grip -->
        <rect x="88" y="94" width="24" height="38" rx="4" fill="#047857"/>
        <line x1="88" y1="102" x2="112" y2="102" stroke="#065f46" stroke-width="2"/>
        <line x1="88" y1="112" x2="112" y2="112" stroke="#065f46" stroke-width="2"/>
        <line x1="88" y1="122" x2="112" y2="122" stroke="#065f46" stroke-width="2"/>
        <!-- Metallic Cone Tip -->
        <polygon points="88,132 112,132 103,165 97,165" fill="url(#metalTip)"/>
        <!-- Ballpoint nib -->
        <circle cx="100" cy="167" r="2.5" fill="#0f172a"/>
      </g>
    </svg>
  `,

  /**
   * 6. SCENE: BUKU DI DALAM BEG (فِي - fi)
   */
  scene_book_in_bag: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Buku di dalam beg">
      <defs>
        <linearGradient id="scBag" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#be123c"/>
        </linearGradient>
      </defs>
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="180" rx="90" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Beg Belakang -->
      <rect x="55" y="60" width="130" height="115" rx="36" fill="#be123c"/>
      <!-- BUKU DI DALAM BEG (Menonjol Keluar Sedikit) -->
      <g transform="translate(75, 20) rotate(-6)">
        <rect x="0" y="0" width="85" height="95" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <rect x="5" y="5" width="75" height="85" rx="8" fill="#38bdf8"/>
        <!-- Bookmark ribbon -->
        <path d="M 60 5 L 60 35 L 53 28 L 46 35 L 46 5 Z" fill="#facc15"/>
        <!-- Star emblem -->
        <circle cx="42" cy="48" r="14" fill="#fef08a"/>
        <polygon points="42,39 44,45 50,45 45,50 47,56 42,52 37,56 39,50 34,45 40,45" fill="#ca8a04"/>
      </g>
      <!-- Beg Depan (Melindungi Buku di Dalam) -->
      <path d="M 50 85 Q 120 100 190 85 L 185 175 Q 120 185 55 175 Z" fill="url(#scBag)"/>
      <!-- Poket Depan Beg -->
      <rect x="75" y="115" width="90" height="50" rx="16" fill="#fb7185" stroke="#f43f5e" stroke-width="2"/>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 150)">
        <rect x="-55" y="-14" width="110" height="24" rx="12" fill="#ffffff" stroke="#f43f5e" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#be123c" text-anchor="middle" dominant-baseline="middle">Buku di DALAM Beg</text>
      </g>
    </svg>
  `,

  /**
   * 7. SCENE: PEN DI ATAS BUKU (عَلَى - ala)
   */
  scene_pen_on_book: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen di atas buku">
      <defs>
        <linearGradient id="scBook" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="175" rx="85" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Buku Terbaring Rata -->
      <g transform="translate(45, 65)">
        <!-- Ketebalan helaian buku -->
        <rect x="4" y="25" width="142" height="65" rx="10" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Kulit Depan Buku -->
        <rect x="0" y="0" width="150" height="80" rx="12" fill="url(#scBook)"/>
        <!-- Garisan Hiasan Kulit -->
        <line x1="20" y1="20" x2="130" y2="20" stroke="#bae6fd" stroke-width="4" stroke-linecap="round"/>
        <circle cx="45" cy="48" r="16" fill="#fef08a"/>
        <polygon points="45,38 47,44 53,44 48,49 50,55 45,51 40,55 42,49 37,44 43,44" fill="#eab308"/>
      </g>
      <!-- PEN DI ATAS BUKU -->
      <g transform="translate(60, 80) rotate(-15)">
        <!-- Bayang pen atas buku -->
        <ellipse cx="60" cy="22" rx="45" ry="5" fill="#0369a1" opacity="0.3"/>
        <!-- Pen Body -->
        <rect x="25" y="8" width="70" height="14" rx="7" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <rect x="20" y="10" width="10" height="10" rx="2" fill="#64748b"/>
        <!-- Mata Pen -->
        <polygon points="95,8 112,15 95,22" fill="#94a3b8"/>
        <circle cx="113" cy="15" r="2" fill="#0f172a"/>
        <!-- Pen Clip -->
        <rect x="35" y="4" width="22" height="4" rx="2" fill="#64748b"/>
      </g>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 165)">
        <rect x="-55" y="-13" width="110" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle" dominant-baseline="middle">Pen di ATAS Buku</text>
      </g>
    </svg>
  `,

  /**
   * 8. SCENE: PEMBARIS DI DALAM BEG (فِي - fi)
   */
  scene_ruler_in_bag: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pembaris di dalam beg">
      <defs>
        <linearGradient id="scBagRuler" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#6d28d9"/>
        </linearGradient>
      </defs>
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="180" rx="85" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Beg Belakang -->
      <rect x="60" y="65" width="120" height="110" rx="34" fill="#5b21b6"/>
      <!-- PEMBARIS DI DALAM BEG (Menonjol Keluar) -->
      <g transform="translate(110, 15) rotate(12)">
        <rect x="0" y="0" width="30" height="110" rx="5" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
        <!-- Ticks -->
        <line x1="0" y1="15" x2="12" y2="15" stroke="#713f12" stroke-width="2"/>
        <line x1="0" y1="28" x2="12" y2="28" stroke="#713f12" stroke-width="2"/>
        <line x1="0" y1="41" x2="12" y2="41" stroke="#713f12" stroke-width="2"/>
        <line x1="0" y1="54" x2="12" y2="54" stroke="#713f12" stroke-width="2"/>
        <line x1="0" y1="67" x2="12" y2="67" stroke="#713f12" stroke-width="2"/>
      </g>
      <!-- Beg Depan -->
      <path d="M 55 90 Q 120 105 185 90 L 180 175 Q 120 185 60 175 Z" fill="url(#scBagRuler)"/>
      <rect x="80" y="120" width="80" height="46" rx="14" fill="#a78bfa" stroke="#8b5cf6" stroke-width="2"/>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 150)">
        <rect x="-65" y="-13" width="130" height="24" rx="12" fill="#ffffff" stroke="#6d28d9" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#5b21b6" text-anchor="middle" dominant-baseline="middle">Pembaris di DALAM Beg</text>
      </g>
    </svg>
  `,

  /**
   * 9. SCENE: PEMADAM DI ATAS PEMBARIS (عَلَى - ala)
   */
  scene_eraser_on_ruler: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pemadam di atas pembaris">
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="165" rx="90" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- PEMBARIS DI BAWAH -->
      <g transform="translate(30, 120)">
        <rect x="0" y="0" width="180" height="32" rx="6" fill="#fde047" stroke="#ca8a04" stroke-width="2.5"/>
        <!-- Centimeter markings -->
        <line x1="20" y1="0" x2="20" y2="14" stroke="#713f12" stroke-width="2"/>
        <line x1="45" y1="0" x2="45" y2="14" stroke="#713f12" stroke-width="2"/>
        <line x1="70" y1="0" x2="70" y2="14" stroke="#713f12" stroke-width="2"/>
        <line x1="95" y1="0" x2="95" y2="14" stroke="#713f12" stroke-width="2"/>
        <line x1="120" y1="0" x2="120" y2="14" stroke="#713f12" stroke-width="2"/>
        <line x1="145" y1="0" x2="145" y2="14" stroke="#713f12" stroke-width="2"/>
        <line x1="165" y1="0" x2="165" y2="14" stroke="#713f12" stroke-width="2"/>
      </g>
      <!-- PEMADAM DI ATAS PEMBARIS -->
      <g transform="translate(85, 68)">
        <!-- Bayang pemadam atas pembaris -->
        <ellipse cx="35" cy="52" rx="30" ry="5" fill="#ca8a04" opacity="0.4"/>
        <!-- Badan Pemadam -->
        <rect x="0" y="8" width="35" height="42" rx="8" fill="#f472b6"/>
        <rect x="35" y="8" width="35" height="42" rx="8" fill="#38bdf8"/>
        <!-- Sleeve -->
        <rect x="18" y="5" width="34" height="48" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="22" y="12" width="26" height="8" rx="2" fill="#6366f1"/>
        <circle cx="10" cy="28" r="2.5" fill="#831843"/>
        <circle cx="20" cy="28" r="2.5" fill="#831843"/>
        <path d="M 11 34 Q 15 38 19 34" fill="none" stroke="#831843" stroke-width="1.5"/>
      </g>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 178)">
        <rect x="-70" y="-12" width="140" height="24" rx="12" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
        <text x="0" y="3" font-size="11" font-weight="bold" fill="#713f12" text-anchor="middle" dominant-baseline="middle">Pemadam di ATAS Pembaris</text>
      </g>
    </svg>
  `,

  /**
   * 10. SCENE: PEN DI DALAM BEG (فِي - fi)
   */
  scene_pen_in_bag: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen di dalam beg">
      <defs>
        <linearGradient id="scBagPen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="180" rx="85" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Beg Belakang -->
      <rect x="60" y="65" width="120" height="110" rx="34" fill="#0369a1"/>
      <!-- PEN DI DALAM BEG (Menonjol Keluar) -->
      <g transform="translate(115, 20) rotate(-10)">
        <rect x="0" y="10" width="16" height="85" rx="6" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <rect x="2" y="0" width="12" height="10" rx="2" fill="#64748b"/>
        <!-- Clip yang tersangkut di bibir beg -->
        <path d="M -3 15 L -3 45 Q -3 50 -6 50" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- Beg Depan -->
      <path d="M 55 90 Q 120 105 185 90 L 180 175 Q 120 185 60 175 Z" fill="url(#scBagPen)"/>
      <rect x="80" y="120" width="80" height="46" rx="14" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 150)">
        <rect x="-55" y="-13" width="110" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle" dominant-baseline="middle">Pen di DALAM Beg</text>
      </g>
    </svg>
  `,

  /**
   * 11. SCENE: BUKU DI ATAS BEG (عَلَى - ala)
   */
  scene_book_on_bag: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Buku di atas beg">
      <defs>
        <linearGradient id="scBagBob" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#be123c"/>
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="120" cy="180" rx="85" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Beg Sekolah Di Bawah -->
      <g transform="translate(50, 75)">
        <rect x="0" y="0" width="140" height="95" rx="28" fill="url(#scBagBob)"/>
        <rect x="25" y="40" width="90" height="45" rx="14" fill="#fb7185" stroke="#f43f5e" stroke-width="2"/>
      </g>
      <!-- BUKU DI ATAS BEG -->
      <g transform="translate(68, 30) rotate(-4)">
        <rect x="0" y="0" width="105" height="62" rx="8" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <rect x="5" y="4" width="95" height="54" rx="6" fill="#38bdf8"/>
        <!-- Star emblem -->
        <circle cx="52" cy="31" r="14" fill="#fef08a"/>
        <polygon points="52,22 55,28 61,28 56,33 58,39 52,35 46,39 48,33 43,28 49,28" fill="#ca8a04"/>
        <path d="M 85 4 L 85 24 L 79 19 L 73 24 L 73 4 Z" fill="#f43f5e"/>
      </g>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 155)">
        <rect x="-60" y="-13" width="120" height="24" rx="12" fill="#ffffff" stroke="#be123c" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#be123c" text-anchor="middle" dominant-baseline="middle">Buku di ATAS Beg</text>
      </g>
    </svg>
  `,

  /**
   * 12. SCENE: PEMADAM DI DALAM BEG (فِي - fi)
   */
  scene_eraser_in_bag: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pemadam di dalam beg">
      <defs>
        <linearGradient id="scBagEib" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#6d28d9"/>
        </linearGradient>
      </defs>
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="180" rx="85" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Beg Belakang -->
      <rect x="60" y="65" width="120" height="110" rx="34" fill="#5b21b6"/>
      <!-- PEMADAM DI DALAM BEG (Menonjol Keluar dari bibir beg) -->
      <g transform="translate(95, 25) rotate(-8)">
        <rect x="0" y="0" width="30" height="65" rx="8" fill="#f472b6"/>
        <rect x="30" y="0" width="26" height="65" rx="8" fill="#38bdf8"/>
        <rect x="12" y="10" width="32" height="45" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="10" cy="20" r="2.5" fill="#831843"/>
        <circle cx="18" cy="20" r="2.5" fill="#831843"/>
        <path d="M 10 26 Q 14 30 18 26" fill="none" stroke="#831843" stroke-width="1.5"/>
      </g>
      <!-- Beg Depan -->
      <path d="M 55 85 Q 120 100 185 85 L 180 175 Q 120 185 60 175 Z" fill="url(#scBagEib)"/>
      <rect x="80" y="115" width="80" height="50" rx="16" fill="#a78bfa" stroke="#8b5cf6" stroke-width="2"/>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 150)">
        <rect x="-65" y="-13" width="130" height="24" rx="12" fill="#ffffff" stroke="#6d28d9" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#5b21b6" text-anchor="middle" dominant-baseline="middle">Pemadam di DALAM Beg</text>
      </g>
    </svg>
  `,

  /**
   * 13. SCENE: PEN DI ATAS BEG (عَلَى - ala)
   */
  scene_pen_on_bag: `
    <svg viewBox="0 0 240 200" class="game-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen di atas beg">
      <defs>
        <linearGradient id="scBagPob" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <!-- Desk Shadow -->
      <ellipse cx="120" cy="180" rx="85" ry="12" fill="#cbd5e1" opacity="0.6"/>
      <!-- Beg Sekolah Di Bawah -->
      <g transform="translate(50, 70)">
        <rect x="0" y="0" width="140" height="100" rx="28" fill="url(#scBagPob)"/>
        <rect x="25" y="45" width="90" height="45" rx="14" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
      </g>
      <!-- PEN DI ATAS BEG -->
      <g transform="translate(65, 45) rotate(-10)">
        <rect x="0" y="8" width="95" height="16" rx="8" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <rect x="-6" y="10" width="10" height="12" rx="2" fill="#64748b"/>
        <!-- Clip pen -->
        <path d="M 15 5 L 45 5 Q 48 5 48 8" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
        <!-- Mata pen -->
        <polygon points="95,8 112,16 95,24" fill="#94a3b8"/>
        <circle cx="113" cy="16" r="2.5" fill="#0f172a"/>
      </g>
      <!-- Label Panduan Visual -->
      <g transform="translate(120, 155)">
        <rect x="-55" y="-13" width="110" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <text x="0" y="2" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle" dominant-baseline="middle">Pen di ATAS Beg</text>
      </g>
    </svg>
  `,

  /**
   * Hero Mascot / Classroom Banner
   */
  heroMascot: `
    <svg viewBox="0 0 320 220" class="hero-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Misi Bahasa Arab Hero">
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#fef08a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <!-- Background Soft Glow -->
      <circle cx="160" cy="110" r="105" fill="url(#sunGlow)"/>
      <!-- Floating Stars & Sparkles -->
      <polygon points="40,40 43,48 51,49 45,55 47,63 40,58 33,63 35,55 29,49 37,48" fill="#facc15"/>
      <polygon points="280,45 282,51 289,52 284,57 286,63 280,59 274,63 276,57 271,52 278,51" fill="#facc15"/>
      <polygon points="70,160 72,165 77,166 73,170 75,175 70,172 65,175 67,170 63,166 68,165" fill="#facc15"/>
      <polygon points="250,150 252,155 257,156 253,160 255,165 250,162 245,165 247,160 243,156 248,155" fill="#facc15"/>
      
      <!-- Central Arrangement of Cute School Tools -->
      <!-- Beg Belakang -->
      <g transform="translate(115, 60) scale(0.65)">
        <rect x="0" y="0" width="108" height="125" rx="36" fill="#f43f5e"/>
        <rect x="14" y="55" width="80" height="60" rx="20" fill="#fb7185"/>
      </g>
      <!-- Buku Senget Kiri -->
      <g transform="translate(50, 75) rotate(-15) scale(0.55)">
        <rect x="0" y="0" width="124" height="116" rx="12" fill="#0284c7"/>
        <rect x="8" y="8" width="108" height="100" rx="8" fill="#38bdf8"/>
        <circle cx="62" cy="58" r="20" fill="#fef08a"/>
      </g>
      <!-- Pembaris Senget Kanan -->
      <g transform="translate(195, 65) rotate(25) scale(0.6)">
        <rect x="0" y="0" width="150" height="38" rx="8" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
        <line x1="20" y1="0" x2="20" y2="15" stroke="#713f12" stroke-width="2"/>
        <line x1="45" y1="0" x2="45" y2="15" stroke="#713f12" stroke-width="2"/>
        <line x1="70" y1="0" x2="70" y2="15" stroke="#713f12" stroke-width="2"/>
        <line x1="95" y1="0" x2="95" y2="15" stroke="#713f12" stroke-width="2"/>
      </g>
      <!-- Pemadam di Hadapan -->
      <g transform="translate(90, 130) rotate(10) scale(0.5)">
        <rect x="0" y="0" width="40" height="50" rx="8" fill="#f472b6"/>
        <rect x="40" y="0" width="40" height="50" rx="8" fill="#38bdf8"/>
        <rect x="20" y="-4" width="40" height="58" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      </g>
      <!-- Pen di Hadapan -->
      <g transform="translate(165, 120) rotate(-35) scale(0.55)">
        <rect x="0" y="0" width="18" height="90" rx="8" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <polygon points="0,90 18,90 9,110" fill="#94a3b8"/>
      </g>
    </svg>
  `
};
