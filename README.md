# Fighter 2D

Game fighting 2D sederhana (HTML5 canvas, tanpa dependensi) dari sprite sheet.
Karakter: **Karakter 1**, **Patrick**, dan **CEO SAWIT** (ULT & skill = lempar sawit, ada suara; damage keluar x1.35, damage masuk x0.72, dari Patrick cuma x0.12 (geli doang); sawit ULT homing: ngejar target, tidak bisa dihindari/diblok, menembus proyektil kecil, bikin lawan sisa sekitar 5 HP kalau kena damage penuh; kalau musuh lebih dari satu, ULT menyebar ke SEMUA musuh dan tiap musuh kena damage berbeda, kira-kira 55% sampai 100%, tetap sakit; ada efek aura emas yang menyebar: gelombang di lantai, sinar, dan pilar api di tiap musuh yang kena). CEO SAWIT punya **Kenbunshoku Haki**: kadang (sekitar 55%) menghindar otomatis dari pukulan/tendangan lawan, lengkap dengan aura, afterimage, dan suara hindaran. Gerakan semua karakter dihaluskan (render interpolasi, akselerasi jalan, tempo animasi serang sedikit diperlambat). CEO SAWIT juga lebih cepat (jalan +30%) dan punya **Dash** (Shift/Q atau ketuk 2x arah): meluncur jauh (±140 px, bisa juga di udara 1x per lompat), kebal sesaat di awal, bisa menembus musuh, bisa dipakai kabur dari stun (tanpa arah = mundur), dan bisa disambung langsung ke serangan. Anti-stunlock: stun sawit setengahnya, setelah pulih dari stun ada armor sebentar (tetap kena damage tapi tidak ke-stun), bangun dari knockdown lebih cepat, dan combo baru memaksa knockdown di hit ke-6. Jumlah musuh bisa dipilih 1 sampai 4 di menu (atau `?n=3`): semua musuh nyerang bareng dengan damage normal masing-masing. Arena sangat lebar (2400 px) dengan kamera mengikuti pemain dan zoom otomatis (makin jauh musuh, makin zoom-out), ada minimap kecil di atas, dan CEO SAWIT tetap bertubuh paling besar (sekitar 27% lebih tinggi dari Patrick) sebagai ciri khasnya; panah merah di tepi layar menunjukkan musuh di luar layar. Default: kamu Karakter 1 lawan bot Patrick. Best of 3 ronde.

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
| Dash (khusus CEO SAWIT) | Shift / Q, atau ketuk 2x arah | ikon panah ganda biru (muncul kalau pakai CEO SAWIT) |
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
