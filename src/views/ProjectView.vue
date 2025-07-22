<script setup>
import { ref, onMounted } from "vue";
const username = ref("");
const projects = ref([]);
const activeButton = ref("");
const isLoading = ref(false);

async function fetchGithubRepos(type) {
  isLoading.value = true;
  username.value = type === "personal" ? "moonlight58" : "grothlin-iut90";
  const url = `https://api.github.com/users/${username.value}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching repositories: ${response.status} ${response.statusText}`
      );
    }
    const repos = await response.json();
    projects.value = repos;

    // Réinitialiser l'Intersection Observer après le chargement des nouveaux projets
    setTimeout(() => {
      setupIntersectionObserver();
    }, 100);
  } catch (error) {
    console.error(error.message);
    projects.value = [];
  } finally {
    isLoading.value = false;
  }
}

function toggleButton(type) {
  activeButton.value = type;
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".project-card").forEach((project) => {
    project.classList.remove("visible");
    observer.observe(project);
  });
}

function getProjectImage(name) {
  try {
    return require(`@/assets/images/${name}.png`);
  } catch {
    try {
      return require(`@/assets/images/${name}.jpg`);
    } catch {
      return require('@/assets/images/default.png');
    }
  }
}

onMounted(() => {
  fetchGithubRepos("personal");
  toggleButton("personal");

  // Animation d'entrée pour la hero section
  setTimeout(() => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.classList.add('visible');
    }
  }, 100);
});
</script>

<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-card">
        <div class="hero-content">
          <h1 class="hero-title">
            Mes <span class="gradient-text">Projets</span>
          </h1>
          <p class="hero-subtitle">Découvrez mes réalisations personnelles et universitaires</p>
        </div>

        <div class="button-container">
          <button @click="fetchGithubRepos('personal'); toggleButton('personal');"
            :class="{ active: activeButton === 'personal' }" class="project-type-btn glass-btn" :disabled="isLoading">
            <div class="btn-icon">👤</div>
            <span>Personnel</span>
          </button>
          <button @click="fetchGithubRepos('uni'); toggleButton('uni');" :class="{ active: activeButton === 'uni' }"
            class="project-type-btn glass-btn" :disabled="isLoading">
            <div class="btn-icon">🎓</div>
            <span>Université</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-section">
      <div class="loading-card glass-card">
        <div class="loading-spinner"></div>
        <p class="loading-text">Chargement des projets...</p>
      </div>
    </div>

    <!-- Projects Grid -->
    <div v-else class="projects-section">
      <div class="projects-grid">
        <div class="project-card glass-card" v-for="(project, index) in projects.filter((p) => p.description)"
          :key="project.id" :style="{ 'transition-delay': `${index * 0.1}s` }">
          <div class="project-glow"></div>

          <div class="project-image-container">
            <img :src="getProjectImage(project.name)" :alt="`Image du projet ${project.name}`" class="project-image" />
            <div class="image-overlay" @click="$router.push('/project-details/' + project.name)">
              <div class="overlay-content">
                <div class="overlay-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span class="view-text">Voir le projet</span>
              </div>
            </div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.name }}</h3>
              <div class="project-meta">
                <span v-if="project.language" class="language-badge">
                  {{ project.language }}
                </span>
                <div class="project-stats-inline">
                  <span class="stars-count">
                    ⭐ {{ project.stargazers_count || 0 }}
                  </span>
                </div>
              </div>
            </div>

            <p class="project-description">{{ project.description }}</p>

            <div class="project-footer">
              <div class="project-stats">
                <div class="stat-item">
                  <span class="stat-icon">🍴</span>
                  <span class="stat-value">{{ project.forks_count || 0 }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">👁️</span>
                  <span class="stat-value">{{ project.watchers_count || 0 }}</span>
                </div>
              </div>

              <a :href="project.html_url" target="_blank" class="project-link glass-btn" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GitHub Profile Section -->
    <div class="github-profile-section" v-if="username && !isLoading">
      <div class="github-profile-card glass-card">
        <div class="profile-glow"></div>
        <div class="github-profile-content">
          <div class="github-profile-header">
            <div class="github-avatar">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
              </svg>
            </div>
            <div class="github-info">
              <h3 class="github-title">Profil GitHub</h3>
              <p class="github-subtitle">Explorez tous mes projets et contributions</p>
            </div>
          </div>

          <a :href="`https://github.com/${username}`" target="_blank" class="github-profile-link glass-btn"
            rel="noopener noreferrer">
            <span>Voir le profil complet</span>
            <span class="github-username">@{{ username }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: "N27", sans-serif;
  margin-top: 8rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: var(--text-primary);

  /* Arrière-plan avec gradient multi-couleurs selon la doc */
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.02) 0%,
      rgba(118, 75, 162, 0.03) 25%,
      rgba(240, 147, 251, 0.02) 50%,
      rgba(75, 172, 254, 0.03) 75%,
      rgba(0, 242, 254, 0.02) 100%);
  border-radius: 40px;
  position: relative;

  /* Variables CSS selon la documentation */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  --blur-strength: 20px;
}

