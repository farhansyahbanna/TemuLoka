<script setup>
import { computed } from 'vue';

const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  description: String,
  reverse: { 
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: 'bg-transparent' // Default tanpa background
  }
});

const gridClasses = computed(() => {
  let classes = 'grid grid-cols-1 md:grid-cols-2 gap-4 items-center ';
  if (props.reverse) {
    classes += 'md:grid-cols-2-reverse '; 
  }
  return classes + props.backgroundColor; 
});

const imageOrderClass = computed(() => {
  return props.reverse ? 'md:order-2' : '';
});

const textOrderClass = computed(() => {
  return props.reverse ? 'md:order-1' : '';
});
</script>

<template>
  <div :class="gridClasses">
    <img :src="imageSrc" :alt="imageAlt" class="w-full h-64 object-contain rounded-lg">
    <div :class="textOrderClass">
      <h3 class="text-2xl font-bold text-zinc-900">{{ title }}</h3>
      <p class="text-lg text-zinc-600 mt-3">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

.md\:grid-cols-2-reverse > *:first-child {
  order: 2;
}
.md\:grid-cols-2-reverse > *:last-child {
  order: 1;
}
</style>