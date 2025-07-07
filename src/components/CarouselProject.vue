<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const projets = ref([
  {
    titre: "Spotify-tui",
    contenu:
      "Terminal-based Spotify client lighter than the original application made in C and uses Spotify Web API",
    image: require("@/assets/images/Spotify-tui.png"),
    categorie: "Personal",
    status: "On Going",
    language: "C",
    url: "https://github.com/moonlight58/Spotify-tui",
  },
  {
    titre: "SteamToLinux",
    contenu: "Game compatibility check on Linux",
    image: require("@/assets/images/SteamToLinux.jpg"),
    categorie: "Personal",
    status: "Done",
    language: "Python",
    url: "https://github.com/moonlight58/SteamToLinux",
  },
  {
    titre: "Moonify",
    contenu: "Music player with Imgur API and Discord RPC",
    image: require("@/assets/images/Moonify.png"),
    categorie: "Personal",
    status: "Done",
    language: "Python",
    url: "https://github.com/moonlight58/Moonify",
  },
  {
    titre: "B.I.E.N.",
    contenu: "Website about climate change and technology",
    image: require("@/assets/images/BIEN.png"),
    categorie: "Uni",
    status: "Done",
    language: "VueJS",
    url: "https://github.com/grothlin-iut90/SAE-SiteInfo-BIEN",
  },
  {
    titre: "Roi-des-Roses",
    contenu: "Board Game with JavaFX",
    image: require("@/assets/images/Roi-des-Roses.jpg"),
    categorie: "Uni",
    status: "Done",
    language: "Java",
    url: "https://github.com/grothlin-iut90/Roi-des-Roses",
  },
]);

const currentIndex = ref(0);
const isAutoPlaying = ref(false);
const autoPlayInterval = ref(null);
const touchStartX = ref(0);
const touchEndX = ref(0);
const isTransitioning = ref(false);

const isPrevDisabled = computed(() => currentIndex.value === 0);
const isNextDisabled = computed(
  () => currentIndex.value === projets.value.length - 1
);

