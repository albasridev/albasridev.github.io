# Spesifikasi portofolio Hasan Basri

Status: terkunci pada 28 Oktober 2026. Fakta isi situs ditulis di berkas ini, dan kode situs mengikuti berkas ini.

Fakta berulang, yang juga disalin ke berkas lain:

| Fakta | Juga tertulis di |
| --- | --- |
| Nama publik Hasan Basri | `README.md` (judul dan kalimat pertama), `.cursor/rules/portfolio.mdc` (judul dan description) |
| Alamat unggah `https://albasridev.github.io` | `README.md`, `docs/progress.md` |
| Nama repositori `albasridev/albasridev.github.io` | `README.md` |
| Nama kedua PDF CV | `README.md`, `.gitignore` |

Jika satu fakta di tabel itu berubah, ubah setiap berkas pada baris yang sama dalam perubahan yang sama. Jangan menyalin peran, lokasi, pendidikan, teks pengunjung, daftar karya, atau kontak ke berkas lain.

Jika berkas ini berbeda dengan kode, PDF CV, atau percakapan lama, yang dipakai berkas ini. Perubahan fakta dilakukan di berkas ini lebih dulu, lalu disalin ke kode pada perubahan yang sama, lalu dicatat di `CHANGELOG.md`.

## Peta dokumen

| Berkas | Tugas |
| --- | --- |
| `docs/spesifikasi.md` | Fakta isi situs. Satu-satunya tempat peran, lokasi, pendidikan, teks pengunjung, karya, dan kontak. |
| `.cursor/rules/portfolio.mdc` | Cara agen mengubah situs portofolio dan dokumen. |
| `AGENTS.md` | Penunjuk untuk agen. Tidak memuat fakta isi situs. |
| `docs/progress.md` | Daftar periksa. Satu-satunya fakta yang disalin adalah alamat unggah. |
| `CHANGELOG.md` | Riwayat perubahan. Entri terbaru di atas. |
| `README.md` | Pintu masuk: cara menjalankan dan cara mengunggah. |
| `.gitignore` | Menjaga PDF CV tetap di luar commit. |

Skill Cursor tidak dibuat. Prosedur revisi cukup pendek untuk tinggal di aturan. `AGENTS.md` hanya menunjuk ke spesifikasi dan aturan itu.

## Istilah

- **Situs portofolio** berarti situs Hasan Basri. **Situs klien** berarti situs yang dibuat untuk klien. Di teks pengunjung, kata "website" dipakai agar kedua arti ini tidak tertukar.
- **Karya** berarti satu dari empat pekerjaan klien yang ditampilkan.
- **Pembuka** berarti bagian paling atas. Dalam diskusi ini disebut hero.
- **Panel** berarti Echlo Beauty, aplikasi belakang layar tanpa halaman depan.
- **Alat** berarti teknologi pada satu karya, misalnya WordPress.
- **Selaras** berarti fakta yang sama tidak tertulis berbeda di dua berkas.

## Identitas

- Nama publik: Hasan Basri.
- Peran, ditulis sama di Indonesia dan Inggris: Web Developer & Graphic Designer.
- Lokasi publik: Bali.
- Pendidikan tampil sebagai empat baris di bagian Pendidikan. Paragraf Tentang tidak memuat kalimat kelulusan.
- Audiens: campuran klien dan perekrut.
- Nama Tim2San dan tautan tim2san.com tidak dipakai di situs portofolio.
- Nama di pembuka tetap Hasan Basri. Tulisan kaki halaman yang sudah terbit adalah Al Basri Dev.

## Tujuan pengunjung

1. Melihat karya.
2. Menghubungi Hasan.

Tombol pada kartu profil, **Hubungi saya**, menggulir ke `#contact`. Di bagian kontak, WhatsApp ada di urutan pertama.

## Bahasa

