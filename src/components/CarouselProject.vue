<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const projets = ref([
  { titre: "Spotify-TUI", contenu: "Terminal application for Spotify", image: require('@/assets/images/spotifyTUI.png'), categorie: "Personal", status: "On Going", language: "Rust", path: "/personal/spotify-tui" },
  { titre: "SteamToLinux", contenu: "Game compatibility check on Linux", image: require('@/assets/images/SteamToLinux.png'), categorie: "Personal", status: "Done", language: "Python", path: "/personal/steamtolinux" },
  { titre: "B.I.E.N.", contenu: "Website about climate change and technology", image: require('@/assets/images/spotifyGoal.png'), categorie: "Uni", status: "On Going", language: "VueJS", path: "/uni/bien" },
  { titre: "Roi des Roses", contenu: "Board Game with JavaFX", image: require('@/assets/images/spotifyTUI.png'), categorie: "Uni", status: "Done", language: "Java", path: "/uni/rdr" },
]);

const currentIndex = ref(0);
const isPrevDisabled = computed(() => currentIndex.value === 0);
const isNextDisabled = computed(() => currentIndex.value === projets.value.length - 1);

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
    Personal: require('@/assets/project/Personal.svg'),
    Uni: require('@/assets/project/Uni.svg'),
  };
  return icons[categorie] || require('@/assets/project/Default.svg');
};

const getStatusIcon = (status) => {
  const icons = {
    Done: require("@/assets/project/done.svg"),
    "On Going": require("@/assets/project/ongoing.svg")
  };
  return icons[status];
}

const getLanguageIcon = (language) => {
  const icons = {
    Java: require("@/assets/language/java.svg"),
    Rust: require("@/assets/language/rust.svg"),
    VueJS: require("@/assets/language/vuejs.svg"),
    Python: require("@/assets/language/python.svg")
  }
  return icons[language];
}

const isSmall = ref(window.innerWidth <= 800);

const updateIsSmall = () => {
  isSmall.value = window.innerWidth <= 800;
};

onMounted(() => {
  window.addEventListener('resize', updateIsSmall);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsSmall);
});
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <div class="carousel" :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
        <div v-for="(projet, index) in projets" :key="index" class="carousel-item">
          <router-link :to="projet.path">
            <img :src="projet.image" :alt="projet.titre" class="carousel-image" />
            <div class="overlay">
              <h3>{{ projet.titre }}</h3>
              <p class="contenu">{{ projet.contenu }}</p>
              <div class="info-box">
                <div class="language">
                  <img :src="getLanguageIcon(projet.language)" :alt="projet.language" class="language-icon" />
                  <p>{{ projet.language }}</p>
                </div>
                <div class="categorie">
                  <img :src="getCategorieIcon(projet.categorie)" :alt="projet.categorie" class="categorie-icon" />
                  <p>{{ projet.categorie }}</p>
                </div>
                <div class="status">
                  <img :src="getStatusIcon(projet.status)" :alt="projet.status" class="status-icon" />
                  <p>{{ projet.status }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <button @click="prev" class="control prev" :disabled="isPrevDisabled" :class="{ disabled: isPrevDisabled }">←</button>
    <button @click="next" class="control next" :disabled="isNextDisabled" :class="{ disabled: isNextDisabled }">→</button>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  --overlay-width: 80%;
}

.carousel-item {
  min-width: 100%;
  position: relative;
  text-align: center;
  box-sizing: border-box;
}

.carousel-image {
  width: var(--overlay-width);
  height: 25rem;
  object-fit: cover;
  border-radius: 15px;
  transition: opacity 0.5s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: calc((100% - var(--overlay-width)) / 2);
  width: var(--overlay-width);
  height: 25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0.5rem);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  text-align: left;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
}

.overlay:hover {
  cursor: pointer;
  backdrop-filter: none;
  transition: backdrop-filter 0.2s ease;
}

.overlay:hover .carousel-image {
  opacity: 0;
}

.overlay h3,
.overlay .contenu {
  transition: color 0.2s ease, opacity 0.2s ease;
}

.overlay:hover h3,
.overlay:hover .contenu {
  color: transparent;
  opacity: 0;
}

.overlay h3 {
  font-size: 1.5rem;
  margin: 5% 7% 5% 7%;
}

.overlay p {
  margin: 0 7% 0 7%;
  font-size: 0.9rem;
}

.overlay .info-box {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 10px;
  backdrop-filter: blur(0.5rem);
  border-radius: 5px;
}

.overlay .categorie,
.overlay .status,
.overlay .language {
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 15px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
}

.categorie-icon,
.status-icon,
.language-icon {
  width: 15px;
  height: 100%;
  vertical-align: middle;
  transition: opacity 0.2s ease;
}


.control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.control.prev {
  left: -10px;
}

.control.next {
  right: -10px;
}

.control.disabled {
  background-color: rgba(0, 0, 0, 0.3);
  color: rgba(255,255,255,0.3);
  cursor: auto;
}

@media (max-width: 800px) {
  .categorie p,
  .status p,
  .language p {
    display: none;
  }

  .carousel-image {
    height: 10rem;
  }

  .overlay {
    height: 10rem;
  }
}

</style>
