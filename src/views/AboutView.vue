<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-zone" :class="{ 'hero-loaded': isLoaded }">
      <div class="section-intro">
        <span class="section-number">01</span>
        <h1 class="section-heading">
          <span class="heading-main">À propos</span>
          <span class="heading-sub">Découvrez mon parcours</span>
        </h1>
      </div>

      <div class="hero-grid">
        <div class="hero-left">
          <div class="profile-card">
            <div class="avatar-container">
              <div class="avatar-glow"></div>
              <img
                src="../assets/moon-pfp.jpg"
                alt="Gaël Röthlin - Portrait"
                class="avatar-image"
                @load="handleImageLoad"
              />
              <div class="avatar-ring"></div>
            </div>

            <div class="profile-info">
              <h2 class="profile-name">Gaël Röthlin</h2>
              <div class="role-tags">
                <span class="role-tag primary">Developer</span>
                <span class="role-separator">×</span>
                <span class="role-tag secondary">Artist</span>
              </div>
            </div>

            <div class="status-indicators">
              <div class="status-item">
                <span class="status-icon">🎓</span>
                <span class="status-text">Étudiant Informatique</span>
              </div>
              <div class="status-item">
                <span class="status-icon">🚀</span>
                <span class="status-text">3ème année BUT</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-right">
          <div class="intro-card">
            <div class="card-accent"></div>
            <div class="card-inner">
              <div class="intro-highlight">
                <div class="highlight-icon">✨</div>
                <h3>Ma Passion</h3>
                <p>
                  Création d'applications
                  <span class="text-gradient">TUI</span>
                  innovantes
                </p>
              </div>

              <p class="intro-description">
                Je suis étudiant en
                <span class="text-accent">BUT Informatique</span>, passionné par
                le développement d'interfaces utilisateur en mode texte. Mon
                objectif est de créer des applications à la fois
                <span class="text-gradient">performantes</span> et
                <span class="text-gradient">accessibles</span>.
              </p>

              <div class="info-note">
                <div class="note-icon">ℹ️</div>
                <p>
                  <strong>BUT</strong> = Bachelor Universitaire de Technologie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section
      class="philosophy-zone"
      :class="{ 'section-visible': sectionsVisible }"
    >
      <div class="section-intro">
        <span class="section-number">02</span>
        <h2 class="section-heading">
          <span class="heading-main">Philosophie</span>
          <span class="heading-sub">Ma vision du développement</span>
        </h2>
      </div>

      <div class="philosophy-content">
        <div class="quote-card">
          <div class="quote-marks">"</div>
          <blockquote class="philosophy-quote">
            Bien que j'aime construire des applications, ma véritable passion
            réside dans leur perfectionnement : les rendre sans bugs,
            accessibles et conviviales.
          </blockquote>
          <div class="quote-attribution">
            <div class="attribution-line"></div>
            <span>Gaël Röthlin</span>
          </div>
        </div>

        <div class="philosophy-details">
          <p class="body-text">
            Cette attention aux détails s'étend à mes autres projets, comme la
            création d'un tutoriel complet pour l'installation et la maintenance
            d'
            <span class="text-accent">Arch Linux</span>. Je me concentre sur la
            décomposition détaillée de chaque étape pour aider les utilisateurs
            à surmonter les défis avec confiance.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      class="skills-zone"
      :class="{ 'section-visible': sectionsVisible }"
    >
      <div class="section-intro">
        <span class="section-number">03</span>
        <h2 class="section-heading">
          <span class="heading-main">Compétences</span>
          <span class="heading-sub">Mon expertise technique</span>
        </h2>
      </div>

      <div class="skills-content">
        <div class="skills-grid">
          <div class="skill-card dev-skill">
            <div class="skill-header">
              <div class="skill-icon">💻</div>
              <h3 class="skill-title">Développement</h3>
            </div>
            <div class="skill-body">
              <ul class="skill-list">
                <li class="skill-item">Applications TUI</li>
                <li class="skill-item">Refactoring de code</li>
                <li class="skill-item">Optimisation</li>
                <li class="skill-item">Debug & maintenance</li>
              </ul>
            </div>
            <div class="skill-accent dev-accent"></div>
          </div>

          <div class="skill-card system-skill">
            <div class="skill-header">
              <div class="skill-icon">🔧</div>
              <h3 class="skill-title">Système</h3>
            </div>
            <div class="skill-body">
              <ul class="skill-list">
                <li class="skill-item">Arch Linux</li>
                <li class="skill-item">Configuration système</li>
                <li class="skill-item">Scripts automatisés</li>
                <li class="skill-item">Maintenance serveur</li>
              </ul>
            </div>
            <div class="skill-accent system-accent"></div>
          </div>

          <div class="skill-card art-skill">
            <div class="skill-header">
              <div class="skill-icon">🎨</div>
              <h3 class="skill-title">Art & Créativité</h3>
            </div>
            <div class="skill-body">
              <ul class="skill-list">
                <li class="skill-item">Dark Art</li>
                <li class="skill-item">Doodling</li>
                <li class="skill-item">Design UI/UX</li>
                <li class="skill-item">Illustration digitale</li>
              </ul>
            </div>
            <div class="skill-accent art-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Art Section -->
    <section class="art-zone" :class="{ 'section-visible': sectionsVisible }">
      <div class="section-intro">
        <span class="section-number">04</span>
        <h2 class="section-heading">
          <span class="heading-main">Côté artistique</span>
          <span class="heading-sub">Créativité et expression</span>
        </h2>
      </div>

      <div class="art-content">
        <div class="art-description-card">
          <div class="card-inner">
            <p class="body-text">
              Dans mon temps libre, j'explore mon côté artistique à travers le
              dessin. Bien que j'expérimente avec différents styles d'art, j'ai
              trouvé ma spécialité dans le
              <span class="text-accent">dark art</span> et le
              <span class="text-accent">doodling</span>.
            </p>
          </div>
        </div>

        <div class="social-card">
          <div class="card-inner">
            <div class="social-header">
              <h4>Découvrez mon travail</h4>
              <p class="social-subtitle">
                Explorez mes créations sur Instagram
              </p>
            </div>

            <a
              href="https://www.instagram.com/osiris._25/"
              target="_blank"
              class="instagram-link"
              rel="noopener noreferrer"
              @click="trackInstagramClick"
            >
              <div class="link-bg"></div>
              <div class="instagram-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>
              <div class="instagram-content">
                <span class="instagram-handle">@osiris._25</span>
                <span class="instagram-subtitle">Dark Art & Doodles</span>
              </div>
              <div class="instagram-arrow">→</div>
            </a>
          </div>
          <div class="card-accent"></div>
        </div>
      </div>
    </section>

    <!-- Current Work Section -->
    <section class="work-zone" :class="{ 'section-visible': sectionsVisible }">
      <div class="section-intro">
        <span class="section-number">05</span>
        <h2 class="section-heading">
          <span class="heading-main">Projet actuel</span>
          <span class="heading-sub">Innovation en cours</span>
        </h2>
      </div>

      <div class="work-content">
        <div class="project-highlight-card">
          <div class="card-inner">
            <div class="project-icon">✨</div>
            <h3 class="project-title">Transformation TUI</h3>
            <p class="project-description">
              Transformation d'applications complètes comme
              <span class="text-accent">Spotify</span>
              en versions TUI optimisées pour une expérience utilisateur unique.
            </p>

            <div class="learning-note">
              <p class="body-text">
                <span class="text-gradient">Toujours avide d'expérimenter</span
                >, d'apprendre de nouvelles techniques de développement et
                d'explorer des approches innovantes dans le monde de
                l'informatique.
              </p>
            </div>
          </div>
          <div class="card-accent"></div>
        </div>
      </div>
    </section>

    <!-- Particules de fond -->
    <div class="background-particles">
      <div
        v-for="i in 20"
        :key="i"
        class="particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      isLoaded: false,
      sectionsVisible: false,
    };
  },
  mounted() {
    this.initAnimations();
    this.setupIntersectionObserver();
  },
  methods: {
    initAnimations() {
      setTimeout(() => {
        this.isLoaded = true;
      }, 100);

      setTimeout(() => {
        this.sectionsVisible = true;
      }, 800);
    },

    setupIntersectionObserver() {
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
        ".section-intro, .skill-card, .intro-card"
      );
      elements.forEach((el) => observer.observe(el));
    },

    handleImageLoad() {
      console.log("Profile image loaded");
    },

    trackInstagramClick() {
      console.log("Instagram link clicked");
    },

    getParticleStyle() {
      return {
        left: Math.random() * 100 + "%",
        animationDelay: Math.random() * 20 + "s",
        animationDuration: 15 + Math.random() * 10 + "s",
      };
    },
  },
};
</script>

