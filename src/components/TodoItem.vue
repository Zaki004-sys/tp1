<script setup lang="ts">
interface Task { id: string; title: string; done: boolean }

defineProps<{ task: Task }>()

const emit = defineEmits<{
  toggle: [task: Task]
  delete: [id: string]
}>()
</script>

<template>
  <li style="
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    margin-bottom: 8px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    transition: box-shadow 0.2s;
  ">
    <input
      type="checkbox"
      :checked="task.done"
      @change="emit('toggle', task)"
      style="width: 18px; height: 18px; cursor: pointer; accent-color: #42b883;"
    />
    <span :style="{
      flex: 1,
      fontSize: '0.97rem',
      textDecoration: task.done ? 'line-through' : 'none',
      color: task.done ? '#aaa' : '#333',
      transition: 'all 0.2s'
    }">
      {{ task.title }}
    </span>
    <RouterLink
      :to="'/tasks/' + task.id"
      style="color: #42b883; font-size: 0.85rem; text-decoration: none; padding: 4px 10px; border: 1px solid #42b883; border-radius: 6px;"
    >
      Détails
    </RouterLink>
    <button
      @click="emit('delete', task.id)"
      style="
        background: none;
        border: none;
        cursor: pointer;
        color: #e74c3c;
        font-size: 1.1rem;
        padding: 4px 8px;
        border-radius: 6px;
        transition: background 0.2s;
      "
      title="Supprimer"
    >
      🗑
    </button>
  </li>
</template>
