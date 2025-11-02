<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const IconStar = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-400">
    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.543 2.86c-1.003.612-2.23-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433L10.788 3.21z" clip-rule="evenodd" />
  </svg>
`;

const IconArrow = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="currentColor" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
`;
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
  >
    <div class="relative">
      <img
        :src="product.imageUrl"
        :alt="product.title"
        class="w-full h-48 object-cover"
      />

      <span
        v-if="product.badge"
        :class="product.badgeColor"
        class="absolute top-2 left-2 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
      >
        {{ product.badge }}
      </span>

      <span
        class="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"
      >
        <span v-html="IconStar"></span>
        {{ product.rating }}
      </span>
    </div>

    <div class="p-4 flex flex-col justify-between h-fit">
      <div>
        <h3 class="text-lg font-bold text-gray-800 mb-1">
          {{ product.title }}
        </h3>
        <p class="text-sm text-gray-600 mb-4 h-16">{{ product.description }}</p>
      </div>

      <div>
        <div class="flex justify-between items-center mb-4">
          <span class="text-xl font-bold text-orange-500"
            >Rp {{ product.price.toLocaleString("id-ID") }}</span
          >
          <span class="text-xs text-gray-500">per pack</span>
        </div>

        <button
          class="w-full  bg-amber-600  text-white font-light py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-orange-500 hover:to-orange-600 transition-all"
        >
        Lihat Produk
        <span v-html="IconArrow"></span>
        </button>
      </div>
    </div>
  </div>
</template>
