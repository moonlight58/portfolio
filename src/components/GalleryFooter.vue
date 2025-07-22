<template>
  <div class="gallery-footer">
    <div class="footer-content">
      <div class="footer-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"
            opacity="0.8" />
          <path d="M5 16L5.5 18.5L8 19L5.5 19.5L5 22L4.5 19.5L2 19L4.5 18.5L5 16Z" fill="currentColor" opacity="0.6" />
          <path d="M19 16L19.5 18.5L22 19L19.5 19.5L19 22L18.5 19.5L16 19L18.5 18.5L19 16Z" fill="currentColor"
            opacity="0.6" />
        </svg>
      </div>

      <h3 class="footer-title">Créativité & Expertise Technique</h3>

      <p class="footer-description">
        Cette galerie illustre ma passion pour l'innovation en design d'interface. Chaque projet explore une
        esthétique unique,
        du rétro-futurisme cyberpunk aux tendances contemporaines, démontrant ma capacité à adapter mon style selon le
        contexte
        et les besoins utilisateurs.
      </p>

      <div class="footer-highlights">
        <div class="highlight-item">
          <span class="highlight-icon">🎨</span>
          <span>{{ universCount }} univers visuels distincts</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">⚡</span>
          <span>Animations & interactions fluides</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">📱</span>
          <span>Design adaptatif & accessible</span>
        </div>
      </div>

      <p class="footer-philosophy">
        L'interface n'est pas seulement fonctionnelle, elle raconte une histoire et crée une émotion.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryFooter',
  props: {
    pages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    universCount() {
      return this.pages.length;
    }
  }
}
</script>

<style scoped>
.gallery-footer {
  margin-top: 6rem;
  padding: 0;
  background: linear-gradient(135deg,
      rgba(99, 102, 241, 0.05) 0%,
      rgba(79, 70, 229, 0.08) 100%);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 20px 60px rgba(99, 102, 241, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-primary-rgb: 99, 102, 241;
  --color-primary-dark-rgb: 79, 70, 229;
  --color-text: #f8fafc;
  --color-text-light: #cbd5e1;
}

.gallery-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.08) 0%, transparent 50%);
  pointer-events: none;
  opacity: 0.7;
}

.footer-content {
  position: relative;
  z-index: 2;
  padding: 3.5rem 3rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.footer-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg,
      rgba(99, 102, 241, 0.15),
      rgba(79, 70, 229, 0.2));
  border-radius: 20px;
  margin-bottom: 2rem;
  color: #6366f1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}

.footer-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.footer-highlights {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 50px;
  color: #f8fafc;
  font-weight: 500;
  font-size: 0.95rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.highlight-item:hover {
  transform: translateY(-2px);
  background: rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.25);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
}

.highlight-icon {
  font-size: 1.2rem;
  filter: grayscale(0.2);
}

.footer-philosophy {
  font-style: italic;
  font-size: 1.05rem;
  color: #6366f1;
  margin: 0;
  position: relative;
  padding: 0 2rem;
  line-height: 1.6;
  font-weight: 500;
}

.footer-philosophy::before,
.footer-philosophy::after {
  content: '"';
  position: absolute;
  font-size: 2rem;
  color: rgba(99, 102, 241, 0.4);
  font-weight: 300;
  line-height: 1;
}

.footer-philosophy::before {
  left: 0;
  top: -0.2rem;
}

.footer-philosophy::after {
  right: 0;
  bottom: -0.8rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    padding: 2.5rem 2rem;
  }

  .footer-title {
    font-size: 1.6rem;
  }

  .footer-description {
    font-size: 1rem;
  }

  .footer-highlights {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer-philosophy {
    font-size: 1rem;
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 2rem 1.5rem;
  }

  .footer-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1.5rem;
  }

  .footer-icon svg {
    width: 30px;
    height: 30px;
  }

  .footer-title {
    font-size: 1.4rem;
  }

  .highlight-item {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>