<script setup>
// Tentukan event yang akan di-emit oleh komponen ini
defineEmits(['update:searchTerm', 'update:selectedCategory']);

// Definisikan props (jika Anda ingin mengontrolnya dari parent)
defineProps({
  searchTerm: String,
  selectedCategory: String,
  categories: Array
});

// Ikon SVG
const IconSearch = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
`;
const IconChevronDown = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
`;

</script>

<template>
  <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="relative md:col-span-2">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3" v-html="IconSearch"></span>
      <input 
        type="text"
        :value="searchTerm"
        @input="$emit('update:searchTerm', $event.target.value)"
        placeholder="Cari cookies favoritmu..."
        class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      >
    </div>

    <div class="relative">
      <select 
        :value="selectedCategory"
        @change="$emit('update:selectedCategory', $event.target.value)"
        class="w-full appearance-none bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      >
        <option v-for="category in categories" :key="category" :value="category">
          {{ category === 'semua' ? 'Semua Kategori' : category }}
        </option>
      </select>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" v-html="IconChevronDown"></span>
    </div>
  </div>
</template>