<template>
  <div class="gallery-container">
    <div class="header-section">
      <h1 class="gallery-title">Interface Gallery</h1>
      <p class="gallery-subtitle">Découvrez ma collection d'interfaces utilisateur uniques</p>
    </div>
    <div class="gallery-grid">
      <div v-for="(page, index) in pages" :key="index" class="gallery-card" :data-theme="page.style">
        <div class="card-background-effects"></div>
        <div class="card-content">
          <div class="card-header">
            <h2>{{ page.name }}</h2>
            <span class="card-theme">{{ page.theme }}</span>
          </div>
          <p class="card-description">{{ page.description }}</p>
          <div class="card-tags">
            <span v-for="tag in page.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <router-link :to="page.path" class="visit-button">
            <span class="button-text">Visit Page</span>
            <svg class="button-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
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
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: 100vh;
}

.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.gallery-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.8;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.gallery-card {
  position: relative;
  border-radius: 20px;
  padding: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  cursor: pointer;
  height: fit-content;
  min-height: 320px;
}

.card-background-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Signalis Style */
.gallery-card[data-theme="signalis"] {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  border: 2px solid rgb(57, 255, 20);
  color: #e0e0e0;
  box-shadow: 
    0 0 30px rgba(57, 255, 20, 0.2),
    inset 0 0 0 1px rgba(57, 255, 20, 0.1);
}

.gallery-card[data-theme="signalis"] .card-background-effects {
  background: 
    repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 2px,
      rgba(57, 255, 20, 0.02) 2px,
      rgba(57, 255, 20, 0.02) 4px),
    radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.05) 0%, transparent 70%);
  animation: signalisGlow 3s ease-in-out infinite alternate;
}

@keyframes signalisGlow {
  0% { opacity: 0.8; }
  100% { opacity: 1; }
}

.gallery-card[data-theme="signalis"] .card-theme {
  color: rgb(57, 255, 20);
  border: 1px solid rgb(57, 255, 20);
  background: rgba(57, 255, 20, 0.15);
  backdrop-filter: blur(10px);
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
}

.gallery-card[data-theme="signalis"] .visit-button {
  background: linear-gradient(135deg, rgba(57, 255, 20, 0.2), rgba(57, 255, 20, 0.3));
  color: rgb(57, 255, 20);
  border: 1px solid rgb(57, 255, 20);
  backdrop-filter: blur(10px);
}

.gallery-card[data-theme="signalis"]:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(57, 255, 20, 0.3),
    0 0 60px rgba(57, 255, 20, 0.2),
    inset 0 0 0 1px rgba(57, 255, 20, 0.3);
}

/* Ready or Not Style */
.gallery-card[data-theme="readyornot"] {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.9) 100%);
  border: 1px solid rgba(255, 87, 34, 0.6);
  color: #ffffff;
  box-shadow: 
    0 10px 30px rgba(255, 87, 34, 0.2),
    inset 0 0 0 1px rgba(255, 87, 34, 0.1);
}

.gallery-card[data-theme="readyornot"] .card-background-effects {
  background:
    linear-gradient(135deg, transparent 0%, rgba(255, 87, 34, 0.05) 50%, transparent 100%),
    repeating-linear-gradient(45deg,
      transparent,
      transparent 15px,
      rgba(255, 87, 34, 0.03) 15px,
      rgba(255, 87, 34, 0.03) 30px);
}

.gallery-card[data-theme="readyornot"] .card-theme {
  color: #ff5722;
  border: 1px solid rgba(255, 87, 34, 0.8);
  background: linear-gradient(135deg, rgba(255, 87, 34, 0.15), rgba(255, 87, 34, 0.25));
  backdrop-filter: blur(10px);
}

.gallery-card[data-theme="readyornot"] .visit-button {
  background: linear-gradient(135deg, rgba(255, 87, 34, 0.2), rgba(255, 87, 34, 0.3));
  color: #ff5722;
  border: 1px solid rgba(255, 87, 34, 0.8);
  backdrop-filter: blur(10px);
}

