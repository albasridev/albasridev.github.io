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
- Pendidikan, satu kalimat di bagian Tentang: lulus Ekonomi Pembangunan dari Universitas Jambi pada 2023.
- Audiens: campuran klien dan perekrut.
- Nama Tim2San dan tautan tim2san.com tidak dipakai di situs portofolio.
- Nama di pembuka tetap Hasan Basri. Tulisan kaki pada pratinjau lokal adalah Al Basri Dev. Halaman yang sudah terbit belum memakai tulisan kaki itu.

## Tujuan pengunjung

1. Melihat karya.
2. Menghubungi Hasan.

Tombol utama pembuka, **Lihat karya**, menggulir ke `#karya`. Tombol kedua, **Hubungi saya**, menggulir ke `#kontak`. Di bagian kontak, WhatsApp ada di urutan pertama.

## Bahasa

- Kunjungan pertama selalu bahasa Indonesia, di jalur `/`. Bahasa browser tidak mengubah pilihan ini.
- Bahasa Inggris ada di `/en/`. Berkas hasil bangunnya `dist/en/index.html`.
- Jalur `/id` tidak dibuat.
- Sakelar di menu atas memakai teks `ID` dan `EN`. Halaman yang sedang terbuka ditandai aktif.
- Sakelar menjaga posisi. Contoh: `/` bertukar dengan `/en/`, dan `/#kontak` bertukar dengan `/en/#kontak`.
- Jangkar sama di kedua bahasa: `karya`, `layanan`, `tentang`, `kontak`.
- Halaman Indonesia memakai `lang="id"`. Halaman Inggris memakai `lang="en"`.
- Yang diterjemahkan: menu, judul bagian, tombol, dan kalimat deskripsi.
- Yang tidak diterjemahkan: Hasan Basri, Web Developer & Graphic Designer, Rota International, LexaFX, Helix, Echlo Beauty, Alam Bukit Tigapuluh, MetaTrader 5, Ekonomi Pembangunan, Universitas Jambi, SDN 73 Muaro Jambi, SMPN 1 Muaro Jambi, SMK Revany Indra Putra, Bali, Jambi, Kota Jambi, WordPress, React, Node.js, PHP, WhatsApp, Instagram, Email.

Teks kedua bahasa disimpan terpisah. Jangan mencampur terjemahan di tengah kalimat.

## Susunan halaman

Satu halaman yang digulir, urutannya tetap:

1. Pembuka.
2. Karya.
3. Yang saya kerjakan, jangkar `layanan`. Bagian ini ada di halaman, tidak ada di menu.
4. Tentang.
5. Kontak.

Tautan bagian hanya tiga: Karya, Tentang, Kontak. Sakelar bahasa ada di menu atas, di samping ketiga tautan itu. Di layar sempit menu tetap bisa dipilih dengan ketukan, tanpa gulir mendatar.

Tidak ada halaman detail karya. Tidak ada bagian riwayat kerja terpisah pada halaman yang sudah terbit. Baris pendidikan pada pratinjau lokal dijelaskan di bagian Pemeriksaan tampilan.

## Teks terkunci

### Menu

| Indonesia | Inggris | Tujuan |
| --- | --- | --- |
| Karya | Work | `#karya` |
| Tentang | About | `#tentang` |
| Kontak | Contact | `#kontak` |

### Pembuka

Nama yang terlihat di pembuka: Hasan Basri.

Peran: Web Developer & Graphic Designer.

Indonesia: Saya membangun website dan panel dari nol, lalu merawatnya. Berbasis di Bali.

Inggris: I build websites and panels from scratch, then keep them running. Based in Bali.

| Tombol | Indonesia | Inggris | Tujuan |
| --- | --- | --- | --- |
| Utama | Lihat karya | View work | `#karya` |
| Kedua | Hubungi saya | Contact me | `#kontak` |

Tidak ada foto pada halaman yang sudah terbit. Monogram HB hanya untuk favicon. Ilustrasi pada pratinjau lokal dijelaskan di bagian Pemeriksaan tampilan.

Judul tab sama di kedua bahasa: `Hasan Basri | Web Developer & Graphic Designer`.

Deskripsi singkat:

- Indonesia: Portofolio Hasan Basri, web developer dan graphic designer di Bali.
- Inggris: Portfolio of Hasan Basri, a web developer and graphic designer in Bali.

### Yang saya kerjakan

Judul bagian: Yang saya kerjakan / What I do.

Dua jalur, tanpa daftar logo:

1. Website dan panel / Websites and panels. Indonesia: Dibangun dari nol, lalu dirawat. Alat dipilih sesuai kebutuhan. Inggris: Built from scratch, then maintained. The tools follow the work.
2. Desain / Design. Indonesia: Visual untuk web dan merek, dari latar belakang desain. Inggris: Visual work for the web and the brand, from a design background.

