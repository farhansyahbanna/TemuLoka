<script setup>
import UmkmCard from './UmkmCard.vue';
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  umkmList: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  showFilters: {
    type: Boolean,
    default: true
  }
});

// Filter states
const searchQuery = ref('');
const selectedCategory = ref('all');
const selectedSort = ref('rating');
const priceRange = ref([0, 1000000]);
const selectedRating = ref(0);

// UI states
const viewMode = ref('grid'); // 'grid' or 'list'
const isMounted = ref(false);

// Available categories (bisa dari props atau computed)
const categories = computed(() => {
  const uniqueCategories = [...new Set(props.umkmList.map(umkm => umkm.categoryName || umkm.category))];
  return ['all', ...uniqueCategories].filter(Boolean);
});

// Filtered and sorted UMKM
const filteredUmkm = computed(() => {
  let filtered = [...props.umkmList];

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(umkm =>
      umkm.name.toLowerCase().includes(query) ||
      umkm.description?.toLowerCase().includes(query) ||
      umkm.tags?.some(tag => tag.toLowerCase().includes(query)) ||
      umkm.location.toLowerCase().includes(query)
    );
  }

  // Category filter
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(umkm => 
      (umkm.categoryName || umkm.category) === selectedCategory.value
    );
  }

  // Rating filter
  if (selectedRating.value > 0) {
    filtered = filtered.filter(umkm => umkm.rating >= selectedRating.value);
  }

  // Sort
  switch (selectedSort.value) {
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'distance':
      filtered.sort((a, b) => (a.distance || 0) - (b.distance || 0));
      break;
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      break;
  }

  return filtered;
});

// Stats
const stats = computed(() => ({
  total: props.umkmList.length,
  filtered: filteredUmkm.value.length,
  averageRating: (props.umkmList.reduce((sum, umkm) => sum + umkm.rating, 0) / props.umkmList.length).toFixed(1)
}));

// Clear all filters
const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'all';
  selectedSort.value = 'rating';
  selectedRating.value = 0;
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="space-y-6">
    <!-- Header & Stats -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">
          Temukan UMKM Terdekat
        </h2>
        <p class="text-gray-600">
          {{ stats.filtered }} dari {{ stats.total }} UMKM ditemukan
          <span v-if="searchQuery"> untuk "{{ searchQuery }}"</span>
        </p>
      </div>
      
      <!-- View Toggle -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 bg-white rounded-2xl p-1 border border-gray-200">
          <button
            @click="viewMode = 'grid'"
            :class="[
              'p-2 rounded-xl transition-all duration-200',
              viewMode === 'grid' 
                ? 'bg-amber-500 text-white shadow-sm' 
                : 'text-gray-400 hover:text-amber-600'
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="[
              'p-2 rounded-xl transition-all duration-200',
              viewMode === 'list' 
                ? 'bg-amber-500 text-white shadow-sm' 
                : 'text-gray-400 hover:text-amber-600'
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Filters Section -->
    <div v-if="showFilters" class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Search -->
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Cari UMKM..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
          >
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>

        <!-- Category Filter -->
        <select 
          v-model="selectedCategory"
          class="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white"
        >
          <option value="all">Semua Kategori</option>
          <option 
            v-for="category in categories" 
            :key="category" 
            :value="category"
            v-if="category !== 'all'"
          >
            {{ category }}
          </option>
        </select>

        <!-- Rating Filter -->
        <select 
          v-model="selectedRating"
          class="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white"
        >
          <option value="0">Semua Rating</option>
          <option value="4">⭐ 4.0+</option>
          <option value="4.5">⭐ 4.5+</option>
          <option value="5">⭐ 5.0</option>
        </select>

        <!-- Sort -->
        <select 
          v-model="selectedSort"
          class="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white"
        >
          <option value="rating">Rating Tertinggi</option>
          <option value="name">Nama A-Z</option>
          <option value="distance">Terdekat</option>
          <option value="newest">Terbaru</option>
        </select>
      </div>

      <!-- Active Filters & Clear -->
      <div v-if="searchQuery || selectedCategory !== 'all' || selectedRating > 0" class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <span>Filter aktif:</span>
          <span v-if="searchQuery" class="bg-amber-100 text-amber-700 px-2 py-1 rounded-full">"{{ searchQuery }}"</span>
          <span v-if="selectedCategory !== 'all'" class="bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{{ selectedCategory }}</span>
          <span v-if="selectedRating > 0" class="bg-amber-100 text-amber-700 px-2 py-1 rounded-full">⭐ {{ selectedRating }}+</span>
        </div>
        <button 
          @click="clearFilters"
          class="text-sm text-amber-600 hover:text-amber-800 font-medium transition-colors duration-200"
        >
          Hapus Semua
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div 
        v-for="n in 8" 
        :key="n"
        class="bg-white rounded-3xl shadow-lg border border-amber-100 overflow-hidden animate-pulse"
      >
        <div class="h-48 bg-gray-200"></div>
        <div class="p-6 space-y-4">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-3 bg-gray-200 rounded w-1/2"></div>
          <div class="h-3 bg-gray-200 rounded w-full"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3"></div>
          <div class="h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredUmkm.length === 0" class="text-center py-16">
      <div class="max-w-md mx-auto">
        <div class="w-24 h-24 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">UMKM Tidak Ditemukan</h3>
        <p class="text-gray-600 mb-6">
          Maaf, kami tidak dapat menemukan UMKM yang sesuai dengan kriteria pencarian Anda.
        </p>
        <button 
          @click="clearFilters"
          class="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors duration-200"
        >
          Tampilkan Semua UMKM
        </button>
      </div>
    </div>

    <!-- UMKM Grid/List -->
    <div 
      v-else
      :class="[
        'gap-6 transition-all duration-500',
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          : 'flex flex-col space-y-4'
      ]"
    >
      <UmkmCard 
        v-for="umkm in filteredUmkm" 
        :key="umkm.id" 
        :umkm="umkm"
        :class="viewMode === 'list' ? 'flex-row h-64' : ''"
      />
    </div>

    <!-- Load More (jika ada pagination) -->
    <div v-if="filteredUmkm.length > 0" class="text-center pt-8">
      <button 
        class="bg-white text-amber-600 border-2 border-amber-200 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 transform hover:scale-105"
      >
        Muat Lebih Banyak
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Smooth scroll for the container */
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>