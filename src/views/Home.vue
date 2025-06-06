<template>
  <div class="container">
    <div class="presentation">
      <div class="presentation-header">
        <img src="../assets/moon-pfp.jpg" alt="Moon-pfp" />
        <h1>Gaël Röthlin</h1>
      </div>
    </div>

    <div class="presentation-content">
      <h1 class="title">Developer and artist</h1>
      <p class="body">
        French student in computer science, BUT<span class="warning">*</span>,
        currently in 2nd years. I'm always trying new things, eager to learn,
        and try to help others with my work
      </p>

      <p class="precision">
        <span class="warning">*</span>(University Bachelor of Technology)
      </p>

      <p class="body">
        In my free time, I enjoy exploring my artistic side through drawing.
        While I experiment with various art styles, I’ve found my specialty in
        dark art and doodling. You can find my work on my Instagram account.
      </p>

      <div class="spacer">
        <a
          class="fancy"
          href="https://www.instagram.com/osiris._25"
          target="_blank"
        >
          <span class="top-key"></span>
          <img
            src="../assets/instagram.svg"
            class="instagram-img"
            alt="Instagram logo"
          />
          <span class="text">osiris._25</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
      </div>
    </div>

    <div class="project">
      <h2 class="project-title">Projects</h2>
      <p class="project-content">
        Here are some of my favorite projects, from video games to websites to
        applications.
      </p>
      <Carousel />
    </div>

    <Internship />

    <div class="skills">
      <h2 class="skill-title">What are my Skills ?</h2>
      <div class="skill-content">
        <div
          class="type-skill"
          v-for="(skillType, index) in Object.keys(skills)"
          :key="index"
        >
          <h3>{{ skillType }}</h3>
          <div class="skill-container">
            <div
              class="language-div"
              v-for="(language, langIndex) in skills[skillType].language"
              :key="langIndex"
              @click="redirectToUrl(language.url)"
            >
              <img
                :src="require(`@/assets/skills/${language.name}.svg`)"
                :alt="language.name"
              />
              <p>{{ language.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <div class="about-title"><h2>Why this portfolio ?</h2></div>
      <p class="about-content">
        This site is developed as part of my Portfolio project during the three
        years in the BUT. It will be continually updated to reflect my academic
        and personal projects.
      </p>
    </div>

    <div class="contact">
      <h2>Contact</h2>
      <p class="contact-text">
        Want to chat, collaborate or just say hello? Don't hesitate to contact
        me!
      </p>
      <div class="contact-links">
        <a
          class="contact-btn"
          href="mailto:gael.rothlin@proton.me"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/email.svg" alt="Email" class="contact-icon" />
          Email
        </a>
        <a
          class="contact-btn"
          href="https://www.instagram.com/osiris._25"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/instagram.svg"
            alt="Instagram"
            class="contact-icon"
          />
          Instagram
        </a>
        <a
          class="contact-btn"
          href="https://github.com/moonlight58"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/github.svg" alt="GitHub" class="contact-icon" />
          GitHub
        </a>
      </div>
    </div>

    <div class="funny-shape"></div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselProject.vue";
import Internship from "@/components/StageComponent.vue";
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  components: {
    Carousel,
    Internship,
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
        console.warn("No URL provided");
      }
    },
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
  background-color: rgba(16, 21, 45, 1);
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
  margin: 20px 0;
}

.presentation-header img {
  border-radius: 50%;
  max-width: 50px;
  margin-right: 20px;
}

.presentation-content .title {
  font-style: italic;
  margin-bottom: 10px;
}

.presentation-content .body {
  margin-top: 3vh;
  margin-bottom: 10px;
  text-align: justify;
}

.presentation-content .precision {
  font-size: 0.9rem;
  font-weight: light;
}

.warning {
  font-size: 1.1rem;
  color: #ff3535;
}

.container {
  margin-top: 4rem;
  width: 90%;
}

.about-title {
  margin: 75px 0 10px 0;
  font-weight: bold;
}

.project {
  margin-bottom: 75px;
}

.project-title,
.skill-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 75px 0 20px 0;
}

.project-content,
.about-content {
  text-align: justify;
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
  transition: transform 0.3s;
}

.language-div:hover img {
  transform: scale(1.17);
}

.contact {
  margin: 75px 0 0 0;
  padding: 2rem 1rem;
  background: #19203c;
  border-radius: 15px;
  box-shadow: 0 0 10px #000000;
  text-align: center;
}

.contact h2 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.contact-text {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #dbf9ff;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;
  padding: 0.75em 1.5em;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s, color 0.3s, border 0.3s;
}

.contact-btn:hover {
  background: #fff;
  color: #10152d;
  border-color: #dbf9ff;
}

.contact-icon {
  color: #fff;
  width: 22px;
  height: 22px;
  transition: filter 0.3s;
}

.contact-btn:hover .contact-icon {
  filter: invert(1);
}

.instagram-img {
  display: flex-inline;
  vertical-align: sub;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  transition: filter 0.3s ease-in-out;
}

.fancy:hover .instagram-img {
  filter: invert(1);
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
