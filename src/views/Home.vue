<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section" :class="{ visible: isVisible }">
      <div class="hero-card">
        <div class="avatar-container">
          <div class="avatar-glow"></div>
          <div class="avatar-ring"></div>
          <img src="../assets/moon-pfp.webp" alt="Gaël Röthlin" class="avatar-image" />
        </div>

        <div class="hero-content">
          <h1 class="hero-title">
            <span class="name-text gradient-text">Gaël Röthlin</span>
          </h1>
          <p class="hero-subtitle">{{ $t("HomeTitle") }}</p>

          <div class="status-badges">
            <div class="badge badge-student">
              <span class="badge-icon">🎓</span>
              <span>{{ $t("BodyPart1") }}</span>
            </div>
          </div>

          <div class="hero-description">
            <p class="description-text">
              BUT
              <span class="warning-text">*</span>
              ,
              {{ $t("BodyPart2") }}
            </p>
            <p class="precision-text">
              <span class="warning-text">*</span>({{ $t("Precision") }})
            </p>
            <p class="main-description">
              {{ $t("Description") }}
            </p>
          </div>

          <div class="cta-container">
            <a class="instagram-cta" href="https://www.instagram.com/osiris._25" target="_blank"
              rel="noopener noreferrer">
              <div class="instagram-icon">
                <img src="../assets/instagram.svg" alt="Instagram" class="social-icon" />
              </div>
              <div class="cta-content">
                <span class="cta-label">Suivez-moi sur</span>
                <span class="cta-handle">@osiris._25</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="content-section projects-section">
      <div class="section-header">
        <h2 class="section-title gradient-text">{{ $t("Projects") }}</h2>
        <p class="section-subtitle">{{ $t("ProjectContent") }}</p>
      </div>
      <div class="glass-card carousel-wrapper">
        <Carousel />
      </div>
    </div>

    <!-- Internship Section -->
    <div class="content-section internship-section">
      <div class="section-header">
        <h2 class="section-title gradient-text">{{ $t('Internship') }}</h2>
      </div>
      <div class="glass-card internship-wrapper">
        <Internship />
      </div>
    </div>

    <!-- Skills Section -->
    <div class="content-section skills-section">
      <div class="section-header">
        <h2 class="section-title gradient-text">{{ $t("Skills") }}</h2>
      </div>
      <div class="skills-grid">
        <div class="skill-card dev-card" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <div class="skill-header">
            <div class="skill-icon">
              <img :src="getSkillIcon(skillType)" alt="Skill Icon" class="skill-icon-image" />
            </div>

            <h3 class="skill-title">{{ $t(skillType) }}</h3>
          </div>
          <div class="skill-content">
            <div class="skill-items">
              <div class="skill-item" v-for="(language, langIndex) in skills[skillType].language" :key="langIndex"
                @click="redirectToUrl(language.url)">
                <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" class="skill-logo" />
                <span class="skill-name">{{ language.name }}</span>
              </div>
            </div>
          </div>
          <div class="skill-glow dev-glow"></div>
        </div>
      </div>
    </div>

    <!-- UI/UX Section -->
    <div class="content-section uiux-section">
      <div class="section-header">
        <h2 class="section-title gradient-text">Compétences UI/UX</h2>
        <p class="section-subtitle">Découvrez mes compétences artistiques et techniques</p>
      </div>
      <div class="glass-card uiux-wrapper">
        <UIUX />
      </div>
    </div>

    <!-- About Section -->
    <div class="content-section about-section">
      <div class="section-header">
        <h2 class="section-title gradient-text">{{ $t("WhyPortfolio") }}</h2>
      </div>
      <div class="glass-card about-card">
        <p class="about-text">{{ $t("WhyPortfolioContent") }}</p>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="content-section contact-section">
      <div class="glass-card contact-card">
        <div class="contact-header">
          <h2 class="contact-title gradient-text">Contact</h2>
          <p class="contact-subtitle">{{ $t("Contact") }}</p>
        </div>
        <div class="contact-grid">
          <a class="contact-btn email-btn" href="mailto:gael.rothlin@proton.me" target="_blank"
            rel="noopener noreferrer">
            <div class="contact-icon-wrapper">
              <img src="../assets/email.svg" alt="Email" class="contact-icon" />
            </div>
            <span class="contact-label">Email</span>
          </a>
          <a class="contact-btn instagram-btn" href="https://www.instagram.com/osiris._25" target="_blank"
            rel="noopener noreferrer">
            <div class="contact-icon-wrapper">
              <img src="../assets/instagram.svg" alt="Instagram" class="contact-icon" />
            </div>
            <span class="contact-label">Instagram</span>
          </a>
          <a class="contact-btn github-btn" href="https://github.com/moonlight58" target="_blank"
            rel="noopener noreferrer">
            <div class="contact-icon-wrapper">
              <img src="../assets/github.svg" alt="GitHub" class="contact-icon" />
            </div>
            <span class="contact-label">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselProject.vue";
