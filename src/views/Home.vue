<template>
  <div class="container">

    <div class="presentation">

      <div class="presentation-header">
        <img src="../assets/moon-pfp.jpg" alt="Moon-pfp" />
        <p>Gaël Röthlin</p>
      </div>

    </div>


    <div class="presentation-content">

      <p class="title">Developer and artist</p>
      <p class="body">Student in computer science BUT<span class="warning">*</span> currently in 2nd years. I'm always trying new things, eager to learn, and try to help others with my work</p>
      <p class="precision"><span class="warning">*</span>(university bachelor of technology)</p>

    </div>

    <div class="about">

      <div class="about-title">Why this portfolio ?</div>
      <div class="about-content">This site was developed as part of my Portfolio project during my years in the BUT. It will be continually updated to reflect my academic and personal projects.</div>

    </div>

    <div class="project">

      <p class="project-title">Projects</p>
      <p class="project-content">Here are my favorites projects so far. Going from Application to Website to Games</p>

      <Carousel/>

    </div>



    <div class="contact">Contact section</div>


    <div class="" style="height: 100vh;"></div>


  </div>
</template>

<script>
import Carousel from "@/components/CarouselProject.vue";

export default {
  name: "HomeView",
  components: {
    Carousel,
  },
  methods: {
    scrollToDiv() {
      this.$refs.project.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.presentation {
  margin: 15px 0 10px 0;
  text-align: center;
}

.presentation-header {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  margin: 20px 0;
}

.presentation-header img {
  border-radius: 50%;
  max-width: 40px;
  margin-right: 10px;
}

.presentation-content .title {
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.presentation-content .body {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.presentation-content .precision {
  font-size: 0.7rem;
}

.warning {
  color: #ff3535;
}

.container {
  width: 90%;
}

.about-title {
  margin: 75px 0 10px 0;
  font-size: 1.4rem;
  font-weight: bold;
}

.project-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 75px 0 20px 0;
}

.project-content, .about-content {
  font-size: 0.9rem;
  margin-bottom: 40px;
}

.contact {
  margin: 75px;
  font-size: 1.4rem;
  font-weight: bold;
}

@media (min-width: 420px) {
  .container {
    max-width: 800px;
    padding: 20px;
  }
}
</style>
