<template>
  <div v-if="!isHome2" class="navbar-container">
    <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
      <!-- Logo avec effet amélioré -->
      <router-link to="/" class="logo">
        <div class="logo-icon">🌙</div>
        <span class="logo-text">moonlight</span>
      </router-link>
      
      <div class="navbar-right">
        <div class="links">
          <router-link to="/projects" class="nav-link">
            <span class="link-icon">📁</span>
            <span class="link-text">projects</span>
          </router-link>
          <router-link to="/drawings" class="nav-link">
            <span class="link-icon">🎨</span>
            <span class="link-text">drawings</span>
          </router-link>
          <router-link to="/about-me" class="nav-link">
            <span class="link-icon">👤</span>
            <span class="link-text">about me</span>
          </router-link>
        </div>

        <!-- Language Slider amélioré -->
        <div class="language-slider">
          <div class="slider-track" @click="toggleLanguage">
            <div
              class="slider-thumb"
              :class="{ 'slider-thumb-en': currentLanguage === 'EN' }"
            >
              <span class="language-indicator">{{ currentLanguage }}</span>
            </div>
            <div class="language-labels">
              <span
                class="lang-label lang-fr"
                :class="{ active: currentLanguage === 'FR' }"
                >FR</span
              >
              <span
                class="lang-label lang-en"
                :class="{ active: currentLanguage === 'EN' }"
                >EN</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton burger amélioré -->
      <button 
        class="burger-btn" 
        @click="toggleMenu" 
        v-if="isMobile"
        :class="{ 'burger-active': showMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Overlay pour fermer le menu -->
    <div 
      class="mobile-overlay" 
      v-if="showMenu && isMobile" 
      @click="closeMenu"
    ></div>

    <!-- Menu mobile amélioré -->
    <div 
      class="mobile-menu" 
      :class="{ 'mobile-menu-open': showMenu }" 
      v-if="isMobile"
    >
      <div class="mobile-menu-header">
        <div class="mobile-logo">
          <div class="logo-icon">🌙</div>
          <h3>Menu</h3>
        </div>
        <button class="close-btn" @click="closeMenu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      
      <div class="mobile-menu-content">
        <router-link to="/projects" @click="closeMenu" class="mobile-nav-link">
          <span class="mobile-link-icon">📁</span>
          <span>Projects</span>
          <div class="link-arrow">→</div>
        </router-link>
        <router-link to="/drawings" @click="closeMenu" class="mobile-nav-link">
          <span class="mobile-link-icon">🎨</span>
          <span>Drawings</span>
          <div class="link-arrow">→</div>
        </router-link>
        <router-link to="/about-me" @click="closeMenu" class="mobile-nav-link">
          <span class="mobile-link-icon">👤</span>
          <span>About Me</span>
          <div class="link-arrow">→</div>
        </router-link>
        
        <div class="mobile-language-section">
          <h4>🌐 Language</h4>
          <div class="language-slider mobile-language-slider">
            <div class="slider-track" @click="toggleLanguage">
              <div
                class="slider-thumb"
                :class="{ 'slider-thumb-en': currentLanguage === 'EN' }"
              >
                <span class="language-indicator">{{ currentLanguage }}</span>
              </div>
              <div class="language-labels">
                <span
                  class="lang-label lang-fr"
                  :class="{ active: currentLanguage === 'FR' }"
                  >FR</span
                >
                <span
                  class="lang-label lang-en"
                  :class="{ active: currentLanguage === 'EN' }"
                  >EN</span
                >
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
      isHome2: false,
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
        this.isHome2 = to.name === 'home';
      }
    }
  },
  mounted() {
    this.prevScrollPos = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY;
      this.isScrollingDown = currentScrollPos > this.prevScrollPos && currentScrollPos > 100;
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
.navbar-container {
  width: 100%;
  display: flex;
  top: 0;
  position: fixed;
  justify-content: center;
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(16, 21, 45, 0.85);
  border-bottom: 1px solid rgba(144, 168, 255, 0.15);
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.3), transparent);
}