<style scoped>
/* Variables CSS selon le design system */
.about-container {
  /* Couleurs principales */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;

  /* Texte */
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --text-muted: #6b73a3;

  /* Effets */
  --border-color: rgba(102, 126, 234, 0.1);
  --glass-bg: rgba(255, 255, 255, 0.02);
  --blur-strength: 10px;

  /* Configuration du container */
  font-family: "N27", -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100vh;
  background: var(--dark-bg);
  color: var(--text-primary);
  position: relative;
  overflow-x: hidden;
}

/* Zone principales */
.hero-zone,
.philosophy-zone,
.skills-zone,
.art-zone,
.work-zone {
  padding: 100px 5%;
  position: relative;
}

/* Section intro pattern */
.section-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-intro.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.section-heading {
  text-align: center;
  margin: 0;
}

.heading-main {
  display: block;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 10px;
}

.heading-sub {
  display: block;
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
}

/* Hero Section */
.hero-zone {
  padding-top: 140px;
}

.hero-zone.hero-loaded .section-intro {
  opacity: 1;
  transform: translateY(0);
}

.hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
}

.hero-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
}

.hero-zone.hero-loaded .hero-left,
.hero-zone.hero-loaded .hero-right {
  opacity: 1;
  transform: translateX(0);
}

/* Profile Card */
.profile-card {
  text-align: center;
}

