<template>
  <div class="portfolio-container">
    <!-- Particules animées en arrière-plan -->
    <div class="particles-bg">
      <div v-for="i in 20" :key="i" class="particle"></div>
    </div>

    <!-- Hero Section avec design asymétrique -->
    <section class="hero-zone" :class="{ 'hero-loaded': isVisible }">
      <div class="hero-grid">
        <div class="hero-left">
          <div class="glitch-wrapper">
            <h1 class="hero-name" data-text="Gaël Röthlin">
              <span class="first-name">Gaël</span>
              <span class="last-name">Röthlin</span>
            </h1>
          </div>

          <div class="role-wrapper">
            <div class="role-badge">
              <span class="role-text">{{ $t("HomeTitle") }}</span>
              <div class="role-accent-primary"></div>
            </div>
            <div class="role-badge">
              <span class="role-text"
                >{{ $t("AcademicTitle") }}<sup class="asterisk">*</sup></span
              >
              <div class="role-accent-secondary"></div>
            </div>
            <div class="role-badge">
                <SpotifyNowPlaying />
            </div>
          </div>

          <p class="bio-note">
            <sup class="asterisk">*</sup>{{ $t("Precision") }}
          </p>

          <div class="bio-container">
            <div class="bio-line">
              <span class="bio-icon">⚡</span>
              <p>{{ $t("BodyPart1") }}</p>
            </div>
            <div class="bio-line">
              <span class="bio-icon">🚀</span>
              <p>{{ $t("BodyPart2") }}</p>
            </div>
          </div>

          <div class="hero-actions">
            <a
              href="https://www.instagram.com/osiris._25"
              target="_blank"
              class="social-link instagram"
            >
              <div class="link-bg"></div>
              <img src="../assets/instagram.svg" alt="Instagram" />
              <span>@osiris._25</span>
            </a>
            <button class="scroll-hint" @click="scrollToProjects">
              <span>Explorer</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="hero-right">
          <div class="avatar-scene">
            <div class="orbit-ring"></div>
            <div class="orbit-ring delay-1"></div>
            <div class="orbit-ring delay-2"></div>
            <div class="avatar-frame">
              <div class="avatar-inner">
                <img src="../assets/moon-pfp.jpg" alt="Gaël Röthlin" />
              </div>
              <div class="avatar-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section avec layout créatif -->
    <section class="projects-zone" ref="projectsSection">
      <div class="section-intro">
        <span class="section-number">01</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t("Projects") }}</span>
          <span class="heading-sub">{{ $t("ProjectContent") }}</span>
        </h2>
      </div>
      <div class="projects-container">
        <Carousel />
      </div>
    </section>

    <!-- Internship Section avec design diagonal -->
    <section class="internship-zone">
      <div class="diagonal-bg"></div>
      <div class="section-intro alternate">
        <span class="section-number">02</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t("Internship") }}</span>
        </h2>
      </div>
      <Internship />
    </section>

    <!-- Skills Section avec grille hexagonale -->
    <section class="skills-zone">
      <div class="section-intro">
        <span class="section-number">03</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t("Skills") }}</span>
        </h2>
      </div>

      <div class="skills-timeline">
        <div
          v-for="(skillType, index) in Object.keys(skills)"
          :key="index"
          class="skill-category"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="category-header">
            <div class="category-icon">
              <img :src="getSkillIcon(skillType)" alt="Skill Icon" />
            </div>
            <h3 class="category-title">{{ $t(skillType) }}</h3>
            <div class="category-line"></div>
          </div>

          <div class="technologies-flow">
            <div
              v-for="(language, langIndex) in skills[skillType].language"
              :key="langIndex"
              class="tech-bubble"
              :style="{ '--tech-delay': langIndex * 0.1 + 's' }"
              @click="redirectToUrl(language.url)"
            >
              <div class="bubble-glow"></div>
              <img
                :src="require(`@/assets/skills/${language.name}.svg`)"
                :alt="language.name"
              />
              <span>{{ language.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UI/UX Section avec design split-screen -->
    <section class="uiux-zone">
      <div class="split-layout">
        <div class="split-left">
          <div class="section-intro vertical">
            <span class="section-number">04</span>
            <h2 class="section-heading">
              <span class="heading-main">UI/UX Design</span>
              <span class="heading-sub">Créativité & Innovation</span>
            </h2>
          </div>
        </div>
        <div class="split-right">
          <UIUX />
        </div>
      </div>
    </section>

    <!-- About Section avec texte animé -->
    <section class="about-zone">
      <div class="about-wrapper">
        <div class="section-intro centered">
          <span class="section-number">05</span>
          <h2 class="section-heading">
            <span class="heading-main">{{ $t("WhyPortfolio") }}</span>
          </h2>
        </div>
        <div class="about-content">
          <p class="about-text animated-text">
            {{ $t("WhyPortfolioContent") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section avec design minimaliste -->
    <section class="contact-zone">
      <div class="contact-wrapper">
        <h2 class="contact-heading">{{ $t("Contact") }}</h2>
        <div class="contact-links">
          <a href="mailto:gael.rothlin@proton.me" class="contact-item email">
            <div class="contact-bg"></div>
            <img src="../assets/email.svg" alt="Email" />
            <span>Email</span>
          </a>
          <a
            href="https://www.instagram.com/osiris._25"
            class="contact-item instagram"
          >
            <div class="contact-bg"></div>
            <img src="../assets/instagram.svg" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a href="https://github.com/moonlight58" class="contact-item github">
            <div class="contact-bg"></div>
            <img src="../assets/github.svg" alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpotifyNowPlaying from '@/components/SpotifyNowPlaying.vue';
import Carousel from "@/components/CarouselProject.vue";
import Internship from "@/components/StageComponent.vue";
import UIUX from "@/components/UI-UX.vue";
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  components: {
    SpotifyNowPlaying,
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
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
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

      const elements = document.querySelectorAll(
        ".section-intro, .skill-hex, .contact-item"
      );
      elements.forEach((el) => observer.observe(el));
    },
    setupParallax() {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector(".particles-bg");
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Reset et Container Principal */
.portfolio-container {
  min-height: 100vh;
  background: var(--dark-bg);
  color: var(--text-primary);
  overflow-x: hidden;
  position: relative;

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #764ba2 0%, #831e55 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}

/* Particules animées */
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
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  animation: float 20s infinite;
}

.particle:nth-child(odd) {
  animation-duration: 25s;
  background: #f72585;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(100vh) translateX(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(90vh) translateX(10px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(10vh) translateX(-10px) scale(1);
  }
}

.particle:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
}
.particle:nth-child(2) {
  left: 20%;
  animation-delay: 2s;
}
.particle:nth-child(3) {
  left: 30%;
  animation-delay: 4s;
}
.particle:nth-child(4) {
  left: 40%;
  animation-delay: 6s;
}
.particle:nth-child(5) {
  left: 50%;
  animation-delay: 8s;
}
.particle:nth-child(6) {
  left: 60%;
  animation-delay: 10s;
}
.particle:nth-child(7) {
  left: 70%;
  animation-delay: 12s;
}
.particle:nth-child(8) {
  left: 80%;
  animation-delay: 14s;
}
.particle:nth-child(9) {
  left: 90%;
  animation-delay: 16s;
}
.particle:nth-child(10) {
  left: 15%;
  animation-delay: 18s;
}
.particle:nth-child(11) {
  left: 25%;
  animation-delay: 1s;
}
.particle:nth-child(12) {
  left: 35%;
  animation-delay: 3s;
}
.particle:nth-child(13) {
  left: 45%;
  animation-delay: 5s;
}
.particle:nth-child(14) {
  left: 55%;
  animation-delay: 7s;
}
.particle:nth-child(15) {
  left: 65%;
  animation-delay: 9s;
}
.particle:nth-child(16) {
  left: 75%;
  animation-delay: 11s;
}
.particle:nth-child(17) {
  left: 85%;
  animation-delay: 13s;
}
.particle:nth-child(18) {
  left: 95%;
  animation-delay: 15s;
}
.particle:nth-child(19) {
  left: 5%;
  animation-delay: 17s;
}
.particle:nth-child(20) {
  left: 50%;
  animation-delay: 19s;
}

/* Hero Section */
.hero-zone {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 5%;
  position: relative;
  z-index: 2;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
}

.hero-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-loaded .hero-left {
  opacity: 1;
  transform: translateX(0);
}

/* Glitch effect pour le nom */
.glitch-wrapper {
  position: relative;
  margin-bottom: 30px;
}

.hero-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  position: relative;
}

.first-name {
  display: block;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glitch 5s infinite;
}

.last-name {
  display: block;
  color: var(--text-primary);
  margin-top: -10px;
}

.first-name,
.last-name {
  line-height: normal;
  font-size: 4rem !important;
}

@keyframes glitch {
  0% {
    text-shadow: 0 0 0 transparent;
  }
  50% {
    text-shadow: 2px 2px 0 #f72585, -2px -2px 0 #667eea;
  }
}

/* Role Badge */
.role-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.role-badge {
  display: inline-flex;
  position: relative;
  padding: 12px 24px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  overflow: hidden;
  align-items: center;
  width: fit-content;
}

/* Make the Spotify badge match the style */
.role-badge:has(.spotify-badge) {
  padding: 12px 20px;
}

.role-text {
  position: relative;
  z-index: 2;
  font-size: 1.1rem;
  color: #a8b2d1;
}

.role-accent-primary,
.role-accent-secondary {
  position: absolute;
  top: 50%;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateY(-50%);
  transition: left 0.3s ease;
}

.role-accent-secondary {
  background: linear-gradient(135deg, #764ba2 0%, #831e55 100%);
}

.role-text { position: relative;
  z-index: 2;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.role-accent-primary {
  position: absolute;
  top: 50%;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transform: translateY(-50%);
  transition: left 0.3s ease;
}

.role-accent-secondary {
  position: absolute;
  top: 50%;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--secondary-gradient);
  transform: translateY(-50%);
  transition: left 0.3s ease;
}

.role-badge:hover .role-accent-primary,
.role-badge:hover .role-accent-secondary {
  left: 0;
}

.role-badge:hover .role-text {
  color: #ffffff;
}

/* Bio Container */
.bio-container {
  margin-bottom: 40px;
}

.bio-line {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s forwards;
}

.bio-line:nth-child(2) {
  animation-delay: 0.2s;
}

.bio-icon {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(247, 37, 133, 0.1);
  border-radius: 10px;
}

.bio-line p {
  margin: 0;
  max-width: 80%;
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.asterisk {
  color: var(--accent-color);
  font-weight: bold;
}

.bio-note {
  margin: 15px 0 40px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.7;
  font-style: italic;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Actions */
.hero-actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.social-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;
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

.social-link:hover .link-bg {
  left: 0;
}

.social-link img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

.scroll-hint {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: var(--primary-gradient);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scroll-hint:hover {
  transform: translateY(-3px);
}

/* Avatar Scene */
.hero-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.3s;
}

.hero-loaded .hero-right {
  opacity: 1;
  transform: translateX(0);
}

.avatar-scene {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: orbit 20s linear infinite;
}

.orbit-ring.delay-1 {
  width: 120%;
  height: 120%;
  animation-duration: 25s;
  border-color: rgba(247, 37, 133, 0.1);
}

.orbit-ring.delay-2 {
  width: 140%;
  height: 140%;
  animation-duration: 30s;
  animation-direction: reverse;
  border-color: rgba(102, 126, 234, 0.1);
}

@keyframes orbit {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.avatar-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
}

.avatar-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}

.avatar-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--primary-gradient);
  border-radius: 50%;
  z-index: 1;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

/* Sections communes */
section {
  padding: 100px 5%;
  position: relative;
  z-index: 2;
}

.section-intro {
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-intro.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heading-main {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading-sub {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
}

/* Projects Section */
.projects-zone {
  background: linear-gradient(
    180deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-frame {
  background: rgba(21, 25, 55, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

/* Internship Section */
.internship-zone {
  position: relative;
  overflow: hidden;
}

.diagonal-bg {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    135deg,
    transparent 49%,
    rgba(102, 126, 234, 0.05) 50%
  );
  transform: rotate(-5deg);
  z-index: -1;
}

.section-intro.alternate {
  text-align: right;
}

.internship-content {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.skills-timeline {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.skills-timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    var(--primary-gradient) 10%,
    var(--secondary-gradient) 90%,
    transparent 100%
  );
  transform: translateX(-50%);
  z-index: 1;
}

.skill-category {
  position: relative;
  margin-bottom: 80px;
  opacity: 0;
  animation: fadeInCategory 0.8s forwards;
  animation-delay: var(--delay);
}

.skill-category:nth-child(even) {
  transform: translateX(-30px);
}

.skill-category:nth-child(odd) {
  transform: translateX(30px);
}

.skill-category.in-view {
  opacity: 1;
  transform: translateX(0);
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}

.category-icon {
  position: relative;
  width: 80px;
  height: 80px;
  background: var(--primary-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.category-icon::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: var(--primary-gradient);
  border-radius: 50%;
  z-index: -1;
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
}

.category-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  white-space: nowrap;
}

.category-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-gradient), transparent);
  margin-left: 30px;
  border-radius: 1px;
}

.technologies-flow {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0 40px;
}

.tech-bubble {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  min-width: 120px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(30px) scale(0.8);
  animation: bubbleIn 0.6s forwards;
  animation-delay: calc(var(--delay) + var(--tech-delay));
  overflow: hidden;
}

.bubble-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 20px;
  z-index: -1;
}

.tech-bubble:hover {
  transform: translateY(-10px) scale(1.05);
  border-color: transparent;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
}

.tech-bubble:hover .bubble-glow {
  opacity: 1;
}

.tech-bubble img {
  width: 48px;
  height: 48px;
  transition: all 0.3s ease;
  z-index: 2;
}

.tech-bubble:hover img {
  transform: scale(1.1);
}

.tech-bubble span {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-align: center;
  transition: color 0.3s ease;
  z-index: 2;
}

.tech-bubble:hover span {
  color: var(--text-primary);
}

/* Animations */
@keyframes fadeInCategory {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bubbleIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .role-wrapper {
    gap: 8px;
  }

  .role-badge {
    padding: 10px 20px;
  }

  .role-badge:has(.spotify-badge) {
    padding: 10px 16px;
  }

  .role-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .role-wrapper {
    gap: 6px;
  }

  .role-badge {
    padding: 8px 16px;
  }

  .role-badge:has(.spotify-badge) {
    padding: 8px 14px;
  }

  .role-text {
    font-size: 0.9rem;
  }
}

/* Responsive pour Skills */
@media (max-width: 1200px) {
  .skills-timeline::before {
    left: 30px;
  }

  .category-header {
    justify-content: flex-start;
    padding-left: 80px;
  }

  .skill-category:nth-child(even),
  .skill-category:nth-child(odd) {
    transform: translateX(0);
  }

  .technologies-flow {
    padding-left: 80px;
  }
}

@media (max-width: 968px) {
  .skills-timeline::before {
    display: none;
  }

  .category-header {
    justify-content: center;
    padding-left: 0;
  }

  .technologies-flow {
    padding: 0 20px;
    gap: 15px;
  }

  .tech-bubble {
    min-width: 100px;
    padding: 15px;
  }

  .tech-bubble img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .category-title {
    font-size: 1.5rem;
  }

  .category-icon {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }

  .category-icon img {
    width: 32px;
    height: 32px;
  }

  .category-line {
    margin-left: 20px;
  }

  .technologies-flow {
    gap: 12px;
  }

  .tech-bubble {
    min-width: 90px;
    padding: 12px;
  }

  .tech-bubble img {
    width: 36px;
    height: 36px;
  }

  .tech-bubble span {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .skill-category {
    margin-bottom: 60px;
  }

  .category-header {
    flex-direction: column;
    gap: 15px;
  }

  .category-line {
    width: 100px;
    margin: 0;
  }

  .technologies-flow {
    justify-content: center;
    padding: 0 10px;
  }

  .tech-bubble {
    min-width: 80px;
    padding: 10px;
  }

  .tech-bubble img {
    width: 32px;
    height: 32px;
  }

  .tech-bubble span {
    font-size: 0.8rem;
  }
}

/* Animation de performance */
.tech-bubble,
.category-icon {
  will-change: transform;
}

/* Focus states */
.tech-bubble:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Variante alternative avec disposition en grille fluide */
.skills-grid-alternative {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-group {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.skill-group::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
}

.group-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.group-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-gradient);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.group-icon img {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
}

.group-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 15px;
}

.tech-item-alt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px 10px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-item-alt:hover {
  background: var(--primary-gradient);
  transform: translateY(-3px);
}

.tech-item-alt img {
  width: 32px;
  height: 32px;
  transition: filter 0.3s ease;
}

.tech-item-alt:hover img {
  filter: brightness(0) invert(1);
}

.tech-item-alt span {
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  text-align: center;
}

.tech-item-alt:hover span {
  color: var(--text-primary);
}

/* UI/UX Section */
.uiux-zone {
  background: var(--dark-surface);
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.section-intro.vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.split-right {
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

/* About Section */
.about-zone {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.about-wrapper {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.section-intro.centered {
  text-align: center;
  margin-bottom: 40px;
}

.about-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  position: relative;
}

.animated-text {
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Contact Section */
.contact-zone {
  background: linear-gradient(
    180deg,
    var(--dark-surface) 0%,
    var(--dark-bg) 100%
  );
  padding: 150px 5%;
}

.contact-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-heading {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 60px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.contact-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  width: 150px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-primary);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(30px);
}

.contact-item.in-view {
  opacity: 1;
  transform: translateY(0);
}

.contact-item:nth-child(1) {
  animation-delay: 0.1s;
}

.contact-item:nth-child(2) {
  animation-delay: 0.2s;
}

.contact-item:nth-child(3) {
  animation-delay: 0.3s;
}

.contact-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.contact-item:hover .contact-bg {
  opacity: 1;
}

.contact-item:hover {
  transform: translateY(-10px);
  border-color: transparent;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.contact-item img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.contact-item:hover img {
  transform: scale(1.2);
}

.contact-item span {
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Styles spécifiques pour les contacts */
.contact-item.email:hover {
  border-color: #ff6b6b;
  box-shadow: 0 20px 40px rgba(255, 107, 107, 0.3);
}

.contact-item.instagram:hover {
  border-color: #e1306c;
  box-shadow: 0 20px 40px rgba(225, 48, 108, 0.3);
}

.contact-item.github:hover {
  border-color: #333;
  box-shadow: 0 20px 40px rgba(51, 51, 51, 0.3);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-grid {
    gap: 60px;
  }

  .avatar-scene {
    width: 350px;
    height: 350px;
  }

  .avatar-frame {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-right {
    order: -1;
  }

  .avatar-scene {
    width: 300px;
    height: 300px;
  }

  .avatar-frame {
    width: 220px;
    height: 220px;
  }

  .split-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .section-intro.vertical {
    writing-mode: initial;
    text-orientation: initial;
    text-align: center;
  }

  .skills-mosaic {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .skill-hex {
    height: 240px;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .contact-links {
    gap: 20px;
  }

  .contact-item {
    width: 130px;
    padding: 25px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 80px 5%;
  }

  .hero-zone {
    padding: 60px 5%;
    min-height: 80vh;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }

  .social-link,
  .scroll-hint {
    justify-content: center;
    padding: 18px 25px;
  }

  .projects-frame,
  .internship-content,
  .split-right {
    padding: 30px;
    border-radius: 15px;
  }

  .skills-mosaic {
    grid-template-columns: 1fr;
    max-width: 350px;
  }

  .skill-hex {
    height: 220px;
  }

  .hex-front,
  .hex-back {
    padding: 25px;
  }

  .hex-front img {
    width: 50px;
    height: 50px;
  }

  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .tech-item {
    padding: 8px;
  }

  .tech-item img {
    width: 24px;
    height: 24px;
  }

  .tech-item span {
    font-size: 0.7rem;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    margin: 0 auto;
  }

  .contact-item {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .hero-zone {
    padding: 40px 5%;
  }

  .first-name {
    font-size: 2.5rem;
  }

  .bio-line {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .bio-icon {
    align-self: center;
  }

  .avatar-scene {
    width: 250px;
    height: 250px;
  }

  .avatar-frame {
    width: 180px;
    height: 180px;
  }

  .orbit-ring.delay-1 {
    width: 110%;
    height: 110%;
  }

  .orbit-ring.delay-2 {
    width: 120%;
    height: 120%;
  }

  section {
    padding: 60px 5%;
  }

  .section-intro {
    margin-bottom: 40px;
  }

  .projects-frame,
  .internship-content,
  .split-right {
    padding: 20px;
  }

  .contact-zone {
    padding: 100px 5%;
  }
}

/* Animations personnalisées supplémentaires */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Améliorations de performance */
.hex-inner,
.orbit-ring,
.particle,
.avatar-border {
  will-change: transform;
}

.hero-left,
.hero-right,
.section-intro,
.skill-hex,
.contact-item {
  will-change: opacity, transform;
}

/* Focus states pour l'accessibilité */
.social-link:focus,
.scroll-hint:focus,
.contact-item:focus,
.tech-item:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* États de survol améliorés */
.hero-actions .social-link:hover,
.hero-actions .scroll-hint:hover {
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

/* Animations d'entrée pour les sections */
.section-intro.in-view {
  animation: slideInLeft 0.8s ease-out;
}

.projects-container.in-view,
.internship-content.in-view,
.split-right.in-view {
  animation: scaleIn 0.8s ease-out;
}

/* Smooth scrolling pour tous les navigateurs */
html {
  scroll-behavior: smooth;
}

/* Réduction des mouvements pour l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .particle {
    display: none;
  }

  .orbit-ring {
    animation: none;
  }

  .avatar-border {
    animation: none;
  }
}

/* Styles pour le mode sombre forcé */
@media (prefers-color-scheme: dark) {
  :root {
    --dark-bg: #0a0e27;
    --dark-surface: #151937;
  }
}

/* Optimisations pour les écrans haute résolution */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero-name,
  .heading-main,
  .contact-heading {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
