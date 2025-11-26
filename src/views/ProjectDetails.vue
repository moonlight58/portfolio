<template>
  <div class="project-details-zone" v-if="project">
    <!-- Navigation Back -->
    <div class="back-navigation">
      <button class="back-button interactive-element" @click="$router.back">
        <span class="button-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span>Retour</span>
      </button>
    </div>

    <!-- Hero Project Section -->
    <section class="project-hero-zone">
      <div class="section-intro">
        <span class="section-number">01</span>
        <h1 class="section-heading">
          <span class="heading-main">{{ project.titre }}</span>
          <span class="heading-sub">{{ $t("ProjectDetails") }}</span>
        </h1>
      </div>

      <div class="project-hero-content">
        <div class="hero-grid">
          <div class="hero-left">
            <div class="project-image-container">
              <div class="image-glow"></div>
              <img
                :src="require(`@/assets/images/${project.image}`)"
                :alt="project.titre"
                class="project-image"
              />
              <div class="image-ring"></div>
            </div>
          </div>
          <div class="hero-right">
            <div class="project-meta-container">
              <div class="meta-badges">
                <div class="badge category-badge">
                  <span class="badge-icon">📂</span>
                  <span>{{ $t(project.categorie) }}</span>
                </div>
                <div
                  class="badge status-badge"
                  :class="getStatusClass(project.status)"
                >
                  <span class="badge-icon">{{
                    getStatusIcon(project.status)
                  }}</span>
                  <span>{{ $t(project.status) }}</span>
                </div>
              </div>
              <div class="project-description-preview">
                <p class="body-text">
                  {{ $t(project.titre + "_description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description Section -->
    <section class="description-zone">
      <div class="section-intro">
        <span class="section-number">02</span>
        <h2 class="section-heading">
          <span class="heading-main">Description</span>
          <span class="heading-sub">{{ $t("ProjectDescription") }}</span>
        </h2>
      </div>
      <div class="description-content">
        <div class="content-wrapper glass-card">
          <div class="description-text">
            <p class="body-text">{{ $t(project.titre + "_description") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section
      class="technologies-zone"
      v-if="
        (project.language && project.language.length) ||
        (project.technologies && project.technologies.length)
      "
    >
      <div class="section-intro">
        <span class="section-number">03</span>
        <h2 class="section-heading">
          <span class="heading-main">Technologies</span>
          <span class="heading-sub">{{ $t("ProjectLanguage") }}</span>
        </h2>
      </div>

      <div class="technologies-content">
        <!-- Languages -->
        <div
          v-if="project.language && project.language.length"
          class="tech-category"
        >
          <h3 class="category-title">
            <span class="title-icon">💻</span>
            <span class="gradient-text">{{ $t("ProjectLanguage") }}</span>
          </h3>
          <div class="tech-grid">
            <div
              v-for="(lang, index) in project.language"
              :key="'lang-' + index"
              class="tech-item interactive-card"
            >
              <div class="tech-icon-container">
                <img :src="getSkillIcon(lang)" :alt="lang" class="tech-icon" />
              </div>
              <span class="tech-name">{{ lang }}</span>
              <div class="card-accent tech-accent-language"></div>
            </div>
          </div>
        </div>

        <!-- Frameworks & Tools -->
        <div
          v-if="project.technologies && project.technologies.length"
          class="tech-category"
        >
          <h3 class="category-title">
            <span class="title-icon">🛠️</span>
            <span class="gradient-text">Frameworks & Outils</span>
          </h3>
          <div class="tech-grid">
            <div
              v-for="(tech, index) in project.technologies"
              :key="'tech-' + index"
              class="tech-item interactive-card"
            >
              <div class="tech-icon-container">
                <img :src="getTechIcon(tech)" :alt="tech" class="tech-icon" />
              </div>
              <span class="tech-name">{{ tech }}</span>
              <div class="card-accent tech-accent-framework"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Section -->
    <section class="learning-zone">
      <div class="section-intro">
        <span class="section-number">04</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t("ProjectApprentice") }}</span>
          <span class="heading-sub">{{ $t("ProjectLearning") }}</span>
        </h2>
      </div>

      <div class="learning-content">
        <div class="learning-grid">
          <!-- Technical Learning -->
          <div
            v-if="
              $t(project.titre + '_technical_learning') &&
              $t(project.titre + '_technical_learning') !==
                project.titre + '_technical_learning'
            "
            class="learning-card interactive-card"
          >
            <div class="learning-header">
              <div class="learning-icon technical-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="learning-title">{{ $t("ProjectTechnical") }}</h3>
            </div>
            <div class="learning-list-container">
              <ul class="learning-list">
                <li
                  v-for="(item, idx) in $t(
                    project.titre + '_technical_learning'
                  )
                    .split(/\n|,|•|\r/)
                    .filter(Boolean)"
                  :key="'tech-' + idx"
                >
                  <span class="list-bullet">•</span>
                  <span class="list-text">{{ item.trim() }}</span>
                </li>
              </ul>
            </div>
            <div class="card-accent learning-accent-technical"></div>
          </div>

          <!-- Soft Skills Learning -->
          <div
            v-if="
              $t(project.titre + '_soft_learning') &&
              $t(project.titre + '_soft_learning') !==
                project.titre + '_soft_learning'
            "
            class="learning-card interactive-card"
          >
            <div class="learning-header">
              <div class="learning-icon soft-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="learning-title">{{ $t("ProjectSoft") }}</h3>
            </div>
            <div class="learning-list-container">
              <ul class="learning-list">
                <li
                  v-for="(item, idx) in $t(project.titre + '_soft_learning')
                    .split(/\n|,|•|\r/)
                    .filter(Boolean)"
                  :key="'soft-' + idx"
                >
                  <span class="list-bullet">•</span>
                  <span class="list-text">{{ item.trim() }}</span>
                </li>
              </ul>
            </div>
            <div class="card-accent learning-accent-soft"></div>
          </div>

          <!-- Challenges Learning -->
          <div
            v-if="
              $t(project.titre + '_challenges_learning') &&
              $t(project.titre + '_challenges_learning') !==
                project.titre + '_challenges_learning'
            "
            class="learning-card interactive-card"
          >
            <div class="learning-header">
              <div class="learning-icon challenge-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="learning-title">{{ $t("ProjectChallenges") }}</h3>
            </div>
            <div class="learning-list-container">
              <ul class="learning-list">
                <li
                  v-for="(item, idx) in $t(
                    project.titre + '_challenges_learning'
                  )
                    .split(/\n|,|•|\r/)
                    .filter(Boolean)"
                  :key="'challenge-' + idx"
                >
                  <span class="list-bullet">•</span>
                  <span class="list-text">{{ item.trim() }}</span>
                </li>
              </ul>
            </div>
            <div class="card-accent learning-accent-challenge"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Links Section -->
    <section class="links-zone">
      <div class="section-intro">
        <span class="section-number">05</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t("ProjectLink") }}</span>
        </h2>
      </div>

      <div class="links-content">
        <div class="content-wrapper">
          <a
            :href="project.url"
            target="_blank"
            class="project-link github-link interactive-element"
          >
            <div class="link-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                />
              </svg>
            </div>
            <span>{{ $t("ProjectAccess") }}</span>
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- Error State -->
  <div v-else class="error-zone">
    <div class="error-content">
      <div class="error-card glass-card">
        <div class="error-icon">⚠️</div>
        <h2 class="error-title">Projet introuvable</h2>
        <p class="error-text">Le projet demandé n'a pas pu être trouvé.</p>
        <button
          class="error-button interactive-element"
          @click="$router.back()"
        >
          <span class="button-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M12 19L5 12L12 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>Retour à la liste des projets</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import projets from "@/datasource/projets.json";

