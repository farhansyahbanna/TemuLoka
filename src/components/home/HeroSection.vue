<script setup>
import { ref, onMounted } from 'vue';
import { umkmDatabase } from '@/data/database.js';

const statsRef = ref(null);
const heroImages = ref([
  { src: '@/assets/images/hero-nasi.jpg', alt: 'Nasi Campur Tradisional', category: 'Makanan' },
  { src: '@/assets/images/hero-nasi-lemak.jpg', alt: 'Nasi Lemak Gurih', category: 'Kuliner' },
  { src: '@/assets/images/hero-coffee.jpg', alt: 'Kopi Tradisional', category: 'Minuman' },
  { src: '@/assets/images/hero-craft.jpg', alt: 'Kerajinan Tangan', category: 'Kerajinan' }
]);

const umkmCount = ref(0);
const userCount = ref(0);
const reviewCount = ref(0);
const cityCount = ref(0);

const targetUmkm = umkmDatabase.umkm.length;
const targetUser = umkmDatabase.users.length;
const targetReview = umkmDatabase.reviews.length;
const targetCity = 25; // Static value for cities

const isVisible = ref(false);

function animateCount(displayRef, start, end, duration) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    displayRef.value = Math.floor(easeOutQuart * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      displayRef.value = end;
    }
  };
  window.requestAnimationFrame(step);
}

onMounted(() => {
  const options = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        animateCount(umkmCount, 0, targetUmkm, 2000);
        animateCount(userCount, 0, targetUser, 2000);
        animateCount(reviewCount, 0, targetReview, 2000);
        animateCount(cityCount, 0, targetCity, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (statsRef.value) {
    observer.observe(statsRef.value);
  }
});
</script>

<template>
  <section class="min-h-screen bg-linear-to-br from-amber-50 via-white to-amber-25 relative overflow-hidden">
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="min-h-screen flex items-center pt-16 pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          <!-- Left Content -->
          <div class="space-y-8">
            <!-- Badge -->
            <div data-aos="fade-right" data-aos-delay="100" 
                 class="inline-flex items-center gap-3 bg-amber-100 border border-amber-600 text-white px-6 py-3 rounded-2xl shadow-lg">
             
              <span class="font-semibold text-amber-600">Platform UMKM Terpercaya</span>
              <div class="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            </div>

            <!-- Main Heading -->
            <div class="space-y-6">
              <h1 data-aos="fade-right" data-aos-delay="200" 
                  class="font-headline text-3xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-tight">
                Temukan 
                <span class="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Cerita & Rasa
                </span>
                
                di Setiap Sudut
                <span class="relative">
                  Kotamu
                  <div class="absolute -bottom-2 left-0 w-full h-2 bg-amber-200/50 rounded-full"></div>
                </span>
              </h1>

              <p data-aos="fade-right" data-aos-delay="300" 
                 class="text-light-neutral md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                Jelajahi kekayaan UMKM lokal yang autentik. Dari 
                <span class="text-amber-600 font-semibold">warung kopi legendaris</span> hingga 
                <span class="text-amber-600 font-semibold">pangkas rambut andalan</span> - semua dalam genggamanmu.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div data-aos="fade-up" data-aos-delay="400" class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/explore-umkm" 
                class="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center">
                
                Jelajahi UMKM
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </router-link>
              
              <button class="group border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 justify-center">
                
                Lihat Demo
              </button>
            </div>

            <!-- Stats -->
            <div ref="statsRef" class="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8" data-aos="fade-up" data-aos-delay="500">
              <div class="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <p class="text-3xl font-bold text-amber-600 mb-1 font-headline">
                  {{ umkmCount }}+
                </p>
                <p class="text-sm font-medium text-zinc-600">UMKM Terdaftar</p>
              </div>
              
              <div class="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <p class="text-3xl font-bold text-amber-600 mb-1 font-headline">
                  {{ reviewCount }}+
                </p>
                <p class="text-sm font-medium text-zinc-600">Ulasan Jujur</p>
              </div>

              <div class="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <p class="text-3xl font-bold text-amber-600 mb-1 font-headline">
                  {{ userCount }}+
                </p>
                <p class="text-sm font-medium text-zinc-600">Pengguna Aktif</p>
              </div>
              
              <div class="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <p class="text-3xl font-bold text-amber-600 mb-1 font-headline">
                  {{ cityCount }}+
                </p>
                <p class="text-sm font-medium text-zinc-600">Kota di Indonesia</p>
              </div>
            </div>

            <!-- Trust Badges -->
            <div data-aos="fade-up" data-aos-delay="600" class="flex items-center gap-6 pt-4">
              <div class="flex items-center gap-2 text-sm text-zinc-500">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Data Terverifikasi
              </div>
              <div class="flex items-center gap-2 text-sm text-zinc-500">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Update Real-time
              </div>
              <div class="flex items-center gap-2 text-sm text-zinc-500">
                <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                Komunitas Terpercaya
              </div>
            </div>
          </div>

          <!-- Right Content - Image Gallery -->
          <div class="relative">
            <!-- Main Image Stack -->
            <div class="relative h-[600px]">
              <!-- Floating Card 1 -->
              <div data-aos="fade-left" data-aos-delay="300" 
                   class="absolute top-0 right-0 w-80 h-96 bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="@/assets/images/hero-nasi.jpg" alt="Nasi Campur Tradisional" 
                     class="w-full h-2/3 object-cover">
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span class="text-sm font-semibold text-zinc-900">Buka Sekarang</span>
                  </div>
                  <h3 class="font-semibold text-zinc-900 mb-1">Warung Nasi Campur Bu Siti</h3>
                  <p class="text-sm text-zinc-600">Sejak 1995 • Makanan</p>
                  <div class="flex items-center gap-1 mt-2">
                    <span class="text-amber-500">★★★★★</span>
                    <span class="text-sm text-zinc-500">(4.8)</span>
                  </div>
                </div>
              </div>

              <!-- Floating Card 2 -->
              <div data-aos="fade-left" data-aos-delay="500" 
                   class="absolute bottom-0 left-0 w-72 h-80 bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="@/assets/images/hero-nasi-lemak.jpg" alt="Nasi Lemak Gurih" 
                     class="w-full h-2/3 object-cover">
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span class="text-sm font-semibold text-zinc-900">Buka Sekarang</span>
                  </div>
                  <h3 class="font-semibold text-zinc-900 mb-1">Kedai Nasi Lemak Mak Limah</h3>
                  <p class="text-sm text-zinc-600">Legendaris • Kuliner</p>
                  <div class="flex items-center gap-1 mt-2">
                    <span class="text-amber-500">★★★★☆</span>
                    <span class="text-sm text-zinc-500">(4.6)</span>
                  </div>
                </div>
              </div>

              <!-- Floating Card 3 -->
              <div data-aos="fade-left" data-aos-delay="700" 
                   class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-72 bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <img src="@/assets/images/hero-coffee.jpg" alt="Kopi Tradisional" 
                     class="w-full h-2/3 object-cover">
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span class="text-sm font-semibold text-zinc-900">Buka Sekarang</span>
                  </div>
                  <h3 class="font-semibold text-zinc-900 mb-1">Kopi Teman Sejati</h3>
                  <p class="text-sm text-zinc-600">Sejak 1998 • Minuman</p>
                  <div class="flex items-center gap-1 mt-2">
                    <span class="text-amber-500">★★★★★</span>
                    <span class="text-sm text-zinc-500">(4.9)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/30 rounded-full blur-xl animate-float"></div>
            <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl animate-float-delayed"></div>
          </div>

        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div data-aos="fade-up" data-aos-delay="800" class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="flex flex-col items-center gap-2 text-zinc-400">
        <span class="text-sm">Scroll untuk jelajahi</span>
        <div class="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
[class^="shape-blob-"] {
  position: absolute;
  filter: blur(60px);
  will-change: transform;
}

.shape-blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.1));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  top: -100px;
  left: -100px;
  animation: float-1 25s infinite alternate ease-in-out;
}

