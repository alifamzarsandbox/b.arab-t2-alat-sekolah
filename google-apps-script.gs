/**
 * ============================================================================
 * MISI BAHASA ARAB — DUNIA ALAT SEKOLAH
 * Backend Google Apps Script & Google Sheets Leaderboard
 * ============================================================================
 * 
 * PANDUAN PENTING:
 * 1. Buka Google Sheets baharu di Google Drive anda (https://sheets.new).
 * 2. Salin Spreadsheet ID daripada URL Google Sheets anda:
 *    https://docs.google.com/spreadsheets/d/<SALIN_ID_DI_SINI>/edit
 * 3. Tampalkan ID tersebut ke dalam pembolehubah SPREADSHEET_ID di bawah.
 * 4. Klik menu Extensions > Apps Script pada Google Sheets.
 * 5. Padam kod sedia ada dan tampal keseluruhan kod fail ini.
 * 6. Jalankan fungsi 'setupLeaderboard' sekali dari editor Apps Script untuk
 *    mencipta helaian dan baris tajuk secara automatik.
 * 7. Klik butang 'Deploy' > 'New deployment'.
 * 8. Pilih jenis 'Web app'.
 * 9. Tetapkan:
 *    - Description: "Leaderboard Misi Bahasa Arab"
 *    - Execute as: "Me" (akaun Google anda)
 *    - Who has access: "Anyone" (Sesiapa sahaja - Penting untuk capaian murid)
 * 10. Klik 'Deploy', berikan kebenaran (Authorize access), dan salin URL Web App.
 * 11. Tampal URL Web App tersebut ke dalam fail 'config.js' di frontend.
 * ============================================================================
 */

// GANTIKAN DENGAN ID GOOGLE SPREADSHEET ANDA:
const SPREADSHEET_ID = "MASUKKAN_SPREADSHEET_ID_ANDA_DI_SINI";
const SHEET_NAME = "Leaderboard";

/**
 * Fungsi Persediaan Awal (Setup)
 * Jalankan fungsi ini sekali untuk memastikan helaian dan lajur wujud.
 */
function setupLeaderboard() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Semak jika baris tajuk sudah ada
  if (sheet.getLastRow() === 0) {
    const headers = [
      "Timestamp",
      "Nama Murid",
      "Kelas",
      "Markah",
      "Jawapan Betul",
      "Jumlah Soalan",
      "Masa (Saat)",
      "ID Percubaan"
    ];
    sheet.appendRow(headers);
    
    // Format baris tajuk agar kemas
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#38bdf8"); // Sky blue
    headerRange.setFontColor("#0f172a");
    sheet.setFrozenRows(1);
    
    // Format lajur teks untuk mengelakkan isu formula injection
    sheet.getRange(2, 2, 999, 1).setNumberFormat("@");
    sheet.getRange(2, 3, 999, 1).setNumberFormat("@");
    sheet.getRange(2, 8, 999, 1).setNumberFormat("@");
  } else {
    // Semak dan naik taraf jika lajur Kelas belum ada dalam helaian sedia ada
    const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (currentHeaders.length >= 2 && currentHeaders[2] !== "Kelas") {
      sheet.insertColumnAfter(2);
      sheet.getRange(1, 3).setValue("Kelas").setFontWeight("bold").setBackground("#38bdf8").setFontColor("#0f172a");
      sheet.getRange(2, 3, 999, 1).setNumberFormat("@");
    }
  }
  
  Logger.log("Persediaan Leaderboard selesai dengan jayanya!");
  return "Persediaan Leaderboard selesai!";
}

/**
 * Mendapatkan objek Spreadsheet dengan pengesahan ID.
 */
function getSpreadsheet() {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === "MASUKKAN_SPREADSHEET_ID_ANDA_DI_SINI") {
    // Cuba buka helaian aktif jika script diikat terus (container-bound)
    try {
      return SpreadsheetApp.getActiveSpreadsheet();
    } catch (e) {
      throw new Error("Sila tetapkan SPREADSHEET_ID yang sah dalam google-apps-script.gs!");
    }
  }
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

/**
 * Mengendalikan permintaan HTTP GET.
 * Menyokong pengambilan leaderboard dan penyerahan markah sandaran.
 */
