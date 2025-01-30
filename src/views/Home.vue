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

      <p class="precision"><span class="warning">*</span>(University Bachelor of Technology)</p>

      <p class="body">As for my artistic side, I'm drawing when I have enough free-time. Focusing on many art style, i've found my specialty among the Dark-art and Doodling, it is available on my Instagram account</p>
      <button onclick="window.location='https://www.instagram.com/osiris._25/'" class="instagram-button">
        <img src="../assets/instagram.svg" alt="Instagram logo">
        osiris._25
      </button>
    </div>

    <div class="about">
      <div class="about-title">Why this portfolio ?</div>
      <div class="about-content">This site is developed as part of my Portfolio project during the three years in the BUT. It will be continually updated to reflect my academic and personal projects.</div>
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
            <div
                class="language-div"
                v-for="(language, langIndex) in skills[skillType].language"
                :key="langIndex"
                @click="redirectToUrl(language.url)"
            >
              <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" />
              <p>{{ language.name }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="contact">Contact section</div>
    
    <div class="funny-shape"></div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselProject.vue";
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  components: {
    Carousel,
  },
  data() {
    return {
      skills: skills,
    };
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.warn("No URL provided for this skill");
      }
    }
  },
};
</script>

<style scoped>
.funny-shape {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: rgba(16,21,45, 1);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  filter: blur(20px);
  z-index: -1;
}

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
  margin-top: 3vh;
  margin-bottom: 10px;
  text-align: justify;
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
  display: flex;
  justify-content: center;
}

.skill-content {
  font-size: 0.9rem;
  margin-bottom: 40px;
}

.skill-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  background-color: #19203c;
  box-shadow: 0 0 10px #000000;
  border-radius: 10px;
  padding: 10px;
}

.language-div {
  margin: 2rem 0;
  text-align: center;
  cursor: pointer;
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

.instagram-button {
  display: flex;
  width: auto;
  padding: 10px 20px;
  color: white;
  background-color: #19203c;
  border: 2px solid #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.instagram-button img {
  width: 20px;
  height: 20px;
  margin-right: 10px; 
}

.instagram-button:hover {
  background-color: #3f51b5;
  cursor: pointer;
  transform: scale(1.05);
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