.navbar {
  display: flex;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar,
.links {
  font-family: "N27", sans-serif;
  font-weight: 600;
}

/* Logo amélioré */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #90a8ff;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
}

.logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(144, 168, 255, 0.1), rgba(144, 168, 255, 0.05));
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.logo:hover::before {
  opacity: 1;
}

.logo:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(144, 168, 255, 0.2);
  border-color: rgba(144, 168, 255, 0.3);
}

.logo-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 8px rgba(144, 168, 255, 0.5));
  transition: transform 0.4s ease;
}

.logo:hover .logo-icon {
  transform: rotate(15deg) scale(1.1);
}

.logo-text {
  font-weight: 700;
  letter-spacing: -0.5px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.links {
  display: flex;
  gap: 1rem;
}

/* Liens de navigation améliorés */
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  color: #ccc;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: rgba(144, 168, 255, 0.03);
  border: 1px solid rgba(144, 168, 255, 0.08);
  font-weight: 600;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
  border-radius: 12px 12px 0 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.nav-link:hover::before,
.nav-link.router-link-active::before {
  opacity: 1;
}

.nav-link:hover {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.1);
  border-color: rgba(144, 168, 255, 0.25);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(144, 168, 255, 0.15);
}

.nav-link.router-link-active {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.12);
  border-color: rgba(144, 168, 255, 0.3);
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.1);
}

/* Styling spécial pour le lien drawings avec dégradé artistique */
.nav-link[href="/drawings"] {
  background: linear-gradient(135deg, rgba(144, 168, 255, 0.03), rgba(255, 107, 107, 0.03), rgba(255, 165, 0, 0.03));
  border: 1px solid rgba(144, 168, 255, 0.08);
}

.nav-link[href="/drawings"]:hover {
  background: linear-gradient(135deg, rgba(144, 168, 255, 0.1), rgba(255, 107, 107, 0.08), rgba(255, 165, 0, 0.08));
  border-color: rgba(144, 168, 255, 0.25);
  color: #90a8ff;
}

.nav-link[href="/drawings"].router-link-active {
  background: linear-gradient(135deg, rgba(144, 168, 255, 0.12), rgba(255, 107, 107, 0.1), rgba(255, 165, 0, 0.1));
}

.link-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.nav-link:hover .link-icon {
  transform: scale(1.1);
}

/* Animation spéciale pour l'icône drawings */
.nav-link[href="/drawings"]:hover .link-icon {
  transform: scale(1.1) rotate(5deg);
}

.navbar-small {
  padding: 1rem 2rem;
}

.navbar-small .links {
  display: none;
}

/* Language Slider amélioré */
.language-slider {
  display: flex;
  align-items: center;
}

.slider-track {
  position: relative;
  width: 85px;
  height: 40px;
  background: rgba(144, 168, 255, 0.08);
  border: 2px solid rgba(144, 168, 255, 0.2);
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.slider-track::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, rgba(144, 168, 255, 0.1), rgba(144, 168, 255, 0.05));
  border-radius: 24px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.slider-track:hover::before {
  opacity: 1;
}

.slider-track:hover {
  background: rgba(144, 168, 255, 0.12);
  border-color: rgba(144, 168, 255, 0.35);
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.15);
  transform: translateY(-1px);
}

.slider-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 38px;
  height: 32px;
  background: linear-gradient(135deg, #90a8ff, #b8c5ff);
  border-radius: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.slider-thumb-en {
  transform: translateX(43px);
}

.language-indicator {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1a1a1a;
  font-family: "N27", sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.language-labels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  pointer-events: none;
}

.lang-label {
  font-size: 0.7rem;
  font-weight: 700;
  font-family: "N27", sans-serif;
  color: #638297;
  transition: all 0.4s ease;
  opacity: 0.7;
}

.lang-label.active {
  opacity: 0;
}

.lang-label:not(.active) {
  color: #90a8ff;
  opacity: 1;
  text-shadow: 0 0 8px rgba(144, 168, 255, 0.5);
}

/* Burger Button amélioré */
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: rgba(144, 168, 255, 0.08);
  border: 2px solid rgba(144, 168, 255, 0.2);
  border-radius: 12px;
  cursor: pointer;
  z-index: 101;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 4px;
  position: relative;
}

