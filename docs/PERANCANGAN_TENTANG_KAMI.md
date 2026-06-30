# Perancangan: Halaman "Tentang Kami" (React)

> Dokumen perancangan konversi halaman statis `Tentang Kami` (HTML + Tailwind CDN) menjadi komponen React yang terstruktur, konsisten dengan pola proyek `hima_web` yang sudah ada.

---

## 1. Latar Belakang & Tujuan

Saat ini terdapat satu file HTML tunggal berisi keseluruhan halaman **Tentang Kami** (hero, sambutan ketua, timeline sejarah, program studi, sambutan pembina) yang menggunakan Tailwind via CDN dan Tailwind config inline (`<script id="tailwind-config">`).

Tujuan:
- Mengubah HTML statis menjadi komponen-komponen React yang modular dan dapat dipelihara.
- Menyederhanakan/memisahkan tiap bagian (section) ke dalam file tersendiri.
- Mengikuti **pola, styling, dan dark mode** yang sudah dipakai di `src/components/home/*` dan `src/components/struktur/*`.
- Menempatkan semua komponen di folder `src/components/tentang/`.

---

## 2. Analisis Konteks Proyek yang Ada

Agar konsisten, berikut pola yang sudah berjalan dan **wajib diikuti**:

| Aspek | Pola yang Ada | Catatan |
|---|---|---|
| Build tool | Vite | `vite.config.js` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) + `@theme` block di `src/index.css` | Bukan CDN |
| Routing | Hash-based via state `activeTab` di `App.jsx` | Tambah tab baru `tentang` |
| Struktur folder | `src/components/{section}/` | contoh: `home/`, `struktur/` |
| Pola ekspor | `export default function NamaKomponen()` | |
| Dark mode | class-based (`dark:` prefix) | toggle di `Navbar` |
| Font | Inter (body) + Playfair Display/serif (heading) | sudah di `index.html` |
| Ikon | Material Symbols Outlined + `lucide-react` | |
| Palet | primary `#031636`, secondary `#005bc1`, surface `#f8f9ff`, dst | lihat `src/index.css` |

> **Penting:** Navbar & Footer sudah dirender di `App.jsx` secara global. **Komponen Tentang tidak boleh** membuat header/footer sendiri.

---

## 3. Struktur Folder yang Diusulkan

```
src/
└── components/
    └── tentang/
        ├── index.jsx                 # Komposisi halaman (export default TentangKami)
        ├── TentangHero.jsx           # Section 1: Hero
        ├── SambutanKetua.jsx         # Section 2: Sambutan Ketua Himpunan
        ├── JejakLangkah.jsx          # Section 3: Timeline sejarah
        ├── Milestone.jsx             # Sub-komponen: satu item timeline
        ├── ProgramStudi.jsx          # Section 4: Program Studi Informatika
        ├── SambutanPembina.jsx       # Section 5: Sambutan Pembina
        └── data/
            └── tentangData.js        # Pemusatan konten (teks, gambar, milestone)
```

### Penjelasan Tiap File

#### `index.jsx`
- Bertindak sebagai **container/komposisi** seluruh section (analog dengan `src/components/struktur/index.jsx`).
- Mengimpor & menyusun kelima section secara berurutan.
- Membungkus dengan `<section>` pembungkus + dekorasi background (dot grid) bila perlu.

#### `TentangHero.jsx`
- Heading besar, badge, paragraf, dan gambar hero.
- Menerima data teks dari `tentangData.js`.
- Layout responsif: 2 kolom (teks + gambar) di desktop, 1 kolom di mobile.

#### `SambutanKetua.jsx`
- Foto Ketua + sambutan (blockquote + paragraf + nama & periode).
- Layout grid `md:grid-cols-12`.

#### `JejakLangkah.jsx` + `Milestone.jsx`
- `JejakLangkah` merender judul section + iterasi array milestone dari data → memanggil `Milestone`.
- `Milestone` menangani **satu** item timeline (alternating kiri/kanan berdasarkan `index`).
- Menjaga SVG "jalur" dekoratif sebagai background.

#### `ProgramStudi.jsx`
- Penjelasan prodi + daftar domain (Software Engineering, AI, Cybersecurity) + grid gambar & statistik.

#### `SambutanPembina.jsx`
- Foto pembina + sambutan. Background gelap (`bg-primary`).

#### `data/tentangData.js`
- **Pemisahan konten dari presentasi.** Semua teks (ID/EN bila diperlukan), URL gambar, daftar milestone, daftar domain prodi, dan statistik ditaruh di sini sebagai objek/array lalu diekspor.
- Tujuan: gampang diedit tanpa menyentuh markup, dan siap untuk i18n di masa depan.

---

## 4. Rencana Pemetaan Bagian HTML → Komponen

| # | Bagian HTML Asli | Komponen React | Catatan Konversi |
|---|---|---|---|
| 1 | `<section class="...bg-primary">` Hero | `TentangHero.jsx` | Ganti class color Material (mis. `bg-secondary-container`) ke palet proyek (`bg-[#d8e2ff]` / token `@theme`). Tambah dukungan dark mode. |
| 2 | Sambutan Ketua Himpunan | `SambutanKetua.jsx` | Pertahankan layout `md:col-span-5 / 7`. |
| 3 | History / Jejak Langkah | `JejakLangkah.jsx` + `Milestone.jsx` | Milestone → array → `.map()`. Posisi kiri/kanan dari index. |
| 4 | Prodi Section | `ProgramStudi.jsx` | Daftar domain → array; statistik → array. |
| 5 | Pembina Section | `SambutanPembina.jsx` | Background `bg-primary`. |
| — | Navbar & Footer | **(tidak dibuat)** | Sudah ada di `App.jsx`. |

