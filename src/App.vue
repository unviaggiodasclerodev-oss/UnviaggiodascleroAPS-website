<script setup>
import { useScrollReveal } from './composables/useScrollReveal.js'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'

useScrollReveal()
</script>

<template>
  <a href="#main-content"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
    Vai al contenuto principale
  </a>

  <div>
    <NavBar />
    <router-view />
    <FooterSection />
    <BackToTop />
  </div>
</template>
