<script setup>
import { ref } from 'vue';


// State untuk form
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

function handleLogin() {
  // Ganti dengan logika login Anda (misalnya, panggil API)
  console.log('Login attempt:', { 
    email: email.value, 
    password: password.value,
    remember: rememberMe.value
  });
  alert('Login berhasil (placeholder)!');
}
</script>

<template>
  <div class="bg-temuloka-bg min-h-screen grid lg:grid-cols-2">
   <div class="image-column hidden lg:block relative bg-cover bg-center">
      <div class="relative z-10 flex h-full flex-col justify-end p-10 text-white">
        <h3 class="text-3xl font-headline font-bold">
          "Bisnis Anda adalah cerita Anda."
        </h3>
        <p class="mt-2 text-lg opacity-90">
          Bergabunglah dengan ribuan UMKM lain dan ceritakan kisah sukses Anda bersama kami.
        </p>
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
      <div class="bg-temuloka-alt p-6 rounded-2xl shadow mx-auto w-full max-w-sm lg:w-96">
        
        <div class="text-center align-center justify-center">
          <img src="@/assets/images/logo-temuloka.png" alt="TemuLoka Logo" class="h-10 w-auto align-center mx-auto">
          <h2 class="mt-6 text-3xl font-headline font-bold tracking-tight text-gray-900">
            Selamat Datang Kembali!
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Masuk untuk mengelola profil UMKM Anda, atau 
            <router-link to="/register" class="font-medium text-amber-600 hover:text-amber-800">
              daftar akun baru
            </router-link>
          </p>
        </div>

        <div class="mt-8">
          <form @submit.prevent="handleLogin" class="space-y-6">
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Alamat Email
              </label>
              <div class="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  v-model="email"
                  autocomplete="email" 
                  required
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input 
                  id="password" 
                  name="password" 
                  type="password"
                  v-model="password"
                  autocomplete="current-password" 
                  required
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox"
                  v-model="rememberMe"
                  class="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Ingat saya
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-amber-600 hover:text-amber-800">
                  Lupa password?
                </a>
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    

  </div>
</template>

<style scoped>
.image-column {
  /* Ganti URL ini dengan gambar pilihan Anda */
  background-image: url('@/assets/images/login-umkm.jpg');
}

.image-column::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(31, 41, 55, 0.4); /* Overlay gelap */
  z-index: 1;
}
</style>