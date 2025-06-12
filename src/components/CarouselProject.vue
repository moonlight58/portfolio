<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const projets = ref([
  {
    titre: "Spotify-TUI",
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
    titre: "Roi des Roses",
    contenu: "Board Game with JavaFX",
    image: require("@/assets/images/RoiDesRoses.jpg"),
    categorie: "Uni",
    status: "Done",
    language: "Java",
    url: "https://github.com/grothlin-iut90/Roi-des-Roses",
  },
]);

const currentIndex = ref(0);
const isPrevDisabled = computed(() => currentIndex.value === 0);
const isNextDisabled = computed(
  () => currentIndex.value === projets.value.length - 1
);

const next = () => {
  if (!isNextDisabled.value) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (!isPrevDisabled.value) {
    currentIndex.value--;
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

const isSmall = ref(window.innerWidth <= 800);

const updateIsSmall = () => {
  isSmall.value = window.innerWidth <= 800;
};

onMounted(() => {
  window.addEventListener("resize", updateIsSmall);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsSmall);
});
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <div
        class="carousel"
        :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }"
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
                      <span>{{ $t(projet.status) }}</span>
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
                      <span>{{ projet.language }}</span>
                    </div>
                    <div class="badge category-badge">
                      <img
                        :src="getCategorieIcon(projet.categorie)"
                        :alt="projet.categorie"
                        class="badge-icon"
                      />
                      <span>{{ $t(projet.categorie) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    
    <button
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
      @click="next"
      class="carousel-control next"
      :disabled="isNextDisabled"
      :class="{ disabled: isNextDisabled }"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>
    
    <div class="carousel-indicators">
      <button
        v-for="(projet, index) in projets"
        :key="index"
        @click="currentIndex = index"
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
  border-radius: 12px;
}

.carousel {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
  border: 1px solid rgba(144, 168, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background: rgba(144, 168, 255, 0.1);
  border-color: rgba(144, 168, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

.project-image-container {
  position: relative;
  height: 200px;
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
    rgba(16, 21, 45, 0.3) 70%,
    rgba(16, 21, 45, 0.8) 100%
  );
}

.project-content {
  padding: 1.5rem;
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
}

.project-title {
  color: #90a8ff;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
}

.project-description {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.project-footer {
  margin-top: auto;
}

.tech-info {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.language-badge {
  background: rgba(34, 214, 255, 0.1);
  border: 1px solid rgba(34, 214, 255, 0.3);
  color: rgb(34, 214, 255);
}

.category-badge {
  background: rgba(144, 168, 255, 0.1);
  border: 1px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
}

.status-badge {
  background: rgba(102, 252, 241, 0.1);
  border: 1px solid rgba(102, 252, 241, 0.3);
  color: rgb(102, 252, 241);
}

.badge:hover {
  transform: translateY(-1px);
}

.badge-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control:hover:not(.disabled) {
  background: rgba(144, 168, 255, 0.2);
  border-color: rgba(144, 168, 255, 0.5);
  transform: translateY(-50%) scale(1.1);
}

.carousel-control.prev {
  left: -24px;
}

.carousel-control.next {
  right: -24px;
}

.carousel-control.disabled {
  background: rgba(144, 168, 255, 0.05);
  border-color: rgba(144, 168, 255, 0.1);
  color: rgba(144, 168, 255, 0.3);
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(144, 168, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #90a8ff;
  transform: scale(1.2);
}

.indicator:hover:not(.active) {
  background: rgba(144, 168, 255, 0.5);
}
/* Mobile Responsive - AMÉLIORÉ */
@media (max-width: 1024px) {
  .carousel-control.prev {
    left: -20px;
  }
  
  .carousel-control.next {
    right: -20px;
  }
}

@media (max-width: 800px) {
  .project-card {
    height: 350px;
  }
  
  .project-image-container {
    height: 160px;
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
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
  }
  
  .badge span {
    display: none;
  }
  
  .carousel-control {
    width: 40px;
    height: 40px;
  }
  
  .carousel-control.prev {
    left: -16px; /* Rapproché pour éviter le débordement */
  }
  
  .carousel-control.next {
    right: -16px;
  }
}

@media (max-width: 640px) { /* Nouveau breakpoint critique */
  .carousel-wrapper {
    margin: 0 1rem; /* Ajoute une marge pour les contrôles */
  }
  
  .carousel-control.prev {
    left: -12px;
  }
  
  .carousel-control.next {
    right: -12px;
  }
}

@media (max-width: 580px) { /* Nouveau breakpoint */
  .project-card {
    height: 330px;
  }
  
  .project-image-container {
    height: 140px;
  }
  
  .project-content {
    padding: 0.875rem;
  }
  
  .project-title {
    font-size: 1.05rem;
  }
  
  .project-description {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  
  .badge {
    padding: 0.35rem 0.5rem;
    font-size: 0.7rem;
  }
  
  .carousel-control {
    width: 36px;
    height: 36px;
  }
  
  .carousel-control.prev {
    left: -10px;
  }
  
  .carousel-control.next {
    right: -10px;
  }
}

@media (max-width: 480px) {
  .project-card {
    height: 320px;
  }
  
  .project-image-container {
    height: 140px;
  }
  
  .tech-info {
    justify-content: center;
  }
  
  .carousel-control {
    width: 36px;
    height: 36px;
  }
  
  .carousel-control.prev {
    left: -8px; /* Encore plus rapproché */
  }
  
  .carousel-control.next {
    right: -8px;
  }
}

/* Très petit mobile - Approche alternative */
@media (max-width: 380px) {
  .carousel-wrapper {
    margin: 0 1.5rem; /* Plus de marge */
  }
  
  .project-card {
    height: 300px;
  }
  
  .project-image-container {
    height: 120px;
  }
  
  .project-content {
    padding: 0.75rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-description {
    font-size: 0.75rem;
  }
  
  .carousel-control {
    width: 32px;
    height: 32px;
  }
  
  .carousel-control.prev {
    left: -6px;
  }
  
  .carousel-control.next {
    right: -6px;
  }
  
  .badge {
    padding: 0.3rem 0.4rem;
  }
  
  .carousel-indicators {
    margin-top: 1rem;
  }
}

/* Alternative pour très petits écrans : contrôles en bas */
@media (max-width: 320px) {
  .carousel-wrapper {
    margin: 0 0.5rem;
  }
  
  .carousel-control {
    position: static; /* Enlève le positionnement absolu */
    transform: none;
    margin: 0.5rem;
  }
  
  .carousel-control.prev,
  .carousel-control.next {
    position: static;
    left: auto;
    right: auto;
  }
  
  /* Ajouter une rangée de contrôles en bas */
  .carousel-wrapper::after {
    content: '';
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  /* Alternative : utiliser seulement les indicateurs */
  .carousel-control {
    display: none;
  }
  
  .carousel-indicators {
    margin-top: 1rem;
    gap: 0.75rem;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
  }
}
</style>