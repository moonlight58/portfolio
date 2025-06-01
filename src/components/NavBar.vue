<template>
  <div class="navbar-container">
    <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
      <router-link to="/" class="pseudo">moonlight</router-link>
      <div class="links">
        <router-link to="/projects">projects</router-link>
        <router-link to="/about-me">about me</router-link>
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

.navbar .pseudo {
  text-decoration: none;
  color: white;
  font-weight: bold;
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