.avatar-container {
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
}

.avatar-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--border-color);
  position: relative;
  z-index: 10;
  transition: all 0.6s ease;
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse-glow 4s ease-in-out infinite;
}

.avatar-ring {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: var(--accent-gradient);
  background-clip: padding-box;
  z-index: 2;
  opacity: 0;
  transition: all 0.6s ease;
}

.avatar-container:hover .avatar-ring {
  opacity: 0.7;
  animation: rotate 8s linear infinite;
}

.avatar-container:hover .avatar-image {
  transform: scale(1.05);
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.02);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 20px 0;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role-tags {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.role-tag {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 25px;
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.role-tag.primary {
  color: var(--text-primary);
}

.role-tag.secondary {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role-separator {
  color: var(--text-muted);
  font-size: 1.2rem;
}

.status-indicators {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  backdrop-filter: blur(var(--blur-strength));
  transition: all 0.3s ease;
}

.status-item:hover {
  transform: translateY(-3px);
  border-color: var(--accent-color);
}

.status-icon {
  font-size: 1.2rem;
}

.status-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

/* Intro Card */
.intro-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(var(--blur-strength));
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.intro-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
}

.card-inner {
  padding: 40px;
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary-gradient);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.intro-card:hover .card-accent {
  transform: translateX(0);
}

.intro-highlight {
  background: rgba(102, 126, 234, 0.08);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.intro-highlight h3 {
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  color: var(--text-primary);
}

.intro-highlight p {
  color: var(--text-secondary);
  margin: 0;
}

.intro-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 30px;
  text-align: justify;
}

.text-gradient {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.text-accent {
  color: var(--accent-color);
  font-weight: 600;
}

.info-note {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(75, 172, 254, 0.05);
  border: 1px solid rgba(75, 172, 254, 0.15);
  border-radius: 12px;
}

.note-icon {
  font-size: 1.3rem;
}

.info-note p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Philosophy Section */
.philosophy-content {
  max-width: 800px;
  margin: 0 auto;
}

.quote-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  backdrop-filter: blur(var(--blur-strength));
  margin-bottom: 40px;
  position: relative;
}

.quote-marks {
  font-size: 6rem;
  font-family: serif;
  color: rgba(102, 126, 234, 0.3);
  line-height: 1;
  margin-bottom: -20px;
}

.philosophy-quote {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--text-primary);
  font-style: italic;
  margin: 20px 0;
}

.quote-attribution {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.attribution-line {
  width: 50px;
  height: 2px;
  background: var(--primary-gradient);
}

.philosophy-details {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease 0.3s;
}

.philosophy-zone.section-visible .philosophy-details {
  opacity: 1;
  transform: translateY(0);
}

.body-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: justify;
}

/* Skills Section */
.skills-content {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.skill-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(var(--blur-strength));
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(30px);
}

.skill-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.skill-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.skill-icon {
  font-size: 2rem;
}

.skill-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-item {
  padding: 12px 0;
  color: var(--text-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  padding-left: 20px;
}

.skill-item::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--accent-color);
  transition: all 0.3s ease;
}

