<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import CarouselProjectData from "@/datasource/CarouselProjects.json";

export default {
  name: "CarouselProject",
  methods: {
    getImageUrl(imageName) {
      try {
        return require(`@/assets/images/${imageName}`);
      } catch (e) {
        console.error(`Error loading image: ${imageName}`, e);
        return require(`@/assets/images/default.png`); // Add a default image
      }
    },
    getCategorieIcon(categorie) {
      const icons = {
        Personal: require("@/assets/project-info/Personal.svg"),
        Uni: require("@/assets/project-info/Uni.svg"),
      };
      return icons[categorie] || require("@/assets/project-info/Default.svg");
    },
    getStatusIcon(status) {
      const icons = {
        Done: require("@/assets/project-info/done.svg"),
        "On Going": require("@/assets/project-info/ongoing.svg"),
      };
      return icons[status];
    },
    getLanguageIcon(language) {
      const icons = {
        Java: require("@/assets/language/java.svg"),
        C: require("@/assets/language/C.svg"),
        VueJS: require("@/assets/language/vuejs.svg"),
        Python: require("@/assets/language/python.svg"),
      };
      return icons[language];
    },
  },
  setup() {

    const projets = ref(CarouselProjectData.projects);
    console.log('Projects loaded:', projets.value);
    console.log('Number of projects:', projets.value?.length);

    const currentIndex = ref(0);
    const isAutoPlaying = ref(false);
    const autoPlayInterval = ref(null);
    const touchStartX = ref(0);
    const touchEndX = ref(0);
    const isTransitioning = ref(false);
    const isVisible = ref(false);

    const isPrevDisabled = computed(() => currentIndex.value === 0);
    const isNextDisabled = computed(() => {
      return !projets.value || projets.value.length === 0 || currentIndex.value === projets.value.length - 1;
    });

    const next = () => {
      if (!isNextDisabled.value && !isTransitioning.value && projets.value && projets.value.length > 0) {
        isTransitioning.value = true;
        currentIndex.value = (currentIndex.value + 1) % projets.value.length;
        setTimeout(() => {
          isTransitioning.value = false;
        }, 600);
      }
    };

    const prev = () => {
      if (!isPrevDisabled.value && !isTransitioning.value) {
        isTransitioning.value = true;
        currentIndex.value = (currentIndex.value - 1 + projets.value.length) % projets.value.length;
        setTimeout(() => {
          isTransitioning.value = false;
        }, 600);
      }
    };

    const goToSlide = (index) => {
      if (index !== currentIndex.value && !isTransitioning.value && projets.value && projets.value.length > index) {
        isTransitioning.value = true;
        currentIndex.value = index;
        setTimeout(() => {
          isTransitioning.value = false;
        }, 600);
      }
    };

    const startAutoPlay = () => {
      if (!isAutoPlaying.value && projets.value && projets.value.length > 0) {
        isAutoPlaying.value = true;
        autoPlayInterval.value = setInterval(() => {
          next();
        }, 5000);
      }
    };

    const stopAutoPlay = () => {
      if (isAutoPlaying.value) {
        isAutoPlaying.value = false;
        clearInterval(autoPlayInterval.value);
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.value = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.value = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX.value - touchEndX.value > 50) {
        next();
      } else if (touchEndX.value - touchStartX.value > 50) {
        prev();
      }
    };

    const isSmall = ref(window.innerWidth <= 768);
    const updateIsSmall = () => {
      isSmall.value = window.innerWidth <= 768;
    };

    const setupVisibilityObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true;
            }
          });
        },
        { threshold: 0.2 }
      );
      const carouselElement = document.querySelector('.carousel-wrapper');
      if (carouselElement) {
        observer.observe(carouselElement);
      }
    };

    onMounted(() => {
      window.addEventListener("resize", updateIsSmall);
      startAutoPlay();
      setupVisibilityObserver();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateIsSmall);
      stopAutoPlay();
    });

    return {
      projets,
      currentIndex,
      isAutoPlaying,
      isTransitioning,
      isPrevDisabled,
      isNextDisabled,
      isSmall,
      next,
      prev,
      goToSlide,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
    };
  },
  created() {
    console.log('CarouselProject:', this.projets);
  }
};
</script>