export default {
  name: "ProjectDetails",
  setup() {
    const route = useRoute();
    const project = ref(null);

    // Utility functions
    const getSkillIcon = (lang) => {
      try {
        return require(`@/assets/skills/${lang}.svg`);
      } catch {
        return require("@/assets/skills/default.svg");
      }
    };

    const getTechIcon = (tech) => {
      try {
        return require(`@/assets/skills/${tech}.svg`);
      } catch {
        return require("@/assets/skills/default.svg");
      }
    };

    const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
        case "terminé":
        case "fini":
        case "finished":
          return "status-completed";
        case "in progress":
        case "en cours":
          return "status-progress";
        case "paused":
        case "en pause":
          return "status-paused";
        default:
          return "status-default";
      }
    };

    const getStatusIcon = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
        case "terminé":
        case "fini":
        case "finished":
          return "✅";
        case "in progress":
        case "en cours":
          return "🔄";
        case "paused":
        case "en pause":
          return "⏸️";
        default:
          return "📊";
      }
    };

    // Animation initialization
    const initAnimations = () => {
      nextTick(() => {
        // Observer pour les animations d'entrée
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
              }
            });
          },
          { threshold: 0.1 }
        );

        // Observer tous les éléments animables
        const elements = document.querySelectorAll(
          ".section-intro, .tech-item, .learning-card, .interactive-card"
        );
        elements.forEach((el) => observer.observe(el));
      });
    };

    // Component initialization
    onMounted(() => {
      const id = route.params.id;
      if (projets[id]) {
        project.value = projets[id];

        // Normalisation des données
        if (typeof project.value.technologies === "string") {
          project.value.technologies = project.value.technologies
            .replace(/[\]"]/g, "")
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean);
        }

        if (typeof project.value.language === "string") {
          project.value.language = project.value.language
            .replace(/[\]"]/g, "")
            .split(",")
            .map((lang) => lang.trim())
            .filter(Boolean);
        }

        initAnimations();
      }
    });

    return {
      project,
      getSkillIcon,
      getTechIcon,
      getStatusClass,
      getStatusIcon,
    };
  },
};
</script>

