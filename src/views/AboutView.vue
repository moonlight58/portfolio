<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="profile-container">
        <div class="profile-image-wrapper">
          <img src="../assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-image" />
          <div class="profile-glow"></div>
        </div>
        <div class="profile-info">
          <h1 class="profile-name">Gaël Röthlin</h1>
          <p class="profile-subtitle">Developer and Artist</p>
          <div class="profile-badges">
            <span class="badge student-badge">Étudiant en Informatique</span>
            <span class="badge year-badge">3ème année BUT</span>
          </div>
        </div>
      </div>
    </div>

    <div class="about-content">
      <!-- Introduction Section -->
      <section class="content-section">
        <h2><span class="emoji">🎯</span> À propos de moi</h2>
        <div class="content-card">
          <p>
            Je suis étudiant en deuxième année de BUT<span class="warning">*</span> Informatique, 
            passionné à la fois par le hardware et le software. Récemment, j'ai développé un 
            intérêt particulier pour la création d'applications TUI (Text User Interface), 
            qui est rapidement devenu l'un de mes domaines d'exploration favoris.
          </p>
          <p class="precision">
            <span class="warning">*</span>Bachelor Universitaire de Technologie
          </p>
        </div>
      </section>

      <!-- Passion Section -->
      <section class="content-section">
        <h2><span class="emoji">💻</span> Ma passion</h2>
        <div class="content-card">
          <p>
            Mon projet actuel se concentre sur la transformation d'applications complètes 
            comme Spotify en versions TUI optimisées. Bien que j'aime construire des 
            applications, ma véritable passion réside dans leur perfectionnement : 
            les rendre sans bugs, accessibles et conviviales.
          </p>
          <p>
            Cette attention aux détails s'étend à mes autres projets, comme la création 
            d'un tutoriel complet pour l'installation et la maintenance d'Arch Linux. 
            Je me concentre sur la décomposition détaillée de chaque étape pour aider 
            les utilisateurs à surmonter les défis avec confiance.
          </p>
        </div>
      </section>

      <!-- Skills & Interests -->
      <section class="content-section">
        <h2><span class="emoji">🚀</span> Compétences & Intérêts</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-icon">💻</div>
            <h3>Développement</h3>
            <p>Applications TUI, refactoring de code, optimisation</p>
          </div>
          <div class="skill-card">
            <div class="skill-icon">🔧</div>
            <h3>Système</h3>
            <p>Arch Linux, configuration système, maintenance</p>
          </div>
          <div class="skill-card">
            <div class="skill-icon">🎨</div>
            <h3>Art</h3>
            <p>Dessin, dark art, doodling, exploration artistique</p>
          </div>
        </div>
      </section>

      <!-- Art Section -->
      <section class="content-section">
        <h2><span class="emoji">🎨</span> Côté artistique</h2>
        <div class="content-card art-section">
          <p>
            Dans mon temps libre, j'explore mon côté artistique à travers le dessin. 
            Bien que j'expérimente avec différents styles d'art, j'ai trouvé ma spécialité 
            dans le dark art et le doodling. Vous pouvez découvrir mon travail sur mon 
            compte Instagram.
          </p>
          <div class="social-link-container">
            <a 
              href="https://www.instagram.com/osiris._25/" 
              target="_blank" 
              class="instagram-link"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@osiris._25</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="content-section">
        <h2><span class="emoji">🌟</span> Philosophie</h2>
        <div class="content-card philosophy-card">
          <blockquote>
            <p>
              "Je suis toujours avide d'expérimenter, d'apprendre de nouvelles techniques 
              de développement et d'explorer des approches innovantes dans le monde de 
              l'informatique."
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: "N27", sans-serif;
  margin-top: 10rem;
  padding: 0 2rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: #f8fafc;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(59, 130, 246, 0.03));
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-container {
  background: rgba(248, 250, 252, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  padding: 3rem 2rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1),
              0 0 0 1px rgba(248, 250, 252, 0.05) inset;
  transition: all 0.3s ease;
}

.profile-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.6), rgba(59, 130, 246, 0.6), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.profile-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 64px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(248, 250, 252, 0.08) inset;
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.profile-image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(167, 139, 250, 0.4);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2),
              0 0 0 1px rgba(248, 250, 252, 0.1) inset;
  transition: all 0.4s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  border-color: rgba(167, 139, 250, 0.6);
  box-shadow: 0 16px 48px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(248, 250, 252, 0.15) inset;
}

.profile-glow {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.3), rgba(59, 130, 246, 0.2), transparent);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
  filter: blur(8px);
}

.profile-image-wrapper:hover .profile-glow {
  opacity: 1;
}

.profile-name {
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #f8fafc, #a78bfa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.3);
}

.profile-subtitle {
  font-size: 1.4rem;
  color: rgba(248, 250, 252, 0.7);
  font-style: italic;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
  font-weight: 300;
}

