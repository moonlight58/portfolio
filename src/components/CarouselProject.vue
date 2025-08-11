<template>
  <section class="projects-zone" :class="{ 'section-loaded': isVisible }">
    <!-- Carousel Container -->
    <div
      class="carousel-wrapper"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <!-- Carousel Content -->
      <div class="carousel-container">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          :class="{ transitioning: isTransitioning }"
        >
          <div
            v-for="(projet, index) in projets"
            :key="index"
            class="project-slide"
            :class="{
              active: currentIndex === index,
              next: currentIndex === index - 1,
              prev: currentIndex === index + 1,
            }"
          >
            <router-link
              :to="`/project-details/${projet.titre}`"
              class="project-link"
            >
              <div class="project-card">
                <!-- Card Glow Effect -->
                <div class="card-glow"></div>

                <!-- Project Image -->
                <div class="project-image-container">
                  <img
                    :src="getImageUrl(projet.image)"
                    :alt="projet.titre"
                    class="project-image"
                    loading="lazy"
                  />
                  <div class="image-overlay"></div>
                  <div class="image-gradient"></div>
                </div>

                <!-- Project Content -->
                <div class="project-content">
                  <!-- Project Header -->
                  <div class="project-header">
                    <h3 class="project-title">{{ projet.titre }}</h3>
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

                  <!-- Project Description -->
                  <p class="project-description">
                    {{ $t(projet.titre + "_content") }}
                  </p>

                  <!-- Project Footer -->
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
                        <span class="badge-text">{{
                          $t(projet.categorie)
                        }}</span>
                      </div>
                    </div>

                    <!-- Call to Action -->
                    <div class="project-cta">
                      <span class="cta-text">Voir le projet</span>
                      <div class="cta-arrow">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Navigation Controls (Desktop only) -->
      <div v-if="!isSmall" class="carousel-controls">
        <button
          @click="prev"
          class="control-btn prev-btn"
          :disabled="isPrevDisabled"
          :class="{ disabled: isPrevDisabled }"
        >
          <div class="btn-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div class="btn-glow"></div>
        </button>

        <button
          @click="next"
          class="control-btn next-btn"
          :disabled="isNextDisabled"
          :class="{ disabled: isNextDisabled }"
        >
          <div class="btn-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
          <div class="btn-glow"></div>
        </button>
      </div>

      <!-- Progress Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(projet, index) in projets"
          :key="`indicator-${index}`"
          @click="goToSlide(index)"
          class="indicator"
          :class="{ active: currentIndex === index }"
          :aria-label="`Aller au projet ${index + 1}`"
        >
          <div class="indicator-track">
            <div
              class="indicator-fill"
              :class="{ active: currentIndex === index }"
            ></div>
          </div>
        </button>
      </div>

      <!-- Progress Bar -->
      <div class="carousel-progress">
        <div class="progress-track">
          <div
            class="progress-fill"
            :style="{
              width: `${((currentIndex + 1) / projets.length) * 100}%`,
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import CarouselProjectData from "@/datasource/CarouselProjects.json";

export default {
  name: "ModernCarouselProject",
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

      const carouselElement = document.querySelector(".projects-zone");
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
    };
  },
};
</script>

<style scoped>
/* Section principale */
.projects-zone {
  padding: 100px 5%;
  background: linear-gradient(
    180deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
  border-radius: 25px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}
.projects-zone.section-loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Carousel Wrapper */
.carousel-wrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* Carousel Container */
.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(20px);
}

/* Carousel Track */
.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.carousel-track.transitioning {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Project Slide */
.project-slide {
  flex: 0 0 100%;
  width: 100%;
}

/* Project Link */
.project-link {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

/* Project Card */
.project-card {
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: scale(1.02);
}

/* Card Glow Effect */
.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

.project-card:hover .card-glow {
  opacity: 1;
}

/* Project Image */
.project-image-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 14, 39, 0.4);
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 0.6;
}

.image-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, var(--dark-surface) 0%, transparent 100%);
}

/* Project Content */
.project-content {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 2;
}

/* Project Header */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.project-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  margin: 0;
}

/* Project Description */
.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
  flex: 1;
}

/* Project Footer */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.tech-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.badge-text {
  color: var(--text-primary);
}

/* Status Badge */
.status-badge.status-done {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.status-badge.status-on-going {
  background: rgba(249, 115, 22, 0.1);
  border-color: rgba(249, 115, 22, 0.3);
  color: #f97316;
}

/* Language & Category Badges */
.language-badge,
.category-badge {
  transition: all 0.3s ease;
}

.language-badge:hover,
.category-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

/* Call to Action */
.project-cta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent-color);
  transition: all 0.3s ease;
}

.project-card:hover .project-cta {
  transform: translateX(8px);
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.project-card:hover .cta-arrow {
  transform: translateX(4px);
}

/* Navigation Controls */
.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
}

.control-btn {
  position: relative;
  width: 60px;
  height: 60px;
  border: none;
  background: transparent;
  cursor: pointer;
  pointer-events: all;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.control-btn.prev-btn {
  transform: translateX(-80px);
}

.control-btn.next-btn {
  transform: translateX(80px);
}

.btn-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  z-index: 2;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.control-btn:hover .btn-glow {
  opacity: 0.2;
}

.control-btn:hover .btn-inner {
  transform: scale(1.1);
  border-color: var(--accent-color);
}

.control-btn.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.control-btn.disabled:hover .btn-inner {
  transform: none;
}

/* Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.indicator {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px;
}

.indicator-track {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.indicator-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.indicator-fill.active {
  transform: scaleX(1);
}

/* Progress Bar */
.carousel-progress {
  margin-top: 20px;
}

.progress-track {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 1px;
  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Responsive Design */
@media (max-width: 968px) {
  .projects-zone {
    padding: 80px 5%;
  }

  .section-intro {
    margin-bottom: 60px;
  }

  .project-card {
    height: auto;
    min-height: 500px;
  }

  .project-image-container {
    height: 200px;
  }

  .project-content {
    padding: 30px;
  }

  .project-header {
    flex-direction: column;
    gap: 15px;
  }

  .project-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    margin: 0 -5%;
  }

  .carousel-container {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .project-content {
    padding: 25px;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .tech-badges {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 20px;
  }

  .badge {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .project-description {
    font-size: 1rem;
  }
}

/* Animation pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    transition: none;
  }

  .project-card,
  .project-image,
  .control-btn,
  .indicator-fill {
    transition: none;
  }
}
</style>
