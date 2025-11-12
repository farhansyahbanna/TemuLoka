<script setup>
import { ref, computed, onMounted } from 'vue';


import { umkmDatabase, databaseHelpers } from '../data/database.js';


const props = defineProps({
  id: {
    type: String,
    required: true
  }
});


const umkm = ref(null);
const reviews = ref([]);
const promotions = ref([]);
const categoryName = ref('');
const activeImageIndex = ref(0);
const isGalleryModalOpen = ref(false);
const currentGalleryImage = ref('');
const isLoading = ref(true);

// 4. GUNAKAN 'onMounted' UNTUK MENGAMBIL DATA
onMounted(async () => {
  const umkmId = Number.parseInt(props.id);
  
  // Simulasi loading untuk UX yang lebih baik
  setTimeout(() => {
    // Gunakan helper untuk mengambil data!
    umkm.value = databaseHelpers.getUMKMById(umkmId);
    
    if (umkm.value) {
      // Ambil data terkait lainnya
      reviews.value = databaseHelpers.getReviewsByUMKM(umkmId);
      promotions.value = databaseHelpers.getPromotionsByUMKM(umkmId);
      
      // Ambil nama kategori
      const categoryInfo = databaseHelpers.getCategoryById(umkm.value.category);
      categoryName.value = categoryInfo ? categoryInfo.name : 'Lainnya';
    }
    
    isLoading.value = false;
  }, 800);
});

// Computed properties
const today = new Date().toLocaleString('en-US', { weekday: 'long' }).toLowerCase();

const googleMapsLink = computed(() => {
  if (!umkm.value) return '#';
  return `https://www.google.com/maps/search/?api=1&query=${umkm.value.coordinates.lat},${umkm.value.coordinates.lng}`;
});

const googleMapsEmbedUrl = computed(() => {
  if (!umkm.value) return '';
  const { lat, lng } = umkm.value.coordinates;
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
});

const averageRating = computed(() => {
  if (reviews.value.length === 0) return umkm.value?.rating || 0;
  const sum = reviews.value.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.value.length).toFixed(1);
});

const ratingDistribution = computed(() => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.value.forEach(review => {
    distribution[review.rating]++;
  });
  return distribution;
});

// Methods
function getUserById(userId) {
  return umkmDatabase.users.find(user => user.id === userId);
}

function openGalleryModal(imageIndex) {
  currentGalleryImage.value = umkm.value.images[imageIndex];
  isGalleryModalOpen.value = true;
}

function closeGalleryModal() {
  isGalleryModalOpen.value = false;
}

function nextImage() {
  activeImageIndex.value = (activeImageIndex.value + 1) % umkm.value.images.length;
}

function prevImage() {
  activeImageIndex.value = (activeImageIndex.value - 1 + umkm.value.images.length) % umkm.value.images.length;
}

function shareUMKM() {
  if (navigator.share) {
    navigator.share({
      title: umkm.value.name,
      text: umkm.value.shortDescription,
      url: window.location.href,
    });
  } else {
    // Fallback untuk browser yang tidak support Web Share API
    navigator.clipboard.writeText(window.location.href);
    alert('Link UMKM berhasil disalin!');
  }
}

// Ikon SVG
const IconLocation = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
    <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.003-.002c.003 0 .005-.001.006-.002C10.503 18.862 10.66 18.79 10.79 18.7a1.68 1.68 0 0 0 .31-.18c.11-.08.21-.17.31-.27l.013-.012.001-.001.001-.001c.21-.2.4-.41.58-.63A15.43 15.43 0 0 0 15 13.5c0-2.07-1.01-3.9-2.5-5.05A5.27 5.27 0 0 0 10 2 5.27 5.27 0 0 0 7.5 3.45C6.01 4.6 5 6.43 5 8.5c0 .66.09 1.3.26 1.92.19.7.45 1.36.78 1.99.33.64.73 1.25 1.17 1.82.44.58.9 1.12 1.36 1.63.45.51.88 1 1.27 1.45l.001.001.001.001.013.012c.1.1.2.19.31.27.1.07.21.15.31.18a1.68 1.68 0 0 0 .31.18c.001.001.003.001.005.002l.003.002.006.003.002.001.003.001Z" clip-rule="evenodd" />
  </svg>