function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const action = params.action || "getLeaderboard";
  
  try {
    if (action === "getLeaderboard") {
      const data = getLeaderboardData();
      return jsonResponse({
        status: "success",
        ...data
      });
    }
    
    if (action === "submitScore") {
      // Sandaran penyerahan markah melalui GET jika persekitaran menyekat POST
      const submissionData = {
        nama: params.nama,
        kelas: params.kelas || "2 Elite",
        markah: Number(params.markah),
        jawapanBetul: Number(params.jawapanBetul),
        jumlahSoalan: Number(params.jumlahSoalan),
        masa: Number(params.masa),
        attemptId: params.attemptId
      };
      const result = submitScoreData(submissionData);
      return jsonResponse(result);
    }
    
    if (action === "ping") {
      return jsonResponse({
        status: "success",
        message: "Google Apps Script Backend Misi Bahasa Arab aktif!"
      });
    }
    
    return jsonResponse({
      status: "error",
      message: "Tindakan tidak sah: " + action
    });
  } catch (err) {
    return jsonResponse({
      status: "error",
      message: err.message || "Ralat pelayan dalaman."
    });
  }
}

/**
 * Mengendalikan permintaan HTTP POST.
 * Digunakan untuk menghantar markah murid dari frontend.
 */
function doPost(e) {
  try {
    let payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        // Jika format urlencoded
        payload = e.parameter || {};
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    }
    
    const action = payload.action || "submitScore";
    
    if (action === "submitScore") {
      const result = submitScoreData(payload);
      return jsonResponse(result);
    }
    
    if (action === "getLeaderboard") {
      const data = getLeaderboardData();
      return jsonResponse({
        status: "success",
        ...data
      });
    }
    
    return jsonResponse({
      status: "error",
      message: "Tindakan tidak dikenali."
    });
  } catch (err) {
    return jsonResponse({
      status: "error",
      message: err.message || "Ralat memproses data POST."
    });
  }
}

/**
 * Memproses dan mengesahkan penyerahan markah murid.
 * Menggunakan LockService bagi memastikan tiada konflik rekod serentak.
 */
function submitScoreData(data) {
  // 1. Dapatkan Kunci Skrip (LockService)
  const lock = LockService.getScriptLock();
  const hasLock = lock.tryLock(10000); // Tunggu sehingga 10 saat
  
  if (!hasLock) {
    return {
      status: "error",
      message: "Pelayan sedang sibuk merekodkan keputusan murid lain. Sila cuba sebentar lagi."
    };
  }
  
  try {
    // 2. Pengesahan Input (Backend Validation)
    const rawNama = String(data.nama || "").trim();
    const rawKelas = String(data.kelas || "").trim();
    const markah = Number(data.markah);
    const jawapanBetul = Number(data.jawapanBetul);
    const jumlahSoalan = Number(data.jumlahSoalan);
    const masa = Number(data.masa);
    const attemptId = String(data.attemptId || "").trim();
    
    // Semakan Nama
    if (!rawNama || rawNama.length === 0) {
      return { status: "error", message: "Nama murid tidak boleh kosong." };
    }
    if (rawNama.length > 30) {
      return { status: "error", message: "Panjang nama murid tidak boleh melebihi 30 aksara." };
    }
    
    // Sanitasi Formula Injection: Jika nama/kelas bermula dengan simbol formula, tambahkan tanda petik tunggal (')
    let safeNama = rawNama;
    if (/^[=+@-]/.test(safeNama)) {
      safeNama = "'" + safeNama;
    }
    
    let safeKelas = rawKelas || "2 Elite";
    if (/^[=+@-]/.test(safeKelas)) {
      safeKelas = "'" + safeKelas;
    }
    
    // Semakan Parameter Permainan
    if (jumlahSoalan !== 20) {
      return { status: "error", message: "Jumlah soalan mestilah tepat 20." };
    }
    if (isNaN(jawapanBetul) || jawapanBetul < 0 || jawapanBetul > 20) {
      return { status: "error", message: "Bilangan jawapan betul mesti antara 0 dan 20." };
    }
    if (isNaN(markah) || markah < 0 || markah > 100) {
      return { status: "error", message: "Markah mestilah antara 0 dan 100." };
    }
    // Setiap soalan bernilai 5 markah
    if (markah !== jawapanBetul * 5) {
      return { status: "error", message: "Integriti markah tidak sepadan dengan bilangan jawapan betul." };
    }
    if (isNaN(masa) || masa <= 0 || masa > 7200) {
      return { status: "error", message: "Nilai masa menjawab tidak munasabah." };
    }
    if (!attemptId) {
      return { status: "error", message: "ID percubaan diperlukan untuk mengelakkan duplikasi." };
    }
    
    // 3. Akses Helaian Google Sheets
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      setupLeaderboard();
      sheet = ss.getSheetByName(SHEET_NAME);
    }
    
    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();
    const existingHeaders = sheet.getRange(1, 1, 1, Math.max(lastCol, 1)).getValues()[0];
    const hasKelasCol = (existingHeaders[2] === "Kelas");
    const attemptColIndex = hasKelasCol ? 8 : 7;
    
    // 4. Semakan Duplikasi Menggunakan ID Percubaan (Idempotency)
    if (lastRow > 1) {
      const attemptIds = sheet.getRange(2, attemptColIndex, lastRow - 1, 1).getValues().map(row => String(row[0]));
      if (attemptIds.includes(attemptId)) {
        return {
          status: "success",
          message: "Keputusan bagi percubaan ini telah direkodkan sebelumnya.",
          duplicate: true
        };
      }
    }
    
    // 5. Masukkan Baris Baharu
    const timestamp = new Date();
    if (hasKelasCol) {
      sheet.appendRow([
        timestamp,
        safeNama,
        safeKelas,
        markah,
        jawapanBetul,
        jumlahSoalan,
        Math.round(masa),
        attemptId
      ]);
    } else {
      sheet.appendRow([
        timestamp,
        safeNama,
        markah,
        jawapanBetul,
        jumlahSoalan,
        Math.round(masa),
        attemptId
      ]);
    }
    
    return {
      status: "success",
      message: "Keputusan berjaya direkodkan!",
      nama: safeNama,
      kelas: safeKelas,
      markah: markah,
      attemptId: attemptId
    };
  } catch (err) {
    return {
      status: "error",
      message: "Ralat menyimpan rekod: " + err.message
    };
  } finally {
    // Sentiasa lepaskan kunci
    lock.releaseLock();
  }
}

