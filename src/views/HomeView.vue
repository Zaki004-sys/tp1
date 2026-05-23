<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/tasks'
import TodoItem from '@/components/TodoItem.vue'

const store = useTaskStore()
const newTitle = ref('')

onMounted(() => store.fetchTasks())

function handleAdd() {
  if (!newTitle.value.trim()) return
  store.addTask(newTitle.value.trim())
  newTitle.value = ''
}
</script>

<template>
  <div style="padding: 2rem; max-width: 620px; margin: 0 auto;">

    <!-- Header card -->
    <div style="background: white; border-radius: 14px; padding: 24px 28px; margin-bottom: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
      <h1 style="color: #42b883; margin-bottom: 4px; font-size: 1.6rem;">
        Mes Tâches
        <span style="background: #42b883; color: white; border-radius: 20px; padding: 2px 12px; font-size: 1rem; margin-left: 8px;">
          {{ store.tasks.length }}
        </span>
      </h1>
      <p style="color: #888; font-size: 0.9rem;">
        {{ store.tasks.filter(t => t.done).length }} / {{ store.tasks.length }} terminées
      </p>
    </div>

    <!-- Add task form -->
    <div style="display: flex; gap: 8px; margin-bottom: 20px;">
      <input
        v-model="newTitle"
        placeholder="Nouvelle tâche... (Entrée pour valider)"
        @keyup.enter="handleAdd"
        style="
          flex: 1;
          padding: 12px 16px;
          border-radius: 10px;
          border: 2px solid #e2e8f0;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        "
        @focus="($event.target as HTMLInputElement).style.borderColor = '#42b883'"
        @blur="($event.target as HTMLInputElement).style.borderColor = '#e2e8f0'"
      />
      <button
        @click="handleAdd"
        style="
          padding: 12px 22px;
          background: #42b883;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        "
        @mouseenter="($event.target as HTMLButtonElement).style.background = '#369870'"
        @mouseleave="($event.target as HTMLButtonElement).style.background = '#42b883'"
      >
        + Ajouter
      </button>
    </div>

    <!-- Error message -->
    <div v-if="store.error" style="background: #fff5f5; border: 1px solid #fc8181; color: #c53030; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 0.9rem;">
      ⚠️ {{ store.error }}
    </div>

    <!-- Loading state -->
    <div v-if="store.loading" style="text-align: center; padding: 40px; color: #999;">
      <div style="font-size: 2rem; margin-bottom: 8px;">⏳</div>
      <p>Chargement des tâches...</p>
    </div>

    <!-- Empty state -->
    <div v-else-if="store.tasks.length === 0" style="text-align: center; padding: 40px; color: #aaa; background: white; border-radius: 12px;">
      <div style="font-size: 3rem; margin-bottom: 12px;">📋</div>
      <p style="font-size: 1rem;">Aucune tâche pour le moment.</p>
      <p style="font-size: 0.85rem; margin-top: 6px;">Ajoutez votre première tâche ci-dessus !</p>
    </div>

    <!-- Task list -->
    <ul v-else style="list-style: none; padding: 0;">
      <TodoItem
        v-for="task in store.tasks"
        :key="task.id"
        :task="task"
        @toggle="store.toggleTask"
        @delete="store.deleteTask"
      />
    </ul>

  </div>
</template>