- Kunjungan pertama selalu bahasa Indonesia, di jalur `/`. Bahasa browser tidak mengubah pilihan ini.
- Bahasa Inggris ada di `/en/`. Berkas hasil bangunnya `dist/en/index.html`.
- Jalur `/id` tidak dibuat.
- Sakelar di menu atas memakai teks `ID` dan `EN`. Halaman yang sedang terbuka ditandai aktif.
- Sakelar menjaga posisi. Contoh: `/` bertukar dengan `/en/`, dan `/#contact` bertukar dengan `/en/#contact`.
- Jangkar sama di kedua bahasa: `home`, `about`, `education`, `work`, `contact`.
- Halaman Indonesia memakai `lang="id"`. Halaman Inggris memakai `lang="en"`.
- Yang diterjemahkan: menu, judul bagian, tombol, dan kalimat deskripsi.
- Yang tidak diterjemahkan: Hasan Basri, Web Developer & Graphic Designer, Rota International, LexaFX, Helix, Echlo Beauty, Alam Bukit Tigapuluh, MetaTrader 5, Ekonomi Pembangunan, Universitas Jambi, SDN 73 Muaro Jambi, SMPN 1 Muaro Jambi, SMK Revany Indra Putra, Bali, Jambi, Kota Jambi, WordPress, React, Node.js, PHP, WhatsApp, Instagram, Email.

Teks kedua bahasa disimpan terpisah. Jangan mencampur terjemahan di tengah kalimat.

## Susunan halaman

Satu halaman yang digulir, urutannya sama dengan tampilan lokal yang disetujui:

1. Kartu profil dan pembuka, jangkar `home`.
2. Tentang, jangkar `about`. Dua jalur layanan ada di bawah paragraf ini, tanpa bagian terpisah.
3. Pendidikan, jangkar `education`.
4. Karya, jangkar `work`.
5. Kontak, jangkar `contact`.
6. Tulisan kaki Al Basri Dev.

Menu ikon: Beranda, Tentang, Pendidikan, Kontak. Sakelar `ID` / `EN` ada di kepala halaman dan di menu layar sempit. Di layar sempit menu tetap bisa dipilih dengan ketukan, tanpa gulir mendatar.

Tidak ada halaman detail karya. Empat baris pendidikan ada di halaman yang sudah terbit, sama dengan bagian Pemeriksaan tampilan.

## Teks terkunci

### Menu

| Indonesia | Inggris | Tujuan |
| --- | --- | --- |
| Beranda | Home | `#home` |
| Tentang | About | `#about` |
| Pendidikan | Education | `#education` |
| Kontak | Contact | `#contact` |

### Pembuka

Nama yang terlihat di pembuka: Hasan Basri.

Peran: Web Developer & Graphic Designer.

Indonesia: Membangun Sistem & Panel Kustom dari Nol dengan Pemeliharaan Jangka Panjang.

Inggris: Building custom systems and panels from scratch, with long-term maintenance.

Pembuka tidak menulis "Berbasis di Bali". Deskripsi singkat tetap menyebut Bali.

| Tombol | Indonesia | Inggris | Tujuan |
| --- | --- | --- | --- |
| Kartu | Hubungi saya | Contact me | `#contact` |

Tidak ada foto pada halaman yang sudah terbit. Monogram HB untuk favicon dan tanda di kartu. Ilustrasi kartu dijelaskan di bagian Pemeriksaan tampilan.

Judul tab sama di kedua bahasa: `Hasan Basri | Web Developer & Graphic Designer`.

Deskripsi singkat:

- Indonesia: Portofolio Hasan Basri, web developer dan graphic designer di Bali.
- Inggris: Portfolio of Hasan Basri, a web developer and graphic designer in Bali.

### Dua jalur

Dua jalur ini ada di bawah paragraf Tentang. Halaman tidak menampilkan judul "Yang saya kerjakan".

Dua jalur, tanpa daftar logo:

1. Website & Panel. Indonesia: Dibangun dari nol hingga dirawat secara berkala. Selalu menggunakan perangkat (tools) yang paling tepat guna. Inggris: Built from scratch and maintained on a regular basis. The tools used are always the ones best suited to the job.
2. Desain / Design. Indonesia: Menghadirkan visual untuk web dan merek, berbekal fondasi desain yang kuat. Inggris: Visuals for the web and the brand, grounded in a strong design foundation.

