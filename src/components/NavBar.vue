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

      <!-- Navigation principale -->
      <div class="nav-content" v-if="!isMobile">
        <div class="nav-links-container">
          <router-link
            v-for="(link, index) in translatedNavLinks"
            :key="link.path"
            :to="link.path"
            class="nav-item"
            :style="{ animationDelay: index * 0.1 + 's' }"
            @mouseenter="playHoverSound"
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

      <!-- Menu burger mobile -->
      <div class="burger-zone" v-if="isMobile">
        <button
          class="burger-container"
          @click="toggleMobileMenu"
          :class="{ 'burger-active': showMobileMenu }"
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

    <!-- Menu mobile -->
    <transition name="mobile-menu">
      <div
        v-if="showMobileMenu && isMobile"
        class="mobile-menu-overlay"
        @click="closeMobileMenu"
      >
        <div class="mobile-menu-container" @click.stop>
          <div class="mobile-menu-bg"></div>

          <!-- Header du menu mobile -->
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

          <!-- Contenu du menu mobile -->
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

            <!-- Section langue mobile -->
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

    // Animation d'entrée de la navbar
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

    handleResize() {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 968;

      if (!this.isMobile && wasMobile && this.showMobileMenu) {
        this.closeMobileMenu();
      }
    },
  },
};
</script>

<style scoped>
/* ===== CONTENEUR PRINCIPAL ===== */
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

/* ===== PARTICULES FLOTTANTES ===== */
.navbar-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0;
  animation: float-navbar 8s infinite linear;
}

.particle:nth-child(1) {
  left: 20%;
}
.particle:nth-child(2) {
  left: 50%;
}
.particle:nth-child(3) {
  left: 80%;
}