<style scoped>
/* ================================
   VARIABLES & BASE STYLES 
================================ */
.project-details-zone {
  background: var(--dark-bg);
  min-height: 100vh;
  padding-top: 20px;

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --background-accent-color: rgba(247, 37, 133, 0.1);
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
  --glass-bg: rgba(255, 255, 255, 0.02);
  --hover-transform: translateY(-10px);
  --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ================================
   NAVIGATION
================================ */
.back-navigation {
  padding: 0 5%;
  margin-top: 100px;
  margin-bottom: 40px;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  font-weight: 500;
}

.button-icon {
  display: flex;
  align-items: center;
}

/* ================================
   SECTIONS BASE PATTERN
================================ */
section {
  padding: 100px 5%;
}

.section-intro {
  text-align: center;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-intro.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  display: inline-block;
  color: var(--accent-color);
  background-color: var(--background-accent-color);
  border: var(--accent-color) solid 2px;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heading-main {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.heading-sub {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 400;
}

.body-text {
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

/* ================================
   INTERACTIVE ELEMENTS PATTERN
================================ */
.interactive-element {
  position: relative;
  padding: 15px 30px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  overflow: hidden;
  transition: var(--transition-smooth);
  cursor: pointer;
}

.interactive-element::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.interactive-element:hover {
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

.interactive-element:hover::before {
  left: 0;
}

/* ================================
   CARD PATTERN
================================ */
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.interactive-card {
  position: relative;
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-smooth);
  opacity: 0;
  transform: translateY(30px);
}

.interactive-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.interactive-card:hover {
  transform: var(--hover-transform);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  border-color: var(--accent-color);
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.interactive-card:hover .card-accent {
  transform: translateX(0);
}

/* ================================
   PROJECT HERO SECTION
================================ */
.project-hero-zone {
  padding: 60px 5% 100px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.project-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--primary-gradient);
  opacity: 0.1;
  border-radius: 20px;
  filter: blur(20px);
  z-index: 0;
}

.project-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  position: relative;
  z-index: 2;
  transition: var(--transition-smooth);
}

.project-image:hover {
  transform: scale(1.05);
}

.image-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid var(--accent-color);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.project-image-container:hover .image-ring {
  opacity: 0.6;
}

.project-meta-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.meta-badges {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
}

.category-badge {
  background: rgba(102, 126, 234, 0.1);
  color: var(--text-primary);
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.status-badge {
  border: 1px solid var(--border-color);
}

.status-completed {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.3);
}

.status-progress {
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  border-color: rgba(249, 115, 22, 0.3);
}

.status-paused {
  background: rgba(156, 163, 175, 0.1);
  color: #9ca3af;
  border-color: rgba(156, 163, 175, 0.3);
}

/* ================================
   DESCRIPTION SECTION
================================ */
.description-content {
  max-width: 1000px;
  margin: 0 auto;
}

.content-wrapper {
  text-align: center;
}

.description-text .body-text {
  font-size: 1.2rem;
  line-height: 2;
}

/* ================================
   TECHNOLOGIES SECTION
================================ */
.technologies-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.tech-category {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.title-icon {
  font-size: 1.8rem;
}

.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 25px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  min-height: 120px;
  justify-content: center;
}

.tech-icon-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-icon {
  transform: scale(1.2);
  filter: drop-shadow(0 0 10px var(--accent-color));
}

.tech-name {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
}

.tech-accent-language {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.tech-accent-framework {
  background: linear-gradient(90deg, #f72585 0%, #b5179e 100%);
}

/* ================================
   LEARNING SECTION
================================ */
.learning-content {
  max-width: 1200px;
  margin: 0 auto;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.learning-card {
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 200px;
}

.learning-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.learning-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.technical-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--text-primary);
}

.soft-icon {
  background: linear-gradient(135deg, #f72585 0%, #b5179e 100%);
  color: var(--text-primary);
}

.challenge-icon {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: var(--dark-bg);
}

.learning-title {
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.learning-list-container {
  flex: 1;
}

.learning-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.learning-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.list-bullet {
  color: var(--accent-color);
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

.list-text {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
}

.learning-accent-technical {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.learning-accent-soft {
  background: linear-gradient(90deg, #f72585 0%, #b5179e 100%);
}

.learning-accent-challenge {
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
}

/* ================================
   LINKS SECTION
================================ */
.links-zone .section-intro.in-view {
  margin-bottom: 10px;
}

.links-content {
  max-width: 600px;
  margin: 0 auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background: var(--glass-bg);
  border: 2px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.project-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #333 0%, #000 100%);
  transition: left 0.3s ease;
  z-index: -1;
}

.project-link:hover {
  border-color: var(--text-primary);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.project-link:hover::before {
  left: 0;
}

.link-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ================================
   ERROR STATE
================================ */
.error-zone {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 5%;
  background: var(--dark-bg);
}

.error-content {
  max-width: 500px;
  width: 100%;
}

.error-card {
  text-align: center;
  padding: 60px 40px;
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 30px;
  display: block;
}

.error-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  /* Fallback pour les navigateurs qui ne supportent pas background-clip */
  color: var(--text-primary);
}

.error-text {
  margin-bottom: 40px;
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.error-button {
  position: relative;
  padding: 15px 30px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  overflow: hidden;
  transition: var(--transition-smooth);
  cursor: pointer;
  font-size: 1rem;
}

.error-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.error-button:hover {
  border-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.error-button:hover::before {
  left: 0;
}

.error-button:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.error-button .button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ================================
   RESPONSIVE DESIGN
================================ */

/* Large screens */
@media (max-width: 1200px) {
  .hero-grid {
    gap: 60px;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 20px;
  }
}

/* Medium screens */
@media (max-width: 968px) {
  section {
    padding: 80px 5%;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }

  .section-intro {
    margin-bottom: 60px;
  }

  .technologies-content {
    gap: 50px;
  }

  .learning-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .meta-badges {
    justify-content: center;
  }
}

/* Small screens */
@media (max-width: 768px) {
  section {
    padding: 60px 5%;
  }

  .project-details-zone {
    padding-top: 10px;
  }

  .back-navigation {
    margin-bottom: 20px;
  }

  .section-intro {
    margin-bottom: 40px;
  }

  .heading-main {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
  }

  .heading-sub {
    font-size: 1rem;
  }

  .glass-card {
    padding: 30px 25px;
    border-radius: 15px;
  }

  .interactive-card {
    padding: 25px 20px;
    border-radius: 15px;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }

  .tech-item {
    min-height: 100px;
    gap: 12px;
  }

  .tech-icon-container {
    width: 40px;
    height: 40px;
  }

  .tech-icon {
    width: 32px;
    height: 32px;
  }

  .learning-grid {
    grid-template-columns: 1fr;
  }

  .learning-card {
    gap: 20px;
  }

  .learning-icon {
    width: 40px;
    height: 40px;
  }

  .learning-title {
    font-size: 1.1rem;
  }

  .error-card {
    padding: 40px 25px;
  }

  .error-button {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  section {
    padding: 50px 5%;
  }

  .interactive-element {
    padding: 12px 24px;
    font-size: 0.95rem;
  }

  .section-number {
    padding: 6px 12px;
    font-size: 12px;
  }

  .badge {
    padding: 8px 16px;
    font-size: 13px;
  }

  .meta-badges {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .category-title {
    font-size: 1.3rem;
    text-align: center;
  }

  .title-icon {
    font-size: 1.5rem;
  }

  .project-link {
    padding: 15px 30px;
    font-size: 1rem;
  }

  .error-card {
    padding: 40px 25px;
  }

  .error-icon {
    font-size: 3rem;
  }

  .error-card {
    padding: 30px 20px;
  }
}

/* ================================
   ANIMATIONS & EFFECTS
================================ */

/* Page enter animation */
.project-details-zone {
  animation: pageEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation for tech items */
.tech-item:nth-child(1) {
  animation-delay: 0.1s;
}
.tech-item:nth-child(2) {
  animation-delay: 0.2s;
}
.tech-item:nth-child(3) {
  animation-delay: 0.3s;
}
.tech-item:nth-child(4) {
  animation-delay: 0.4s;
}
.tech-item:nth-child(5) {
  animation-delay: 0.5s;
}
.tech-item:nth-child(6) {
  animation-delay: 0.6s;
}

/* Staggered animation for learning cards */
.learning-card:nth-child(1) {
  animation-delay: 0.1s;
}
.learning-card:nth-child(2) {
  animation-delay: 0.3s;
}
.learning-card:nth-child(3) {
  animation-delay: 0.5s;
}

/* Hover effect for project image */
.project-image-container {
  transition: var(--transition-smooth);
}

.project-image-container:hover {
  transform: translateY(-5px);
}

/* Focus states for accessibility */
.interactive-element:focus,
.interactive-card:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.project-link:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 4px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .interactive-card:hover,
  .interactive-element:hover,
  .project-link:hover {
    transform: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .project-details-zone {
    --border-color: rgba(102, 126, 234, 0.6);
    --glass-bg: rgba(255, 255, 255, 0.1);
  }

  .interactive-card,
  .glass-card {
    border-width: 2px;
  }
}
</style>
