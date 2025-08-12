<template>
  <div class="uiux-zone">
    <div class="section-intro">
      <span class="section-number">04</span>
      <h2 class="section-heading">
        <span class="heading-main">UI/UX Styles</span>
        <span class="heading-sub">Explorez différentes approches design</span>
      </h2>
    </div>

    <!-- Contenu principal -->
    <div class="uiux-content">
      <div class="styles-wrapper">
        <div class="styles-grid">
          <!-- Ready or Not Style -->
          <div
            class="style-card tactical-theme"
            @click="navigateToStyle('ReadyOrNot')"
          >
            <div class="style-preview">
              <div class="tactical-overlay">
                <div class="tactical-line"></div>
                <div class="tactical-scan"></div>
              </div>
              <h3 class="style-name">Ready Or Not</h3>
              <div class="style-description">
                Interface tactique inspirée du jeu Ready or Not
              </div>
              <div class="tactical-status">
                <div class="status-dot"></div>
                <span>SYSTÈME OPÉRATIONNEL</span>
              </div>
            </div>
          </div>

          <!-- Neumorphism Style -->
          <div
            class="style-card neumorphism-theme"
            @click="navigateToStyle('Neumorphism')"
          >
            <div class="style-preview">
              <div class="neumorphism-overlay">
                <div class="neumorphism-btn"></div>
              </div>
              <h3 class="style-name">Neumorphism</h3>
              <div class="style-description">
                Design moderne avec effets de profondeur et ombres douces
              </div>
            </div>
          </div>

          <!-- Minimalist Style -->
          <div
            class="style-card minimalist-theme"
            @click="navigateToStyle('Minimalist')"
          >
            <div class="style-preview">
              <div class="minimalist-overlay">
                <div class="minimalist-line"></div>
              </div>
              <h3 class="style-name">Minimaliste</h3>
              <div class="style-description">
                Design épuré et élégant inspiré de la typographie classique
                <br />
                (Brutalism + Swiss Design)
              </div>
              <div class="minimalist-accent"></div>
            </div>
          </div>
        </div>

        <div class="view-all-container">
          <button class="view-all-btn" @click="navigateToGallery">
            <span class="btn-content">
              <span class="btn-icon">🎨</span>
              <span class="btn-text">Découvrir tous les styles</span>
            </span>
            <div class="btn-bg"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UI-UX",
  methods: {
    navigateToStyle(style) {
      this.$router.push(`/competences/${style}`);
    },
    navigateToGallery() {
      this.$router.push("/competences");
    },
  },
};
</script>

<style scoped>
/* Zone principale suivant le pattern standard */
.uiux-zone {
  padding: 100px 5%;
  border: var(--border-color) 1px solid;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
  position: relative;

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}

/* Section intro selon le nouveau pattern */
.section-intro {
  text-align: center;
  margin-bottom: 80px;
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
  color: var(--accent-color);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 2px solid var(--accent-color);
  border-radius: 50px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.heading-main {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.heading-sub {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 400;
}

/* Contenu principal */
.uiux-content {
  max-width: 1200px;
  margin: 0 auto;
}

.styles-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 60px 40px;
  backdrop-filter: blur(10px);
}

.styles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

/* Nouveau bouton View All selon le style system */
.view-all-container {
  display: flex;
  justify-content: center;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
}

.view-all-btn {
  position: relative;
  padding: 15px 40px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 1.1rem;
  font-weight: 600;
}

.btn-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
  z-index: 2;
  transition: color 0.3s ease;
}

.btn-icon {
  font-size: 1.3rem;
}

/* Background animé du bouton */
.btn-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: 1;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.view-all-btn:hover .btn-bg {
  left: 0;
}

.view-all-btn:hover .btn-content {
  color: var(--text-primary);
}

/* ========== CARTES SPÉCIALES INCHANGÉES ========== */

.style-card {
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.style-card:hover {
  transform: translateY(-5px);
}

.style-preview {
  padding: 2rem;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Ready Or Not Style - INCHANGÉ */
.tactical-theme {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ff0000;
}

.tactical-theme:hover {
  box-shadow: 0 8px 32px rgba(255, 0, 0, 0.2);
}

.tactical-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.tactical-line {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-left: 2px solid #ff0000;
  border-top: 2px solid #ff0000;
}

.tactical-scan {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 0, 0, 0.5);
  animation: scan 2s linear infinite;
}

.tactical-theme .style-name {
  color: #ff0000;
  font-family: "Orbitron", monospace;
  font-size: 1.8rem;
  text-align: center;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
}

.tactical-theme .style-description {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: "Orbitron", monospace;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.tactical-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Orbitron", monospace;
  font-size: 0.8rem;
  color: #ff0000;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #ff0000;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

/* Neumorphism Style - INCHANGÉ */
.neumorphism-theme {
  background: #1a1a1a;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.8),
    -8px -8px 16px rgba(255, 255, 255, 0.1);
}

.neumorphism-theme:hover {
  transform: translateY(-5px);
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.8),
    -12px -12px 24px rgba(255, 255, 255, 0.1);
}

.neumorphism-theme .style-name {
  color: #e0e0e0;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.neumorphism-theme .style-description {
  color: #b0b0b0;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.neumorphism-overlay {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.neumorphism-btn {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background: #1a1a1a;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8),
    -4px -4px 8px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.neumorphism-theme:hover .neumorphism-btn {
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.8),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1);
  transform: scale(0.95);
}

/* Minimalist Style - INCHANGÉ */
.minimalist-theme {
  background: #ffffff;
  border: 3px solid #000000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.minimalist-theme:hover {
  transform: translateY(-5px);
  box-shadow: 20px 20px 0 rgba(0, 0, 0, 0.1);
}

.minimalist-theme .style-name {
  font-family: "Crimson Text", serif;
  color: #000000;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.minimalist-theme .style-description {
  font-family: "Crimson Text", serif;
  color: #666666;
  font-size: 1.1rem;
  font-style: italic;
  text-align: center;
  max-width: 80%;
  margin: 0 auto 2rem;
}

.minimalist-line {
  width: 100px;
  height: 3px;
  background-color: #000000;
  margin: 0 auto 2rem;
}

.minimalist-accent {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #000000;
}

/* Animations - INCHANGÉES */
@keyframes scan {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(280px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .styles-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 968px) {
  .uiux-zone {
    padding: 80px 5%;
  }

  .styles-wrapper {
    padding: 40px 30px;
  }

  .section-intro {
    margin-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .styles-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .styles-wrapper {
    padding: 30px 20px;
  }

  .view-all-btn {
    padding: 12px 30px;
    font-size: 1rem;
  }

  .minimalist-theme .style-name {
    font-size: 1.5rem;
  }

  .minimalist-theme .style-description {
    font-size: 1rem;
  }

  .minimalist-line {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .heading-main {
    font-size: 2rem;
  }

  .heading-sub {
    font-size: 1rem;
  }

  .btn-content {
    gap: 8px;
  }

  .btn-icon {
    font-size: 1.2rem;
  }
}
</style>