<template>
  <div class="carousel-wrapper" :class="{ visible: isVisible }" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div class="carousel-container glass-card">
      <div class="carousel-glow"></div>
      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <div v-for="(projet, index) in projets" :key="index" class="carousel-item"
          :class="{ active: currentIndex === index }">
          <router-link :to="`/project-details/${projet.titre}`">
            <div class="project-card">
              <div class="project-card-glow"></div>
              <div class="project-image-container">
                <img :src="getImageUrl(projet.image)" :alt="projet.titre" class="carousel-image" />
                <div class="image-overlay"></div>
                <div class="image-gradient"></div>
              </div>
              <div class="project-content">
                <div class="project-header">
                  <h3 class="project-title gradient-text">{{ projet.titre }}</h3>
                  <div class="project-badges">
                    <div class="badge status-badge" :class="`status-${projet.status.toLowerCase().replace(' ', '-')}`">
                      <img :src="getStatusIcon(projet.status)" :alt="projet.status" class="badge-icon" />
                      <span class="badge-text">{{ $t(projet.status) }}</span>
                    </div>
                  </div>
                </div>
                <p class="project-description">{{ $t(projet.titre + '_content') }}</p>
                <div class="project-footer">
                  <div class="tech-info">
                    <div class="badge language-badge" :class="`lang-${projet.language.toLowerCase()}`">
                      <img :src="getLanguageIcon(projet.language)" :alt="projet.language" class="badge-icon" />
                      <span class="badge-text">{{ projet.language }}</span>
                    </div>
                    <div class="badge category-badge" :class="`cat-${projet.categorie.toLowerCase()}`">
                      <img :src="getCategorieIcon(projet.categorie)" :alt="projet.categorie" class="badge-icon" />
                      <span class="badge-text">{{ $t(projet.categorie) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Navigation buttons (hidden on mobile) -->
    <button v-if="!isSmall" @click="prev" class="carousel-control prev" :disabled="isPrevDisabled"
      :class="{ disabled: isPrevDisabled }">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </button>
    <button v-if="!isSmall" @click="next" class="carousel-control next" :disabled="isNextDisabled"
      :class="{ disabled: isNextDisabled }">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </button>
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button v-for="(projet, index) in projets" :key="index" @click="goToSlide(index)" class="indicator"
        :class="{ active: currentIndex === index }">
        <div class="indicator-glow"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  font-family: "N27", sans-serif;
  padding: 4rem 0;
  opacity: 1;
  transform: translateY(40px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);

  /* Variables CSS selon la documentation */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  --blur-strength: 20px;
}

.carousel-wrapper.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  box-shadow:
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-gradient);
  opacity: 0.8;
  z-index: 1;
}

.carousel-container {
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel-container:hover {
  transform: translateY(-8px);
  animation: float 6s ease-in-out infinite;
  box-shadow:
    0 30px 80px rgba(102, 126, 234, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(-8px);
  }

  50% {
    transform: translateY(-18px);
  }
}

.carousel-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.carousel-container:hover .carousel-glow {
  opacity: 1;
}

.carousel {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  touch-action: pan-y;
}

.carousel-item {
  min-width: 100%;
  padding: 0;
  opacity: 0.7;
  transform: scale(0.95);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1);
}

.carousel-item a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 28px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  height: 560px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2.5rem;
  backdrop-filter: blur(15px);
  box-shadow:
    0 10px 40px rgba(102, 126, 234, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.03) inset;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
}

.project-card:hover {
  border-color: var(--glass-border);
  transform: translateY(-12px);
  box-shadow:
    0 25px 80px rgba(102, 126, 234, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.project-card:hover::before {
  opacity: 0.8;
}

.project-card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.15) 0%, transparent 70%);
  opacity: 0;
  filter: blur(40px);
  z-index: -1;
  transition: opacity 0.8s ease;
}

.project-card:hover .project-card-glow {
  opacity: 1;
}

.project-image-container {
  position: relative;
  height: 280px;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .carousel-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(118, 75, 162, 0.1) 40%,
      rgba(26, 26, 26, 0.3) 70%,
      rgba(26, 26, 26, 0.8) 100%);
}

.image-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.1) 0%,
      rgba(118, 75, 162, 0.08) 25%,
      rgba(240, 147, 251, 0.05) 50%,
      rgba(75, 172, 254, 0.08) 75%,
      rgba(0, 242, 254, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .image-gradient {
  opacity: 1;
}

.project-content {
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
}

.project-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  flex: 1;
}

.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: var(--text-primary);
  /* Fallback */
}

