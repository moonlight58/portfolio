<template>
  <div class="project-details-container" v-if="project">
    <!-- Back Button -->
    <div class="back-button-container">
      <button class="back-button" @click="$router.back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        Retour
      </button>
    </div>

    <!-- Project Header -->
    <div class="project-header hero-section">
      <div class="project-image-container">
        <div class="image-glow"></div>
        <img :src="require(`@/assets/images/${project.image}`)" :alt="project.titre" class="project-image" />
        <div class="image-ring"></div>
      </div>
      <div class="project-info">
        <h1 class="project-title">
          <span class="gradient-text">{{ project.titre }}</span>
        </h1>
        <div class="project-meta">
          <div class="badge category-badge">
            <span class="badge-icon">📂</span>
            {{ $t(project.categorie) }}
          </div>
          <div class="badge status-badge" :class="getStatusClass(project.status)">
            <span class="badge-icon">{{ getStatusIcon(project.status) }}</span>
            {{ $t(project.status) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="project-content">
      <!-- Description Section -->
      <section class="content-section glass-card">
        <h2 class="section-title">
          <span class="title-icon">📋</span>
          <span class="gradient-text">Description du projet</span>
        </h2>
        <div class="description-content">
          <p>{{ $t(project.titre + '_description') }}</p>
        </div>
      </section>

      <!-- Languages Section -->
      <section v-if="project.language && project.language.length" class="content-section glass-card">
        <h2 class="section-title">
          <span class="title-icon">💻</span>
          <span class="gradient-text">Langages utilisés</span>
        </h2>
        <div class="tech-grid">
          <div v-for="(lang, index) in project.language" :key="index" class="tech-card language-card">
            <div class="tech-icon-container">
              <img :src="getSkillIcon(lang)" :alt="lang" class="tech-icon" />
            </div>
            <span class="tech-name">{{ lang }}</span>
            <div class="tech-glow language-glow"></div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section v-if="project.technologies && project.technologies.length" class="content-section glass-card">
        <h2 class="section-title">
          <span class="title-icon">🛠️</span>
          <span class="gradient-text">Technologies & Frameworks</span>
        </h2>
        <div class="tech-grid">
          <div v-for="(tech, index) in project.technologies" :key="index" class="tech-card technology-card">
            <div class="tech-icon-container">
              <img :src="getTechIcon(tech)" :alt="tech" class="tech-icon" />
            </div>
            <span class="tech-name">{{ tech }}</span>
            <div class="tech-glow tech-glow-effect"></div>
          </div>
        </div>
      </section>

      <!-- Learning Section -->
      <section class="content-section glass-card">
        <h2 class="section-title">
          <span class="title-icon">🎓</span>
          <span class="gradient-text">Ce que j'ai appris avec ce projet</span>
        </h2>
        <div class="learning-container">
          <div class="learning-card"
            v-if="$t(project.titre + '_technical_learning') && $t(project.titre + '_technical_learning') !== project.titre + '_technical_learning'">
            <div class="learning-icon technical-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="learning-content">
              <h3>Compétences techniques</h3>
              <ul class="learning-list">
                <li v-for="(item, idx) in $t(project.titre + '_technical_learning').split(/\n|,|•|\r/).filter(Boolean)"
                  :key="'tech-' + idx">
                  <span class="list-bullet">•</span>
                  {{ item.trim() }}
                </li>
              </ul>
            </div>
            <div class="learning-glow technical-glow"></div>
          </div>

          <div class="learning-card"
            v-if="$t(project.titre + '_soft_learning') && $t(project.titre + '_soft_learning') !== project.titre + '_soft_learning'">
            <div class="learning-icon soft-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="learning-content">
              <h3>Compétences humaines</h3>
              <ul class="learning-list">
                <li v-for="(item, idx) in $t(project.titre + '_soft_learning').split(/\n|,|•|\r/).filter(Boolean)"
                  :key="'soft-' + idx">
                  <span class="list-bullet">•</span>
                  {{ item.trim() }}
                </li>
              </ul>
            </div>
            <div class="learning-glow soft-glow"></div>
          </div>

          <div class="learning-card"
            v-if="$t(project.titre + '_challenges_learning') && $t(project.titre + '_challenges_learning') !== project.titre + '_challenges_learning'">
            <div class="learning-icon challenge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="learning-content">
              <h3>Défis relevés</h3>
              <ul class="learning-list">
                <li v-for="(item, idx) in $t(project.titre + '_challenges_learning').split(/\n|,|•|\r/).filter(Boolean)"
                  :key="'challenge-' + idx">
                  <span class="list-bullet">•</span>
                  {{ item.trim() }}
                </li>
              </ul>
            </div>
            <div class="learning-glow challenge-glow"></div>
          </div>
        </div>
      </section>

      <!-- GitHub Link Section -->
      <section class="content-section glass-card">
        <h2 class="section-title">
          <span class="title-icon">🔗</span>
          <span class="gradient-text">Liens du projet</span>
        </h2>
        <div class="links-container">
          <a :href="project.url" target="_blank" class="project-link github-link">
            <div class="link-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
              </svg>
            </div>
            <span>Voir sur GitHub</span>
            <div class="link-glow github-glow"></div>
          </a>
        </div>
      </section>
    </div>
  </div>
  <div v-else class="error-container">
    <div class="error-card glass-card">
      <div class="error-icon">❌</div>
      <h2 class="gradient-text">Projet introuvable</h2>
      <p>Le projet demandé n'a pas pu être trouvé.</p>
      <button class="back-button error-back" @click="$router.back()">
        Retour à la liste des projets
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import projets from "@/datasource/projets.json";

export default {
  setup() {
    const route = useRoute();
    const project = ref(null);

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
        case 'completed':
        case 'terminé':
        case 'fini':
        case 'finished':
          return 'status-completed';
        case 'in progress':
        case 'en cours':
          return 'status-progress';
        case 'paused':
        case 'en pause':
          return 'status-paused';
        default:
          return 'status-default';
      }
    };

    const getStatusIcon = (status) => {
      switch (status.toLowerCase()) {
        case 'completed':
        case 'terminé':
        case 'fini':
        case 'finished':
          return '✅';
        case 'in progress':
        case 'en cours':
          return '🔄';
        case 'paused':
        case 'en pause':
          return '⏸️';
        default:
          return '📊';
      }
    };

    const initAnimations = () => {
      nextTick(() => {
        // Animation d'entrée progressive
        const sections = document.querySelectorAll('.content-section');
        sections.forEach((section, index) => {
          setTimeout(() => {
            section.classList.add('visible');
          }, index * 100);
        });

        // Animation hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
          setTimeout(() => {
            heroSection.classList.add('visible');
          }, 300);
        }
      });
    };

    onMounted(() => {
      const id = route.params.id;
      if (projets[id]) {
        project.value = projets[id];

        // Conversion des technologies en tableau si ce n'est pas déjà le cas
        if (typeof project.value.technologies === "string") {
          project.value.technologies = project.value.technologies
            .replace(/[\]"]/g, "")
            .split(",")
            .map((tech) => tech.trim());
        }
        if (typeof project.value.language === "string") {
          project.value.language = project.value.language
            .replace(/[\]"]/g, "")
            .split(",")
            .map((lang) => lang.trim());
        }

        initAnimations();
      }
    });

    return {
      project,
      getSkillIcon,
      getTechIcon,
      getStatusClass,
      getStatusIcon
    };
  },
};
</script>

<style scoped>
/* Variables CSS pour le style glassmorphism */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  --blur-strength: 20px;
  --transition-smooth: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Container principal */
.project-details-container {
  font-family: "N27", sans-serif;
  margin-top: 7rem;
  padding: 1rem 2rem;
  color: var(--text-primary);
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(118, 75, 162, 0.08) 25%,
      rgba(240, 147, 251, 0.05) 50%,
      rgba(75, 172, 254, 0.08) 75%,
      rgba(0, 242, 254, 0.05) 100%);
  min-height: 100vh;
  position: relative;
}

