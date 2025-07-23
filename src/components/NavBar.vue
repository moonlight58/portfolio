<template>
  <div v-if="!CustomNavBar" class="navbar-container">
    <div class="navbar" :class="{ 'navbar-scrolled': isScrollingDown }">
      <!-- Logo avec effet glassmorphism -->
      <router-link to="/" class="logo">
        <div class="logo-glow"></div>
        <div class="logo-icon">
          <span class="moon-icon">🌙</span>
        </div>
        <span class="logo-text gradient-text">moonlight</span>
      </router-link>

      <div class="navbar-right">
        <!-- Navigation links avec glassmorphism -->
        <nav class="nav-links" v-if="!isMobile">
          <router-link to="/projects" class="nav-link glass-link">
            <div class="link-icon-wrapper">
              <span class="link-icon">📁</span>
            </div>
            <span class="link-text">projects</span>
            <div class="link-glow"></div>
          </router-link>
          <router-link to="/drawings" class="nav-link glass-link">
            <div class="link-icon-wrapper">
              <span class="link-icon">🎨</span>
            </div>
            <span class="link-text">drawings</span>
            <div class="link-glow"></div>
          </router-link>
          <router-link to="/about-me" class="nav-link glass-link">
            <div class="link-icon-wrapper">
              <span class="link-icon">👤</span>
            </div>
            <span class="link-text">about me</span>
            <div class="link-glow"></div>
          </router-link>
        </nav>

        <!-- Language Slider glassmorphism -->
        <div class="language-selector glass-card" v-if="!isMobile">
          <div class="language-track" @click="toggleLanguage">
            <div class="language-thumb" :class="{ 'thumb-en': currentLanguage === 'EN' }">
              <span class="language-indicator">{{ currentLanguage }}</span>
            </div>
            <div class="language-options">
              <span class="lang-option" :class="{ active: currentLanguage === 'FR' }">FR</span>
              <span class="lang-option" :class="{ active: currentLanguage === 'EN' }">EN</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Burger menu glassmorphism -->
      <button class="burger-menu glass-card" @click="toggleMenu" v-if="isMobile" :class="{ 'burger-active': showMenu }">
        <div class="burger-lines">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </div>
        <div class="burger-glow"></div>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" v-if="showMenu && isMobile" @click="closeMenu" :class="{ 'overlay-visible': showMenu }">
    </div>

    <!-- Mobile Menu avec glassmorphism -->
    <div class="mobile-menu glass-card" :class="{ 'menu-open': showMenu }" v-if="isMobile">
      <div class="mobile-menu-header">
        <div class="mobile-logo">
          <div class="mobile-logo-icon">🌙</div>
          <h3 class="gradient-text">Navigation</h3>
        </div>
      </div>

      <div class="mobile-menu-content">
        <router-link to="/projects" @click="closeMenu" class="mobile-nav-link glass-link">
          <div class="mobile-link-icon">📁</div>
          <span class="mobile-link-text">Projects</span>
          <div class="mobile-link-arrow">→</div>
          <div class="mobile-link-glow"></div>
        </router-link>

        <router-link to="/drawings" @click="closeMenu" class="mobile-nav-link glass-link">
          <div class="mobile-link-icon">🎨</div>
          <span class="mobile-link-text">Drawings</span>
          <div class="mobile-link-arrow">→</div>
          <div class="mobile-link-glow"></div>
        </router-link>

        <router-link to="/about-me" @click="closeMenu" class="mobile-nav-link glass-link">
          <div class="mobile-link-icon">👤</div>
          <span class="mobile-link-text">About Me</span>
          <div class="mobile-link-arrow">→</div>
          <div class="mobile-link-glow"></div>
        </router-link>

        <div class="mobile-language-section">
          <h4 class="section-title">
            <span class="section-icon">🌐</span>
            Language
          </h4>
          <div class="mobile-language-selector glass-card">
            <div class="language-track" @click="toggleLanguage">
              <div class="language-thumb" :class="{ 'thumb-en': currentLanguage === 'EN' }">
                <span class="language-indicator">{{ currentLanguage }}</span>
              </div>
              <div class="language-options">
                <span class="lang-option" :class="{ active: currentLanguage === 'FR' }">FR</span>
                <span class="lang-option" :class="{ active: currentLanguage === 'EN' }">EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrollingDown: false,
      prevScrollPos: 0,
      showMenu: false,
      isMobile: window.innerWidth <= 800,
      CustomNavBar: false,
    };
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$i18n.locale.toUpperCase();
      },
      set(val) {
        this.$i18n.locale = val.toLowerCase();
      },
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.CustomNavBar = to.path.startsWith('/competences/');
      }
    }
  },
  mounted() {
    this.prevScrollPos = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);

    // Animation d'entrée progressive
    setTimeout(() => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.add('navbar-visible');
      }
    }, 100);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY;

      // Navbar visible quand on scroll vers le haut OU qu'on est en haut de page
      if (currentScrollPos < this.prevScrollPos || currentScrollPos <= 50) {
        this.isScrollingDown = false;
      }
      // Navbar cachée quand on scroll vers le bas
      else if (currentScrollPos > this.prevScrollPos && currentScrollPos > 50) {
        this.isScrollingDown = true;
      }

      this.prevScrollPos = currentScrollPos;
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === "FR" ? "EN" : "FR";
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
      document.body.style.overflow = this.showMenu ? 'hidden' : '';
    },
    closeMenu() {
      this.showMenu = false;
      document.body.style.overflow = '';
    },
    handleResize() {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 800;
      if (!this.isMobile && wasMobile) {
        this.closeMenu();
      }
    },
  },
};
</script>

