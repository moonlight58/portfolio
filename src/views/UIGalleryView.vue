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
          theme: 'Modern Slick',
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
:root {
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-primary-rgb: 99, 102, 241;
  --color-primary-dark-rgb: 79, 70, 229;
  --color-text: #f8fafc;
  --color-text-light: #cbd5e1;
}

.gallery-container {
  max-width: 1300px;
  margin: 6rem auto auto auto;
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
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
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

/* Neumorphism Style */
.gallery-card[data-theme="neumorphism"] {
  background: linear-gradient(145deg, #1a1a1a, #2c2c2c);
  color: #e0e0e0;
  border-radius: 25px;
  border: none;
  box-shadow:
    12px 12px 24px rgba(0, 0, 0, 0.7),
    -12px -12px 24px rgba(60, 60, 60, 0.4),
    inset 2px 2px 4px rgba(60, 60, 60, 0.2),
    inset -2px -2px 4px rgba(0, 0, 0, 0.2);
}

.gallery-card[data-theme="neumorphism"] .card-background-effects {
  background: 
    radial-gradient(circle at 30% 20%, rgba(60, 60, 60, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
}

.gallery-card[data-theme="neumorphism"] .card-theme {
  background: linear-gradient(145deg, #1a1a1a, #2c2c2c);
  color: #e0e0e0;
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.5),
    inset -4px -4px 8px rgba(60, 60, 60, 0.3);
  border-radius: 20px;
  font-weight: 600;
}

.gallery-card[data-theme="neumorphism"] .visit-button {
  background: linear-gradient(145deg, #2c2c2c, #1a1a1a);
  color: #e0e0e0;
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.5),
    -6px -6px 12px rgba(60, 60, 60, 0.3);
  border: none;
  border-radius: 15px;
  font-weight: 600;
}

.gallery-card[data-theme="neumorphism"] .visit-button:hover {
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.5),
    inset -4px -4px 8px rgba(60, 60, 60, 0.3);
  transform: scale(0.98);
  background: linear-gradient(145deg, #1a1a1a, #2c2c2c);
}

.gallery-card[data-theme="neumorphism"]:hover {
  transform: translateY(-5px);
  box-shadow:
    16px 16px 32px rgba(0, 0, 0, 0.8),
    -16px -16px 32px rgba(60, 60, 60, 0.5),
    inset 3px 3px 6px rgba(60, 60, 60, 0.3),
    inset -3px -3px 6px rgba(0, 0, 0, 0.3);
}

.gallery-card[data-theme="neumorphism"] .tag {
  background: linear-gradient(145deg, #2c2c2c, #1a1a1a);
  box-shadow:
    3px 3px 6px rgba(0, 0, 0, 0.5),
    -3px -3px 6px rgba(60, 60, 60, 0.3);
  border-radius: 12px;
  color: #e0e0e0;
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

/* Y2K Style */
.gallery-card[data-theme="y2k"] {
  background: linear-gradient(135deg, #ff6bc1, #45caff);
  border: 3px solid #fff;
  color: #ffffff;
  box-shadow: 
    0 0 30px rgba(255, 107, 193, 0.5),
    inset 0 0 20px rgba(69, 202, 255, 0.5);
  position: relative;
  overflow: hidden;
}

.gallery-card[data-theme="y2k"] .card-background-effects {
  background: 
    linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%) -20px 0,
    linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%) -20px 0,
    linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%);
  background-size: 40px 40px;
  animation: y2kBackgroundScroll 20s linear infinite;
  opacity: 0.5;
}

@keyframes y2kBackgroundScroll {
  0% {
    background-position: -20px 0, -20px 0, 0 0, 0 0;
  }
  100% {
    background-position: -60px 0, -60px 0, -40px 0, -40px 0;
  }
}

.gallery-card[data-theme="y2k"] .card-theme {
  background: rgba(255, 255, 255, 0.9);
  color: #ff6bc1;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #45caff;
  box-shadow: 3px 3px 0 #45caff;
  transform: rotate(-2deg);
}

.gallery-card[data-theme="y2k"] .visit-button {
  background: #ffffff;
  color: #ff6bc1;
  border: 3px solid #45caff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 4px 4px 0 #45caff;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 0 #45caff;
}

.gallery-card[data-theme="y2k"] .visit-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #45caff;
}

.gallery-card[data-theme="y2k"] .tag {
  background: rgba(255, 255, 255, 0.9);
  color: #ff6bc1;
  border: 2px solid #45caff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
  transform: rotate(-1deg);
  padding: 0.4rem 1rem;
}

.gallery-card[data-theme="y2k"]:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(255, 107, 193, 0.4),
    0 0 60px rgba(69, 202, 255, 0.4),
    inset 0 0 30px rgba(255, 255, 255, 0.3);
}

/* Vintage/Analog Style */
.gallery-card[data-theme="vintageanalog"] {
  background: #e6ddd0;
  border: 12px solid #2b2b2b;
  color: #2b2b2b;
  box-shadow: 
    inset 0 0 60px rgba(43, 43, 43, 0.3),
    0 0 30px rgba(43, 43, 43, 0.2);
  position: relative;
}

.gallery-card[data-theme="vintageanalog"]::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at center, transparent 0%, rgba(43, 43, 43, 0.3) 100%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.7;
  mix-blend-mode: multiply;
}

.gallery-card[data-theme="vintageanalog"] .card-background-effects {
  background: 
    repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2px,
      rgba(43, 43, 43, 0.03) 3px,
      transparent 3px
    );
  opacity: 0.4;
}

