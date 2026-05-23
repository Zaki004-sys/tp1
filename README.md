# TodoVue — TP Vue.js 3

Application Todo complète réalisée dans le cadre du TP Vue.js — EMSI Développement Front-End.

## Stack

- **Vue 3** — Composition API (`<script setup>`)
- **TypeScript** — Typage statique
- **Vite** — Build tool
- **Pinia** — State management
- **Vue Router** — Navigation SPA
- **json-server** — API REST mock

---

## Installation & lancement

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur JSON (dans un terminal séparé)

```bash
npm run server
# ou : npx json-server --watch db.json --port 4000
```

Le fichier `db.json` contient les données de départ. L'API est disponible sur :
- `GET    http://localhost:4000/tasks`
- `POST   http://localhost:4000/tasks`
- `PUT    http://localhost:4000/tasks/:id`
- `DELETE http://localhost:4000/tasks/:id`

### 3. Lancer l'application Vue

```bash
npm run dev
```

L'app est disponible sur **http://localhost:5173**

---

## Structure du projet

```
todo-vue/
  src/
  ├── App.vue               ← Layout global + RouterView
  ├── main.ts               ← createApp + Pinia + Router
  ├── views/
  │   ├── HomeView.vue      ← Liste des tâches (useTaskStore + TodoItem)
  │   ├── TaskView.vue      ← Détail d'une tâche (useRoute + onMounted)
  │   └── AboutView.vue     ← Page about
  ├── components/
  │   └── TodoItem.vue      ← Composant tâche (defineProps + defineEmits)
  ├── stores/
  │   └── tasks.ts          ← Pinia store CRUD complet
  └── router/
      └── index.ts          ← 3 routes définies
  db.json                   ← Données mock pour json-server
```

---

## Fonctionnalités

- ✅ Affichage de la liste des tâches
- ✅ Ajout d'une tâche (bouton ou touche Entrée)
- ✅ Suppression d'une tâche
- ✅ Marquer une tâche comme terminée / en cours
- ✅ Page de détail pour chaque tâche
- ✅ Navigation avec Vue Router
- ✅ State global avec Pinia
- ✅ Gestion des états loading / erreur / vide

---

## Comparaisons React ↔ Vue (résumé du TP)

| Concept | React | Vue 3 |
|---|---|---|
| State local | `useState(0)` | `ref(0)` |
| Two-way binding | `value + onChange` | `v-model` |
| Fetch au montage | `useEffect(fn, [])` | `onMounted(fn)` |
| Boucle | `items.map(i => <li>)` | `v-for="i in items"` |
| Conditionnel | `{cond && <div>}` | `v-if="cond"` |
| Event | `onClick={fn}` | `@click="fn"` |
| Props enfant | `<Child name={x} />` | `<Child :name="x" />` |
| Callback parent | `onDelete={fn}` | `@delete="fn"` (emit) |
| Router lien | `<Link to='/x'>` | `<RouterLink to='/x'>` |
| State global | Redux : slice + dispatch | Pinia : store.action() |
