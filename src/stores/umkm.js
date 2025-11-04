import { defineStore } from 'pinia'
import { umkmDatabase, databaseHelpers } from '@/data/database.js'

export const useUMKMStore = defineStore('umkm', {
  state: () => ({
    umkmList: umkmDatabase.umkm,
    categories: umkmDatabase.categories,
    users: umkmDatabase.users,
    reviews: umkmDatabase.reviews,
    promotions: umkmDatabase.promotions,
    events: umkmDatabase.events,
    
    // Filters dan search
    searchQuery: '',
    selectedCategory: 'all',
    selectedLocation: '',
    priceRange: [0, 100000],
    sortBy: 'rating',
    
    // UI state
    loading: false,
    selectedUMKM: null
  }),

  getters: {
    // Get filtered UMKM berdasarkan search dan filter
    filteredUMKM: (state) => {
      let filtered = state.umkmList

      // Filter by search query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase()
        filtered = filtered.filter(umkm =>
          umkm.name.toLowerCase().includes(query) ||
          umkm.description.toLowerCase().includes(query) ||
          umkm.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      // Filter by category
      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(umkm => umkm.category === state.selectedCategory)
      }

      // Filter by location
      if (state.selectedLocation) {
        filtered = filtered.filter(umkm => 
          umkm.location.toLowerCase().includes(state.selectedLocation.toLowerCase())
        )
      }

      // Sort results
      switch (state.sortBy) {
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'newest':
          filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
          break
        case 'popular':
          filtered.sort((a, b) => b.views - a.views)
          break
      }

      return filtered
    },

    // Get featured UMKM
    featuredUMKM: (state) => {
      return state.umkmList.filter(umkm => umkm.featured)
    },

    // Get UMKM by category
    umkmByCategory: (state) => (category) => {
      return state.umkmList.filter(umkm => umkm.category === category)
    },

    // Get category name by ID
    getCategoryName: (state) => (categoryId) => {
      const category = state.categories.find(cat => cat.id === categoryId)
      return category ? category.name : 'Lainnya'
    },

    // Get category icon by ID
    getCategoryIcon: (state) => (categoryId) => {
      const category = state.categories.find(cat => cat.id === categoryId)
      return category ? category.icon : '🏪'
    }
  },

  actions: {
    // Set search query
    setSearchQuery(query) {
      this.searchQuery = query
    },

    // Set selected category
    setCategory(category) {
      this.selectedCategory = category
    },

    // Set selected location
    setLocation(location) {
      this.selectedLocation = location
    },

    // Set sort by
    setSortBy(sortBy) {
      this.sortBy = sortBy
    },

    // Get UMKM by ID
    getUMKMById(id) {
      return this.umkmList.find(umkm => umkm.id === id)
    },

    // Get reviews for UMKM
    getReviewsForUMKM(umkmId) {
      return this.reviews.filter(review => review.umkmId === umkmId)
    },

    // Get promotions for UMKM
    getPromotionsForUMKM(umkmId) {
      return this.promotions.filter(promo => promo.umkmId === umkmId && promo.isActive)
    },

    // Add review
    addReview(review) {
      const newReview = {
        id: this.reviews.length + 1,
        ...review,
        date: new Date().toISOString().split('T')[0],
        verified: true
      }
      this.reviews.push(newReview)
      
      // Update UMKM rating
      const umkm = this.getUMKMById(review.umkmId)
      if (umkm) {
        const umkmReviews = this.getReviewsForUMKM(review.umkmId)
        const totalRating = umkmReviews.reduce((sum, rev) => sum + rev.rating, 0)
        umkm.rating = totalRating / umkmReviews.length
        umkm.reviewCount = umkmReviews.length
      }
    },

    // Toggle favorite
    toggleFavorite(umkmId) {
      const umkm = this.getUMKMById(umkmId)
      if (umkm) {
        // Ini akan diintegrasikan dengan user system nanti
        console.log('Toggle favorite:', umkmId)
      }
    }
  }
})