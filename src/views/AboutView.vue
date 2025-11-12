<script setup>
import { ref, onMounted } from 'vue';

// Data untuk fitur-fitur
const features = ref([
  {
    icon: '🏪',
    title: 'Katalog UMKM Lengkap',
    description: 'Temukan berbagai UMKM lokal dengan informasi detail mulai dari menu, harga, hingga fasilitas yang tersedia.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: '📍',
    title: 'Peta Interaktif',
    description: 'Navigasi mudah dengan peta digital yang menunjukkan lokasi tepat setiap UMKM di sekitar Anda.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '⭐',
    title: 'Ulasan Terpercaya',
    description: 'Baca pengalaman nyata dari pelanggan lain untuk membantu Anda membuat keputusan yang tepat.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🎯',
    title: 'Promo Eksklusif',
    description: 'Dapatkan penawaran spesial dan diskon menarik yang hanya tersedia melalui Temuloka.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '📱',
    title: 'Desain Responsif',
    description: 'Akses mudah melalui berbagai perangkat, dari smartphone hingga desktop dengan pengalaman optimal.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: '🚀',
    title: 'Update Real-time',
    description: 'Informasi jam operasional dan ketersediaan menu yang selalu diperbarui secara real-time.',
    color: 'from-indigo-500 to-violet-500'
  }
]);

// Data untuk tim pengembang
const team = ref([
  {
    name: 'Ahmad Wijaya',
    role: 'Founder & CEO',
    avatar: '👨‍💼',
    bio: 'Pengusaha UMKM dengan pengalaman 10+ tahun dalam mengembangkan bisnis lokal.',
    expertise: ['UMKM Development', 'Business Strategy', 'Local Market']
  },
  {
    name: 'Sari Dewi',
    role: 'Product Manager',
    avatar: '👩‍💻',
    bio: 'Spesialis dalam pengembangan produk digital dengan fokus pada user experience.',
    expertise: ['Product Design', 'UX Research', 'Agile Development']
  },
  {
    name: 'Budi Santoso',
    role: 'Tech Lead',
    avatar: '👨‍🔧',
    bio: 'Full-stack developer dengan passion dalam membangun solusi teknologi untuk UMKM.',
    expertise: ['Vue.js', 'Node.js', 'System Architecture']
  },
  {
    name: 'Maya Pertiwi',
    role: 'Community Manager',
    avatar: '👩‍🎓',
    bio: 'Ahli dalam membangun dan mengelola komunitas UMKM secara offline dan online.',
    expertise: ['Community Building', 'Digital Marketing', 'Partnership']
  }
]);

// Data statistik
const stats = ref([
  { number: '500+', label: 'UMKM Terdaftar' },
  { number: '50+', label: 'Kategori Bisnis' },
  { number: '10K+', label: 'Pengguna Aktif' },
  { number: '95%', label: 'Kepuasan Pengguna' }
]);

// Data milestones
const milestones = ref([
  {
    year: '2023',
    title: 'Awal Perjalanan',
    description: 'Temuloka dimulai dengan visi mendigitalkan UMKM lokal dan membantu mereka menjangkau lebih banyak pelanggan.'
  },
  {
    year: '2024 Q1',
    title: 'Peluncuran Beta',
    description: 'Versi beta diluncurkan dengan 50 UMKM pertama dan mendapatkan respons positif dari komunitas lokal.'
  },
  {
    year: '2024 Q2',
    title: 'Ekspansi Fitur',
    description: 'Penambahan fitur peta interaktif, sistem ulasan, dan promo eksklusif untuk meningkatkan engagement.'
  },
  {
    year: '2024 Q3',
    title: 'Pertumbuhan Pesat',
    description: 'Temuloka mencapai 500+ UMKM terdaftar dan 10.000+ pengguna aktif dalam platform.'
  }
]);

const isLoading = ref(true);