.burger-btn::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, rgba(144, 168, 255, 0.1), rgba(144, 168, 255, 0.05));
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.burger-btn:hover::before {
  opacity: 1;
}

.burger-btn:hover {
  background: rgba(144, 168, 255, 0.15);
  border-color: rgba(144, 168, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(144, 168, 255, 0.2);
}

.burger-btn span {
  display: block;
  height: 3px;
  width: 22px;
  background: #90a8ff;
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  box-shadow: 0 1px 3px rgba(144, 168, 255, 0.3);
}

.burger-btn.burger-active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.burger-btn.burger-active span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.burger-btn.burger-active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Overlay amélioré */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 98;
  opacity: 0;
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Mobile Menu amélioré */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 340px;
  max-width: 90vw;
  height: 100vh;
  background: linear-gradient(135deg, rgba(16, 21, 45, 0.97), rgba(16, 21, 45, 0.99));
  backdrop-filter: blur(24px) saturate(180%);
  border-left: 2px solid rgba(144, 168, 255, 0.25);
  z-index: 102;
  transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: -12px 0 48px rgba(0, 0, 0, 0.4);
}

.mobile-menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgba(144, 168, 255, 0.5), transparent);
}

.mobile-menu-open {
  right: 0;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(144, 168, 255, 0.15);
  background: rgba(144, 168, 255, 0.03);
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-logo .logo-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 8px rgba(144, 168, 255, 0.5));
}

.mobile-menu-header h3 {
  color: #90a8ff;
  font-family: "N27", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 0 12px rgba(144, 168, 255, 0.3);
}

.close-btn {
  background: rgba(144, 168, 255, 0.08);
  border: 2px solid rgba(144, 168, 255, 0.2);
  border-radius: 10px;
  color: #90a8ff;
  width: 42px;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.close-btn::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, rgba(144, 168, 255, 0.1), rgba(144, 168, 255, 0.05));
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.close-btn:hover::before {
  opacity: 1;
}

.close-btn:hover {
  background: rgba(144, 168, 255, 0.15);
  transform: scale(1.05) rotate(90deg);
  box-shadow: 0 4px 16px rgba(144, 168, 255, 0.2);
}

.mobile-menu-content {
  flex: 1;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ccc;
  font-size: 1.1rem;
  text-decoration: none;
  font-family: "N27", sans-serif;
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  justify-content: space-between;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
  border-radius: 16px 16px 0 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.mobile-nav-link:hover::before,
.mobile-nav-link.router-link-active::before {
  opacity: 1;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.12);
  border-color: rgba(144, 168, 255, 0.25);
  transform: translateX(6px);
  box-shadow: 0 6px 20px rgba(144, 168, 255, 0.15);
}

/* Style spécial pour le lien drawings en mobile */
.mobile-nav-link[href="/drawings"] {
  background: linear-gradient(135deg, rgba(144, 168, 255, 0.05), rgba(255, 107, 107, 0.03), rgba(255, 165, 0, 0.03));
}

.mobile-nav-link[href="/drawings"]:hover,
.mobile-nav-link[href="/drawings"].router-link-active {
  background: linear-gradient(135deg, rgba(144, 168, 255, 0.12), rgba(255, 107, 107, 0.08), rgba(255, 165, 0, 0.08));
}

.mobile-link-icon {
  font-size: 1.3rem;
  min-width: 28px;
  text-align: center;
  transition: transform 0.3s ease;
}

.mobile-nav-link:hover .mobile-link-icon {
  transform: scale(1.1);
}

/* Animation spéciale pour l'icône drawings en mobile */
.mobile-nav-link[href="/drawings"]:hover .mobile-link-icon {
  transform: scale(1.1) rotate(5deg);
}

.link-arrow {
  font-size: 1.2rem;
  transition: transform 0.4s ease;
  opacity: 0.6;
}

