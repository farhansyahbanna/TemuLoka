<script setup>
import { ref, computed, onMounted } from 'vue';

// 1. IMPOR DATABASE DAN HELPER
import { umkmDatabase, databaseHelpers } from '../data/database.js';

// 2. TERIMA 'id' DARI ROUTER
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

// 3. SIAPKAN STATE KOSONG
const umkm = ref(null);
const reviews = ref([]);
const promotions = ref([]);
const categoryName = ref('');

// 4. GUNAKAN 'onMounted' UNTUK MENGAMBIL DATA
onMounted(() => {
  const umkmId = Number.parseInt(props.id);
  
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
  
  // (Jika umkm.value kosong, template di bawah akan menampilkan "Loading...")
});

// (computed properties dan Ikon SVG tetap sama seperti sebelumnya)
const today = new Date().toLocaleString('en-US', { weekday: 'long' }).toLowerCase();

// (computed property googleMapsLink Anda yang lama)
const googleMapsLink = computed(() => {
  if (!umkm.value) return '#';
  // URL ini untuk tombol "Buka di Google Maps"
  return `https://www.google.com/maps/search/?api=1&query=${umkm.value.coordinates.lat},${umkm.value.coordinates.lng}`;
});

// --- TAMBAHKAN COMPUTED BARU DI BAWAH INI ---
const googleMapsEmbedUrl = computed(() => {
  if (!umkm.value) return '';
  const { lat, lng } = umkm.value.coordinates;
  // URL ini khusus untuk iframe embed
  // 'q' untuk penanda, 'z' untuk zoom (15=cukup dekat), 'output=embed' untuk iframe
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
});

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
// Helper untuk mengambil data pengguna (untuk review)
function getUserById(userId) {
  return umkmDatabase.users.find(user => user.id === userId);
}
</script>

