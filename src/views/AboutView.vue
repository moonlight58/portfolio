<template>
  <div class="about-container">
    <!-- Hero Section avec animation d'entrée -->
    <section class="hero-section" :class="{ visible: isLoaded }">
      <div class="hero-card">
        <div class="profile-showcase">
          <div class="avatar-container">
            <div class="avatar-glow"></div>
            <img
              src="../assets/moon-pfp.webp"
              alt="Gaël Röthlin - Portrait"
              class="avatar-image"
              @load="handleImageLoad"
            />
            <div class="avatar-ring"></div>
          </div>

          <div class="hero-content">
            <h1 class="hero-title">
              <span class="name-text">Gaël Röthlin</span>
              <div class="title-underline"></div>
            </h1>

            <div class="role-container">
              <span class="role-primary">Developer</span>
              <span class="role-separator">×</span>
              <span class="role-secondary">Artist</span>
            </div>

            <div class="status-badges">
              <div class="badge badge-student">
                <span class="badge-icon">🎓</span>
                <span>Étudiant Informatique</span>
              </div>
              <div class="badge badge-level">
                <span class="badge-icon">🚀</span>
                <span>3ème année BUT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sections de contenu -->
    <div class="content-sections">
      <!-- Section Introduction -->
      <section class="content-section" :class="{ visible: sectionsVisible }">
        <div class="section-header">
          <div class="section-icon">🎯</div>
          <h2 class="section-title">À propos de moi</h2>
          <div class="section-accent"></div>
        </div>

        <div class="glass-card intro-card">
          <div class="card-content">
            <p class="intro-text">
              Je suis étudiant en deuxième année de
              <span class="highlight">BUT Informatique</span>, passionné à la
              fois par le hardware et le software. Récemment, j'ai développé un
              intérêt particulier pour la création d'applications
              <span class="highlight">TUI</span>
              (Text User Interface), qui est rapidement devenu l'un de mes
              domaines d'exploration favoris.
            </p>

            <div class="note-container">
              <div class="note-icon">ℹ️</div>
              <p class="note-text">
                <strong>BUT</strong> = Bachelor Universitaire de Technologie
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Passion -->
      <section class="content-section" :class="{ visible: sectionsVisible }">
        <div class="section-header">
          <div class="section-icon">💻</div>
          <h2 class="section-title">Ma passion</h2>
          <div class="section-accent"></div>
        </div>

        <div class="glass-card passion-card">
          <div class="card-content">
            <div class="passion-highlight">
              <div class="highlight-icon">✨</div>
              <h3>Projet actuel</h3>
              <p>
                Transformation d'applications complètes comme
                <span class="brand-highlight">Spotify</span>
                en versions TUI optimisées
              </p>
            </div>

            <div class="philosophy-box">
              <blockquote>
                <p>
                  "Bien que j'aime construire des applications, ma véritable
                  passion réside dans leur perfectionnement : les rendre sans
                  bugs, accessibles et conviviales."
                </p>
              </blockquote>
            </div>

            <p class="passion-description">
              Cette attention aux détails s'étend à mes autres projets, comme la
              création d'un tutoriel complet pour l'installation et la
              maintenance d'<span class="tech-highlight">Arch Linux</span>. Je
              me concentre sur la décomposition détaillée de chaque étape pour
              aider les utilisateurs à surmonter les défis avec confiance.
            </p>
          </div>
        </div>
      </section>

      <!-- Section Compétences -->
      <section
        class="content-section skills-section"
        :class="{ visible: sectionsVisible }"
      >
        <div class="section-header">
          <div class="section-icon">🚀</div>
          <h2 class="section-title">Compétences & Expertise</h2>
          <div class="section-accent"></div>
        </div>

        <div class="skills-grid">
          <div class="skill-card dev-card">
            <div class="skill-header">
              <div class="skill-icon">💻</div>
              <h3>Développement</h3>
            </div>
            <div class="skill-content">
              <ul class="skill-list">
                <li>Applications TUI</li>
                <li>Refactoring de code</li>
                <li>Optimisation</li>
                <li>Debug & maintenance</li>
              </ul>
            </div>
            <div class="skill-glow dev-glow"></div>
          </div>

          <div class="skill-card system-card">
            <div class="skill-header">
              <div class="skill-icon">🔧</div>
              <h3>Système</h3>
            </div>
            <div class="skill-content">
              <ul class="skill-list">
                <li>Arch Linux</li>
                <li>Configuration système</li>
                <li>Scripts automatisés</li>
                <li>Maintenance serveur</li>
              </ul>
            </div>
            <div class="skill-glow system-glow"></div>
          </div>

          <div class="skill-card art-card">
            <div class="skill-header">
              <div class="skill-icon">🎨</div>
              <h3>Art & Créativité</h3>
            </div>
            <div class="skill-content">
              <ul class="skill-list">
                <li>Dark Art</li>
                <li>Doodling</li>
                <li>Design UI/UX</li>
                <li>Illustration digitale</li>
              </ul>
            </div>
            <div class="skill-glow art-glow"></div>
          </div>
        </div>
      </section>

      <!-- Section Art -->
      <section class="content-section" :class="{ visible: sectionsVisible }">
        <div class="section-header">
          <div class="section-icon">🎨</div>
          <h2 class="section-title">Côté artistique</h2>
          <div class="section-accent"></div>
        </div>

        <div class="glass-card art-showcase-card">
          <div class="card-content">
            <div class="art-description">
              <p>
                Dans mon temps libre, j'explore mon côté artistique à travers le
                dessin. Bien que j'expérimente avec différents styles d'art,
                j'ai trouvé ma spécialité dans le
                <span class="art-highlight">dark art</span> et le
                <span class="art-highlight">doodling</span>.
              </p>
            </div>

            <div class="social-showcase">
              <div class="social-header">
                <h4>Découvrez mon travail</h4>
                <div class="social-subtitle">
                  Explorez mes créations sur Instagram
                </div>
              </div>

              <a
                href="https://www.instagram.com/osiris._25/"
                target="_blank"
                class="instagram-cta"
                rel="noopener noreferrer"
                @click="trackInstagramClick"
              >
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
          </div>
        </div>
      </section>

      <!-- Section Philosophy -->
      <section
        class="content-section final-section"
        :class="{ visible: sectionsVisible }"
      >
        <div class="section-header">
          <div class="section-icon">🌟</div>
          <h2 class="section-title">Philosophie</h2>
          <div class="section-accent"></div>
        </div>

        <div class="glass-card philosophy-card">
          <div class="card-content">
            <div class="quote-container">
              <div class="quote-mark-left">“</div>
              <blockquote class="philosophy-quote">
                <p>
                  Je suis toujours avide d'expérimenter, d'apprendre de
                  nouvelles techniques de développement et d'explorer des
                  approches innovantes dans le monde de l'informatique.
                </p>
              </blockquote>
              <div class="quote-mark-right">”</div>

              <div class="quote-attribution">
                <div class="attribution-line"></div>
                <span>Gaël Röthlin</span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    // Animation d'entrée progressive
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);

    setTimeout(() => {
      this.sectionsVisible = true;
    }, 600);
  },
  methods: {
    handleImageLoad() {
      // Gestion du chargement d'image si nécessaire
      console.log("Profile image loaded");
    },
    trackInstagramClick() {
      // Analytics ou tracking si nécessaire
      console.log("Instagram link clicked");
    },
  },
};
</script>

