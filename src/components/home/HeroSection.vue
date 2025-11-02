<template>
  <section class="bg-temuloka-bg container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p data-aos="fade-right" class="mt-4 text-balance text-amber-600 font-light rounded-full inline-block px-3 py-1 bg-amber-100">
          Selamat Datang di TemuLoka!
        </p>
        <h1 data-aos="fade-right" class=" font-headline text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
          Jelajah Cerita dan Rasa di Setiap Sudut Kotamu.
        </h1>
        <p data-aos="fade-right" class="mt-4 text-lg text-zinc-600">
          Temukan dan dukung UMKM lokal favoritmu. Dari warung kopi legendaris hingga pangkas rambut andalan.
        </p>
        <router-link 
          data-aos="fade-up" 
          to="/products" 
          class="mt-8 inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold text-balance hover:bg-amber-800 transition-colors">
          Jelajahi Sekarang
        </router-link>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <img src="@/assets/images/hero-nasi.jpg" alt="Nasi Campur" class="rounded-lg shadow-lg w-full h-64 object-cover object-center transform md:translate-y-8">
        <img src="@/assets/images/hero-nasi-lemak.jpg" alt="Nasi Lemak" class="rounded-lg shadow-lg w-full h-64 object-cover object-center">
      </div>
    </div>
  </section>
</template>