.project-details-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -2;
}

/* Back Button */
.back-button-container {
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.1s forwards;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
}

.back-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0.5;
}

.back-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s ease;
}

.back-button:hover::after {
  left: 100%;
}

.back-button:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.back-button svg {
  transition: transform 0.3s ease;
}

.back-button:hover svg {
  transform: translateX(-3px);
}

/* Hero Section - Project Header */
.hero-section {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: var(--transition-smooth);
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.project-header {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: var(--transition-fast);
}

.project-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-gradient);
  opacity: 0.8;
}

.project-header:hover {
  transform: translateY(-8px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* Avatar/Image avec effets */
.project-image-container {
  position: relative;
  flex-shrink: 0;
}

.project-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 3;
  transition: var(--transition-fast);
  position: relative;
}

.image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--primary-gradient);
  border-radius: 20px;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

.image-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid transparent;
  background: var(--accent-gradient);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 2;
}

.project-image-container:hover .image-ring {
  opacity: 0.6;
  animation: rotate 8s linear infinite;
}

@keyframes pulse-glow {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.6;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Texte avec gradient */
.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: var(--text-primary);
  /* Fallback */
}

@supports not (-webkit-background-clip: text) {
  .gradient-text {
    color: var(--text-primary);
  }
}

.project-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 2rem 0;
  line-height: 1.1;
}

