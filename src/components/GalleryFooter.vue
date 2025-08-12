<template>
  <div class="footer-zone" :class="{ 'footer-visible': isVisible }">
    <!-- Decorative Elements -->
    <div class="footer-particles">
      <div
        v-for="n in 6"
        :key="n"
        class="footer-particle"
        :style="{ '--i': n }"
      ></div>
    </div>

    <!-- Footer Content -->
    <div class="footer-wrapper">
      <div class="footer-content">
        <!-- Icon Section -->
        <div class="footer-icon-section">
          <div class="footer-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                fill="currentColor"
                opacity="0.9"
              />
              <path
                d="M5 16L5.5 18.5L8 19L5.5 19.5L5 22L4.5 19.5L2 19L4.5 18.5L5 16Z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M19 16L19.5 18.5L22 19L19.5 19.5L19 22L18.5 19.5L16 19L18.5 18.5L19 16Z"
                fill="currentColor"
                opacity="0.7"
              />
            </svg>
          </div>

          <h3 class="footer-title">
            <span class="title-main">Créativité & Expertise</span>
            <span class="title-accent">Technique</span>
          </h3>
        </div>

        <!-- Description -->
        <div class="footer-description-section">
          <p class="footer-description">
            Cette galerie illustre ma passion pour l'innovation en design
            d'interface. Chaque projet explore une esthétique unique, du
            rétro-futurisme cyberpunk aux tendances contemporaires, démontrant
            ma capacité à adapter mon style selon le contexte et les besoins
            utilisateurs.
          </p>
        </div>

        <!-- Statistics Grid -->
        <div class="footer-stats">
          <div
            class="stat-item"
            v-for="(stat, index) in stats"
            :key="index"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-content">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
            <div class="stat-accent"></div>
          </div>
        </div>

        <!-- Philosophy Quote -->
        <div class="footer-philosophy-section">
          <div class="philosophy-quote">
            <div class="quote-mark quote-start">"</div>
            <p class="philosophy-text">
              L'interface n'est pas seulement fonctionnelle, elle raconte une
              histoire et crée une émotion.
            </p>
            <div class="quote-mark quote-end">"</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Accent -->
    <div class="footer-accent-line"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";

export default {
  name: "GalleryFooter",
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const isVisible = ref(false);

    const universCount = computed(() => {
      return props.pages.length;
    });

    const stats = computed(() => [
      {
        icon: "🎨",
        value: `${universCount.value}`,
        label: "univers visuels distincts",
      },
      {
        icon: "⚡",
        value: "Animations",
        label: "& interactions fluides",
      },
      {
        icon: "📱",
        value: "Design",
        label: "adaptatif & accessible",
      },
    ]);

    const handleScroll = () => {
      const footerElement = document.querySelector(".footer-zone");
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          isVisible.value = true;
        }
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isVisible,
      stats,
      universCount,
    };
  },
};
</script>

<style scoped>
/* Variables CSS du design system */
.footer-zone {
  --color-primary: #667eea;
  --color-primary-dark: #764ba2;
  --color-accent: #f72585;
  --color-dark-bg: #0a0e27;
  --color-dark-surface: #151937;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a8b2d1;
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --border-color: rgba(102, 126, 234, 0.1);
}

/* Layout Principal */
.footer-zone {
  position: relative;
  margin: 120px 0 120px 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-zone.footer-visible {
  opacity: 1;
  transform: translateY(0);
}

.footer-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.footer-content {
  position: relative;
  z-index: 2;
  padding: 60px 50px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* Particles Background */
.footer-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.footer-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 15s infinite;
  animation-delay: calc(var(--i) * 2.5s);
  left: calc(var(--i) * 16.66%);
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translateY(100px) scale(0);
    opacity: 0;
  }
  20%,
  80% {
    opacity: 0.7;
    transform: translateY(-50px) scale(1);
  }
}

/* Icon Section */
.footer-icon-section {
  margin-bottom: 40px;
}

.footer-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  margin-bottom: 30px;
  color: var(--color-primary);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  animation: iconFloat 6s ease-in-out infinite;
}

.footer-zone.footer-visible .footer-icon {
  animation: iconFloat 6s ease-in-out infinite, iconAppear 1s ease-out;
}

@keyframes iconFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes iconAppear {
  0% {
    transform: scale(0.8) translateY(20px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.footer-icon:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3);
  border-color: var(--color-accent);
}

.footer-title {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0;
}

.title-main {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.title-accent {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  color: var(--color-accent);
  opacity: 0.9;
}

/* Description Section */
.footer-description-section {
  margin-bottom: 50px;
}

.footer-description {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
}

/* Statistics Grid */
.footer-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.stat-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.footer-zone.footer-visible .stat-item {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(0.6s + var(--delay));
}

.stat-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  border-color: var(--color-accent);
}

.stat-icon {
  font-size: 2rem;
  flex-shrink: 0;
  filter: grayscale(0.1);
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  text-align: left;
}

.stat-value {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: 2px;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  opacity: 0.9;
  line-height: 1.3;
}

.stat-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-gradient);
  transform: translateX(-100%);
  transition: transform 0.4s ease;
}

.stat-item:hover .stat-accent {
  transform: translateX(0);
}

/* Philosophy Section */
.footer-philosophy-section {
  position: relative;
}

.philosophy-quote {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 40px;
}

.quote-mark {
  position: absolute;
  font-size: 4rem;
  font-weight: 300;
  color: var(--color-accent);
  opacity: 0.3;
  line-height: 1;
  font-family: serif;
}

.quote-start {
  top: -20px;
  left: 0;
}

.quote-end {
  bottom: -40px;
  right: 0;
}

.philosophy-text {
  font-style: italic;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.7;
  font-weight: 500;
  opacity: 0.9;
}

/* Footer Accent Line */
.footer-accent-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: var(--primary-gradient);
  border-radius: 2px;
  transition: width 1s ease;
  transition-delay: 1.2s;
}

.footer-zone.footer-visible .footer-accent-line {
  width: 80%;
}

/* Responsive Design */
@media (max-width: 968px) {
  .footer-content {
    padding: 50px 40px;
  }

  .footer-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stat-item {
    padding: 20px 25px;
  }

  .philosophy-quote {
    padding: 0 30px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 40px 30px;
  }

  .footer-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 25px;
  }

  .footer-icon svg {
    width: 40px;
    height: 40px;
  }

  .footer-description {
    font-size: 1rem;
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 25px 20px;
  }

  .stat-content {
    align-items: center;
    text-align: center;
  }

  .philosophy-quote {
    padding: 0 20px;
  }

  .quote-mark {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 35px 20px;
  }

  .footer-icon {
    width: 70px;
    height: 70px;
  }

  .footer-icon svg {
    width: 35px;
    height: 35px;
  }

  .stat-item {
    padding: 20px 15px;
  }

  .stat-value {
    font-size: 1.1rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}
</style>
