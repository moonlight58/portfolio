<template>
  <div class="gallery-container">
    <h1 class="gallery-title">Interface Gallery</h1>
    <div class="gallery-grid">
      <div v-for="(page, index) in pages" :key="index" class="gallery-card">
        <div class="card-header">
          <h2>{{ page.name }}</h2>
          <span class="card-theme">{{ page.theme }}</span>
        </div>
        <p class="card-description">{{ page.description }}</p>
        <div class="card-tags">
          <span v-for="tag in page.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <router-link :to="page.path" class="visit-button">
          Visit Page
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIGalleryView',
  data() {
    return {
      pages: [
        {
          name: 'Signalis',
          theme: 'Retro Sci-fi',
          description: 'A dark, atmospheric interface inspired by the game Signalis, featuring CRT effects and glitch animations.',
          path: '/competences/signalis',
          tags: ['CRT Effect', 'Dark Theme', 'Retro', 'Animation']
        },
        {
          name: 'Ready or Not',
          theme: 'Tactical Interface',
          description: 'Military-style interface inspired by Ready or Not, with tactical overlay elements and status displays.',
          path: '/competences/readyornot',
          tags: ['Military', 'HUD', 'Dark Theme']
        },
        {
          name: 'Neumorphism',
          theme: 'Modern Clean',
          description: 'Clean and modern interface using neumorphic design principles with soft shadows and minimal colors.',
          path: '/competences/neumorphism',
          tags: ['Modern', 'Light Theme', 'Minimal']
        },
        {
          name: 'Classic Portfolio',
          theme: 'Professional',
          description: 'Traditional portfolio layout with a professional and clean design.',
          path: '/',
          tags: ['Clean', 'Professional', 'Portfolio']
        },
        {
          name: 'Minimalist',
          theme: 'Elegant',
          description: 'A minimalist design focusing on typography and whitespace, inspired by Swiss design principles.',
          path: '/competences/minimalist',
          tags: ['Minimalist', 'Typography', 'Swiss Design']
        }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.gallery-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-text);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-card {
  background: var(--color-background-soft);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-heading);
}

.card-theme {
  font-size: 0.9rem;
  color: var(--color-text-light);
  background: var(--color-background-mute);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

.card-description {
  color: var(--color-text);
  line-height: 1.6;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.8rem;
  background: var(--color-background-mute);
  color: var(--color-text-light);
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
}

.visit-button {
  display: inline-block;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.visit-button:hover {
  background: var(--color-primary-dark);
}

@media (max-width: 768px) {
  .gallery-container {
    padding: 1rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
