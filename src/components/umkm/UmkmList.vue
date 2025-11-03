<script setup>
import UmkmCard from '../umkm/UmkmCard.vue';

defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div>
    
    
    <div v-if="products.length === 0" class="text-center text-gray-500 py-16">
      <h3 class="text-2xl font-semibold">Oops!</h3>
      <p>Produk yang Anda cari tidak ditemukan.</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <UmkmCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>