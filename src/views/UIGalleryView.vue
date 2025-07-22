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
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <GalleryFooter :pages="pages" />
  </div>
</template>

<script>
import GalleryFooter from '@/components/GalleryFooter.vue';
export default {
  name: 'UIGalleryView',
  components: {
    GalleryFooter
  },
  data() {
    return {
      pages: [
        {
          name: 'Signalis',
          theme: 'Retro Sci-fi',
          description: 'A dark, atmospheric interface inspired by the game Signalis, featuring CRT effects and glitch animations.',
          path: '/competences/Signalis',
          tags: ['CRT Effect', 'Dark Theme', 'Retro', 'Animation'],
          style: 'signalis'
        },
        {
          name: 'Ready or Not',
          theme: 'Tactical Interface',
          description: 'Military-style interface inspired by Ready or Not, with tactical overlay elements and status displays.',
          path: '/competences/ReadyOrNot',
          tags: ['Military', 'HUD', 'Dark Theme'],
          style: 'readyornot'
        },
        {
          name: 'Neumorphism',
          theme: 'Modern Clean',
          description: 'Clean and modern interface using neumorphic design principles with soft shadows and minimal colors.',
          path: '/competences/Neumorphism',
          tags: ['Modern', 'Dark Theme', 'Minimal'],
          style: 'neumorphism'
        },
        {
          name: 'Minimalist',
          theme: 'Elegant',
          description: 'A minimalist design focusing on typography and whitespace, inspired by Swiss design principles.',
          path: '/competences/Minimalist',
          tags: ['Minimalist', 'Typography', 'Swiss Design'],
          style: 'minimalist'
        },
        {
          name: 'Y2K',
          theme: 'Y2K Aesthetic',
          description: 'A vibrant and nostalgic interface inspired by the Y2K aesthetic, featuring bold colors and playful elements.',
          path: '/competences/Y2K',
          tags: ['Y2K', 'Bold Colors', 'Playful Design'],
          style: 'y2k'
        },
        {
          name: 'Vintage/Analog',
          theme: 'Vintage and Analog',
          description: 'A vintage-inspired interface with analog effects, reminiscent of old-school technology and design.',
          path: '/competences/VintageAnalog',
          tags: ['Vintage', 'Analog', 'Retro'],
          style: 'vintageanalog'
        },
        {
          name: 'ASCII/Pixel Art',
          theme: 'Text-Based',
          description: 'An ASCII art-inspired interface that uses text characters to create a unique visual style.',
          path: '/competences/ASCII',
          tags: ['ASCII', 'Text Art', 'Pixel Art'],
          style: 'ascii'
        },
        {
          name: 'Claymorphism',
          theme: 'Claymorphism',
          description: 'A soft, tactile interface design that mimics the look and feel of clay, with rounded shapes and shadows.',
          path: '/competences/Claymorphism',
          tags: ['Claymorphism', 'Soft Design', 'Tactile'],
          style: 'claymorphism'
        },
        {
          name: 'Retro/Synthwave',
          theme: 'Retro Synthwave',
          description: 'A vibrant, neon-lit interface inspired by the retro-futuristic synthwave aesthetic, featuring bold colors and geometric shapes.',
          path: '/competences/RetroSynthwave',
          tags: ['Retro', 'Synthwave', 'Neon Colors'],
          style: 'retro-synthwave'
        },
        {
          name: 'Professional',
          theme: 'Modern Sleek',
          description: 'A sleek, professional interface design that emphasizes usability and modern aesthetics, suitable for business applications.',
          path: '/competences/Professional',
          tags: ['Professional', 'Slick Design', 'Usability'],
          style: 'professional'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "@/assets/styles/UICardGallery.css";

.gallery-container {
  max-width: 1300px;
  margin: 6rem auto auto auto;
  padding: 3rem 2rem;
  min-height: 100vh;

  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-primary-rgb: 99, 102, 241;
  --color-primary-dark-rgb: 79, 70, 229;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --color-text: #f8fafc;
  --color-text-light: #cbd5e1;
}

.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.gallery-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: var(--gradient-primary); ;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.gallery-subtitle {
  font-size: 1.2rem;
  color: #cbd5e1;
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
  background: rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
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