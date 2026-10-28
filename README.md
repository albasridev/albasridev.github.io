# Portofolio Hasan Basri

Situs pribadi Hasan Basri untuk `https://albasridev.github.io`. Fakta isi situs ada di [`docs/spesifikasi.md`](docs/spesifikasi.md).

## Dokumen

| Berkas | Tugas |
| --- | --- |
| [`docs/spesifikasi.md`](docs/spesifikasi.md) | Fakta isi situs. Ubah di sini lebih dulu. |
| [`.cursor/rules/portfolio.mdc`](.cursor/rules/portfolio.mdc) | Cara agen menjaga situs dan dokumen tetap selaras. |
| [`AGENTS.md`](AGENTS.md) | Penunjuk untuk agen. Fakta isi situs tidak ditulis di sini. |
| [`docs/progress.md`](docs/progress.md) | Daftar periksa pembangunan. |
| [`CHANGELOG.md`](CHANGELOG.md) | Riwayat perubahan. |
| [`.gitignore`](.gitignore) | Menjaga kedua PDF CV tetap di luar commit. |

Skill Cursor tidak dibuat. Prosedurnya cukup di aturan. [`AGENTS.md`](AGENTS.md) menunjuk ke spesifikasi dan aturan itu.

## Menjalankan

Perintah ini sama dengan `package.json`:

```
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` membuka situs di komputer. `npm run build` menulis hasil statis ke `dist/`. `npm run preview` menayangkan isi `dist/`.

Pemeriksaan tampilan beranda Isak ada di spesifikasi, bagian Pemeriksaan tampilan. Folder `_isak_preview/` diabaikan Git dan bukan situs publik.

## Publikasi

Tujuan: `https://albasridev.github.io`.

Repositori GitHub yang cocok untuk alamat itu: `albasridev/albasridev.github.io`. Karena alamatnya memakai nama akun GitHub, jalur dasarnya `/`.

Alurnya ada di `.github/workflows/deploy.yml`. Setiap dorongan ke cabang `main` menjalankan `npm ci` dan `npm run build`, lalu mengunggah folder `dist` ke GitHub Pages. Sumber Pages di repositori harus GitHub Actions.

Jika alamat unggah, nama repositori, atau nama PDF berubah, ubah setiap berkas pada baris yang sama di tabel fakta berulang, di awal `docs/spesifikasi.md`.

## CV

Dua PDF di folder ini adalah bahan internal:

- `CV ATS Hasan Basri.pdf`
- `Curriculum Vitae Hasan Basri Baru.pdf`

Keduanya tercantum di `.gitignore`. Jangan di-commit, jangan ditautkan dari situs, dan jangan dijadikan tombol unduh. Jika PDF dan spesifikasi berbeda, yang dipakai spesifikasi.
