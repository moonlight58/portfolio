<template>
  <div class="navbar-container">
    <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
      <router-link to="/" class="pseudo">moonlight</router-link>
      <div class="navbar-right">
        <div class="links">
          <router-link to="/projects" class="nav-link">projects</router-link>
          <router-link to="/about-me" class="nav-link">about me</router-link>
        </div>

        <!-- Language Slider -->
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

      <!-- Bouton burger visible seulement sur mobile -->
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

    <!-- Overlay pour fermer le menu en cliquant à côté -->
    <div 
      class="mobile-overlay" 
      v-if="showMenu && isMobile" 
      @click="closeMenu"
    ></div>

    <!-- Menu mobile -->
    <div 
      class="mobile-menu" 
      :class="{ 'mobile-menu-open': showMenu }" 
      v-if="isMobile"
    >
      <div class="mobile-menu-header">
        <h3>Menu</h3>
        <button class="close-btn" @click="closeMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      
      <div class="mobile-menu-content">
        <router-link to="/projects" @click="closeMenu" class="mobile-nav-link">
          <span class="mobile-link-icon">📁</span>
          <span>Projects</span>
        </router-link>
        <router-link to="/about-me" @click="closeMenu" class="mobile-nav-link">
          <span class="mobile-link-icon">👤</span>
          <span>About Me</span>
        </router-link>
        
        <div class="mobile-language-section">
          <h4>Language</h4>
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
      // Empêcher le scroll du body quand le menu est ouvert
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
  background: rgba(16, 21, 45, 0.8);
  border-bottom: 1px solid rgba(144, 168, 255, 0.1);
  z-index: 100;
  transition: all 0.3s ease;
}

.navbar {
  display: flex;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  transition: padding 0.3s ease;
}

.navbar,
.links {
  font-family: "N27", sans-serif;
  font-weight: bold;
}

.navbar .pseudo {
  text-decoration: none;
  color: #90a8ff;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.navbar .pseudo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(144, 168, 255, 0.1);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.navbar .pseudo:hover::before {
  opacity: 1;
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

.nav-link {
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  color: #ccc;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
}

.nav-link:hover {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.1);
  border-color: rgba(144, 168, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(144, 168, 255, 0.2);
}

.nav-link.router-link-active {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.15);
  border-color: rgba(144, 168, 255, 0.4);
}

.navbar-small {
  padding: 1rem 2rem;
}

.navbar-small .links {
  display: none;
}

/* Language Slider Styles */
.language-slider {
  display: flex;
  align-items: center;
}

.slider-track {
  position: relative;
  width: 80px;
  height: 36px;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.slider-track:hover {
  background: rgba(144, 168, 255, 0.15);
  border-color: rgba(144, 168, 255, 0.5);
  box-shadow: 0 2px 8px rgba(144, 168, 255, 0.2);
}

.slider-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 30px;
  background: linear-gradient(135deg, #90a8ff, #b8c5ff);
  border-radius: 18px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 12px rgba(144, 168, 255, 0.4);
}

.slider-thumb-en {
  transform: translateX(40px);
}

.language-indicator {
  font-size: 0.75rem;
  font-weight: bold;
  color: #1a1a1a;
  font-family: "N27", sans-serif;
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
  padding: 0 10px;
  pointer-events: none;
}

.lang-label {
  font-size: 0.7rem;
  font-weight: bold;
  font-family: "N27", sans-serif;
  color: #638297;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.lang-label.active {
  opacity: 0;
}

.lang-label:not(.active) {
  color: #90a8ff;
  opacity: 1;
}

/* Burger Button Styles */
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  z-index: 101;
  transition: all 0.3s ease;
  gap: 4px;
}

.burger-btn:hover {
  background: rgba(144, 168, 255, 0.2);
  border-color: rgba(144, 168, 255, 0.5);
  transform: scale(1.05);
}

.burger-btn span {
  display: block;
  height: 3px;
  width: 20px;
  background: #90a8ff;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

/* Animation du burger en croix */
.burger-btn.burger-active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.burger-btn.burger-active span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.burger-btn.burger-active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 98;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Mobile Menu Styles */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 320px;
  max-width: 85vw;
  height: 100vh;
  background: linear-gradient(135deg, rgba(16, 21, 45, 0.95), rgba(16, 21, 45, 0.98));
  backdrop-filter: blur(20px) saturate(180%);
  border-left: 2px solid rgba(144, 168, 255, 0.2);
  z-index: 102;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
}

.mobile-menu-open {
  right: 0;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(144, 168, 255, 0.2);
}

.mobile-menu-header h3 {
  color: #90a8ff;
  font-family: "N27", sans-serif;
  font-size: 1.3rem;
  margin: 0;
}

.close-btn {
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 8px;
  color: #90a8ff;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(144, 168, 255, 0.2);
  transform: scale(1.05);
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
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.15);
  border-color: rgba(144, 168, 255, 0.3);
  transform: translateX(4px);
}

.mobile-link-icon {
  font-size: 1.2rem;
  min-width: 24px;
  text-align: center;
}

.mobile-language-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(144, 168, 255, 0.2);
}

.mobile-language-section h4 {
  color: #90a8ff;
  font-family: "N27", sans-serif;
  font-size: 1rem;
  margin: 0 0 1rem 0;
  text-align: center;
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
    width: 90px;
    height: 40px;
  }

  .slider-thumb {
    width: 40px;
    height: 34px;
  }

  .slider-thumb-en {
    transform: translateX(44px);
  }

  .language-indicator {
    font-size: 0.8rem;
  }

  .lang-label {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .mobile-menu {
    width: 100vw;
    max-width: none;
  }
  
  .mobile-menu-content {
    padding: 1.5rem 1rem;
  }
  
  .mobile-nav-link {
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }
}

/* Animation pour le changement de langue */
@keyframes languageChange {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.slider-thumb.changing {
  animation: languageChange 0.3s ease;
}
</style>