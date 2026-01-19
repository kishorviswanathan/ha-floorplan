<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header class="app-header glass-panel">
    <div class="logo">HA Floorplan</div>
    <nav>
      <RouterLink to="/" active-class="active">Viewer</RouterLink>
      <RouterLink to="/editor" active-class="active">Editor</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.app-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
  position: relative;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  background: linear-gradient(to right, #ffffff, var(--color-text-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
}

nav a:hover,
nav a.active {
  color: var(--color-text-primary);
  background-color: var(--color-bg-tertiary);
}

main {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}
</style>
