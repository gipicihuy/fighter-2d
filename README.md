# Fighter 2D

Game fighting 2D sederhana (HTML5 canvas, tanpa dependensi) dari sprite sheet.
Karakter: **Karakter 1**, **Patrick**, **CEO SAWIT**, **HASHIM MA'JUJ**, dan **RAJA MADURA** (lihat bagian di bawah), (ULT & skill = lempar sawit, ada suara; skill melempar 3 sawit sekaligus di tiga ketinggian (atas, tengah, bawah; tiap sawit 75% damage), dan proyektil hanya bertabrakan kalau tingginya sejajar; damage keluar x1.35, damage masuk x0.72, dari Patrick cuma x0.12 dan dari Karakter 1 cuma x0.08 (geli doang); sawit ULT homing: ngejar target, tidak bisa dihindari/diblok, menembus proyektil kecil (proyektil lawan yang ketabrak pecah berkeping-keping, lengkap dengan serpihan dan suara pecah), bikin lawan sisa sekitar 5 HP kalau kena damage penuh; kalau musuh lebih dari satu, ULT menyebar ke SEMUA musuh dan tiap musuh kena damage berbeda, kira-kira 55% sampai 100%, tetap sakit; ada efek aura emas yang menyebar: gelombang di lantai, sinar, dan pilar api di tiap musuh yang kena). CEO SAWIT punya **Kenbunshoku Haki**: kadang (sekitar 55%) menghindar otomatis dari pukulan/tendangan lawan, lengkap dengan aura, afterimage, dan suara hindaran. Gerakan semua karakter dihaluskan (render interpolasi, akselerasi jalan, tempo animasi serang sedikit diperlambat). CEO SAWIT juga lebih cepat (jalan +30%) dan punya **Dash** (Shift/Q atau ketuk 2x arah): meluncur jauh (±140 px, bisa juga di udara 1x per lompat), kebal sesaat di awal, bisa menembus musuh, bisa dipakai kabur dari stun (tanpa arah = mundur), dan bisa disambung langsung ke serangan. Anti-stunlock: stun sawit setengahnya, setelah pulih dari stun ada armor sebentar (tetap kena damage tapi tidak ke-stun), bangun dari knockdown lebih cepat, dan combo baru memaksa knockdown di hit ke-6. Jumlah musuh bisa dipilih 1 sampai 4 di menu (atau `?n=3`): semua musuh nyerang bareng dengan damage normal masing-masing. Arena sangat lebar (2400 px) dengan kamera mengikuti pemain dan zoom otomatis (makin jauh musuh, makin zoom-out), ada minimap kecil di atas, dan CEO SAWIT tetap bertubuh paling besar (sekitar 27% lebih tinggi dari Patrick) sebagai ciri khasnya; panah merah di tepi layar menunjukkan musuh di luar layar. Default: kamu Karakter 1 lawan bot Patrick. Best of 3 ronde.

## RAJA MADURA (karakter baru, pendekar celurit & sarung sakti - OP di bawah CEO SAWIT)
Pendekar legendaris berkacamata, berpeci tinggi hitam (peci selalu terpasang dan tidak pernah dilepas di setiap jurus maupun pose menang), berbaju hitam, dan bersarung merah batik khas Madura. Menguasai jurus celurit ganda (*dual celurit*) serta sarung sakti yang bisa difungsikan sebagai cambuk penjerat.

Stat tier OP (tepat di bawah CEO SAWIT): damage keluar x1.32, damage masuk x0.74 (dari Patrick cuma x0.14, dari Karakter 1 cuma x0.10), kecepatan +28%, dash sangat lincah (cooldown 22 tick), stun hanya 0.4x, armor pulih 50 tick, serta kebal saat menebas celurit berat.

