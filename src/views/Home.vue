<template>
  <div class="portfolio-container">
    <!-- Fond avec particules animées -->
    <div class="particles-bg">
      <div v-for="i in 25" :key="i" class="particle" :style="{ '--i': i }"></div>
    </div>

    <!-- Grille de fond décorative -->
    <div class="grid-bg"></div>

    <!-- Section Hero avec design futuriste -->
    <section class="hero-zone" :class="{ 'hero-loaded': isVisible }">
      <div class="hero-content">
        <div class="hero-left">
          <div class="name-container">
            <h1 class="hero-name">
              <span class="first-name" data-text="Gaël">Gaël</span>
              <span class="last-name" data-text="Röthlin">Röthlin</span>
            </h1>
            <div class="name-underline"></div>
          </div>

          <div class="roles-container">
            <div class="role-item primary">
              <div class="role-dot"></div>
              <span>{{ $t("HomeTitle") }}</span>
              <div class="role-glow"></div>
            </div>
            <div class="role-item secondary">
              <div class="role-dot"></div>
              <span>{{ $t("AcademicTitle") }}<sup>*</sup></span>
              <div class="role-glow"></div>
            </div>
          </div>

          <p class="precision-note">
            <sup>*</sup>{{ $t("Precision") }}
          </p>

          <div class="bio-section">
            <div class="bio-item" v-for="(item, index) in bioItems" :key="index" :style="{ '--delay': index * 0.1 + 's' }">
              <div class="bio-icon">{{ item.icon }}</div>
              <p class="bio-text">{{ $t(item.text) }}</p>
              <div class="bio-accent"></div>
            </div>
          </div>

          <div class="hero-actions">
            <a href="https://www.instagram.com/osiris._25" target="_blank" class="action-btn social">
              <div class="btn-bg"></div>
              <img src="../assets/instagram.svg" alt="Instagram" />
              <span>@osiris._25</span>
              <div class="btn-shine"></div>
            </a>
            <button class="action-btn explore" @click="scrollToProjects">
              <div class="btn-bg"></div>
              <span>Explorer</span>
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <div class="btn-shine"></div>
            </button>
          </div>
        </div>

        <div class="hero-right">
          <div class="avatar-container">
            <div class="orbit-rings">
              <div class="orbit-ring ring-1"></div>
              <div class="orbit-ring ring-2"></div>
              <div class="orbit-ring ring-3"></div>
            </div>
            <div class="avatar-wrapper">
              <div class="avatar-image">
                <img src="../assets/moon-pfp.jpg" alt="Gaël Röthlin" />
                <div class="avatar-overlay"></div>
              </div>
              <div class="avatar-border"></div>
              <div class="avatar-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <div class="scroll-text">Défiler</div>
      </div>
    </section>

    <!-- Section Projets avec design en grille -->
    <section class="projects-zone" ref="projectsSection">
      <div class="section-header">
        <div class="section-number">01</div>
        <div class="section-title">
          <h2 class="title-main">{{ $t("Projects") }}</h2>
          <p class="title-sub">{{ $t("ProjectContent") }}</p>
        </div>
        <div class="section-accent"></div>
      </div>
      <div class="projects-content">
        <Carousel />
      </div>
    </section>

    <!-- Section Stage avec design diagonal -->
    <section class="internship-zone">
      <div class="diagonal-overlay"></div>
      <div class="section-header inverse">
        <div class="section-number">02</div>
        <div class="section-title">
          <h2 class="title-main">{{ $t("Internship") }}</h2>
        </div>
        <div class="section-accent"></div>
      </div>
      <div class="internship-content">
        <Internship />
      </div>
    </section>

    <!-- Section Compétences avec timeline moderne -->
    <section class="skills-zone">
      <div class="section-header">
        <div class="section-number">03</div>
        <div class="section-title">
          <h2 class="title-main">{{ $t("Skills") }}</h2>
        </div>
        <div class="section-accent"></div>
      </div>

      <div class="skills-timeline">
        <div class="timeline-line"></div>
        <div
          v-for="(skillType, index) in Object.keys(skills)"
          :key="index"
          class="skill-group"
          :style="{ '--index': index }"
        >
          <div class="skill-header">
            <div class="skill-marker">
              <img :src="getSkillIcon(skillType)" alt="Skill Icon" />
            </div>
            <h3 class="skill-title">{{ $t(skillType) }}</h3>
          </div>

          <div class="tech-grid">
            <div
              v-for="(tech, techIndex) in skills[skillType].language"
              :key="techIndex"
              class="tech-card"
              :style="{ '--tech-index': techIndex }"
              @click="redirectToUrl(tech.url)"
            >
              <div class="tech-bg"></div>
              <div class="tech-icon">
                <img :src="require(`@/assets/skills/${tech.name}.svg`)" :alt="tech.name" />
              </div>
              <span class="tech-name">{{ tech.name }}</span>
              <div class="tech-hover"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section UI/UX avec split design -->
    <section class="uiux-zone">
      <div class="uiux-layout">
        <div class="uiux-header">
          <div class="section-number">04</div>
          <div class="section-title">
            <h2 class="title-main">UI/UX Design</h2>
            <p class="title-sub">Créativité & Innovation</p>
          </div>
          <div class="section-accent"></div>
        </div>
        <div class="uiux-content">
          <UIUX />
        </div>
      </div>
    </section>

    <!-- Section À Propos avec texte animé -->
    <section class="about-zone">
      <div class="about-container">
        <div class="section-header centered">
          <div class="section-number">05</div>
          <div class="section-title">
            <h2 class="title-main">{{ $t("WhyPortfolio") }}</h2>
          </div>
          <div class="section-accent"></div>
        </div>
        <div class="about-content">
          <p class="about-text">{{ $t("WhyPortfolioContent") }}</p>
        </div>
      </div>
    </section>

    <!-- Section Contact avec design minimaliste -->
    <section class="contact-zone">
      <div class="contact-container">
        <h2 class="contact-title">{{ $t("Contact") }}</h2>
        <div class="contact-grid">
          <a href="mailto:gael.rothlin@proton.me" class="contact-card email">
            <div class="card-bg"></div>
            <div class="card-icon">
              <img src="../assets/email.svg" alt="Email" />
            </div>
            <span class="card-text">Email</span>
            <div class="card-hover"></div>
          </a>
          <a href="https://www.instagram.com/osiris._25" class="contact-card instagram">
            <div class="card-bg"></div>
            <div class="card-icon">
              <img src="../assets/instagram.svg" alt="Instagram" />
            </div>
            <span class="card-text">Instagram</span>
            <div class="card-hover"></div>
          </a>
          <a href="https://github.com/moonlight58" class="contact-card github">
            <div class="card-bg"></div>
            <div class="card-icon">
              <img src="../assets/github.svg" alt="GitHub" />
            </div>
            <span class="card-text">GitHub</span>
            <div class="card-hover"></div>
          </a>
        </div>
      </div>
    </section>
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
      bioItems: [
        { icon: "⚡", text: "BodyPart1" },
        { icon: "🚀", text: "BodyPart2" }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 300);
    this.setupScrollAnimations();
    this.setupParallax();
  },
  methods: {
    scrollToProjects() {
      this.$refs.projectsSection.scrollIntoView({ behavior: "smooth" });
    },
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    getSkillIcon(skillType) {
      const icons = {
        "Software Development": require("@/assets/software.svg"),
        "Développement de logiciels": require("@/assets/software.svg"),
        "Back-end Web": require("@/assets/backend.svg"),
        "Front-end Web": require("@/assets/frontend.svg"),
        "Développement de jeux": require("@/assets/game_dev.svg"),
        "Game Development": require("@/assets/game_dev.svg"),
        Art: require("@/assets/art.svg"),
      };
      return icons[skillType] || "";
    },
    setupScrollAnimations() {
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

      setTimeout(() => {
        const elements = document.querySelectorAll(
          ".section-header, .skill-group, .tech-card, .contact-card, .bio-item"
        );
        elements.forEach((el) => observer.observe(el));
      }, 500);
    },
    setupParallax() {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const particles = document.querySelector(".particles-bg");
        const grid = document.querySelector(".grid-bg");
        
        if (particles) {
          particles.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        if (grid) {
          grid.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Reset et base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio-container {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;

  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --border-color: #374151;
  --glow-color: rgba(99, 102, 241, 0.3);
  --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  --gradient-accent: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 3.75rem;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px var(--glow-color);
}

/* Particules de fond */
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.6;
  animation: float 8s infinite linear;
  left: calc(var(--i) * 4%);
  top: calc(var(--i) * 3%);
  animation-delay: calc(var(--i) * 0.1s);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Grille de fond */
.grid-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: 
    linear-gradient(var(--text-primary) 1px, transparent 1px),
    linear-gradient(90deg, var(--text-primary) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 1;
}

/* Section Hero */
.hero-zone {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: var(--spacing-2xl) var(--spacing-lg);
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.hero-zone.hero-loaded {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.name-container {
  position: relative;
  margin-bottom: var(--spacing-lg);
}

.hero-name {
  font-size: var(--font-size-6xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.first-name {
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  animation: slideInLeft 1s ease-out 0.2s both;
}

.last-name {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  animation: slideInLeft 1s ease-out 0.4s both;
}

.name-underline {
  height: 4px;
  background: var(--gradient-primary);
  border-radius: var(--radius-sm);
  margin-top: var(--spacing-md);
  width: 0;
  animation: expandWidth 1s ease-out 0.6s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes expandWidth {
  to {
    width: 200px;
  }
}

.roles-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.role-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
  font-size: var(--font-size-lg);
  font-weight: 500;
  transform: translateX(-30px);
  opacity: 0;
  animation: slideInRole 0.8s ease-out 0.8s both;
}

.role-item.secondary {
  animation-delay: 1s;
}

@keyframes slideInRole {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.role-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-color);
  flex-shrink: 0;
}

.role-item.secondary .role-dot {
  background: var(--secondary-color);
}

.role-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.role-item:hover .role-glow {
  opacity: 0.1;
}

.precision-note {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-style: italic;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 1.2s both;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.bio-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.bio-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  position: relative;
  padding-left: var(--spacing-xl);
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.8s ease-out calc(1.4s + var(--delay)) both;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bio-icon {
  font-size: var(--font-size-xl);
  position: absolute;
  left: 0;
  top: 0;
}

.bio-text {
  color: var(--text-secondary);
  font-size: var(--font-size-base);
  line-height: 1.7;
}

.bio-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-primary);
  opacity: 0.3;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  color: var(--text-primary);
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpBtn 0.8s ease-out 1.8s both;
}

.action-btn.explore {
  animation-delay: 2s;
}

@keyframes slideUpBtn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.action-btn:hover .btn-bg {
  opacity: 0.1;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
  border-color: var(--primary-color);
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.action-btn:hover .btn-shine {
  left: 100%;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.action-btn:hover .arrow-icon {
  transform: translateY(2px);
}

/* Avatar section */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.orbit-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbit-ring {
  position: absolute;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  opacity: 0.3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring-1 {
  width: 280px;
  height: 280px;
  animation: rotate 20s linear infinite;
}

.ring-2 {
  width: 320px;
  height: 320px;
  border-color: var(--primary-color);
  animation: rotate 30s linear infinite reverse;
}

.ring-3 {
  width: 360px;
  height: 360px;
  border-color: var(--secondary-color);
  animation: rotate 40s linear infinite;
}

@keyframes rotate {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.avatar-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.avatar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}

.avatar-wrapper:hover .avatar-image img {
  filter: grayscale(0%);
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.avatar-wrapper:hover .avatar-overlay {
  opacity: 0.2;
}

.avatar-border {
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  background: var(--gradient-primary);
  border-radius: 50%;
  z-index: -1;
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(20px);
  z-index: -2;
  animation: pulse 3s ease-in-out infinite alternate;
}

@keyframes pulse {
  to {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  opacity: 0;
  animation: fadeInUp 1s ease-out 2.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.scroll-line {
  width: 1px;
  height: 30px;
  background: var(--gradient-primary);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 20%, 100% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
  }
}

/* Sections communes */
section {
  position: relative;
  z-index: 2;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.section-header {
  max-width: 1400px;
  margin: 0 auto var(--spacing-3xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.section-header.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-header.centered {
  justify-content: center;
}

.section-header.inverse {
  color: var(--text-primary);
}

.section-number {
  font-size: var(--font-size-6xl);
  font-weight: 800;
  color: var(--text-muted);
  opacity: 0.3;
  line-height: 1;
  flex-shrink: 0;
}

.section-title {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.title-main {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.title-sub {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin: 0;
}

.section-accent {
  flex: 1;
  height: 2px;
  background: var(--gradient-primary);
  opacity: 0.3;
  border-radius: var(--radius-sm);
}

/* Section Projets */
.projects-zone {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.projects-content {
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Stage */
.internship-zone {
  position: relative;
  background: var(--bg-secondary);
  overflow: hidden;
}

.diagonal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-primary) 0%, transparent 70%);
  z-index: 1;
}

.internship-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Compétences */
.skills-zone {
  background: var(--bg-primary);
}

.skills-timeline {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-left: var(--spacing-xl);
}

.timeline-line {
  position: absolute;
  left: var(--spacing-lg);
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-primary);
  opacity: 0.3;
}

.skill-group {
  margin-bottom: var(--spacing-3xl);
  position: relative;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
  transition-delay: calc(var(--index) * 0.2s);
}

.skill-group.in-view {
  opacity: 1;
  transform: translateX(0);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.skill-marker {
  width: 60px;
  height: 60px;
  background: var(--bg-secondary);
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(-1 * var(--spacing-xl) - 26px);
  z-index: 3;
}

.skill-marker img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
}

.skill-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--spacing-lg);
  margin-left: var(--spacing-2xl);
}

.tech-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUpTech 0.8s ease-out calc(0.1s + var(--tech-index) * 0.1s) both;
}

@keyframes slideUpTech {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.tech-card:hover .tech-bg {
  opacity: 0.05;
}

.tech-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-glow);
}

.tech-icon {
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 2;
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tech-name {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  position: relative;
  z-index: 2;
}

.tech-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.tech-card:hover .tech-hover {
  transform: scaleX(1);
}

/* Section UI/UX */
.uiux-zone {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.uiux-layout {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

.uiux-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  position: sticky;
  top: var(--spacing-2xl);
}

.uiux-header .section-number {
  font-size: var(--font-size-5xl);
}

.uiux-header .section-accent {
  width: 100px;
  margin: var(--spacing-lg) 0;
}

.uiux-content {
  position: relative;
}

/* Section À Propos */
.about-zone {
  background: var(--bg-primary);
  text-align: center;
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  margin-top: var(--spacing-3xl);
}

.about-text {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--text-secondary);
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
}

.about-text.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Section Contact */
.contact-zone {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
  padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-2xl);
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-3xl);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.contact-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  text-decoration: none;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUpContact 0.8s ease-out 0.2s both;
}

.contact-card.instagram {
  animation-delay: 0.4s;
}

.contact-card.github {
  animation-delay: 0.6s;
}

@keyframes slideUpContact {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.contact-card:hover .card-bg {
  opacity: 0.05;
}

.contact-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-glow);
}

.card-icon {
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 2;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.contact-card:hover .card-icon img {
  filter: brightness(0) invert(1) sepia(1) hue-rotate(220deg) saturate(2);
}

.card-text {
  font-size: var(--font-size-lg);
  font-weight: 500;
  position: relative;
  z-index: 2;
}

.card-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.contact-card:hover .card-hover {
  transform: scaleX(1);
}

/* Styles spéciaux pour les cartes de contact */
.contact-card.email:hover {
  --primary-color: #ef4444;
}

.contact-card.instagram:hover {
  --primary-color: #ec4899;
}

.contact-card.github:hover {
  --primary-color: #8b5cf6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
  
  .hero-right {
    order: -1;
  }
  
  .avatar-container {
    width: 280px;
    height: 280px;
  }
  
  .avatar-wrapper {
    width: 200px;
    height: 200px;
  }
  
  .ring-1 { width: 220px; height: 220px; }
  .ring-2 { width: 250px; height: 250px; }
  .ring-3 { width: 280px; height: 280px; }
  
  .uiux-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .uiux-header {
    position: static;
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: var(--font-size-5xl);
  }
  
  .section-number {
    font-size: var(--font-size-4xl);
  }
  
  .title-main {
    font-size: var(--font-size-3xl);
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-lg);
  }
  
  .section-accent {
    width: 100px;
    flex: none;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-md);
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .skills-timeline {
    padding-left: var(--spacing-lg);
  }
  
  .skill-marker {
    left: calc(-1 * var(--spacing-lg) - 26px);
  }
  
  .tech-grid {
    margin-left: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  section {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
  
  .hero-name {
    font-size: var(--font-size-4xl);
  }
  
  .avatar-container {
    width: 240px;
    height: 240px;
  }
  
  .avatar-wrapper {
    width: 160px;
    height: 160px;
  }
  
  .ring-1 { width: 180px; height: 180px; }
  .ring-2 { width: 210px; height: 210px; }
  .ring-3 { width: 240px; height: 240px; }
  
  .role-item {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-base);
  }
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}

/* Animations supplémentaires */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}