import Internship from "@/components/StageComponent.vue";
import UIUX from "@/components/UI-UX.vue";
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  components: {
    Carousel,
    Internship,
    UIUX,
  },
  data() {
    return {
      skills: skills,
      isVisible: false,
    };
  },
  mounted() {
    // Animation d'entrée progressive
    setTimeout(() => {
      this.isVisible = true;
    }, 100);

    // Observer pour les animations au scroll
    this.setupScrollAnimations();
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.warn("No URL provided");
      }
    },
    getSkillIcon(skillType) {
      const icons = {
        "Software Development": require('@/assets/software.svg'),
        "Développement de logiciels": require('@/assets/software.svg'),
        "Back-end Web": require('@/assets/backend.svg'),
        "Front-end Web": require('@/assets/frontend.svg'),
        "Développement de jeux": require('@/assets/game_dev.svg'),
        "Game Development": require('@/assets/game_dev.svg'),
        "Art": require('@/assets/art.svg')
      };

      const icon = icons[skillType];
      if (!icon) {
        console.warn(`No icon found for skill type: ${skillType}`);
        return '';
      }
      return icon;
    },
    setupScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      const sections = document.querySelectorAll('.content-section');
      sections.forEach(section => observer.observe(section));
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Variables CSS */
/* Container principal */
.container {
  font-family: "Inter", sans-serif;
  margin-top: 7rem;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin-bottom: 6rem;
  color: #ffffff;
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(118, 75, 162, 0.08) 25%,
      rgba(240, 147, 251, 0.05) 50%,
      rgba(75, 172, 254, 0.08) 75%,
      rgba(0, 242, 254, 0.05) 100%);
  min-height: 100vh;

  /* Variables CSS */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --tertiary-gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  --blur-strength: 20px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Hero Section */
.hero-section {
  margin-bottom: 8rem;
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 32px;
  padding: 4rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  /* Ajout de la transition ici */
}

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
  box-shadow:
    0 30px 80px rgba(102, 126, 234, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
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

/* Avatar avec effets */
.avatar-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.avatar-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 3;
  position: relative;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  background-clip: border-box;
  border-radius: 50%;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.avatar-container:hover .avatar-ring {
  opacity: 0.6;
  animation: rotate 8s linear infinite;
}

.avatar-container:hover .avatar-image {
  transform: scale(1.05);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Contenu Hero */
.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  margin: 0 0 1.5rem 0;
}

.name-text {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2.5rem 0;
  font-weight: 400;
  opacity: 0.9;
  animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badges de statut */
.status-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
}

.badge-student {
  background: rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.badge-icon {
  font-size: 1.2rem;
}

/* Description Hero */
.hero-description {
  margin-bottom: 3rem;
  animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
}

.description-text,
.main-description {
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
}

.precision-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0;
}

.warning-text {
  color: #fca5a5;
  font-weight: 700;
  animation: pulse-warning 2s ease-in-out infinite;
}

@keyframes pulse-warning {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

/* CTA Instagram */
.cta-container {
  animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
}

.instagram-cta {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2.5rem;
  background: rgba(240, 147, 251, 0.1);
  border: 2px solid rgba(240, 147, 251, 0.2);
  border-radius: 20px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.instagram-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(240, 147, 251, 0.15) 50%,
      transparent 100%);
  transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.instagram-cta:hover::before {
  left: 100%;
}

.instagram-cta:hover {
  transform: translateY(-3px);
  border-color: rgba(240, 147, 251, 0.4);
  box-shadow: 0 20px 60px rgba(240, 147, 251, 0.3);
}

.instagram-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}

.instagram-cta:hover .instagram-icon {
  transform: scale(1.1) rotate(5deg);
}

.social-icon {
  width: 24px;
  height: 24px;
}

.cta-content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.cta-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
}

