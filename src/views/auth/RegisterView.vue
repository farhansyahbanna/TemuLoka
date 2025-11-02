<script setup>
import { ref, computed } from 'vue';

// State untuk form registrasi
const fullName = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const agreeToTerms = ref(false);


function handleRegister() {
  // Validasi sederhana
  if (password.value !== passwordConfirmation.value) {
    alert('Password dan Konfirmasi Password tidak cocok!');
    return;
  }
  if (!agreeToTerms.value) {
    alert('Anda harus menyetujui Syarat & Ketentuan untuk mendaftar.');
    return;
  }
  
  // Ganti dengan logika registrasi Anda (panggil API)
  console.log('Register attempt:', {
    name: fullName.value,
    email: email.value,
    password: password.value,
    terms: agreeToTerms.value
  });
  alert('Registrasi berhasil (placeholder)!');
  // Anda mungkin ingin mengarahkan pengguna ke halaman login setelah ini
  // useRouter().push('/login');
}
</script>

<template>
  <div class="min-h-screen grid lg:grid-cols-2">
    
    <div class="flex flex-col justify-center bg-temuloka-bg py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
      <div class="mx-auto w-full bg-temuloka-alt p-6 rounded-2xl shadow max-w-sm lg:w-96">
        
        <div>
          <img src="@/assets/images/logo-temuloka.png" alt="TemuLoka Logo" class="h-10 w-auto align-center mx-auto">
          <h2 class="mt-6 text-3xl font-headline font-bold tracking-tight text-gray-900">
            Buat Akun Baru
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Sudah punya akun?
            <router-link to="/login" class="font-medium text-amber-600 hover:text-amber-800">
              Masuk di sini
            </router-link>
          </p>
        </div>

        <div class="mt-8">
          <form @submit.prevent="handleRegister" class="space-y-6">
            
            <div>
              <label for="full-name" class="block text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <div class="mt-1">
                <input 
                  id="full-name" 
                  name="full-name" 
                  type="text" 
                  v-model="fullName"
                  autocomplete="name" 
                  required
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

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
                  autocomplete="new-password" 
                  required
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="password-confirmation" class="block text-sm font-medium text-gray-700">
                Konfirmasi Password
              </label>
              <div class="mt-1">
                <input 
                  id="password-confirmation" 
                  name="password-confirmation" 
                  type="password"
                  v-model="passwordConfirmation"
                  autocomplete="new-password" 
                  required
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="flex items-center">
              <input 
                id="terms" 
                name="terms" 
                type="checkbox"
                v-model="agreeToTerms"
                class="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-800"
              />
              <label for="terms" class="ml-2 block text-sm text-gray-900">
                Saya setuju dengan
                <a href="#" class="font-medium text-amber-600 hover:text-amber-800">
                  Syarat & Ketentuan
                </a>
              </label>
            </div>

            <div>
              <button 
                type="submit" 
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

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

  </div>
</template>

<style scoped>
.image-column {
  /* Ganti URL ini dengan gambar pilihan Anda */
  background-image: url('@/assets/images/register-umkm.jpg');
}

.image-column::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(31, 41, 55, 0.4); /* Overlay gelap */
  z-index: 1;
}
</style>