.gallery-card[data-theme="vintageanalog"] .card-theme {
  background: #2b2b2b;
  color: #e6ddd0;
  font-family: "Courier New", monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  border: none;
  box-shadow: 3px 3px 0 rgba(43, 43, 43, 0.2);
  transform: rotate(-1deg);
}

.gallery-card[data-theme="vintageanalog"] .card-header h2 {
  font-family: "Courier New", monospace;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.gallery-card[data-theme="vintageanalog"] .visit-button {
  background: #2b2b2b;
  color: #e6ddd0;
  font-family: "Courier New", monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  box-shadow: 4px 4px 0 rgba(43, 43, 43, 0.2);
  transform: rotate(-1deg);
}

.gallery-card[data-theme="vintageanalog"] .visit-button:hover {
  transform: rotate(0deg) translateY(-2px);
  box-shadow: 6px 6px 0 rgba(43, 43, 43, 0.3);
}

.gallery-card[data-theme="vintageanalog"] .tag {
  background: rgba(43, 43, 43, 0.1);
  border: 1px solid #2b2b2b;
  color: #2b2b2b;
  font-family: "Courier New", monospace;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
  font-weight: bold;
}

.gallery-card[data-theme="vintageanalog"]:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: 
    inset 0 0 80px rgba(43, 43, 43, 0.4),
    0 20px 40px rgba(43, 43, 43, 0.3);
}

@keyframes filmGrain {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.9; }
}

/* ASCII/Pixel Art Style */
.gallery-card[data-theme="ascii"] {
  background: #000000;
  color: #33ff33;
  border: 1px solid #33ff33;
  font-family: 'Courier New', monospace;
  box-shadow: 
    0 0 10px rgba(51, 255, 51, 0.3),
    inset 0 0 20px rgba(51, 255, 51, 0.1);
  text-shadow: 0 0 5px rgba(51, 255, 51, 0.5);
}

.gallery-card[data-theme="ascii"] .card-background-effects {
  background: 
    linear-gradient(rgba(51, 255, 51, 0.1) 50%, rgba(51, 255, 51, 0.05) 50%),
    linear-gradient(90deg, rgba(51, 255, 51, 0.1), rgba(51, 255, 51, 0.05));
  background-size: 4px 4px, 4px 4px;
  animation: scanlines 2s linear infinite;
}

