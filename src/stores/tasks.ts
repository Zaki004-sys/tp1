import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Task { id: string; title: string; done: boolean }

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function fetchTasks() {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('http://localhost:4000/tasks')
      if (!res.ok) throw new Error('Erreur serveur')
      tasks.value = await res.json()
    } catch {
      error.value = 'Impossible de charger les tâches. Vérifiez que json-server tourne sur le port 4000.'
    } finally {
      loading.value = false
    }
  }

  async function addTask(title: string) {
    try {
      const res = await fetch('http://localhost:4000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, done: false }),
      })
      tasks.value.push(await res.json())
    } catch {
      error.value = 'Erreur lors de l\'ajout de la tâche.'
    }
  }

  async function deleteTask(id: string) {
    try {
      await fetch('http://localhost:4000/tasks/' + id, { method: 'DELETE' })
      tasks.value = tasks.value.filter(t => t.id !== id)
    } catch {
      error.value = 'Erreur lors de la suppression.'
    }
  }

  async function toggleTask(task: Task) {
    try {
      const res = await fetch('http://localhost:4000/tasks/' + task.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...task, done: !task.done }),
      })
      const data = await res.json()
      const i = tasks.value.findIndex(t => t.id === data.id)
      tasks.value[i] = data
    } catch {
      error.value = 'Erreur lors de la mise à jour.'
    }
  }

  return { tasks, loading, error, fetchTasks, addTask, deleteTask, toggleTask }
})
