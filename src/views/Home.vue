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
      <Carousel />
    </div>

    <div class="skills">
      <p class="skill-title">What are my Skills ?</p>
      <div class="skill-content">
        <div class="type-skill" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <h3>{{ skillType }}</h3>
          <div class="skill-container">
            <div class="language-div" v-for="(language, langIndex) in skills[skillType].language" :key="langIndex">
              <img :src="require(`@/assets/skills/${language}.svg`)" :alt="language" />
              <p>{{ language }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact">Contact section</div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselProject.vue";
import skills from "@/datasource/skills.json"; // Import the JSON data

export default {
  name: "HomeView",
  components: {
    Carousel,
  },
  data() {
    return {
      skills: skills, // Use the entire skills object
    };
  },
  methods: {
    scrollToDiv() {
      this.$refs.project.scrollIntoView({ behavior: "smooth" });
    },
  },
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
  margin-top: 4rem;
  width: 90%;
}

.about-title {
  margin: 75px 0 10px 0;
  font-size: 1.4rem;
  font-weight: bold;
}

.project-title, .skill-title{
  font-size: 1.4rem;
  font-weight: bold;
  margin: 75px 0 20px 0;
}

.project-content, .about-content {
  font-size: 0.9rem;
  margin-bottom: 40px;
}

.type-skill h3 {
  margin: 2rem 0 1rem 0;
}

.skill-content {
  font-size: 0.9rem;
  margin-bottom: 40px;
}

.skill-container {
  display: grid; /* Use grid layout for precise control over columns */
  grid-template-columns: repeat(2, 1fr); /* Two equal-width columns */
  gap: 10px; /* Space between items */
  background-color: #19203c;
  box-shadow: 0 0 10px #000000;
  border-radius: 10px;
  padding: 10px;
}

.language-div {
  margin: 2rem 0;
  text-align: center;
}

.language-div img {
  width: 90px;
  height: 90px;
  margin-bottom: 5px;
}

.contact {
  margin: 75px;
  font-size: 1.4rem;
  font-weight: bold;
}

@media (min-width: 420px) {
  .container {
    margin-top: 3rem;
    max-width: 800px;
    padding: 20px;
  }

  .skill-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
