<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Sekolah</title>
    <link rel="shortcut icon" href="img/logomci.png" />
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <style>
        /* Custom CSS */
        body {
            font-family: Arial, sans-serif;
        }

        .hero {
            background: url('https://source.unsplash.com/1600x900/?school') no-repeat center center;
            background-size: cover;
            color: black;
            padding: 100px 0;
            text-align: center;
        }

        .features {
            padding: 60px 0;
        }

        .feature-card {
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .cta {
            background: #2a9d8f;
            color: white;
            padding: 50px 0;
            text-align: center;
        }

        .gallery img {
            width: 100%;
            height: auto;
            transition: transform 0.3s ease;
        }

        .gallery img:hover {
            transform: scale(1.05);
        }

        /* Footer */
        .footer a {
            font-size: 1.2rem;
            transition: color 0.3s;
        }

        .footer a:hover {
            color: white;
        }

        

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            #home {
                height: 100vh;
            }
        }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">MCI TIGARAKSA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">Tentang Kami</a></li>
                    <li class="nav-item"><a class="nav-link" href="#programs">Program</a></li>
                    <li class="nav-item"><a class="nav-link" href="#gallery">Galeri</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Kontak</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.php">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero d-flex align-items-center" class="vh-80 d-flex align-items-center"
        style="background-image: url('image/mci.jpg'); background-size: cover; background-position: center;">
        <div class="container ">
            <h1 class="animate__animated animate__fadeInDown text-secondary me-3">Ahlan Wa Sahlan</h1>
            <a href="#about" class="btn btn-primary btn-lg animate__animated animate__zoomIn">Pelajari Lebih Lanjut</a>
            <p class="animate__animated animate__fadeInUp"></p>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="features">
        <div class="container text-center">
            <h2 class="mb-5">Tentang Kami</h2>
            <p>Kami adalah institusi pendidikan yang berdedikasi untuk mencetak siswa berkualitas, berakhlak, dan siap
                menghadapi tantangan masa depan melalui Kurikulum yang mengedepankan
                Pendidikan Diniyah Dan Tahfizhul Qur'an.
                .</p>
            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="feature-card p-4 border rounded animate__animated animate__fadeInUp">
                        <i class="bi bi-mortarboard display-4"></i>
                        <p>Ruangan Belajar Nyaman dan Ber AC.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card p-4 border rounded animate__animated animate__fadeInUp">
                        <i class="bi bi-book display-4"></i>
                        <p>Menggunakan Sumber Buku-buku dengan Referensi Yang Baik dan Mudah Diterapkan Kepada Peserta
                            Didik.</p>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card p-4 border rounded animate__animated animate__fadeInUp">
                        <i class="bi bi-people display-4"></i>

                        <p>Lingkungan yang aman dan mendukung proses pembelajaran optimal.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="cta">
        <div class="container">
            <h2 class="mb-4">VISI DAN MISI</h2>
            <h3>VISI</h3>
            <p>Menjadi Madrasah yang Unggul Dalam Bidang Diniyah (Keagamaan) Khususnya Dalam Hafalan
                Al Qur'an, Hadits, Bahasa Arab Serta Unggul dalam Bidang Akademis.
            </p>
            <h3>MISI</h3>
            <p> - Mendidik Siswa/i untuk memiliki Pemahaman Islam Yang Benar Sesuai Dengan Generasi
                Terbaik Umat Ini dan dengan Mengajarkan Kitab-kitab Para Ulama Ahlus Sunnah Wal Jama'ah.</p>
            <p> - Mendidik Siswa/i Untuk Mencintai Al Qur'an dan Hadits Nabi Muhammad Shalallahu 'alaihi wasallam,
                Serta Memberikan Pembekalan Ilmu Bahasa Arab Sejak Dini.</p>
            <p> - Mendidik Anak agar Memiliki Akhlak yang Mulia mencontoh Akhlak Nabi Muhammad Shalallahu 'alaihi
                Wasallam.</p>
            <p> - Memberikan Kemampuan Dasar kepada Peserta Didik berupa Pengetahuan, Keterampilan, dan Pembiasaan yang
                baik yang dapat
                dipraktikkan dalam kehidupan sehari-hari.</p>
            <a href="#contact" class="btn btn-light btn-lg">Daftar Sekarang</a>
        </div>
   </section>
        <!-- PPDB Picture -->
        <div class="col-md-4 mb-4">
            <h2 class="mb-4">PPDB 2025/2026 MCI Tigaraksa</h2>
            <section id="gallery" class="gallery py-5">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="image/PPDB@2526.jpg" class="d-block w-70" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="image/PPDB2526.jpg" class="d-block w-70" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="image/logomci.png" class="d-block w-70" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

       

    <!-- Gallery Section -->
    <section id="gallery" class="gallery py-5">
        <div class="container">
            <h2 class="text-center mb-5">Galeri Sekolah</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <section id="gallery" class="gallery py-5">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="image/1kelas.jpg" class="d-block h-100" alt="...">
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="image/2kelas.jpg" class="d-block h-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="image/5kelas.jpg" class="d-block h-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                </div>
                <div class="col-md-4 mb-4">
                    <section id="gallery" class="gallery py-5">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="image/msutq 1.png" class="d-block w-70" alt="...">
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="image/logopaudq.jpg" class="d-block w-70" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="image/logotpa.jpg" class="d-block w-70" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>

                </div>
                <div class="col-md-4 mb-4">
                    <section id="gallery" class="gallery py-5">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="image/5kelas.jpg" class="d-block w-70" alt="...">
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="image/6kelas.jpg" class="d-block w-70" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="image/7kelas.jpg" class="d-block w-70" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Hubungi Kami</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form onsubmit="sendMessage()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama</label>
                            <input type="text" class="form-control" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="alamat" class="form-label">Alamat</label>
                            <input type="alamat" class="form-control" id="alamat" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Pesan</label>
                            <textarea class="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Kirim</button>
                    </form>
                </div>
            </div>
        </div>
        <script>
            function sendMessage() {
                const name = document.getElementById("name").value;
                const alamat = document.getElementById("alamat").value;
                const message = document.getElementById("message").value;

                const url = "https://api.whatsapp.com/send?phone=6281288539197&text=Assalamu'alaikum.%0AAdmin%20MCI%20Tigaraksa.%0ASaya%20*" +
                    name + "*%0AAlamat%20Saya%20*" + alamat + "*%0A%0A*" + message + "*";

                window.open(url);
            }
        </script>
    </section>


    <!-- Footer -->
    <footer class="py-4 bg-dark text-white">
        <div class="container text-center">
            <p class="mb-0">&copy; 2024 Yayasan Cinta Ilmu. All Rights Reserved.</p>
            <div class="mt-2">
                <a href="https://m.facebook.com/100088394204909/" class="text-white me-3"><i
                        class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/mci.tigaraksa/p/CovuiXhhZ59/" class="text-white me-3"><i
                        class="fab fa-instagram"></i></a>
                <a href="https://wa.me/6281288539197" class="text-white me-3"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- AOS JS -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>




</body>

</html>
