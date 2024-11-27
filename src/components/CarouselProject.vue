<script setup>
import { ref, computed } from "vue";

// Projets du carousel
const projets = ref([
  { titre: "Spotify-TUI", contenu: "Terminal application for Spotify", image: require('@/assets/images/spotifyTUI.png'), categorie: "Personal" },
  { titre: "SteamToLinux", contenu: "Game compatibility check on Linux", image: require('@/assets/images/fonc.png'), categorie: "Personal" },
  { titre: "B.I.E.N.", contenu: "Website about climate change and technology", image: require('@/assets/images/spotifyGoal.png'), categorie: "Uni" },
  { titre: "Roi des Roses", contenu: "Board Game with JavaFX", image: require('@/assets/images/spotifyTUI.png'), categorie: "Uni" },
]);

// Index actuel
const currentIndex = ref(0);

// État des boutons
const isPrevDisabled = computed(() => currentIndex.value === 0);
const isNextDisabled = computed(() => currentIndex.value === projets.value.length - 1);

// Aller au projet suivant
const next = () => {
  if (!isNextDisabled.value) {
    currentIndex.value++;
  }
};

// Aller au projet précédent
const prev = () => {
  if (!isPrevDisabled.value) {
    currentIndex.value--;
  }
};
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <div class="carousel" :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
        <div v-for="(projet, index) in projets" :key="index" class="carousel-item">
          <img :src="projet.image" :alt="projet.titre" class="carousel-image" />
          <div class="overlay">
            <h3>{{ projet.titre }}</h3>
            <p>{{ projet.contenu }}</p>
          </div>
        </div>
      </div>
    </div>
    <button @click="prev" class="control prev" :disabled="isPrevDisabled" :class="{ disabled: isPrevDisabled }">◀</button>
    <button @click="next" class="control next" :disabled="isNextDisabled" :class="{ disabled: isNextDisabled }">▶</button>
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
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.overlay {
  position: absolute;
  top: 0;
  left: calc((100% - var(--overlay-width)) / 2);
  width: var(--overlay-width);
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  text-align: left;
  box-sizing: border-box;
  border-radius: 15px;
}

.overlay:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: background 1.5s ease;
}

.overlay h3,
.overlay p {
  transition: color 1s ease, opacity 1s ease;
}

.overlay:hover h3,
.overlay:hover p {
  color: transparent;
  opacity: 0;
}

.overlay h3 {
  font-size: 1.5rem;
  margin: 5% 0 5% 7%;
}

.overlay p {
  margin: 0 7% 0 7%;
  font-size: 0.9rem;
}

.control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
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
</style>