| Tombol | Jurus |
|---|---|
| **J** | **Tebasan Celurit Cepat**: sabetan celurit ringan beruntun |
| **K** | **Sabetan Celurit Ganda**: tebasan ganda dengan lintasan busur merah-putih |
| **L** | **Sabetan Badai Api**: tebasan berat melompat dengan armor, menghantam tanah menghasilkan ledakan api tajam |
| **U** (20 energi) | **Cambuk Sarung Sakti**: menyentak sarung ke depan, menjerat dan menarik musuh mendekat (*pull & stun*) |
| **I** (50 energi) | **ULTI: ULTI CAROK (ANTI MELESET)**: layar freeze dengan banner `ULTI CAROK!` dan seruan *"Carok!"*, sarung sakti melesat ke seantero arena (jangkauan 2400 px, anti meleset, menembus blokir & haki) yang menjerat dan melilit musuh di mana pun berada (*stun*), menarik musuh dari jauh secara kilat ke depan badan (*global pull*), lalu membabat musuh dengan kombo celurit brutal beruntun (suara tebasan tajam, hitstop bergetar, percikan api merah-emas) dan diakhiri finisher hantaman tanah dahsyat yang mementalkan musuh (*knockdown*)! |

Sprite: `characters/madura/` (`atlas.json` + `spritesheet_transparent.png`).

## HASHIM MA'JUJ (karakter baru, sepadan CEO SAWIT)
Petarung combo yang sudah **diseimbangkan** (sebelumnya terlalu overpower): damage keluar x1.15, damage masuk x0.85 (dari Patrick x0.3, dari Karakter 1 x0.25), jalan +15%, punya **Dash** (Shift/Q atau ketuk 2x arah, cooldown lebih lama dari karakter lain), double jump, anti-stunlock seperti CEO SAWIT, dan tubuh besar (skala 1.2).

**Perubahan balance:** (1) **U dan L punya cooldown** (U 1,5 detik, L 2,5 detik). (2) Damage dari pohon/badak cuma mengisi energi Hashim 0,5x per damage (normal 1,5x), jadi combo tidak bisa jadi loop energi gratis. (3) Damage skill, corner carry, dan wall bounce diturunkan; bonus combo Sawit + Badak x1.25 (dulu x1.6). (4) Pohon sawit **hilang sendiri** (skill 7 detik, ULT 5 detik), maksimal 2 per pemilik, dan ULT sawit raksasa CEO SAWIT menghancurkan pohon yang dilewatinya. (5) **Kulit Badak** cooldown 8 detik, peluang beruntung 10%, damage parry 25%. (6) Peringatan retakan tanah lebih lama (sawit eruption ±0,45 detik), dan **ULT Hashim bisa dihindari dengan Dash** (momen kebal di awal dash).

| Tombol | Jurus |
|---|---|
| J / K | Pukul / tendang normal (ada efek slash biru) |
| **U** (20 energi) | **ATM Sawit / Sawit Eruption** (Special A): retakan tanah + energi hijau sebagai peringatan, lalu pohon kelapa sawit raksasa menyembul tepat di bawah musuh (di depanmu kalau tidak ada musuh) dan melontarkannya ke udara (juggle). Bisa diblok / dihindari dengan menjauh. Cooldown 1,5 detik. |
| **L** (20 energi) | **Badak Jawa Rampage** (Special B): badak menyeruduk cepat. **Corner Carry**: lawan yang kena ditusuk & diseret sampai ujung arena (kamera ikut badak, screen shake terus-menerus). **Wall Bounce**: menabrak dinding, lawan terpental kembali ke tengah arena. Bisa diblok (badak mental) atau dilompati. Cooldown 2,5 detik. |
| **Sawit + Badak Combo** | tekan **U** lalu **L** selagi lawan masih melayang: badak jadi anti-udara, damage x1.25, muncul teks `SAWIT + BADAK COMBO!`. |
| **I** (50 energi) | **ULT: JAWA BEAST RAMPAGE COMBO**: layar freeze, sawit raksasa meletus di bawah musuh (tidak bisa diblok/di-haki, tapi bisa dihindari dengan Dash), lalu badak raksasa menghantam musuh yang masih melayang, menyeret sampai ujung arena, dan wall bounce dengan ledakan emas (dome, sinar, jamur api, pilar, debu). Total damage besar tapi tidak lagi menghabiskan hampir seluruh HP (kira-kira separuh HP kalau kena penuh), dan bisa membunuh musuh yang HP-nya sudah rendah; kena musuh dalam state apa pun kecuali lagi kebal di awal dash. |

