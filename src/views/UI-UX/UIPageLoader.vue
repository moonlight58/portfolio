<template>
  <component :is="currentComponent" v-if="currentComponent" />
  <div v-else class="error-container">
    <h1>Page introuvable</h1>
    <p>La page UI "{{ $route.params.pageName }}" n'existe pas.</p>
    <router-link to="/competences" class="back-link">
      Retourner à la galerie
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UIPageLoader',
  data() {
    return {
      currentComponent: null
    }
  },
  watch: {
    '$route.params.pageName': {
      immediate: true,
      handler: 'loadComponent'
    }
  },
  methods: {
    async loadComponent() {
      try {
        const pageName = this.$route.params.pageName
        // On essaie d'importer dynamiquement le composant
        const component = await import(`@/views/UI-UX/${pageName}.vue`)
        this.currentComponent = component.default
      } catch (error) {
        this.currentComponent = null
        console.error(`Impossible de charger la page UI : ${error}`)
      }
    }
  }
}
</script>

<style scoped>
.error-container {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.back-link:hover {
  background: var(--color-primary-dark);
}
</style>