.mobile-nav-link:hover .link-arrow {
  transform: translateX(4px);
  opacity: 1;
}

.mobile-language-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(144, 168, 255, 0.15);
  background: rgba(144, 168, 255, 0.02);
  border-radius: 12px;
  padding: 2rem 1rem;
}

.mobile-language-section h4 {
  color: #90a8ff;
  font-family: "N27", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  text-align: center;
  text-shadow: 0 0 8px rgba(144, 168, 255, 0.3);
}

.mobile-language-slider {
  justify-content: center;
}

/* Responsive Styles */
@media (max-width: 800px) {
  .burger-btn {
    display: flex;
  }
  
  .navbar .links,
  .navbar-right .language-slider {
    display: none;
  }
  
  .navbar {
    padding: 1rem 1.5rem;
  }
  
  .navbar-small {
    padding: 0.75rem 1.5rem;
  }
}

@media (min-width: 801px) {
  .navbar {
    max-width: 1000px;
    padding: 1.8rem 2.5rem;
  }

  .navbar-small {
    padding: 1.2rem 2.5rem;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
  }

  .navbar-right {
    gap: 2.5rem;
  }

  .slider-track {
    width: 95px;
    height: 42px;
  }

  .slider-thumb {
    width: 40px;
    height: 34px;
  }

  .slider-thumb-en {
    transform: translateX(45px);
  }

  .language-indicator {
    font-size: 0.8rem;
  }

  .lang-label {
    font-size: 0.75rem;
  }

  .language-labels {
    padding: 0 14px;
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 1rem;
  }

  .navbar-small {
    padding: 0.75rem 1rem;
  }

  .logo {
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    gap: 0.5rem;
  }

  .logo-icon {
    font-size: 1.3rem;
  }

  .mobile-menu {
    width: 100vw;
    max-width: 100vw;
  }

  .mobile-menu-content {
    padding: 1.5rem 1rem;
  }

  .mobile-nav-link {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }

  .mobile-link-icon {
    font-size: 1.2rem;
    min-width: 24px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.8rem;
  }

  .logo {
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
  }

  .logo-text {
    display: none;
  }

  .logo-icon {
    font-size: 1.4rem;
  }

  .burger-btn {
    width: 44px;
    height: 44px;
  }

  .burger-btn span {
    width: 20px;
    height: 2px;
  }
}

/* Animations avancées */
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutToRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.mobile-menu-open {
  animation: slideInFromRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation pour les éléments du menu mobile */
.mobile-nav-link {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInNavLink 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.mobile-nav-link:nth-child(1) {
  animation-delay: 0.1s;
}

.mobile-nav-link:nth-child(2) {
  animation-delay: 0.2s;
}

.mobile-nav-link:nth-child(3) {
  animation-delay: 0.3s;
}

.mobile-language-section {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInLanguage 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
}

@keyframes slideInNavLink {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLanguage {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effet de glow pour les éléments actifs */
.nav-link.router-link-active,
.mobile-nav-link.router-link-active {
  position: relative;
}

.nav-link.router-link-active::after,
.mobile-nav-link.router-link-active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(144, 168, 255, 0.1) 0%, transparent 70%);
  border-radius: 12px;
  z-index: -1;
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

/* Smooth scrolling pour les transitions */
html {
  scroll-behavior: smooth;
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus states pour l'accessibilité */
.nav-link:focus,
.mobile-nav-link:focus,
.burger-btn:focus,
.close-btn:focus,
.slider-track:focus {
  outline: 2px solid #90a8ff;
  outline-offset: 2px;
}

/* Amélioration du contraste pour l'accessibilité */
@media (prefers-contrast: high) {
  .navbar-container {
    background: rgba(0, 0, 0, 0.95);
  }
  
  .nav-link,
  .mobile-nav-link {
    border-color: #90a8ff;
  }
  
  .nav-link:hover,
  .mobile-nav-link:hover {
    background: rgba(144, 168, 255, 0.3);
  }
}
</style>