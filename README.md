# Fighter 2D

Game fighting 2D sederhana (HTML5 canvas, tanpa dependensi) dari sprite sheet.
Karakter: **Karakter 1**, **Patrick**, dan **CEO SAWIT** (ULT & skill = lempar sawit, ada suara; damage keluar x1.35, damage masuk x0.72; sawit ULT menembus proyektil kecil). Default: kamu Karakter 1 lawan bot Patrick. Best of 3 ronde.

## Jalankan
```
python serve.py        # lalu buka http://localhost:3000
```
Termux: `pkg install python`, `python serve.py`, buka `http://localhost:3000` di browser HP.
Langsung main tanpa menu: `http://localhost:3000/?auto=1&l=hard` (level: easy / normal / hard).

## Kontrol
| Aksi | Keyboard | HP (tombol ikon) |
|---|---|---|
| Jalan | A / D atau ← → | stick kiri geser kiri/kanan |
| Lompat | W / ↑ / Spasi | ikon panah ganda |
| Blok | S / ↓ | stick tarik ke bawah |
| Pukul | J (atau Z) | ikon kepalan (terbesar, di bawah jempol) |
| Tendang | K (atau X) | ikon sepatu |
| Pukulan berat (knockdown) | L (atau C) | ikon ledakan ungu |
| Skill / proyektil (20 energi) | U (atau V) | ikon api (ring = isi energi) |
| ULT (50 energi) | I (atau B) | ikon petir merah (menyala kalau siap) |

Tombol lain: **F** fullscreen (atau tombol ⛶), **M** mute (atau tombol 🔊). Suara di-generate lewat WebAudio, tanpa file.

**ULT** (50 energi, garis putih di bar energi): layar freeze + gelap, kebal selama startup, beam jangkauan jauh tapi **rendah dan aktif sebentar**, jadi bisa dihindari dengan **lompat** (waktunya pas sebelum beam keluar) atau diblok. Ada garis peringatan di lantai selama startup. Arah ult dikunci saat dipencet (tidak ikut berputar mengikuti musuh); selama startup karakter hanya maju kalau musuh masih ada di depannya. Kalau musuh lompat melewati dan pindah ke belakang, ult meleset. Kalau kena, musuh terkunci kena 6x beam lalu knockdown (total ~38 damage). Kalau diblok cuma chip ~10 damage. Bisa di-cancel dari pukulan yang sudah kena.

Energi naik cepat tiap kena / kasih pukulan, ngisi sendiri pelan-pelan, dan tiap ronde mulai dengan 25. Karakter **menghadap sesuai arah stick** (stick kiri = hadap kiri, kanan = hadap kanan, termasuk di udara). Lompat sambil menahan arah selalu lompat jauh penuh, jadi gampang melewati musuh, dan arah masih bisa diatur saat di udara. Di HP: **stick analog** di kiri (geser pelan = jalan pelan, geser jauh = cepat, tarik ke bawah = blok) dan tombol **LOMPAT** di kanan.
Blok mengurangi damage jadi 20% (chip, tidak bisa membunuh).
Kombo makin lemah, dan hit ke-4 selalu knockdown.

## File
- `index.html` : game
- `preview.html` : preview animasi sprite (versi lama)
- `characters.json`, `atlas.json`, `characters/patrick/` : atlas & sprite sheet
- `serve.py` : server statis port 3000

## Nambah karakter
Tambah folder `characters/<id>/` (atlas.json + png) dan satu baris di `characters.json`.
Karakter baru otomatis dapat punch/kick dasar; untuk heavy/skill/ult tambahkan entri di `CHARDEF` (di `index.html`).
