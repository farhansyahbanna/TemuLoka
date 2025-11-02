import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import router from './router'

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(router) // <-- GUNAKAN INI
app.mount('#app')

// Inisialisasi AOS setelah aplikasi ter-mount
AOS.init({
  // Anda bisa mengatur konfigurasi global di sini
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
});
