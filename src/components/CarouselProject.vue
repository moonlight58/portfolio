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
            <img
              :src="projet.image"
              :alt="projet.titre"
              class="carousel-image"
            />
            <div class="overlay">
              <h3>{{ projet.titre }}</h3>
              <p class="contenu">{{ $t(projet.titre + '_content') }}</p>
              <div class="info-box">
                <div class="language">
                  <img
                    :src="getLanguageIcon(projet.language)"
                    :alt="projet.language"
                    class="language-icon"
                  />
                  <p>{{ projet.language }}</p>
                </div>
                <div class="categorie">
                  <img
                    :src="getCategorieIcon(projet.categorie)"
                    :alt="projet.categorie"
                    class="categorie-icon"
                  />
                  <p>{{ $t(projet.categorie) }}</p>
                </div>
                <div class="status">
                  <img
                    :src="getStatusIcon(projet.status)"
                    :alt="projet.status"
                    class="status-icon"
                  />
                  <p>{{ $t(projet.status) }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <button
      @click="prev"
      class="control prev"
      :disabled="isPrevDisabled"
      :class="{ disabled: isPrevDisabled }"
    >
      ←
    </button>
    <button
      @click="next"
      class="control next"
      :disabled="isNextDisabled"
      :class="{ disabled: isNextDisabled }"
    >
      →
    </button>
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
  height: 30vh;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;         
}

.carousel-image {
  width: var(--overlay-width);
  height: 99%;
  object-fit: cover;
  border-radius: 15px;
  transition: opacity 0.5s ease;
}

.overlay:hover {
  backdrop-filter: blur(0rem);
}

.overlay {
  position: absolute;
  top: 0;
  left: calc((100% - var(--overlay-width)) / 2);
  width: var(--overlay-width);
  height: 99%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0.2rem);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  text-align: left;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  transition: backdrop-filter 0.3s;
}

.overlay h3,
.overlay .contenu {
  transition: color 0.2s ease, opacity 0.2s ease;
}

.overlay h3 {
  font-family: "N27", sans-serif;
  font-size: 1.5rem;
  margin: 5% 7% 5% 7%;
}

.overlay p {
  margin: 0 7% 0 7%;
  font-size: 0.9rem;
}

.overlay h3,
.overlay p {
  text-shadow: 1px 1px #2b2b2b;
}

.overlay .info-box {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 10px;
  border-radius: 5px;
}

.overlay .categorie,
.overlay .status,
.overlay .language {
  border: 1px solid rgba(255, 255, 255, 0.2);

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
}

.language img,
.categorie img,
.status img {
  filter: drop-shadow(1px 1px rgba(43, 43, 43, 1));
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
  z-index: 2;
}

.control.prev {
  left: -10px;
}

.control.next {
  right: -10px;
}

.control.disabled {
  background-color: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.3);
  cursor: auto;
}

.button-gradient {
  position: absolute;
  width: 100%;
  height: 10rem;
  top: 0;
  background: rgb(16, 21, 45);
  background: linear-gradient(
    90deg,
    rgba(16, 21, 45, 1) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(16, 21, 45, 1) 100%
  );
  z-index: 1;
}

@media (max-width: 799px) {
  .categorie p,
  .status p,
  .language p {
    display: none;
  }

  .carousel-image,
  .carousel-item,
  .overlay {
    height: 10rem;
  }
}
</style>
