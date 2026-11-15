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

Energi naik tiap kena / kasih pukulan. Blok mengurangi damage jadi 20% (chip, tidak bisa membunuh).
Kombo makin lemah, dan hit ke-4 selalu knockdown.

## File
- `index.html` : game
- `preview.html` : preview animasi sprite (versi lama)
- `characters.json`, `atlas.json`, `characters/patrick/` : atlas & sprite sheet
- `serve.py` : server statis port 3000

## Nambah karakter
Tambah folder `characters/<id>/` (atlas.json + png) dan satu baris di `characters.json`.
Karakter baru otomatis dapat punch/kick dasar; untuk heavy/skill/ult tambahkan entri di `CHARDEF` (di `index.html`).
