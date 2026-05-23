<script setup lang="ts">
// Page About — informations sur le projet
</script>

<template>
  <div style="padding: 2rem; max-width: 620px; margin: 0 auto;">

    <div style="background: white; border-radius: 14px; padding: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
      <h1 style="color: #42b883; margin-bottom: 8px;">À propos de TodoVue</h1>
      <p style="color: #718096; margin-bottom: 24px; font-size: 0.95rem;">
        Application Todo réalisée dans le cadre du TP Vue.js — EMSI Développement Front-End
      </p>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
        <h2 style="color: #4a5568; font-size: 1.1rem; margin-bottom: 16px;">Stack technique</h2>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
          <li v-for="tech in stack" :key="tech.name" style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.4rem;">{{ tech.icon }}</span>
            <div>
              <strong style="color: #2d3748;">{{ tech.name }}</strong>
              <span style="color: #718096; font-size: 0.85rem; margin-left: 8px;">{{ tech.desc }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
        <h2 style="color: #4a5568; font-size: 1.1rem; margin-bottom: 16px;">Concepts Vue.js couverts</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <span v-for="concept in concepts" :key="concept"
            style="background: #ebf8f3; color: #276749; padding: 4px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 500;">
            {{ concept }}
          </span>
        </div>
      </div>

    </div>

    <RouterLink to="/" style="display: inline-block; margin-top: 20px; color: #42b883; text-decoration: none; font-size: 0.9rem;">
      ← Retour aux tâches
    </RouterLink>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      stack: [
        { icon: '💚', name: 'Vue 3', desc: 'Composition API' },
        { icon: '🔷', name: 'TypeScript', desc: 'Typage statique' },
        { icon: '⚡', name: 'Vite', desc: 'Build tool ultra-rapide' },
        { icon: '🍍', name: 'Pinia', desc: 'State management' },
        { icon: '🗺️', name: 'Vue Router', desc: 'Navigation SPA' },
        { icon: '🗄️', name: 'json-server', desc: 'API REST mock (port 4000)' },
      ],
      concepts: [
        'ref()', 'onMounted()', 'v-model', 'v-for', 'v-if / v-else-if',
        'defineProps', 'defineEmits', 'emit()', 'useRoute()', 'useRouter()',
        'defineStore()', 'Composition API', 'RouterLink', 'RouterView'
      ]
    }
  }
}
</script>