`;

const IconStar = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-400">
    <path fill-rule="evenodd" d="M10.868 2.884c.321-.772 1.305-.772 1.626 0l1.53 3.702a1.125 1.125 0 0 0 .847.69l3.961.576c.861.125 1.208 1.157.58 1.705l-2.866 2.79a1.125 1.125 0 0 0-.326 1.182l.676 3.945c.148.858-.746 1.51-1.508 1.125l-3.54-1.86a1.125 1.125 0 0 0-1.04 0l-3.54 1.86c-.763.385-1.656-.267-1.508-1.125l.676-3.945a1.125 1.125 0 0 0-.326-1.182L2.09 9.557c-.628-.548-.28-1.58.58-1.705l3.96-.576a1.125 1.125 0 0 0 .847-.69L9.132 2.884Z" clip-rule="evenodd" />
  </svg>
`;

const IconPhone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.1a1.5 1.5 0 0 1-2.172 1.817l-.63- .28a.5.5 0 0 0-.64 0l-.63.28a1.5 1.5 0 0 1-2.172-1.817l.716-3.1A1.5 1.5 0 0 1 3.5 2h1.148ZM16.5 2a1.5 1.5 0 0 1 1.5 1.5V16.5a1.5 1.5 0 0 1-1.5 1.5H15v-1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V18H3.5A1.5 1.5 0 0 1 2 16.5V6h1.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5H2V3.5ZM11 18v-1.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 17 16.5V18h-6ZM11.75 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm0 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0Z" clip-rule="evenodd" /></svg>`;

const IconInstagram = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM8.379 6.621a.75.75 0 1 0-1.06 1.06A3.5 3.5 0 0 0 9.25 10a.75.75 0 0 1 0 1.5 4.998 4.998 0 0 1-1.932-1.06A.75.75 0 0 0 6.25 11.5a.75.75 0 1 0-1.5 0 4.998 4.998 0 0 0 1.06 1.932.75.75 0 1 0 1.06 1.06 3.5 3.5 0 0 0 1.932-1.932.75.75 0 0 1 1.5 0 3.5 3.5 0 0 0 1.932 1.932.75.75 0 1 0 1.06-1.06A4.998 4.998 0 0 0 11.5 11.5a.75.75 0 1 0 0-1.5 4.998 4.998 0 0 1 1.06-1.932.75.75 0 1 0-1.06-1.06A3.5 3.5 0 0 0 10.75 9.25a.75.75 0 1 1-1.5 0 3.5 3.5 0 0 0-1.932-1.932ZM10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" clip-rule="evenodd" /></svg>`;

const IconShare = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" /></svg>`;

const IconHeart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" /></svg>`;
</script>

