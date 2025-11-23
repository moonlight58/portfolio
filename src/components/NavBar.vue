<template>
  <div v-if="!CustomNavBar" class="navbar-container">
    <!-- Particules flottantes d'arrière-plan -->
    <div class="navbar-particles">
      <div
        v-for="i in 3"
        :key="i"
        class="particle"
        :style="{ animationDelay: i * 5 + 's' }"
      ></div>
    </div>

    <nav
      class="navbar"
      :class="{
        'navbar-hidden': isScrollingDown,
        'navbar-visible': isNavbarVisible,
      }"
    >
      <!-- Logo avec effet glassmorphism -->
      <router-link to="/" class="logo-zone">
        <div class="logo-container">
          <div class="logo-bg"></div>
          <div class="logo-inner">
            <div class="logo-icon">
              <span class="moon-icon">🌙</span>
            </div>
            <span class="logo-text">moonlight</span>
          </div>
          <div class="logo-glow"></div>
        </div>
      </router-link>

      <!-- Navigation principale (Desktop) -->
      <div class="nav-content" v-if="!isMobile">
        <div class="nav-links-container">
          <router-link
            v-for="(link, index) in translatedNavLinks"
            :key="link.path"
            :to="link.path"
            class="nav-item"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <div class="nav-item-inner">
              <div class="nav-item-bg"></div>
              <span class="nav-icon">{{ link.icon }}</span>
              <span class="nav-text">{{ link.name }}</span>
              <div class="nav-accent"></div>
            </div>
          </router-link>
        </div>

        <!-- Sélecteur de langue -->
        <div class="language-zone">
          <div class="language-container" @click="toggleLanguage">
            <div class="language-bg"></div>
            <div class="language-inner">
              <div class="language-track">
                <div
                  class="language-thumb"
                  :class="{ 'thumb-active': currentLanguage === 'EN' }"
                >
                  <span class="language-indicator">{{ currentLanguage }}</span>
                </div>
                <div class="language-options">
                  <span
                    class="lang-option"
                    :class="{ active: currentLanguage === 'FR' }"
                    >FR</span
                  >
                  <span
                    class="lang-option"
                    :class="{ active: currentLanguage === 'EN' }"
                    >EN</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Menu burger (Mobile ET Desktop) -->
      <div class="burger-zone">
        <button
          class="burger-container"
          @click="toggleMobileMenu"
          :class="{ 'burger-active': showMobileMenu }"
          :aria-label="showMobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'"
        >
          <div class="burger-bg"></div>
          <div class="burger-inner">
            <span class="burger-line line-1"></span>
            <span class="burger-line line-2"></span>
            <span class="burger-line line-3"></span>
          </div>
          <div class="burger-glow"></div>
        </button>
      </div>
    </nav>

    <!-- Menu burger (Mobile ET Desktop) -->
    <transition name="mobile-menu">
      <div
        v-if="showMobileMenu"
        class="mobile-menu-overlay"
        @click="closeMobileMenu"
      >
        <div class="mobile-menu-container" @click.stop>
          <div class="mobile-menu-bg"></div>

          <!-- Header du menu -->
          <div class="mobile-menu-header">
            <div class="mobile-header-inner">
              <div class="mobile-logo">
                <span class="mobile-logo-icon">🌙</span>
                <span class="mobile-logo-text">Navigation</span>
              </div>
              <button class="mobile-close-btn" @click="closeMobileMenu">
                <span class="close-icon">×</span>
              </button>
            </div>
          </div>

          <!-- Contenu du menu -->
          <div class="mobile-menu-content">
            <router-link
              v-for="(link, index) in translatedNavLinks"
              :key="link.path"
              :to="link.path"
              class="mobile-nav-item"
              :style="{ animationDelay: index * 0.1 + 0.2 + 's' }"
              @click="closeMobileMenu"
            >
              <div class="mobile-nav-item-inner">
                <div class="mobile-nav-bg"></div>
                <div class="mobile-nav-content">
                  <span class="mobile-nav-icon">{{ link.icon }}</span>
                  <span class="mobile-nav-text">{{ link.name }}</span>
                  <span class="mobile-nav-arrow">→</span>
                </div>
                <div class="mobile-nav-accent"></div>
              </div>
            </router-link>

            <!-- Section langue -->
            <div class="mobile-language-section">
              <div class="mobile-section-header">
                <span class="mobile-section-icon">🌐</span>
                <h4 class="mobile-section-title">Language</h4>
              </div>

              <div class="mobile-language-container" @click="toggleLanguage">
                <div class="mobile-language-bg"></div>
                <div class="mobile-language-inner">
                  <div class="language-track">
                    <div
                      class="language-thumb"
                      :class="{ 'thumb-active': currentLanguage === 'EN' }"
                    >
                      <span class="language-indicator">{{
                        currentLanguage
                      }}</span>
                    </div>
                    <div class="language-options">
                      <span
                        class="lang-option"
                        :class="{ active: currentLanguage === 'FR' }"
                        >FR</span
                      >
                      <span
                        class="lang-option"
                        :class="{ active: currentLanguage === 'EN' }"
                        >EN</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section rapide pour desktop -->
            <div v-if="!isMobile" class="quick-actions-section">
              <div class="mobile-section-header">
                <span class="mobile-section-icon">⚡</span>
                <h4 class="mobile-section-title">Accès rapide</h4>
              </div>
              <div class="quick-actions-grid">
                <a href="mailto:gael.rothlin@proton.me" class="quick-action-item" @click="closeMobileMenu">
                  <span class="quick-icon">📧</span>
                  <span class="quick-text">Email</span>
                </a>
                <a href="https://github.com/moonlight58" target="_blank" class="quick-action-item" @click="closeMobileMenu">
                  <span class="quick-icon">💻</span>
                  <span class="quick-text">GitHub</span>
                </a>
                <a href="https://www.instagram.com/osiris._25" target="_blank" class="quick-action-item" @click="closeMobileMenu">
                  <span class="quick-icon">📸</span>
                  <span class="quick-text">Instagram</span>
                </a>
                <button @click="scrollToTop" class="quick-action-item">
                  <span class="quick-icon">⬆️</span>
                  <span class="quick-text">Haut de page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrollingDown: false,
      isNavbarVisible: false,
      prevScrollPos: 0,
      showMobileMenu: false,
      isMobile: false,
      CustomNavBar: false,
      navLinks: [
        { path: "/projects", icon: "📁" },
        { path: "/drawings", icon: "🎨" },
        { path: "/about-me", icon: "👤" },
      ],
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
    translatedNavLinks() {
      return [
        { path: "/projects", name: this.$t("Navbar.Projects"), icon: "📁" },
        { path: "/drawings", name: this.$t("Navbar.Drawings"), icon: "🎨" },
        { path: "/about-me", name: this.$t("Navbar.About"), icon: "👤" },
      ];
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.CustomNavBar = to.path.startsWith("/competences/");
        this.closeMobileMenu();
      },
    },
  },
  mounted() {
    this.initNavbar();
    this.handleResize();

    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.handleResize);

    setTimeout(() => {
      this.isNavbarVisible = true;
    }, 300);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
    document.body.style.overflow = "";
  },
  methods: {
    initNavbar() {
      this.prevScrollPos = window.scrollY;
    },

    handleScroll() {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = 100;

      if (
        currentScrollPos < this.prevScrollPos ||
        currentScrollPos <= scrollThreshold
      ) {
        this.isScrollingDown = false;
      } else if (
        currentScrollPos > this.prevScrollPos &&
        currentScrollPos > scrollThreshold
      ) {
        this.isScrollingDown = true;
      }

      this.prevScrollPos = currentScrollPos;
    },

    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === "FR" ? "EN" : "FR";
    },

    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      document.body.style.overflow = this.showMobileMenu ? "hidden" : "";
    },

    closeMobileMenu() {
      this.showMobileMenu = false;
      document.body.style.overflow = "";
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.closeMobileMenu();
    },

    handleResize() {
      this.isMobile = window.innerWidth <= 968;
    },
  },
};
</script>

