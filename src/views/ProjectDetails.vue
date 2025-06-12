<template>
  <div class="project-details-container" v-if="project">
    <!-- Back Button -->
    <div class="back-button-container">
      <button class="back-button" @click="$router.push('/')">
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
        Retour
      </button>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <div class="project-image-container">
        <img
          :src="require(`@/assets/images/${project.image}`)"
          :alt="project.titre"
          class="project-image"
        />
        <div class="image-overlay"></div>
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
        <h2>📋 Description du projet</h2>
        <div class="description-card">
          <p>{{ $t(project.titre + '_description') }}</p>
        </div>
      </section>

      <!-- Languages Section -->
      <section
        v-if="project.language && project.language.length"
        class="content-section"
      >
        <h2>💻 Langages utilisés</h2>
        <div class="tech-grid">
          <div
            v-for="(lang, index) in project.language"
            :key="index"
            class="tech-card language-card"
          >
            <div class="tech-icon-container">
              <img :src="getSkillIcon(lang)" :alt="lang" class="tech-icon" />
            </div>
            <span class="tech-name">{{ lang }}</span>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section
        v-if="project.technologies && project.technologies.length"
        class="content-section"
      >
        <h2>🛠️ Technologies & Frameworks</h2>
        <div class="tech-grid">
          <div
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="tech-card technology-card"
          >
            <div class="tech-icon-container">
              <img :src="getTechIcon(tech)" :alt="tech" class="tech-icon" />
            </div>
            <span class="tech-name">{{ tech }}</span>
          </div>
        </div>
      </section>

      <!-- GitHub Link Section -->
      <section class="content-section">
        <h2>🔗 Liens du projet</h2>
        <div class="links-container">
          <a :href="project.url" target="_blank" class="project-link github-link">
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
  margin-top: 7rem;
  max-width: 800px;
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
  gap: 0.5rem;
  background: rgba(144, 168, 255, 0.1);
  border: 1px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: rgba(144, 168, 255, 0.2);
  border-color: #90a8ff;
  transform: translateX(-2px);
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
  margin-bottom: 3rem;
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.project-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
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
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.1);
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(144, 168, 255, 0.1), transparent);
  border-radius: 12px;
  pointer-events: none;
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
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.category-badge,
.status-badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-badge {
  background: rgba(144, 168, 255, 0.2);
  color: #90a8ff;
  border: 1px solid rgba(144, 168, 255, 0.3);
}

.status-badge {
  border: 1px solid;
}

.status-completed {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border-color: rgba(76, 175, 80, 0.3);
}

.status-progress {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  border-color: rgba(255, 193, 7, 0.3);
}

.status-paused {
  background: rgba(255, 87, 34, 0.2);
  color: #ff5722;
  border-color: rgba(255, 87, 34, 0.3);
}

.status-default {
  background: rgba(158, 158, 158, 0.2);
  color: #9e9e9e;
  border-color: rgba(158, 158, 158, 0.3);
}

/* Content Sections */
.project-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  position: relative;
}

.content-section h2 {
  color: #90a8ff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(144, 168, 255, 0.2);
}

/* Description Card */
.description-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
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
  gap: 1rem;
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
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-4px);
  border-color: #90a8ff;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.2);
}

.tech-card:hover::before {
  opacity: 1;
}

.language-card {
  color: #ff6b6b;
}

.language-card:hover {
  border-color: #ff6b6b;
  box-shadow: 0 8px 32px rgba(255, 107, 107, 0.2);
}

.technology-card {
  color: #4ecdc4;
}

.technology-card:hover {
  border-color: #4ecdc4;
  box-shadow: 0 8px 32px rgba(78, 205, 196, 0.2);
}

.tech-icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-card:hover .tech-icon-container {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.tech-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.tech-name {
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  color: #fff;
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
  background: rgba(33, 41, 60, 0.8);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.github-link:hover {
  background: #21293c;
  border-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(33, 41, 60, 0.4);
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
    gap: 1.5rem;
  }

  .project-image {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-meta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .links-container {
    justify-content: center;
  }

  .content-section h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.75rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .tech-card {
    padding: 1rem;
  }

  .tech-icon-container {
    width: 50px;
    height: 50px;
  }

  .tech-icon {
    width: 30px;
    height: 30px;
  }
}
</style>