/* Hero Section avec animation d'entrée progressive */
.hero-section {
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.4s ease;
}

/* Ligne colorée en haut selon la doc - CORRIGÉ */
.hero-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.8;
}

.hero-card:hover {
  transform: translateY(-8px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(-8px);
  }

  50% {
    transform: translateY(-18px);
  }
}

.hero-content {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  color: var(--text-primary);
}

/* Texte avec gradient selon la documentation - CORRIGÉ */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-title .gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  font-size: 3.5rem;
  font-family: "Titillium Web", sans-serif;
}

/* Support navigateurs anciens - AMÉLIORÉ */
@supports not (-webkit-background-clip: text) {
  .gradient-text {
    color: #667eea;
    background: none;
    -webkit-text-fill-color: initial;
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
  font-weight: 400;
}

/* Boutons avec effet glassmorphism */
.button-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.glass-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "N27", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

/* Effet de balayage lumineux selon la doc */
.glass-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.1) 50%,
      transparent 100%);
  transition: left 0.6s ease;
}

.glass-btn:hover::before {
  left: 100%;
}

.glass-btn:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.glass-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* CORRIGÉ - Bouton actif avec gradient fonctionnel */
.glass-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--text-primary);
  border-color: transparent;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
  position: relative;
}

/* Assurer que le texte reste visible sur le gradient */
.glass-btn.active * {
  position: relative;
  z-index: 1;
}

.btn-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-btn:hover .btn-icon {
  transform: scale(1.1) rotate(5deg);
}

/* Section de chargement */
.loading-section {
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
}

.loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  text-align: center;
  max-width: 400px;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid var(--glass-border);
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 2rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

/* Grille de projets */
.projects-section {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
}

/* Cartes de projet avec glassmorphism */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
}

/* Accent lumineux en haut - CORRIGÉ */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.glass-card:hover::before {
  opacity: 1;
}

.project-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

/* Glow effect pour les projets */
.project-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.project-card:hover .project-glow {
  opacity: 1;
}

/* Image de projet */
.project-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
      rgba(102, 126, 234, 0.9),
      rgba(118, 75, 162, 0.8));
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(5px);
  cursor: pointer;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.overlay-content {
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  transform: translateY(15px);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.overlay-icon {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

/* Contenu de projet */
.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: calc(100% - 220px);
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.language-badge {
  background: rgba(240, 147, 251, 0.15);
  border: 1px solid rgba(240, 147, 251, 0.3);
  color: #f093fb;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.stars-count {
  color: #ffd700;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  flex-grow: 1;
}

/* Footer de projet */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
}

.project-stats {
  display: flex;
  gap: 1.5rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
}

.stat-icon {
  font-size: 1rem;
}

.project-link {
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
}

/* Section profil GitHub */
.github-profile-section {
  margin-top: 4rem;
}

.github-profile-card {
  position: relative;
  padding: 3rem;
}

/* Glow pour la carte GitHub */
.profile-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(75, 172, 254, 0.1) 0%, transparent 70%);
  opacity: 0;
  filter: blur(40px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.github-profile-card:hover .profile-glow {
  opacity: 1;
}

.github-profile-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  text-align: center;
}

.github-profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.github-avatar {
  background: rgba(75, 172, 254, 0.2);
  border: 2px solid rgba(75, 172, 254, 0.3);
  border-radius: 50%;
  padding: 1.5rem;
  color: #4facfe;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.github-profile-card:hover .github-avatar {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(75, 172, 254, 0.3);
}

