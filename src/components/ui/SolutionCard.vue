<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  isPrimary: {
    type: Boolean,
    default: false
  }
});

// SVG Ikon Outline
const IconInfo = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
`;
const IconMap = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7zm2 0l3-1V5.7l-3 1.15zM5 18.3l3-1.15V5.45l-3 1zM16 6.85v11.7zm-8-1.4v11.7z"/></svg>`;
const IconReview = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63l-4.12-4a1 1 0 0 1-.25-1a1 1 0 0 1 .81-.68l5.7-.83l2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12l5.7.83a1 1 0 0 1 .81.68a1 1 0 0 1-.25 1l-4.12 4l1 5.63a1 1 0 0 1-.4 1a1 1 0 0 1-.62.18M12 16.1a.9.9 0 0 1 .46.11l3.77 2l-.72-4.21a1 1 0 0 1 .29-.89l3-2.93l-4.2-.62a1 1 0 0 1-.71-.56L12 5.25L10.11 9a1 1 0 0 1-.75.54l-4.2.62l3 2.93a1 1 0 0 1 .29.89l-.72 4.16l3.77-2a.9.9 0 0 1 .5-.04"/></svg>
`;
const IconCoin = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 4.003c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6c-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-4c0-3.314 4.925-6 11-6m0 12c-3.72 0-7.01-1.008-9-2.55v.55c0 1.882 3.883 4 9 4c5.01 0 8.838-2.03 8.995-3.882l.005-.118l.001-.55c-1.99 1.542-5.28 2.55-9.001 2.55m0-10c-5.117 0-9 2.118-9 4s3.883 4 9 4s9-2.118 9-4s-3.883-4-9-4"/></svg>`;
const IconNotif = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"/></g></svg>`;
const IconProtect = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z"/><path stroke-linecap="round" d="m15 23l7 7l12-12"/></g></svg>`;
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center text-center hover:shadow-xl transition-shadow hover:border-orange-300 border border-gray-200"  >
    
    <div 
      class="rounded-full p-4 mb-4 inline-block"
      :class="isPrimary ? 'bg-orange-100 text-amber-600' : 'bg-gray-100 text-gray-600'"
    >
      <span v-if="icon === 'info'" v-html="IconInfo"></span>
      <span v-if="icon === 'map'" v-html="IconMap"></span>
      <span v-if="icon === 'review'" v-html="IconReview"></span>
      <span v-if="icon === 'coin'" v-html="IconCoin"></span>
      <span v-if="icon === 'notif'" v-html="IconNotif"></span>
      <span v-if="icon === 'protect'" v-html="IconProtect"></span>
    </div>

    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>