<template>
  <div class="bg-linear-to-br from-amber-50 via-white to-amber-25 min-h-screen pb-20">
    
    <!-- Loading Animation -->
    <div v-if="isLoading" class="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-600 font-medium">Memuat detail UMKM...</p>
      </div>
    </div>
    
    <div v-else-if="!umkm" class="text-center p-40">
      <div class="max-w-md mx-auto">
        <div class="text-6xl mb-4">😔</div>
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">UMKM Tidak Ditemukan</h2>
        <p class="text-gray-500 mb-6">Maaf, UMKM yang Anda cari tidak dapat ditemukan.</p>
        <router-link to="/" class="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Kembali ke Beranda
        </router-link>
      </div>
    </div>
    
    <div v-else>
      <!-- Hero Section dengan Carousel -->
      <div class="relative h-80 md:h-96 w-full overflow-hidden">
        <!-- Main Image -->
        <div class="relative w-full h-full">
          <img 
            :src="umkm.images[activeImageIndex]" 
            :alt="umkm.name" 
            class="w-full h-full object-cover transition-transform duration-500"
            :class="{ 'scale-105': !isLoading }"
          >
          <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <!-- Navigation Arrows -->
          <button 
            @click="prevImage" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextImage" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <!-- Image Indicators -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <button 
              v-for="(image, index) in umkm.images" 
              :key="index"
              @click="activeImageIndex = index"
              class="w-3 h-3 rounded-full transition-all duration-200"
              :class="activeImageIndex === index ? 'bg-white' : 'bg-white/50'"
            ></button>
          </div>
        </div>
        
        <!-- Header Content -->
        <div class="absolute bottom-10 left-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white w-full">
          <div class="flex flex-wrap items-center gap-3 mb-3">
            <span class="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide shadow-lg">
              {{ categoryName }}
            </span>
            <div class="flex items-center gap-4">
              <button @click="shareUMKM" class="flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium transition-all duration-200">
                <span v-html="IconShare" class="w-3 h-3"></span>
                Bagikan
              </button>
              <button class="flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium transition-all duration-200">
                <span v-html="IconHeart" class="w-3 h-3"></span>
                Simpan
              </button>
            </div>
          </div>
          
          <h1 class="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{{ umkm.name }}</h1>
          <p class="text-lg md:text-xl opacity-90 mb-3 drop-shadow-md">{{ umkm.shortDescription }}</p>
          
          <div class="flex flex-wrap items-center gap-4 text-sm">
            <span class="flex items-center gap-2 font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span v-html="IconStar" class="w-4 h-4 text-yellow-300"></span>
              {{ averageRating }} ({{ reviews.length }} ulasan)
            </span>
            <span class="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span v-html="IconLocation" class="w-4 h-4"></span>
              {{ umkm.location }}
            </span>
            <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              🕒 Buka {{ umkm.openingHours[today].isOpen ? 'Sekarang' : 'Tutup' }}
            </span>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] relative z-10">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            
            <!-- About Section -->
            <div class="bg-white p-8 shadow-xl rounded-2xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
              <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-orange-500 rounded-full"></span>
                Tentang {{ umkm.name }}
              </h2>
              <p class="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {{ umkm.description }}
              </p>
              <div class="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <span class="text-sm text-gray-500">Berdiri sejak: <strong class="text-orange-600">{{ umkm.established }}</strong></span>
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <span>❤️</span>
                  <span>{{ umkm.likes || 0 }} orang menyukai ini</span>
                </div>
              </div>
            </div>

            <!-- Gallery Section -->
            <div class="bg-white p-8 shadow-xl rounded-2xl border border-gray-100">
              <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-orange-500 rounded-full"></span>
                Galeri
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div 
                  v-for="(image, index) in umkm.images" 
                  :key="index"
                  @click="openGalleryModal(index)"
                  class="aspect-square relative group cursor-pointer overflow-hidden rounded-xl"
                >
                  <img 
                    :src="image" 
                    :alt="`${umkm.name} gallery image ${index + 1}`" 
                    class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  >
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Menu Section -->
            <div class="bg-white p-8 shadow-xl rounded-2xl border border-gray-100">
              <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-orange-500 rounded-full"></span>
                Menu
                <span class="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {{ umkm.menu.reduce((total, category) => total + category.items.length, 0) }} item
                </span>
              </h2>
              <div class="space-y-8">
                <div v-for="category in umkm.menu" :key="category.category" class="group">
                  <h3 class="text-xl font-semibold text-orange-600 border-b-2 border-orange-200 pb-3 mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {{ category.category }}
                    <span class="text-sm font-normal text-gray-500">({{ category.items.length }})</span>
                  </h3>
                  <ul class="space-y-4">
                    <li 
                      v-for="item in category.items" 
                      :key="item.name" 
                      class="flex justify-between items-start gap-6 p-4 rounded-xl transition-all duration-200 hover:bg-orange-50 group/item"
                    >
                      <div class="flex-1">
                        <p class="font-semibold text-gray-800 text-lg group-hover/item:text-orange-700 transition-colors">
                          {{ item.name }}
                        </p>
                        <p class="text-gray-500 mt-1 leading-relaxed">{{ item.description }}</p>
                      </div>
                      <span class="font-bold text-gray-800 text-lg whitespace-nowrap bg-orange-100 px-3 py-1 rounded-lg">
                        Rp {{ item.price.toLocaleString('id-ID') }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Reviews Section -->
            <div class="bg-white p-8 shadow-xl rounded-2xl border border-gray-100">
              <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-orange-500 rounded-full"></span>
                Ulasan Pengguna
                <span class="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {{ reviews.length }} ulasan
                </span>
              </h2>
              
              <!-- Rating Summary -->
              <div class="bg-gray-50 rounded-2xl p-6 mb-8">
                <div class="flex flex-col md:flex-row items-center gap-8">
                  <div class="text-center">
                    <div class="text-5xl font-bold text-gray-800">{{ averageRating }}</div>
                    <div class="flex items-center justify-center gap-1 mt-2">
                      <span v-for="star in 5" :key="star" class="text-xl">
                        <span v-html="IconStar" 
                          :class="star <= averageRating ? 'text-yellow-400' : 'text-gray-300'"
                        ></span>
                      </span>
                    </div>
                    <p class="text-gray-500 text-sm mt-1">{{ reviews.length }} ulasan</p>
                  </div>
                  
                  <div class="flex-1 space-y-2">
                    <div v-for="rating in [5,4,3,2,1]" :key="rating" class="flex items-center gap-3">
                      <span class="text-sm text-gray-600 w-4">{{ rating }}</span>
                      <span v-html="IconStar" class="w-4 h-4 text-yellow-400"></span>
                      <div class="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          class="bg-yellow-400 h-2 rounded-full transition-all duration-500" 
                          :style="{ width: `${(ratingDistribution[rating] / reviews.length) * 100 || 0}%` }"
                        ></div>
                      </div>
                      <span class="text-sm text-gray-500 w-8 text-right">
                        {{ ratingDistribution[rating] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Reviews List -->
              <div v-if="reviews.length > 0" class="space-y-6">
                <div 
                  v-for="review in reviews" 
                  :key="review.id" 
                  class="border-b border-gray-200 pb-6 last:border-b-0 transition-all duration-200 hover:bg-gray-50 -mx-4 px-4 rounded-lg"
                >
                  <div class="flex items-start mb-3">
                    <div class="flex items-center gap-3 flex-1">
                      <span class="text-2xl">{{ getUserById(review.userId)?.avatar }}</span>
                      <div>
                        <p class="font-semibold text-gray-800">{{ getUserById(review.userId)?.name }}</p>
                        <span class="text-sm text-gray-500">{{ review.date }}</span>
                      </div>
                    </div>
                    <span class="flex items-center gap-1 font-bold text-lg bg-yellow-50 px-3 py-1 rounded-full">
                      <span v-html="IconStar" class="w-5 h-5 text-yellow-400"></span> 
                      {{ review.rating }}
                    </span>
                  </div>
                  <h4 class="font-semibold text-gray-800 text-lg mb-2">{{ review.title }}</h4>
                  <p class="text-gray-600 leading-relaxed">{{ review.comment }}</p>
                </div>
              </div>
              <div v-else class="text-center py-12">
                <div class="text-6xl mb-4">💬</div>
                <p class="text-gray-500 text-lg">Belum ada ulasan untuk UMKM ini.</p>
                <p class="text-gray-400">Jadilah yang pertama memberikan ulasan!</p>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1 space-y-6 mt-8 lg:mt-0">
            <div class="sticky top-24 space-y-6">
              
              <!-- Opening Hours -->
              <div class="bg-white p-6 shadow-xl rounded-2xl border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Jam Buka
                </h3>
                <ul class="space-y-3">
                  <li 
                    v-for="(hours, day) in umkm.openingHours" 
                    :key="day"
                    class="flex justify-between items-center py-2 px-3 rounded-lg transition-colors"
                    :class="{ 'bg-orange-50 border border-orange-200': day === today }"
                  >
                    <span class="capitalize font-medium" :class="{ 'text-orange-600': day === today }">
                      {{ day }}
                    </span>
                    <span v-if="hours.isOpen" class="font-mono text-sm" :class="{ 'text-orange-600 font-bold': day === today }">
                      {{ hours.open }} - {{ hours.close }}
                    </span>
                    <span v-else class="text-red-500 text-sm font-medium">Tutup</span>
                  </li>
                </ul>
              </div>

              <!-- Location & Contact -->
              <div class="bg-white p-6 shadow-xl rounded-2xl border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Lokasi & Kontak
                </h3>
                <div class="space-y-4">
                  
                  <!-- Interactive Map -->
                  <div class="h-48 w-full rounded-xl overflow-hidden border-2 border-gray-200 shadow-inner">
                    <iframe
                      width="100%"
                      height="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      :src="googleMapsEmbedUrl"
                      class="hover:shadow-lg transition-shadow duration-300"
                    ></iframe>
                  </div>
                  
                  <p class="text-gray-600 text-sm leading-relaxed">{{ umkm.address }}</p>
                  
                  <!-- Action Buttons -->
                  <div class="grid grid-cols-2 gap-3">
                    <a 
                      :href="googleMapsLink" 
                      target="_blank" 
                      class="flex items-center justify-center gap-2 py-3 px-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <span v-html="IconLocation" class="w-4 h-4"></span>
                      Maps
                    </a>
                    <a 
                      :href="`tel:${umkm.contact.phone}`"
                      class="flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <span v-html="IconPhone" class="w-4 h-4"></span>
                      Telepon
                    </a>
                  </div>
                  
                  <!-- Contact Details -->
                  <ul class="pt-2 space-y-3">
                    <li class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span v-html="IconPhone" class="text-gray-500 w-5 h-5"></span>
                      <a :href="`tel:${umkm.contact.phone}`" class="text-gray-700 hover:text-orange-600 transition-colors">
                        {{ umkm.contact.phone }}
                      </a>
                    </li>
                    <li class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span v-html="IconInstagram" class="text-gray-500 w-5 h-5"></span>
                      <a :href="`https://instagram.com/${umkm.contact.instagram.substring(1)}`" target="_blank" class="text-gray-700 hover:text-orange-600 transition-colors">
                        {{ umkm.contact.instagram }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Facilities & Tags -->
              <div class="bg-white p-6 shadow-xl rounded-2xl border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Fasilitas & Tag
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in umkm.tags" 
                    :key="tag"
                    class="px-3 py-2 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 text-sm font-medium rounded-xl border border-orange-200 transition-all duration-200 hover:shadow-md hover:scale-105"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Promotions -->
              <div v-if="promotions.length > 0" class="bg-gradient-to-br from-orange-500 to-red-500 p-6 shadow-2xl rounded-2xl text-white">
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Promo Spesial!
                </h3>
                <div class="space-y-4">
                  <div 
                    v-for="promo in promotions" 
                    :key="promo.id"
                    class="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
                  >
                    <h4 class="font-bold text-lg mb-2">{{ promo.title }}</h4>
                    <p class="text-white/90 text-sm mb-3">{{ promo.description }}</p>
                    <div class="flex items-center justify-between">
                      <span class="bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                        Kode: {{ promo.code }}
                      </span>
                      <span class="text-xs bg-red-500 px-2 py-1 rounded-full">
                        ⏰ {{ promo.expiry }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <div 
      v-if="isGalleryModalOpen" 
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click="closeGalleryModal"
    >
      <div class="relative max-w-4xl max-h-full" @click.stop>
        <button 
          @click="closeGalleryModal"
          class="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          :src="currentGalleryImage" 
          :alt="umkm.name" 
          class="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #f97316;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ea580c;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>