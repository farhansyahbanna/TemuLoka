<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  umkm: {
    type: Object,
    required: true
  }
});

const isHovered = ref(false);
const isFavorite = ref(false);

// Format distance jika ada
const formatDistance = (distance) => {
  if (!distance) return null;
  if (distance < 1) return `${Math.round(distance * 1000)}m`;
  return `${distance.toFixed(1)}km`;
};

// Status buka/tutup - FIXED: menggunakan props.umkm
const isOpen = computed(() => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  if (!props.umkm.openingHours) return true;
  
  const today = props.umkm.openingHours[now.getDay()];
  if (!today || !today.isOpen) return false;
  
  const [openHour, openMinute] = today.open.split(':').map(Number);
  const [closeHour, closeMinute] = today.close.split(':').map(Number);
  
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;
  
  return currentTime >= openTime && currentTime <= closeTime;
});

const toggleFavorite = (event) => {
  event.preventDefault();
  event.stopPropagation();
  isFavorite.value = !isFavorite.value;
  // Di sini bisa tambahkan logic untuk menyimpan favorite ke backend
};
</script>

<template>
  <div 
    class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-amber-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col relative"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Favorite Button -->
    <button 
      @click="toggleFavorite"
      class="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
      :class="isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path v-if="isFavorite" fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
        <path v-else fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
      </svg>
    </button>

    <!-- Status Badge -->
    <div class="absolute top-4 left-4 z-20">
      <span 
        class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border"
        :class="isOpen ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'"
      >
        <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="isOpen ? 'bg-green-500' : 'bg-red-500'"></span>
        {{ isOpen ? 'Buka' : 'Tutup' }}
      </span>
    </div>

    <!-- Image Section -->
    <div class="relative overflow-hidden">
      <img 
        :src="umkm.images?.[0] || umkm.imageUrl" 
        :alt="umkm.name"
        class="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Category Badge -->
      <span 
        class="absolute bottom-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm border border-amber-400/30"
      >
        {{ umkm.categoryName || umkm.category }}
      </span>

      <!-- Distance Badge -->
      <span 
        v-if="umkm.distance"
        class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
      >
        {{ formatDistance(umkm.distance) }}
      </span>
    </div>
    
    <!-- Content Section -->
    <div class="p-6 flex flex-col flex-grow">
      <!-- Header -->
      <div class="mb-3">
        <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
          {{ umkm.name }}
        </h3>
        
        <div class="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ umkm.location }}
          </span>
          <span class="flex items-center gap-1 font-semibold bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.868 2.884c.321-.772 1.305-.772 1.626 0l1.53 3.702a1.125 1.125 0 0 0 .847.69l3.961.576c.861.125 1.208 1.157.58 1.705l-2.866 2.79a1.125 1.125 0 0 0-.326 1.182l.676 3.945c.148.858-.746 1.51-1.508 1.125l-3.54-1.86a1.125 1.125 0 0 0-1.04 0l-3.54 1.86c-.763.385-1.656-.267-1.508-1.125l.676-3.945a1.125 1.125 0 0 0-.326-1.182L2.09 9.557c-.628-.548-.28-1.58.58-1.705l3.96-.576a1.125 1.125 0 0 0 .847-.69L9.132 2.884Z" clip-rule="evenodd"/>
            </svg>
            {{ umkm.rating }}
          </span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
        {{ umkm.shortDescription || umkm.description }}
      </p>

      <!-- Tags/Facilities -->
      <div v-if="umkm.tags || umkm.facilities" class="flex flex-wrap gap-1.5 mb-4">
        <span 
          v-for="(tag, index) in (umkm.tags || umkm.facilities)?.slice(0, 3)" 
          :key="index"
          class="inline-block bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full border border-gray-200"
        >
          {{ tag }}
        </span>
        <span 
          v-if="(umkm.tags || umkm.facilities)?.length > 3"
          class="inline-block bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full border border-gray-200"
        >
          +{{ (umkm.tags || umkm.facilities).length - 3 }}
        </span>
      </div>

      <!-- Price Range -->
      <div v-if="umkm.priceRange" class="flex items-center justify-between text-sm mb-4">
        <span class="text-gray-500">Kisaran Harga:</span>
        <span class="font-semibold text-amber-600">{{ umkm.priceRange }}</span>
      </div>

      <!-- Footer Actions -->
      <div class="flex gap-3 mt-auto">
        <router-link 
          :to="'/umkm/' + umkm.id" 
          class="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 text-center group/btn"
        >
          <span class="flex items-center justify-center gap-2">
            Lihat Detail
            <svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </router-link>
        
        <button 
          class="w-12 h-12 border-2 border-amber-200 text-amber-600 rounded-xl flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 transform hover:scale-105"
          title="Simpan untuk nanti"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Hover Effect Border -->
    <div class="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Custom scrollbar for card containers */
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