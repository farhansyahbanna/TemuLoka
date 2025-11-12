<script setup>
import SolutionCard from '@/components/ui/SolutionCard.vue';
import { ref, onMounted } from 'vue';

const animatedStats = ref([
  { number: 0, target: 1000, suffix: '+', label: 'UMKM Terdaftar', duration: 2000 },
  { number: 0, target: 50000, suffix: '+', label: 'Pengguna Aktif', duration: 2000 },
  { number: 0, target: 25, suffix: '+', label: 'Kota di Indonesia', duration: 1500 },
  { number: 0, target: 4.8, suffix: '', label: 'Rating Aplikasi', duration: 1800 }
]);

const startAnimation = () => {
  animatedStats.value.forEach((stat, index) => {
    const startTime = Date.now();
    const duration = stat.duration;
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      stat.number = Math.floor(stat.target * easeOutQuart * 100) / 100;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    setTimeout(animate, index * 200); // Staggered start
  });
};

onMounted(() => {
  // Start animation when component mounts
  setTimeout(startAnimation, 500);
});
</script>

<template>
  <section class="min-h-screen bg-linear-to-bl from-amber-25 via-white to-amber-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-amber-200/20 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-amber-300/10 rounded-full blur-2xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      
      <!-- Main Problem Statement -->
      <div class="text-center mb-20" data-aos="fade-up">

        <h2 class="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
          Capek Hanya Lihat 
          <span class="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent"> Usaha Besar</span> 
          <br class="hidden md:block">di Feed-mu?
        </h2>
        
        <p class="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          UMKM lokal yang autentik sering tersembunyi di balik algoritma media sosial. 
          <span class="text-amber-600 font-semibold">Kami membawa mereka ke depan!</span>
        </p>
      </div>

      <!-- Problem Visualization -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        
        <!-- Left: Visual Problem Representation -->
        <div class="relative" data-aos="fade-right">
          <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
            <!-- Problem Icons Floating -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-lg">❌</span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center p-4 bg-red-50 rounded-2xl border border-red-200">
                <span class="text-3xl mb-2 block">🕒</span>
                <p class="text-sm text-red-700 font-medium">Jam Buka Tidak Jelas</p>
              </div>
              <div class="text-center p-4 bg-red-50 rounded-2xl border border-red-200">
                <span class="text-3xl mb-2 block">🗺️</span>
                <p class="text-sm text-red-700 font-medium">Alamat Membingungkan</p>
              </div>
              <div class="text-center p-4 bg-red-50 rounded-2xl border border-red-200">
                <span class="text-3xl mb-2 block">📞</span>
                <p class="text-sm text-red-700 font-medium">Kontak Tidak Aktif</p>
              </div>
              <div class="text-center p-4 bg-red-50 rounded-2xl border border-red-200">
                <span class="text-3xl mb-2 block">⭐</span>
                <p class="text-sm text-red-700 font-medium">Ulasan Tidak Terpercaya</p>
              </div>
            </div>
            
            <img 
              src="@/assets/images/pria-bingung.png" 
              alt="Pria bingung mencari UMKM" 
              class="w-80 h-80 object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-200/30 rounded-full blur-lg"></div>
        </div>

        <!-- Right: Problem Description -->
        <div class="space-y-6" data-aos="fade-left" data-aos-delay="200">
          <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004" clip-rule="evenodd"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-zinc-900 mb-2">Informasi Berantakan</h3>
              <p class="text-zinc-600 leading-relaxed">
                Harus buka 5 aplikasi berbeda hanya untuk dapat info lengkap satu UMKM. 
                <strong class="text-amber-600">Google Maps, Instagram, GoFood</strong> - semuanya terpisah!
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div class="shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.303 4.398A5.77 5.77 0 0 1 12 15.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 16.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204" clip-rule="evenodd"/><path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-zinc-900 mb-2">Pengalaman Mengecewakan</h3>
              <p class="text-zinc-600 leading-relaxed">
                Datang ke lokasi tapi ternyata tutup, atau tempat tidak sesuai ekspektasi. 
                <strong class="text-amber-600">Waktu dan tenaga terbuang percuma.</strong>
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.817 8.808a4.183 4.183 0 1 1 7.518 2.526l-.133.145c-.065.07-.29.286-.363.347a4 4 0 0 1-.353.266l-1.517 1.045a2.81 2.81 0 0 0-1.215 2.315"/><circle cx="11.754" cy="19.141" r=".984" fill="currentColor"/></g></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-zinc-900 mb-2">Sulit Menemukan Hidden Gems</h3>
              <p class="text-zinc-600 leading-relaxed">
                UMKM terbaik seringkali tidak punya budget marketing besar. 
                <strong class="text-amber-600">Mereka tersembunyi di gang-gang kecil!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Transition Statement -->
      <div class="text-center mb-20" data-aos="zoom-in" data-aos-delay="300">
        <div class="inline-flex items-center gap-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z" clip-rule="evenodd"/></svg>
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-1">Tapi Sekarang...</h3>
            <p class="text-amber-100">Semua masalah itu akan menjadi sejarah!</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z" clip-rule="evenodd"/></svg>
        </div>
      </div>

      <!-- Solution Showcase -->
      <div class="text-center">
      
        
        <h3 class="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 font-headline">
          Kami Hadir untuk 
          <span class="bg-gradient-to-r from-supporting to-amber-600 bg-clip-text text-transparent">Mengubah Segalanya!</span>
        </h3>
        
        <p class="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
          TemuLoka adalah platform terpadu yang menjawab semua masalah pencarian UMKM-mu
        </p>

        <!-- Solution Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <SolutionCard 
            icon="info" 
            title="Informasi Terpusat & Terverifikasi" 
            description="Semua data UMKM melalui proses verifikasi ketat. Dapatkan info jam buka, menu, harga, dan fasilitas yang akurat dan real-time."
            :isPrimary="true"
            data-aos="fade-up" 
            data-aos-delay="100"
            badge="Verified"
          />
          <SolutionCard 
            icon="map" 
            title="Peta Interaktif & Cerdas" 
            description="Jelajahi UMKM terdekat dengan filter cerdas. Cari berdasarkan kategori, rating, fasilitas, atau bahkan 'suasana' yang kamu inginkan."
            data-aos="fade-up" 
            data-aos-delay="200"
            :isPrimary="true"
            badge="Live"
          />
          <SolutionCard 
            icon="review" 
            title="Komunitas yang Jujur & Aktif" 
            description="Ulasan terverifikasi dari pengunjung nyata. Sistem rating yang adil dan tag spesifik untuk pengambilan keputusan yang lebih baik."
            data-aos="fade-up" 
            data-aos-delay="300"
            :isPrimary="true"
            badge="Trusted"
          />
          <SolutionCard 
            icon="coin" 
            title="Dapatkan Koin Loyalitas" 
            description="Setiap kunjungan ke UMKM yang terdaftar akan memberikanmu koin loyalitas yang bisa ditukar dengan diskon atau hadiah menarik."
            data-aos="fade-up" 
            data-aos-delay="300"
            :isPrimary="true"
            badge="Trusted"
          />
          <SolutionCard 
            icon="notif" 
            title="Notifikasi Real-time" 
            description="Dapatkan info promo, event, dan update terbaru dari UMKM favoritmu langsung di ponselmu."
            data-aos="fade-up" 
            data-aos-delay="300"
            :isPrimary="true"
            badge="Trusted"
          />
          <SolutionCard 
            icon="protect" 
            title="Data Terproteksi" 
            description="Privasi dan keamanan data penggunamu adalah prioritas kami. Sistem enkripsi canggih menjaga informasi pribadimu tetap aman."
            data-aos="fade-up" 
            data-aos-delay="300"
            :isPrimary="true"
            badge="Trusted"
          />
        </div>

      </div>

      <!-- Stats Section
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-100 mt-20" data-aos="fade-up">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in animatedStats" :key="index" class="stat-item">
            <div class="text-3xl md:text-4xl font-bold text-amber-600 mb-2 font-headline">
              {{ stat.number }}{{ stat.suffix }}
            </div>
            <div class="text-zinc-600 text-sm md:text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div> -->

      

    </div>
  </section>
</template>

<style scoped>
.text-shadow-black {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-item {
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, #fbbf24, transparent);
}

@media (max-width: 768px) {
  .stat-item:not(:last-child)::after {
    display: none;
  }
}

/* Smooth number animation */
.stat-item div:first-child {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
</style>