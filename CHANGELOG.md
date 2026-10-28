# Changelog

Entri terbaru di atas. Tiap entri memuat tanggal, apa yang berubah, dan kenapa.

## 2026-10-29

Pembuka, Tentang, dan dua jalur layanan memakai kalimat yang Hasan kunci, supaya teks pengunjung sama dengan keputusan terakhir.

- Pembuka menjadi Membangun Sistem & Panel Kustom dari Nol dengan Pemeliharaan Jangka Panjang. "Berbasis di Bali" lepas dari pembuka. Deskripsi singkat tetap menyebut Bali.
- Paragraf Tentang dan dua jalur layanan diganti di halaman Indonesia dan Inggris. Judul bagian publik tetap Tentang / About. Kata vibe coder, Node.js, dan PHP tidak lagi tertulis untuk pengunjung.
- Pratinjau lokal memakai tulisan Terbuka untuk Kolaborasi dan judul Tentang yang baru. Timeline pendidikan tetap, termasuk kelulusan 2023. Berkas pratinjau tidak di-commit.

## 2026-10-29

Gambar karya dan pratinjau lokal disamakan dengan keputusan Hasan, supaya kartu dan teks yang terlihat tidak lagi menunggu berkas atau memakai contoh demo.

- Empat tangkapan layar disimpan di `public/works/`. Kartu Echlo Beauty memakai gambar halaman masuk, tanpa tautan. Kaki gambar memuat Naga Perkasa Group, dan nama itu tidak diulang sebagai kalimat di halaman.
- Pratinjau lokal memakai ilustrasi potret dada yang tersenyum, dengan rambut digelung. Bagian Tentang, empat baris pendidikan, kartu karya, dan kontak memakai teks Indonesia. Penghargaan demo, batang keahlian, formulir, dan kutipan Steve Jobs tidak ditampilkan.
- Daftar sekolah hanya ada di pratinjau lokal. Halaman publik tidak memuat daftar itu. Berkas pratinjau tidak di-commit.

## 2026-10-29

Pratinjau lokal mulai memakai data Hasan pada bagian yang sudah disepakati, supaya perbandingan UI tidak lagi memakai nama dan angka demo di bagian itu.

- Nama di pembuka menjadi Hasan Basri. Angka pengalaman 8+ sejak 2018, dan angka proyek selesai 10+. Angka 10+ dari Hasan, termasuk desain grafis. Empat karya bernama tidak ditambah.
- Ikon kartu tinggal Facebook dan Instagram. Tombol unduh CV, pita klien, pita penghargaan, dan bagian testimoni dihapus.
- Riwayat demo diganti satu baris pendidikan: Ekonomi Pembangunan, Universitas Jambi, 2023.
- Tulisan kaki menjadi Al Basri Dev, dengan monogram HB. Kartu memakai ilustrasi, bukan foto.
- Halaman publik tidak diubah.

## 2026-10-29

Jam, logo kepala, garis riwayat, dan label bagian pada pratinjau lokal mengikuti kelas yang sama di referensi, supaya bagian yang masih beda bisa dicek berdampingan.

- Jam menjadi dua baris teks kecil. Di layar sempit, logo tampil di kepala halaman.
- Riwayat kerja punya garis yang terisi mengikuti guliran.
- Label bagian memakai ukuran keterangan kecil dan ikon.
- Halaman publik tidak diubah.

## 2026-10-29

Kartu profil dan kolom alat pada pratinjau lokal mengikuti susunan HTML referensi, supaya bagian yang masih beda bisa dicek berdampingan.

- Sapaan memakai ukuran judul kecil dan katanya berganti utuh. Ikon sosial, panah, dan unduhan memakai gambar garis.
- Kolom alat memuat sakelar mode, empat tautan dengan pemisah, tooltip, dan tombol kembali ke atas. Di layar sempit, daftar tautan itu disembunyikan.
- Sakelar mode tidak membalik halaman ke mode terang. Halaman publik tidak diubah.

## 2026-10-29

Pratinjau lokal disamakan dengan kotak yang terukur, supaya perbandingan UI bisa dicek sebelum data Hasan dipakai.

- Jarak kartu profil, kolom isi, judul, karya, layanan, keahlian, formulir, tombol kirim, dan kutipan kaki pada pratinjau lokal mengikuti bacaan beranda referensi.
- Kutipan kaki memakai Geist, bukan huruf judul.
- Angka ukur tidak di-commit. Halaman publik tidak diubah.

## 2026-10-29

Kutipan kaki dan judul layanan dibaca langsung dari elemennya, karena klik tur tidak mengenai kutipan itu.

- Kaki halaman tidak menerima klik. Kelas `font-3` yang belakangan mengembalikan huruf ke Inter, jadi kalimat kutipan kaki tampil dengan Inter, bukan EB Garamond.
- Tiga judul layanan tampil dengan Apfel Grotezk.
- Ikon kanan, baris jabatan, dan tombol menu sudah ada di hasil ukur yang tersimpan. Kutipan kaki diselesaikan dengan bacaan langsung ini.
- Angka bacaannya tidak di-commit. Halaman publik tidak diubah.

## 2026-10-29

Tur ukur menahan aksi halaman referensi sejak jari menyentuh, supaya ikon setting tidak membuka panel dan menggeser kotak yang dicatat.

- `_isak_preview/ukur-titik.js` menahan aksi sejak jari menyentuh. Tautan, panel, dan formulir pada halaman referensi tidak ikut berjalan. Kotak yang dicatat tetap kotak yang pertama ditekan.
- Empat langkah pada hasil ukur sebelumnya tidak dipakai: ikon kanan, baris jabatan, tombol menu pada jendela lebar, dan kutipan kaki. Keempatnya perlu diukur ulang pada jendela lebar dan layar sempit.
- Halaman publik tidak diubah.

## 2026-10-29

Skrip tur kotak dalam ditambah, supaya jarak kartu, tombol, dan kutipan bisa dicatat tanpa mengubah situs publik.

- `_isak_preview/ukur-titik.js` menandai satu contoh tiap kotak dengan pita dan cincin kuning. Klik tidak membuka tautan dan tidak mengirim formulir. Cookie dan newsletter tidak diukur.
- Pratinjau lokal memakai Funnel Display untuk judul dan Geist untuk teks. Bilah cookie dan jendela newsletter dihapus dari pratinjau itu.
- Hasil ukur yang tersimpan di akar folder ikut diabaikan Git.
- Halaman publik tidak diubah.

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
