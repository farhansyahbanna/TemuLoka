<script setup>
import ProblemCard from '@/components/ui/ProblemCard.vue';
import SolutionCard from '@/components/ui/SolutionCard.vue';
</script>

<template>
  <section class="bg-temuloka-alt container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="font-headline text-3xl font-bold text-center text-zinc-900">
      Capek Hanya Lihat Usaha Besar di Feed-mu?
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
      <div class="flex justify-center">
        <img src="@/assets/images/pria-bingung.png" alt="Pria bingung mencari UMKM" class="w-64 h-64 object-contain">
      </div>
      
      <div class="space-y-4">
        <ProblemCard 
          title="Informasi Berantakan" 
          description="Jam buka tidak jelas, alamat susah dicari, nomor telepon tidak aktif."
          data-aos="fade-left" data-aos-delay="100" 
        />
        <ProblemCard 
          title="Sulit Ditemukan" 
          description="UMKM favoritmu tidak ada di GoFood atau Google Maps."
          data-aos="fade-left" data-aos-delay="200" 
        />
        <ProblemCard 
          title="Sulit Ditemukan" 
          description="UMKM favoritmu tidak ada di GoFood atau Google Maps."
          data-aos="fade-left" data-aos-delay="300" 
        />
        </div>
    </div>

    <div class="text-center py-20">
      <h3 class="text-4xl font-bold text-shadow-black font-headline">Kami Hadir untuk Mengubahnya!</h3>
      <p class="text-zinc-600">TemuLoka adalah jawaban untuk semua masalahmu.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
        <SolutionCard 
          icon="info" 
          title="Informasi Terpusat & Terverifikasi" 
          description="Semua info dari jam buka, menu, hingga fasilitas, kami verifikasi langsung." 
          :isPrimary="true"
          data-aos="fade-up" data-aos-delay="100"
        />
        <SolutionCard 
          icon="map" 
          title="Peta Interaktif" 
          description="Jelajahi UMKM di sekitarmu dengan peta yang mudah digunakan."
          data-aos="fade-up" data-aos-delay="200" 
        />
        <SolutionCard 
          icon="review" 
          title="Ulasan Jujur" 
          description="Lihat ulasan asli dari komunitas untuk bantu kamu memilih."
          data-aos="fade-up" data-aos-delay="300" 
        />
      </div>
    </div>
  </section>
</template>