<style scoped>
/* Container principal avec définition des variables CSS au bon endroit */
.about-container {
  font-family: "N27", -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(118, 75, 162, 0.08) 25%,
    rgba(240, 147, 251, 0.05) 50%,
    rgba(75, 172, 254, 0.08) 75%,
    rgba(0, 242, 254, 0.05) 100%
  );
  padding: 2rem;
  margin-top: 8rem;
  color: #ffffff;

  /* Variables CSS définies dans le composant */
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

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
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
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.6s ease;
}

.hero-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-gradient);
  opacity: 0.8;
}

.hero-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.profile-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

/* Avatar */
.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 3;
  transition: all 0.8s ease;
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
  animation: pulse-glow 3s ease-in-out infinite;
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: var(--accent-gradient);
  background-clip: padding-box;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.avatar-container:hover .avatar-ring {
  opacity: 0.6;
  animation: rotate 8s linear infinite;
}

.avatar-container:hover .avatar-image {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Hero Content avec corrections de couleurs */
.hero-content {
  max-width: 600px;
}

.hero-title {
  margin: 0 0 1rem 0;
  position: relative;
}

.name-text {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #ffffff;
  /* Fallback pour les navigateurs qui ne supportent pas background-clip */
  display: block;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Support pour les navigateurs qui ne supportent pas background-clip: text */
@supports not (-webkit-background-clip: text) {
  .name-text {
    color: #ffffff;
  }
}

.title-underline {
  height: 4px;
  background: var(--accent-gradient);
  border-radius: 2px;
  margin: 1rem auto;
  width: 80px;
  opacity: 0;
  transform: scaleX(0);
  transition: all 1s ease 0.5s;
}

.hero-section.visible .title-underline {
  opacity: 1;
  transform: scaleX(1);
}

.role-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.role-primary {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

.role-separator {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
}

.role-secondary {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #f093fb;
  /* Fallback */
}

@supports not (-webkit-background-clip: text) {
  .role-secondary {
    color: #f093fb;
  }
}

/* Status Badges */
.status-badges {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.95rem;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.badge-student {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.badge-level {
  background: rgba(75, 172, 254, 0.15);
  border: 1px solid rgba(75, 172, 254, 0.3);
  color: #7dd3fc;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.badge-icon {
  font-size: 1.1em;
}

/* Content Sections */
.content-sections {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.content-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-section:nth-child(1) {
  transition-delay: 0.1s;
}

.content-section:nth-child(2) {
  transition-delay: 0.2s;
}

.content-section:nth-child(3) {
  transition-delay: 0.3s;
}

.content-section:nth-child(4) {
  transition-delay: 0.4s;
}

.content-section:nth-child(5) {
  transition-delay: 0.5s;
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.section-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.5));
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #ffffff;
  /* Fallback */
  margin: 0;
  flex: 1;
}

@supports not (-webkit-background-clip: text) {
  .section-title {
    color: #ffffff;
  }
}

.section-accent {
  flex: 1;
  height: 2px;
  background: var(--accent-gradient);
  border-radius: 1px;
  opacity: 0.6;
}

/* Glass Cards */
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
  color: rgba(255, 255, 255, 0.8);
}

.glass-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0.5;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.card-content {
  padding: 3rem;
}

/* Content Styling */
.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2rem 0;
  text-align: justify;
}

.highlight {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #4facfe;
  /* Fallback */
  font-weight: 600;
}

@supports not (-webkit-background-clip: text) {
  .highlight {
    color: #4facfe;
  }
}

.note-container {
  background: rgba(75, 172, 254, 0.1);
  border: 1px solid rgba(75, 172, 254, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.note-icon {
  font-size: 1.5rem;
}

.note-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.note-text strong {
  color: #ffffff;
  font-weight: 600;
}

/* Passion Card */
.passion-highlight {
  background: rgba(240, 147, 251, 0.08);
  border: 1px solid rgba(240, 147, 251, 0.15);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.passion-highlight h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem 0;
}

.passion-highlight p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.brand-highlight {
  color: #1db954;
  font-weight: 600;
}

.tech-highlight {
  color: #1793d1;
  font-weight: 600;
}

.philosophy-box {
  background: rgba(102, 126, 234, 0.08);
  border-left: 4px solid rgba(102, 126, 234, 0.5);
  border-radius: 0 16px 16px 0;
  padding: 2rem;
  margin: 2rem 0;
}

.philosophy-box blockquote {
  margin: 0;
  font-style: italic;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.philosophy-box blockquote p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.passion-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-align: justify;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.08);
  color: rgba(255, 255, 255, 0.8);
}

.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dev-card::before {
  background: var(--primary-gradient);
}

.system-card::before {
  background: var(--accent-gradient);
}

.art-card::before {
  background: var(--secondary-gradient);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.skill-icon {
  font-size: 1.8rem;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.4));
}

.skill-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-list li {
  padding: 0.75rem 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  padding-left: 1.5rem;
}

.skill-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: rgba(102, 126, 234, 0.7);
  font-weight: bold;
  transition: all 0.3s ease;
}

.skill-list li:hover {
  color: #ffffff;
  padding-left: 2rem;
}

.skill-list li:hover::before {
  color: rgba(102, 126, 234, 1);
  transform: translateX(0.5rem);
}

.skill-list li:last-child {
  border-bottom: none;
}

/* Skill Card Glows */
.skill-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transition: opacity 0.6s ease;
  filter: blur(30px);
  z-index: -1;
}