Judul jalur pertama sama di kedua bahasa: Website & Panel. Kartu karya hanya menyebut alat yang dikonfirmasi untuk karya itu. Node.js dan PHP tidak tertulis di teks pengunjung dan tidak menjadi label kartu.

### Tentang

Indonesia:

Saya menggabungkan desain web, identitas merek, dan pengembangan no-code untuk membantu bisnis bergerak lebih cepat tanpa kehilangan karakter aslinya. Setiap proyek dikerjakan dengan memadukan strategi dan gaya. Memastikan desain tidak hanya tampak menarik, tetapi juga fungsional dan berdampak nyata.

Inggris:

I combine web design, brand identity, and no-code development to help businesses move faster without losing their original character. Every project blends strategy and style, so the design is not only attractive, but also functional and has a real impact.

Label bagian: Tentang / About. Judul di dalam bagian itu: Indonesia `Merancang merek dan website dengan kejelasan, kreativitas, dan kecepatan no-code.` Inggris `Designing brands and websites with clarity, creativity, and no-code speed.` Kelulusan tidak ditulis di paragraf ini. Kelulusan ada di bagian Pendidikan. Kata vibe coder tidak dipakai di teks pengunjung.

### Kontak

Label menu: Kontak / Contact. Judul yang terlihat di bagian ini adalah kalimat pembukanya.

Indonesia: Hubungi saya lewat WhatsApp, email, atau Instagram.

Inggris: Contact me on WhatsApp, email, or Instagram.

Urutan: WhatsApp, email, Instagram. Tulisan saluran terlihat, tidak hanya ikon.

| Saluran | Tulisan | Tautan |
| --- | --- | --- |
| WhatsApp | +62 897 3783 911 | `https://wa.me/628973783911` |
| Email | hasan.n.dev@gmail.com | `mailto:hasan.n.dev@gmail.com` |
| Instagram | @albasri.dev | `https://www.instagram.com/albasri.dev` |

Tautan WhatsApp tidak membawa pesan siap kirim. Tidak ada formulir. WhatsApp dan Instagram terbuka di tab baru. Email memakai `mailto` di tab yang sama.

## Empat karya

Urutan tampil:

1. Rota International, dengan tangkapan layar situs klien.
2. LexaFX, dengan tangkapan layar situs klien.
3. Echlo Beauty, dengan tangkapan layar halaman masuk, tanpa tautan.
4. Alam Bukit Tigapuluh, dengan tangkapan layar dan tautan.

Empat kartu sama ukurannya dan tersusun berurutan.

Tangkapan layar Rota International, LexaFX, Alam Bukit Tigapuluh, dan Echlo Beauty disimpan di repositori, tidak ditautkan langsung dari situs klien. Untuk tiga situs yang punya beranda, teks alternatifnya memakai nama karya: Indonesia `Tangkapan layar beranda …`, Inggris `Screenshot of the … homepage`. Echlo Beauty memakai tangkapan layar halaman masuk. Teks alternatifnya: Indonesia `Tangkapan layar halaman masuk Echlo Beauty`, Inggris `Screenshot of the Echlo Beauty sign-in page`.

Label tombol untuk karya yang punya situs publik: Kunjungi situs / Visit site. Tautan terbuka di tab baru. Deskripsi tidak memuat janji hasil bisnis atau keuntungan trading.

| Karya | Alat di kartu | Peran | Tautan di situs portofolio |
| --- | --- | --- | --- |
| Rota International | WordPress | Dibangun dari nol, masih dirawat | `https://rotainternational.org/` |
| LexaFX | React | Dibangun dari nol, masih dirawat | `https://lexafx.com/` |
| Echlo Beauty | Tidak ditulis | Dibangun dari nol, masih dirawat | Tidak ada |
| Alam Bukit Tigapuluh | WordPress | Dibangun dari nol, masih dirawat | `https://alambukit30.com/` |

Hasan menulis "Reach" untuk React. Peta alat di atas sudah ia konfirmasi. Jika keliru, ubah tabel ini dan teks kartu bersamaan.

