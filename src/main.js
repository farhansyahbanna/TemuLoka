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

AOS.init({
  
  offset: 120, 
  delay: 0, 
  duration: 800, 
  easing: 'ease', 
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});