.profile-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.6rem 1.2rem;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.student-badge {
  background: rgba(167, 139, 250, 0.15);
  color: #c4b5fd;
  border: 1px solid rgba(167, 139, 250, 0.3);
}

.student-badge:hover {
  background: rgba(167, 139, 250, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.2);
}

.year-badge {
  background: rgba(52, 211, 153, 0.15);
  color: #6ee7b7;
  border: 1px solid rgba(52, 211, 153, 0.3);
}

.year-badge:hover {
  background: rgba(52, 211, 153, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(52, 211, 153, 0.2);
}

/* Content Sections */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease-out forwards;
}

.content-section:nth-child(1) { animation-delay: 0.3s; }
.content-section:nth-child(2) { animation-delay: 0.4s; }
.content-section:nth-child(3) { animation-delay: 0.5s; }
.content-section:nth-child(4) { animation-delay: 0.6s; }
.content-section:nth-child(5) { animation-delay: 0.7s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.content-section h2 {
  color: #c4b5fd;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(167, 139, 250, 0.2);
  background: linear-gradient(135deg, #c4b5fd, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.emoji {
  background: none !important;
  -webkit-background-clip: initial !important;
  -webkit-text-fill-color: initial !important;
  background-clip: initial !important;
  color: initial !important;
  filter: none !important;
}

.content-card {
  background: rgba(248, 250, 252, 0.06);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.08),
              0 0 0 1px rgba(248, 250, 252, 0.05) inset;
  transition: all 0.3s ease;
}

.content-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.4), rgba(59, 130, 246, 0.4), transparent);
}

.content-card:hover {
  transform: translateY(-4px);
  border-color: rgba(167, 139, 250, 0.25);
  box-shadow: 0 16px 48px rgba(139, 92, 246, 0.12),
              0 0 0 1px rgba(248, 250, 252, 0.08) inset;
}

.content-card p {
  margin: 0 0 1.5rem 0;
  line-height: 1.8;
  font-size: 1.05rem;
  color: rgba(248, 250, 252, 0.9);
  text-align: justify;
  font-weight: 300;
}

.content-card p:last-child {
  margin-bottom: 0;
}

.precision {
  font-size: 0.9rem !important;
  color: rgba(248, 250, 252, 0.6) !important;
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0 !important;
}

.warning {
  color: #fbbf24;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: rgba(248, 250, 252, 0.05);
  border: 1px solid rgba(167, 139, 250, 0.12);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s ease;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(139, 92, 246, 0.06);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.4), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow: 0 20px 64px rgba(139, 92, 246, 0.15);
  background: rgba(248, 250, 252, 0.08);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: block;
  filter: drop-shadow(0 0 20px rgba(167, 139, 250, 0.3));
}

.skill-card h3 {
  color: #c4b5fd;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #c4b5fd, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skill-card p {
  color: rgba(248, 250, 252, 0.7);
  margin: 0;
  line-height: 1.6;
  font-weight: 300;
}

/* Art Section */
.art-section {
  text-align: center;
}

.social-link-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #f93a3d, #e1306c, #833ab4, #405de6);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(240, 58, 61, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.instagram-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.instagram-link:hover::before {
  left: 100%;
}

.instagram-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(240, 58, 61, 0.4);
}

/* Philosophy Section */
.philosophy-card {
  background: rgba(52, 211, 153, 0.06);
  border-color: rgba(52, 211, 153, 0.15);
}

.philosophy-card::before {
  background: linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.4), transparent);
}

.philosophy-card blockquote {
  margin: 0;
  position: relative;
  font-style: italic;
  font-size: 1.15rem;
}

.philosophy-card blockquote::before {
  content: '"';
  font-size: 4rem;
  color: #6ee7b7;
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  opacity: 0.3;
  font-family: serif;
}

.philosophy-card blockquote p {
  color: rgba(248, 250, 252, 0.9);
  text-align: center;
  font-weight: 400;
  line-height: 1.8;
}

/* Focus states for accessibility */
.instagram-link:focus,
.skill-card:focus,
.content-card:focus {
  outline: 2px solid rgba(167, 139, 250, 0.5);
  outline-offset: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .profile-container {
    padding: 2rem 1.5rem;
  }

  .profile-name {
    font-size: 2.2rem;
  }

  .profile-subtitle {
    font-size: 1.1rem;
  }

  .profile-badges {
    flex-direction: column;
    align-items: center;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .content-card {
    padding: 2rem;
  }

  .content-section h2 {
    font-size: 1.4rem;
  }

  .skill-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 110px;
    height: 110px;
  }

  .profile-name {
    font-size: 1.9rem;
  }

  .skill-card {
    padding: 1.8rem;
  }

  .skill-icon {
    font-size: 3rem;
  }

  .instagram-link {
    padding: 1rem 2rem;
    font-size: 0.95rem;
  }

  .content-card {
    padding: 1.5rem;
  }
}
</style>