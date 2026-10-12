# MISI BAHASA ARAB — DUNIA ALAT SEKOLAH
### Permainan Kuiz Interaktif Pendidikan Bahasa Arab (Tahun 2 Sekolah Rendah)

Selamat datang ke repositori rasmi **Misi Bahasa Arab: Dunia Alat Sekolah**! Permainan web ini dibina khusus untuk murid Tahun 2 di Malaysia dengan reka bentuk mesra kanak-kanak, animasi interaktif, audio tanpa pergantungan luar, paparan tulisan Arab bersaiz besar (RTL), dan sistem Papan Juara (Leaderboard) awan sebenar berasaskan **Google Sheets** & **Google Apps Script**.

---

## 📑 KANDUNGAN PANDUAN

1. [Ciri-ciri Utama Permainan](#1-ciri-ciri-utama-permainan)
2. [Skop Kosa Kata Rasmi](#2-skop-kosa-kata-rasmi)
3. [Struktur Fail Projek](#3-struktur-fail-projek)
4. [Langkah A: Cara Menjalankan Game Secara Tempatan (Local)](#4-langkah-a-cara-menjalankan-game-secara-tempatan-local)
5. [Langkah B: Cara Menyediakan Google Sheets](#5-langkah-b-cara-menyediakan-google-sheets)
6. [Langkah C: Cara Menyediakan Google Apps Script](#6-langkah-c-cara-menyediakan-google-apps-script)
7. [Langkah D: Mengkonfigurasi Frontend (config.js)](#7-langkah-d-mengkonfigurasi-frontend-configjs)
8. [Langkah E: Cara Menerbitkan di GitHub Pages](#8-langkah-e-cara-menerbitkan-di-github-pages)
9. [Langkah F: Ujian Lengkap Sebelum Digunakan di Kelas](#9-langkah-f-ujian-lengkap-sebelum-digunakan-di-kelas)
10. [Langkah G: Panduan Menyelesaikan Masalah (Troubleshooting)](#10-langkah-g-panduan-menyelesaikan-masalah-troubleshooting)

---

## 1. CIRI-CIRI UTAMA PERMAINAN

- **20 Soalan Interaktif dalam Format Progresif:**
  - **Format A — Kenali Gambar (Soalan 1–5):** Ilustrasi SVG alat sekolah yang jelas dan pilihan perkataan Arab.
  - **Format B — Pilih Maksud (Soalan 6–10):** Kad perkataan Arab bersaiz besar dengan pilihan maksud Bahasa Melayu.
  - **Format C — Susun Perkataan (Soalan 11–20):** Susunan perkataan Arab (2 atau 3 perkataan) berdasarkan gambar dan petunjuk Bahasa Melayu dengan struktur tatabahasa dan baris yang tepat. Dilengkapi butang *Padam*, *Semak Jawapan*, serta mesra telefon pintar dan tablet.
- **Sistem Markah Maksimum 100:** Setiap soalan bernilai 5 markah ($20 \times 5 = 100$).
- **Sintesis Audio Web Audio API:** Bunyi jawapan betul, salah, klik, dan lagu kemenangan dijana secara dalaman tanpa memerlukan fail MP3 luaran. Dilengkapi butang hidup/mati bunyi (Mute).
- **Efek Keraian Visual:** Taburan confetti dan bintang animasi bagi murid yang mencapai markah cemerlang.
- **Papan Juara Sebenar (Google Sheets Leaderboard):**
  - **Top 10 Murid Terbaik:** Disusun mengikut markah tertinggi dan masa terpantas.
  - **20 Percubaan Terkini (Rakan Yang Baru Selesai):** Membolehkan guru memantau murid yang telah selesai menjawab.
  - **Pencegahan Duplikasi & Keselamatan:** Menggunakan ID Percubaan unik (`attemptId`), `LockService`, dan penapisan *Formula Injection*.

---

## 2. SKOP KOSA KATA & STRUKTUR TATABAHASA RASMI

Permainan ini mematuhi ketetapan sukatan pelajaran Tahun 2 dengan **HANYA menggunakan 8 perkataan asas berikut**:

### A. Kata Nama (Alat Sekolah):
1. **كِتَابٌ / الكِتَابُ / الكِتَابِ** — buku
2. **حَقِيبَةٌ / الحَقِيبَةُ / الحَقِيبَةِ** — beg
3. **مِمْحَاةٌ / المِمْحَاةُ** — pemadam
4. **مِسْطَرَةٌ / المِسْطَرَةُ** — pembaris
5. **قَلَمٌ / القَلَمُ** — pen

### B. Kata Tambahan & Kedudukan:
6. **فِي** — dalam
7. **عَلَى** — atas
8. **عِنْدِي** — saya ada

### C. Dua Jenis Struktur Ayat (Soalan 11–20):
1. **Ayat "Saya ada" (2 perkataan):**
   - Struktur: `عِنْدِي` + Kata nama (tanwin dhommah `ـٌ`).
   - Contoh: `عِنْدِي كِتَابٌ` (Saya ada buku), `عِنْدِي حَقِيبَةٌ` (Saya ada beg).
2. **Ayat Kedudukan Objek (3 perkataan):**
   - Struktur: Kata nama bertanda `ال` sebagai subjek (baris dhommah `ـُ`) + `فِي` / `عَلَى` + Kata nama bertanda `ال` (baris kasrah `ـِ`).
   - Contoh: `الكِتَابُ فِي الحَقِيبَةِ` (Buku itu di dalam beg), `القَلَمُ عَلَى الكِتَابِ` (Pen itu di atas buku).

> **PENTING:** Penggunaan `ال` serta perubahan baris akhir (`ـُ` untuk subjek dan `ـِ` selepas kata sendi) adalah penyesuaian tatabahasa Arab definitif yang gramatis, bukannya penambahan kosa kata baharu. Tiada perkataan Arab asing digunakan.

---

## 3. STRUKTUR FAIL PROJEK

```text
AL-ADAWAT DIRASIAH/
├── index.html              # Struktur paparan web permainan utama
├── style.css               # Gaya visual, susun atur responsif & tipografi Arab
├── script.js               # Logik permainan, audio synthesizer, confetti & integrasi API
├── questions.js            # Bank 20 soalan interaktif (Format A, B, C, D)
├── assets.js               # Koleksi grafik vektor SVG (Alat sekolah & pemandangan)
├── config.js               # Fail tetapan URL Google Apps Script & parameter game
├── google-apps-script.gs   # Kod backend untuk disalin ke Google Apps Script
└── README.md               # Panduan lengkap dokumentasi & pemasangan
```

> ⚠️ **PERHATIAN:** Fail `google-apps-script.gs` adalah kod backend Google. Ia **TIDAK AKAN BERFUNGSI** jika hanya dimuat naik ke GitHub Pages. Anda **MESTI** menyalin kod tersebut ke dalam pelayan Google Apps Script seperti yang diterangkan di Langkah C.

---

## 4. LANGKAH A: CARA MENJALANKAN GAME SECARA TEMPATAN (LOCAL)

Anda boleh menguji permainan ini terus di komputer anda tanpa memerlukan sebarang perisian pelayan seperti Node.js atau Apache:

1. Buka folder projek di komputer anda.
2. Klik dua kali pada fail `index.html`.
3. Permainan akan dibuka terus di pelayar web pilihan anda (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).
4. Masukkan nama murid dan tekan **"MULA MISI"** untuk menguji permainan.

---

## 5. LANGKAH B: CARA MENYEDIAKAN GOOGLE SHEETS

1. Buka pelayar web dan layari [Google Sheets](https://sheets.new) untuk mencipta spreadsheet baharu.
2. Namakan spreadsheet anda, contohnya: `Leaderboard Misi Bahasa Arab Tahun 2`.
3. Salin **Spreadsheet ID** daripada bar alamat URL pelayar anda.
   - Contoh URL:
     `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - Dalam contoh di atas, Spreadsheet ID anda ialah:
     `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
4. Simpan Spreadsheet ID ini untuk dimasukkan ke dalam Google Apps Script di Langkah C.

---

## 6. LANGKAH C: CARA MENYEDIAKAN GOOGLE APPS SCRIPT

1. Pada halaman Google Sheets yang baru anda buat tadi, klik menu atas:
   **Extensions** > **Apps Script** (atau **Sambungan** > **Apps Script**).
2. Padam sebarang kod contoh `function myFunction() { ... }` yang ada di dalam editor.
3. Buka fail `google-apps-script.gs` dari folder projek anda, salin **keseluruhan kodnya**, dan tampal ke dalam editor Apps Script.
4. Cari baris kod di bahagian atas:
   ```javascript
   const SPREADSHEET_ID = "MASUKKAN_SPREADSHEET_ID_ANDA_DI_SINI";
   ```
   Gantikan teks di dalam tanda petik dengan **Spreadsheet ID sebenar** yang anda salin di Langkah B.
5. Klik ikon **Save** (Simpan Projek / ikon disket) atau tekan `Ctrl + S`.
6. Di bar alat atas editor Apps Script, pilih fungsi **`setupLeaderboard`** dari menu pilihan fungsi, kemudian klik butang **Run** (Jalankan).
   - Google akan meminta pengesahan kebenaran (*Authorization Required*). Klik **Review permissions**, pilih akaun Google anda, klik **Advanced** (Lanjutan), dan klik **Go to Untitled project (unsafe)**, kemudian klik **Allow**.
   - Fungsi ini akan mencipta helaian bernama `Leaderboard` lengkap dengan 8 lajur tajuk berformat kemas secara automatik (Timestamp, Nama Murid, Kelas, Markah, Jawapan Betul, Jumlah Soalan, Masa, ID Percubaan). Jika menggunakan helaian terdahulu, fungsi ini secara pintar akan menyuntik lajur Kelas tanpa merosakkan data sedia ada.
7. **Langkah Menerbitkan Sebagai Web App (Deploy):**
   - Klik butang biru **Deploy** di bucu kanan atas > pilih **New deployment**.
   - Klik ikon gear (Select type) di sebelah kiri > pilih **Web app**.
   - Isi tetapan berikut:
     - **Description:** `Leaderboard Misi Bahasa Arab v1`
     - **Execute as:** `Me (emel anda)`
     - **Who has access:** **`Anyone`** *(Sangat penting! Pilih 'Anyone' supaya murid boleh menghantar markah tanpa perlu log masuk ke akaun Google)*.
   - Klik butang **Deploy**.
   - Salin **Web app URL** yang dipaparkan (URL bermula dengan `https://script.google.com/macros/s/.../exec`).

---

## 7. LANGKAH D: MENGKONFIGURASI FRONTEND (config.js)

1. Buka fail `config.js` di folder projek menggunakan sebarang penyunting teks (seperti VS Code atau Notepad).
2. Tampalkan Web App URL yang anda salin ke dalam pembolehubah `GOOGLE_APPS_SCRIPT_URL`:
   ```javascript
   const CONFIG = {
     // Masukkan URL Google Apps Script Web App anda di sini:
     GOOGLE_APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbx.../exec",

     TOTAL_QUESTIONS: 20,
     POINTS_PER_QUESTION: 5,
     MAX_SCORE: 100,
     ...
   };
   ```
3. Simpan fail `config.js`.

---

## 8. LANGKAH E: CARA MENERBITKAN DI GITHUB PAGES

1. Buat satu repositori baharu di akaun [GitHub](https://github.com) anda (contoh nama: `misi-bahasa-arab`). Pastikan repositori ditetapkan sebagai **Public**.
2. Muat naik semua fail projek ke dalam repositori tersebut:
   - `index.html`
   - `style.css`
   - `script.js`
   - `questions.js`
   - `assets.js`
   - `config.js`
   - `google-apps-script.gs`
   - `README.md`
   *(Pastikan fail `index.html` berada terus di folder utama (root) repositori, bukan di dalam subfolder)*.
3. Di halaman repositori GitHub anda, klik tab **Settings**.
4. Di menu sebelah kiri, klik **Pages**.
5. Di bawah bahagian **Build and deployment**:
   - **Source:** Pilih `Deploy from a branch`.
   - **Branch:** Pilih `main` (atau `master`) dan folder `/ (root)`.
   - Klik butang **Save**.
6. Tunggu sekitar 1 hingga 2 minit. Muat semula halaman Settings > Pages sehingga pautan laman web anda muncul:
   `Your site is live at https://username.github.io/misi-bahasa-arab/`
7. Buka pautan tersebut di telefon pintar atau komputer untuk mula bermain!

---

## 9. LANGKAH F: UJIAN LENGKAP SEBELUM DIGUNAKAN DI KELAS

Sebelum membenarkan murid bermain, lakukan ujian langkah demi langkah ini:

1. **Ujian Pendaftaran Nama & Pemilihan Kelas:**
   - Tekan butang kelas `2 Elite` atau `2 Unggul` -> Pastikan kad kelas bertukar aktif dengan efek bunyi klik.
   - Tekan "MULA MISI" tanpa memasukkan nama -> Mesti muncul amaran: *"Tulis nama kamu dahulu!"*
   - Masukkan nama contoh: `Aiman Hakimi` -> Permainan berjaya dimulakan dengan nama murid dan lencana kelas terpapar di bar atas permainan.
2. **Ujian 20 Soalan:**
   - Soalan 1–5 (Format A): Pastikan gambar buku, beg, pemadam, pembaris, pen dipaparkan dengan betul.
   - Soalan 6–10 (Format B): Pastikan tulisan Arab besar jelas dan pilihan Bahasa Melayu tepat.
   - Soalan 11–20 (Format C): Susun kad perkataan mengikut urutan yang betul berdasarkan gambar dan petunjuk.
3. **Ujian Pengiraan Markah:**
   - Jawab semua soalan dengan betul -> Markah akhir mestilah tepat 100/100 (20/20 betul).
   - Animasi confetti dan 3 bintang akan muncul.
4. **Ujian Penghantaran Google Sheets:**
   - Di skrin keputusan, pastikan status memaparkan: *"✅ Keputusan berjaya direkodkan!"* bersama nama dan kelas murid.
   - Buka Google Sheets anda -> Pastikan satu baris baharu mengandungi nama `Aiman Hakimi`, kelas `2 Elite` / `2 Unggul`, markah `100`, dan masa menjawab telah dimasukkan.
5. **Ujian Papan Juara (Leaderboard):**
   - Tekan butang "LIHAT LEADERBOARD" -> Pastikan nama `Aiman Hakimi` dan kelas murid muncul di senarai **Top 10 Murid Terbaik** dan **Rakan Yang Baru Selesai Bermain**.
6. **Ujian Semakan Jawapan:**
   - Tekan butang "SEMAK JAWAPAN" -> Pastikan kesemua 20 soalan dipaparkan dengan jawapan murid, jawapan betul, dan penerangan ringkas.

---

## 10. LANGKAH G: PANDUAN MENYELESAIKAN MASALAH (TROUBLESHOOTING)

### ❓ 1. Markah tidak direkodkan & status memaparkan "Tidak dapat menyimpan keputusan"
- **Punca:** URL Web App dalam `config.js` salah, atau tetapan akses Web App belum diset kepada "Anyone".
- **Penyelesaian:**
  1. Pastikan URL dalam `config.js` berakhir dengan `/exec` dan bukan `/dev`.
  2. Buka Apps Script > klik **Deploy** > **Manage deployments** > pastikan **Who has access** ialah **Anyone**. Jika anda menukar sebarang kod di Apps Script, buat *New version deployment*.

### ❓ 2. Papan Juara kosong atau memaparkan mesej sambungan
- **Punca:** Fungsi `setupLeaderboard` belum dijalankan di Google Sheets, atau helaian `Leaderboard` belum diwujudkan.
- **Penyelesaian:** Buka Apps Script, pilih fungsi `setupLeaderboard`, dan tekan **Run**. Semak di tab Google Sheets anda sama ada helaian bernama `Leaderboard` telah dicipta dengan lajur tajuk.

### ❓ 3. Nama murid muncul dua kali bagi satu percubaan
- **Penyelesaian:** Sistem ini telah dilengkapi ID Percubaan (`attemptId`). Jika murid menekan butang *"Cuba Semula"*, pelayan Google Apps Script akan menyemak ID tersebut dan menghalang penambahan baris pendua.

### ❓ 4. Tulisan Arab tidak keluar atau font tidak dimuatkan
- **Penyelesaian:** Pastikan peranti disambungkan ke internet untuk memuat turun font Google *Amiri* dan *Noto Naskh Arabic*. Kod CSS telah menyediakan fallback sistem (`Traditional Arabic`, `Tahoma`, `Arial`) sekiranya peranti berada di luar talian sementara.

---

## 👨‍🏫 DOKUMENTASI UNTUK GURU

Projek ini dibangunkan berasaskan kod **Vanilla HTML/CSS/JS** yang ringkas dan bersih tanpa sebarang pergantungan perisian tambahan agar guru Bahasa Arab mudah menyelenggara, menyalin (*fork*), atau mengubah suai soalan mengikut tahap murid pada masa akan datang.

Selamat mengajar dan semoga bermanfaat untuk anak-anak penjelajah cilik Bahasa Arab! 🌟