### Rota International

Indonesia: Situs perusahaan untuk konsultasi dan proyek internasional. Dibangun dari nol dengan WordPress dan masih dirawat.

Inggris: A company site for international consulting and projects. Built from scratch with WordPress and still maintained.

Alamat yang keliru dan tidak boleh dipakai: `rota-intl.com` dan `rotaint.com`. Pekerjaan portofolio ini tidak mengubah footer situs klien. Tulisan Tim2San di footer itu tidak dibawa ke situs portofolio.

### LexaFX

Indonesia: Situs produk Helix, sistem trading emas di MetaTrader 5. Dibangun dari nol dengan React dan masih dirawat.

Inggris: Product site for Helix, a gold trading system on MetaTrader 5. Built from scratch with React and still maintained.

### Echlo Beauty

Indonesia: Panel untuk rekapan. Tidak ada halaman depan untuk pengunjung. Dibangun dari nol dan masih dirawat.

Inggris: A recap panel. There is no public storefront. Built from scratch and still maintained.

Alamat panel, hanya untuk mengenali karya, tidak untuk ditampilkan atau ditautkan: `https://echlobeauty.com/login`. Repositori GitHub Pages bersifat publik, jadi baris ini bisa terbaca di sumber. Halaman situs portofolio tetap tanpa tautan itu. Alamat yang keliru dan tidak boleh dipakai: `echlo-cosmetique.fr` dan `eclobeauty.com`.

Gambar kartu adalah tangkapan layar halaman masuk yang dikirim Hasan, disimpan di `public/works/echlo.jpg`. Di gambar itu tidak ada angka atau nama klien. Kaki gambar memuat tulisan © 2026 Naga Perkasa Group. Hak cipta dilindungi. Tulisan itu terlihat karena ada di dalam gambar, dan tidak diulang sebagai kalimat di halaman. Kartu tetap tanpa tautan.

### Alam Bukit Tigapuluh

Indonesia: Situs perusahaan restorasi ekosistem di Jambi. Dibangun dari nol dengan WordPress dan masih dirawat.

Inggris: Company site for an ecosystem restoration concession in Jambi. Built from scratch with WordPress and still maintained.

Nama publik tetap Hasan Basri. Tulisan Al Basri Dev di footer situs klien tidak dibawa sebagai kredit pekerjaan klien. Tulisan kaki situs portofolio adalah Al Basri Dev.

## Tampilan

Gelap dari awal. Tidak ada mode terang. Halaman yang sudah terbit memakai tampilan lokal yang disetujui: kartu profil di kiri pada jendela lebar, kolom isi di kanan, dan tombol hijau.

| Token | Nilai | Pemakaian |
| --- | --- | --- |
| Latar | `#0f0f0f` | Seluruh halaman |
| Teks | `#fff` | Teks utama |
| Teks redup | `rgba(255, 255, 255, 0.72)` | Keterangan |
| Aksen | `#00de51` | Tombol, titik, dan tanda bahasa yang aktif |
| Garis | `rgba(255, 255, 255, 0.06)` | Pemisah |

Huruf judul: Funnel Display. Huruf teks: Geist. Keduanya berlisensi SIL Open Font License dan disimpan di `public/fonts/`. Jika font gagal dimuat, pakai serif cadangan untuk judul dan sans-serif cadangan untuk teks. Instrument Serif dan Outfit tidak dipakai lagi.

Gerakan hanya transisi singkat saat kursor berada di atas elemen, saat bahasa berganti, dan saat angka pengalaman terhitung. Hormati `prefers-reduced-motion`. Isi halaman tidak menunggu animasi. Sakelar mode tetap gelap. Tombol pengaturan warna tidak membuka panel.

Acuan yang tidak ditiru: `https://mardiansyah-gunting.github.io/personal/`. Jangan membawa menu bernomor, grafik frekuensi keahlian, galeri foto per jabatan, atau deretan riwayat kerja yang panjang.

## Pemeriksaan tampilan

