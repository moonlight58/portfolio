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
    <div class="project-header">
      <div class="project-image-container">
        <img :src="require(`@/assets/images/${project.image}`)" :alt="project.titre" class="project-image" />
        <div class="image-glow"></div>
      </div>
      <div class="project-info">
        <h1 class="project-title">{{ project.titre }}</h1>
        <div class="project-meta">
          <span class="category-badge">{{ $t(project.categorie) }}</span>
          <span class="status-badge" :class="getStatusClass(project.status)">
            {{ $t(project.status) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="project-content">
      <!-- Description Section -->
      <section class="content-section">
        <h2 class="section-title">📋 Description du projet</h2>
        <div class="description-card">
          <p>{{ $t(project.titre + '_description') }}</p>
        </div>
      </section>

      <!-- Languages Section -->
      <section v-if="project.language && project.language.length" class="content-section">
        <h2 class="section-title">💻 Langages utilisés</h2>
        <div class="tech-grid">
          <div v-for="(lang, index) in project.language" :key="index" class="tech-card language-card">
            <div class="tech-icon-container">
              <img :src="getSkillIcon(lang)" :alt="lang" class="tech-icon" />
            </div>
            <span class="tech-name">{{ lang }}</span>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section v-if="project.technologies && project.technologies.length" class="content-section">
        <h2 class="section-title">🛠️ Technologies & Frameworks</h2>
        <div class="tech-grid">
          <div v-for="(tech, index) in project.technologies" :key="index" class="tech-card technology-card">
            <div class="tech-icon-container">
              <img :src="getTechIcon(tech)" :alt="tech" class="tech-icon" />
            </div>
            <span class="tech-name">{{ tech }}</span>
          </div>
        </div>
      </section>

      <!-- Learning Section -->
      <section class="content-section">
        <h2 class="section-title">🎓 Ce que j'ai appris avec ce projet</h2>
        <div class="learning-container">
          <div class="learning-card" v-if="$t(project.titre + '_technical_learning') && $t(project.titre + '_technical_learning') !== project.titre + '_technical_learning'">
            <div class="learning-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="learning-content">
              <h3>Compétences techniques</h3>
              <ul class="learning-list">
                <li v-for="(item, idx) in $t(project.titre + '_technical_learning').split(/\n|,|•|\r/).filter(Boolean)" :key="'tech-'+idx">{{ item.trim() }}</li>
              </ul>
            </div>
          </div>

          <div class="learning-card" v-if="$t(project.titre + '_soft_learning') && $t(project.titre + '_soft_learning') !== project.titre + '_soft_learning'">
            <div class="learning-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="learning-content">
              <h3>Compétences humaines</h3>
              <ul class="learning-list">
                <li v-for="(item, idx) in $t(project.titre + '_soft_learning').split(/\n|,|•|\r/).filter(Boolean)" :key="'soft-'+idx">{{ item.trim() }}</li>
              </ul>
            </div>
          </div>

          <div class="learning-card" v-if="$t(project.titre + '_challenges_learning') && $t(project.titre + '_challenges_learning') !== project.titre + '_challenges_learning'">
            <div class="learning-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="learning-content">
              <h3>Défis relevés</h3>
              <ul class="learning-list">
                <li v-for="(item, idx) in $t(project.titre + '_challenges_learning').split(/\n|,|•|\r/).filter(Boolean)" :key="'challenge-'+idx">{{ item.trim() }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- GitHub Link Section -->
      <section class="content-section">
        <h2 class="section-title">🔗 Liens du projet</h2>
        <div class="links-container">
          <a :href="project.url" target="_blank" class="project-link github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
            </svg>
            Voir sur GitHub
          </a>
        </div>
      </section>
    </div>
  </div>
  <div v-else class="error-container">
    <div class="error-card">
      <h2>❌ Projet introuvable</h2>
      <p>Le projet demandé n'a pas pu être trouvé.</p>
      <button class="back-button" @click="$router.back()">
        Retour à la liste des projets
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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
      }
    });

    return { project, getSkillIcon, getTechIcon, getStatusClass };
  },
};
</script>

<style scoped>
.project-details-container {
  font-family: "N27", sans-serif;
  margin-top: 10rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  margin-bottom: 6rem;
  color: #fff;
}

/* Back Button */
.back-button-container {
  margin-bottom: 2rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.back-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.back-button:hover::before {
  left: 100%;
}

.back-button:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
}

.back-button:hover .contact-icon {
  filter: invert(1);
}

.back-button svg {
  transition: transform 0.3s ease;
}

.back-button:hover svg {
  transform: translateX(-2px);
}

/* Project Header */
.project-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
}

.project-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.project-image-container {
  position: relative;
  flex-shrink: 0;
}

.project-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 16px;
  border: 3px solid #90a8ff;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.05);
}

