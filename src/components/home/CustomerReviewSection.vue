<script setup>
import ReviewCard from '@/components/ui/ReviewCard.vue';
</script>

<template>
  <section class=" container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="text-3xl font-bold text-center text-zinc-900 mb-12 font-headline">Review Pelanggan</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ReviewCard 
        avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop" 
        name="Anna L." 
        review="Gara-gara TemuLoka, aku nemu warung soto legendaris yang lokasinya di dalem gang. Enak banget!" 
        :rating="5"
      />
      <ReviewCard 
        avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop" 
        name="Budi S." 
        review="Fitur Poin Loyalitasnya mantap! Udah dapet diskon 50% di barbershop langganan." 
        :rating="5"
      />
      <ReviewCard 
        avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop" 
        name="Citra D." 
        review="Akhirnya ada platform yang fokus ke UMKM. Info jam bukanya selalu akurat, beda sama di Maps." 
        :rating="5"
      />
    </div>
  </section>
</template>