<template>
  <div class="projects-zone" :class="{ loaded: isVisible }">
    <section class="hero-section">
      <div class="section-intro">
        <span class="section-number">{{ $t("Badge.Project") }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t("ProjectsPage.Hero.Title") }}</span>
          <span class="heading-sub">{{
            $t("ProjectsPage.Hero.Subtitle")
          }}</span>
        </h2>
      </div>

      <div class="hero-content">
        <div class="project-selector">
          <div class="selector-intro">
            <h3>{{ $t("ProjectsPage.Hero.CategoryTitle") }}</h3>
            <p>{{ $t("ProjectsPage.Hero.CategorySubtitle") }}</p>
          </div>

          <div class="selector-buttons">
            <button
              @click="
                fetchGithubRepos('personal');
                toggleButton('personal');
              "
              :class="['selector-btn', { active: activeButton === 'personal' }]"
              :disabled="isLoading"
            >
              <div class="btn-icon">👤</div>
              <div class="btn-content">
                <span class="btn-label">{{
                  $t("ProjectsPage.Hero.PersonalBtn")
                }}</span>
                <span class="btn-description">{{
                  $t("ProjectsPage.Hero.PersonalDesc")
                }}</span>
              </div>
              <div class="btn-accent"></div>
            </button>

            <button
              @click="
                fetchGithubRepos('uni');
                toggleButton('uni');
              "
              :class="['selector-btn', { active: activeButton === 'uni' }]"
              :disabled="isLoading"
            >
              <div class="btn-icon">🎓</div>
              <div class="btn-content">
                <span class="btn-label">{{
                  $t("ProjectsPage.Hero.UniBtn")
                }}</span>
                <span class="btn-description">{{
                  $t("ProjectsPage.Hero.UniDesc")
                }}</span>
              </div>
              <div class="btn-accent"></div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section v-if="isLoading" class="loading-zone">
      <div class="loading-card">
        <div class="loading-animation">
          <div class="loading-spinner"></div>
          <div class="loading-particles">
            <span
              v-for="i in 6"
              :key="i"
              class="particle"
              :style="{ '--delay': i * 0.1 + 's' }"
            ></span>
          </div>
        </div>
        <h3>{{ $t("ProjectsPage.Loading.Title") }}</h3>
        <p>{{ $t("ProjectsPage.Loading.Subtitle") }}</p>
      </div>
    </section>

    <section v-if="!isLoading && projects.length > 0" class="stats-zone">
      <div class="stats-container">
        <div class="stats-intro">
          <h3>{{ $t("ProjectsPage.Stats.Title") }}</h3>
          <p>
            {{ $t("ProjectsPage.Stats.Intro") }}
            {{
              activeButton === "personal"
                ? $t("ProjectsPage.Stats.Personal")
                : $t("ProjectsPage.Stats.Uni")
            }}
          </p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div class="stat-info">
              <span class="stat-number">{{ filteredProjects.length }}</span>
              <span class="stat-label">{{
                $t("ProjectsPage.Stats.Projects")
              }}</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-info">
              <span class="stat-number">{{ totalStars }}</span>
              <span class="stat-label">{{
                $t("ProjectsPage.Stats.Stars")
              }}</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">🍴</div>
            <div class="stat-info">
              <span class="stat-number">{{ totalForks }}</span>
              <span class="stat-label">{{
                $t("ProjectsPage.Stats.Forks")
              }}</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">💻</div>
            <div class="stat-info">
              <span class="stat-number">{{ uniqueLanguages.length }}</span>
              <span class="stat-label">{{
                $t("ProjectsPage.Stats.Languages")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="!isLoading" class="projects-grid-zone">
      <div class="projects-container">
        <div v-if="filteredProjects.length > 0" class="projects-grid">
          <article
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="project-card"
            :style="{ '--animation-delay': index * 0.1 + 's' }"
          >
            <div class="project-glow"></div>

            <div class="project-image-section">
              <div class="project-image-wrapper">
                <img
                  :src="getProjectImage(project.name)"
                  :alt="`Aperçu du projet ${project.name}`"
                  class="project-image"
                  loading="lazy"
                />
                <div class="image-overlay">
                  <button
                    @click="$router.push('/project-details/' + project.name)"
                    class="view-project-btn"
                  >
                    <span class="view-icon">🔍</span>
                    <span>{{ $t("ProjectsPage.Grid.ViewProject") }}</span>
                  </button>
                </div>
              </div>

              <div v-if="project.language" class="language-badge">
                <span
                  class="language-dot"
                  :style="{
                    backgroundColor: getLanguageColor(project.language),
                  }"
                ></span>
                <span class="language-name">{{ project.language }}</span>
              </div>
            </div>

            <div class="project-content">
              <header class="project-header">
                <h3 class="project-title">
                  {{ formatProjectName(project.name) }}
                </h3>
                <div class="project-status">
                  <span
                    class="status-indicator"
                    :class="getProjectStatus(project)"
                  ></span>
                  <span class="status-text">{{
                    $t("ProjectsPage.Status." + getProjectStatus(project))
                  }}</span>
                </div>
              </header>

              <p class="project-description">
                {{ getLocalizedDescription(project.description) || $t("ProjectsPage.Grid.NoDescription") }}
              </p>

              <div class="project-metrics">
                <div class="metric-item">
                  <span class="metric-icon">⭐</span>
                  <span class="metric-value">{{
                    project.stargazers_count || 0
                  }}</span>
                </div>
                <div class="metric-item">
                  <span class="metric-icon">🍴</span>
                  <span class="metric-value">{{
                    project.forks_count || 0
                  }}</span>
                </div>
                <div class="metric-item">
                  <span class="metric-icon">👁️</span>
                  <span class="metric-value">{{
                    project.watchers_count || 0
                  }}</span>
                </div>
                <div class="metric-item">
                  <span class="metric-icon">📝</span>
                  <span class="metric-value">{{
                    formatFileSize(project.size)
                  }}</span>
                </div>
              </div>

              <footer class="project-footer">
                <div class="project-dates">
                  <span class="date-info">
                    <span class="date-icon">📅</span>
                    <span>{{ formatDate(project.updated_at) }}</span>
                  </span>
                </div>

                <div class="project-actions">
                  <a
                    :href="project.html_url"
                    target="_blank"
                    class="action-btn primary-btn"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <button
                    v-if="project.homepage"
                    @click="window.open(project.homepage, '_blank')"
                    class="action-btn secondary-btn"
                  >
                    <span class="action-icon">🔗</span>
                    <span>Demo</span>
                  </button>
                </div>
              </footer>
            </div>
          </article>
        </div>

        <div v-else class="empty-state">
          <div class="empty-content">
            <div class="empty-icon">📂</div>
            <h3>{{ $t("ProjectsPage.Grid.EmptyTitle") }}</h3>
            <p>
              {{
                activeButton === "personal"
                  ? $t("ProjectsPage.Grid.EmptyPersonal")
                  : $t("ProjectsPage.Grid.EmptyUni")
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="username && !isLoading && projects.length > 0"
      class="github-profile-zone"
    >
      <div class="github-profile-card">
        <div class="profile-glow"></div>
        <div class="profile-content">
          <div class="profile-header">
            <div class="github-avatar">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                />
              </svg>
            </div>
            <div class="profile-info">
              <h3>{{ $t("ProjectsPage.Github.Title") }}</h3>
              <p>{{ $t("ProjectsPage.Github.Subtitle") }}</p>
              <div class="profile-stats">
                <span>@{{ username }}</span>
                <span>•</span>
                <span>{{ projects.length }} {{ $t("ProjectsPage.Github.Repos") }}</span>
              </div>
            </div>
          </div>

          <a
            :href="`https://github.com/${username}`"
            target="_blank"
            class="profile-link"
            rel="noopener noreferrer"
          >
            <span>{{ $t("ProjectsPage.Github.Link") }}</span>
            <div class="link-bg"></div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const username = ref("");
const projects = ref([]);
const activeButton = ref("");
const isLoading = ref(false);
const isVisible = ref(false);

function getLocalizedDescription(description) {
  if (!description) return '';
  
  // Get current locale from the component instance
  const currentLocale = instance?.proxy?.$i18n?.locale || 'fr';
  // console.log(this.$i18n.locale)
  
  // Check if description contains language markers
  if (description.includes('FR:') || description.includes('EN:')) {
    const frMatch = description.match(/FR:\s*(.+?)(?=\s+EN:|$)/i);
    const enMatch = description.match(/EN:\s*(.+?)(?=\s+FR:|$)/i);
    
    if (currentLocale.toLowerCase() === 'fr' && frMatch) {
      return frMatch[1].trim();
    } else if (currentLocale.toLowerCase() === 'en' && enMatch) {
      return enMatch[1].trim();
    }
    
    if (frMatch) return frMatch[1].trim();
    if (enMatch) return enMatch[1].trim();
  }
  
  return description;
}

const filteredProjects = computed(() => {
  return projects.value.filter(
    (p) => p.description && p.description.trim() !== ""
  );
});

const totalStars = computed(() => {
  return filteredProjects.value.reduce(
    (sum, project) => sum + (project.stargazers_count || 0),
    0
  );
});

const totalForks = computed(() => {
  return filteredProjects.value.reduce(
    (sum, project) => sum + (project.forks_count || 0),
    0
  );
});

const uniqueLanguages = computed(() => {
  const languages = filteredProjects.value
    .map((p) => p.language)
    .filter((lang) => lang)
    .filter((lang, index, arr) => arr.indexOf(lang) === index);
  return languages;
});

async function fetchGithubRepos(type) {
  isLoading.value = true;
  username.value = type === "personal" ? "moonlight58" : "grothlin-iut90";
  try {
    const response = await fetch(
      `/.netlify/functions/github-proxy?username=${username.value}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const repos = await response.json();
    projects.value = repos;
    setupIntersectionObserver();
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
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".project-card").forEach((project) => {
    project.classList.remove("in-view");
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
      return require("@/assets/images/default.png");
    }
  }
}

function formatProjectName(name) {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 7) {
    return `Il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `Il y a ${weeks} semaine${weeks > 1 ? "s" : ""}`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Il y a ${months} mois`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `Il y a ${years} an${years > 1 ? "s" : ""}`;
  }
}

function formatFileSize(sizeInKB) {
  if (sizeInKB < 1024) {
    return `${sizeInKB} KB`;
  } else {
    return `${(sizeInKB / 1024).toFixed(1)} MB`;
  }
}

function getLanguageColor(language) {
  const colors = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Python: "#3776ab",
    Java: "#ed8b00",
    "C++": "#00599c",
    C: "#a8b9cc",
    HTML: "#e34c26",
    CSS: "#1572b6",
    Vue: "#4fc08d",
    React: "#61dafb",
    PHP: "#777bb4",
    Ruby: "#cc342d",
    Go: "#00add8",
    Rust: "#000000",
    Swift: "#fa7343",
    Kotlin: "#7f52ff",
  };
  return colors[language] || "#667eea";
}

function getProjectStatus(project) {
  const lastUpdate = new Date(project.updated_at);
  const now = new Date();
  const diffDays = (now - lastUpdate) / (1000 * 60 * 60 * 24);

  if (diffDays < 30) return "active";
  if (diffDays < 90) return "recent";
  return "stable";
}

onMounted(() => {
  fetchGithubRepos("personal");
  toggleButton("personal");

  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<style scoped>
/* Zone principale */
.projects-zone {
  background: var(--dark-bg);
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.8s ease;

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}

.projects-zone.loaded {
  opacity: 1;
}

/* Hero Section */
.hero-section {
  padding: 100px 5% 60px;
}

.section-intro {
  text-align: center;
  margin-bottom: 60px;
}

.section-number {
  display: inline-block;
  font-size: 1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-heading {
  text-align: center;
}

.heading-main {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 15px;
}

.heading-sub {
  display: block;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: var(--text-secondary);
  font-weight: 400;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.project-selector {
  text-align: center;
}

.selector-intro {
  margin-bottom: 40px;
}

.selector-intro h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.selector-intro p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.selector-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
}

.selector-btn {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
  overflow: hidden;
}

.selector-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
  border-color: var(--accent-color);
}

.selector-btn.active {
  background: rgba(102, 126, 234, 0.1);
  border-color: var(--accent-color);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.btn-icon {
  font-size: 2.5rem;
  min-width: 50px;
}

.btn-content {
  flex: 1;
}

.btn-label {
  display: block;
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.btn-description {
  display: block;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.btn-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-gradient);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.selector-btn:hover .btn-accent,
.selector-btn.active .btn-accent {
  transform: translateX(0);
}

/* Loading Zone */
.loading-zone {
  padding: 100px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  backdrop-filter: blur(10px);
  max-width: 400px;
}

.loading-animation {
  position: relative;
  margin-bottom: 30px;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-particles {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.particle {
  width: 8px;
  height: 8px;
  background: var(--accent-color);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
  animation-delay: var(--delay);
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.loading-card h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.loading-card p {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* Stats Zone */
.stats-zone {
  padding: 0 5% 60px;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-intro {
  text-align: center;
  margin-bottom: 40px;
}

.stats-intro h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.stats-intro p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
  border-color: var(--accent-color);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  display: block;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Projects Grid Zone */
.projects-grid-zone {
  padding: 0 5% 100px;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  transform: translateY(30px);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--accent-color);
}

.project-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 20px;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  filter: blur(10px);
}

.project-card:hover .project-glow {
  opacity: 0.3;
}

/* Project Image Section */
.project-image-section {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.view-project-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.view-project-btn:hover {
  background: var(--primary-gradient);
  border-color: transparent;
  transform: scale(1.05);
}

.view-icon {
  font-size: 1.1rem;
}

.language-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 6px 12px;
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 6px;
}

.language-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

/* Project Content */
.project-content {
  padding: 25px;
}

.project-header {
  margin-bottom: 15px;
}

.project-title {
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.3;
}

.project-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-indicator.active {
  background: #10b981;
  animation: pulse-green 2s infinite;
}

.status-indicator.recent {
  background: #f59e0b;
}

.status-indicator.stable {
  background: #6b7280;
}

@keyframes pulse-green {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.status-text {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
}

.project-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Project Metrics */
.project-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.metric-icon {
  font-size: 1rem;
}

.metric-value {
  font-weight: 500;
}

/* Project Footer */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.project-dates {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.date-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.date-icon {
  font-size: 0.9rem;
}

.project-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  cursor: pointer;
}

.primary-btn {
  background: var(--primary-gradient);
  border: none;
  color: white;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.secondary-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
}

.action-icon {
  font-size: 1rem;
}

/* Empty State */
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  text-align: center;
}

.empty-content {
  max-width: 400px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 25px;
  opacity: 0.5;
}

.empty-content h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.empty-content p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

/* GitHub Profile Zone */
.github-profile-zone {
  padding: 60px 5% 100px;
  background: linear-gradient(
    135deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
}

.github-profile-card {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.profile-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--accent-color) 60deg,
    transparent 120deg,
    var(--primary-gradient) 180deg,
    transparent 240deg,
    var(--accent-color) 300deg,
    transparent 360deg
  );
  opacity: 0.1;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.profile-content {
  position: relative;
  padding: 40px;
  z-index: 1;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
}

.github-avatar {
  width: 80px;
  height: 80px;
  background: var(--primary-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
}

.profile-info h3 {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.profile-info p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.profile-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.profile-link {
  position: relative;
  display: inline-block;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  padding: 15px 30px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.profile-link:hover {
  border-color: var(--accent-color);
  color: white;
}

.link-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.profile-link:hover .link-bg {
  left: 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-section {
    padding: 80px 5% 50px;
  }

  .heading-main {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .selector-buttons {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .selector-btn {
    padding: 25px;
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .btn-content {
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .profile-info {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 5% 40px;
  }

  .selector-btn {
    padding: 20px;
    gap: 12px;
  }

  .btn-icon {
    font-size: 2rem;
  }

  .btn-label {
    font-size: 1.1rem;
  }

  .btn-description {
    font-size: 0.9rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 20px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-content {
    padding: 20px;
  }

  .project-metrics {
    gap: 12px;
  }

  .project-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .project-actions {
    width: 100%;
    justify-content: space-between;
  }

  .profile-content {
    padding: 30px;
  }

  .github-avatar {
    width: 60px;
    height: 60px;
  }

  .profile-info h3 {
    font-size: 1.5rem;
  }

  .profile-info p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 50px 5% 30px;
  }

  .selector-btn {
    padding: 18px;
  }

  .loading-card {
    padding: 40px 25px;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
  }

  .project-metrics {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .profile-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--dark-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-gradient);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #667eea 0%, #f72585 100%);
}

/* Améliorations pour l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* États de focus pour l'accessibilité */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
</style>