.skill-item:hover {
  color: var(--text-primary);
  padding-left: 30px;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.dev-accent {
  background: var(--primary-gradient);
}

.system-accent {
  background: var(--accent-gradient);
}

.art-accent {
  background: var(--secondary-gradient);
}

.skill-card:hover .skill-accent {
  transform: translateX(0);
}

.art-content {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 40px;
}

.art-description-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(var(--blur-strength));
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.art-description-card:hover {
  transform: translateY(-5px);
  border-color: rgba(102, 126, 234, 0.3);
}

.art-description-card .card-inner {
  padding: 40px;
}

.social-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(var(--blur-strength));
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.social-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(247, 37, 133, 0.2);
}

.social-header {
  margin-bottom: 30px;
}

.social-header h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 10px 0;
}

.social-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;
}

.instagram-link {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: rgba(247, 37, 133, 0.08);
  border: 1px solid rgba(247, 37, 133, 0.2);
  border-radius: 15px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.instagram-link:hover {
  background: rgba(247, 37, 133, 0.15);
  border-color: var(--accent-color);
  transform: translateX(5px);
}

.link-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--secondary-gradient);
  opacity: 0.1;
  transition: left 0.3s ease;
  z-index: -1;
}

.instagram-link:hover .link-bg {
  left: 0;
}

.instagram-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--secondary-gradient);
  border-radius: 12px;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.instagram-link:hover .instagram-icon {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(247, 37, 133, 0.3);
}

.instagram-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.instagram-handle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.instagram-subtitle {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.instagram-arrow {
  font-size: 1.2rem;
  color: var(--accent-color);
  transition: all 0.3s ease;
}

.instagram-link:hover .instagram-arrow {
  transform: translateX(5px);
}

/* Work Section */
.work-content {
  max-width: 800px;
  margin: 0 auto;
}

.project-highlight-card {
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(var(--blur-strength));
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-highlight-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25);
}

.project-highlight-card .card-inner {
  padding: 50px 40px;
  text-align: center;
}

.project-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 20px 0;
}

.project-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.learning-note {
  padding: 30px;
  background: rgba(75, 172, 254, 0.08);
  border: 1px solid rgba(75, 172, 254, 0.2);
  border-radius: 15px;
  position: relative;
}

