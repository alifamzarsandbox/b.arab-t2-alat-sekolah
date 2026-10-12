/**
 * MISI BAHASA ARAB — DUNIA ALAT SEKOLAH
 * Konfigurasi Utama Permainan
 */

const CONFIG = {
  // Masukkan URL Google Apps Script Web App yang telah dideploy di sini.
  // Contoh: "https://script.google.com/macros/s/AKfycbyPI1IrwPEjQXL6SVo6zSrJdWhiRTI0eryTQtcRI8EQUcwY0tGt91GlP_RzSN7ajlj6/exec"
  // Biarkan kosong jika Web App belum dideploy; sistem akan memaklumkan status kepada murid dengan mesra.
  GOOGLE_APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyPI1IrwPEjQXL6SVo6zSrJdWhiRTI0eryTQtcRI8EQUcwY0tGt91GlP_RzSN7ajlj6/exec",

  // Parameter Permainan
  TOTAL_QUESTIONS: 20,
  POINTS_PER_QUESTION: 5,
  MAX_SCORE: 100,

  // Senarai Kosa Kata Rasmi (Hanya 8 perkataan dibenarkan)
  VOCABULARY: [
    { arabic: "كِتَابٌ", transliteration: "kitabun", malay: "buku", type: "noun" },
    { arabic: "حَقِيبَةٌ", transliteration: "haqibatun", malay: "beg", type: "noun" },
    { arabic: "مِمْحَاةٌ", transliteration: "mimhatun", malay: "pemadam", type: "noun" },
    { arabic: "مِسْطَرَةٌ", transliteration: "mistorotun", malay: "pembaris", type: "noun" },
    { arabic: "قَلَمٌ", transliteration: "qolamun", malay: "pen", type: "noun" },
    { arabic: "فِي", transliteration: "fi", malay: "dalam", type: "preposition" },
    { arabic: "عَلَى", transliteration: "ala", malay: "atas", type: "preposition" },
    { arabic: "عِنْدِي", transliteration: "indi", malay: "saya ada", type: "phrase" }
  ]
};
