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
  padding: 2rem 0;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(168, 179, 255, 0.15);
  backdrop-filter: blur(24px);
  position: relative;
  box-shadow: 
    0 8px 32px rgba(168, 179, 255, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.carousel-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(168, 179, 255, 0.6), 
    rgba(199, 179, 255, 0.6), 
    transparent
  );
  z-index: 1;
}

.carousel {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(168, 179, 255, 0.2);
  border-radius: 28px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  height: 520px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(168, 179, 255, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(168, 179, 255, 0.7), 
    rgba(199, 179, 255, 0.7), 
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover {
  border-color: rgba(168, 179, 255, 0.4);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 64px rgba(168, 179, 255, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 0 40px rgba(168, 179, 255, 0.1);
}

.project-card:hover::before {
  opacity: 1;
}

.project-image-container {
  position: relative;
  height: 260px;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-card:hover .carousel-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(168, 179, 255, 0.05) 0%,
    rgba(168, 179, 255, 0.1) 40%,
    rgba(26, 26, 26, 0.3) 70%,
    rgba(26, 26, 26, 0.8) 100%
  );
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
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  background: linear-gradient(
    135deg, 
    #a8b3ff 0%, 
    #c7b3ff 50%, 
    #ffffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex: 1;
  text-shadow: 0 0 20px rgba(168, 179, 255, 0.3);
}

.project-description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  flex: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.project-footer {
  margin-top: auto;
}

.tech-info {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.project-badges {
  display: flex;
  gap: 0.8rem;
  flex-shrink: 0;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(168, 179, 255, 0.2);
  backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 
    0 4px 16px rgba(168, 179, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(168, 179, 255, 0.2), 
    transparent
  );
  transition: left 0.6s ease;
}

.badge:hover::before {
  left: 100%;
}

.badge:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 32px rgba(168, 179, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: rgba(168, 179, 255, 0.4);
  background: rgba(168, 179, 255, 0.1);
}

.badge-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  filter: drop-shadow(0 0 4px rgba(168, 179, 255, 0.3));
}

.badge-text {
  white-space: nowrap;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(168, 179, 255, 0.25);
  color: rgba(168, 179, 255, 0.9);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(168, 179, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.carousel-control:hover:not(.disabled) {
  background: rgba(168, 179, 255, 0.15);
  color: #ffffff;
  transform: translateY(-50%) scale(1.15);
  box-shadow: 
    0 12px 48px rgba(168, 179, 255, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: rgba(168, 179, 255, 0.4);
}

.carousel-control.prev {
  left: -28px;
}

.carousel-control.next {
  right: -28px;
}

.carousel-control.disabled {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(168, 179, 255, 0.1);
  color: rgba(168, 179, 255, 0.3);
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
}

.indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(168, 179, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  backdrop-filter: blur(12px);
  box-shadow: 
    0 4px 16px rgba(168, 179, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
  background: linear-gradient(135deg, #a8b3ff, #c7b3ff);
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 12px rgba(168, 179, 255, 0.6);
}

.indicator.active {
  border-color: rgba(168, 179, 255, 0.6);
  transform: scale(1.3);
  background: rgba(168, 179, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(168, 179, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.indicator.active::before {
  opacity: 1;
}

.indicator:hover:not(.active) {
  border-color: rgba(168, 179, 255, 0.5);
  transform: scale(1.2);
  background: rgba(168, 179, 255, 0.08);
}

/* Responsive Design */
@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 1rem 0;
  }
  
  .project-card {
    height: 480px;
    margin: 1rem;
    border-radius: 24px;
  }
  
  .project-image-container {
    height: 220px;
    border-radius: 20px 20px 0 0;
  }
  
  .project-content {
    padding: 2rem;
  }
  
  .project-title {
    font-size: 1.5rem;
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
  
  .tech-info {
    justify-content: center;
  }
  
  .badge {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    border-radius: 16px;
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
  
  .carousel-container {
    border-radius: 0;
  }
  
  .project-card {
    height: auto;
    margin: 0;
    border-radius: 0;
    min-width: 0;
  }
  
  .project-image-container {
    height: 180px;
    border-radius: 0;
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
}

@media (max-width: 320px) {
  .project-card {
    height: 420px;
    margin: 0.5rem;
  }
  
  .project-image-container {
    height: 160px;
  }
  
  .project-content {
    padding: 1.2rem;
  }
  
  .project-title {
    font-size: 1.2rem;
  }
  
  .project-description {
    font-size: 0.9rem;
  }
  
  .badge {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .carousel-indicators {
    margin-top: 2rem;
  }
}

/* Animations pour l'autoplay avec effet glassmorphism */
@keyframes glassGlow {
  0% { 
    transform: scale(1);
    box-shadow: 
      0 8px 32px rgba(168, 179, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  50% { 
    transform: scale(1.15);
    box-shadow: 
      0 12px 48px rgba(168, 179, 255, 0.25),
      0 0 20px rgba(168, 179, 255, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  100% { 
    transform: scale(1);
    box-shadow: 
      0 8px 32px rgba(168, 179, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
}

.indicator.active {
  animation: glassGlow 3s ease-in-out infinite;
}

/* Animation fadeInUp pour l'apparition */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-wrapper {
  animation: fadeInUp 0.8s ease-out;
}
</style>