@keyframes scanlines {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

.gallery-card[data-theme="ascii"] .card-header h2 {
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.gallery-card[data-theme="ascii"] .card-theme {
  background: #000000;
  color: #33ff33;
  border: 1px solid #33ff33;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(51, 255, 51, 0.3);
}

.gallery-card[data-theme="ascii"] .visit-button {
  background: #000000;
  color: #33ff33;
  border: 1px solid #33ff33;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.gallery-card[data-theme="ascii"] .visit-button:hover {
  background: #33ff33;
  color: #000000;
  text-shadow: none;
}

.gallery-card[data-theme="ascii"] .tag {
  background: #000000;
  color: #33ff33;
  border: 1px solid #33ff33;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
}

.gallery-card[data-theme="ascii"]:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(51, 255, 51, 0.2),
    0 0 30px rgba(51, 255, 51, 0.4),
    inset 0 0 20px rgba(51, 255, 51, 0.2);
  border-color: #ffffff;
}

.gallery-card[data-theme="ascii"]:hover .card-background-effects::before {
  opacity: 1;
}

/* Claymorphism Style */
.gallery-card[data-theme="claymorphism"] {
  background: #f5f3f0;
  color: #5d4e37;
  border-radius: 40px;
  border: none;
  box-shadow: 
    20px 20px 60px rgba(139, 115, 85, 0.15),
    -20px -20px 60px rgba(255, 255, 255, 0.7),
    inset 10px 10px 20px rgba(255, 255, 255, 0.2),
    inset -10px -10px 20px rgba(139, 115, 85, 0.15);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-card[data-theme="claymorphism"] .card-background-effects {
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(200, 168, 130, 0.2) 0%, transparent 50%);
  border-radius: inherit;
}

.gallery-card[data-theme="claymorphism"] .card-header h2 {
  color: #8b7355;
  font-weight: 800;
  background: linear-gradient(135deg, #8b7355, #c8a882);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-card[data-theme="claymorphism"] .card-theme {
  background: linear-gradient(135deg, #f5f3f0, #e8ddd4);
  color: #8b7355;
  font-weight: 600;
  border: none;
  box-shadow: 
    8px 8px 16px rgba(139, 115, 85, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.7),
    inset 2px 2px 4px rgba(255, 255, 255, 0.2),
    inset -2px -2px 4px rgba(139, 115, 85, 0.1);
}

.gallery-card[data-theme="claymorphism"] .visit-button {
  background: linear-gradient(135deg, #e8ddd4, #d4c4b0);
  color: #8b7355;
  border: none;
  font-weight: 600;
  box-shadow: 
    12px 12px 24px rgba(139, 115, 85, 0.15),
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    inset 2px 2px 4px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.gallery-card[data-theme="claymorphism"] .visit-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    15px 15px 30px rgba(139, 115, 85, 0.2),
    -10px -10px 25px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3);
}

.gallery-card[data-theme="claymorphism"] .tag {
  background: linear-gradient(135deg, #e8ddd4, #d4c4b0);
  color: #8b7355;
  font-weight: 500;
  border: none;
  box-shadow: 
    6px 6px 12px rgba(139, 115, 85, 0.1),
    -4px -4px 8px rgba(255, 255, 255, 0.6),
    inset 1px 1px 2px rgba(255, 255, 255, 0.2);
}

.gallery-card[data-theme="claymorphism"]:hover {
  transform: translateY(-8px);
  box-shadow: 
    25px 25px 70px rgba(139, 115, 85, 0.2),
    -25px -25px 70px rgba(255, 255, 255, 0.8),
    inset 10px 10px 20px rgba(255, 255, 255, 0.3),
    inset -10px -10px 20px rgba(139, 115, 85, 0.15);
}

/* Retro/Synthwave Style */
.gallery-card[data-theme="retro-synthwave"] {
  background: linear-gradient(135deg, #1a0f3c 0%, #2d1b69 100%);
  border: 2px solid #ff00ff;
  color: #fff;
  box-shadow: 
    0 0 20px rgba(255, 0, 255, 0.3),
    0 0 40px rgba(0, 255, 255, 0.2),
    inset 0 0 15px rgba(255, 0, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.gallery-card[data-theme="retro-synthwave"] .card-background-effects {
  background: 
    linear-gradient(transparent 0%, rgba(255, 0, 255, 0.1) 100%),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
  background-size: 100% 2px, 3px 100%;
  animation: synthwaveGrid 20s linear infinite;
}

@keyframes synthwaveGrid {
  0% {
    transform: perspective(500px) rotateX(60deg) translateY(0);
  }
  100% {
    transform: perspective(500px) rotateX(60deg) translateY(20px);
  }
}

.gallery-card[data-theme="retro-synthwave"] .card-header h2 {
  color: #fff;
  text-shadow: 
    0 0 10px rgba(255, 0, 255, 0.8),
    2px 2px 0px #ff00ff;
  font-family: "Inter", sans-serif;
  letter-spacing: 2px;
  font-weight: 800;
}

.gallery-card[data-theme="retro-synthwave"] .card-theme {
  background: rgba(255, 0, 255, 0.2);
  color: #00ffff;
  border: 1px solid #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  text-shadow: 
    0 0 10px rgba(0, 255, 255, 0.8),
    1px 1px 0px #00ffff;
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.4),
    inset 0 0 5px rgba(0, 255, 255, 0.2);
}

.gallery-card[data-theme="retro-synthwave"] .card-description {
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.gallery-card[data-theme="retro-synthwave"] .visit-button {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #fff;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 0 15px rgba(255, 0, 255, 0.4),
    0 0 30px rgba(0, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.gallery-card[data-theme="retro-synthwave"] .visit-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 80%
  );
  transform: rotate(45deg);
  animation: synthwaveButtonShine 4s linear infinite;
}

@keyframes synthwaveButtonShine {
  0% {
    transform: rotate(45deg) translateX(-100%);
  }
  100% {
    transform: rotate(45deg) translateX(100%);
  }
}

.gallery-card[data-theme="retro-synthwave"] .visit-button:hover {
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  transform: translateY(-2px);
  box-shadow: 
    0 0 20px rgba(255, 0, 255, 0.6),
    0 0 40px rgba(0, 255, 255, 0.4);
}

.gallery-card[data-theme="retro-synthwave"] .tag {
  background: rgba(255, 0, 255, 0.2);
  color: #00ffff;
  border: 1px solid #00ffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.8);
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.2),
    inset 0 0 5px rgba(0, 255, 255, 0.1);
}

.gallery-card[data-theme="retro-synthwave"]:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(255, 0, 255, 0.4),
    0 0 60px rgba(0, 255, 255, 0.3),
    inset 0 0 20px rgba(255, 0, 255, 0.3);
}

/* Professional Style */
.gallery-card[data-theme="professional"] {
  background-color: #0a0a0a;
  border: 1px solid #1a1a1a;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
}

.gallery-card[data-theme="professional"] .card-background-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(51, 51, 51, 0.02) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.6s ease;
}

.gallery-card[data-theme="professional"]:hover .card-background-effects {
  opacity: 1;
}

.gallery-card[data-theme="professional"] .card-header {
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
}

.gallery-card[data-theme="professional"] .card-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 1px;
  background-color: #333333;
  transition: width 0.3s ease;
}

.gallery-card[data-theme="professional"]:hover .card-header::after {
  width: 60px;
}

.gallery-card[data-theme="professional"] .card-header h2 {
  color: #ffffff;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.gallery-card[data-theme="professional"] .card-theme {
  background: transparent;
  color: #888888;
  border: 1px solid #1a1a1a;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.gallery-card[data-theme="professional"]:hover .card-theme {
  border-color: #333333;
  color: #cccccc;
}

.gallery-card[data-theme="professional"] .card-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.gallery-card[data-theme="professional"] .card-tags {
  margin-bottom: 2rem;
}

.gallery-card[data-theme="professional"] .tag {
  background: transparent;
  color: #666666;
  border: 1px solid #1a1a1a;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.gallery-card[data-theme="professional"] .tag:hover {
  border-color: #333333;
  color: #888888;
}

.gallery-card[data-theme="professional"] .visit-button {
  background: transparent;
  color: #ffffff;
  border: 1px solid #1a1a1a;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.gallery-card[data-theme="professional"] .visit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #111111;
  transition: left 0.3s ease;
  z-index: -1;
}

.gallery-card[data-theme="professional"] .visit-button:hover::before {
  left: 0;
}

.gallery-card[data-theme="professional"] .visit-button:hover {
  border-color: #333333;
  transform: translateY(-1px);
}

.gallery-card[data-theme="professional"] .button-arrow {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
  opacity: 0.7;
}

.gallery-card[data-theme="professional"] .visit-button:hover .button-arrow {
  transform: translateX(2px);
  opacity: 1;
}

.gallery-card[data-theme="professional"]:hover {
  border-color: #333333;
  background-color: #111111;
  transform: translateY(-2px);
}

/* Focus states pour l'accessibilité */
.gallery-card[data-theme="professional"] .visit-button:focus {
  outline: 1px solid #333333;
  outline-offset: 2px;
}

/* Animation subtile au chargement */
.gallery-card[data-theme="professional"] {
  animation: fadeInProfessional 0.6s ease-out;
}

@keyframes fadeInProfessional {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-card[data-theme="professional"] .card-header h2 {
    font-size: 1.3rem;
  }
  
  .gallery-card[data-theme="professional"] .visit-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .gallery-card[data-theme="professional"] .card-header h2 {
    font-size: 1.2rem;
  }
  
  .gallery-card[data-theme="professional"] .card-description {
    font-size: 0.9rem;
  }
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