<style scoped>
/* Container principal */
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);


  /* Variables CSS selon la documentation */
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

/* Navbar avec glassmorphism */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 1rem 2rem;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar.navbar-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Accent lumineux en haut */
.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0.5;
}

.navbar.navbar-scrolled {
  transform: translateY(-120%);
  opacity: 0;
  pointer-events: none;
  /* Évite les interactions fantômes */
}

.navbar:not(.navbar-scrolled) {
  transform: translateY(0) !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}

/* Logo avec effets */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  position: relative;
  z-index: 2;
  padding: 0.5rem;
  border-radius: 16px;
  transition: all 0.4s ease;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--primary-gradient);
  border-radius: 20px;
  opacity: 0;
  filter: blur(15px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.logo:hover .logo-glow {
  opacity: 0.3;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  transition: all 0.4s ease;
}

.logo:hover .logo-icon {
  transform: scale(1.1) rotate(5deg);
  border-color: rgba(255, 255, 255, 0.2);
}

.moon-icon {
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Texte avec gradient */
.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: var(--text-primary);
}

@supports not (-webkit-background-clip: text) {
  .gradient-text {
    color: var(--text-primary);
  }
}

/* Navigation desktop */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: var(--text-secondary);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.glass-link {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  backdrop-filter: blur(10px);
}

.nav-link:hover {
  transform: translateY(-2px);
  color: var(--text-primary);
  border-color: var(--glass-border);
  background: var(--glass-bg);
}

.link-icon-wrapper {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.nav-link:hover .link-icon-wrapper {
  background: var(--primary-gradient);
  transform: scale(1.1);
}

.link-icon {
  font-size: 1rem;
}

.link-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
  opacity: 0;
  filter: blur(20px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.nav-link:hover .link-glow {
  opacity: 1;
}

/* Router link actif */
.nav-link.router-link-active {
  color: var(--text-primary);
  background: var(--glass-bg);
  border-color: var(--glass-border);
}

.nav-link.router-link-active .link-icon-wrapper {
  background: var(--primary-gradient);
}

/* Language Selector */
.language-selector {
  padding: 0.5rem;
  border-radius: 16px;
  min-width: 80px;
}

.language-track {
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-track:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.language-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background: var(--primary-gradient);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.language-thumb.thumb-en {
  transform: translateX(32px);
}

.language-indicator {
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
}

.language-options {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  pointer-events: none;
}

.lang-option {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.3s ease;
}

.lang-option.active {
  color: transparent;
}

/* Burger Menu */
.burger-menu {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  position: relative;
  transition: all 0.4s ease;
}

.burger-menu:hover {
  transform: translateY(-2px);
  border-color: var(--glass-border);
}

.burger-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.line {
  width: 20px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 1px;
  transition: all 0.3s ease;
}

.burger-active .line-1 {
  transform: translateY(6px) rotate(45deg);
}

.burger-active .line-2 {
  opacity: 0;
}

.burger-active .line-3 {
  transform: translateY(-6px) rotate(-45deg);
}

.burger-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--primary-gradient);
  border-radius: 16px;
  opacity: 0;
  filter: blur(15px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.burger-menu:hover .burger-glow {
  opacity: 0.3;
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;
}

.mobile-overlay.overlay-visible {
  opacity: 1;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 6rem;
  left: 2rem;
  right: 2rem;
  max-height: calc(100vh - 8rem);
  border-radius: 24px;
  padding: 2rem;
  transform: translateY(-20px) scale(0.95);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;
  overflow-y: auto;
}

.mobile-menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-gradient);
  opacity: 0.8;
}

.mobile-menu.menu-open {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-logo-icon {
  width: 36px;
  height: 36px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.mobile-logo h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-secondary);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  font-weight: 500;
}

.mobile-nav-link:hover {
  transform: translateY(-2px);
  color: var(--text-primary);
  border-color: var(--glass-border);
}

.mobile-link-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover .mobile-link-icon {
  background: var(--primary-gradient);
  transform: scale(1.1);
}

.mobile-link-text {
  flex: 1;
  font-size: 1.1rem;
}

.mobile-link-arrow {
  font-size: 1.2rem;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover .mobile-link-arrow {
  transform: translateX(4px);
  color: var(--text-primary);
}

.mobile-link-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.mobile-nav-link:hover .mobile-link-glow {
  opacity: 1;
}

.mobile-language-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--glass-border);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.section-icon {
  font-size: 1.2rem;
}

.mobile-language-selector {
  padding: 1rem;
  border-radius: 16px;
}

/* Glass card effect */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 1200px) {
  .navbar-container {
    padding: 1rem 1.5rem;
  }
}

@media (max-width: 800px) {
  .navbar-container {
    padding: 1rem;
  }

  .navbar {
    padding: 0.75rem 1.5rem;
  }

  .logo-text {
    font-size: 1.3rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .mobile-menu {
    left: 1rem;
    right: 1rem;
    padding: 1.5rem;
  }

  .mobile-nav-link {
    padding: 1.25rem;
  }

  .mobile-link-icon {
    width: 36px;
    height: 36px;
  }
}

/* Animation de réduction de mouvement */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>