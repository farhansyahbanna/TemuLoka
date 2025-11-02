<template>
  <footer class="bg-temuloka-footer text-amber-100  pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-white mb-2">
            <span class="text-orange-400">Temu</span>Loka
          </h3>
          <p class="text-sm font-headline text-amber-200">
            Membantu Anda menemukan dan mendukung UMKM lokal dengan cerita dan rasa yang otentik.
          </p>
        </div>
        
        <div>
          <h4 class="font-semibold text-lg text-white mb-3">Navigasi</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#" class="hover:text-white">Fitur</a></li>
            <li><a href="#" class="hover:text-white">Kategori</a></li>
            <li><a href="#" class="hover:text-white">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg text-white mb-3">Lainnya</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" class="hover:text-white">Kontak</a></li>
            <li><a href="#" class="hover:text-white">Daftarkan UMKM</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg text-white mb-3">Ikuti Kami</h4>
          <div class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6v5q-4 0-6-2v7a7 7 0 1 1-5-6.7m0 6.7a2 2 0 1 0-2 2a2 2 0 0 0 2-2V1h5q2 5 6 5"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"/></svg>
          </div>
        </div>
      </div>
      
      <hr class="border-amber-700 my-8">
      
      <p class="text-center text-sm text-amber-300">
        © {{ new Date().getFullYear() }} TemuLoka. Dukung UMKM Lokal Disekitar Anda Indonesia.
      </p>
    </div>
  </footer>
</template>