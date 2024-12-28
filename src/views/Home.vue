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
      <p class="body">Student in computer science BUT<span class="warning">*</span> currently in 2nd years, with a deep passion for both hardware and software. Recently, I’ve developed a keen interest in creating TUI (Text User Interface) applications, which has become one of my favorite areas of exploration. My current project involves converting full-featured applications, like Spotify, into streamlined TUI versions.</p>

      <p class="body">While I enjoy building applications, my true passion lies in refining them—making them bug-free, accessible, and user-friendly. This attention to detail extends to my other projects, such as creating a comprehensive tutorial for installing and maintaining Arch Linux. I’ve focused on breaking down each step in detail to help users overcome challenges with confidence.</p>

      <p class="body">I’m always eager to experiment, learn new development techniques, and explore innovative approaches in the world of Computer Science.</p>

      <p class="precision"><span class="warning">*</span>(University Bachelor of Technology)</p>

      <p class="body">As for my artistic side, I'm drawing when i have enough free-time. Focusing on many art style, i've found my speciality amoung the Dark-art, it is available on my Instagram account</p>
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
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank"); // Open the link in a new tab
      } else {
        console.warn("No URL provided for this skill");
      }
    }
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