@supports not (-webkit-background-clip: text) {
  .gradient-text {
    color: var(--text-primary);
  }
}

.project-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  flex: 1;
}

.project-footer {
  margin-top: auto;
}

.tech-info {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.project-badges {
  display: flex;
  gap: 0.8rem;
  flex-shrink: 0;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.05);
}

.badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.1) 50%,
      transparent 100%);
  transition: left 0.6s ease;
}

.badge:hover::before {
  left: 100%;
}

.badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
}

/* Badges spécialisés selon la documentation */
.status-done {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.status-on-going {
  background: rgba(240, 147, 251, 0.15);
  border: 1px solid rgba(240, 147, 251, 0.3);
  color: #f8bbff;
}

.lang-python {
  background: rgba(75, 172, 254, 0.15);
  border: 1px solid rgba(75, 172, 254, 0.3);
  color: #b3e0ff;
}

.lang-java {
  background: rgba(240, 147, 251, 0.15);
  border: 1px solid rgba(240, 147, 251, 0.3);
  color: #f8bbff;
}

.badge-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.3));
}

.badge-text {
  white-space: nowrap;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: rgba(102, 126, 234, 0.9);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(var(--blur-strength));
  box-shadow:
    0 10px 40px rgba(102, 126, 234, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.carousel-control:hover:not(.disabled) {
  background: rgba(102, 126, 234, 0.15);
  color: var(--text-primary);
  transform: translateY(-50%) scale(1.2);
  box-shadow:
    0 20px 60px rgba(102, 126, 234, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  border-color: rgba(102, 126, 234, 0.4);
}

.carousel-control.prev {
  left: -32px;
}

.carousel-control.next {
  right: -32px;
}

.carousel-control.disabled {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(102, 126, 234, 0.1);
  color: rgba(102, 126, 234, 0.3);
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
}

.indicator {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(102, 126, 234, 0.3);
  background: var(--glass-bg);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  backdrop-filter: blur(12px);
  box-shadow:
    0 4px 16px rgba(102, 126, 234, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.indicator-glow {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  background: var(--primary-gradient);
  opacity: 0;
  filter: blur(8px);
  z-index: -1;
  transition: opacity 0.4s ease;
}

.indicator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 12px rgba(102, 126, 234, 0.6);
}

.indicator.active {
  border-color: rgba(102, 126, 234, 0.6);
  transform: scale(1.4);
  background: rgba(102, 126, 234, 0.1);
  box-shadow:
    0 8px 32px rgba(102, 126, 234, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  animation: pulse-glow 3s ease-in-out infinite;
}

.indicator.active::before {
  opacity: 1;
}

.indicator.active .indicator-glow {
  opacity: 0.6;
}

@keyframes pulse-glow {

  0%,
  100% {
    transform: scale(1.4);
    box-shadow:
      0 8px 32px rgba(102, 126, 234, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  50% {
    transform: scale(1.6);
    box-shadow:
      0 12px 48px rgba(102, 126, 234, 0.3),
      0 0 20px rgba(102, 126, 234, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  }
}

.indicator:hover:not(.active) {
  border-color: rgba(102, 126, 234, 0.5);
  transform: scale(1.3);
  background: rgba(102, 126, 234, 0.08);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .carousel-wrapper {
    padding: 3rem 0;
  }

  .tech-info {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 2rem 0;
  }

  .project-card {
    height: 520px;
    margin: 1.5rem;
    border-radius: 24px;
  }

  .project-image-container {
    height: 240px;
    border-radius: 20px 20px 0 0;
  }

  .project-content {
    padding: 2rem;
  }

  .project-title {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1rem;
  }

  .project-header {
    flex-direction: column;
    gap: 1.2rem;
  }

  .project-badges {
    align-self: flex-start;
  }

  .badge {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  .carousel-indicators {
    margin-top: 3rem;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    padding: 1rem 0;
  }

  .project-card {
    height: 480px;
    margin: 1rem;
    border-radius: 20px;
  }

  .project-image-container {
    height: 200px;
    border-radius: 16px 16px 0 0;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.4rem;
  }

  .project-description {
    font-size: 0.95rem;
  }

  .badge {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }

  .carousel-indicators {
    margin-top: 2rem;
    gap: 1rem;
  }

  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(102, 126, 234, 0.2);
    background: var(--glass-bg);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    backdrop-filter: blur(8px);
  }

  .indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
    box-shadow: 0 0 8px rgba(102, 126, 234, 0.4);
  }

  .indicator.active {
    border-color: rgba(102, 126, 234, 0.5);
    transform: scale(1.3);
    background: rgba(102, 126, 234, 0.08);
    box-shadow:
      0 4px 16px rgba(102, 126, 234, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    animation: pulse-glow 2.5s ease-in-out infinite;
  }

  .indicator.active::before {
    opacity: 1;
  }

  .indicator.active .indicator-glow {
    opacity: 0.4;
  }

  @keyframes pulse-glow {

    0%,
    100% {
      transform: scale(1.3);
      box-shadow:
        0 4px 16px rgba(102, 126, 234, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    }

    50% {
      transform: scale(1.5);
      box-shadow:
        0 8px 24px rgba(102, 126, 234, 0.25),
        0 0 12px rgba(102, 126, 234, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    }
  }

  .indicator:hover:not(.active) {
    border-color: rgba(102, 126, 234, 0.4);
    transform: scale(1.2);
    background: rgba(102, 126, 234, 0.05);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .carousel-wrapper {
    padding: 3rem 0;
  }

  .project-card {
    margin: 2rem;
  }

  .tech-info {
    justify-content: center;
  }

  .carousel-control {
    width: 56px;
    height: 56px;
  }

  .carousel-control.prev {
    left: -28px;
  }

  .carousel-control.next {
    right: -28px;
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 2rem 0;
  }

  .project-card {
    height: 520px;
    margin: 1.5rem;
    border-radius: 24px;
  }

  .project-image-container {
    height: 240px;
    border-radius: 20px 20px 0 0;
  }

  .project-content {
    padding: 2rem;
  }

  .project-title {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1rem;
    line-height: 1.6;
  }

  .project-header {
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
  }

  .project-badges {
    align-self: flex-start;
  }

  .badge {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  .badge-icon {
    width: 18px;
    height: 18px;
  }

  .carousel-indicators {
    margin-top: 3rem;
    gap: 1.5rem;
  }

  .indicator {
    width: 14px;
    height: 14px;
  }

  .indicator::before {
    width: 7px;
    height: 7px;
  }

  /* Amélioration des zones de touch sur mobile */
  .indicator {
    padding: 8px;
    margin: -8px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    padding: 1rem 0;
  }

  .project-card {
    height: 480px;
    margin: 1rem;
    border-radius: 20px;
  }

  .project-image-container {
    height: 200px;
    border-radius: 16px 16px 0 0;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.4rem;
    line-height: 1.3;
  }

  .project-description {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .badge {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    border-radius: 14px;
  }

  .badge-icon {
    width: 16px;
    height: 16px;
  }

  .tech-info {
    gap: 1rem;
  }

  .carousel-indicators {
    margin-top: 2.5rem;
    gap: 1.2rem;
  }

  .indicator {
    width: 12px;
    height: 12px;
    padding: 10px;
    margin: -10px;
  }

  .indicator::before {
    width: 6px;
    height: 6px;
  }
}

/* Animations supplémentaires pour une expérience premium */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.project-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.03) 25%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(118, 75, 162, 0.03) 75%,
      transparent 100%);
  background-size: 200% 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  animation: shimmer 3s linear infinite;
}

.project-card:hover::after {
  opacity: 1;
}

/* État de focus pour l'accessibilité */
.carousel-control:focus-visible,
.indicator:focus-visible {
  outline: 2px solid rgba(102, 126, 234, 0.6);
  outline-offset: 4px;
}

/* Amélioration des performances avec will-change */
.carousel {
  will-change: transform;
}

.carousel-item {
  will-change: opacity, transform;
}

.project-card {
  will-change: transform, box-shadow;
}

/* Support pour prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {

  .carousel-wrapper,
  .carousel-item,
  .project-card,
  .carousel-control,
  .indicator {
    animation: none;
    transition-duration: 0.3s;
  }

  .project-card:hover {
    transform: none;
  }

  .carousel-container:hover {
    animation: none;
  }

  .indicator.active {
    animation: none;
  }
}

/* Optimisation pour les écrans haute densité */
@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
  .project-card {
    box-shadow:
      0 10px 40px rgba(102, 126, 234, 0.12),
      0 0 0 0.5px rgba(255, 255, 255, 0.03) inset;
  }
}

/* Support pour les thèmes sombres du système */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.08);
    --text-secondary: rgba(255, 255, 255, 0.75);
  }
}
</style>