Efek: hitstop tiap kena, screen shake (naik saat badak menyeruduk, maksimal saat wall bounce), hit spark putih-oranye, debu & pecahan tanah, energi hijau keemasan, retakan tanah, glare layar. Karakter lain yang lawan Hashim juga bisa kena Corner Carry / Wall Bounce, termasuk saat Hashim jadi bot.
Sprite: `characters/hashim/` (atlas + sheet transparan; 89 frame, termasuk pohon sawit 8 frame, badak 5 frame, dan pose menang). Logika jurus di `index.html`: `CHARDEF.hashim`, `G.castSummon`, `G.treeTick`, `G.rhinoTick`, `G.wallBounce`.

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

## Efek K.O. (cinematic)
Muncul hanya saat ada karakter yang benar-benar kalah (HP habis; bukan time-up). Semua Canvas 2D, tanpa video/GIF/sprite eksternal:
- Flash putih 0-150ms, huruf **K.O.** 3D (extrude, bevel, outline berlapis, inner shadow, gloss, retakan, glow 3 lapis) membesar dengan impact 150-400ms, overshoot 400-700ms, ledakan serpihan + shockwave + distorsi 700-1500ms, fase tahan 1,5-4 detik, lalu meredup halus 4-5 detik.
- Radial burst, garis impact, vignette merah (arena tetap terlihat), screen shake kuat hanya di awal, kilatan energi di sekitar huruf, partikel dari pool (tanpa alokasi per frame).
- Teks kemenangan/kekalahan emas/merah dengan slide-up + scale-in.
- Audio `ko.wav` tidak diubah; ronde berikutnya mulai setelah audio selesai.

### Font K.O.
Font: **`road-rage.otf`** (taruh di root repo, sejajar `index.html`). `@font-face` memakai file lokal dulu, CDN `https://cdn.zass.in/X6Kjo95583.otf` hanya cadangan. Game menunggu font siap (maks 3 detik) sebelum Canvas menggambar K.O.; kalau tidak ada sama sekali, otomatis fallback ke Impact/Arial Black. Cek console: `[K.O.] font RoadRage dimuat`.
Unduh: `curl -L -o road-rage.otf https://cdn.zass.in/X6Kjo95583.otf`


HASHIM MA'JUJ rival CEO SAWIT, sudah di-balance: damage keluar x1.15, masuk x0.85, speed +15%. Punya **Kulit Badak**: saat kena ULT CEO SAWIT, **PARRY** (blok tepat sebelum kena, jendela sekitar 0,2 detik sejak mulai blok; menahan blok lama tidak berguna) = selamat dengan damage 25% tanpa terkunci/knockdown. Tanpa parry masih ada peluang 10% beruntung (damage 40%). Cooldown ±8 detik, jadi tidak kebal. **Pohon sawit** Hashim (skill & ULT): sawit kecil CEO SAWIT pecah kena pohon; ULT sawit raksasa menembus pohon dengan efek pohon pecah berkeping dan pohonnya ikut hancur.

Badak Hashim (skill, combo, dan ULT) **bisa dihindari dengan melompat**: kalau kamu sudah di udara (ketinggian ≥ 40 px) saat badak lewat, badak lewat di bawah dan tidak kena. Pengecualian: musuh yang sedang melayang karena sawit tetap kena (itu inti combo). Pohon sawit Hashim **tidak permanen lagi**: hilang sendiri setelah beberapa detik (skill ±7 detik, ULT ±5 detik), maksimal 2 pohon per pemilik, dan hancur kalau dilewati ULT sawit raksasa.

Bot Hashim kadang **nangkis dengan serudukan badak** (counter) saat lawan menyerang dekat atau melempar sawit kecil: peluang ngikutin level kesulitan, butuh 20 energi, dan ikut kena cooldown L (2,5 detik) seperti pemain. Badak juga memecahkan proyektil kecil lawan yang ditabraknya (ULT sawit raksasa tetap tembus).

Sprite semua karakter punya versi HD 2x (`spritesheet_hd.webp`, dipakai otomatis; kalau gagal dimuat, game jatuh balik ke sheet asli). Posisi tangan per frame disimpan di atlas (`hand`) supaya sarung RAJA MADURA keluar dari tangan.

ULTI CAROK RAJA MADURA: sarung meluncur dari tangan seperti ular (berkelok, mengejar musuh terdekat berapa pun jaraknya, dijamin kena), membelit, menarik musuh dengan mulus (makin jauh makin lama), lalu celurit menyabet beruntun. Gerakannya sengaja diperlambat biar enak dilihat.