.project-title .gradient-text,
.section-title .gradient-text {
  background: linear-gradient(135deg, #3d94e0 0%, #37c0c7 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
}

/* Système de badges */
.project-meta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  font-weight: 600;
  transition: var(--transition-fast);
  position: relative;
  overflow: hidden;
}

.badge-icon {
  font-size: 1.2rem;
}

.category-badge {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.status-completed {
  background: rgba(76, 175, 80, 0.15);
  border: 1px solid rgba(76, 175, 80, 0.3);
  color: #a5d6a7;
}

.status-progress {
  background: rgba(255, 193, 7, 0.15);
  border: 1px solid rgba(255, 193, 7, 0.3);
  color: #fff3c4;
}

.status-paused {
  background: rgba(255, 87, 34, 0.15);
  border: 1px solid rgba(255, 87, 34, 0.3);
  color: #ffccbc;
}

.status-default {
  background: rgba(158, 158, 158, 0.15);
  border: 1px solid rgba(158, 158, 158, 0.3);
  color: #e0e0e0;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

/* Cartes glassmorphism */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
  transition: var(--transition-fast);
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0.5;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

/* Content Sections */
.project-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  padding: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: var(--transition-smooth);
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-section:nth-child(1) {
  transition-delay: 0.1s;
}

.content-section:nth-child(2) {
  transition-delay: 0.2s;
}

.content-section:nth-child(3) {
  transition-delay: 0.3s;
}

.content-section:nth-child(4) {
  transition-delay: 0.4s;
}

.content-section:nth-child(5) {
  transition-delay: 0.5s;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2.5rem;
}

/* Description */
.description-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: justify;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
}

.tech-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  transition: var(--transition-fast);
  overflow: hidden;
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.language-card::before {
  background: var(--primary-gradient);
}

.technology-card::before {
  background: var(--accent-gradient);
}

.tech-card:hover::before {
  opacity: 1;
}

.tech-icon-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
}

.tech-card:hover .tech-icon-container {
  transform: scale(1.1) rotate(5deg);
}

.tech-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.2));
  transition: var(--transition-fast);
}

.tech-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

.tech-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.25);
}

/* Effets glow spécialisés pour les cartes tech */
.tech-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.language-glow {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
}

.tech-glow-effect {
  background: radial-gradient(circle, rgba(75, 172, 254, 0.3) 0%, transparent 70%);
}

.tech-card:hover .tech-glow {
  opacity: 1;
}

/* Section Learning - Cartes d'apprentissage */
.learning-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.learning-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  transition: var(--transition-fast);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.learning-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.learning-card:nth-child(1)::before {
  background: var(--primary-gradient);
}

.learning-card:nth-child(2)::before {
  background: var(--secondary-gradient);
}

.learning-card:nth-child(3)::before {
  background: var(--accent-gradient);
}

.learning-card:hover::before {
  opacity: 1;
}

.learning-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow:
    0 25px 70px rgba(102, 126, 234, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.learning-card:hover .learning-content {
  transform: translateY(-2px);
}

.learning-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;

}

.technical-icon {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.soft-icon {
  background: linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.2) 100%);
  border: 1px solid rgba(240, 147, 251, 0.3);
  color: #f8c4d8;
}

.challenge-icon {
  background: linear-gradient(135deg, rgba(75, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
  border: 1px solid rgba(75, 172, 254, 0.3);
  color: #b3e5fc;
}

.learning-card:hover .learning-icon {
  transform: scale(1.1) rotate(5deg);
}

.learning-content {
  flex: 1;
  transition: transform 0.3s ease;
}

.learning-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: var(--text-primary);
}

.learning-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.learning-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.list-bullet {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
  transition: var(--transition-fast);
}

.learning-list li:hover {
  color: var(--text-primary);
}

.learning-list li:hover .list-bullet {
  transform: scale(1.2);
  color: #667eea;
}

/* Effets glow pour les cartes d'apprentissage */
.learning-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  filter: blur(40px);
  z-index: -1;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.technical-glow {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
}

.soft-glow {
  background: radial-gradient(circle, rgba(240, 147, 251, 0.2) 0%, transparent 70%);
}

.challenge-glow {
  background: radial-gradient(circle, rgba(75, 172, 254, 0.2) 0%, transparent 70%);
}

.learning-card:hover .learning-glow {
  opacity: 1;
}

/* Section Liens - Links Container */
.links-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition-fast);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
}