Beranda `https://isak.botble.com/` dibandingkan di komputer lewat folder `_isak_preview/`. Folder itu diabaikan Git. Halaman yang sudah terbit memakai susunan tampilan lokal yang disetujui.

Skrip otomatisnya `_isak_preview/ukur-beranda.js`. Tempel berkas itu di konsol pada beranda referensi. Skrip membaca ukuran huruf, warna, jarak, radius, dan bayangan, lalu menyimpan dua berkas di `_isak_preview/exports/`. Salinan yang sama ada di `window.__ISAK_HOME_MEASURE__`. Halaman tidak diklik, tidak digulir, dan isi serta gayanya tidak diubah. Teks pengunjung tidak disimpan, hanya panjang teks. Jika skrip masih berjalan, tempelan berikutnya ditolak.

Skrip turnya `_isak_preview/ukur-titik.js`. Tempel berkas itu di konsol yang sama, pada jendela lebar, lalu ulangi pada layar sempit. Pita kuning menulis langkah. Cincin kuning menandai satu contoh tiap jenis kotak: kartu karya, judul karya, layanan, tombol hijau, logo klien, batang keahlian, kutipan, panah, ikon kanan, baris jabatan, penghargaan, bidang formulir, tombol kirim, menu, dan kutipan kaki. Klik tidak membuka tautan, tidak membuka panel, dan tidak mengirim formulir. Sejak jari menyentuh, aksi asli halaman referensi tidak berjalan, termasuk menu dan ikon setting. Langkah yang gayanya berubah saat kursor di atas menunggu Enter. Skrip ini boleh menggulir halaman referensi supaya kotak yang semula tersembunyi terukur. Escape melewati langkah. Cookie dan jendela newsletter tidak diukur. Hasilnya disimpan di folder yang sama, dan salinannya ada di `window.__ISAK_TITIK__`.

Kutipan kaki tidak menerima klik, jadi ukurannya dibaca langsung dari `p.quote-text` pada jendela lebar dan layar sempit. Kelas `font-3` tertulis dua kali: yang pertama EB Garamond, yang belakangan Inter. Huruf yang terlihat mengikuti yang belakangan, yaitu Inter. Judul layanan dibaca langsung dari `h3` di dalam baris accordion. Hasil bacaan itu tidak di-commit dan tidak diunggah.

Huruf halaman publik dan pratinjau lokal: Funnel Display untuk judul, Geist untuk teks. Keduanya berlisensi SIL Open Font License. Berkas yang diunggah ada di `public/fonts/`. Salinan lokal ada di `_isak_preview/fonts/`. Geist Mono tidak dipakai.

Pratinjau lokal tidak menampilkan bilah cookie dan tidak menampilkan jendela newsletter. Bilah cookie pada demo hanya pemberitahuan persetujuan cookie. Situs ini tidak memasang cookie analitik atau iklan.

Jarak pratinjau lokal mengikuti kotak yang sudah terukur: kartu profil mengikuti tinggi jendela, kolom isi, judul, dan kartu karya. Bagian layanan, keahlian, formulir, dan kutipan pada referensi tidak lagi menampilkan teks demo. Angka ukur tidak ditulis di berkas ini. Angka ukur tidak mengubah susunan halaman publik.

Kartu profil dan kolom alat pada pratinjau lokal mengikuti susunan HTML referensi. Ikon lampu, pengaturan warna, dan tombol kembali ke atas memakai lingkaran. Kartu kiri punya garis tepi. Tulisan ketersediaan dibaca dari bawah ke atas. Kolom alat memuat sakelar mode, empat tautan dengan dua garis pemisah, tooltip, dan tombol kembali ke atas. Di layar sempit, daftar tautan itu disembunyikan. Sakelar mode tidak membalik halaman ke mode terang.

Jam di kepala halaman terdiri dari dua baris berukuran teks kecil. Bahasa Indonesia memakai singkatan hari Min–Sab dan bulan Mei, Agu, Okt, Des. Bahasa Inggris memakai Sun–Sat dan May, Aug, Oct, Dec. Di layar sempit, logo tampil di kepala halaman dan logo pada kartu disembunyikan. Label bagian memakai ukuran keterangan kecil dan ikon.