.image-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(144, 168, 255, 0.3), transparent);
  border-radius: 16px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image-container:hover .image-glow {
  opacity: 1;
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.category-badge,
.status-badge {
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid;
  transition: all 0.3s ease;
}

.category-badge {
  background: rgba(144, 168, 255, 0.1);
  color: #90a8ff;
  border-color: rgba(144, 168, 255, 0.3);
}

.category-badge:hover {
  background: rgba(144, 168, 255, 0.2);
  border-color: #90a8ff;
}

.status-completed {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border-color: rgba(76, 175, 80, 0.3);
}

.status-completed:hover {
  background: rgba(76, 175, 80, 0.2);
  border-color: #4caf50;
}

.status-progress {
  background: rgba(255, 193, 7, 0.1);
  color: #ffc107;
  border-color: rgba(255, 193, 7, 0.3);
}

.status-progress:hover {
  background: rgba(255, 193, 7, 0.2);
  border-color: #ffc107;
}

.status-paused {
  background: rgba(255, 87, 34, 0.1);
  color: #ff5722;
  border-color: rgba(255, 87, 34, 0.3);
}

.status-paused:hover {
  background: rgba(255, 87, 34, 0.2);
  border-color: #ff5722;
}

.status-default {
  background: rgba(158, 158, 158, 0.1);
  color: #9e9e9e;
  border-color: rgba(158, 158, 158, 0.3);
}

/* Content Sections */
.project-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.content-section {
  position: relative;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Description Card */
.description-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  text-align: justify;
}

.description-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.description-card p {
  margin: 0;
  line-height: 1.7;
  font-size: 1.1rem;
  color: #e0e0e0;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
}

.tech-card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-4px);
  border-color: rgba(144, 168, 255, 0.3);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

.tech-card:hover::before {
  opacity: 1;
}

.tech-icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tech-card:hover .tech-icon-container {
  transform: scale(1.1);
}

.tech-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tech-name {
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  color: #ccc;
}

/* Learning Section */
.learning-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.learning-card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.learning-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.learning-card:hover {
  transform: translateY(-2px);
  border-color: rgba(144, 168, 255, 0.3);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

.learning-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90a8ff;
  transition: all 0.3s ease;
}

.learning-card:hover .learning-icon {
  background: rgba(144, 168, 255, 0.2);
  border-color: #90a8ff;
  transform: scale(1.05);
}

.learning-content {
  flex: 1;
}

.learning-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #90a8ff;
  margin: 0 0 1rem 0;
}

.learning-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.7;
}

.learning-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.learning-list li::before {
  content: '•';
  color: #90a8ff;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: 0;
}

/* Links Section */
.links-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.github-link {
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
}

.github-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.github-link:hover::before {
  left: 100%;
}

.github-link:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
}

.github-link:hover svg {
  filter: invert(1);
}

/* Error Container */
.error-container {
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 2rem;
}

.error-card {
  background: rgba(255, 87, 34, 0.1);
  border: 1px solid rgba(255, 87, 34, 0.3);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  backdrop-filter: blur(10px);
  position: relative;
}

.error-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ff5722, transparent);
}

.error-card h2 {
  color: #ff5722;
  margin-bottom: 1rem;
}

.error-card p {
  color: #e0e0e0;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-details-container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .project-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }

  .project-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
  }

  .project-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .project-meta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .tech-card {
    padding: 1rem;
  }

  .tech-icon {
    width: 50px;
    height: 50px;
  }

  .tech-icon-container {
    width: 50px;
    height: 50px;
  }

  .learning-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
  }

  .learning-content h3 {
    font-size: 1.2rem;
  }

  .learning-list {
    font-size: 0.9rem;
  }

  .learning-list li {
    padding-left: 1.2rem;
  }

  .project-link {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .back-button {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  .description-card {
    padding: 1.5rem;
  }

  .description-card p {
    font-size: 1rem;
  }

  .project-content {
    gap: 3rem;
  }

  .content-section {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .project-details-container {
    margin-top: 3rem;
    padding: 0 0.5rem;
  }

  .project-header {
    padding: 1.5rem 1rem;
  }

  .project-title {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.8rem;
  }

  .tech-card {
    padding: 0.8rem;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
  }

  .tech-icon-container {
    width: 40px;
    height: 40px;
  }

  .tech-name {
    font-size: 0.8rem;
  }

  .learning-card {
    padding: 1rem;
  }

  .learning-icon {
    width: 50px;
    height: 50px;
  }

  .learning-content h3 {
    font-size: 1.1rem;
  }

  .learning-list {
    font-size: 0.85rem;
  }

  .category-badge,
  .status-badge {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .project-link {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  .back-button {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }

  .description-card {
    padding: 1rem;
  }

  .description-card p {
    font-size: 0.9rem;
  }

  .project-content {
    gap: 2rem;
  }
}

/* Additional hover effects and animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-section {
  animation: fadeInUp 0.6s ease-out;
}

.content-section:nth-child(2) {
  animation-delay: 0.1s;
}

.content-section:nth-child(3) {
  animation-delay: 0.2s;
}

.content-section:nth-child(4) {
  animation-delay: 0.3s;
}

.content-section:nth-child(5) {
  animation-delay: 0.4s;
}

.content-section:nth-child(6) {
  animation-delay: 0.5s;
}

/* Loading states */
.project-details-container {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

/* Scroll animations */
@media (prefers-reduced-motion: no-preference) {
  .tech-card {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .tech-card:nth-child(odd) {
    animation-delay: 0.1s;
  }

  .tech-card:nth-child(even) {
    animation-delay: 0.2s;
  }

  .learning-card {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .learning-card:nth-child(2) {
    animation-delay: 0.1s;
  }

  .learning-card:nth-child(3) {
    animation-delay: 0.2s;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Focus states for accessibility */
.back-button:focus,
.project-link:focus {
  outline: 2px solid #90a8ff;
  outline-offset: 2px;
}

/* Print styles */
@media print {
  .project-details-container {
    margin-top: 0;
    color: #000;
  }

  .back-button-container {
    display: none;
  }

  .project-header,
  .content-section,
  .description-card,
  .tech-card,
  .learning-card {
    background: none;
    border: 1px solid #ccc;
    backdrop-filter: none;
  }

  .project-link {
    text-decoration: underline;
  }
}
</style>