<template>
  <div class="bg-gray-100 pb-20">
    <div v-if="!umkm" class="text-center p-40">
      <h2 class="text-2xl font-semibold">Loading data UMKM...</h2>
    </div>
    
    <div v-else>
      <div class="relative h-64 md:h-80 w-full overflow-hidden">
        <img :src="umkm.images[0]" :alt="umkm.name" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
          <span class="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full uppercase">{{ categoryName }}</span>
          <h1 class="text-3xl md:text-5xl font-bold mt-2">{{ umkm.name }}</h1>
          <p class="text-lg mt-1 opacity-90">{{ umkm.shortDescription }}</p>
          <div class="flex items-center gap-4 mt-2 text-sm">
            <span class="flex items-center gap-1 font-bold">
              <span v-html="IconStar" class="w-4 h-4 text-yellow-400"></span>
              {{ umkm.rating }} ({{ umkm.reviewCount }} ulasan)
            </span>
            <span class="flex items-center gap-1">
              <span v-html="IconLocation" class="w-4 h-4"></span>
              {{ umkm.location }}
            </span>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] relative z-10">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          
          <div class="lg:col-span-2 space-y-8">
            
            <div class="bg-white p-6 shadow-md rounded-lg">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Tentang {{ umkm.name }}</h2>
              <p class="text-gray-600 whitespace-pre-line leading-relaxed">
                {{ umkm.description }}
              </p>
              <div class="mt-4 pt-4 border-t border-gray-200">
                <span class="text-sm text-gray-500">Berdiri sejak: <strong>{{ umkm.established }}</strong></span>
              </div>
            </div>

            <div class="bg-white p-6 shadow-md rounded-lg">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Galeri</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a 
                  v-for="(image, index) in umkm.images.slice(1)" 
                  :key="index"
                  :href="image"
                  target="_blank"
                  class="aspect-square"
                >
                  <img :src="image" :alt="`${umkm.name} gallery image ${index + 1}`" class="w-full h-full object-cover rounded-md transition-transform hover:scale-105">
                </a>
              </div>
            </div>

            <div class="bg-white p-6 shadow-md rounded-lg">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Menu</h2>
              <div class="space-y-6">
                <div v-for="category in umkm.menu" :key="category.category">
                  <h3 class="text-xl font-semibold text-orange-600 border-b border-orange-200 pb-2 mb-3">
                    {{ category.category }}
                  </h3>
                  <ul class="space-y-4">
                    <li v-for="item in category.items" :key="item.name" class="flex justify-between items-start gap-4">
                      <div>
                        <p class="font-semibold text-gray-800">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">{{ item.description }}</p>
                      </div>
                      <span class="font-semibold text-gray-800 whitespace-nowrap">
                        Rp {{ item.price.toLocaleString('id-ID') }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          

            <div class="bg-white p-6 shadow-md rounded-lg">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Ulasan Pengguna ({{ reviews.length }})</h2>
              <div v-if="reviews.length > 0" class="space-y-6">
                <div v-for="review in reviews" :key="review.id" class="border-b border-gray-200 pb-4">
                  <div class="flex items-center mb-2">
                    <span class="text-3xl mr-2">{{ getUserById(review.userId)?.avatar }}</span>
                    <div>
                      <p class="font-semibold">{{ getUserById(review.userId)?.name }}</p>
                      <span class="text-sm text-gray-500">{{ review.date }}</span>
                    </div>
                    <span class="ml-auto flex items-center gap-1 font-bold text-lg">
                      <span v-html="IconStar" class="w-5 h-5 text-yellow-400"></span> {{ review.rating }}
                    </span>
                  </div>
                  <h4 class="font-semibold text-gray-800">{{ review.title }}</h4>
                  <p class="text-gray-600 text-sm mt-1">{{ review.comment }}</p>
                </div>
              </div>
              <p v-else class="text-gray-500">Belum ada ulasan untuk UMKM ini.</p>
            </div>
          </div>

          <div class="lg:col-span-1 space-y-6 mt-8 lg:mt-0">
            <div class="sticky top-24 space-y-6">
              
              <div class="bg-white p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Jam Buka</h3>
                <ul class="space-y-2 text-sm">
                  <li 
                    v-for="(hours, day) in umkm.openingHours" 
                    :key="day"
                    class="flex justify-between"
                    :class="{ 'font-bold text-orange-600': day === today }"
                  >
                    <span class="capitalize">{{ day }}</span>
                    <span v-if="hours.isOpen" class="font-mono">{{ hours.open }} - {{ hours.close }}</span>
                    <span v-else class="text-red-500">Tutup</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Lokasi & Kontak</h3>
                <div class="space-y-4">
                  
                  <div class="h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      width="100%"
                      height="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      :src="googleMapsEmbedUrl"
                    ></iframe>
                  </div>
                  
                  <p class="text-gray-600 text-sm">{{ umkm.address }}</p>
                  
                  <a 
                    :href="googleMapsLink" 
                    target="_blank" 
                    class="block w-full text-center py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Buka di Google Maps
                  </a>
                  
                  <ul class="pt-2 text-sm space-y-2">
                    <li class="flex items-center gap-2">
                      <span v-html="IconPhone" class="text-gray-500"></span>
                      <a :href="`tel:${umkm.contact.phone}`" class="text-gray-700 hover:text-orange-600">{{ umkm.contact.phone }}</a>
                    </li>
                    <li class="flex items-center gap-2">
                      <span v-html="IconInstagram" class="text-gray-500"></span>
                      <a :href="`https://instagram.com/${umkm.contact.instagram.substring(1)}`" target="_blank" class="text-gray-700 hover:text-orange-600">{{ umkm.contact.instagram }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Fasilitas & Tag</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in umkm.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div v-if="promotions.length > 0" class="bg-orange-50 border border-orange-200 p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-bold text-orange-700 mb-4">Promo Saat Ini</h3>
                <div class="space-y-4">
                  <div v-for="promo in promotions" :key="promo.id">
                    <h4 class="font-semibold text-orange-600">{{ promo.title }}</h4>
                    <p class="text-sm text-orange-700">{{ promo.description }}</p>
                    <span class="mt-1 inline-block bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded">Kode: {{ promo.code }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>