const next = () => {
  if (!isNextDisabled.value && !isTransitioning.value) {
    isTransitioning.value = true;
    currentIndex.value++;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const prev = () => {
  if (!isPrevDisabled.value && !isTransitioning.value) {
    isTransitioning.value = true;
    currentIndex.value--;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const goToSlide = (index) => {
  if (index !== currentIndex.value && !isTransitioning.value) {
    isTransitioning.value = true;
    currentIndex.value = index;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const startAutoPlay = () => {
  if (!isAutoPlaying.value) {
    isAutoPlaying.value = true;
    autoPlayInterval.value = setInterval(() => {
      if (isNextDisabled.value) {
        currentIndex.value = 0;
      } else {
        next();
      }
    }, 5000);
  }
};

const stopAutoPlay = () => {
  if (isAutoPlaying.value) {
    isAutoPlaying.value = false;
    clearInterval(autoPlayInterval.value);
  }
};

// Touch events for mobile
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

const getCategorieIcon = (categorie) => {
  const icons = {
    Personal: require("@/assets/project-info/Personal.svg"),
    Uni: require("@/assets/project-info/Uni.svg"),
  };
  return icons[categorie] || require("@/assets/project-info/Default.svg");
};

const getStatusIcon = (status) => {
  const icons = {
    Done: require("@/assets/project-info/done.svg"),
    "On Going": require("@/assets/project-info/ongoing.svg"),
  };
  return icons[status];
};

const getLanguageIcon = (language) => {
  const icons = {
    Java: require("@/assets/language/java.svg"),
    C: require("@/assets/language/C.svg"),
    VueJS: require("@/assets/language/vuejs.svg"),
    Python: require("@/assets/language/python.svg"),
  };
  return icons[language];
};

const isSmall = ref(window.innerWidth <= 768);

const updateIsSmall = () => {
  isSmall.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", updateIsSmall);
  startAutoPlay();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsSmall);
  stopAutoPlay();
});
</script>

<template>
  <div class="carousel-wrapper" 
       @mouseenter="stopAutoPlay"
       @mouseleave="startAutoPlay">
    <div class="carousel-container">
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
        >
          <router-link :to="`/project-details/${projet.titre}`" target="_blank">
            <div class="project-card">
              <div class="project-image-container">
                <img
                  :src="projet.image"
                  :alt="projet.titre"
                  class="carousel-image"
                />
                <div class="image-overlay"></div>
              </div>
              
              <div class="project-content">
                <div class="project-header">
                  <h3 class="project-title">{{ projet.titre }}</h3>
                  <div class="project-badges">
                    <div class="badge status-badge">
                      <img
                        :src="getStatusIcon(projet.status)"
                        :alt="projet.status"
                        class="badge-icon"
                      />
                      <span class="badge-text">{{ $t(projet.status) }}</span>
                    </div>
                  </div>
                </div>
                
                <p class="project-description">{{ $t(projet.titre + '_content') }}</p>
                
                <div class="project-footer">
                  <div class="tech-info">
                    <div class="badge language-badge">
                      <img
                        :src="getLanguageIcon(projet.language)"
                        :alt="projet.language"
                        class="badge-icon"
                      />
                      <span class="badge-text">{{ projet.language }}</span>
                    </div>
                    <div class="badge category-badge">
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
    
    <!-- Navigation buttons (hidden on mobile) -->
    <button
      v-if="!isSmall"
      @click="prev"
      class="carousel-control prev"
      :disabled="isPrevDisabled"
      :class="{ disabled: isPrevDisabled }"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </button>
    
    <button
      v-if="!isSmall"
      @click="next"
      class="carousel-control next"
      :disabled="isNextDisabled"
      :class="{ disabled: isNextDisabled }"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>
    
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        v-for="(projet, index) in projets"
        :key="index"
        @click="goToSlide(index)"
        class="indicator"
        :class="{ active: currentIndex === index }"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  font-family: "N27", sans-serif;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
}

.carousel-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
  z-index: 1;
}

.carousel {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  touch-action: pan-y;
}

.carousel-item {
  min-width: 100%;
  padding: 0;
}

.carousel-item a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover {
  border-color: rgba(144, 168, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

.project-card:hover::before {
  opacity: 1;
}

.project-image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .carousel-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(26, 26, 26, 0.2) 60%,
    rgba(26, 26, 26, 0.8) 100%
  );
}

.project-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  color: #90a8ff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  background: linear-gradient(135deg, #90a8ff, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex: 1;
}

.project-description {
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.project-footer {
  margin-top: auto;
}

.tech-info {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.badge:hover::before {
  left: 100%;
}

.language-badge,
.category-badge,
.status-badge {
  background: rgba(144, 168, 255, 0.1);
  border: 1px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.2);
}

.badge-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.badge-text {
  white-space: nowrap;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(26, 26, 26, 0.8);
  border: 2px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.carousel-control:hover:not(.disabled) {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
}

.carousel-control.prev {
  left: -25px;
}

.carousel-control.next {
  right: -25px;
}

.carousel-control.disabled {
  background: rgba(26, 26, 26, 0.4);
  border-color: rgba(144, 168, 255, 0.1);
  color: rgba(144, 168, 255, 0.3);
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(144, 168, 255, 0.3);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
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
  background: #90a8ff;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.indicator.active {
  border-color: #90a8ff;
  transform: scale(1.2);
  background: rgba(144, 168, 255, 0.1);
}

.indicator.active::before {
  opacity: 1;
}

.indicator:hover:not(.active) {
  border-color: rgba(144, 168, 255, 0.5);
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-card {
    height: 450px;
    margin: 0.5rem;
  }
  
  .project-image-container {
    height: 200px;
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-description {
    font-size: 0.95rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .project-badges {
    align-self: flex-start;
  }
  
  .tech-info {
    justify-content: center;
  }
  
  .badge {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper,
  .carousel-container {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    border-radius: 0;
    padding: 0;
  }
  .project-card {
    height: auto;
    margin: 0;
    border-radius: 0;
    min-width: 0;
  }
  .project-image-container {
    height: 140px;
  }
  .project-content {
    padding: 0.75rem;
  }
}

@media (max-width: 320px) {
  .project-card {
    height: 380px;
    margin: 0.125rem;
  }
  
  .project-image-container {
    height: 150px;
  }
  
  .project-content {
    padding: 1rem;
  }
  
  .project-title {
    font-size: 1.1rem;
  }
  
  .project-description {
    font-size: 0.85rem;
  }
  
  .badge {
    padding: 0.3rem 0.5rem;
  }
  
  .carousel-indicators {
    margin-top: 1rem;
  }
}

/* Animation pour l'autoplay */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.indicator.active {
  animation: pulse 2s ease-in-out infinite;
}
</style>