<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Task { id: string; title: string; done: boolean }

const route = useRoute()
const router = useRouter()
const task = ref<Task | null>(null)
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:4000/tasks/' + route.params.id)
    if (!res.ok) { router.push('/'); return }
    task.value = await res.json()
  } catch {
    error.value = true
    setTimeout(() => router.push('/'), 2000)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div style="padding: 2rem; max-width: 620px; margin: 0 auto;">

    <!-- Loading -->
    <div v-if="loading" style="text-align: center; padding: 60px; color: #999;">
      <div style="font-size: 2rem; margin-bottom: 8px;">⏳</div>
      <p>Chargement...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" style="background: #fff5f5; border: 1px solid #fc8181; color: #c53030; padding: 20px; border-radius: 10px; text-align: center;">
      <p>⚠️ Tâche introuvable. Redirection...</p>
    </div>

    <!-- Task detail -->
    <div v-else-if="task">
      <!-- Back link -->
      <RouterLink to="/" style="color: #42b883; text-decoration: none; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 20px;">
        ← Retour à la liste
      </RouterLink>

      <!-- Card -->
      <div style="background: white; padding: 32px; border-radius: 14px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
        <!-- Status badge -->
        <div style="margin-bottom: 16px;">
          <span :style="{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600',
            background: task.done ? '#c6f6d5' : '#fef3c7',
            color: task.done ? '#276749' : '#92400e'
          }">
            {{ task.done ? '✅ Terminée' : '🔄 En cours' }}
          </span>
        </div>

        <h1 style="color: #2d3748; font-size: 1.6rem; margin-bottom: 16px; line-height: 1.4;"
            :style="{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#aaa' : '#2d3748' }">
          {{ task.title }}
        </h1>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-top: 16px;">
          <p style="color: #718096; font-size: 0.9rem;">
            <strong>ID de la tâche :</strong> {{ task.id }}
          </p>
          <p style="color: #718096; font-size: 0.9rem; margin-top: 6px;">
            <strong>Statut :</strong> {{ task.done ? 'Cette tâche est marquée comme terminée.' : 'Cette tâche est en cours de réalisation.' }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
