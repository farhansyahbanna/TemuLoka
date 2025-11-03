// Database structure untuk UMKM Directory
export const umkmDatabase = {
  // Users/Pengguna
  users: [
    {
      id: 1,
      name: "Ahmad Budiman",
      email: "ahmad@email.com",
      avatar: "👨‍💼",
      joinedDate: "2024-01-15",
      favoriteUMKM: [1, 3, 5],
      reviews: [1, 3],
      points: 450
    },
    {
      id: 2,
      name: "Sari Dewi",
      email: "sari@email.com",
      avatar: "👩‍💻",
      joinedDate: "2024-02-20",
      favoriteUMKM: [2, 4],
      reviews: [2, 4],
      points: 320
    }
  ],

  // Categories/Kategori UMKM
  categories: [
    {
      id: "warung-kopi",
      name: "Warung Kopi",
      icon: "☕",
      description: "Tempat nongkrong dan menikmati kopi",
      color: "primary",
      count: 15
    },
    {
      id: "makanan",
      name: "Kuliner & Makanan",
      icon: "🍜",
      description: "Restoran, warung makan, dan kedai makanan",
      color: "accent",
      count: 45
    },
    {
      id: "kecantikan",
      name: "Kecantikan",
      icon: "💇",
      description: "Salon, barbershop, dan perawatan kecantikan",
      color: "secondary",
      count: 12
    },
    {
      id: "fashion",
      name: "Fashion",
      icon: "👕",
      description: "Toko pakaian, aksesoris, dan fashion",
      color: "primary",
      count: 8
    },
    {
      id: "kerajinan",
      name: "Kerajinan Tangan",
      icon: "🎨",
      description: "Produk kerajinan dan handmade",
      color: "secondary",
      count: 6
    },
    {
      id: "jasa",
      name: "Jasa",
      icon: "🔧",
      description: "Layanan jasa dan servis",
      color: "accent",
      count: 10
    }
  ],

  // UMKM Data
  umkm: [
    {
      id: 1,
      name: "Kopi Teman Sejati",
      slug: "kopi-teman-sejati",
      category: "warung-kopi",
      description: "Warung kopi legendaris dengan racikan tradisional yang autentik sejak 1998. Menyajikan kopi lokal pilihan dengan teknik seduhan tradisional.",
      shortDescription: "Warung kopi tradisional dengan cita rasa autentik",
      owner: "Pak Heru",
      established: 1998,
      
      // Location
      location: "Jakarta Pusat",
      address: "Jl. Kemanggisan No. 123, RT 01/RW 05",
      coordinates: {
        lat: -6.2088,
        lng: 106.8456
      },
      
      // Contact
      contact: {
        phone: "+628123456789",
        whatsapp: "+628123456789",
        instagram: "@kopitemansejati",
        email: "kopiteman@email.com"
      },
      
      // Business Info
      priceRange: "Rp 15.000 - Rp 35.000",
      openingHours: {
        monday: { open: "07:00", close: "22:00", isOpen: true },
        tuesday: { open: "07:00", close: "22:00", isOpen: true },
        wednesday: { open: "07:00", close: "22:00", isOpen: true },
        thursday: { open: "07:00", close: "22:00", isOpen: true },
        friday: { open: "07:00", close: "23:00", isOpen: true },
        saturday: { open: "08:00", close: "23:00", isOpen: true },
        sunday: { open: "08:00", close: "22:00", isOpen: true }
      },
      isOpen: true,
      
      // Ratings & Reviews
      rating: 4.8,
      reviewCount: 124,
      featured: true,
      verified: true,
      
      // Media
      images: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop"
      ],
      logo: "☕",
      
      // Features & Tags
      tags: ["WiFi Kencang", "Tempat Nongkrong", "Kopi Lokal", "Ac", "Parkir Luas"],
      facilities: ["wifi", "ac", "parking", "toilet", "smoking-area"],
      paymentMethods: ["cash", "qris", "gopay", "ovo", "dana"],
      
      // Menu (jika ada)
      menu: [
        {
          category: "Kopi Signature",
          items: [
            { name: "Kopi Tubruk", price: 15000, description: "Kopi tubruk asli dengan gula aren" },
            { name: "Espresso", price: 20000, description: "Single origin espresso" },
            { name: "Latte", price: 25000, description: "Latte dengan artwork" }
          ]
        },
        {
          category: "Non-Kopi",
          items: [
            { name: "Teh Tarik", price: 18000, description: "Teh tarik khas Malaysia" },
            { name: "Coklat Hangat", price: 22000, description: "Coklat belgia premium" }
          ]
        }
      ],
      
      // Stats
      views: 1250,
      favorites: 89,
      lastUpdated: "2024-10-28"
    },
    {
      id: 2,
      name: "Bakso Lapangan Tembak",
      slug: "bakso-lapangan-tembak",
      category: "makanan",
      description: "Bakso kenyal dengan kuah kaldu sapi asli sejak 1995. Daging sapi pilihan dengan resep turun temurun.",
      shortDescription: "Bakso legendaris dengan kuah kaldu sapi asli",
      owner: "Bu Siti",
      established: 1995,
      
      location: "Jakarta Selatan",
      address: "Jl. Sudirman No. 456, RT 02/RW 03",
      coordinates: {
        lat: -6.2296,
        lng: 106.7980
      },
      
      contact: {
        phone: "+628987654321",
        whatsapp: "+628987654321",
        instagram: "@bakslotembak",
        email: "bakslotembak@email.com"
      },
      
      priceRange: "Rp 20.000 - Rp 50.000",
      openingHours: {
        monday: { open: "10:00", close: "22:00", isOpen: true },
        tuesday: { open: "10:00", close: "22:00", isOpen: true },
        wednesday: { open: "10:00", close: "22:00", isOpen: true },
        thursday: { open: "10:00", close: "22:00", isOpen: true },
        friday: { open: "10:00", close: "23:00", isOpen: true },
        saturday: { open: "09:00", close: "23:00", isOpen: true },
        sunday: { open: "09:00", close: "22:00", isOpen: true }
      },
      isOpen: true,
      
      rating: 4.9,
      reviewCount: 287,
      featured: true,
      verified: true,
      
      images: [
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=300&fit=crop"
      ],
      logo: "🍜",
      
      tags: ["Legendaris", "Porsi Besar", "Family Friendly", "Halal", "Murah"],
      facilities: ["parking", "toilet", "takeaway", "delivery"],
      paymentMethods: ["cash", "qris", "gopay"],
      
      menu: [
        {
          category: "Bakso",
          items: [
            { name: "Bakso Biasa", price: 20000, description: "5 butir bakso dengan mie dan kuah" },
            { name: "Bakso Spesial", price: 30000, description: "8 butir bakso dengan pangsit" },
            { name: "Bakso Jumbo", price: 40000, description: "3 butir bakso jumbo dengan tulang" }
          ]
        }
      ],
      
      views: 2100,
      favorites: 156,
      lastUpdated: "2024-10-29"
    },
    {
      id: 3,
      name: "Salon Cantik Rapi",
      slug: "salon-cantik-rapi",
      category: "kecantikan",
      description: "Salon tradisional dengan pelayanan ramah dan harga terjangkau. Spesialis potong rambut tradisional dan modern.",
      shortDescription: "Salon tradisional dengan pelayanan profesional",
      owner: "Mbak Rina",
      established: 2010,
      
      location: "Jakarta Timur",
      address: "Jl. Merdeka No. 789, RT 03/RW 02",
      coordinates: {
        lat: -6.2250,
        lng: 106.9000
      },
      
      contact: {
        phone: "+628112233445",
        whatsapp: "+628112233445",
        instagram: "@saloncantikrapi",
        email: "salon@email.com"
      },
      
      priceRange: "Rp 30.000 - Rp 150.000",
      openingHours: {
        monday: { open: "09:00", close: "20:00", isOpen: true },
        tuesday: { open: "09:00", close: "20:00", isOpen: true },
        wednesday: { open: "09:00", close: "20:00", isOpen: true },
        thursday: { open: "09:00", close: "20:00", isOpen: true },
        friday: { open: "09:00", close: "21:00", isOpen: true },
        saturday: { open: "08:00", close: "21:00", isOpen: true },
        sunday: { open: "08:00", close: "18:00", isOpen: false }
      },
      isOpen: false,
      
      rating: 4.7,
      reviewCount: 89,
      featured: false,
      verified: true,
      
      images: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1e1?w=500&h=300&fit=crop"
      ],
      logo: "💇",
      
      tags: ["Terjangkau", "Ramah", "Pengalaman Lama", "Bersih", "Profesional"],
      facilities: ["ac", "parking", "toilet", "waiting-area"],
      paymentMethods: ["cash", "qris"],
      
      services: [
        {
          category: "Potong Rambut",
          items: [
            { name: "Potong Rambut Pria", price: 30000, duration: "30 menit" },
            { name: "Potong Rambut Wanita", price: 50000, duration: "45 menit" },
            { name: "Creambath", price: 80000, duration: "60 menit" }
          ]
        }
      ],
      
      views: 780,
      favorites: 45,
      lastUpdated: "2024-10-27"
    },
    {
      id: 4,
      name: "Butik Sari Dewi",
      slug: "butik-sari-dewi",
      category: "fashion",
      description: "Butik fashion lokal dengan desain eksklusif dan bahan premium. Menyediakan pakaian ready-to-wear dan custom.",
      shortDescription: "Butik fashion lokal dengan desain eksklusif",
      owner: "Ibu Dewi",
      established: 2018,
      
      location: "Jakarta Barat",
      address: "Jl. Mangga Besar No. 321, RT 04/RW 01",
      coordinates: {
        lat: -6.1586,
        lng: 106.8000
      },
      
      contact: {
        phone: "+628556677889",
        whatsapp: "+628556677889",
        instagram: "@butiksaridewi",
        email: "butik@email.com"
      },
      
      priceRange: "Rp 150.000 - Rp 500.000",
      openingHours: {
        monday: { open: "10:00", close: "20:00", isOpen: true },
        tuesday: { open: "10:00", close: "20:00", isOpen: true },
        wednesday: { open: "10:00", close: "20:00", isOpen: true },
        thursday: { open: "10:00", close: "20:00", isOpen: true },
        friday: { open: "10:00", close: "21:00", isOpen: true },
        saturday: { open: "09:00", close: "21:00", isOpen: true },
        sunday: { open: "09:00", close: "18:00", isOpen: true }
      },
      isOpen: true,
      
      rating: 4.6,
      reviewCount: 67,
      featured: false,
      verified: true,
      
      images: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=300&fit=crop"
      ],
      logo: "👗",
      
      tags: ["Fashion Lokal", "Desain Eksklusif", "Bahan Premium", "Custom", "Trendy"],
      facilities: ["ac", "fitting-room", "parking"],
      paymentMethods: ["cash", "qris", "credit-card", "gopay"],
      
      views: 920,
      favorites: 78,
      lastUpdated: "2024-10-26"
    },
    {
      id: 5,
      name: "Kedai Roti Nenek",
      slug: "kedai-roti-nenek",
      category: "makanan",
      description: "Roti tradisional dengan resep turun temurun sejak 1985. Menggunakan bahan alami tanpa pengawet.",
      shortDescription: "Roti tradisional dengan resep turun temurun",
      owner: "Nenek Sumi",
      established: 1985,
      
      location: "Jakarta Utara",
      address: "Jl. Pasar Ikan No. 654, RT 05/RW 04",
      coordinates: {
        lat: -6.1256,
        lng: 106.8300
      },
      
      contact: {
        phone: "+628998877665",
        whatsapp: "+628998877665",
        instagram: "@roti nenek",
        email: "roti@email.com"
      },
      
      priceRange: "Rp 10.000 - Rp 25.000",
      openingHours: {
        monday: { open: "06:00", close: "18:00", isOpen: true },
        tuesday: { open: "06:00", close: "18:00", isOpen: true },
        wednesday: { open: "06:00", close: "18:00", isOpen: true },
        thursday: { open: "06:00", close: "18:00", isOpen: true },
        friday: { open: "06:00", close: "19:00", isOpen: true },
        saturday: { open: "06:00", close: "19:00", isOpen: true },
        sunday: { open: "06:00", close: "17:00", isOpen: true }
      },
      isOpen: true,
      
      rating: 4.8,
      reviewCount: 203,
      featured: true,
      verified: true,
      
      images: [
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=500&h=300&fit=crop"
      ],
      logo: "🥖",
      
      tags: ["Tradisional", "Sehat", "Tanpa Pengawet", "Fresh", "Murah"],
      facilities: ["takeaway", "parking"],
      paymentMethods: ["cash", "qris"],
      
      menu: [
        {
          category: "Roti Manis",
          items: [
            { name: "Roti Sobek", price: 12000, description: "Roti sobek original" },
            { name: "Roti Coklat", price: 15000, description: "Roti dengan isian coklat" },
            { name: "Roti Keju", price: 18000, description: "Roti dengan taburan keju" }
          ]
        }
      ],
      
      views: 1560,
      favorites: 134,
      lastUpdated: "2024-10-29"
    }
  ],

  // Reviews/ULasan
  reviews: [
    {
      id: 1,
      umkmId: 1,
      userId: 1,
      rating: 5,
      title: "Kopi terenak se-Jakarta!",
      comment: "Kopi tubruknya autentik banget, tempatnya nyaman buat nongkrong. WiFi kencang dan parkir luas.",
      tags: ["Kopi Enak", "Tempat Nyaman", "WiFi Kencang"],
      images: [],
      date: "2024-10-25",
      verified: true
    },
    {
      id: 2,
      umkmId: 2,
      userId: 2,
      rating: 5,
      title: "Bakso jumbo yang worth it!",
      comment: "Porsinya besar, kuahnya gurih banget. Worth the price! Pelayanannya juga ramah.",
      tags: ["Porsi Besar", "Rasa Enak", "Pelayanan Ramah"],
      images: [],
      date: "2024-10-24",
      verified: true
    },
    {
      id: 3,
      umkmId: 1,
      userId: 2,
      rating: 4,
      title: "Tempat nongkrong yang cozy",
      comment: "Suasana tradisionalnya masih terjaga, cocok buat meeting atau kerja remote.",
      tags: ["Cozy", "Tradisional", "Meeting Place"],
      images: [],
      date: "2024-10-23",
      verified: true
    },
    {
      id: 4,
      umkmId: 3,
      userId: 1,
      rating: 5,
      title: "Potongan rapi dan harga terjangkau",
      comment: "Mbak Rina jago potong rambut, hasilnya rapi dan natural. Harganya juga sangat terjangkau.",
      tags: ["Rapi", "Terjangkau", "Profesional"],
      images: [],
      date: "2024-10-22",
      verified: true
    }
  ],

  // Promotions/Promo
  promotions: [
    {
      id: 1,
      umkmId: 1,
      title: "Weekend Special",
      description: "Diskon 20% untuk semua menu kopi di hari Sabtu dan Minggu",
      discount: 20,
      code: "WEEKEND20",
      validFrom: "2024-11-01",
      validTo: "2024-11-30",
      isActive: true
    },
    {
      id: 2,
      umkmId: 2,
      title: "Bakso Jumbo Buy 1 Get 1",
      description: "Beli 1 porsi bakso jumbo dapat 1 gratis setiap Senin",
      discount: 100,
      code: "B1G1MONDAY",
      validFrom: "2024-11-01",
      validTo: "2024-11-30",
      isActive: true
    }
  ],

  // Events/Acara
  events: [
    {
      id: 1,
      umkmId: 1,
      title: "Live Acoustic Night",
      description: "Nikmati kopi sambil mendengar live acoustic setiap Jumat malam",
      date: "2024-11-05",
      time: "19:00 - 22:00",
      isRecurring: true,
      recurringDay: "friday"
    }
  ]
}

