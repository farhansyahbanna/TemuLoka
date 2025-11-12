<script setup>
import ReviewCard from '@/components/ui/ReviewCard.vue';
import { ref, onMounted, computed, onUnmounted } from 'vue';

// Sample review data dengan variasi yang lebih kaya
const reviews = ref([
  {
    id: 1,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    name: "Anna Lestari",
    role: "Food Vlogger",
    location: "Jakarta Selatan",
    review: "Gara-gara TemuLoka, aku nemu warung soto legendaris yang lokasinya di dalem gang. Enak banget! Padahal udah 5 tahun di Jakarta baru tau ada tempat segini enak.",
    rating: 5,
    date: "3 hari lalu",
    verified: true,
    umkm: "Soto Betawi Pak Haji",
    tags: ["Hidden Gem", "Rasa Autentik", "Porsi Besar"],
    helpful: 24,
    images: ["https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop"]
  },
  {
    id: 2,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Budi Santoso",
    role: "Freelancer",
    location: "Bandung",
    review: "Fitur Poin Loyalitasnya mantap! Udah dapet diskon 50% di barbershop langganan. Sekarang setiap check-in rasanya kayak nabung buat hadiah.",
    rating: 5,
    date: "1 minggu lalu",
    verified: true,
    umkm: "Barbershop Klasik",
    tags: ["Loyalty Rewards", "Pelayanan Ramah", "Harga Terjangkau"],
    helpful: 18,
    images: []
  },
  {
    id: 3,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Citra Dewi",
    role: "Ibu Rumah Tangga",
    location: "Surabaya",
    review: "Akhirnya ada platform yang fokus ke UMKM. Info jam bukanya selalu akurat, beda sama di Maps. Sekarang weekend ga bingung lagi mau ajak keluarga kemana.",
    rating: 5,
    date: "2 hari lalu",
    verified: true,
    umkm: "Kedai Roti Nenek",
    tags: ["Info Akurat", "Ramah Keluarga", "Tempat Bersih"],
    helpful: 32,
    images: ["https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop"]
  },
  {
    id: 4,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    name: "Rizki Pratama",
    role: "Digital Nomad",
    location: "Bali",
    review: "Filter 'WiFi Kencang' sangat membantu buat remote worker kayak saya. Udah nemu 5 coffeeshop andalan buat kerja dari sini!",
    rating: 4,
    date: "5 hari lalu",
    verified: true,
    umkm: "Kopi Teman Sejati",
    tags: ["WiFi Kencang", "Tempat Nyaman", "Cocok Kerja"],
    helpful: 15,
    images: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=150&h=150&fit=crop"]
  },
  {
    id: 5,
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face",
    name: "Sarah Wijaya",
    role: "Mahasiswa",
    location: "Yogyakarta",
    review: "Ulasannya detail banget dan beneran membantu. Bisa liat foto asli dari pengunjung lain, jadi ga takut salah pilih tempat.",
    rating: 5,
    date: "1 minggu lalu",
    verified: true,
    umkm: "Warung Makan Sederhana",
    tags: ["Ulasan Detail", "Foto Asli", "Terpercaya"],
    helpful: 28,
    images: []
  },
  {
    id: 6,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    name: "Dimas Setiawan",
    role: "Karyawan Swasta",
    location: "Jakarta Timur",
    review: "Sistem poinnya bikin ketagihan! Dari cuma iseng coba, sekarang udah jadi member aktif. Recommended banget buat yang suka explore tempat makan.",
    rating: 5,
    date: "4 hari lalu",
    verified: true,
    umkm: "Bakso Lapangan Tembak",
    tags: ["Reward System", "Addictive", "Worth It"],
    helpful: 21,
    images: ["https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&h=150&fit=crop"]
  }
]);

const activeReview = ref(0);
const autoPlay = ref(true);
const filter = ref('all');

// Filter reviews berdasarkan rating
const filteredReviews = computed(() => {
  if (filter.value === 'all') return reviews.value;
  return reviews.value.filter(review => review.rating === parseInt(filter.value));
});

// Stats calculations
const stats = computed(() => {
  const total = reviews.value.length;
  const average = (reviews.value.reduce((sum, review) => sum + review.rating, 0) / total).toFixed(1);
  const fiveStar = reviews.value.filter(review => review.rating === 5).length;
  
  return {
    total,
    average,
    fiveStar,
    fiveStarPercentage: Math.round((fiveStar / total) * 100)
  };
});

// Auto-play carousel
let autoPlayInterval;

const startAutoPlay = () => {
  if (autoPlay.value) {
    autoPlayInterval = setInterval(() => {
      activeReview.value = (activeReview.value + 1) % filteredReviews.value.length;
    }, 5000);
  }
};

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
};

const nextReview = () => {
  activeReview.value = (activeReview.value + 1) % filteredReviews.value.length;
  resetAutoPlay();
};

const prevReview = () => {
  activeReview.value = (activeReview.value - 1 + filteredReviews.value.length) % filteredReviews.value.length;
  resetAutoPlay();
};

const resetAutoPlay = () => {
  stopAutoPlay();
  startAutoPlay();
};

