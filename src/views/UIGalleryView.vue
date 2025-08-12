<template>
  <div class="gallery-container">
    <div class="section-intro" :class="{ 'in-view': isVisible }">
      <span class="section-number">UI - UX</span>
      <h2 class="section-heading">
        <span class="heading-main">Interface Gallery</span>
        <span class="heading-sub"
          >Découvrez ma collection d'interfaces utilisateur uniques</span
        >
      </h2>
    </div>
    <div class="gallery-grid">
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="gallery-card"
        :data-theme="page.style"
      >
        <div class="card-background-effects"></div>
        <div class="card-content">
          <div class="card-header">
            <h2>{{ page.name }}</h2>
            <span class="card-theme">{{ page.theme }}</span>
          </div>
          <p class="card-description">{{ page.description }}</p>
          <div class="card-tags">
            <span v-for="tag in page.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
          <router-link :to="page.path" class="visit-button">
            <span class="button-text">Visit Page</span>
            <svg
              class="button-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <GalleryFooter :pages="pages" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import GalleryFooter from "@/components/GalleryFooter.vue";
import UICardGallery from "@/datasource/UICardGallery.json";

export default {
  name: "UIGalleryView",
  components: {
    GalleryFooter,
  },
  setup() {
    const isVisible = ref(false);
    const cardsVisible = ref(false);
    const pages = ref(UICardGallery.pages);

    const handleScroll = () => {
      const sectionIntro = document.querySelector(".section-intro");

      if (sectionIntro) {
        const rect = sectionIntro.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          isVisible.value = true;
          // Déclencher l'animation des cartes après l'intro
          setTimeout(() => {
            cardsVisible.value = true;
          }, 400);
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
      pages,
      isVisible,
      cardsVisible,
    };
  },
};
</script>

<style scoped>
@import "@/assets/styles/UICardGallery.css";

.gallery-container {
  max-width: 1300px;
  margin: 6rem auto auto auto;
  padding: 3rem 2rem;
  min-height: 100vh;

  --accent-color: #f72585;
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-primary-rgb: 99, 102, 241;
  --color-primary-dark-rgb: 79, 70, 229;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --color-text: #f8fafc;
  --color-text-light: #cbd5e1;
  --text-secondary: #a8b2d1;
}

/* Section Intro */
.section-intro {
  max-width: 1200px;
  margin: 0 auto 80px auto;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-intro.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
  background: rgba(247, 37, 133, 0.1);
  padding: 8px 20px;
  border-radius: 25px;
  border: 1px solid rgba(247, 37, 133, 0.2);
  margin-bottom: 30px;
  letter-spacing: 0.5px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.heading-main {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.heading-sub {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--text-secondary);
  font-weight: 400;
  opacity: 0.9;
  line-height: 1.6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.gallery-card {
  position: relative;
  border-radius: 20px;
  padding: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  cursor: pointer;
  height: fit-content;
  min-height: 320px;
}

.card-background-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Styles communs améliorés */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.card-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: inherit;
  margin: 0;
  line-height: 1.2;
}

.card-theme {
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.card-description {
  color: inherit;
  line-height: 1.7;
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.tag {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  padding: 0.4rem 0.8rem;
  border-radius: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.visit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem 1.8rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-top: auto;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}

.visit-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.visit-button:hover::before {
  left: 100%;
}

.button-arrow {
  transition: transform 0.3s ease;
}

.visit-button:hover .button-arrow {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .gallery-container {
    padding: 2rem 1rem;
  }

  .gallery-title {
    font-size: 2.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .gallery-card {
    min-height: 280px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .gallery-title {
    font-size: 2rem;
  }

  .card-header h2 {
    font-size: 1.5rem;
  }
}
</style>