.dev-glow {
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.3) 0%,
    transparent 70%
  );
}

.system-glow {
  background: radial-gradient(
    circle,
    rgba(75, 172, 254, 0.3) 0%,
    transparent 70%
  );
}

.art-glow {
  background: radial-gradient(
    circle,
    rgba(240, 147, 251, 0.3) 0%,
    transparent 70%
  );
}

.skill-card:hover .skill-glow {
  opacity: 1;
}

/* Art Showcase Card */
.art-showcase-card {
  background: linear-gradient(
    135deg,
    rgba(240, 147, 251, 0.08) 0%,
    rgba(245, 87, 108, 0.06) 100%
  );
  border: 1px solid rgba(240, 147, 251, 0.15);
}

.art-description {
  margin-bottom: 3rem;
}

.art-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-align: justify;
}

.art-highlight {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #f093fb;
  /* Fallback */
  font-weight: 600;
}

@supports not (-webkit-background-clip: text) {
  .art-highlight {
    color: #f093fb;
  }
}

/* Social Showcase */
.social-showcase {
  background: rgba(240, 147, 251, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(240, 147, 251, 0.1);
}

.social-header {
  text-align: center;
  margin-bottom: 2rem;
}

.social-header h4 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.social-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

/* Instagram CTA */
.instagram-cta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: rgba(240, 147, 251, 0.1);
  border: 2px solid rgba(240, 147, 251, 0.2);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.instagram-cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(240, 147, 251, 0.1) 50%,
    transparent 100%
  );
  transition: left 0.6s ease;
}

