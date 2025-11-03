<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String, 
    required: true
  }
});

defineEmits(['category-select']);
</script>

<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold text-gray-800 mb-3">Kategori</h3>
    <div class="flex items-center gap-3 overflow-x-auto pb-2">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="$emit('category-select', category.id)"
        :class="[
          'px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 shadow-sm',
          selectedCategory === category.id 
            ? 'bg-orange-500 text-white shadow-lg' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
        ]"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>