Kalimat Tentang boleh menyebut rentang alat. Kartu karya hanya menyebut alat yang dikonfirmasi untuk karya itu. Node.js dan PHP belum ditempel ke satu kartu.

### Tentang

Indonesia:

Saya Hasan Basri, web developer dan graphic designer berbasis di Bali. Saya lulus Ekonomi Pembangunan dari Universitas Jambi pada 2023. Latar belakang desain saya bawa ke setiap website yang saya buat, jadi tampilan dan fungsi berjalan bersama. Saya bekerja sebagai vibe coder: alat mengikuti pekerjaan, dari WordPress, React, Node.js, sampai PHP.

Inggris:

I'm Hasan Basri, a web developer and graphic designer based in Bali. In 2023 I graduated from Universitas Jambi with a degree in Ekonomi Pembangunan. I bring a design background to every website I build, so appearance and function stay together. I work as a vibe coder: the tools follow the job, from WordPress and React to Node.js and PHP.

Kata vibe coder hanya ada di kalimat ini, tidak di pembuka.

### Kontak

Judul: Kontak / Contact.

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

1. Rota International, kartu utama, dengan tangkapan layar situs klien.
2. LexaFX, kartu utama, dengan tangkapan layar situs klien.
3. Echlo Beauty, kartu utama, dengan tangkapan layar halaman masuk, tanpa tautan.
4. Alam Bukit Tigapuluh, kartu sekunder di bawah tiga kartu utama. Kartunya lebih kecil, dengan tangkapan layar dan tautan.

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

Nama publik tetap Hasan Basri. Tulisan Al Basri Dev di footer situs klien tidak dibawa ke halaman yang sudah terbit. Pratinjau lokal memakai tulisan kaki Al Basri Dev.

## Tampilan

Gelap dari awal. Tidak ada mode terang.

| Token | Nilai | Pemakaian |
| --- | --- | --- |
| Latar | `#121417` | Seluruh halaman |
| Teks | `#f3f1ea` | Teks utama |
| Teks redup | `#b7b3a8` | Keterangan |
| Aksen | `#8eafd4` | Tautan, garis, dan tanda bahasa yang aktif |
| Garis | `rgba(243, 241, 234, 0.14)` | Pemisah |

Aksen dipakai untuk tautan, garis, dan tanda bahasa yang aktif. Teks kecil yang bukan tautan memakai warna teks utama atau teks redup.

Huruf judul: Instrument Serif. Huruf teks: Outfit. Saat kode dibuat, kedua font disimpan di repositori. Jika font gagal dimuat, pakai serif cadangan untuk judul dan sans-serif cadangan untuk teks.

Banyak ruang kosong. Ukuran kartu mengikuti bagian Empat karya. Gerakan hanya transisi singkat saat kursor berada di atas elemen, dan saat bahasa berganti. Hormati `prefers-reduced-motion`. Isi halaman tidak menunggu animasi.

Kepala halaman, yang memuat nama dan menu, menempel saat halaman digulir. Saat tautan jangkar dibuka, judul bagian tetap terlihat di bawah kepala itu.

Acuan yang tidak ditiru: `https://mardiansyah-gunting.github.io/personal/`. Jangan membawa menu bernomor, grafik frekuensi keahlian, galeri foto per jabatan, atau deretan riwayat kerja yang panjang.

## Pemeriksaan tampilan

Beranda `https://isak.botble.com/` dibandingkan di komputer lewat folder `_isak_preview/`. Folder itu diabaikan Git. Pratinjau lokal sudah memakai sebagian data Hasan. Halaman yang sudah terbit belum diganti.

Skrip otomatisnya `_isak_preview/ukur-beranda.js`. Tempel berkas itu di konsol pada beranda referensi. Skrip membaca ukuran huruf, warna, jarak, radius, dan bayangan, lalu menyimpan dua berkas di `_isak_preview/exports/`. Salinan yang sama ada di `window.__ISAK_HOME_MEASURE__`. Halaman tidak diklik, tidak digulir, dan isi serta gayanya tidak diubah. Teks pengunjung tidak disimpan, hanya panjang teks. Jika skrip masih berjalan, tempelan berikutnya ditolak.

Skrip turnya `_isak_preview/ukur-titik.js`. Tempel berkas itu di konsol yang sama, pada jendela lebar, lalu ulangi pada layar sempit. Pita kuning menulis langkah. Cincin kuning menandai satu contoh tiap jenis kotak: kartu karya, judul karya, layanan, tombol hijau, logo klien, batang keahlian, kutipan, panah, ikon kanan, baris jabatan, penghargaan, bidang formulir, tombol kirim, menu, dan kutipan kaki. Klik tidak membuka tautan, tidak membuka panel, dan tidak mengirim formulir. Sejak jari menyentuh, aksi asli halaman referensi tidak berjalan, termasuk menu dan ikon setting. Langkah yang gayanya berubah saat kursor di atas menunggu Enter. Skrip ini boleh menggulir halaman referensi supaya kotak yang semula tersembunyi terukur. Escape melewati langkah. Cookie dan jendela newsletter tidak diukur. Hasilnya disimpan di folder yang sama, dan salinannya ada di `window.__ISAK_TITIK__`.