Yang tampil di halaman yang sudah terbit, dan sama di pratinjau lokal:

- Nama di pembuka: Hasan Basri. Peran: Web Developer & Graphic Designer.
- Kalimat pembuka: Membangun Sistem & Panel Kustom dari Nol dengan Pemeliharaan Jangka Panjang. Tulisan ketersediaan: Terbuka untuk Kolaborasi. Inggris: Open for collaboration. Sapaan: Halo, saya Hasan Basri / Hello, I'm Hasan Basri.
- Angka 8+ untuk pengalaman sejak 2018, label Tahun pengalaman / Years of experience. Angka 10+ untuk proyek selesai, label Proyek selesai / Projects completed. Angka 10+ berasal dari Hasan dan mencakup desain grafis. Empat karya yang disebut namanya tetap yang di tabel Empat karya. Nama proyek desain grafis tidak ditambahkan.
- Ikon kartu: Facebook `https://www.facebook.com/profile.php?id=61591124157352` dan Instagram `https://www.instagram.com/albasri.dev`. Tidak ada tombol unduh CV.
- Empat baris pendidikan, dari yang terbaru. Garis di samping baris itu mengikuti guliran dan menembus titik. 2016–2023, Ekonomi Pembangunan, Universitas Jambi. 2014–2016, SMK Revany Indra Putra, Kota Jambi. 2010–2014, SMPN 1 Muaro Jambi. 2004–2010, SDN 73 Muaro Jambi. Nama sekolah tidak diterjemahkan. "Jambi Luar Kota" tidak ditulis. Kelulusan universitas berakhir 2023, bukan Now.
- Ilustrasi karakter pada kartu: potret dada gaya 3D, kemeja gelap, latar gelap, senyum, rambut digelung. Tangan tidak digambar. Itu bukan foto Hasan.
- Bagian Tentang memakai kalimat Tentang yang terkunci. Judulnya: Merancang merek dan website dengan kejelasan, kreativitas, dan kecepatan no-code. Di bawah paragraf ada dua jalur, tanpa tahun: Website & Panel, dan Desain. Daftar penghargaan tidak ditampilkan.
- Pratinjau lokal berbahasa Indonesia di seluruh teks pengunjung. Halaman Inggris di `/en/` memakai susunan yang sama, dengan teks yang diterjemahkan.
- Tulisan kaki: AL BASRI terisi, DEV garis, monogram HB di tengah, dan baris hak cipta © 2026 Al Basri Dev.
- Pita klien, pita penghargaan, dan bagian testimoni tidak ditampilkan.

Contoh demo yang sudah diganti: daftar penghargaan, kartu karya, layanan, batang keahlian, formulir, dan kutipan Steve Jobs. Kartu karya memakai empat karya di tabel Empat karya. Dua jalur layanan tampil di bawah paragraf Tentang, bukan sebagai bagian terpisah. Batang keahlian tidak ditampilkan karena angkanya tidak ada. Formulir diganti tiga saluran kontak. Kutipan Steve Jobs tidak ditampilkan. Tulisan kaki Al Basri Dev, ilustrasi kartu, dan empat baris pendidikan ada di halaman yang sudah terbit.

Contoh cara kerja kedua skrip tetap `script-bump.js`. Berkas contoh itu tidak diubah. Skrip, huruf pratinjau, dan hasil ukur diabaikan Git, termasuk berkas `isak-beranda-*` dan `isak-titik-*` yang tersimpan di akar folder.

Hasan menyetujui tampilan lokal untuk halaman publik. Situs Astro memakai susunan itu. Folder `_isak_preview/` tetap perbandingan lokal, diabaikan Git, dan tidak disalin apa adanya. Ilustrasi kartu dan huruf yang dipakai disalin ke `public/` supaya bisa diunggah. Hasil ukur tidak di-commit.

## Teknologi situs