@keyframes float-navbar {
  0% {
    transform: translateY(100px) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(50px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }
  100% {
    transform: translateY(-50px) scale(0);
    opacity: 0;
  }
}

/* ===== NAVBAR PRINCIPALE ===== */
.navbar {
  position: relative;
  height: var(--navbar-height);
  background: rgba(21, 25, 55, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(-20px);
}

.navbar-visible {
  opacity: 1;
  transform: translateY(0);
}

.navbar-hidden {
  transform: translateY(-100%);
}

/* ===== LOGO ZONE ===== */
.logo-zone {
  text-decoration: none;
  position: relative;
}

.logo-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.logo-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.logo-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 2;
}

.logo-icon {
  font-size: 24px;
  transition: all 0.3s ease;
}

.logo-text {
  font-size: 1.1rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.logo-glow {
  position: absolute;
  inset: -2px;
  background: var(--primary-gradient);
  border-radius: 50px;
  opacity: 0;
  filter: blur(8px);
  transition: opacity 0.3s ease;
  z-index: -1;
}

.logo-container:hover {
  transform: translateY(-2px);
}

.logo-container:hover .logo-bg {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
}

.logo-container:hover .logo-glow {
  opacity: 0.3;
}

.logo-container:hover .logo-icon {
  transform: rotate(15deg) scale(1.1);
}

/* ===== NAVIGATION CONTENT ===== */
.nav-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-links-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ===== NAV ITEMS ===== */
.nav-item {
  position: relative;
  text-decoration: none;
  opacity: 0;
  transform: translateY(10px);
  animation: nav-item-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes nav-item-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-item-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.nav-item-bg {
  position: absolute;
  inset: 0;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.nav-icon {
  font-size: 16px;
  transition: all 0.3s ease;
}

.nav-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.nav-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-gradient);
  border-radius: 1px;
  transform: translateX(0%);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Nav item hover effects */
.nav-item:hover .nav-item-inner {
  transform: translateY(-2px);
}

.nav-item:hover .nav-item-bg {
  background: rgba(255, 255, 255, 0.03);
  border-color: var(--border-color);
}

.nav-item:hover .nav-text {
  color: var(--text-primary);
}

.nav-item:hover .nav-icon {
  transform: scale(1.1);
}

.nav-item:hover .nav-accent {
  width: 120%;
}

/* Active state */
.nav-item.router-link-active .nav-item-bg {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
}

.nav-item.router-link-active .nav-text {
  color: var(--text-primary);
}

.nav-item.router-link-active .nav-accent {
  width: 80%;
}

/* ===== LANGUAGE ZONE ===== */
.language-zone {
  position: relative;
}

.language-container {
  position: relative;
  cursor: pointer;
  padding: 8px;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.language-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.language-inner {
  position: relative;
  z-index: 2;
}

.language-track {
  position: relative;
  width: 80px;
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.language-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 32px;
  height: 32px;
  background: var(--primary-gradient);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.thumb-active {
  left: 46px;
}

.language-indicator {
  font-size: 0.75rem;
  font-weight: 800;
  color: white;
}

.language-options {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  pointer-events: none;
}

.lang-option {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.lang-option.active {
  color: transparent;
}

.language-container:hover {
  transform: scale(1.02);
}

.language-container:hover .language-bg {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
}

/* ===== BURGER MENU ===== */
.burger-zone {
  position: relative;
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

.burger-glow {
  position: absolute;
  inset: -2px;
  background: var(--primary-gradient);
  border-radius: 26px;
  opacity: 0;
  filter: blur(8px);
  transition: opacity 0.3s ease;
  z-index: -1;
}

/* Burger active state */
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

.burger-container:hover .burger-glow {
  opacity: 0.2;
}

/* ===== MENU MOBILE ===== */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.mobile-menu-container {
  position: relative;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 20px;
  overflow: hidden;
}

.mobile-menu-bg {
  position: absolute;
  inset: 0;
  background: rgba(21, 25, 55, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
}

/* Header du menu mobile */
.mobile-menu-header {
  position: relative;
  padding: 30px;
  border-bottom: 1px solid var(--border-color);
  z-index: 2;
}

.mobile-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-logo-icon {
  font-size: 24px;
}

.mobile-logo-text {
  font-size: 1.2rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-close-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-icon {
  font-size: 24px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.mobile-close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-color);
}

.mobile-close-btn:hover .close-icon {
  color: var(--text-primary);
  transform: rotate(90deg);
}

/* Contenu du menu mobile */
.mobile-menu-content {
  position: relative;
  padding: 20px 30px 40px;
  z-index: 2;
}

/* Items de navigation mobile */
.mobile-nav-item {
  position: relative;
  display: block;
  text-decoration: none;
  margin-bottom: 12px;
  opacity: 0;
  transform: translateX(-20px);
  animation: mobile-nav-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes mobile-nav-enter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-nav-item-inner {
  position: relative;
  padding: 16px 20px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-nav-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.mobile-nav-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.mobile-nav-icon {
  font-size: 20px;
}

.mobile-nav-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.mobile-nav-arrow {
  font-size: 18px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.mobile-nav-accent {
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 50%;
  background: var(--primary-gradient);
  transform: translateY(-50%);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0 8px 8px 0;
}

/* Mobile nav item hover */
.mobile-nav-item:hover .mobile-nav-bg {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border-color);
}

.mobile-nav-item:hover .mobile-nav-text,
.mobile-nav-item:hover .mobile-nav-arrow {
  color: var(--text-primary);
}

.mobile-nav-item:hover .mobile-nav-arrow {
  transform: translateX(4px);
}

.mobile-nav-item:hover .mobile-nav-accent {
  width: 4px;
}

/* Section langue mobile */
.mobile-language-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.mobile-section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.mobile-section-icon {
  font-size: 18px;
}

.mobile-section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin: 0;
}

.mobile-language-container {
  position: relative;
  cursor: pointer;
  padding: 16px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-language-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.mobile-language-inner {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.mobile-language-container:hover .mobile-language-bg {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-color);
}

/* ===== ANIMATIONS DE TRANSITION ===== */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
}

.mobile-menu-enter-to {
  opacity: 1;
}

.mobile-menu-leave-from {
  opacity: 1;
}

.mobile-menu-leave-to {
  opacity: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 968px) {
  .navbar {
    padding: 0 20px;
  }

  .logo-text {
    font-size: 1rem;
  }

  .logo-icon {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  :root {
    --navbar-height: 70px;
  }

  .navbar {
    height: 70px;
    padding: 0 15px;
  }

  .logo-container {
    padding: 10px 16px;
    gap: 10px;
  }

  .logo-text {
    font-size: 0.95rem;
  }

  .logo-icon {
    font-size: 18px;
  }

  .mobile-menu-overlay {
    padding-top: 80px;
  }

  .mobile-menu-container {
    width: 95%;
  }

  .mobile-menu-content {
    padding: 15px 20px 30px;
  }

  .mobile-nav-item-inner {
    padding: 14px 16px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 10px;
  }

  .logo-container {
    padding: 8px 14px;
    gap: 8px;
  }

  .logo-text {
    font-size: 0.9rem;
  }

  .logo-icon {
    font-size: 16px;
  }

  .burger-container {
    width: 42px;
    height: 42px;
    border-radius: 21px;
  }

  .burger-line {
    width: 16px;
  }

  .mobile-menu-header {
    padding: 25px 20px;
  }

  .mobile-logo-text {
    font-size: 1.1rem;
  }

  .mobile-close-btn {
    width: 36px;
    height: 36px;
    border-radius: 18px;
  }

  .close-icon {
    font-size: 20px;
  }
}

/* ===== ANIMATIONS AVANCÉES ===== */
@keyframes glitch-effect {
  0%,
  100% {
    text-shadow: 0 0 0 transparent;
  }
  20% {
    text-shadow: 2px 2px 0 var(--accent-color), -2px -2px 0 #667eea;
  }
  40% {
    text-shadow: -2px 2px 0 var(--accent-color), 2px -2px 0 #667eea;
  }
  60% {
    text-shadow: 2px -2px 0 var(--accent-color), -2px 2px 0 #667eea;
  }
  80% {
    text-shadow: -2px -2px 0 var(--accent-color), 2px 2px 0 #667eea;
  }
}

/* Effet glitch sur le logo au hover */
.logo-container:hover .logo-text {
  animation: glitch-effect 0.6s ease-in-out;
}

/* ===== ÉTATS PREFERS-REDUCED-MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .particle {
    display: none;
  }

  .logo-container:hover .logo-text {
    animation: none;
  }

  .navbar {
    transition: transform 0.3s ease;
  }
}

/* ===== ÉTATS DE FOCUS POUR L'ACCESSIBILITÉ ===== */
.logo-zone:focus-visible,
.nav-item:focus-visible,
.language-container:focus-visible,
.burger-container:focus-visible,
.mobile-nav-item:focus-visible,
.mobile-language-container:focus-visible,
.mobile-close-btn:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
  border-radius: 8px;
}

/* ===== AMÉLIORATIONS POUR LE CONTRASTE ===== */
@media (prefers-contrast: high) {
  :root {
    --text-secondary: #e0e6ff;
    --border-color: rgba(102, 126, 234, 0.3);
  }

  .nav-text,
  .mobile-nav-text,
  .mobile-section-title {
    color: var(--text-secondary);
  }
}

/* ===== SCROLL BEHAVIOR SMOOTH ===== */
html {
  scroll-behavior: smooth;
}

/* ===== OPTIMISATIONS PERFORMANCE ===== */
.navbar,
.mobile-menu-overlay {
  will-change: transform;
}

.logo-icon,
.nav-icon,
.mobile-nav-arrow {
  will-change: transform;
}

/* Forcer l'accélération matérielle pour les animations */
.particle,
.logo-glow,
.burger-glow,
.nav-accent,
.mobile-nav-accent {
  transform: translateZ(0);
}

/* ===== DARK MODE AMÉLIORÉ ===== */
@media (prefers-color-scheme: light) {
  :root {
    --dark-bg: #f8fafc;
    --dark-surface: #ffffff;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --border-color: rgba(102, 126, 234, 0.15);
  }

  .navbar {
    background: rgba(255, 255, 255, 0.85);
  }

  .mobile-menu-overlay {
    background: rgba(248, 250, 252, 0.95);
  }

  .mobile-menu-bg {
    background: rgba(255, 255, 255, 0.95);
  }
}

/* ===== PRINT STYLES ===== */
@media print {
  .navbar-container {
    display: none;
  }
}

/* ===== GESTION DES ERREURS ET FALLBACKS ===== */
@supports not (backdrop-filter: blur(10px)) {
  .navbar {
    background: rgba(21, 25, 55, 0.98);
  }

  .mobile-menu-bg {
    background: rgba(21, 25, 55, 0.98);
  }
}

@supports not (background-clip: text) {
  .logo-text,
  .mobile-logo-text {
    color: var(--text-primary);
    background: none;
    -webkit-text-fill-color: unset;
  }
}

/* ===== SÉLECTION DE TEXTE DÉSACTIVÉE ===== */
.navbar,
.mobile-menu-container {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* ===== CURSEUR PERSONNALISÉ ===== */
.logo-zone,
.nav-item,
.language-container,
.burger-container,
.mobile-nav-item,
.mobile-language-container,
.mobile-close-btn {
  cursor: pointer;
}

.logo-zone:hover,
.nav-item:hover,
.language-container:hover,
.mobile-nav-item:hover,
.mobile-language-container:hover {
  cursor: pointer;
}

/* ===== AMÉLIORATIONS POUR MOBILE ===== */
@media (hover: none) and (pointer: coarse) {
  /* Supprime les effets hover sur mobile pour éviter les états "collants" */
  .logo-container:hover,
  .nav-item:hover .nav-item-inner,
  .language-container:hover,
  .burger-container:hover {
    transform: none;
  }

  .nav-item:hover .nav-accent {
    width: 0;
  }

  /* Augmente la zone de tap sur mobile */
  .burger-container {
    min-width: 48px;
    min-height: 48px;
  }

  .mobile-nav-item-inner {
    min-height: 48px;
  }

  .mobile-close-btn {
    min-width: 44px;
    min-height: 44px;
  }
}

/* ===== LOADING STATE ===== */
.navbar-loading {
  opacity: 0;
  transform: translateY(-20px);
}

.navbar-loading .logo-container,
.navbar-loading .nav-item {
  opacity: 0;
  transform: translateY(10px);
}

/* ===== THÈME SOMBRE AVANCÉ ===== */
@media (prefers-color-scheme: dark) {
  /* Amélioration du contraste en mode sombre */
  .navbar {
    box-shadow: 0 1px 0 rgba(102, 126, 234, 0.1);
  }

  .mobile-menu-container {
    box-shadow: 0 20px 40px rgba(10, 14, 39, 0.5);
  }
}

/* ===== OPTIMISATION POUR LES ÉCRANS HAUTE DENSITÉ ===== */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .burger-line,
  .nav-accent,
  .mobile-nav-accent {
    /* Ajustements pour les écrans Retina */
    transform: translateZ(0);
  }
}
</style>
