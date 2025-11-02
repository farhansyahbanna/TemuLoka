<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

</script>

<template>
  <div class="bg-temuloka-bg min-h-screen font-sans text-zinc-800">
    <AppHeader v-if="!$route.meta.hideLayout" />    
    <main>
      <router-view />
    </main>

    <AppFooter  v-if="!$route.meta.hideLayout" />
  </div>
</template>