Kutipan kaki tidak menerima klik, jadi ukurannya dibaca langsung dari `p.quote-text` pada jendela lebar dan layar sempit. Kelas `font-3` tertulis dua kali: yang pertama EB Garamond, yang belakangan Inter. Huruf yang terlihat mengikuti yang belakangan, yaitu Inter. Judul layanan dibaca langsung dari `h3` di dalam baris accordion. Hasil bacaan itu tidak di-commit dan tidak diunggah.

Huruf pratinjau lokal: Funnel Display untuk judul, Geist untuk teks. Keduanya berlisensi SIL Open Font License. Berkas huruf dan teks lisensi ada di `_isak_preview/fonts/`. Geist Mono tidak dipakai. Halaman publik tetap memakai Instrument Serif dan Outfit sampai tampilan lokal disetujui.

Pratinjau lokal tidak menampilkan bilah cookie dan tidak menampilkan jendela newsletter. Bilah cookie pada demo hanya pemberitahuan persetujuan cookie. Situs ini tidak memasang cookie analitik atau iklan.

Jarak pratinjau lokal mengikuti kotak yang sudah terukur: kartu profil mengikuti tinggi jendela, kolom isi, judul, dan kartu karya. Bagian layanan, keahlian, formulir, dan kutipan pada referensi tidak lagi menampilkan teks demo. Angka ukur tidak ditulis di berkas ini. Angka ukur tidak mengubah susunan halaman publik.

Kartu profil dan kolom alat pada pratinjau lokal mengikuti susunan HTML referensi. Ikon lampu, pengaturan warna, dan tombol kembali ke atas memakai lingkaran. Kartu kiri punya garis tepi. Tulisan ketersediaan dibaca dari bawah ke atas. Kolom alat memuat sakelar mode, empat tautan dengan dua garis pemisah, tooltip, dan tombol kembali ke atas. Di layar sempit, daftar tautan itu disembunyikan. Sakelar mode tidak membalik halaman ke mode terang.

Jam pada pratinjau lokal terdiri dari dua baris berukuran teks kecil. Di layar sempit, logo tampil di kepala halaman dan logo pada kartu disembunyikan. Label bagian memakai ukuran keterangan kecil dan ikon.

Yang sudah dipasang di pratinjau lokal:

- Nama di pembuka: Hasan Basri. Peran: Web Developer & Graphic Designer.
- Kalimat pembuka: Saya membangun website dan panel dari nol, lalu merawatnya. Berbasis di Bali.
- Angka 8+ untuk pengalaman sejak 2018, dan 10+ untuk proyek selesai. Angka 10+ berasal dari Hasan dan mencakup desain grafis. Empat karya yang disebut namanya tetap yang di tabel Empat karya. Nama proyek desain grafis tidak ditambahkan.
- Ikon kartu: Facebook `https://www.facebook.com/profile.php?id=61591124157352` dan Instagram `https://www.instagram.com/albasri.dev/`. Tidak ada tombol unduh CV.
- Empat baris pendidikan, dari yang terbaru. Garis di samping baris itu mengikuti guliran dan menembus titik. 2016–2023, Ekonomi Pembangunan, Universitas Jambi. 2014–2016, SMK Revany Indra Putra, Kota Jambi. 2010–2014, SMPN 1 Muaro Jambi. 2004–2010, SDN 73 Muaro Jambi. Nama sekolah tidak diterjemahkan. "Jambi Luar Kota" tidak ditulis. Kelulusan universitas berakhir 2023, bukan Now.
- Ilustrasi karakter pada kartu: potret dada gaya 3D, kemeja gelap, latar gelap, senyum, rambut digelung. Tangan tidak digambar. Itu bukan foto Hasan.
- Bagian Tentang pada pratinjau lokal memakai kalimat Tentang yang terkunci. Judulnya: Tampilan dan fungsi berjalan bersama. Di bawah paragraf ada dua jalur, tanpa tahun: Website dan panel, dan Desain. Daftar penghargaan tidak ditampilkan.
- Pratinjau lokal berbahasa Indonesia di seluruh teks pengunjung. Halaman Inggris yang sudah terbit tetap di `/en/`.
- Tulisan kaki: AL BASRI terisi, DEV garis, monogram HB di tengah, dan baris hak cipta © 2026 Al Basri Dev.
- Pita klien, pita penghargaan, dan bagian testimoni tidak ditampilkan.

