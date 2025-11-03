<script setup>
defineProps(['modelValue']); // Menerima value dari v-model
defineEmits(['update:modelValue']); // Event untuk v-model

const IconSearch = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
`;
</script>

<template>
  <div class="relative w-full mb-6">
    <span class="absolute inset-y-0 left-0 flex items-center pl-4" v-html="IconSearch"></span>
    <input 
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Cari makanan, minuman, atau paket hemat..."
      class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    >
  </div>
</template>