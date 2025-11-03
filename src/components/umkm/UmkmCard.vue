<script setup>
// Komponen ini menerima data 'umkm' dari parent
defineProps({
  umkm: {
    type: Object,
    required: true
  }
});

// Ikon SVG (bisa juga diimpor sebagai komponen)
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
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
    <div class="relative">
      <img 
        :src="umkm.imageUrl" 
        :alt="umkm.name"
        class="h-48 w-full object-cover"
      >
      <span class="absolute top-3 left-3 bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full">
        {{ umkm.categoryName }}
      </span>
    </div>
    
    <div class="p-5 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-gray-800 mb-1">
        {{ umkm.name }}
      </h3>
      
      <div class="flex justify-between items-center text-sm text-gray-600 mb-3">
        <span class="flex items-center gap-1">
          <span v-html="IconLocation"></span>
          {{ umkm.location }}
        </span>
        <span class="flex items-center gap-1 font-bold">
          <span v-html="IconStar"></span>
          {{ umkm.rating }}
        </span>
      </div>
      
      <p class="text-sm text-gray-600 mb-4 flex-grow">
        {{ umkm.shortDescription }}
      </p>
      
      <router-link 
        :to="'/umkm/' + umkm.id" 
        class="mt-auto block w-full text-center bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Lihat Detail
      </router-link>
    </div>
  </div>
</template>