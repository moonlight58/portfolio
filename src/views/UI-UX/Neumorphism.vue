<template>
  <div class="neuro-container">
    <NeumorphismNavBar />
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-card">
        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-image" />
            <div class="profile-ring"></div>
          </div>
          <div class="profile-content">
            <h1 class="profile-name">Gaël Röthlin</h1>
            <p class="profile-title">{{ $t("HomeTitle") }}</p>
            <div class="profile-divider"></div>
            <p class="profile-description">{{ $t("BodyPart1") }}, BUT<span class="warning-note">*</span></p>
            <div class="warning-section">
              <span class="warning-badge">{{ $t("BodyPart2") }}</span>
              <p class="warning-note">*{{ $t("Precision") }}</p>
            </div>
            <p class="profile-description">{{ $t("Description") }}</p>
          </div>
        </div>
        
        <div class="social-section">
          <a href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer" class="social-btn instagram-btn">
            <img src="@/assets/instagram.svg" alt="Instagram" class="social-icon" />
            <span>@osiris._25</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="content-section">
      <div class="section-card">
        <div class="section-header">
          <h2 class="section-title">{{ $t("Projects") }}</h2>
          <p class="section-subtitle">{{ $t("ProjectContent") }}</p>
        </div>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.id" class="project-card">
            <div class="project-image">
              <div class="project-icon-wrapper">
                <div class="project-icon"></div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="content-section">
      <div class="section-card">
        <div class="section-header">
          <h2 class="section-title">{{ $t("Skills") }}</h2>
          <p class="section-subtitle">Compétences techniques et outils</p>
        </div>
        <div class="skills-grid">
          <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
            <h3 class="category-title">{{ $t(skillType) }}</h3>
            <div class="skills-row">
              <div class="skill-item" v-for="(language, langIndex) in skills[skillType].language" :key="langIndex" @click="redirectToUrl(language.url)">
                <div class="skill-icon-wrapper">
                  <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" class="skill-icon" />
                </div>
                <span class="skill-name">{{ language.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="content-section">
      <div class="section-card">
        <div class="section-header">
          <h2 class="section-title">{{ $t("WhyPortfolio") }}</h2>
        </div>
        <div class="about-content">
          <p class="about-text">{{ $t("WhyPortfolioContent") }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-card">
        <h2 class="contact-title">Contact</h2>
        <p class="contact-subtitle">{{ $t("Contact") }}</p>
        <div class="contact-grid">
          <a href="mailto:gael.rothlin@proton.me" target="_blank" rel="noopener noreferrer" class="contact-item">
            <div class="contact-icon-wrapper">
              <img src="@/assets/email.svg" alt="Email" class="contact-icon" />
            </div>
            <span class="contact-label">Email</span>
          </a>
          <a href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer" class="contact-item">
            <div class="contact-icon-wrapper">
              <img src="@/assets/instagram.svg" alt="Instagram" class="contact-icon" />
            </div>
            <span class="contact-label">Instagram</span>
          </a>
          <a href="https://github.com/moonlight58" target="_blank" rel="noopener noreferrer" class="contact-item">
            <div class="contact-icon-wrapper">
              <img src="@/assets/github.svg" alt="GitHub" class="contact-icon" />
            </div>
            <span class="contact-label">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

import NeumorphismNavBar from '@/components/NeumorphismNavBar.vue';

export default {
  name: "HomeView",
  components: {
    NeumorphismNavBar
  },
  data() {
    return {
      skills: skills,
      projects: [
        {
          id: 1,
          title: "Portfolio Multi-thèmes",
          description: "Site portfolio personnel avec trois thèmes distincts : Neumorphism, Ready or Not, et Minimaliste",
          technologies: ["Vue.js", "CSS3", "JavaScript"]
        },
        {
          id: 2,
          title: "E-commerce Platform",
          description: "Application de commerce électronique moderne avec Vue.js et Node.js",
          technologies: ["Vue.js", "Node.js", "MongoDB"]
        },
        {
          id: 3,
          title: "Task Management App",
          description: "Application de gestion de tâches collaborative avec temps réel",
          technologies: ["Vue.js", "Socket.io", "Express"]
        },
        {
          id: 4,
          title: "Weather Dashboard",
          description: "Dashboard météo avec géolocalisation et prévisions",
          technologies: ["JavaScript", "API REST", "Chart.js"]
        }
      ],
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
}

.neuro-container {
  font-family: "Inter", sans-serif;
  background: #1a1a1a;
  min-height: 100vh;
  width: 100vw;
  padding: 8rem 2rem 4rem 2rem;
  color: #e0e0e0;
  overflow-x: hidden;
}

/* Neumorphism Base Styles */
.neuro-raised {
  background: #1a1a1a;
  box-shadow: 
    8px 8px 16px #0f0f0f,
    -8px -8px 16px #252525;
}

.neuro-pressed {
  background: #1a1a1a;
  box-shadow: 
    inset 8px 8px 16px #0f0f0f,
    inset -8px -8px 16px #252525;
}

.neuro-flat {
  background: #1a1a1a;
  box-shadow: 
    4px 4px 8px #0f0f0f,
    -4px -4px 8px #252525;
}

/* Hero Section */
.hero-section {
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  animation: fadeInUp 0.8s ease-out;
}

.hero-card {
  background: #1a1a1a;
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 
    12px 12px 24px #0f0f0f,
    -12px -12px 24px #252525;
  transition: all 0.3s ease;
}

.hero-card:hover {
  box-shadow: 
    16px 16px 32px #0f0f0f,
    -16px -16px 32px #252525;
}

.profile-wrapper {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
}

.profile-image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
  transition: all 0.3s ease;
}

.profile-ring {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #1a1a1a;
  box-shadow: 
    6px 6px 12px #0f0f0f,
    -6px -6px 12px #252525;
  z-index: -1;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-content {
  flex: 1;
}

.profile-name {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.profile-title {
  font-size: 1.3rem;
  color: #a0a0a0;
  margin: 0 0 1.5rem 0;
  font-weight: 500;
}

.profile-divider {
  width: 60px;
  height: 4px;
  background: #1a1a1a;
  border-radius: 2px;
  margin: 1.5rem 0;
  box-shadow: 
    inset 2px 2px 4px #0f0f0f,
    inset -2px -2px 4px #252525;
}

.profile-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #c0c0c0;
  margin: 0 0 2rem 0;
}

.warning-section {
  background: #1a1a1a;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
  margin-bottom: 2rem;
}

.warning-badge {
  display: inline-block;
  background: #ff4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  box-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.3),
    -1px -1px 2px rgba(255, 255, 255, 0.1);
}

.warning-note {
  color: #a0a0a0;
  font-size: 0.95rem;
  margin: 0;
  font-style: italic;
}

.social-section {
  text-align: center;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #1a1a1a;
  color: #e0e0e0;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 
    6px 6px 12px #0f0f0f,
    -6px -6px 12px #252525;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 
    8px 8px 16px #0f0f0f,
    -8px -8px 16px #252525;
}

.social-btn:active {
  transform: translateY(0);
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
}

.instagram-btn:hover {
  background: linear-gradient(135deg, #ff4444, #ff6b6b);
  color: white;
}

.social-icon {
  width: 20px;
  height: 20px;
}

/* Content Sections */
.content-section {
  max-width: 1000px;
  margin: 0 auto 4rem auto;
}

.section-card {
  background: #1a1a1a;
  border-radius: 28px;
  padding: 3rem;
  box-shadow: 
    10px 10px 20px #0f0f0f,
    -10px -10px 20px #252525;
  transition: all 0.3s ease;
}

.section-card:hover {
  box-shadow: 
    12px 12px 24px #0f0f0f,
    -12px -12px 24px #252525;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.section-subtitle {
  color: #a0a0a0;
  font-size: 1.1rem;
  margin: 0;
}

/* Projects Styles */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  background: #1a1a1a;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 
    8px 8px 16px #0f0f0f,
    -8px -8px 16px #252525;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    10px 10px 20px #0f0f0f,
    -10px -10px 20px #252525;
}

.project-image {
  margin-bottom: 1.5rem;
}

.project-icon-wrapper {
  background: #1a1a1a;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.project-description {
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-badge {
  background: #1a1a1a;
  color: #6366f1;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 
    inset 2px 2px 4px #0f0f0f,
    inset -2px -2px 4px #252525;
}

.placeholder-icon {
  margin: 0 auto 1.5rem auto;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  border-radius: 50%;
  box-shadow: 
    4px 4px 8px #0f0f0f,
    -4px -4px 8px #252525;
}

.icon-shape {
  width: 40px;
  height: 40px;
  background: #444;
  border-radius: 8px;
  position: relative;
}

.icon-shape.briefcase::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 8px;
  background: #444;
  border-radius: 4px 4px 0 0;
}

.placeholder-card h3 {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
}

.placeholder-card p {
  color: #a0a0a0;
  margin: 0;
  line-height: 1.5;
}

/* Skills Section */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.skill-category {
  background: #1a1a1a;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
}

.category-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.skills-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: #1a1a1a;
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    4px 4px 8px #0f0f0f,
    -4px -4px 8px #252525;
}

.skill-item:hover {
  transform: translateY(-4px);
  box-shadow: 
    6px 6px 12px #0f0f0f,
    -6px -6px 12px #252525;
}

.skill-item:active {
  transform: translateY(0);
  box-shadow: 
    inset 2px 2px 4px #0f0f0f,
    inset -2px -2px 4px #252525;
}

.skill-icon-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  border-radius: 50%;
  box-shadow: 
    inset 2px 2px 4px #0f0f0f,
    inset -2px -2px 4px #252525;
}

.skill-icon {
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
}

.skill-item:hover .skill-icon {
  transform: scale(1.1);
}

.skill-name {
  color: #c0c0c0;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}

/* About Section */
.about-content {
  background: #1a1a1a;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 
    inset 6px 6px 12px #0f0f0f,
    inset -6px -6px 12px #252525;
}

.about-text {
  color: #c0c0c0;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
  text-align: center;
}

/* Contact Section */
.contact-section {
  max-width: 800px;
  margin: 0 auto;
}

.contact-card {
  background: #1a1a1a;
  border-radius: 32px;
  padding: 3rem;
  text-align: center;
  box-shadow: 
    12px 12px 24px #0f0f0f,
    -12px -12px 24px #252525;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.contact-subtitle {
  color: #a0a0a0;
  font-size: 1.1rem;
  margin: 0 0 3rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #1a1a1a;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  color: #e0e0e0;
  transition: all 0.3s ease;
  box-shadow: 
    6px 6px 12px #0f0f0f,
    -6px -6px 12px #252525;
}

.contact-item:hover {
  transform: translateY(-4px);
  box-shadow: 
    8px 8px 16px #0f0f0f,
    -8px -8px 16px #252525;
}

.contact-item:active {
  transform: translateY(0);
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
}

.contact-icon-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  border-radius: 50%;
  box-shadow: 
    inset 3px 3px 6px #0f0f0f,
    inset -3px -3px 6px #252525;
}

.contact-icon {
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.1);
}

.contact-label {
  font-weight: 600;
  font-size: 1rem;
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
@media (max-width: 768px) {
  .neuro-container {
    padding: 1rem;
    margin-top: 6rem;
  }

  .hero-card,
  .section-card,
  .contact-card {
    padding: 2rem;
  }

  .profile-wrapper {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .profile-name {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .skills-row {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .profile-name {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .hero-card,
  .section-card,
  .contact-card {
    padding: 1.5rem;
  }

  .skills-row {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }

  .skill-item {
    padding: 1rem;
  }
}

/* Accessibility */
.skill-item:focus,
.contact-item:focus,
.social-btn:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>