.shape-blob-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(180, 83, 9, 0.05));
  border-radius: 50% 50% 30% 70% / 60% 40% 60% 40%;
  bottom: -150px;
  right: -150px;
  animation: float-2 30s infinite alternate ease-in-out;
  animation-delay: 2s;
}

.shape-blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.05));
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  top: 30%;
  left: 60%;
  animation: float-3 20s infinite alternate ease-in-out;
  animation-delay: 1s;
}

.shape-blob-4 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(252, 211, 77, 0.1), rgba(251, 191, 36, 0.05));
  border-radius: 50%;
  bottom: 20%;
  left: 10%;
  animation: float-4 15s infinite alternate ease-in-out;
  animation-delay: 0.5s;
}

.grid-pattern {
  background-image: 
    linear-gradient(rgba(251, 191, 36, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(251, 191, 36, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

@keyframes float-1 {
  0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(-50px, -80px) rotate(15deg) scale(1.1); }
}

@keyframes float-2 {
  0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(60px, 100px) rotate(-20deg) scale(1.05); }
}

@keyframes float-3 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  100% { transform: translate(40px, -60px) rotate(25deg); }
}

@keyframes float-4 {
  0% { transform: translate(0px, 0px) scale(1); }
  100% { transform: translate(-30px, 40px) scale(1.2); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 1s;
}

/* Smooth number animation */
.font-headline {
  font-feature-settings: "ss01", "ss02", "cv01", "cv02";
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>