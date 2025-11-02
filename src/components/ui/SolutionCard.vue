<script setup>
import { CheckCircleIcon, MapIcon, ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue';

const props = defineProps({
  icon: String, // 'info', 'map', 'review'
  title: String,
  description: String,
  // isPrimary tidak lagi digunakan untuk warna background, jadi bisa dihapus
  // atau dibiarkan jika masih ada logika lain yang memerlukannya
});

const iconComponent = computed(() => {
  switch (props.icon) {
    case 'info': return CheckCircleIcon;
    case 'map': return MapIcon;
    case 'review': return ChatBubbleOvalLeftIcon;
    default: return null;
  }
});

// Semua kartu akan memiliki tampilan dasar yang sama
const cardClasses = computed(() => {
  return 'bg-temuloka-alt  p-6 rounded-lg shadow-md ' +
         'transition-all duration-300 ease-in cursor-pointer ' +
         ' hover:shadow-xl '; 
});

const titleClasses = computed(() => {
  return 'font-bold text-xl mb-2 text-zinc-900 '; 
});

const descriptionClasses = computed(() => {
  return 'text-zinc-600 '; 
});

const iconClasses = computed(() => {
  return 'w-10 h-10 mb-3 text-amber-600 '; 
});
</script>

<template>
  <div :class="cardClasses">
    <component :is="iconComponent" :class="iconClasses" />
    <h4 :class="titleClasses">{{ title }}</h4>
    <p :class="descriptionClasses">{{ description }}</p>
  </div>
</template>