.instagram-cta:hover::before {
  left: 100%;
}

.instagram-cta:hover {
  transform: translateY(-3px);
  border-color: rgba(240, 147, 251, 0.4);
  box-shadow: 0 15px 40px rgba(240, 147, 251, 0.3);
}

.instagram-icon {
  width: 48px;
  height: 48px;
  background: var(--secondary-gradient);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
  transition: all 0.3s ease;
}

.instagram-cta:hover .instagram-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(240, 147, 251, 0.6);
}

.instagram-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.instagram-handle {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
}

.instagram-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.instagram-arrow {
  font-size: 1.5rem;
  color: rgba(240, 147, 251, 0.7);
  transition: all 0.3s ease;
}

.instagram-cta:hover .instagram-arrow {
  transform: translateX(5px);
  color: rgba(240, 147, 251, 1);
}

/* Philosophy Card */
.philosophy-card {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.08) 0%,
    rgba(118, 75, 162, 0.06) 100%
  );
  border: 1px solid rgba(102, 126, 234, 0.15);
}

.quote-container {
  position: relative;
  text-align: center;
}

.quote-mark-left,
.quote-mark-right {
  font-size: 6rem;
  font-family: serif;
  color: rgba(102, 126, 234, 0.3);
  line-height: 1;
  display: flex;
}

.quote-mark-left {
  margin-bottom: -2rem;
}

.quote-mark-right {
  line-height: 0;
  flex-direction: row-reverse;
}

.philosophy-quote {
  margin: 0 0 2rem 0;
  position: relative;
}

.philosophy-quote p {
  font-size: 1.3rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-style: italic;
  font-weight: 400;
}

.quote-attribution {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.attribution-line {
  width: 40px;
  height: 2px;
  background: var(--primary-gradient);
  border-radius: 1px;
}

.quote-attribution span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
    margin-top: 2rem;
  }

  .hero-card {
    padding: 2.5rem 1.5rem;
  }

  .profile-showcase {
    gap: 1.5rem;
  }

  .avatar-image {
    width: 120px;
    height: 120px;
  }

  .name-text {
    font-size: 2.5rem;
  }

  .role-container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .status-badges {
    flex-direction: column;
    gap: 1rem;
  }

  .content-sections {
    gap: 3rem;
  }

  .card-content {
    padding: 2rem 1.5rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .section-accent {
    width: 100%;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-card {
    padding: 2rem 1.5rem;
  }

  .instagram-cta {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 2rem 1.5rem;
  }

  .quote-mark {
    font-size: 4rem;
    margin-bottom: -1rem;
  }

  .philosophy-quote p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-card {
    padding: 2rem 1rem;
  }

  .avatar-image {
    width: 100px;
    height: 100px;
  }

  .name-text {
    font-size: 2rem;
  }

  .card-content {
    padding: 1.5rem 1rem;
  }

  .skill-card {
    padding: 1.5rem 1rem;
  }

  .section-icon {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.4rem;
  }
}

/* Animations additionnelles */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.hero-card:hover {
  animation: float 6s ease-in-out infinite;
}

/* Smooth scrolling pour les navigateurs qui le supportent */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Amélioration de l'accessibilité */
.instagram-cta:focus-visible,
.skill-card:focus-visible,
.glass-card:focus-visible {
  outline: 2px solid rgba(102, 126, 234, 0.6);
  outline-offset: 4px;
}

/* Print styles */
@media print {
  .about-container {
    background: white;
    color: black;
    margin-top: 0;
    padding: 1rem;
  }

  .glass-card {
    background: white;
    border: 1px solid #ddd;
    box-shadow: none;
  }

  .hero-card::before,
  .glass-card::before,
  .skill-card::before {
    display: none;
  }
}
</style>