.github-info h3 {
  color: var(--text-primary);
  font-size: 1.6rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.github-info p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* CORRIGÉ - Lien GitHub avec gradient fonctionnel */
.github-profile-link {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: var(--text-primary);
  padding: 1.2rem 2.5rem;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 8px 32px rgba(75, 172, 254, 0.3);
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

/* Assurer que le contenu reste visible */
.github-profile-link * {
  position: relative;
  z-index: 1;
}

.github-username {
  opacity: 0.9;
  font-weight: 500;
  font-size: 0.95rem;
}

/* Design responsive */
@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {

  /* Container principal */
  .container {
    padding: 0 1.5rem;
    margin-top: 6rem;
    margin-bottom: 4rem;
  }

  /* Hero Section adaptée */
  .hero-card {
    padding: 2.5rem 1.5rem;
    border-radius: 24px;
  }

  .hero-title {
    font-size: 2.8rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  /* Boutons empilés verticalement */
  .button-container {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .glass-btn {
    justify-content: center;
    padding: 1rem 1.5rem;
    font-size: 0.95rem;
  }

  .btn-icon {
    font-size: 1.1rem;
    padding: 0.4rem;
  }

  /* Grille projets sur mobile */
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    border-radius: 20px;
  }

  .project-image-container {
    height: 180px;
    border-radius: 20px 20px 0 0;
  }

  .project-content {
    padding: 1.5rem;
    gap: 1rem;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .project-footer {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
    text-align: center;
  }

  .project-stats {
    justify-content: center;
    gap: 2rem;
  }

  /* GitHub profile section */
  .github-profile-card {
    padding: 2rem 1.5rem;
  }

  .github-profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .github-info h3 {
    font-size: 1.4rem;
  }

  .github-info p {
    font-size: 1rem;
  }

  /* Loading section */
  .loading-card {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
  }

  .loading-text {
    font-size: 1.1rem;
  }
}

/* Petit mobile (480px et moins) */
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
    margin-top: 5rem;
    border-radius: 24px;
  }

  /* Hero ultra-compact */
  .hero-card {
    padding: 2rem 1rem;
    border-radius: 20px;
  }

  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 0.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-content {
    margin-bottom: 2rem;
  }

  /* Boutons plus compacts */
  .glass-btn {
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
    gap: 0.75rem;
  }

  .btn-icon {
    font-size: 1rem;
    padding: 0.3rem;
  }

  /* Projets très compacts */
  .project-card {
    border-radius: 16px;
  }

  .project-image-container {
    height: 150px;
    border-radius: 16px 16px 0 0;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-title {
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .project-description {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .language-badge {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 10px;
  }

  .project-link {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  /* GitHub profile très compact */
  .github-profile-card {
    padding: 1.5rem 1rem;
  }

  .github-avatar {
    padding: 1rem;
  }

  .github-avatar svg {
    width: 36px;
    height: 36px;
  }

  .github-info h3 {
    font-size: 1.2rem;
  }

  .github-info p {
    font-size: 0.95rem;
  }

  .github-profile-link {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  /* Loading très compact */
  .loading-card {
    padding: 1.5rem 1rem;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
  }

  .loading-text {
    font-size: 1rem;
  }
}

/* Très petit mobile (360px et moins) */
@media (max-width: 360px) {
  .hero-title {
    font-size: 2rem;
    line-height: 1.3;
  }

  .hero-card {
    padding: 1.5rem 0.75rem;
  }

  .project-content {
    padding: 1rem;
  }

  .github-profile-card {
    padding: 1.25rem 0.75rem;
  }

  .glass-btn {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
}

/* Améliorations pour l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero-section {
    opacity: 1;
    transform: none;
  }

  .project-card {
    opacity: 1;
    transform: none;
  }

  .glass-btn::before,
  .project-glow,
  .profile-glow {
    display: none;
  }
}

/* Focus visible pour l'accessibilité clavier */
.glass-btn:focus-visible {
  outline: 2px solid rgba(102, 126, 234, 0.8);
  outline-offset: 2px;
}

.project-link:focus-visible {
  outline: 2px solid rgba(75, 172, 254, 0.8);
  outline-offset: 2px;
}

.github-profile-link:focus-visible {
  outline: 2px solid rgba(75, 172, 254, 0.8);
  outline-offset: 2px;
}

/* Mode sombre optimisé pour les petits écrans */
@media (max-width: 768px) and (prefers-color-scheme: dark) {
  .glass-card {
    border-color: rgba(255, 255, 255, 0.15);
  }

  .text-secondary {
    color: rgba(255, 255, 255, 0.85);
  }

  .glass-btn {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
  }
}

/* Optimisation pour les écrans haute densité */
@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
  .project-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }

  .loading-spinner {
    border-width: 2px;
  }
}

/* Landscape mobile spécifique */
@media (max-width: 768px) and (orientation: landscape) {
  .hero-card {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 2.4rem;
  }

  .button-container {
    flex-direction: row;
    justify-content: center;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

/* Print styles (bonus) */
@media print {
  .container {
    background: none;
    color: #000;
  }

  .glass-card,
  .hero-card,
  .project-card {
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: none;
    backdrop-filter: none;
  }

  .glass-btn,
  .project-link,
  .github-profile-link {
    background: #f0f0f0;
    border: 1px solid #ccc;
    color: #000;
  }

  .project-glow,
  .profile-glow,
  .glass-btn::before {
    display: none;
  }

  .gradient-text {
    color: #333 !important;
    -webkit-text-fill-color: #333;
  }
}
</style>