---

## 5. Catatan Styling & Token

1. **Hapus Tailwind CDN & inline config** dari HTML — Tailwind sudah dikelola Vite + `@theme` di `index.css`.
2. **Petakan warna Material Design token** ke palet proyek yang sudah ada:
   - `primary` → `#031636` (sudah ada)
   - `secondary` → `#005bc1` (sudah ada, BUKAN `#e9c400`/kuning dari HTML asli)
   - `surface` → `#f8f9ff`
   - `secondary-container` → `#d8e2ff`
   - dst.
3. **Tambahkan dark mode** pada tiap section (`dark:bg-...`, `dark:text-...`) mengikuti pola `home/*`.
4. **Font heading** gunakan `font-serif` (Playfair Display) untuk konsistensi dengan halaman lain, alih-alih `font-display-lg` custom.
5. **Kelas kustom** seperti `.glass-card` → definisikan di `src/index.css` (blok `@layer components` atau class biasa) bila dipakai, atau ganti dengan utility Tailwind murni (`bg-white/80 backdrop-blur-md border border-...`).

---

## 6. Integrasi Routing

Di `src/App.jsx`:

1. Tambah key navigasi baru `tentang` pada array `links` di `Navbar.jsx` (label "About Us", target `#tentang`).
2. Pada `App.jsx`, tambahkan cabang render untuk `activeTab === 'tentang'` yang merender `<TentangKami />` (analog dengan `structure`).

Contoh skema (bukan kode final):

```
{activeTab === 'structure' ? <StrukturOrganisasi />
 : activeTab === 'tentang' ? <TentangKami />
 : ( <>...home sections...</> )}
```

> Catatan: di HTML asli, item menu "About Us" adalah tab aktif. Di proyek, "About Us" perlu diarahkan ke tab baru `tentang` (bukan scroll ke `#about` di home seperti sekarang). Ini perlu disepakati (lihat §9).

---

## 7. Animasi & Interaksi

HTML asli memakai dua interaksi JS vanilla:
1. **Scroll navbar shadow** — sudah ditangani `Navbar.jsx` (state `isScrolled`). Tidak perlu duplikasi.
2. **IntersectionObserver fade-in** — pindahkan ke custom hook agar reusable.

Saran implementasi:

- Buat `src/components/tentang/useReveal.js` (atau `src/hooks/useReveal.js` bila ingin dipakai lintas halaman) — hook kecil yang memakai `IntersectionObserver` untuk menambah class `opacity-100 translate-y-0` saat elemen masuk viewport.
- Alternatif lebih sederhana: tambahkan utility CSS `@keyframes`/animasi reveal langsung di `index.css` (mengikuti pola `animate-marquee` yang sudah ada).

Rekomendasi: **hook `useReveal`** (lebih bersih & reusable).

---

## 8. Checklist Implementasi

- [ ] Buat folder `src/components/tentang/` + `src/components/tentang/data/`.
- [ ] Buat `tentangData.js` (seluruh konten teks/gambar/milestone).
- [ ] Konversi `TentangHero.jsx` (sesuaikan palet + dark mode).
- [ ] Konversi `SambutanKetua.jsx`.
- [ ] Konversi `JejakLangkah.jsx` + `Milestone.jsx`.
- [ ] Konversi `ProgramStudi.jsx`.
- [ ] Konversi `SambutanPembina.jsx`.
- [ ] Buat `index.jsx` (komposisi).
- [ ] Buat hook `useReveal.js` untuk animasi fade-in.
- [ ] (Opsional) tambahkan `.glass-card`/utility di `index.css` bila dipakai.
- [ ] Integrasi routing di `App.jsx` + item menu di `Navbar.jsx`.
- [ ] Uji: `npm run dev` → navigasi ke Tentang, cek responsif & dark mode.
- [ ] `npm run build` → pastikan tidak ada error lint/build.

---

## 9. Hal yang Perlu Dikonfirmasi Sebelum Implementasi

1. **Gambar asli**: HTML memakai URL gambar dari `lh3.googleusercontent.com/aida-public/...`. Apakah:
   - (a) dipertahankan apa adanya, atau
   - (b) diunduh & dipindahkan ke `src/assets/tentang/` (rekomendasi: lokal, agar tidak bergantung URL eksternal)?
2. **Item menu "About Us"**: saat ini di `Navbar` mengarah ke `#about` (scroll di home). Apakah dialihkan menjadi tab `tentang` tersendiri? (Direkomendasikan YA, agar konsisten dengan maksud halaman ini.)
3. **Palet warna**: HTML asli memakai aksen kuning (`secondary-fixed #e9c400`, `secondary-container #fcd400`). Proyek memakai biru (`#005bc1`). Konfirmasi: **ikuti palet biru proyek** (rekomendasi) atau pertahankan aksen kuning tertentu?
4. **i18n**: Apakah perlu dukungan ID/EN/KR/TW (sesuai dropdown bahasa di Navbar)? Jika ya, `tentangData.js` perlu disusun per-bahasa. (Default draft: ID saja.)
