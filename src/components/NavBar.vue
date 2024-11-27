<template>
  <div class="navbar" :class="{ 'navbar-small': isScrollingDown }">
    <a href="#" class="pseudo">moonlight</a>
    <div class="links">
      <a href="#">projects</a>
      <a href="#">tools</a>
      <a href="#">about me</a>
      <a href="#">faq</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrollingDown: false,
      lastScrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        this.isScrollingDown = true;
      } else {
        this.isScrollingDown = false;
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    },
  },
};
</script>

<style scoped>
/* Navbar shared styles */
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  padding: 30px 15px;
  backdrop-filter: blur(1rem);
  width: 100%;
  justify-content: space-between;
  max-width: 412px;
  font-size: 0.8rem;
  z-index: 10;
  transition: padding 0.3s ease;
}

.navbar .pseudo {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

.navbar .links a {
  text-decoration: none;
  padding: 0 9px;
  color: #638297;
}

.navbar .links a:hover {
  color: #dbf9ff;
  transition: ease 0.4s;
}

.navbar-small {
  padding: 15px 15px;
}

.navbar-small .links {
  display: none;
}

@media (min-width: 420px) {
  .navbar {
    max-width: 800px;
  }
}
</style>
