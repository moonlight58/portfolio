<template>
  <div class="navbar">
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
};
</script>

<style scoped>
.navbar {
  max-width: 412px;
  font-size: 0.8rem;
  z-index: 10;
}

@media (min-width: 420px) {
  .navbar {
    max-width: 800px;
  }
}
</style>