- Astro 5, keluaran statis. Perintah yang sama dengan `package.json`: `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
- Tujuan unggah: `https://albasridev.github.io`.
- Repositori GitHub yang cocok untuk alamat itu: `albasridev/albasridev.github.io`.
- Karena alamatnya memakai nama akun GitHub, jalur dasar adalah `/`, bukan subfolder repositori.
- `astro.config.mjs` memakai `trailingSlash: "always"`. Indonesia di `/`, Inggris di `/en/`.
- Tata letak berkas:
  - `src/pages/index.astro` dan `src/pages/en/index.astro` adalah dua halaman.
  - `src/components/Site.astro` menyusun bagian halaman.
  - `src/layouts/Base.astro` menyusun `html`, judul, dan sakelar bahasa.
  - `src/data/copy.ts` menyimpan teks pengunjung yang disalin dari spesifikasi ini.
  - `src/styles/global.css` menyimpan palet, huruf, dan tata letak.
  - `public/favicon.svg` adalah monogram HB.
  - `public/fonts/` menyimpan Funnel Display, Geist, dan berkas lisensi OFL.
  - `public/avatar-kartu.jpg` adalah ilustrasi kartu.
  - `public/works/rota.jpg`, `public/works/lexafx.jpg`, `public/works/alam-bukit.jpg`, dan `public/works/echlo.jpg` adalah tangkapan layar.
  - `.github/workflows/deploy.yml` membangun situs dan mengunggahnya ke GitHub Pages.

## Tidak masuk ke situs portofolio

- Tombol unduh CV. Kedua PDF ini bahan internal: `CV ATS Hasan Basri.pdf` dan `Curriculum Vitae Hasan Basri Baru.pdf`.
- Formulir kontak.
- Tautan Twitter dan profil GitHub. Unggah ke GitHub Pages tetap dilakukan. Nomor ditampilkan sebagai WhatsApp, tanpa tautan telepon terpisah. Ikon Facebook ada di kartu profil, menuju profil yang tertulis di bagian Pemeriksaan tampilan.
- Foto diri Hasan. Yang tampil adalah ilustrasi kartu, bukan foto. Favicon monogram HB tetap ada.
- Penghargaan, batang keahlian, formulir, dan kutipan. Empat baris pendidikan di bagian Pemeriksaan tampilan tampil di halaman yang sudah terbit.
- Magang, admin, esports, turnamen, dukungan POS, Sangkek, SoU Group, WWF, Ai-CHA, DLT Universitas Jambi, Sorot Jambi, situs dosen Muhammad Ridwansyah, dan Mitra Kevin Abadi.
- Umur, tanggal lahir, agama, jenis kelamin, dan alamat jalan. Nilai itu tidak disalin ke dokumen ini.
- Email `hasan.n.dev@mail.com`. Email yang dipakai hanya `hasan.n.dev@gmail.com`.
- Elementor dan nama tema WordPress, di halaman maupun di kartu.
- Node.js dan PHP di teks pengunjung, termasuk sebagai label kartu.

Abaikan lokasi, jabatan, dan daftar pekerjaan di dalam kedua PDF. Pakai identitas, teks, dan empat karya di spesifikasi ini. `CV ATS Hasan Basri.pdf` lebih baru daripada `Curriculum Vitae Hasan Basri Baru.pdf`, dan keduanya tetap kalah dari spesifikasi ini.

## Contoh keputusan

Salah: menambah kartu Sangkek karena namanya ada di CV. Benar: tolak. Karya publik yang disebut namanya hanya empat baris di tabel bagian Empat karya. Angka 10+ tidak menambah kartu.

Salah: menerjemahkan LexaFX di halaman Inggris. Benar: nama tetap. Yang berganti hanya kalimat deskripsi.

Salah: tombol Echlo menuju halaman masuk. Benar: kartu memakai gambar halaman masuk, tanpa tautan, dengan penjelasan panel.

## Saat kode sudah ada

Salin teks pengunjung dari berkas ini. Jika teks di kode perlu diubah, ubah berkas ini pada perubahan yang sama. Tata letak berkas kode dicatat di bawah judul Teknologi situs, lalu `docs/progress.md` dicentang.
