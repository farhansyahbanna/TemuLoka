<script setup>
import { ref, onMounted } from 'vue';

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

// Animation state
const isMounted = ref(false);

// Scroll buttons visibility
const canScrollLeft = ref(false);
const canScrollRight = ref(false);
const scrollContainer = ref(null);

const checkScrollButtons = () => {
  if (scrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
    canScrollLeft.value = scrollLeft > 0;
    canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10;
  }
};

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = 200;
    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    
    setTimeout(checkScrollButtons, 300);
  }
};

onMounted(() => {
  isMounted.value = true;
  setTimeout(() => {
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
    }
  }, 100);
});
</script>

<template>
  <div class="mb-8 relative">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">Filter Kategori</h3>
        
      </div>
      
      <!-- Scroll Buttons for Desktop -->
      <div class="hidden lg:flex items-center gap-2">
        <button
          @click="scroll('left')"
          :disabled="!canScrollLeft"
          :class="[
            'w-10 h-10 rounded-xl border border-amber-200 flex items-center justify-center transition-all duration-200',
            canScrollLeft 
              ? 'bg-white text-amber-600 hover:bg-amber-50 hover:border-amber-300 hover:scale-105' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          ]"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          @click="scroll('right')"
          :disabled="!canScrollRight"
          :class="[
            'w-10 h-10 rounded-xl border border-amber-200 flex items-center justify-center transition-all duration-200',
            canScrollRight 
              ? 'bg-white text-amber-600 hover:bg-amber-50 hover:border-amber-300 hover:scale-105' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          ]"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Categories Container -->
    <div class="relative ">
      <!-- Scroll Container -->
      <div
        ref="scrollContainer"
        class="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >


        <!-- Category Buttons -->
        <button
          v-for="(category, index) in categories"
          :key="category.id"
          @click="$emit('category-select', category.id)"
          :class="[
            'category-card group flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 min-w-[120px]',
            selectedCategory === category.id 
              ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-500 text-white shadow-lg shadow-amber-200' 
              : 'bg-white border-amber-100 text-gray-700 hover:border-amber-300 hover:shadow-lg',
            { 'animate-fade-in-up': isMounted }
          ]"
          :style="{ animationDelay: `${(index + 1) * 100}ms` }"
        >
          <div 
            class="w-12 h-12 rounded-xl mb-3 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
            :class="selectedCategory === category.id ? 'bg-white/20' : 'bg-amber-100 text-amber-600'"
          >
            {{ category.icon || '🏪' }}
          </div>
          <span class="font-semibold text-sm text-center leading-tight">{{ category.name }}</span>
          <span 
            class="text-xs mt-1 transition-colors duration-300"
            :class="selectedCategory === category.id ? 'text-amber-100' : 'text-gray-500'"
          >
            {{ category.count || '0' }} UMKM
          </span>
          

        </button>
      </div>

      <!-- Gradient Overlays for Scroll Indication -->
      <div 
        v-if="canScrollLeft"
        class="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"
      ></div>
      <div 
        v-if="canScrollRight"
        class="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"
      ></div>
    </div>

    

    <!-- Mobile Scroll Indicators -->
    <div class="lg:hidden flex justify-center gap-1.5 mt-4">
      <div 
        v-for="n in Math.min(categories.length + 1, 5)"
        :key="n"
        class="w-2 h-2 rounded-full bg-gray-300"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}

/* Smooth scrolling */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Hover effects */
.category-card:hover {
  transform: translateY(-2px);
}

/* Active state enhancements */
.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Focus states for accessibility */
button:focus {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .category-card {
    min-width: 110px;
    padding: 1rem;
  }
}
</style>