const setActiveReview = (index) => {
  activeReview.value = index;
  resetAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

// Cleanup on unmount
onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section class="relative bg-linear-to-b from-white to-amber-50/50 py-24 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-10 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        
        <h2 class="font-headline text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-6">
          Kata Mereka yang Sudah Merasakan
        </h2>
        <p class="text-xl text-zinc-600 max-w-2xl mx-auto">
          Dengarkan pengalaman langsung dari komunitas TemuLoka yang sudah menemukan tempat-tempat menakjubkan di sekitar mereka
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-amber-100">
          <div class="text-3xl font-bold text-amber-600">{{ stats.average }}</div>
          <div class="text-sm text-zinc-600 mt-1">Rating Rata-rata</div>
        </div>
        <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-amber-100">
          <div class="text-3xl font-bold text-amber-600">{{ stats.total }}+</div>
          <div class="text-sm text-zinc-600 mt-1">Ulasan</div>
        </div>
        <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-amber-100">
          <div class="text-3xl font-bold text-amber-600">{{ stats.fiveStarPercentage }}%</div>
          <div class="text-sm text-zinc-600 mt-1">Bintang 5</div>
        </div>
        <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-amber-100">
          <div class="text-3xl font-bold text-amber-600">100%</div>
          <div class="text-sm text-zinc-600 mt-1">Terverifikasi</div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="150">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-amber-100 shadow-sm">
          <div class="flex flex-wrap justify-center gap-2">
            <button
              v-for="rating in ['all', 5, 4, 3]"
              :key="rating"
              @click="filter = rating"
              :class="[
                'filter-tab',
                filter === rating ? 'filter-tab-active' : 'filter-tab-inactive'
              ]"
            >
              <span v-if="rating === 'all'">⭐ Semua</span>
              <span v-else>
                <span v-for="n in 5" :key="n" :class="n <= rating ? 'text-amber-400' : 'text-gray-300'">★</span>
                ({{ rating }}+)
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Reviews Carousel -->
      <div class="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        
        <!-- Carousel Navigation -->
        <button 
          @click="prevReview"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button 
          @click="nextReview"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Carousel Container -->
        <div class="overflow-hidden rounded-3xl">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${activeReview * 100}%)` }"
          >
            <div 
              v-for="(review, index) in filteredReviews" 
              :key="review.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
                <div class="grid lg:grid-cols-2 gap-8 p-8">
                  
                  <!-- Review Content -->
                  <div class="flex flex-col justify-between space-y-6">
                    <div>
                      <!-- Rating Stars -->
                      <div class="flex items-center space-x-1 mb-4">
                        <span 
                          v-for="n in 5" 
                          :key="n"
                          class="text-2xl"
                          :class="n <= review.rating ? 'text-amber-400' : 'text-gray-300'"
                        >
                          ★
                        </span>
                        <span class="ml-2 text-lg font-semibold text-zinc-700">{{ review.rating }}.0</span>
                      </div>

                      <!-- Review Text -->
                      <blockquote class="text-xl text-zinc-700 leading-relaxed mb-6 italic">
                        "{{ review.review }}"
                      </blockquote>

                      <!-- Tags -->
                      <div class="flex flex-wrap gap-2 mb-6">
                        <span 
                          v-for="tag in review.tags"
                          :key="tag"
                          class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>

                    <!-- User Info -->
                    <div class="flex items-center space-x-4">
                      <img 
                        :src="review.avatar" 
                        :alt="review.name"
                        class="w-14 h-14 rounded-2xl border-2 border-amber-200"
                      />
                      <div>
                        <div class="flex items-center space-x-2">
                          <h4 class="font-semibold text-zinc-900">{{ review.name }}</h4>
                          <span v-if="review.verified" class="bg-blue-500 text-white p-1 rounded-full">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                          </span>
                        </div>
                        <p class="text-zinc-600 text-sm">{{ review.role }} • {{ review.location }}</p>
                        <p class="text-amber-600 text-sm font-medium">{{ review.umkm }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Review Images & Meta -->
                  <div class="flex flex-col justify-between space-y-6">
                    <!-- Review Images -->
                    <div v-if="review.images.length > 0" class="grid grid-cols-2 gap-3">
                      <img 
                        v-for="(image, imgIndex) in review.images"
                        :key="imgIndex"
                        :src="image"
                        :alt="`Foto ${review.umkm}`"
                        class="w-full h-32 object-cover rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <!-- Review Meta -->
                    <div class="flex items-center justify-between text-sm text-zinc-500">
                      <span>{{ review.date }}</span>
                      <div class="flex items-center space-x-4">
                        <button class="flex items-center space-x-1 hover:text-amber-600 transition-colors">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                          </svg>
                          <span>{{ review.helpful }}</span>
                        </button>
                        <button class="flex items-center space-x-1 hover:text-amber-600 transition-colors">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                          </svg>
                          <span>Balas</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center space-x-3 mt-8">
          <button
            v-for="(review, index) in filteredReviews"
            :key="review.id"
            @click="setActiveReview(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              activeReview === index 
                ? 'bg-amber-500 w-8' 
                : 'bg-amber-200 hover:bg-amber-300'
            ]"
          />
        </div>
      </div>

      

      <!-- CTA Section -->
      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
        <div class="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-32 h-32 bg-white rounded-full"></div>
            <div class="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full"></div>
          </div>
          
          <div class="relative z-10">
            <h3 class="text-4xl font-bold mb-4 font-headline">Sudah Siap Menemukan Cerita di Balik Setiap Usaha Kecil?</h3>
            <p class="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Mulai jelajahi UMKM terbaik di sekitar Anda dan bagikan pengalaman Anda untuk membantu orang lain menemukan tempat menakjubkan.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-50 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                Jelajahi Sekarang
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105">
                Lihat Cara Kerja
              </button>
            </div>
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

/* Filter Tab Styles */
.filter-tab {
  @apply px-4 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm;
}

.filter-tab-active {
  @apply bg-amber-500 text-white shadow-md;
}

.filter-tab-inactive {
  @apply text-zinc-600 hover:text-amber-600 hover:bg-amber-50;
}

/* Backdrop Blur Support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Smooth Transitions */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
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