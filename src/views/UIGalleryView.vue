<template>
  <div class="gallery-container">
    <h1 class="gallery-title">Interface Gallery</h1>
    <div class="gallery-grid">
      <div v-for="(page, index) in pages" :key="index" class="gallery-card" :data-theme="page.style">
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
          tags: ['CRT Effect', 'Dark Theme', 'Retro', 'Animation'],
          style: 'signalis'
        },
        {
          name: 'Ready or Not',
          theme: 'Tactical Interface',
          description: 'Military-style interface inspired by Ready or Not, with tactical overlay elements and status displays.',
          path: '/competences/readyornot',
          tags: ['Military', 'HUD', 'Dark Theme'],
          style: 'readyornot'
        },
        {
          name: 'Neumorphism',
          theme: 'Modern Clean',
          description: 'Clean and modern interface using neumorphic design principles with soft shadows and minimal colors.',
          path: '/competences/neumorphism',
          tags: ['Modern', 'Light Theme', 'Minimal'],
          style: 'neumorphism'
        },
        {
          name: 'Minimalist',
          theme: 'Elegant',
          description: 'A minimalist design focusing on typography and whitespace, inspired by Swiss design principles.',
          path: '/competences/minimalist',
          tags: ['Minimalist', 'Typography', 'Swiss Design'],
          style: 'minimalist'
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
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

/* Signalis Style */
.gallery-card[data-theme="signalis"] {
  background: #0a0a0a;
  border: 2px solid rgb(57, 255, 20);
  color: #e0e0e0;
}

.gallery-card[data-theme="signalis"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 1px,
      rgba(57, 255, 20, 0.03) 2px,
      rgba(57, 255, 20, 0.03) 3px);
  pointer-events: none;
}

.gallery-card[data-theme="signalis"] .card-theme {
  color: rgb(57, 255, 20);
  border: 1px solid rgb(57, 255, 20);
  background: rgba(57, 255, 20, 0.1);
}

.gallery-card[data-theme="signalis"] .visit-button {
  background: rgba(57, 255, 20, 0.2);
  color: rgb(57, 255, 20);
  border: 1px solid rgb(57, 255, 20);
}

.gallery-card[data-theme="signalis"]:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
}

/* Ready or Not Style */
.gallery-card[data-theme="readyornot"] {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 87, 34, 0.5);
}

.gallery-card[data-theme="readyornot"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(135deg, transparent 0%, rgba(255, 87, 34, 0.1) 100%),
    repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      rgba(255, 87, 34, 0.05) 10px,
      rgba(255, 87, 34, 0.05) 20px);
}

.gallery-card[data-theme="readyornot"] .card-theme {
  color: #ff5722;
  border: 1px solid #ff5722;
  background: rgba(255, 87, 34, 0.1);
}

.gallery-card[data-theme="readyornot"] .visit-button {
  background: rgba(255, 87, 34, 0.2);
  color: #ff5722;
  border: 1px solid #ff5722;
  z-index: 10;
}

.gallery-card[data-theme="readyornot"]:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(255, 87, 34, 0.2);
}

/* Neumorphism Style */
.gallery-card[data-theme="neumorphism"] {
  background: #e6e7ee;
  color: #31344b;
  border-radius: 15px;
  box-shadow:
    3px 3px 6px #a3a3a3,
    -3px -3px 6px #ffffff;
  border: none;
}

.gallery-card[data-theme="neumorphism"] .card-theme {
  background: #e6e7ee;
  color: #31344b;
  box-shadow:
    inset 2px 2px 5px #b8b9be,
    inset -3px -3px 7px #ffffff;
  border-radius: 25px;
  color: #31344b;
}

.gallery-card[data-theme="neumorphism"] .visit-button {
  background: #e6e7ee;
  color: #31344b;
  box-shadow:
    3px 3px 6px #b8b9be,
    -3px -3px 6px #ffffff;
  color: #31344b;
  border: none;
}

.gallery-card[data-theme="neumorphism"] .visit-button:hover {
  box-shadow:
    inset 2px 2px 5px #b8b9be,
    inset -3px -3px 7px #ffffff;
}

.gallery-card[data-theme="neumorphism"]:hover {
  transform: translateY(-5px);
}

/* Minimalist Style */
.gallery-card[data-theme="minimalist"] {
  background: white;
  color: black;
  border: 1px solid #000;
  border-radius: 0;
  padding: 2rem;
}

.gallery-card[data-theme="minimalist"] .card-theme {
  background: black;
  color: white;
  border-radius: 0;
  padding: 0.5rem 1rem;
}

.gallery-card[data-theme="minimalist"] .visit-button {
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 0;
  transition: all 0.3s ease;
}

.gallery-card[data-theme="minimalist"] .visit-button:hover {
  background: black;
  color: white;
}

.gallery-card[data-theme="minimalist"]:hover {
  transform: translateY(-5px);
  box-shadow: 15px 15px 0 -5px rgba(0, 0, 0, 0.1);
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
