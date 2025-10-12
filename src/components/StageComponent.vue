<template>
  <section class="stage-zone" :class="{ 'stage-loaded': isVisible }">
    <div class="stage-content">
      <div class="stage-info">
        <div class="section-intro">
          <div class="section-heading">
            <h1 class="heading-sub logo-text">
              {{ $t("InternshipTitle") }}
            </h1>
          </div>
        </div>
        <div class="stage-description">
          <p class="body-text">
            {{ $t("InternshipContent1") }}
            <a
              href="https://bu.univ-fcomte.fr/bibliotheques/learning-centre-claude-oytana/"
              target="_blank"
              class="interactive-link"
              >Learning Centre Claude Oytana</a
            >
            {{ $t("InternshipContent2") }}
          </p>
        </div>

        <div class="stage-details">
          <div class="detail-card">
            <div class="card-inner">
              <div class="card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>
              <div class="card-content">
                <h4 class="card-title">
                  {{
                    $t("InternshipExperience") || "Expérience Professionnelle"
                  }}
                </h4>
                <p class="card-description">
                  Stage en développement et gestion de projet
                </p>
              </div>
            </div>
            <div class="card-accent"></div>
          </div>

          <div class="detail-card">
            <div class="card-inner">
              <div class="card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
              </div>
              <div class="card-content">
                <h4 class="card-title">
                  {{
                    $t("InternshipLocation") || "Université de Franche-Comté"
                  }}
                </h4>
                <p class="card-description">
                  Learning Centre Claude Oytana - Belfort
                </p>
              </div>
            </div>
            <div class="card-accent"></div>
          </div>

          <div class="detail-card">
            <div class="card-inner">
              <div class="card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V1h-2v1H8V1H6v1H4.5C3.12 2 2.01 3.09 2.01 4.5L2 19.5C2 20.91 3.09 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.09 20.91 2 19.5 2z"
                  />
                </svg>
              </div>
              <div class="card-content">
                <h4 class="card-title">
                  {{ $t("InternshipDuration") || "Stage Académique" }}
                </h4>
                <p class="card-description">Durée déterminée selon le cursus</p>
              </div>
            </div>
            <div class="card-accent"></div>
          </div>
        </div>

        <div class="cta-wrapper">
          <router-link class="interactive-element cta-button" to="/stage">
            <span class="cta-content">
              <div class="cta-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
                  />
                </svg>
              </div>
              <span class="cta-text">{{
                $t("InternshipMoreAbout") || "En savoir plus"
              }}</span>
              <div class="cta-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  />
                </svg>
              </div>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  // Animation d'entrée avec Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(
    ".section-intro, .detail-card"
  );
  elements.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* Section principale suivant le pattern standard */
.stage-zone {
  margin: 5% 15%;
  background: linear-gradient(
    180deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
  border-radius: 25px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}

.stage-zone.stage-loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Contenu principal */
.stage-content {
  max-width: 1200px;
  margin: 0 auto;
}

.stage-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.logo-text {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Description */
.stage-description .body-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 0;
}

/* Lien interactif suivant le pattern */
.interactive-link {
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
  font-weight: 600;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 0 4px;
  transition: all 0.3s ease;
}
.stage-content .interactive-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-gradient);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive-link:hover::after {
  width: 100%;
}

/* Cards interactives suivant le pattern de la documentation */
.stage-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(30px);
}

.detail-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.detail-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  border-color: var(--accent-color);
}

.card-inner {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.card-icon {
  background: var(--primary-gradient);
  border-radius: 12px;
  padding: 12px;
  color: var(--text-primary);
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.card-content {
  flex: 1;
}

.card-title {
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.card-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
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

.detail-card:hover .card-accent {
  transform: translateX(0);
}

/* CTA Button suivant le pattern interactive-element */
.cta-wrapper {
  margin-top: 20px;
}

.interactive-element {
  position: relative;
  padding: 20px 40px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.interactive-element::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.interactive-element:hover::before {
  left: 0;
}

.interactive-element:hover {
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.cta-content {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  z-index: 1;
}

.cta-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.interactive-element:hover .cta-arrow {
  transform: translateX(5px);
}

/* Responsive Design suivant les breakpoints de la documentation */
@media (max-width: 1200px) {
  .visual-container {
    width: 250px;
    height: 250px;
  }

  .stage-illustration {
    width: 150px;
    height: 150px;
  }

  .icon-primary {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 968px) {
  .stage-zone {
    margin: auto;
  }

  .section-intro {
    margin-bottom: 60px;
  }

  .stage-info {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .stage-zone {
    padding: 80px 5%;
  }

  .section-intro {
    margin-bottom: 50px;
  }

  .section-heading {
    gap: 8px;
  }

  .heading-sub {
    font-size: 1.1rem;
  }

  .stage-info {
    gap: 25px;
  }

  .detail-card {
    padding: 25px;
    border-radius: 15px;
  }

  .card-inner {
    gap: 15px;
  }

  .card-icon {
    width: 42px;
    height: 42px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-description {
    font-size: 0.95rem;
  }

  .interactive-element {
    padding: 15px 30px;
    width: 100%;
    justify-content: center;
  }

  .visual-container {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .stage-zone {
    padding: 60px 5%;
  }

  .section-intro {
    margin-bottom: 40px;
  }

  .stage-info {
    gap: 20px;
  }

  .detail-card {
    padding: 20px;
  }

  .card-inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .interactive-element {
    padding: 12px 25px;
  }

  .cta-content {
    font-size: 1rem;
  }

  .visual-container {
    width: 150px;
    height: 150px;
  }

  .stage-illustration {
    width: 120px;
    height: 120px;
  }

  .icon-primary {
    width: 50px;
    height: 50px;
  }
}

/* États de focus pour l'accessibilité */
.interactive-element:focus,
.interactive-link:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Support pour prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
