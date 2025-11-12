<script setup>
import { ref, onMounted } from 'vue';
// 1. Impor database Anda untuk mendapatkan data asli
import { umkmDatabase } from '@/data/database.js';

// 2. Siapkan ref untuk elemen section (untuk observer)
const sectionRef = ref(null);

// 3. Siapkan ref untuk angka-angka yang akan tampil, mulai dari 0
const umkmCount = ref(0);
const userCount = ref(0);
const reviewCount = ref(0);
const categoryCount = ref(0);

// 4. Tentukan target akhir dari database
const targetUmkm = umkmDatabase.umkm.length;
const targetUser = umkmDatabase.users.length;
const targetReview = umkmDatabase.reviews.length;
const targetCategory = umkmDatabase.categories.length;

// 5. Fungsi untuk menganimasikan angka
// Kita menggunakan 'requestAnimationFrame' untuk animasi yang mulus
function animateCount(displayRef, start, end, duration) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    
    // Hitung nilai saat ini (dengan 'easing' sederhana)
    displayRef.value = Math.floor(progress * (end - start) + start);
    
    if (progress < 1) {
      window.requestAnimationFrame(step); // Lanjutkan animasi
    } else {
      displayRef.value = end; // Pastikan berakhir di angka yang tepat
    }
  };
  window.requestAnimationFrame(step);
}

// 6. Siapkan 'IntersectionObserver' saat komponen dimuat
onMounted(() => {
  const options = {
    threshold: 0.5 // Memicu saat 50% elemen terlihat
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Mulai animasi untuk semua angka
        animateCount(umkmCount, 0, targetUmkm, 2000); // Durasi 2 detik
        animateCount(userCount, 0, targetUser, 2000);
        animateCount(reviewCount, 0, targetReview, 2000);
        animateCount(categoryCount, 0, targetCategory, 1500); // Durasi 1.5 detik
        
        // Hentikan observing setelah animasi berjalan
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Mulai observing elemen section
  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<template>
  <section ref="sectionRef" class="bg-gray-50 py-10">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div class="text-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
          <span v-html="IconStore" class="mx-auto mb-4"></span>
          <h2 class="text-5xl font-bold text-gray-800">
            {{ umkmCount.toFixed(0) }}+
          </h2>
          <p class="text-lg text-gray-600 mt-2">UMKM Terdaftar</p>
        </div>

        <div class="text-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
          <span v-html="IconReview" class="mx-auto mb-4"></span>
          <h2 class="text-5xl font-bold text-gray-800">
            {{ reviewCount.toFixed(0) }}+
          </h2>
          <p class="text-lg text-gray-600 mt-2">Ulasan Terverifikasi</p>
        </div>

        <div class="text-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
          <span v-html="IconUsers" class="mx-auto mb-4"></span>
          <h2 class="text-5xl font-bold text-gray-800">
            {{ userCount.toFixed(0) }}+
          </h2>
          <p class="text-lg text-gray-600 mt-2">Pengguna Bergabung</p>
        </div>

        <div class="text-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
          <span v-html="IconCategory" class="mx-auto mb-4"></span>
          <h2 class="text-5xl font-bold text-gray-800">
            {{ categoryCount.toFixed(0) }}
          </h2>
          <p class="text-lg text-gray-600 mt-2">Pilihan Kategori</p>
        </div>

      </div>
    </div>
  </section>
</template>