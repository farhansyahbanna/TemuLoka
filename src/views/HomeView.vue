<script setup>
import HeroSection from '@/components/home/HeroSection.vue';
import ProblemSolutionSection from '@/components/home/ProblemSolutionSection.vue';
import HowItWorksSection from '@/components/home/HowItWorksSection.vue';
import FeaturedSection from '@/components/home/FeaturedSection.vue';
import CustomerReviewSection from '@/components/home/CustomerReviewSection.vue';


</script>

<template>
  <div class="bg-temuloka-bg min-h-screen font-sans text-zinc-800">
    
    <main>
      <HeroSection />
      
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturedSection />
      <CustomerReviewSection />
      
    </main>
  </div>
</template>
