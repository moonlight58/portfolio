<template>
  <div class="navbar-container">
    <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
      <router-link to="/" class="pseudo">moonlight</router-link>
      <div class="navbar-right">
        <div class="links">
          <router-link to="/projects">projects</router-link>
          <router-link to="/about-me">about me</router-link>
        </div>
        
        <!-- Language Slider -->
        <div class="language-slider">
          <div class="slider-track" @click="toggleLanguage">
            <div class="slider-thumb" :class="{ 'slider-thumb-en': currentLanguage === 'EN' }">
              <span class="language-indicator">{{ currentLanguage }}</span>
            </div>
            <div class="language-labels">
              <span class="lang-label lang-fr" :class="{ active: currentLanguage === 'FR' }">FR</span>
              <span class="lang-label lang-en" :class="{ active: currentLanguage === 'EN' }">EN</span>
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
    };
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$i18n.locale.toUpperCase();
      },
      set(val) {
        this.$i18n.locale = val.toLowerCase();
      }
    }
  },
  mounted() {
    this.prevScrollPos = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY;
      this.isScrollingDown = currentScrollPos > this.prevScrollPos;
      this.prevScrollPos = currentScrollPos;
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'FR' ? 'EN' : 'FR';
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  padding: 30px 22px;
  width: 100%;
  justify-content: space-between;
  max-width: 100vw;
  font-size: 1.1rem;
  z-index: 10;
  transition: padding 0.3s ease;
}

.navbar, .links {
  font-family: "N27", sans-serif;
  font-weight: bold;
}

.navbar .pseudo {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px 17px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar .links a {
  text-decoration: none;
  font-size: 0.8rem;
  padding: 10px 17px;
  color: #638297;
}

.navbar .links a:hover {
  color: #dbf9ff;
  transition: ease 0.4s;
}

.navbar-small {
  display: flex;
  padding: 15px 20px;
}

.navbar-small .links {
  display: none;
}

.navbar-small .language-slider {
  display: flex;
}

.navbar-container {
  width: 100%;
  display: flex;
  top: 0;
  position: fixed;
  justify-content: center;
  backdrop-filter: blur(1rem);
  z-index: 9;
}

/* Language Slider Styles */
.language-slider {
  display: flex;
  align-items: center;
}

.slider-track {
  position: relative;
  width: 80px;
  height: 32px;
  background: rgba(144, 168, 255, 0.1);
  border: 1px solid rgba(144, 168, 255, 0.3);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.slider-track:hover {
  background: rgba(144, 168, 255, 0.15);
  border-color: rgba(144, 168, 255, 0.5);
}

.slider-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 28px;
  background: linear-gradient(45deg, #90a8ff, #b8c5ff);
  border-radius: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(144, 168, 255, 0.3);
}

.slider-thumb-en {
  transform: translateX(42px);
}

.language-indicator {
  font-size: 0.7rem;
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
  padding: 0 8px;
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

@media (min-width: 800px) {
  .navbar {
    max-width: 800px;
    padding: 30px 30px;
  }

  .navbar-small {
    padding: 15px 30px;
  }

  .navbar .links a {
    font-size: 1.1rem;
  }

  .navbar-right {
    gap: 2.5rem;
  }

  .slider-track {
    width: 90px;
    height: 36px;
  }

  .slider-thumb {
    width: 40px;
    height: 30px;
    top: 2px;
  }

  .slider-thumb-en {
    transform: translateX(46px);
  }

  .language-indicator {
    font-size: 0.8rem;
  }

  .lang-label {
    font-size: 0.8rem;
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