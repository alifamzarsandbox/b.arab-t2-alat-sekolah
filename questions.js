/**
 * MISI BAHASA ARAB — DUNIA ALAT SEKOLAH
 * Bank 20 Soalan Interaktif Tahun 2
 * 
 * Peraturan Ketat:
 * - Hanya 8 kosa kata yang dibenarkan:
 *   1. كِتَابٌ (kitabun) - buku
 *   2. حَقِيبَةٌ (haqibatun) - beg
 *   3. مِمْحَاةٌ (mimhatun) - pemadam
 *   4. مِسْطَرَةٌ (mistorotun) - pembaris
 *   5. قَلَمٌ (qolamun) - pen
 *   6. فِي (fi) - dalam
 *   7. عَلَى (ala) - atas
 *   8. عِنْدِي (indi) - saya ada
 * - Tiada perkataan Arab tambahan.
 * - Tiada frasa Arab melebihi 2 perkataan.
 */

const QUESTIONS_DATA = [
  // ==========================================
  // FORMAT A — KENALI GAMBAR (Soalan 1 - 5)
  // ==========================================
  {
    id: 1,
    format: "A",
    formatName: "Kenali Gambar",
    instruction: "Lihat gambar di bawah. Pilih perkataan Arab yang betul.",
    graphicKey: "book",
    graphicLabel: "Buku",
    options: ["كِتَابٌ", "حَقِيبَةٌ", "مِمْحَاةٌ", "قَلَمٌ"],
    answer: "كِتَابٌ",
    explanation: "Betul! كِتَابٌ (kitabun) bermaksud buku.",
    points: 5
  },
  {
    id: 2,
    format: "A",
    formatName: "Kenali Gambar",
    instruction: "Lihat gambar di bawah. Pilih perkataan Arab yang betul.",
    graphicKey: "bag",
    graphicLabel: "Beg",
    options: ["مِسْطَرَةٌ", "حَقِيبَةٌ", "كِتَابٌ", "قَلَمٌ"],
    answer: "حَقِيبَةٌ",
    explanation: "Tahniah! حَقِيبَةٌ (haqibatun) bermaksud beg.",
    points: 5
  },
  {
    id: 3,
    format: "A",
    formatName: "Kenali Gambar",
    instruction: "Lihat gambar di bawah. Pilih perkataan Arab yang betul.",
    graphicKey: "eraser",
    graphicLabel: "Pemadam",
    options: ["كِتَابٌ", "مِسْطَرَةٌ", "مِمْحَاةٌ", "حَقِيبَةٌ"],
    answer: "مِمْحَاةٌ",
    explanation: "Hebat! مِمْحَاةٌ (mimhatun) bermaksud pemadam.",
    points: 5
  },
  {
    id: 4,
    format: "A",
    formatName: "Kenali Gambar",
    instruction: "Lihat gambar di bawah. Pilih perkataan Arab yang betul.",
    graphicKey: "ruler",
    graphicLabel: "Pembaris",
    options: ["مِسْطَرَةٌ", "قَلَمٌ", "مِمْحَاةٌ", "كِتَابٌ"],
    answer: "مِسْطَرَةٌ",
    explanation: "Tepat sekali! مِسْطَرَةٌ (mistorotun) bermaksud pembaris.",
    points: 5
  },
  {
    id: 5,
    format: "A",
    formatName: "Kenali Gambar",
    instruction: "Lihat gambar di bawah. Pilih perkataan Arab yang betul.",
    graphicKey: "pen",
    graphicLabel: "Pen",
    options: ["حَقِيبَةٌ", "كِتَابٌ", "مِسْطَرَةٌ", "قَلَمٌ"],
    answer: "قَلَمٌ",
    explanation: "Bagus! قَلَمٌ (qolamun) bermaksud pen.",
    points: 5
  },

  // ==========================================
  // FORMAT B — PILIH MAKSUD (Soalan 6 - 10)
  // ==========================================
  {
    id: 6,
    format: "B",
    formatName: "Pilih Maksud",
    instruction: "Apakah maksud perkataan Arab ini dalam Bahasa Melayu?",
    promptArabic: "كِتَابٌ",
    options: ["Buku", "Beg", "Pemadam", "Pen"],
    answer: "Buku",
    explanation: "كِتَابٌ (kitabun) bermaksud buku.",
    points: 5
  },
  {
    id: 7,
    format: "B",
    formatName: "Pilih Maksud",
    instruction: "Apakah maksud perkataan Arab ini dalam Bahasa Melayu?",
    promptArabic: "حَقِيبَةٌ",
    options: ["Pembaris", "Beg", "Pen", "Buku"],
    answer: "Beg",
    explanation: "حَقِيبَةٌ (haqibatun) bermaksud beg.",
    points: 5
  },
  {
    id: 8,
    format: "B",
    formatName: "Pilih Maksud",
    instruction: "Apakah maksud perkataan Arab ini dalam Bahasa Melayu?",
    promptArabic: "فِي",
    options: ["Dalam", "Atas", "Saya ada", "Buku"],
    answer: "Dalam",
    explanation: "فِي (fi) bermaksud dalam.",
    points: 5
  },
  {
    id: 9,
    format: "B",
    formatName: "Pilih Maksud",
    instruction: "Apakah maksud perkataan Arab ini dalam Bahasa Melayu?",
    promptArabic: "عَلَى",
    options: ["Dalam", "Atas", "Saya ada", "Pembaris"],
    answer: "Atas",
    explanation: "عَلَى (ala) bermaksud atas.",
    points: 5
  },
  {
    id: 10,
    format: "B",
    formatName: "Pilih Maksud",
    instruction: "Apakah maksud perkataan Arab ini dalam Bahasa Melayu?",
    promptArabic: "عِنْدِي",
    options: ["Saya ada", "Dalam", "Atas", "Pen"],
    answer: "Saya ada",
    explanation: "عِنْدِي (indi) bermaksud saya ada.",
    points: 5
  },

  // ========================================================
  // FORMAT C — SUSUN PERKATAAN (Soalan 11 - 20)
  // Susun perkataan Arab berdasarkan gambar & petunjuk BM
  // Struktur:
  // A. Ayat "Saya ada" (2 perkataan): عِنْدِي + kata nama (tanwin dhommah)
  // B. Ayat kedudukan objek (3 perkataan): Kata nama ال (ـُ) + فِي / عَلَى + Kata nama ال (ـِ)
  // ========================================================
  {
    id: 11,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Saya ada buku.",
    graphicKey: "book",
    graphicLabel: "Sebuah buku",
    words: ["كِتَابٌ", "عِنْدِي"],
    targetOrder: ["عِنْدِي", "كِتَابٌ"],
    answer: "عِنْدِي كِتَابٌ",
    explanation: "عِنْدِي كِتَابٌ bermaksud 'Saya ada buku'.",
    points: 5
  },
  {
    id: 12,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Saya ada beg.",
    graphicKey: "bag",
    graphicLabel: "Sebuah beg",
    words: ["حَقِيبَةٌ", "عِنْدِي"],
    targetOrder: ["عِنْدِي", "حَقِيبَةٌ"],
    answer: "عِنْدِي حَقِيبَةٌ",
    explanation: "عِنْدِي حَقِيبَةٌ bermaksud 'Saya ada beg'.",
    points: 5
  },
  {
    id: 13,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Buku itu di dalam beg.",
    graphicKey: "scene_book_in_bag",
    graphicLabel: "Buku di dalam beg",
    words: ["الحَقِيبَةِ", "الكِتَابُ", "فِي"],
    targetOrder: ["الكِتَابُ", "فِي", "الحَقِيبَةِ"],
    answer: "الكِتَابُ فِي الحَقِيبَةِ",
    explanation: "الكِتَابُ فِي الحَقِيبَةِ bermaksud 'Buku itu di dalam beg'.",
    points: 5
  },
  {
    id: 14,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Pen itu di atas buku.",
    graphicKey: "scene_pen_on_book",
    graphicLabel: "Pen di atas buku",
    words: ["الكِتَابِ", "القَلَمُ", "عَلَى"],
    targetOrder: ["القَلَمُ", "عَلَى", "الكِتَابِ"],
    answer: "القَلَمُ عَلَى الكِتَابِ",
    explanation: "القَلَمُ عَلَى الكِتَابِ bermaksud 'Pen itu di atas buku'.",
    points: 5
  },
  {
    id: 15,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Saya ada pemadam.",
    graphicKey: "eraser",
    graphicLabel: "Sebuah pemadam",
    words: ["مِمْحَاةٌ", "عِنْدِي"],
    targetOrder: ["عِنْدِي", "مِمْحَاةٌ"],
    answer: "عِنْدِي مِمْحَاةٌ",
    explanation: "عِنْدِي مِمْحَاةٌ bermaksud 'Saya ada pemadam'.",
    points: 5
  },
  {
    id: 16,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Pembaris itu di dalam beg.",
    graphicKey: "scene_ruler_in_bag",
    graphicLabel: "Pembaris di dalam beg",
    words: ["الحَقِيبَةِ", "المِسْطَرَةُ", "فِي"],
    targetOrder: ["المِسْطَرَةُ", "فِي", "الحَقِيبَةِ"],
    answer: "المِسْطَرَةُ فِي الحَقِيبَةِ",
    explanation: "المِسْطَرَةُ فِي الحَقِيبَةِ bermaksud 'Pembaris itu di dalam beg'.",
    points: 5
  },
  {
    id: 17,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Buku itu di atas beg.",
    graphicKey: "scene_book_on_bag",
    graphicLabel: "Buku di atas beg",
    words: ["الحَقِيبَةِ", "الكِتَابُ", "عَلَى"],
    targetOrder: ["الكِتَابُ", "عَلَى", "الحَقِيبَةِ"],
    answer: "الكِتَابُ عَلَى الحَقِيبَةِ",
    explanation: "الكِتَابُ عَلَى الحَقِيبَةِ bermaksud 'Buku itu di atas beg'.",
    points: 5
  },
  {
    id: 18,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Saya ada pembaris.",
    graphicKey: "ruler",
    graphicLabel: "Sebatang pembaris",
    words: ["مِسْطَرَةٌ", "عِنْدِي"],
    targetOrder: ["عِنْدِي", "مِسْطَرَةٌ"],
    answer: "عِنْدِي مِسْطَرَةٌ",
    explanation: "عِنْدِي مِسْطَرَةٌ bermaksud 'Saya ada pembaris'.",
    points: 5
  },
  {
    id: 19,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Pemadam itu di dalam beg.",
    graphicKey: "scene_eraser_in_bag",
    graphicLabel: "Pemadam di dalam beg",
    words: ["الحَقِيبَةِ", "المِمْحَاةُ", "فِي"],
    targetOrder: ["المِمْحَاةُ", "فِي", "الحَقِيبَةِ"],
    answer: "المِمْحَاةُ فِي الحَقِيبَةِ",
    explanation: "المِمْحَاةُ فِي الحَقِيبَةِ bermaksud 'Pemadam itu di dalam beg'.",
    points: 5
  },
  {
    id: 20,
    format: "C",
    formatName: "Susun Perkataan",
    instruction: "Susun perkataan Arab di bawah berdasarkan gambar dan petunjuk:",
    promptMalay: "Pen itu di atas beg.",
    graphicKey: "scene_pen_on_bag",
    graphicLabel: "Pen di atas beg",
    words: ["الحَقِيبَةِ", "القَلَمُ", "عَلَى"],
    targetOrder: ["القَلَمُ", "عَلَى", "الحَقِيبَةِ"],
    answer: "القَلَمُ عَلَى الحَقِيبَةِ",
    explanation: "القَلَمُ عَلَى الحَقِيبَةِ bermaksud 'Pen itu di atas beg'.",
    points: 5
  }
];