.learning-note::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-gradient);
}

/* Background Particles */
.background-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent-color);
  border-radius: 50%;
  opacity: 0.6;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: translateY(90vh) scale(1) rotate(45deg);
  }
  90% {
    opacity: 0.6;
    transform: translateY(10vh) scale(1) rotate(315deg);
  }
  100% {
    transform: translateY(-10vh) scale(0) rotate(360deg);
    opacity: 0;
  }
}

/* Particules avec différentes tailles */
.particle:nth-child(3n) {
  width: 2px;
  height: 2px;
  background: rgba(102, 126, 234, 0.8);
}

.particle:nth-child(5n) {
  width: 4px;
  height: 4px;
  background: rgba(116, 75, 162, 0.6);
}

.particle:nth-child(7n) {
  width: 1px;
  height: 1px;
  background: rgba(75, 172, 254, 0.9);
}

/* Sections animations entrée */
.philosophy-zone,
.skills-zone,
.art-zone,
.work-zone {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.philosophy-zone.section-visible,
.skills-zone.section-visible,
.art-zone.section-visible,
.work-zone.section-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-grid {
    gap: 60px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-left {
    order: 1;
  }

  .hero-right {
    order: 2;
  }

  .status-indicators {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .role-tags {
    flex-direction: column;
    gap: 15px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-zone,
  .philosophy-zone,
  .skills-zone,
  .art-zone,
  .work-zone {
    padding: 80px 5%;
  }

  .avatar-image {
    width: 150px;
    height: 150px;
  }

  .profile-name {
    font-size: 2rem;
  }

  .intro-card .card-inner,
  .skill-card,
  .social-card .card-inner,
  .project-highlight-card .card-inner {
    padding: 30px;
  }

  .quote-card {
    padding: 40px 25px;
  }

  .philosophy-quote {
    font-size: 1.1rem;
  }

  .instagram-link {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .instagram-arrow {
    transform: rotate(90deg);
  }

  .instagram-link:hover .instagram-arrow {
    transform: rotate(90deg) translateX(5px);
  }
}

@media (max-width: 480px) {
  .hero-zone,
  .philosophy-zone,
  .skills-zone,
  .art-zone,
  .work-zone {
    padding: 60px 5%;
  }

  .section-intro {
    margin-bottom: 50px;
  }

  .avatar-image {
    width: 120px;
    height: 120px;
  }

  .status-item {
    padding: 10px 20px;
  }

  .intro-card .card-inner,
  .skill-card,
  .social-card .card-inner,
  .project-highlight-card .card-inner {
    padding: 25px;
  }

  .quote-card {
    padding: 30px 20px;
  }

  .quote-marks {
    font-size: 4rem;
    margin-bottom: -10px;
  }

  .project-title {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1.1rem;
  }
}

/* Animations avancées */
@keyframes pulse-glow {
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* États de focus pour l'accessibilité */
.instagram-link:focus,
.intro-card:focus-within,
.skill-card:focus-within,
.social-card:focus-within {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Réduction de mouvement pour l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none;
  }

  .avatar-glow {
    animation: none;
  }

  .avatar-ring {
    animation: none;
  }

  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* Modes sombre amélioré */
@media (prefers-color-scheme: dark) {
  .about-container {
    --glass-bg: rgba(255, 255, 255, 0.03);
    --border-color: rgba(102, 126, 234, 0.15);
  }
}

/* États hover globaux */
.intro-card:hover .card-accent,
.social-card:hover .card-accent,
.project-highlight-card:hover .card-accent {
  transform: translateX(0);
}

/* Performance optimizations */
.avatar-image,
.instagram-icon,
.particle {
  will-change: transform;
}

.card-accent,
.link-bg {
  will-change: transform;
}

/* Loading states */
.avatar-image {
  transition: opacity 0.3s ease;
}

.avatar-image.loaded {
  opacity: 1;
}
</style>