onMounted(() => {
  // Simulasi loading
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
    
    <!-- Loading Animation -->
    <div v-if="isLoading" class="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-600 font-medium">Memuat halaman...</p>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative bg-linear-to-r from-amber-500 to-amber-600 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div class="text-center">
          <div class="flex justify-center mb-6">
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-20 h-20 flex items-center justify-center text-3xl">
              🏪
            </div>
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Tentang <span class="text-orange-200">Temuloka</span>
          </h1>
          <p class="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Platform digital inovatif yang menghubungkan pelanggan dengan 
            <span class="font-semibold text-orange-200">UMKM lokal terbaik</span> di sekitar Anda
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#visi-misi" class="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Jelajahi Lebih Lanjut
            </a>
            <router-link to="/" class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1">
              Kembali ke Beranda
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">{{ stat.number }}</div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi Misi Section -->
    <section id="visi-misi" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Visi -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white text-xl">
                👁️
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Visi Kami</h2>
            </div>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Menjadi platform terdepan dalam mendigitalisasi UMKM lokal Indonesia, 
              menciptakan ekosistem yang saling menguntungkan antara pelaku usaha 
              dan konsumen, serta berkontribusi pada pertumbuhan ekonomi digital nasional.
            </p>
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p class="text-orange-800 font-semibold text-center">
                "Memberdayakan UMKM, Memajukan Ekonomi Lokal"
              </p>
            </div>
          </div>

          <!-- Misi -->
          <div class="space-y-6">
            <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Misi Kami</h2>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</span>
                  <span class="text-gray-600">Menyediakan platform digital yang mudah digunakan bagi UMKM untuk menjangkau pasar yang lebih luas</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</span>
                  <span class="text-gray-600">Memberikan pengalaman berbelanja yang menyenangkan dan terpercaya bagi konsumen</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</span>
                  <span class="text-gray-600">Mendorong inovasi dan adaptasi teknologi di kalangan pelaku UMKM lokal</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">4</span>
                  <span class="text-gray-600">Membangun komunitas yang saling mendukung antara UMKM dan konsumen</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Mengapa Memilih <span class="text-orange-600">Temuloka</span>?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menghadirkan solusi lengkap untuk memenuhi kebutuhan belanja UMKM lokal 
            dengan pengalaman digital yang modern dan terpercaya
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="group p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-orange-50"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                {{ feature.icon }}
              </div>
              <div class="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Perjalanan <span class="text-orange-600">Temuloka</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari ide sederhana hingga menjadi platform UMKM terpercaya yang digunakan ribuan orang
          </p>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-200 h-full"></div>
          
          <div class="space-y-12">
            <div 
              v-for="(milestone, index) in milestones" 
              :key="milestone.year"
              class="relative"
            >
              <div class="flex items-center w-full" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
                <div class="w-1/2 pr-8" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
                  <div class="bg-white p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                    <span class="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full mb-3">
                      {{ milestone.year }}
                    </span>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ milestone.title }}</h3>
                    <p class="text-gray-600">{{ milestone.description }}</p>
                  </div>
                </div>
                
                <!-- Timeline dot -->
                <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div class="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Tim <span class="text-orange-600">Pengembang</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Dibangun oleh tim yang passionate tentang UMKM dan teknologi, 
            berkomitmen menciptakan dampak positif bagi masyarakat
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="member in team" 
            :key="member.name"
            class="group text-center p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
          >
            <div class="w-24 h-24 mx-auto mb-6 text-4xl bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
              {{ member.avatar }}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
              {{ member.name }}
            </h3>
            <span class="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
              {{ member.role }}
            </span>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              {{ member.bio }}
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span 
                v-for="skill in member.expertise" 
                :key="skill"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Mari Berkolaborasi!
        </h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Baik Anda pemilik UMKM yang ingin berkembang atau konsumen yang ingin mendukung bisnis lokal, 
          bersama kita bisa menciptakan dampak yang lebih besar.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/umkm" 
            class="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Jelajahi UMKM
          </router-link>
          <a 
            href="#" 
            class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Daftarkan UMKM Anda
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #f97316, #ea580c);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #ea580c, #c2410c);
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Timeline responsive */
@media (max-width: 768px) {
  .timeline-line {
    left: 1rem;
  }
  
  .timeline-dot {
    left: 1rem;
  }
  
  .timeline-content {
    margin-left: 3rem;
    text-align: left;
  }
}
</style>