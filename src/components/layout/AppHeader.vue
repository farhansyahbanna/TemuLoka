<template>
  <header class="bg-amber-50 container mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
    <nav class="flex justify-between items-center ">
      <div class="text-xl font-bold text-amber-800">
        <img src="@/assets/images/logo-temuloka.png" alt="TemuLoka Logo" class="h-10 w-auto">
      </div>
      
      <div class="hidden md:flex gap-6 text-zinc-600 font-medium">
        <a href="#" class="hover:text-amber-600">Home</a>
        <a href="#" class="hover:text-amber-600">Fitur</a>
        <a href="#" class="hover:text-amber-600">Kategori</a>
        <a href="#" class="hover:text-amber-600">Blog</a>
      </div>
    
      <router-link 
          to="/login" 
          class="bg-amber-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors">
          Mulai
      </router-link>
      
    </nav>
  </header>
</template>