Contoh demo yang sudah diganti: daftar penghargaan, kartu karya, layanan, batang keahlian, formulir, dan kutipan Steve Jobs. Kartu karya memakai empat karya di tabel Empat karya. Dua jalur layanan tampil di bawah paragraf Tentang, bukan sebagai bagian terpisah. Batang keahlian tidak ditampilkan karena angkanya tidak ada. Formulir diganti tiga saluran kontak. Kutipan Steve Jobs tidak ditampilkan. Tulisan kaki Al Basri Dev tetap. Halaman publik tidak memuat daftar sekolah, ilustrasi, atau susunan pratinjau ini.

Contoh cara kerja kedua skrip tetap `script-bump.js`. Berkas contoh itu tidak diubah. Skrip, huruf pratinjau, dan hasil ukur diabaikan Git, termasuk berkas `isak-beranda-*` dan `isak-titik-*` yang tersimpan di akar folder.

Susunan halaman publik tetap seperti yang sudah terbit. Perubahan halaman publik pada giliran ini hanya berkas tangkapan layar dan gambar kartu Echlo Beauty. Ilustrasi, daftar sekolah, berkas pratinjau, dan hasil ukur tidak di-commit dan tidak diunggah. Penggantian susunan halaman publik menunggu persetujuan tampilan lokal.

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
  - `public/fonts/` menyimpan Instrument Serif, Outfit, dan berkas lisensi OFL.
  - `public/works/rota.jpg`, `public/works/lexafx.jpg`, `public/works/alam-bukit.jpg`, dan `public/works/echlo.jpg` adalah tangkapan layar.
  - `.github/workflows/deploy.yml` membangun situs dan mengunggahnya ke GitHub Pages.

## Tidak masuk ke situs portofolio

- Tombol unduh CV. Kedua PDF ini bahan internal: `CV ATS Hasan Basri.pdf` dan `Curriculum Vitae Hasan Basri Baru.pdf`.
- Formulir kontak.
- Tautan Twitter dan profil GitHub. Unggah ke GitHub Pages tetap dilakukan. Nomor ditampilkan sebagai WhatsApp, tanpa tautan telepon terpisah. Ikon Facebook hanya ada pada pratinjau lokal. Halaman yang sudah terbit belum menampilkan Facebook.
- Foto diri pada halaman yang sudah terbit. Favicon monogram HB tetap ada. Pratinjau lokal memakai ilustrasi karakter, bukan foto Hasan.
- Bagian riwayat terpisah, penghargaan, dan batang keahlian pada halaman yang sudah terbit. Kalimat kelulusan di bagian Tentang tetap ada. Pratinjau lokal punya empat baris pendidikan, seperti di bagian Pemeriksaan tampilan.
- Daftar SD, SMP, dan SMK pada halaman yang sudah terbit. Pratinjau lokal memuat SDN 73 Muaro Jambi, SMPN 1 Muaro Jambi, dan SMK Revany Indra Putra, Kota Jambi. Magang, admin, esports, turnamen, dukungan POS, Sangkek, SoU Group, WWF, Ai-CHA, DLT Universitas Jambi, Sorot Jambi, situs dosen Muhammad Ridwansyah, dan Mitra Kevin Abadi tetap di luar.
- Umur, tanggal lahir, agama, jenis kelamin, dan alamat jalan. Nilai itu tidak disalin ke dokumen ini.
- Email `hasan.n.dev@mail.com`. Email yang dipakai hanya `hasan.n.dev@gmail.com`.
- Elementor dan nama tema WordPress, di halaman maupun di kartu.
- Node.js dan PHP sebagai label kartu. Keduanya hanya boleh muncul di kalimat Tentang.

Abaikan lokasi, jabatan, dan daftar pekerjaan di dalam kedua PDF. Pakai identitas, teks, dan empat karya di spesifikasi ini. `CV ATS Hasan Basri.pdf` lebih baru daripada `Curriculum Vitae Hasan Basri Baru.pdf`, dan keduanya tetap kalah dari spesifikasi ini.

## Contoh keputusan

Salah: menambah kartu Sangkek karena namanya ada di CV. Benar: tolak. Karya publik yang disebut namanya hanya empat baris di tabel bagian Empat karya. Angka 10+ pada pratinjau tidak menambah kartu.

Salah: menerjemahkan LexaFX di halaman Inggris. Benar: nama tetap. Yang berganti hanya kalimat deskripsi.

Salah: tombol Echlo menuju halaman masuk. Benar: kartu memakai gambar halaman masuk, tanpa tautan, dengan penjelasan panel.

## Saat kode sudah ada

Salin teks pengunjung dari berkas ini. Jika teks di kode perlu diubah, ubah berkas ini pada perubahan yang sama. Tata letak berkas kode dicatat di bawah judul Teknologi situs, lalu `docs/progress.md` dicentang.
