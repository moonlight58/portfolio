<template>
  <div class="skeleton-portfolio">
    <!-- Header minimaliste -->
    <header class="main-header">
      <div class="header-content">
        <div class="profile-minimal">
          <div class="avatar-container">
            <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="avatar" />
            <div class="avatar-border"></div>
          </div>
          <div class="identity">
            <h1 class="name">Gaël Röthlin</h1>
            <p class="title">{{ $t("HomeTitle") }}</p>
          </div>
        </div>
        <div class="intro-line">
          <p>{{ $t("BodyPart1") }}, BUT<span class="accent">*</span>, {{ $t("BodyPart2") }}</p>
          <small><span class="accent">*</span>({{ $t("Precision") }})</small>
        </div>
      </div>
    </header>

    <!-- Grid principal -->
    <main class="main-grid">
      <!-- Section À propos -->
      <section class="about-section">
        <div class="section-border">
          <h2 class="section-title">À propos</h2>
          <div class="content-block">
            <p>{{ $t("Description") }}</p>
            <div class="social-minimal">
              <a href="https://www.instagram.com/osiris._25" target="_blank" class="social-link">
                @osiris._25
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Projets (Placeholders) -->
      <section class="projects-section">
        <div class="section-border">
          <h2 class="section-title">Projets</h2>
          <div class="projects-grid">
            <div class="project-card" v-for="n in 4" :key="n">
              <div class="project-header">
                <div class="project-dot"></div>
                <span class="project-status">En cours</span>
              </div>
              <h3 class="project-name">Projet {{ n }}</h3>
              <p class="project-desc">Description du projet {{ n }}</p>
              <div class="project-tech">
                <span class="tech-tag" v-for="tech in ['Vue.js', 'CSS', 'JS']" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Stage (Template) -->
      <section class="internship-section">
        <div class="section-border">
          <h2 class="section-title">{{ $t('Internship') }}</h2>
          <div class="internship-timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 class="internship-title">Stage de développement</h3>
                <p class="internship-company">Entreprise • 2024</p>
                <p class="internship-desc">Mission de développement web et création d'applications.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 class="internship-title">Projet personnel</h3>
                <p class="internship-company">Freelance • 2023</p>
                <p class="internship-desc">Développement de solutions web sur mesure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Compétences -->
      <section class="skills-section">
        <div class="section-border">
          <h2 class="section-title">{{ $t("Skills") }}</h2>
          <div class="skills-categories">
            <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
              <h3 class="category-name">{{ $t(skillType) }}</h3>
              <div class="skills-list">
                <div class="skill-item" v-for="(language, langIndex) in skills[skillType].language" :key="langIndex"
                  @click="redirectToUrl(language.url)">
                  <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" class="skill-icon" />
                  <span class="skill-name">{{ language.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Pourquoi ce portfolio -->
      <section class="why-section">
        <div class="section-border">
          <h2 class="section-title">{{ $t("WhyPortfolio") }}</h2>
          <div class="content-block">
            <p>{{ $t("WhyPortfolioContent") }}</p>
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section class="contact-section">
        <div class="section-border">
          <h2 class="section-title">Contact</h2>
          <div class="contact-grid">
            <a href="mailto:gael.rothlin@proton.me" class="contact-item">
              <span class="contact-label">Email</span>
              <span class="contact-value">gael.rothlin@proton.me</span>
            </a>
            <a href="https://www.instagram.com/osiris._25" target="_blank" class="contact-item">
              <span class="contact-label">Instagram</span>
              <span class="contact-value">@osiris._25</span>
            </a>
            <a href="https://github.com/moonlight58" target="_blank" class="contact-item">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">moonlight58</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer minimaliste -->
    <footer class="main-footer">
      <div class="footer-line">
        <span>© 2025 Gaël Röthlin</span>
        <span class="accent">·</span>
        <span>Portfolio</span>
      </div>
    </footer>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

export default {
  name: "SkeletonPortfolio",
  data() {
    return {
      skills: skills,
    };
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.warn("No URL provided");
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

.skeleton-portfolio {
  font-family: "Inter", sans-serif;
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  min-width: 99vw;
  line-height: 1.5;
}

/* Header */
.main-header {
  padding: 4rem 2rem 6rem;
  border-bottom: 1px solid #1a1a1a;
  max-width: 1200px;
  margin: 0 auto;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.profile-minimal {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2);
}

.avatar-border {
  position: absolute;
  top: -2px;
  left: -2px;
  width: 84px;
  height: 84px;
  border: 1px solid #333333;
  border-radius: 50%;
  pointer-events: none;
}

.identity {
  flex: 1;
}

.name {
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.title {
  font-size: 1rem;
  color: #888888;
  margin: 0;
  font-weight: 400;
}

.intro-line {
  max-width: 600px;
}

.intro-line p {
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
  color: #cccccc;
}

.intro-line small {
  font-size: 0.9rem;
  color: #666666;
}

.accent {
  color: #ffffff;
  font-weight: 500;
}

/* Grid principal */
.main-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: grid;
  gap: 6rem;
}

.about-section {
  margin-top: 2rem;
}

/* Sections communes */
.section-border {
  border: 1px solid #1a1a1a;
  padding: 3rem;
  transition: border-color 0.3s ease;
}

.section-border:hover {
  border-color: #333333;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 2rem;
  color: #ffffff;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 1px;
  background-color: #333333;
}

/* Section À propos */
.content-block p {
  color: #cccccc;
  margin: 0 0 1.5rem;
  line-height: 1.6;
}

.social-minimal {
  margin-top: 2rem;
}

.social-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.social-link:hover {
  border-bottom-color: #333333;
}

/* Section Projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  border: 1px solid #1a1a1a;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  border-color: #333333;
  background-color: #111111;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-dot {
  width: 8px;
  height: 8px;
  background-color: #333333;
  border-radius: 50%;
}

.project-status {
  font-size: 0.8rem;
  color: #666666;
}

.project-name {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.project-desc {
  color: #888888;
  margin: 0 0 1.5rem;
  font-size: 0.9rem;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.75rem;
  color: #666666;
  border: 1px solid #1a1a1a;
  padding: 0.25rem 0.5rem;
  background-color: transparent;
}

/* Section Stage */
.internship-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border: 1px solid #333333;
  border-radius: 50%;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.internship-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.internship-company {
  color: #666666;
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
}

.internship-desc {
  color: #888888;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Section Compétences */
.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.skill-category {
  border: 1px solid #1a1a1a;
  padding: 2rem;
}

.category-name {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 1.5rem;
  color: #cccccc;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skills-categories:hover .skill-icon {
  filter: grayscale(100%) opacity(0.8);
  transition: filter 0.3s;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-item:hover {
  border-color: #1a1a1a;
  background-color: #111111;
}

.skill-icon {
  width: 32px;
  height: 32px;
  filter: grayscale(0%) opacity(1);
  transition: filter 0.3s ease;
}

.skill-item:hover .skill-icon {
  filter: grayscale(0%) opacity(1);
}

.skill-name {
  font-size: 0.8rem;
  color: #888888;
  text-align: center;
}

/* Section Contact */
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #1a1a1a;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.contact-item:hover {
  padding-left: 1rem;
  background-color: #111111;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-label {
  color: #666666;
  font-size: 0.9rem;
}

.contact-value {
  color: #ffffff;
  font-weight: 500;
}

/* Footer */
.main-footer {
  border-top: 1px solid #1a1a1a;
  padding: 2rem;
  text-align: center;
}

.footer-line {
  font-size: 0.8rem;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .main-header {
    padding: 2rem 1rem 4rem;
  }

  .main-grid {
    padding: 0 1rem 2rem;
    gap: 4rem;
  }

  .section-border {
    padding: 2rem 1.5rem;
  }

  .profile-minimal {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .name {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }

  .contact-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .avatar {
    width: 60px;
    height: 60px;
  }

  .avatar-border {
    width: 64px;
    height: 64px;
    top: -2px;
    left: -2px;
  }

  .name {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }

  .skill-icon {
    width: 24px;
    height: 24px;
  }
}

/* Animations subtiles */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-border {
  animation: fadeIn 0.6s ease-out;
}

/* Focus states pour l'accessibilité */
.skill-item:focus,
.contact-item:focus,
.social-link:focus {
  outline: 1px solid #333333;
  outline-offset: 2px;
}

/* Sélection de texte */
::selection {
  background: #333333;
  color: #ffffff;
}
</style>