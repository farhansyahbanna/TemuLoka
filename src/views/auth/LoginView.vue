<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// State untuk form
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);
const showPassword = ref(false);

// Animasi state
const isMounted = ref(false);

function handleLogin() {
  isLoading.value = true;
  
  // Simulasi proses login
  setTimeout(() => {
    isLoading.value = false;
    console.log('Login attempt:', { 
      email: email.value, 
      password: password.value,
      remember: rememberMe.value
    });
    
    // Redirect setelah login berhasil
    router.push('/dashboard');
  }, 1500);
}

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function handleSocialLogin(provider) {
  console.log(`Login with ${provider}`);
  // Implementasi login sosial di sini
}

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 flex">
    <!-- Left Column - Login Form -->
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        
        <!-- Logo & Header -->
        <div class="text-center" :class="{ 'animate-fade-in-up': isMounted }">
          <div class="flex justify-center mb-6">
            <div class="relative">
              <img 
                src="@/assets/images/logo-temuloka.png" 
                alt="TemuLoka Logo" 
                class="h-16 w-auto transition-transform duration-500 hover:scale-110"
              />
              <div class="absolute -inset-2 bg-amber-200 rounded-full blur-md opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <h2 class="text-4xl font-headline font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-4">
            Selamat Datang Kembali!
          </h2>
          <p class="text-lg text-zinc-600 mb-2">
            Masuk untuk mengelola UMKM Anda
          </p>
          <p class="text-sm text-zinc-500">
            Belum punya akun? 
            <router-link 
              to="/register" 
              class="font-semibold text-amber-600 hover:text-amber-800 transition-colors duration-200 hover:underline"
            >
              Daftar di sini
            </router-link>
          </p>
        </div>

        <!-- Login Form -->
        <div class="mt-10" :class="{ 'animate-fade-in-up': isMounted }" style="animation-delay: 100ms">
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-100 p-8">
            
            <!-- Social Login Options -->
            <div class="space-y-4 mb-8">
              <button 
                @click="handleSocialLogin('google')"
                class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-2xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Lanjutkan dengan Google
              </button>
            </div>

            <!-- Divider -->
            <div class="relative mb-8">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Atau masuk dengan email</span>
              </div>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-6">
              <!-- Email Field -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-semibold text-gray-700">
                  Alamat Email
                </label>
                <div class="relative">
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    v-model="email"
                    autocomplete="email" 
                    required
                    class="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="email@example.com"
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Password Field -->
              <div class="space-y-2">
                <label for="password" class="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div class="relative">
                  <input 
                    id="password" 
                    name="password" 
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    autocomplete="current-password" 
                    required
                    class="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm pr-12"
                    placeholder="Masukkan password Anda"
                  />
                  <button 
                    type="button"
                    @click="togglePasswordVisibility"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-600 transition-colors duration-200"
                  >
                    <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Remember Me & Forgot Password -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox"
                    v-model="rememberMe"
                    class="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 transition-colors duration-200"
                  />
                  <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                    Ingat saya
                  </label>
                </div>

                <router-link 
                  to="/forgot-password"
                  class="text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors duration-200 hover:underline"
                >
                  Lupa password?
                </router-link>
              </div>

              <!-- Submit Button -->
              <div>
                <button 
                  type="submit" 
                  :disabled="isLoading"
                  :class="[
                    'w-full flex justify-center items-center gap-3 py-4 px-4 border border-transparent rounded-2xl text-sm font-semibold text-white transition-all duration-300 transform shadow-lg',
                    isLoading 
                      ? 'bg-amber-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105 hover:shadow-xl'
                  ]"
                >
                  <svg 
                    v-if="isLoading"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isLoading ? 'Memproses...' : 'Masuk ke Akun' }}</span>
                </button>
              </div>
            </form>

            <!-- Additional Info -->
            <div class="mt-8 text-center">
              <p class="text-xs text-gray-500">
                Dengan masuk, Anda menyetujui 
                <a href="#" class="text-amber-600 hover:text-amber-800 transition-colors duration-200">Syarat & Ketentuan</a> 
                dan 
                <a href="#" class="text-amber-600 hover:text-amber-800 transition-colors duration-200">Kebijakan Privasi</a> 
                kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column - Hero Section -->
    <div class="hidden lg:flex flex-1 relative overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-10000"
        style="background-image: url('@/assets/images/login-umkm.jpg')"
      ></div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-transparent"></div>
      
      <!-- Content -->
      <div class="relative z-10 flex h-full flex-col justify-end p-12 text-white">
        <div class="max-w-md" :class="{ 'animate-fade-in-left': isMounted }">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span class="text-amber-200">✨</span>
            <span class="text-sm font-medium">Platform UMKM Terpercaya</span>
          </div>
          
          <h3 class="text-5xl font-headline font-bold leading-tight mb-4">
            Wujudkan Potensi Digital Bisnis Anda
          </h3>
          
          <p class="text-lg text-amber-100 leading-relaxed mb-8">
            Bergabunglah dengan <span class="font-semibold text-white">5.000+ UMKM</span> yang sudah berkembang bersama kami. Kelola profil, terhubung dengan pelanggan, dan tumbuhkan bisnis Anda.
          </p>

          <!-- Features List -->
          <div class="space-y-3">
            <div v-for="feature in [
              'Dashboard analitik real-time',
              'Terhubung dengan 50.000+ pelanggan',
              'Tools promosi yang mudah digunakan',
              'Kelola bisnis dari mana saja'
            ]" :key="feature" class="flex items-center gap-3 text-amber-100">
              <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>{{ feature }}</span>
            </div>
          </div>

          <!-- Stats -->
          <div class="flex gap-6 mt-8 pt-8 border-t border-amber-700/50">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">5K+</div>
              <div class="text-sm text-amber-200">UMKM Terdaftar</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">50K+</div>
              <div class="text-sm text-amber-200">Pengguna Aktif</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">4.8</div>
              <div class="text-sm text-amber-200">Rating Aplikasi</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute top-10 right-10 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-32 h-32 bg-amber-300/30 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
    </div>
  </div>
</template>

<style scoped>
/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #fef3c7;
}

::-webkit-scrollbar-thumb {
  background: #f59e0b;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d97706;
}

/* Backdrop Blur Support */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Smooth transitions for all interactive elements */
button, input, a {
  transition: all 0.2s ease-in-out;
}

/* Focus states for accessibility */
input:focus, button:focus {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}
</style>