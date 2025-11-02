<script setup>
import FeatureCard from '@/components/ui/FeatureCard.vue';

import ilustrasiPeta from '@/assets/images/ilustrasi-peta.png';
import ilustrasiLoyalitas from '@/assets/images/ilustrasi-loyalitas.png';
import ilustrasiUlasan from '@/assets/images/ilustrasi-ulasan.png';
</script>

<template>
  <section class="bg-temuloka-alt container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="font-headline text-4xl font-bold text-center text-zinc-900 mb-16" data-aos="fade-up">
      Fitur Unggulan
    </h2>

    <div class="space-y-20">
      <FeatureCard
        :imageSrc="ilustrasiPeta"
        imageAlt="Ilustrasi Peta Interaktif"
        title="Peta Interaktif Berlapis"
        description="Tak perlu lagi khawatir alamat salah atau nomor telepon tidak aktif. Kami kumpulkan semua informasi penting UMKM di satu tempat, lengkap dan selalu update, langsung dari pemiliknya."
        backgroundColor="p-20 rounded-lg"
        data-aos="fade-right"
      />

      <FeatureCard
        :imageSrc="ilustrasiLoyalitas"
        imageAlt="Ilustrasi Poin Loyalitas"
        title="Poin Loyalitas"
        description="Dapatkan poin dari setiap kunjungan dan tukarkan dengan diskon di berbagai UMKM. Dukung satu, nikmati manfaatnya di banyak tempat."
        :reverse="true"
        backgroundColor="p-20 bg-temuloka-bg rounded-lg "
        data-aos="fade-left"
      />

      <FeatureCard
        :imageSrc="ilustrasiUlasan"
        imageAlt="Ilustrasi Ulasan Kontekstual"
        title="Ulasan Kontekstual"
        description="Beri ulasan spesifik untuk produk tertentu, bukan hanya tempatnya secara umum."
        backgroundColor="p-20 rounded-lg"
        data-aos="fade-right"
      />
    </div>
  </section>
</template>
