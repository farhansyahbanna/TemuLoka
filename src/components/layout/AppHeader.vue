<template>
  <header class="bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100 sticky top-0 z-50 transition-all duration-300 p-2">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between">
        
        <!-- Logo & Brand -->
        <router-link 
          to="/" 
          class="flex items-center space-x-3 group"
        >
          <div class="relative">
            <img 
              src="@/assets/images/logo-temuloka.png" 
              alt="TemuLoka Logo" 
              class="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            >
            <div class="absolute -inset-1 bg-amber-200 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link 
            to="/" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/' }"
          >
            
            Beranda
          </router-link>
          
          <router-link 
            to="/explore-umkm" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/explore-umkm' }"
          >
            
            Jelajahi 
          </router-link>
          
          <router-link 
            to="/about" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/about' }"
          >
            Tentang
          </router-link>
          
          <router-link 
            to="/blog" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/blog' }"
          >
            Blog
          </router-link>
        </div>

        <!-- CTA Buttons -->
        <div class="flex items-center space-x-3">
          
          <!-- Search Button (Mobile) -->
          <button class="lg:hidden p-2 text-zinc-600 hover:text-amber-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            class="lg:hidden p-2 text-zinc-600 hover:text-amber-600 transition-colors"
            @click="toggleMobileMenu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <!-- Desktop CTA -->
          <div class="hidden lg:flex items-center space-x-3">
            <!-- Search Bar -->
            <div class="relative">
              <input 
                type="text" 
                placeholder="Cari UMKM..." 
                class="pl-10 pr-4 py-2 w-64 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50 text-sm transition-all duration-300"
                v-model="searchQuery"
                @focus="showSearchSuggestions = true"
                @blur="hideSearchSuggestions"
              >
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              
              
            </div>

            <!-- Login Button -->
            <router-link 
              to="/login" 
              class="cta-button group"
            >
              
              Masuk
              <div class="cta-glow"></div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="mobileMenuOpen"
          class="lg:hidden mt-4 p-6 bg-white rounded-2xl shadow-xl border border-amber-100"
        >
          <div class="space-y-4">
            <router-link 
              to="/" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              <span class="text-lg">🏠</span>
              Beranda
            </router-link>
            
            <router-link 
              to="/explore-umkm" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              <span class="text-lg">🔍</span>
              Jelajahi UMKM
            </router-link>
            
            <div class="pt-2 border-t border-amber-50">
              <p class="text-sm font-semibold text-zinc-500 mb-3">Kategori UMKM</p>
              <div class="grid grid-cols-2 gap-2">
                <router-link 
                  to="/kategori/warung-kopi" 
                  class="category-chip"
                  @click="closeMobileMenu"
                >
                  <span>☕</span> Kopi
                </router-link>
                <router-link 
                  to="/kategori/kuliner" 
                  class="category-chip"
                  @click="closeMobileMenu"
                >
                  <span>🍜</span> Kuliner
                </router-link>
                <router-link 
                  to="/kategori/kecantikan" 
                  class="category-chip"
                  @click="closeMobileMenu"
                >
                  <span>💇</span> Kecantikan
                </router-link>
                <router-link 
                  to="/kategori/fashion" 
                  class="category-chip"
                  @click="closeMobileMenu"
                >
                  <span>👕</span> Fashion
                </router-link>
              </div>
            </div>
            
            <router-link 
              to="/blog" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              <span class="text-lg">📝</span>
              Blog & Tips
            </router-link>
            
            <div class="pt-4 border-t border-amber-50">
              <router-link 
                to="/login" 
                class="w-full cta-button justify-center text-center"
                @click="closeMobileMenu"
              >
                <span class="cta-icon">🚀</span>
                Mulai Jelajah
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EnhancedNavbar',
  setup() {
    const mobileMenuOpen = ref(false)
    const searchQuery = ref('')
    const showSearchSuggestions = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    const hideSearchSuggestions = () => {
      setTimeout(() => {
        showSearchSuggestions.value = false
      }, 200)
    }

    return {
      mobileMenuOpen,
      searchQuery,
      showSearchSuggestions,
      toggleMobileMenu,
      closeMobileMenu,
      hideSearchSuggestions
    }
  }
}
</script>

<style scoped>

@reference "../../style.css";
/* Navigation Links */
.nav-link {
  @apply flex items-center space-x-2 px-4 py-2 rounded-xl text-zinc-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200 font-medium;
}

.nav-link-active {
  @apply text-amber-700 bg-amber-50/80;
}

.nav-icon {
  @apply text-lg transition-transform duration-200;
}

.nav-link:hover .nav-icon {
  @apply scale-110;
}

/* Dropdown Menu */
.dropdown-menu {
  @apply absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-amber-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50;
}

.dropdown-item {
  @apply flex items-center space-x-3 px-4 py-3 text-zinc-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150;
}

/* CTA Button */
.cta-button {
  @apply relative flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-200 overflow-hidden;
}

.cta-icon {
  @apply text-lg transition-transform duration-300;
}

.cta-button:hover .cta-icon {
  @apply scale-110;
}

.cta-glow {
  @apply absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full;
}

.cta-button:hover .cta-glow {
  @apply translate-x-full transition-transform duration-1000;
}

/* Mobile Navigation */
.mobile-nav-link {
  @apply flex items-center space-x-4 p-4 rounded-xl text-zinc-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 font-medium;
}

.category-chip {
  @apply flex items-center space-x-2 p-3 bg-amber-50 rounded-lg text-amber-700 hover:bg-amber-100 transition-colors duration-200 text-sm font-medium;
}

/* Search Suggestions */
.suggestion-item {
  @apply flex items-center space-x-3 w-full px-4 py-3 text-left text-zinc-700 hover:bg-amber-50 transition-colors duration-150;
}

/* Scroll Behavior */
header {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Animation for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>