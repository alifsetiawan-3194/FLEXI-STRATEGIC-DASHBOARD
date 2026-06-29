const rawMappingData = `city_code,city_name
0201,Kabupaten Lebak
0202,Kabupaten Pandeglang
0204,Kabupaten Tangerang
0203,Kabupaten Serang
6413,Konawe Kepulauan
3206,Aceh Barat
3213,Aceh Barat Daya
3201,Aceh Besar
3214,Aceh Jaya
3205,Aceh Selatan
3209,Aceh Singkil
3211,Aceh Tamiang
3207,Aceh Tengah
3208,Aceh Tenggara
3204,Aceh Timur
3203,Aceh Utara
3401,Agam
7405,Alor
3306,Asahan
8228,Asmat
7204,Badung
5111,Balangan
0111,Bandung
0122,Bandung Barat
6003,Banggai
6005,Banggai Kepulauan
6011,Banggai Laut
3701,Bangka
3703,Bangka Barat
3704,Bangka Selatan
3705,Bangka Tengah
1208,Bangkalan
7207,Bangli
5101,Banjar
0917,Banjarnegara
6112,Bantaeng
0501,Bantul
3613,Banyuasin
0914,Banyumas
1211,Banyuwangi
5107,Barito Kuala
5806,Barito Selatan
5805,Barito Timur
5808,Barito Utara
6116,Barru
0929,Batang
3321,Batu Bara
0102,Bekasi
3702,Belitung
3706,Belitung Timur
7404,Belu
3217,Bener Meriah
3502,Bengkalis
5307,Bengkayang
2301,Bengkulu Selatan
2309,Bengkulu Tengah
2302,Bengkulu Utara
5402,Berau
8202,Biak Numfor
7105,Bima
3804,Bintan
3210,Bireuen
1221,Blitar
0913,Blora
6302,Boalemo
0108,Bogor
1227,Bojonegoro
6203,Bolaang Mongondow
6212,Bolaang Mongondow Selatan
6213,Bolaang Mongondow Timur
6210,Bolaang Mongondow Utara
6908,Bombana
1209,Bondowoso
6105,Bone
6303,Bone Bolango
8226,Boven Digoel
0924,Boyolali
0907,Brebes
7201,Buleleng
6111,Bulukumba
5404,Bulungan
3112,Bungo
6007,Buol
8104,Buru
8109,Buru Selatan
6901,Buton
6914,Buton Selatan
6910,Buton Utara
0115,Ciamis
0110,Cianjur
0915,Cilacap
0116,Cirebon
3307,Dairi
8240,Deiyai
3301,Deli Serdang
0903,Demak
3411,Dharmasraya
8233,Dogiyai
7106,Dompu
6001,Donggala
3617,Empat Lawang
7408,Ende
6121,Enrekang
7406,Flores Timur
0114,Garut
3212,Gayo Lues
7205,Gianyar
6301,Gorontalo
6305,Gorontalo Utara
6102,Gowa
1201,Gresik
0904,Grobogan
0503,Gunung Kidul
5807,Gunung Mas
8305,Halmahera Barat
8306,Halmahera Selatan
8302,Halmahera Tengah
8304,Halmahera Timur
8303,Halmahera Utara
5104,Hulu Sungai Selatan
5105,Hulu Sungai Tengah
5106,Hulu Sungai Utara
3316,Humbang Hasundutan
3505,Indragiri Hilir
3504,Indragiri Hulu
0118,Indramayu
8239,Intan Jaya
8201,Jayapura
8213,Jayawijaya
1212,Jember
7202,Jembrana
6113,Jeneponto
0911,Jepara
1204,Jombang
8406,Kaimana
3501,Kampar
5801,Kapuas
5306,Kapuas Hulu
0927,Karanganyar
7208,Karangasem
0106,Karawang
3801,Karimun
3303,Karo
5811,Katingan
2308,Kaur
5311,Kayong Utara
0922,Kebumen
1217,Kediri
8218,Keerom
0902,Kendal
2305,Kepahiang
3805,Kepulauan Anambas
8107,Kepulauan Aru
3409,Kepulauan Mentawai
3513,Kepulauan Meranti
6204,Kepulauan Sangihe
6114,Kepulauan Selayar
0396,Kepulauan Seribu
8307,Kepulauan Sula
6205,Kepulauan Talaud
8210,Kepulauan Yapen
3105,Kerinci
5303,Ketapang
0923,Klaten
7206,Klungkung
6904,Kolaka
6912,Kolaka Timur
6909,Kolaka Utara
6906,Konawe
6907,Konawe Selatan
6911,Konawe Utara
5108,Kotabaru
5802,Kotawaringin Barat
5803,Kotawaringin Timur
3512,Kuantan Singingi
5312,Kubu Raya
0909,Kudus
0504,Kulon Progo
0117,Kuningan
7401,Kupang
5405,Kutai Barat
5401,Kutai Kartanegara
5406,Kutai Timur
3305,Labuhanbatu
3324,Labuhanbatu Selatan
3325,Labuhanbatu Utara
3609,Lahat
5813,Lamandau
1229,Lamongan
3904,Lampung Barat
3901,Lampung Selatan
3902,Lampung Tengah
3907,Lampung Timur
3903,Lampung Utara
5308,Landak
3302,Langkat
8234,Lanny Jaya
2304,Lebong
7413,Lembata
3403,Lima Puluh Kota
3802,Lingga
7101,Lombok Barat
7102,Lombok Tengah
7103,Lombok Timur
7108,Lombok Utara
1216,Lumajang
6109,Luwu
6122,Luwu Timur
6124,Luwu Utara
1222,Madiun
0918,Magelang
1224,Magetan
5413,Mahakam Ulu
0119,Majalengka
6402,Majene
7421,Malaka
1213,Malang
5410,Malinau
8108,Maluku Barat Daya
8101,Maluku Tengah
8102,Maluku Tenggara
6403,Mamasa
8232,Mamberamo Raya
8235,Mamberamo Tengah
6406,Mamuju
6405,Mamuju Tengah
3314,Mandailing Natal
7410,Manggarai
7415,Manggarai Barat
7418,Manggarai Timur
8403,Manokwari
8412,Manokwari Selatan
8227,Mappi
6107,Maros
8410,Maybrat
5310,Melawi
5301,Mempawah
3111,Merangin
8211,Merauke
3912,Mesuji
8215,Mimika
6202,Minahasa
6206,Minahasa Selatan
6209,Minahasa Tenggara
6207,Minahasa Utara
1203,Mojokerto
6006,Morowali
6012,Morowali Utara
3608,Muara Enim
3106,Muaro Jambi
2306,Muko Muko
6903,Muna
6416,Muna Barat
5804,Murung Raya
3606,Musi Banyuasin
3610,Musi Rawas
3618,Musi Rawas Utara
8214,Nabire
3215,Nagan Raya
7419,Nagekeo
3803,Natuna
8236,Nduga
7409,Ngada
1218,Nganjuk
1223,Ngawi
3311,Nias
3326,Nias Barat
3315,Nias Selatan
3327,Nias Utara
5409,Nunukan
3616,Ogan Ilir
3611,Ogan Komering Ilir
3607,Ogan Komering Ulu
3614,Ogan Komering Ulu Selatan
3615,Ogan Komering Ulu Timur
1226,Pacitan
3322,Padang Lawas
3323,Padang Lawas Utara
3405,Padang Pariaman
3317,Pakpak Bharat
1206,Pamekasan
0123,Pangandaran
6118,Pangkajene Kepulauan
8212,Paniai
6009,Parigi Moutong
3402,Pasaman
3410,Pasaman Barat
5403,Paser
1214,Pasuruan
0908,Pati
8411,Pegunungan Arfak
8221,Pegunungan Bintang
0905,Pekalongan
3510,Pelalawan
0910,Pemalang
5411,Penajam Paser Utara
3619,Penukal Abab Lematang Ilir
3909,Pesawaran
3913,Pesisir Barat
3406,Pesisir Selatan
3202,Pidie
3218,Pidie Jaya
6101,Pinrang
6401,Polewali Mandar
1225,Ponorogo
6002,Poso
3910,Pringsewu
1215,Probolinggo
5809,Pulang Pisau
8308,Pulau Morotai
8309,Pulau Taliabu
8238,Puncak
8216,Puncak Jaya
0916,Purbalingga
0103,Purwakarta
0921,Purworejo
8405,Raja Ampat
2303,Rejang Lebong
0912,Rembang
3509,Rokan Hilir
3508,Rokan Hulu
7414,Rote Ndao
7420,Sabu Raijua
5302,Sambas
3318,Samosir
1205,Sampang
5304,Sanggau
8217,Sarmi
3104,Sarolangun
5309,Sekadau
2307,Seluma
0901,Semarang
8105,Seram Bagian Barat
8106,Seram Bagian Timur
3319,Serdang Bedagai
5810,Seruyan
3511,Siak
6117,Sidenreng Rappang
1202,Sidoarjo
6010,Sigi
3408,Sijunjung
7407,Sikka
7407,Simalungun
3216,Simeulue
6110,Sinjai
5305,Sintang
1230,Situbondo
0502,Sleman
3412,Solok
3404,Solok Selatan
6119,Soppeng
8401,Sorong
8404,Sorong Selatan
0925,Sragen
0121,Subang
0109,Sukabumi
5812,Sukamara
0926,Sukoharjo
7412,Sumba Barat
7417,Sumba Barat Daya
7416,Sumba Tengah
7411,Sumba Timur
7104,Sumbawa
7107,Sumbawa Barat
0112,Sumedang
1207,Sumenep
8231,Supiori
5109,Tabalong
7203,Tabanan
6115,Takalar
8409,Tambrauw
5412,Tana Tidung
6106,Tana Toraja
5110,Tanah Bumbu
3407,Tanah Datar
5102,Tanah Laut
3906,Tanggamus
3107,Tanjung Jabung Barat
3108,Tanjung Jabung Timur
3310,Tapanuli Selatan
3309,Tapanuli Tengah
3308,Tapanuli Utara
5103,Tapin
0113,Tasikmalaya
3109,Tebo
0906,Tegal
8407,Teluk Bintuni
8408,Teluk Wondama
0919,Temanggung
7402,Timor Tengah Selatan
7403,Timor Tengah Utara
3313,Toba Samosir
6125,Toraja Utara
1220,Trenggalek
1228,Tuban
3905,Tulang Bawang
3911,Tulang Bawang Barat
1219,Tulungagung
6103,Wajo
6905,Wakatobi
8224,Waropen
3908,Way Kanan
0928,Wonogiri
0920,Wonosobo
8222,Yahukimo
8237,Yalimo
8191,Ambon
5492,Balikpapan
3291,Banda Aceh
3991,Bandar Lampung
0291,Kota Cilegon
0180,Banjar
5192,Banjarbaru
5191,Banjarmasin
3892,Batam
1271,Batu
2391,Bengkulu
3392,Binjai
6293,Bitung
5494,Bontang
3491,Bukittinggi
0196,Cimahi
7291,Denpasar
0197,Depok
3592,Dumai
3397,Gunungsitoli
0393,Jakarta Barat
0391,Jakarta Pusat
0394,Jakarta Selatan
0395,Jakarta Timur
0392,Jakarta Utara
3191,Jambi
6991,Kendari
6292,Kotamobagu
3294,Langsa
3293,Lhokseumawe
3693,Lubuk Linggau
6191,Makassar
6291,Manado
7191,Mataram
6008,Kabupaten Tojo Una Una
3396,Medan
3992,Metro
0292,Kota Tangerang
3492,Padang
3494,Padang Panjang
3697,Pagar Alam
3691,Palembang
6193,Palopo
6091,Palu
3791,Pangkal Pinang
3497,Pariaman
0293,Kota Serang
3496,Payakumbuh
0294,Kota Tangerang Selatan
3591,Pekanbaru
5391,Pontianak
3694,Prabumulih
3292,Sabang
0992,Salatiga
5491,Samarinda
3395,Sibolga
5392,Singkawang
3219,Subulussalam
1291,Surabaya
0996,Surakarta
3394,Tanjung Balai
3891,Tanjung Pinang
5493,Tarakan
3391,Tebing Tinggi
8390,Ternate
8391,Tidore Kepulauan
6294,Tomohon
8192,Tual
0591,Yogyakarta
0191,BANDUNG KOT.
0198,BEKASI KOT.
0192,Kota Bogor
0194,CIREBON KOT.
0193,KOTA SUKABUMI
0195,KOTA TASIKMALAYA
0995,MAGELANG KOT.
0993,PEKALONGAN KOT.
0991,SEMARANG KOT.
0994,TEGAL KOT.
1296,BLITAR KOT.
1297,KEDIRI KOT.
1298,KOTA MADIUN
1293,KOTA MALANG
1292,KOTA MOJOKERTO
1294,KOTA PASURUAN
1295,KOTA PROBOLINGGO
3495,KOTA SOLOK
6391,GORONTALO KOT.
7192,KOTA BIMA
7491,KOTA KUPANG
8291,JAYAPURA KOT.
8491,KOTA SORONG
8290,Tolikara
6415,Buton Tengah
6404,Kabupaten Pasangkayu
8103,Kabupaten Kepulauan Tanimbar
6192,Kota Pare Pare
6211,Kabupaten Kepulauan Siau Tagulandang Biaro
5892,Kota Palangkaraya
3101,Kabupaten Batanghari
8402,Kabupaten Fak Fak
3192,Kota Sungai Penuh
6304,Kabupaten Pahuwato
6004,Kabupaten Toli Toli
3493,Kota Sawahlunto
3399,Kota Padangsidimpuan
3393,Kota Pematangsiantar
6990,Kota Bau Bau`;
