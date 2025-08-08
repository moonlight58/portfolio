<template>
  <div
    class="carousel-wrapper"
    :class="{ visible: isVisible }"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div class="carousel-container glass-card">
      <div class="carousel-glow"></div>

      <!-- Carousel principal -->
      <div
        class="carousel"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(projet, index) in projets"
          :key="index"
          class="carousel-item"
          :class="{ active: currentIndex === index }"
        >
          <router-link
            :to="`/project-details/${projet.titre}`"
            class="project-link"
          >
            <div class="project-card">
              <div class="project-card-glow"></div>

              <!-- Image du projet avec overlay -->
              <div class="project-image-container">
                <img
                  :src="getImageUrl(projet.image)"
                  :alt="projet.titre"
                  class="carousel-image"
                />
                <div class="image-overlay"></div>
                <div class="image-gradient"></div>
              </div>

              <!-- Contenu du projet -->
              <div class="project-content">
                <div class="project-header">
                  <h3 class="project-title gradient-text">
                    {{ projet.titre }}
                  </h3>
                  <div class="project-badges">
                    <div
                      class="badge status-badge"
                      :class="`status-${projet.status
                        .toLowerCase()
                        .replace(' ', '-')}`"
                    >
                      <img
                        :src="getStatusIcon(projet.status)"
                        :alt="projet.status"
                        class="badge-icon"
                      />
                      <span class="badge-text">{{ $t(projet.status) }}</span>
                    </div>
                  </div>
                </div>

                <p class="project-description">
                  {{ $t(projet.titre + "_content") }}
                </p>

                <div class="project-footer">
                  <div class="tech-badges">
                    <div
                      class="badge language-badge"
                      :class="`lang-${projet.language.toLowerCase()}`"
                    >
                      <img
                        :src="getLanguageIcon(projet.language)"
                        :alt="projet.language"
                        class="badge-icon"
                      />
                      <span class="badge-text">{{ projet.language }}</span>
                    </div>
                    <div
                      class="badge category-badge"
                      :class="`cat-${projet.categorie.toLowerCase()}`"
                    >
                      <img
                        :src="getCategorieIcon(projet.categorie)"
                        :alt="projet.categorie"
                        class="badge-icon"
                      />
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

    <!-- Contrôles de navigation (cachés sur mobile) -->
    <button
      v-if="!isSmall"
      @click="prev"
      class="carousel-control prev"
      :disabled="isPrevDisabled"
      :class="{ disabled: isPrevDisabled }"
    >
      <div class="control-glow"></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="15,18 9,12 15,6"></polyline>
      </svg>
    </button>

    <button
      v-if="!isSmall"
      @click="next"
      class="carousel-control next"
      :disabled="isNextDisabled"
      :class="{ disabled: isNextDisabled }"
    >
      <div class="control-glow"></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="9,18 15,12 9,6"></polyline>
      </svg>
    </button>

    <!-- Indicateurs -->
    <div class="carousel-indicators">
      <button
        v-for="(projet, index) in projets"
        :key="index"
        @click="goToSlide(index)"
        class="indicator"
        :class="{ active: currentIndex === index }"
        :aria-label="`Aller au projet ${index + 1}`"
      >
        <div class="indicator-glow"></div>
        <div class="indicator-fill"></div>
      </button>
    </div>
  </div>
</template>

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
        return require(`@/assets/images/default.png`);
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
    const currentIndex = ref(0);
    const isAutoPlaying = ref(false);
    const autoPlayInterval = ref(null);
    const touchStartX = ref(0);
    const touchEndX = ref(0);
    const isTransitioning = ref(false);
    const isVisible = ref(false);

    const isPrevDisabled = computed(() => currentIndex.value === 0);
    const isNextDisabled = computed(() => {
      return (
        !projets.value ||
        projets.value.length === 0 ||
        currentIndex.value === projets.value.length - 1
      );
    });

    const next = () => {
      if (
        !isNextDisabled.value &&
        !isTransitioning.value &&
        projets.value &&
        projets.value.length > 0
      ) {
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
        currentIndex.value =
          (currentIndex.value - 1 + projets.value.length) %
          projets.value.length;
        setTimeout(() => {
          isTransitioning.value = false;
        }, 600);
      }
    };

    const goToSlide = (index) => {
      if (
        index !== currentIndex.value &&
        !isTransitioning.value &&
        projets.value &&
        projets.value.length > index
      ) {
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
      const carouselElement = document.querySelector(".carousel-wrapper");
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
      isVisible,
      next,
      prev,
      goToSlide,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      startAutoPlay,
      stopAutoPlay,
    };
  },
};
</script>

<style scoped>

/* Wrapper principal avec animation d'entrée */
.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  --blur-strength: 20px;
  --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel-wrapper.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Container glassmorphism */
.carousel-container {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
  position: relative;
  overflow: hidden;
  padding: 2rem;
  transition: var(--transition-smooth);
}

.carousel-container::before {
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

.carousel-container:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.25);
}

/* Glow effect global */
.carousel-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  filter: blur(40px);
  z-index: -1;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.carousel-container:hover .carousel-glow {
  opacity: 1;
}

/* Carousel slider */
.carousel {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  width: 100%;
}

/* Liens de projet */
.project-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* Cartes de projet */
.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  transition: var(--transition-smooth);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.3);
}

/* Glow effect des cartes */
.project-card-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--accent-gradient);
  opacity: 0;
  filter: blur(25px);
  z-index: -1;
  transition: opacity 0.6s ease;
  border-radius: 32px;
}

.project-card:hover .project-card-glow {
  opacity: 0.3;
}

/* Container d'image */
.project-image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-smooth);
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
  background: rgba(0, 0, 0, 0.2);
  transition: var(--transition-smooth);
}

.project-card:hover .image-overlay {
  background: rgba(0, 0, 0, 0.1);
}

.image-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  pointer-events: none;
}

/* Contenu du projet */
.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: var(--text-primary);
  line-height: 1.3;
}

@supports not (-webkit-background-clip: text) {
  .project-title {
    color: var(--text-primary);
  }
}

.project-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

/* Badges */
.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 16px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  font-weight: 600;
  font-size: 0.875rem;
  transition: var(--transition-fast);
  border: 1px solid transparent;
}

.badge-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.badge:hover {
  transform: translateY(-2px);
}

/* Badges de statut */
.status-done {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.3);
  color: #86efac;
}

.status-on-going {
  background: rgba(249, 115, 22, 0.15);
  border-color: rgba(249, 115, 22, 0.3);
  color: #fed7aa;
}

/* Badges de langage */
.lang-java {
  background: rgba(237, 117, 0, 0.15);
  border-color: rgba(237, 117, 0, 0.3);
  color: #fed7aa;
}

.lang-vuejs {
  background: rgba(65, 184, 131, 0.15);
  border-color: rgba(65, 184, 131, 0.3);
  color: #86efac;
}

.lang-python {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
  color: #93c5fd;
}

.lang-c {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
  color: #c7d2fe;
}

/* Badges de catégorie */
.cat-personal {
  background: rgba(240, 147, 251, 0.15);
  border-color: rgba(240, 147, 251, 0.3);
  color: #f8a2c0;
}

.cat-uni {
  background: rgba(75, 172, 254, 0.15);
  border-color: rgba(75, 172, 254, 0.3);
  color: #93c5fd;
}

/* Footer du projet */
.project-footer {
  margin-top: 1.5rem;
}

.tech-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Contrôles de navigation */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  color: var(--text-primary);
  cursor: pointer;
  transition: var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  overflow: hidden;
}

.carousel-control.prev {
  left: -28px;
}

.carousel-control.next {
  right: -28px;
}

.carousel-control:hover:not(.disabled) {
  transform: translateY(-50%) scale(1.1);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.carousel-control.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.control-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--primary-gradient);
  opacity: 0;
  filter: blur(15px);
  z-index: -1;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.carousel-control:hover:not(.disabled) .control-glow {
  opacity: 0.5;
}

/* Indicateurs */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: var(--transition-fast);
  padding: 0;
}

.indicator-fill {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: var(--transition-fast);
}

.indicator.active .indicator-fill {
  background: var(--accent-gradient);
  transform: scale(1.2);
}

.indicator-glow {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: var(--accent-gradient);
  opacity: 0;
  filter: blur(8px);
  z-index: -1;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.indicator:hover .indicator-glow,
.indicator.active .indicator-glow {
  opacity: 0.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .carousel-container {
    padding: 1.5rem;
  }

  .project-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 1rem;
    border-radius: 24px;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-header {
    flex-direction: column;
    gap: 1rem;
  }

  .tech-badges {
    justify-content: center;
  }

  .carousel-indicators {
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    margin: 0 1rem;
  }

  .project-image-container {
    height: 200px;
  }

  .project-title {
    font-size: 1.25rem;
  }

  .badge {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .badge-icon {
    width: 16px;
    height: 16px;
  }
}

/* Animations au focus pour l'accessibilité */
.carousel-control:focus-visible {
  outline: 2px solid rgba(102, 126, 234, 0.8);
  outline-offset: 4px;
}

.indicator:focus-visible {
  outline: 2px solid rgba(102, 126, 234, 0.8);
  outline-offset: 4px;
}

/* Support pour prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .carousel-wrapper {
    transition: opacity 0.3s ease;
  }

  .carousel {
    transition: transform 0.3s ease;
  }

  .project-card {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }
}
</style>