.github-link {
  background: rgba(36, 41, 46, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--text-primary);
  box-shadow: 0 10px 40px rgba(36, 41, 46, 0.1);
}

.link-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
}

.project-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(36, 41, 46, 0.3);
  border-color: rgba(255, 255, 255, 0.25);
}

.project-link:hover .link-icon {
  transform: scale(1.1) rotate(-5deg);
}

/* Effet de balayage lumineux pour les liens */
.project-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.project-link:hover::after {
  left: 100%;
}

/* Glow effect spécialisé pour GitHub */
.link-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.github-glow {
  background: radial-gradient(circle, rgba(36, 41, 46, 0.3) 0%, transparent 70%);
}

.project-link:hover .link-glow {
  opacity: 1;
}

/* Error Container - Page d'erreur */
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
}

.error-card {
  text-align: center;
  padding: 4rem;
  max-width: 500px;
  width: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid rgba(255, 87, 34, 0.2);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(255, 87, 34, 0.1);
}

.error-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #ff5722 0%, #ff9800 100%);
  opacity: 0.8;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

.error-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
}

.error-card p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0 0 3rem 0;
  line-height: 1.6;
}

.error-back {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 1.2rem 2rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
}

.error-back:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
}

/* Animations d'entrée globales */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .project-details-container {
    max-width: 100%;
    padding: 0 1.5rem;
  }

  .project-header {
    gap: 2rem;
    padding: 3rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .learning-container {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

@media (max-width: 900px) {
  .project-header {
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }

  .project-image {
    width: 160px;
    height: 120px;
  }

  .project-title {
    font-size: 2.8rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .learning-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .project-details-container {
    margin-top: 6rem;
    padding: 0 1rem;
  }

  .project-header {
    padding: 2.5rem 1.5rem;
    border-radius: 24px;
  }

  .content-section {
    padding: 2rem 1.5rem;
  }

  .project-title {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-meta {
    flex-direction: column;
    gap: 1rem;
  }

  .badge {
    padding: 0.8rem 1.5rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
  }

  .tech-card {
    padding: 1.5rem;
  }

  .tech-icon {
    width: 60px;
    height: 60px;
  }

  .learning-card {
    padding: 2rem;
  }

  .links-container {
    gap: 1rem;
  }

  .project-link {
    padding: 1.2rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .project-details-container {
    margin-top: 5rem;
    padding: 0 0.5rem;
  }

  .back-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .project-header {
    padding: 2rem 1rem;
    gap: 2rem;
  }

  .project-image {
    width: 140px;
    height: 100px;
  }

  .project-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .content-section {
    padding: 1.5rem 1rem;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .tech-card {
    padding: 1rem;
  }

  .tech-icon {
    width: 50px;
    height: 50px;
  }

  .tech-name {
    font-size: 0.9rem;
  }

  .learning-card {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .learning-icon {
    width: 50px;
    height: 50px;
  }

  .learning-content h3 {
    font-size: 1.4rem;
  }

  .learning-list li {
    font-size: 1rem;
  }

  .project-link {
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }

  .error-card {
    padding: 2.5rem 1.5rem;
  }

  .error-card h2 {
    font-size: 2rem;
  }
}

/* Effets pour les appareils avec préférence de mouvement réduit */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .tech-card:hover .tech-icon-container,
  .learning-card:hover .learning-icon,
  .project-link:hover .link-icon {
    transform: none;
  }

  .hero-section.visible {
    transform: none;
  }
}

/* Amélioration de l'accessibilité - Focus visible */
.back-button:focus-visible,
.project-link:focus-visible,
.error-back:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 4px;
}

/* Print styles */
@media print {
  .project-details-container {
    background: white;
    color: black;
  }

  .glass-card,
  .tech-card,
  .learning-card {
    background: white;
    border: 1px solid #ccc;
    box-shadow: none;
  }

  .gradient-text {
    color: black !important;
    -webkit-text-fill-color: black !important;
  }
}
</style>