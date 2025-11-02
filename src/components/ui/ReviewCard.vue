<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'
defineProps({
  avatar: String,
  name: String,
  review: String,
  rating: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1 && value <= 5
  }
});
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <div class="flex items-center mb-4">
      <img class="w-12 h-12 rounded-full object-cover mr-4" :src="avatar" :alt="`Avatar ${name}`">
      <div>
        <h4 class="font-semibold text-lg">{{ name }}</h4>
        <div class="flex text-yellow-400">
          <StarIcon v-for="n in rating" :key="n" class="w-5 h-5" />
        </div>
      </div>
    </div>
    <p class="text-zinc-600 italic">"{{ review }}"</p>
  </div>
</template>