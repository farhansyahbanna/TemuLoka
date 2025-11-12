<template>
  <section class="bg-temuloka-bg container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
     <div class="text-center mb-16" data-aos="fade-up">
        
        <h2 class="font-headline text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
          Temukan <span class="text-amber-600">Favorit Barumu</span> 
          <br class="hidden md:block">dalam 3 Langkah
        </h2>
        <p class="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Jelajahi kekayaan UMKM lokal dengan pengalaman yang menyenangkan dan mudah dipahami
        </p>
      </div>

      <!-- Steps dengan timeline visual -->
      <div class="relative max-w-6xl mx-auto">
        
        <!-- Timeline Connector -->
        <div class="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full z-0"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          
          <!-- Step 1 -->
          <div data-aos="fade-right" data-aos-delay="100" class="group">
            <div class="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              
              <!-- Step Number dengan Icon -->
              <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-bold text-white">01</span>
              </div>
              
              <!-- Icon Floating -->
              <div class="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVG2D5J8dbD"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke="#000" stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343"/><path stroke="#fff" stroke-linecap="round" d="m33.222 33.222l8.485 8.485"/></g></mask></defs><path fill="#e17100" d="M0 0h48v48H0z" mask="url(#SVG2D5J8dbD)"/></svg>
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-bold text-zinc-900 text-center mb-4 group-hover:text-amber-600 transition-colors">
                Cari & Temukan
              </h3>
              <p class="text-zinc-600 text-center leading-relaxed mb-6">
                Gunakan search bar cerdas atau jelajahi peta interaktif untuk menemukan UMKM terdekat berdasarkan kategori, rating, atau fasilitas
              </p>
              
              <!-- Features List -->
              <ul class="space-y-2 text-sm text-zinc-500">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Pencarian dengan keyword</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Filter kategori & lokasi</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Peta interaktif real-time</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 2 -->
          <div data-aos="fade-up" data-aos-delay="200" class="group">
            <div class="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              
              <!-- Step Number dengan Icon -->
              <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-bold text-white">02</span>
              </div>
              
              <!-- Icon Floating -->
              <div class="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512"><path fill="#e17100" d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"/></svg>
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-bold text-zinc-900 text-center mb-4 group-hover:text-amber-600 transition-colors">
                Pelajari & Pilih
              </h3>
              <p class="text-zinc-600 text-center leading-relaxed mb-6">
                Eksplorasi profil lengkap UMKM, baca ulasan terverifikasi, lihat galeri foto, dan cek menu sebelum memutuskan
              </p>
              
              <!-- Features List -->
              <ul class="space-y-2 text-sm text-zinc-500">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Profil & galeri lengkap</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Ulasan jujur komunitas</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Info menu & harga terbaru</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 3 -->
          <div data-aos="fade-left" data-aos-delay="300" class="group">
            <div class="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              
              <!-- Step Number dengan Icon -->
              <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-bold text-white">03</span>
              </div>
              
              <!-- Icon Floating -->
              <div class="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#e17100" d="M9.498 5.793c1.42-1.904 3.555-2.46 5.519-1.925c2.12.577 3.984 2.398 4.603 4.934q.048.195.083.39a4.45 4.45 0 0 0-2.774-.07c-1.287-.952-2.881-1.112-4.298-.59c-1.775.655-3.161 2.316-3.482 4.406c-.41 2.676 1.22 5.08 3.525 7.124l.388.336c-.313.022-.631-.027-.935-.092a10 10 0 0 1-.466-.112l-.537-.15C6.35 18.701 3.154 16.6 2.237 13.46c-.732-2.506-.028-5.015 1.52-6.575c1.434-1.445 3.56-2.031 5.741-1.092m1.628 7.448c.428-2.792 3.657-4.168 5.315-1.772a.104.104 0 0 0 .144.025c2.377-1.684 4.94.713 4.387 3.483q-.48 2.41-4.47 4l-.435.17l-.263.108c-.227.089-.467.16-.684.122c-.216-.038-.417-.188-.6-.348l-.31-.28q-3.47-2.986-3.084-5.508"/></g></svg>
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-bold text-zinc-900 text-center mb-4 group-hover:text-amber-600 transition-colors">
                Kunjungi & Dukung
              </h3>
              <p class="text-zinc-600 text-center leading-relaxed mb-6">
                Nikmati pengalaman langsung, dapatkan poin loyalitas, dan bagikan ulasan untuk mendukung UMKM lokal berkembang
              </p>
              
              <!-- Features List -->
              <ul class="space-y-2 text-sm text-zinc-500">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Koin loyalitas & reward</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Check-in & verifikasi kunjungan</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Bagikan pengalamanmu</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
  </section>
</template>

<style scoped>
/* Custom animations untuk extra flair */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover .group-hover\:float {
  animation: float 2s ease-in-out infinite;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>