<script setup>
import { ref, computed } from 'vue';

import ProductBanner from '../components/product/ProductBanner.vue';
import ProductSearch from '../components/product/ProductSearch.vue';
import CategoryFilter from '../components/product/CategoryFilter.vue';
import ProductList from '../components/product/ProductList.vue';
import PaginationControls from '../components/product/PaginationControls.vue';


const allProducts = ref([
  
  { id: 1, title: 'Chocolate Chip Classic', category: 'Makanan',price: 25000, description: 'Kue kering, penuh dengan potongan cokelat lezat.'},
  { id: 2, title: 'Rainbow Cookies', category: 'Makanan', price: 30000, description: 'Kue kering warna-warni yang menyenangkan.'},
  { id: 3, title: 'Assorted Pack', category: 'Paket', price: 100000, description: 'Paket campuran berbagai jenis cookies.'},
  { id: 4, title: 'Premium Cookies', category: 'Makanan', price: 50000, description: 'Kue kering dengan bahan-bahan premium.'},
  { id: 5, title: 'Oatmeal Raisin', category: 'Makanan', price: 28000, description: 'Kue kering sehat dengan oatmeal dan kismis.'},
  { id: 6, title: 'Paket Hemat Keluarga', category: 'Makanan', price: 150000, description: 'Paket besar untuk keluarga.'},
  { id: 7, title: 'Gingerbread Men', category: 'Kerajinan', price: 35000, description: 'Kue jahe berbentuk lucu untuk perayaan.'},
  { id: 8, title: 'Macarons', category: 'Makanan', price: 60000, description: 'Kue manis khas Perancis dengan berbagai rasa.'},
  { id: 9, title: 'Kopi Susu Gula Aren', category: 'Minuman', price: 20000, description: 'Kopi dengan susu dan gula aren khas Indonesia.'},
  { id: 10, title: 'Matcha Latte', category: 'Minuman', price: 22000, description: 'Minuman teh hijau matcha dengan susu.'},
 
]);


const allCategories = ref(['Semua', 'Makanan', 'Minuman', 'Kerajinan', 'Jasa']);

const searchTerm = ref('');
const selectedCategory = ref('Semua'); // Default filter
const currentPage = ref(1);
const itemsPerPage = ref(8); // Tampilkan 8 produk per halaman


const filteredProducts = computed(() => {
  let products = allProducts.value;

  if (selectedCategory.value !== 'Semua') {
    products = products.filter(p => p.category === selectedCategory.value);
  }

  if (searchTerm.value.trim() !== '') {
    const lowerSearch = searchTerm.value.toLowerCase();
    products = products.filter(p => 
      p.title.toLowerCase().includes(lowerSearch) ||
      p.description.toLowerCase().includes(lowerSearch)
    );
  }
  
  return products;
});


const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage.value);
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredProducts.value.slice(start, end);
});


function handleSearchUpdate(newTerm) {
  searchTerm.value = newTerm;
  currentPage.value = 1; 
}

function handleCategorySelect(newCategory) {
  selectedCategory.value = newCategory;
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