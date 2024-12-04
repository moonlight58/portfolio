<template>
  <div class="navbar-container">
    <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
      <a href="/" class="pseudo">moonlight</a>
      <div class="links">
        <router-link to="/#">projects</router-link>
        <router-link to="/#">tools</router-link>
        <router-link to="/#">about me</router-link>
        <router-link to="/#">faq</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  name: "NavBar",
  data() {
    return {
      isScrollingDown: false,
      lastScrollTop: 0,
    };
  },
  mounted() {
    this.handleScroll = debounce(this.handleScroll, 10); // Limiter les appels de 100 ms
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Vérifie la direction du scroll
      if (scrollTop > this.lastScrollTop) {
        // Scroll vers le bas : active la classe navbar-small
        this.isScrollingDown = true;
      } else if (scrollTop < this.lastScrollTop) {
        this.isScrollingDown = false;
      }

      // Met à jour la position précédente du scroll
      this.lastScrollTop = Math.max(scrollTop, 0);
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
  max-width: 412px;
  font-size: 1.1rem;
  z-index: 10;
  transition: padding 0.3s ease;
}

.navbar .pseudo {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.navbar .links a {
  text-decoration: none;
  font-size: 0.8rem;
  padding: 10px 7px;
  color: #638297;
}

.navbar .links a:hover {
  color: #dbf9ff;
  transition: ease 0.4s;
}

.navbar-small {
  display: flex;
  padding: 15px 15px;
}

.navbar-small .links {
  display: none;
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

@media (min-width: 420px) {
  .navbar {
    max-width: 800px;
    padding: 30px 30px;
  }

  .navbar-small {
    padding: 15px 30px;
  }

  .navbar .links a{
    font-size: 1.1rem;
  }
}
</style>
