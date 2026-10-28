# Changelog

Entri terbaru di atas. Tiap entri memuat tanggal, apa yang berubah, dan kenapa.

## 2026-10-29

Skrip ukur beranda Isak ditambah, supaya jarak dan huruf referensi bisa dicatat tanpa mengubah situs publik.

- Skripnya `_isak_preview/ukur-beranda.js`. Hasil ukur tetap di folder itu dan tidak di-commit.
- `script-bump.js` tetap contoh cara kerja dan tidak diubah. Keduanya diabaikan Git.
- Halaman publik tidak diubah.

## 2026-10-29

Beranda Isak dibandingkan di komputer dulu, supaya UI bisa dicek sebelum data Hasan dipakai.

- Folder `_isak_preview/` menyimpan perbandingan lokal dan diabaikan Git.
- Halaman publik tidak diubah. Data contoh demo tidak diunggah.

## 2026-10-28

Situs statis dua bahasa dibuat supaya karya bisa dibuka di `https://albasridev.github.io`.

- Astro membangun halaman Indonesia di `/` dan Inggris di `/en/` dari teks spesifikasi.
- Empat karya, kontak, dan sakelar bahasa mengikuti spesifikasi. Kartu Echlo Beauty tampil tanpa tautan dan tanpa gambar.
- Kepala halaman menempel, dan judul bagian tetap terlihat saat jangkar dibuka.
- Unggah memakai GitHub Actions di `.github/workflows/deploy.yml`.
- Gambar Echlo Beauty tetap menunggu tangkapan layar dengan data klien tertutup.

## 2026-10-28

Pemeriksaan dokumentasi terhadap isi folder. Kode situs belum ada.

- Kalimat pembuka spesifikasi menjelaskan bahwa fakta berulang juga ada di berkas ini, lalu disalin ke berkas lain.
- Nama publik Hasan Basri masuk tabel fakta berulang karena judul README dan aturan memakainya.
- Peran, lokasi, pendidikan, teks pengunjung, daftar karya, dan kontak tetap hanya di spesifikasi.

## 2026-10-28

`AGENTS.md` ditambah sebagai penunjuk untuk agen di luar aturan Cursor.

- Berkas itu mengarah ke `docs/spesifikasi.md` dan `.cursor/rules/portfolio.mdc`.
- Fakta isi situs tidak disalin ke sana.
- Peta dokumen, README, aturan, dan progress diselaraskan.

## 2026-10-28

Pemeriksaan dokumentasi. Kalimat yang saling bertentangan disamakan.

- Tabel fakta berulang membatasi apa yang boleh tertulis di luar spesifikasi: alamat unggah, nama repositori, dan nama PDF. Peta dokumen mengikuti tabel itu.
- Aturan mengizinkan alamat login Echlo tetap di spesifikasi, dan tetap melarang alamat itu di halaman situs.
- Node.js dan PHP hanya di kalimat Tentang. Elementor dan nama tema tidak ditulis.
- Rota International, LexaFX, dan Alam Bukit Tigapuluh memakai tangkapan layar yang disimpan di repositori.

## 2026-10-28

Dokumentasi dikunci sebelum kode dibuat, supaya revisi berikutnya punya satu sumber fakta.

- `docs/spesifikasi.md` menyimpan identitas, teks dua bahasa, empat karya, kontak, tampilan, dan hal yang tidak masuk ke situs.
- `.cursor/rules/portfolio.mdc` mengatur cara agen mengubah situs. Fakta isi situs tetap di spesifikasi.
- `docs/progress.md` memuat daftar periksa. Bagian dokumentasi selesai. Bagian situs belum.
- `README.md` menjadi pintu masuk. Perintah menjalankan menyusul saat kode ada.
- `.gitignore` menutup dua PDF CV agar tidak ikut commit ke repositori publik.