.gallery-card[data-theme="readyornot"]:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(255, 87, 34, 0.3),
    0 0 40px rgba(255, 87, 34, 0.2),
    inset 0 0 0 1px rgba(255, 87, 34, 0.3);
}

/* Neumorphism Style - Beaucoup amélioré */
.gallery-card[data-theme="neumorphism"] {
  background: linear-gradient(145deg, #f0f0f3, #cacce0);
  color: #31344b;
  border-radius: 25px;
  border: none;
  box-shadow:
    12px 12px 24px rgba(163, 177, 198, 0.6),
    -12px -12px 24px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset -2px -2px 4px rgba(163, 177, 198, 0.1);
}

.gallery-card[data-theme="neumorphism"] .card-background-effects {
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(163, 177, 198, 0.4) 0%, transparent 50%);
}

.gallery-card[data-theme="neumorphism"] .card-theme {
  background: linear-gradient(145deg, #f0f0f3, #d1d9e6);
  color: #31344b;
  box-shadow:
    inset 6px 6px 12px rgba(163, 177, 198, 0.4),
    inset -6px -6px 12px rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  font-weight: 600;
}

.gallery-card[data-theme="neumorphism"] .visit-button {
  background: linear-gradient(145deg, #f0f0f3, #d1d9e6);
  color: #31344b;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.4),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 15px;
  font-weight: 600;
}

.gallery-card[data-theme="neumorphism"] .visit-button:hover {
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  transform: scale(0.98);
}

.gallery-card[data-theme="neumorphism"]:hover {
  transform: translateY(-5px);
  box-shadow:
    16px 16px 32px rgba(163, 177, 198, 0.6),
    -16px -16px 32px rgba(255, 255, 255, 0.9),
    inset 3px 3px 6px rgba(255, 255, 255, 0.2),
    inset -3px -3px 6px rgba(163, 177, 198, 0.2);
}

.gallery-card[data-theme="neumorphism"] .tag {
  background: linear-gradient(145deg, #e6e7ee, #d1d9e6);
  box-shadow:
    3px 3px 6px rgba(163, 177, 198, 0.3),
    -3px -3px 6px rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  color: #31344b;
}

/* Minimalist Style */
.gallery-card[data-theme="minimalist"] {
  background: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 0;
  padding: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-card[data-theme="minimalist"] .card-content {
  padding: 2.5rem;
}

.gallery-card[data-theme="minimalist"] .card-theme {
  background: #000000;
  color: #ffffff;
  border-radius: 0;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
}

.gallery-card[data-theme="minimalist"] .visit-button {
  background: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.gallery-card[data-theme="minimalist"] .visit-button:hover {
  background: #000000;
  color: #ffffff;
}

.gallery-card[data-theme="minimalist"]:hover {
  transform: translateY(-8px);
  box-shadow: 20px 20px 0 -5px rgba(0, 0, 0, 0.1);
}

.gallery-card[data-theme="minimalist"] .tag {
  background: #f8f8f8;
  border: 1px solid #000000;
  color: #000000;
  border-radius: 0;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
}

/* Styles communs améliorés */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.card-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: inherit;
  margin: 0;
  line-height: 1.2;
}

.card-theme {
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.card-description {
  color: inherit;
  line-height: 1.7;
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.tag {
  font-size: 0.75rem;
  background: var(--color-background-mute);
  color: var(--color-text-light);
  padding: 0.4rem 0.8rem;
  border-radius: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.visit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem 1.8rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-top: auto;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}

.visit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.visit-button:hover::before {
  left: 100%;
}

.button-arrow {
  transition: transform 0.3s ease;
}

.visit-button:hover .button-arrow {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .gallery-container {
    padding: 2rem 1rem;
  }

  .gallery-title {
    font-size: 2.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .gallery-card {
    min-height: 280px;
  }
  
  .card-content {
    padding: 1.5rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .gallery-title {
    font-size: 2rem;
  }
  
  .card-header h2 {
    font-size: 1.5rem;
  }
}
</style>