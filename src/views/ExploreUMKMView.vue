<script setup>
import { ref, computed } from 'vue';

// 1. IMPOR DATABASE BARU ANDA
// Kita impor database-nya dan juga helper-nya
import { umkmDatabase, databaseHelpers } from '../data/database.js';

// Impor komponen-komponen UI
import UmkmCard from '../components/umkm/UmkmCard.vue';
import ProductBanner from '../components/umkm/Banner.vue';
import ProductSearch from '../components/umkm/UmkmSearch.vue';
import CategoryFilter from '../components/umkm/CategoryFilter.vue';
import PaginationControls from '../components/umkm/PaginationControls.vue';

// --- STATE MANAGEMENT ---
const searchTerm = ref('');
const selectedCategory = ref('semua'); // 'semua' akan jadi ID default
const currentPage = ref(1);
const itemsPerPage = ref(6);

// --- COMPUTED: KATEGORI ---
// 2. Kita ubah daftar kategori agar sesuai format baru
// Kita juga tambahkan 'Semua Kategori' secara manual
const allCategories = computed(() => {
  const dbCategories = umkmDatabase.categories.map(cat => ({
    id: cat.id,
    name: cat.name
  }));
  return [{ id: 'semua', name: 'Semua Kategori' }, ...dbCategories];
});

// --- COMPUTED: FILTERING ---
// 3. Logika filter utama
const filteredUmkm = computed(() => {
  let umkms = umkmDatabase.umkm; // Mulai dengan semua data UMKM

  // Filter berdasarkan Kategori
  if (selectedCategory.value !== 'semua') {
    umkms = umkms.filter(umkm => umkm.category === selectedCategory.value);
  }

  // Filter berdasarkan Search Term
  if (searchTerm.value.trim() !== '') {
    const lowerSearch = searchTerm.value.toLowerCase();
    umkms = umkms.filter(umkm => 
      umkm.name.toLowerCase().includes(lowerSearch) ||
      umkm.description.toLowerCase().includes(lowerSearch) ||
      umkm.tags.some(tag => tag.toLowerCase().includes(lowerSearch))
    );
  }
  
  // 4. "HYDRATE" DATA (PENTING!)
  // Kita siapkan data agar 'UmkmCard' lebih mudah menampilkannya
  return umkms.map(umkm => {
    // Ambil info kategori lengkap menggunakan helper
    const categoryInfo = databaseHelpers.getCategoryById(umkm.category);
    
    return {
      ...umkm, // Salin semua data asli umkm
      // Tambahkan properti baru yang sudah diproses:
      categoryName: categoryInfo ? categoryInfo.name : 'Lainnya',
      imageUrl: umkm.images[0] // Ambil gambar pertama sebagai thumbnail
    };
  });
});

// --- COMPUTED: PAGINATION ---
const totalPages = computed(() => {
  return Math.ceil(filteredUmkm.value.length / itemsPerPage.value);
});

const paginatedUmkm = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  // Kita paginasi 'filteredUmkm' yang sudah "hydrated"
  return filteredUmkm.value.slice(start, end);
});

// --- HANDLERS ---
function handleSearchUpdate(newTerm) {
  searchTerm.value = newTerm;
  currentPage.value = 1;
}

function handleCategorySelect(newCategoryId) {
  selectedCategory.value = newCategoryId;
  currentPage.value = 1;
}

function handlePageChange(newPage) {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-amber-50 via-white to-amber-25 font-sans text-zinc-800">
    <div class="container mx-auto  px-2 sm:px-6 lg:px-8 py-8">
      
      <ProductBanner class="mb-10" />

      <ProductSearch 
        :modelValue="searchTerm"
        @update:modelValue="handleSearchUpdate" 
        placeholder="Cari warung kopi, bakso, salon..."
        class="mb-6"
      />
      
      <CategoryFilter 
        :categories="allCategories"
        :selectedCategory="selectedCategory"
        @category-select="handleCategorySelect"
        class="mb-10"
      />

      <div v-if="paginatedUmkm.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UmkmCard 
          v-for="umkm in paginatedUmkm" 
          :key="umkm.id" 
          :umkm="umkm" 
        />
      </div>
      
      <div v-else class="text-center py-16">
        <h3 class="text-2xl font-semibold text-gray-700">Oops! Tidak Ditemukan</h3>
        <p class="mt-2 text-gray-500">
          Coba ubah kata kunci pencarian atau filter kategori Anda.
        </p>
      </div>

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