.cta-handle {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
}

/* Sections de contenu */
.content-section {
  margin-bottom: 6rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.05s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-section:nth-child(2) {
  transition-delay: 0.1s;
}

.content-section:nth-child(3) {
  transition-delay: 0.2s;
}

.content-section:nth-child(4) {
  transition-delay: 0.3s;
}

.content-section:nth-child(5) {
  transition-delay: 0.4s;
}

.content-section:nth-child(6) {
  transition-delay: 0.5s;
}

.content-section:nth-child(7) {
  transition-delay: 0.6s;
}

/* Headers de sections */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
}

/* Carte en verre générique */
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  opacity: 0.5;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

/* Texte avec gradients */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Support pour navigateurs anciens */
@supports not (-webkit-background-clip: text) {
  .gradient-text {
    color: #ffffff;
  }
}

/* Grille de compétences */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.2);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.skill-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(75, 172, 254, 0.3);
}

.skill-icon-image {
  width: 40px;
  height: 40px;
}


.skill-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.skill-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.skill-item:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(75, 172, 254, 0.3);
}

.skill-logo {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.skill-item:hover .skill-logo {
  transform: scale(1.1);
}

.skill-name {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.skill-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.dev-glow {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
}

.skill-card:hover .skill-glow {
  opacity: 1;
}

/* Section About */
.about-card {
  text-align: center;
  padding: 3rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
}

/* Section Contact */
.contact-card {
  text-align: center;
  padding: 3rem 2rem;
}

.contact-header {
  margin-bottom: 3rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
}

.contact-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%);
  transition: left 0.6s ease;
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.email-btn:hover {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
}

.instagram-btn:hover {
  background: rgba(240, 147, 251, 0.1);
  border-color: rgba(240, 147, 251, 0.3);
}

.github-btn:hover {
  background: rgba(156, 163, 175, 0.1);
  border-color: rgba(156, 163, 175, 0.3);
}

.contact-icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
}

.contact-btn:hover .contact-icon-wrapper {
  transform: scale(1.1);
}

.contact-icon {
  width: 28px;
  height: 28px;
}

.contact-label {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: color 0.3s ease;
}

.contact-btn:hover .contact-label {
  color: rgba(255, 255, 255, 0.8);
}

/* Ajout d'effets supplémentaires pour les boutons de contact */
.contact-btn .contact-icon {
  transition: transform 0.3s ease;
}

.contact-btn:hover .contact-icon {
  transform: scale(1.2);
}

/* Style pour les sections de contenu */
.content-section {
  margin-bottom: 6rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animation pour les sections de contenu */
.content-section:nth-child(2) {
  transition-delay: 0.1s;
}

.content-section:nth-child(3) {
  transition-delay: 0.2s;
}

.content-section:nth-child(4) {
  transition-delay: 0.3s;
}

.content-section:nth-child(5) {
  transition-delay: 0.4s;
}

.content-section:nth-child(6) {
  transition-delay: 0.5s;
}

.content-section:nth-child(7) {
  transition-delay: 0.6s;
}

/* Style pour les en-têtes de section */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
}
</style>