<script setup>
import { ref, computed } from 'vue';

import ProductBanner from '../components/umkm/Banner.vue';
import ProductSearch from '../components/umkm/UmkmSearch.vue';
import CategoryFilter from '../components/umkm/CategoryFilter.vue';
import ProductList from '../components/umkm/UmkmList.vue';
import PaginationControls from '../components/umkm/PaginationControls.vue';

// --- DATA MASTER (Seharusnya dari API) ---
const allUmkm = ref([
  { id: 1, name: 'Warung Kopi Senja', category: 'Kuliner', location: 'Jakarta', rating: 4.8, description: 'Kopi susu gula aren terbaik di kota dengan suasana senja yang menenangkan.', imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&q=80' },
  { id: 2, name: 'Batik Tulis Cempaka', category: 'Kerajinan', location: 'Yogyakarta', rating: 4.9, description: 'Menjual batik tulis asli dengan motif klasik dan kontemporer.', imageUrl: 'https://images.unsplash.com/photo-1620709733915-b093394de9de?w=500&q=80' },
  { id: 3, name: 'Roti Gembong Pak Kumis', category: 'Kuliner', location: 'Surabaya', rating: 4.7, description: 'Roti gembong lembut dengan berbagai isian premium. Dibuat setiap hari.', imageUrl: 'https://images.unsplash.com/photo-1586795763683-5a679e5cec4d?w=500&q=80' },
  { id: 4, name: 'Cukur Rambut "Rapih"', category: 'Jasa', location: 'Bandung', rating: 4.9, description: 'Jasa pangkas rambut pria profesional dengan pelayanan bintang lima.', imageUrl: 'https://images.unsplash.com/photo-1622289139097-46d5c3d4e1a0?w=500&q=80' },
  { id: 5, name: 'Toko Gerabah Asli', category: 'Kerajinan', location: 'Lombok', rating: 4.8, description: 'Kerajinan gerabah tangan unik, cocok untuk dekorasi rumah anda.', imageUrl: 'https://images.unsplash.com/photo-1570126261882-62f43b070f61?w=500&q=80' },
  { id: 6, name: 'Soto Ayam Lamongan Jaya', category: 'Kuliner', location: 'Jakarta', rating: 4.7, description: 'Soto ayam legendaris dengan bumbu koya gurih dan porsi melimpah.', imageUrl: 'https://images.unsplash.com/photo-1603201667230-b1d129f170f1?w=500&q=80' },
]);

const categories = ref(['semua', 'Kuliner', 'Kerajinan', 'Jasa', 'Fashion']);

// --- STATE UNTUK FILTER ---
const searchTerm = ref('');
const selectedCategory = ref('semua');

// --- COMPUTED: LOGIC FILTER ---
const filteredUmkm = computed(() => {
  let umkms = allUmkm.value;

  // 1. Filter berdasarkan Kategori
  if (selectedCategory.value !== 'semua') {
    umkms = umkms.filter(umkm => umkm.category === selectedCategory.value);
  }

  // 2. Filter berdasarkan Search Term
  if (searchTerm.value.trim() !== '') {
    const lowerSearch = searchTerm.value.toLowerCase();
    umkms = umkms.filter(umkm => 
      umkm.name.toLowerCase().includes(lowerSearch) ||
      umkm.description.toLowerCase().includes(lowerSearch)
    );
  }
  
  return umkms;
});
</script>

<template>
  <div class="bg-temuloka-alt min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <ProductBanner class="mb-10" />
      
      <ProductSearch 
        :modelValue="searchTerm"
        @update:modelValue="handleSearchUpdate" 
      />
      
      <CategoryFilter 
        :categories="allCategories"
        :selectedCategory="selectedCategory"
        @category-select="handleCategorySelect"
      />
      
      <ProductList :products="paginatedProducts" />
      
      <PaginationControls 
        v-if="totalPages > 1"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-change="handlePageChange"
        class="mt-12"
      />
      
    </div>
  </div>
</template>