/**
 * Membaca rekod daripada Google Sheets dan menyusun mengikut kriteria:
 * - Top 10: Markah tertinggi, kemudian masa terpantas.
 * - 20 Terkini: 20 rekod paling baru disiapkan.
 */
function getLeaderboardData() {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return { top10: [], recent20: [] };
  }
  
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return { top10: [], recent20: [] };
  }
  
  const lastCol = sheet.getLastColumn();
  const existingHeaders = sheet.getRange(1, 1, 1, Math.max(lastCol, 1)).getValues()[0];
  const hasKelasCol = (existingHeaders[2] === "Kelas");
  
  const values = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
  
  const allRecords = values.map((row, index) => {
    let cleanNama = String(row[1] || "").trim();
    if (cleanNama.startsWith("'")) {
      cleanNama = cleanNama.substring(1);
    }
    
    let cleanKelas = hasKelasCol ? String(row[2] || "").trim() : "";
    if (cleanKelas.startsWith("'")) {
      cleanKelas = cleanKelas.substring(1);
    }
    
    const markah = Number(hasKelasCol ? row[3] : row[2]) || 0;
    const jawapanBetul = Number(hasKelasCol ? row[4] : row[3]) || 0;
    const jumlahSoalan = Number(hasKelasCol ? row[5] : row[4]) || 20;
    const masa = Number(hasKelasCol ? row[6] : row[5]) || 0;
    const attemptId = String(hasKelasCol ? row[7] : row[6] || "");
    
    return {
      rowIndex: index + 2,
      timestamp: row[0] instanceof Date ? row[0].toISOString() : String(row[0]),
      nama: cleanNama,
      kelas: cleanKelas,
      markah: markah,
      jawapanBetul: jawapanBetul,
      jumlahSoalan: jumlahSoalan,
      masa: masa,
      attemptId: attemptId
    };
  }).filter(r => r.nama.length > 0 && r.jumlahSoalan === 20);
  
  // 1. TOP 10 MURID: Susun markah DESC, jika sama masa ASC
  const sortedForRank = [...allRecords].sort((a, b) => {
    if (b.markah !== a.markah) {
      return b.markah - a.markah;
    }
    return a.masa - b.masa;
  });
  
  const top10 = sortedForRank.slice(0, 10).map((item, idx) => ({
    rank: idx + 1,
    nama: item.nama,
    kelas: item.kelas,
    markah: item.markah,
    jawapanBetul: item.jawapanBetul,
    masa: item.masa
  }));
  
  // 2. 20 PERCUBAAN TERKINI: Susun rekod paling baru mengikut indeks / urutan baris terkini
  const recent20 = [...allRecords]
    .reverse()
    .slice(0, 20)
    .map(item => ({
      nama: item.nama,
      kelas: item.kelas,
      markah: item.markah,
      jawapanBetul: item.jawapanBetul,
      masa: item.masa,
      timestamp: item.timestamp,
      status: "Selesai"
    }));
  
  return {
    top10: top10,
    recent20: recent20
  };
}

/**
 * Utiliti untuk menghasilkan respons JSON yang selamat dengan header CORS.
 */
function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
