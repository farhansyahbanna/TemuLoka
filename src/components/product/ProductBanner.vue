<script setup>
// Import modul Swiper yang diperlukan
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '@/assets/images/banner-1.png';
import Banner2 from '@/assets/images/banner-2.png';
import Banner3 from '@/assets/images/banner-3.png';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Data untuk slides (bisa juga dari props)
const slides = [
  { img: Banner1, alt: 'Banner 1' },
  { img: Banner2, alt: 'Banner 2' },
  { img: Banner3, alt: 'Banner 3' },
];

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
    <div class="text-center font-headline mb-10">
      <h1 class="text-4xl font-bold text-amber-800 mb-2">
        UMKM Lokal Unggulan
      </h1>
      <p class="text-lg text-gray-600">
        Temukan warung kopi tersembunyi, kedai legendaris, dan UMKM andalan dengan informasi lengkap dan terpercaya. 
      </p>
    </div>
  <div class="w-full rounded-lg overflow-hidden shadow-lg mb-8">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      class="h-64 md:h-96"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.img" :alt="slide.alt" class="w-full h-full object-cover">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
/* Kustomisasi navigasi Swiper agar lebih pas dengan Tailwind */
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 50%;
  width: 15px !important; /* Perkecil ukuran */
  height: 15px !important; /* Perkecil ukuran */
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 1.25rem !important; /* Perkecil ikon panah */
  font-weight: 800;
}
.swiper-pagination-bullet-active {
  background-color: white !important;
}
</style>