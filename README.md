# Fighter 2D

Game fighting 2D sederhana (HTML5 canvas, tanpa dependensi) dari sprite sheet.
Kamu pakai **Karakter 1 (default)**, lawan bot **Patrick**. Best of 3 ronde.

## Jalankan
```
python serve.py        # lalu buka http://localhost:3000
```
Termux: `pkg install python`, `python serve.py`, buka `http://localhost:3000` di browser HP.
Langsung main tanpa menu: `http://localhost:3000/?auto=1&l=hard` (level: easy / normal / hard).

## Kontrol
| Aksi | Keyboard | HP (tombol layar) |
|---|---|---|
| Jalan | A / D atau ← → | ◀ ▶ |
| Lompat | W / ↑ / Spasi | ▲ |
| Blok | S / ↓ | BLOK |
| Pukul | J (atau Z) | PUNCH |
| Tendang | K (atau X) | KICK |
| Pukulan berat (knockdown) | L (atau C) | HEAVY |
| Skill / proyektil (20 energi) | U (atau V) | SKILL |
| ULT (energi penuh) | I (atau B) | ULT |

Tombol lain: **F** fullscreen (atau tombol ⛶), **M** mute (atau tombol 🔊). Suara di-generate lewat WebAudio, tanpa file.

**ULT** (50 energi, garis putih di bar energi): layar freeze + gelap, kebal selama startup, beam jangkauan jauh tapi **rendah dan aktif sebentar**, jadi bisa dihindari dengan **lompat** (waktunya pas sebelum beam keluar) atau diblok. Ada garis peringatan di lantai selama startup. Kalau kena, musuh terkunci kena 6x beam lalu knockdown (total ~38 damage). Kalau diblok cuma chip ~10 damage. Bisa di-cancel dari pukulan yang sudah kena.

Energi naik cepat tiap kena / kasih pukulan, ngisi sendiri pelan-pelan, dan tiap ronde mulai dengan 25. Lompat sambil menahan arah bisa melewati musuh (karakter otomatis berbalik hadap di udara) dan arah masih bisa diatur saat di udara. D-pad di HP satu area: jari boleh digeser antar arah.
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
