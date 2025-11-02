<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="border-2 border-red-300 border-dashed p-4 rounded-lg">
    <h3 class="font-semibold text-lg text-red-600">❌ {{ title }}</h3>
    <p class="text-zinc-600">{{ description }}</p>
  </div>
</template>