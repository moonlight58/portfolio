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
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".project-card").forEach((project) => {
    project.classList.remove("animate");
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
});
</script>

<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">Mes Projets</h1>
        <p class="subtitle">Découvrez mes réalisations personnelles et universitaires</p>
      </div>
      
      <div class="button-container">
        <button
          @click="fetchGithubRepos('personal'); toggleButton('personal');"
          :class="{ active: activeButton === 'personal' }"
          class="project-type-btn"
          :disabled="isLoading"
        >
          <span class="btn-icon">👤</span>
          <span>Personnel</span>
        </button>
        <button
          @click="fetchGithubRepos('uni'); toggleButton('uni');"
          :class="{ active: activeButton === 'uni' }"
          class="project-type-btn"
          :disabled="isLoading"
        >
          <span class="btn-icon">🎓</span>
          <span>Université</span>
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-section">
      <div class="loading-spinner"></div>
      <p class="loading-text">Chargement des projets...</p>
    </div>

    <!-- Projects Grid -->
    <div v-else class="projects-section">
      <div class="projects-grid">
        <div
          class="project-card"
          v-for="(project, index) in projects.filter((p) => p.description)"
          :key="project.id"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div class="project-image-container">
            <img
              :src="getProjectImage(project.name)"
              :alt="`Image du projet ${project.name}`"
              class="project-image"
            />
            <div class="image-overlay" @click="$router.push('/project-details/' + project.name)">
              <div class="overlay-content">
                <div class="overlay-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
              
              <a 
                :href="project.html_url" 
                target="_blank" 
                class="project-link"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"/>
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
      <div class="github-profile-card">
        <div class="github-profile-content">
          <div class="github-profile-header">
            <div class="github-avatar">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"/>
              </svg>
            </div>
            <div class="github-info">
              <h3 class="github-title">Profil GitHub</h3>
              <p class="github-subtitle">Explorez tous mes projets et contributions</p>
            </div>
          </div>
          
          <a 
            :href="`https://github.com/${username}`" 
            target="_blank" 
            class="github-profile-link"
            rel="noopener noreferrer"
          >
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
  margin-top: 10rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: #fff;
}

/* Hero Section */
.hero-section {
  margin-bottom: 4rem;
}

.hero-content {
  text-align: center;
  margin-bottom: 3rem;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #ccc;
  margin: 0;
  opacity: 0.8;
  font-style: italic;
}

/* Button Container */
.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.project-type-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: "N27", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 12px;
  color: #90a8ff;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.project-type-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.project-type-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.project-type-btn:hover:not(:disabled)::before {
  left: 100%;
}

.project-type-btn:hover:not(:disabled) {
  background: rgba(144, 168, 255, 0.2);
  border-color: #90a8ff;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.2);
}

.project-type-btn.active {
  background: #90a8ff;
  color: #1a1a1a;
  border-color: #90a8ff;
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.project-type-btn:hover:not(:disabled) .btn-icon {
  transform: scale(1.1);
}

/* Loading Section */
.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(144, 168, 255, 0.1);
  border-top: 3px solid #90a8ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: #90a8ff;
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
}

/* Projects Section */
.projects-section {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card::before {
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

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(144, 168, 255, 0.3);
  box-shadow: 0 16px 64px rgba(144, 168, 255, 0.15);
}

.project-card:hover::before {
  opacity: 1;
}

/* Project Image */
.project-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
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
  background: linear-gradient(
    45deg,
    rgba(144, 168, 255, 0.9),
    rgba(144, 168, 255, 0.7)
  );
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
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
  font-weight: 600;
  font-size: 1.1rem;
  transform: translateY(10px);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.overlay-icon {
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  line-height: 1.3;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.language-badge {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
  border: 1px solid rgba(255, 107, 107, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.project-stats-inline {
  display: flex;
  align-items: center;
}

.stars-count {
  color: #ffd700;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.project-description {
  color: #ccc;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
  flex-grow: 1;
}

/* Project Footer */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(144, 168, 255, 0.1);
}

.project-stats {
  display: flex;
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 0.85rem;
}

.stat-icon {
  font-size: 0.9rem;
}

.stat-value {
  font-weight: 500;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 168, 255, 0.1);
  border: 1px solid rgba(144, 168, 255, 0.3);
  border-radius: 8px;
  color: #90a8ff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.project-link:hover::before {
  left: 100%;
}

.project-link:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.2);
}

/* GitHub Profile Section */
.github-profile-section {
  margin-top: 4rem;
}

.github-profile-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
}

.github-profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.github-profile-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

.github-profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.github-avatar {
  background: rgba(144, 168, 255, 0.2);
  border-radius: 50%;
  padding: 1rem;
  color: #90a8ff;
  flex-shrink: 0;
}

.github-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.github-info h3 {
  color: #90a8ff;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.github-info p {
  color: #ccc;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}

.github-profile-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #90a8ff;
  color: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.github-profile-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.github-profile-link:hover::before {
  left: 100%;
}

.github-profile-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.4);
  background: #b8c8ff;
}

.github-username {
  opacity: 0.8;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .project-type-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .project-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .project-stats {
    justify-content: center;
  }

  .project-link {
    justify-content: center;
  }

  .github-profile-card {
    padding: 1.5rem;
  }

  .github-profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .github-info {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .project-content {
    padding: 1rem;
  }

  .github-profile-card {
    padding: 1rem;
  }

  .github-profile-link {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-meta {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .project-type-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .project-image-container {
    height: 150px;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>