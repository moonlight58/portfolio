<template>
  <div class="navbar-container">
    <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
      <a href="/" class="pseudo">moonlight</a>
      <div class="links">
        <router-link to="/projects">projects</router-link>
        <router-link to="/#">tools</router-link>
        <router-link to="/#">about me</router-link>
        <router-link to="/#">faq</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrollingDown: false, // Contrôle si on défile vers le bas
      prevScrollPos: 0,       // Position précédente du scroll
    };
  },
  mounted() {
    this.prevScrollPos = window.scrollY; // Initialisation de la position du scroll
    window.addEventListener("scroll", this.handleScroll); // Ajoute un écouteur
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Nettoie l'écouteur
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY;
      this.isScrollingDown = currentScrollPos > this.prevScrollPos; // Définit la direction
      this.prevScrollPos = currentScrollPos;
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
  padding: 15px 20px;
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

@media (min-width: 800px) {
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
