<template>
  <div class="error-container">
    <div class="error-content">
      <!-- Animated 404 Number -->
      <div class="error-number">
        <span class="digit" :style="{ 'animation-delay': '0s' }">4</span>
        <span class="digit glitch" :style="{ 'animation-delay': '0.2s' }"
          >0</span
        >
        <span class="digit" :style="{ 'animation-delay': '0.4s' }">4</span>
      </div>

      <!-- Error Message -->
      <div class="error-message">
        <h1 class="error-title">Page non trouvée</h1>
        <p class="error-description">
          Oops ! Il semblerait que la page que vous cherchez n'existe pas ou a
          été déplacée. Elle s'est peut-être perdue dans les méandres du code...
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="error-actions">
        <button @click="goHome" class="action-btn primary-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Retour à l'accueil</span>
        </button>

        <button @click="goBack" class="action-btn secondary-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            />
          </svg>
          <span>Page précédente</span>
        </button>
      </div>

      <!-- Helpful Links -->
      <div class="helpful-links">
        <h3>Peut-être cherchiez-vous :</h3>
        <div class="links-grid">
          <router-link to="/" class="help-link">
            <span class="link-icon">🏠</span>
            <span>Accueil</span>
          </router-link>
          <router-link to="/projects" class="help-link">
            <span class="link-icon">💼</span>
            <span>Projets</span>
          </router-link>
          <router-link to="/about" class="help-link">
            <span class="link-icon">👨‍💻</span>
            <span>À propos</span>
          </router-link>
          <a
            href="https://github.com/moonlight58"
            target="_blank"
            class="help-link"
            rel="noopener noreferrer"
          >
            <span class="link-icon">📂</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Animated Background Elements -->
    <div class="bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="floating-code">
        <span>&lt;/404&gt;</span>
      </div>
      <div class="floating-code code-2">
        <span>ERROR</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.error-container {
  font-family: "N27", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

/* Background Shapes */
.bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  filter: blur(40px);
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #90a8ff, #ff6b6b);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #4caf50, #90a8ff);
  bottom: 20%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #ff6b6b, #4caf50);
  top: 60%;
  left: 70%;
  animation-delay: 4s;
}

.floating-code {
  position: absolute;
  font-size: 1.5rem;
  color: rgba(144, 168, 255, 0.3);
  font-weight: 600;
  top: 20%;
  right: 20%;
  animation: floatCode 8s ease-in-out infinite;
}

.code-2 {
  top: 70%;
  left: 20%;
  animation-delay: 3s;
  font-size: 1.2rem;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

@keyframes floatCode {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate(20px, -20px);
    opacity: 0.1;
  }
}

/* Main Content */
.error-content {
  text-align: center;
  max-width: 800px;
  z-index: 2;
  position: relative;
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 24px;
  padding: 4rem 3rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 32px 128px rgba(0, 0, 0, 0.3);
  margin-top: 10vh;
}

.error-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

/* 404 Number */
.error-number {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.digit {
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideInDown 1s ease-out both;
  text-shadow: 0 0 50px rgba(144, 168, 255, 0.5);
}

.digit.glitch {
  position: relative;
  animation: slideInDown 1s ease-out both, glitchEffect 3s ease-in-out infinite;
}

@keyframes slideInDown {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes glitchEffect {
  0%,
  90%,
  100% {
    transform: translateY(0);
  }
  92% {
    transform: translateY(-2px);
  }
  94% {
    transform: translateY(2px);
  }
  96% {
    transform: translateY(-1px);
  }
  98% {
    transform: translateY(1px);
  }
}

/* Error Message */
.error-message {
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: #90a8ff;
}

.error-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
  opacity: 0.9;
}

@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Action Buttons */
.error-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 0.7s both;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: "N27", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.action-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.action-btn:hover::before {
  left: 100%;
}

.primary-btn {
  background: #90a8ff;
  color: #1a1a1a;
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.3);
}

.primary-btn:hover {
  background: #b8c8ff;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.4);
}

.secondary-btn {
  background: rgba(144, 168, 255, 0.1);
  color: #90a8ff;
  border: 2px solid rgba(144, 168, 255, 0.3);
}

.secondary-btn:hover {
  background: rgba(144, 168, 255, 0.2);
  border-color: #90a8ff;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.2);
}

/* Helpful Links */
.helpful-links {
  animation: fadeInUp 1s ease-out 0.9s both;
}

.helpful-links h3 {
  color: #90a8ff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.help-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.help-link:hover {
  background: rgba(144, 168, 255, 0.1);
  border-color: rgba(144, 168, 255, 0.3);
  transform: translateY(-4px);
  color: #90a8ff;
}

.link-icon {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.help-link span:last-child {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .error-container {
    padding: 1rem;
  }

  .error-content {
    padding: 3rem 2rem;
  }

  .digit {
    font-size: 6rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .action-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .shape {
    width: 200px !important;
    height: 200px !important;
  }

  .floating-code {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .error-content {
    padding: 2rem 1.5rem;
  }

  .digit {
    font-size: 4rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .help-link {
    padding: 1rem;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .digit {
    font-size: 10rem;
  }

  .error-content {
    padding: 5rem 4rem;
  }
}
</style>