// Helper functions
// Helper functions
export const databaseHelpers = {
  // Get UMKM by ID
  getUMKMById(id) {
    // Ganti 'this.umkm' menjadi 'umkmDatabase.umkm'
    return umkmDatabase.umkm.find(item => item.id === id)
  },

  // Get UMKM by category
  getUMKMByCategory(category) {
    return umkmDatabase.umkm.filter(item => item.category === category)
  },

  // Get featured UMKM
  getFeaturedUMKM() {
    return umkmDatabase.umkm.filter(item => item.featured)
  },

  // Get UMKM by location
  getUMKMByLocation(location) {
    return umkmDatabase.umkm.filter(item => 
      item.location.toLowerCase().includes(location.toLowerCase())
    )
  },

  // Search UMKM
  searchUMKM(query) {
    const searchTerm = query.toLowerCase()
    return umkmDatabase.umkm.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      item.category.toLowerCase().includes(searchTerm)
    )
  },

  // Get reviews for UMKM
  getReviewsByUMKM(umkmId) {
    return umkmDatabase.reviews.filter(review => review.umkmId === umkmId)
  },

  // Get category by ID
  getCategoryById(categoryId) {
    // Ganti 'this.categories' menjadi 'umkmDatabase.categories'
    return umkmDatabase.categories.find(cat => cat.id === categoryId)
  },

  // Get promotions for UMKM
  getPromotionsByUMKM(umkmId) {
    return umkmDatabase.promotions.filter(promo => promo.umkmId === umkmId && promo.isActive)
  }
}