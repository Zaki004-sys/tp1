<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header style="background: #42b883; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    <h2 style="margin: 0; font-size: 1.4rem; letter-spacing: 1px;">✅ TodoVue</h2>
    <nav style="display: flex; gap: 16px;">
      <RouterLink to="/" style="color: white; text-decoration: none; font-weight: 500; padding: 6px 14px; border-radius: 6px; transition: background 0.2s;" active-class="nav-active">Tâches</RouterLink>
      <RouterLink to="/about" style="color: white; text-decoration: none; font-weight: 500; padding: 6px 14px; border-radius: 6px; transition: background 0.2s;" active-class="nav-active">About</RouterLink>
    </nav>
  </header>
  <main style="min-height: calc(100vh - 60px); background: #f0f4f8;">
    <RouterView />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f4f8;
  color: #333;
}

.nav-active {
  background: rgba(255,255,255,0.25) !important;
}

a.router-link-active {
  background: rgba(255,255,255,0.25);
  border-radius: 6px;
}
</style>