<style scoped>
/* Reprise de tous les styles existants... */
/* Je ne répète que les nouveaux styles et modifications */

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
  --navbar-height: 80px;
}

/* Le burger est maintenant toujours visible */
.burger-zone {
  position: relative;
  margin-left: 20px;
}

.burger-container {
  position: relative;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.burger-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  transition: all 0.3s ease;
}

.burger-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  z-index: 2;
}

.burger-line {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

.burger-active .line-1 {
  transform: translateY(6px) rotate(45deg);
}

.burger-active .line-2 {
  opacity: 0;
  transform: scale(0);
}

.burger-active .line-3 {
  transform: translateY(-6px) rotate(-45deg);
}

.burger-container:hover {
  transform: scale(1.05);
}

.burger-container:hover .burger-bg {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
}

/* Menu overlay avec meilleure taille pour desktop */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.mobile-menu-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 85vh;
  overflow-y: auto;
  border-radius: 24px;
  overflow: hidden;
}

/* Section des actions rapides (desktop uniquement) */
.quick-actions-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.quick-actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.quick-action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.quick-action-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.quick-icon {
  font-size: 24px;
}

.quick-text {
  font-size: 0.85rem;
  font-weight: 600;
}

/* Responsive ajustements */
@media (max-width: 968px) {
  .mobile-menu-overlay {
    align-items: flex-start;
    padding-top: 100px;
    padding: 100px 20px 20px;
  }

  .mobile-menu-container {
    max-width: 400px;
    max-height: 80vh;
  }

  .nav-content {
    display: none;
  }

  .burger-zone {
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .mobile-menu-container {
    max-width: 100%;
    border-radius: 20px;
  }

  .burger-container {
    width: 42px;
    height: 42px;
  }
}

/* Animation d'entrée du menu */
.mobile-menu-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-leave-active {
  transition: all 0.25s ease-out;
}

.mobile-menu-enter-from {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu-container {
  transform: scale(0.95) translateY(-20px);
}

.mobile-menu-enter-to {
  opacity: 1;
}

.mobile-menu-enter-to .mobile-menu-container {
  transform: scale(1) translateY(0);
}

.mobile-menu-leave-from {
  opacity: 1;
}

.mobile-menu-leave-to {
  opacity: 0;
}
</style>
