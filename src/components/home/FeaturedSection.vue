<script setup>
import FeatureCard from '@/components/ui/FeatureCard.vue';
import { ref, onMounted } from 'vue';

import ilustrasiPeta from '@/assets/images/ilustrasi-peta.png';
import ilustrasiLoyalitas from '@/assets/images/ilustrasi-loyalitas.png';
import ilustrasiUlasan from '@/assets/images/ilustrasi-ulasan.png';

// Feature data dengan detail lengkap
const features = ref([
  {
    id: 1,
    imageSrc: ilustrasiPeta,
    imageAlt: "Ilustrasi Peta Interaktif",
    title: "Peta Interaktif",
    description: "Tak perlu lagi khawatir alamat salah atau nomor telepon tidak aktif. Kami kumpulkan semua informasi penting UMKM di satu tempat, lengkap dan selalu update, langsung dari pemiliknya.",
    highlight: "Temukan UMKM tersembunyi di sekitar Anda",
    benefits: [
      "Filter berdasarkan kategori & fasilitas",
      "Navigasi langsung ke lokasi",
      "Info real-time jam buka",
      "Lokasi akurat dengan GPS"
    ],
    
    color: "primary",
    stats: "95%",
    statsText: "akurasi lokasi"
  },
  {
    id: 2,
    imageSrc: ilustrasiLoyalitas,
    imageAlt: "Ilustrasi Poin Loyalitas",
    title: "Poin Loyalitas",
    description: "Dapatkan poin dari setiap kunjungan dan tukarkan dengan diskon di berbagai UMKM. Dukung satu, nikmati manfaatnya di banyak tempat.",
    highlight: "Kunjunganmu bernilai lebih",
    benefits: [
      "Kumpulkan poin dari setiap kunjungan",
      "Tukar dengan diskon eksklusif",
      "Ekosistem yang saling mendukung",
      "Reward spesial untuk member setia"
    ],
    
    color: "secondary",
    stats: "50K+",
    statsText: "poin ditukarkan"
  },
  {
    id: 3,
    imageSrc: ilustrasiUlasan,
    imageAlt: "Ilustrasi Ulasan Kontekstual",
    title: "Ulasan Kontekstual",
    description: "Beri ulasan spesifik untuk produk tertentu, bukan hanya tempatnya secara umum. Bantu UMKM berkembang dengan feedback yang membangun.",
    highlight: "Ulasan yang benar-benar membantu",
    benefits: [
      "Ulasan dengan tag spesifik",
      "Verified visit untuk kredibilitas",
      "Foto & video asli pengunjung",
      "Balasan langsung dari pemilik UMKM"
    ],
    
    color: "accent",
    stats: "10K+",
    statsText: "ulasan terverifikasi"
  }
]);

const activeFeature = ref(1);
const isVisible = ref(false);

const setActiveFeature = (id) => {
  activeFeature.value = id;
};

onMounted(() => {
  // Trigger animation after component mount
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<template>
  <section class="relative bg-linear-to-b from-white to-amber-50/30 py-24 overflow-hidden">
    <!-- Background Elements -->
   
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header dengan Animation -->
      <div class="text-center mb-20" data-aos="fade-up">
        
        <h2 class="font-headline text-5xl md:text-6xl font-bold text-center bg-linear-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent mb-6">
          Jelajahi Pengalaman Baru
        </h2>
        <p class="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Temukan fitur-fitur canggih yang membuat petualangan kuliner dan belanja Anda lebih menyenangkan, mudah, dan menguntungkan
        </p>
      </div>

      <!-- Feature Navigation Tabs -->
      <div class="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-amber-100 shadow-lg">
          <div class="flex flex-wrap justify-center gap-2">
            <button
              v-for="feature in features"
              :key="feature.id"
              @click="setActiveFeature(feature.id)"
              :class="[
                'feature-tab',
                activeFeature === feature.id ? 'feature-tab-active' : 'feature-tab-inactive'
              ]"
            >
              <span class="text-lg mr-2">{{ feature.icon }}</span>
              {{ feature.title }}
            </button>
          </div>
        </div>
      </div>

      <!-- Main Feature Display -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up" data-aos-delay="300">
        <!-- Feature Image dengan Animation -->
        <div class="relative" v-for="feature in features" :key="feature.id" v-show="activeFeature === feature.id">
          <div class="relative rounded-3xl overflow-hidden transform transition-all duration-700"
               :class="[isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']">
            <img 
              :src="feature.imageSrc" 
              :alt="feature.imageAlt"
              class="w-full h-auto rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
            
            <!-- Floating Stats Card -->
            <div class="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-amber-100">
              <div class="text-center">
                <div class="text-2xl font-bold text-amber-700">{{ feature.stats }}</div>
                <div class="text-sm text-zinc-600">{{ feature.statsText }}</div>
              </div>
            </div>
            
            <!-- Animated Border Effect -->
            <div class="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>

        <!-- Feature Content -->
        <div class="flex flex-col justify-center space-y-6" v-for="feature in features" :key="feature.id" v-show="activeFeature === feature.id">
          <div class="flex items-center space-x-4 mb-4">
            
            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-zinc-900">{{ feature.title }}</h3>
              <p class="text-amber-600 font-semibold mt-1">{{ feature.highlight }}</p>
            </div>
          </div>

          <p class="text-lg text-zinc-600 leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Benefits List -->
          <div class="space-y-3">
            <div v-for="(benefit, index) in feature.benefits" :key="index" 
                 class="flex items-center space-x-3 text-zinc-700">
              <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span>{{ benefit }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-6">
            <button class="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-200 overflow-hidden">
              <span class="relative z-10 flex items-center space-x-2">
                <span>Coba Sekarang</span>
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      
      

    </div>
  </section>
</template>

<style scoped>
@reference "../../style.css";
/* Custom Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Feature Tab Styles */
.feature-tab {
  @apply flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap;
}

.feature-tab-active {
  @apply bg-amber-500 text-white shadow-lg transform scale-105;
}

.feature-tab-inactive {
  @apply text-zinc-600 hover:text-amber-600 hover:bg-amber-50;
}

/* Mini Feature Card Hover Effects */
.mini-feature-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mini-feature-card:hover {
  box-shadow: 0 20px 40px rgba(245, 158, 11, 0.1);
}

/* Gradient Text Animation */
.gradient-text {
  background: linear-gradient(45deg, #d97706, #f59e0b, #eab308);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Backdrop Blur Support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #fef3c7;
}

::-webkit-scrollbar-thumb {
  background: #f59e0b;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d97706;
}
</style>