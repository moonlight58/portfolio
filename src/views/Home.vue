<template>
  <div class="container">
    <div class="presentation">
      <div class="presentation-header">
        <img src="../assets/moon-pfp.jpg" alt="Moon-pfp" />
        <h1>Gaël Röthlin</h1>
      </div>
    </div>

    <div class="presentation-content section">
      <h1 class="title">{{ $t("HomeTitle") }}</h1>
      <p class="body">
        {{ $t("BodyPart1") }}, BUT<span class="warning">*</span>,
        {{ $t("BodyPart2") }}
      </p>

      <p class="precision">
        <span class="warning">*</span>({{ $t("Precision") }})
      </p>

      <p class="body">
        {{ $t("Description") }}
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

    <div class="project section">
      <h2 class="section-title">{{ $t("Projects") }}</h2>
      <div class="section-content">
        <p class="project-content">
          {{ $t("ProjectContent") }}
        </p>
        <Carousel />
      </div>
    </div>

    <Internship />

    <div class="skills section">
      <h2 class="section-title">{{ $t("Skills") }}</h2>
      <div class="section-content">
        <div
          class="type-skill"
          v-for="(skillType, index) in Object.keys(skills)"
          :key="index"
        >
          <h3>{{ $t(skillType) }}</h3>
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

    <div class="about section">
      <h2 class="section-title">{{ $t("WhyPortfolio") }}</h2>
      <div class="section-content">
        <p class="about-content">
          {{ $t("WhyPortfolioContent") }}
        </p>
      </div>
    </div>

    <div class="contact section">
      <h2 class="section-title">Contact</h2>
      <div class="section-content">
        <p class="contact-text">
          {{ $t("Contact") }}
        </p>
        <div class="contact-links">
          <a
            class="contact-btn"
            href="mailto:gael.rothlin@proton.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/email.svg" alt="Email" class="contact-icon" />
            <span>Email</span>
          </a>
          <a
            class="contact-btn"
            href="https://www.instagram.com/osiris._25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/instagram.svg"
              alt="Instagram"
              class="contact-icon"
            />
            <span>Instagram</span>
          </a>
          <a
            class="contact-btn"
            href="https://github.com/moonlight58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/github.svg" alt="GitHub" class="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
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

.container {
  margin-top: 6rem;
  width: 600px;
  text-align: justify;
  line-height: 1.6;
}

.section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
}

.section:last-child {
  border-bottom: none;
}

.section-title {
  margin-bottom: 1.5rem;
  color: #90a8ff;
  font-size: 1.5rem;
  font-weight: bold;
}

.section-content {
  color: #ccc;
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

.presentation-header h1 {
  color: #90a8ff;
  font-size: 1.8rem;
}

.presentation-header img {
  border-radius: 50%;
  max-width: 50px;
  margin-right: 20px;
  border: 2px solid #90a8ff;
}

.presentation-content .title {
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #90a8ff;
  font-size: 1.3rem;
}

.presentation-content .body {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
}

.presentation-content .precision {
  font-size: 0.9rem;
  font-weight: light;
  color: #888;
}

.warning {
  font-size: 1.1rem;
  color: #ff6b6b;
  font-weight: bold;
}

.project-content,
.about-content {
  text-align: justify;
  margin-bottom: 1.5rem;
}

.type-skill {
  background: rgba(144, 168, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #90a8ff;
}

.type-skill h3 {
  margin: 0 0 1.5rem 0;
  color: #90a8ff;
  font-size: 1.2rem;
  text-align: center;
}

.skill-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: rgba(144, 168, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
}

.language-div {
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.language-div:hover {
  background: rgba(144, 168, 255, 0.15);
  transform: translateY(-2px);
}

.language-div img {
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.language-div:hover img {
  transform: scale(1.1);
}

.language-div p {
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
}

.contact {
  background: rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  border-left: 4px solid #90a8ff;
  padding: 2rem; /* Added explicit padding */
}

.contact-text {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #ccc;
  text-align: center; /* Center the contact text */
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
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid #90a8ff;
  border-radius: 8px;
  color: #90a8ff;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 120px; /* Ensure consistent button sizes */
  justify-content: center;
}

.contact-btn:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(144, 168, 255, 0.3);
}

.contact-icon {
  width: 20px;
  height: 20px;
  transition: filter 0.3s;
  flex-shrink: 0; /* Prevent icon from shrinking */
}

.contact-btn:hover .contact-icon {
  filter: invert(1);
}

.contact-btn span {
  white-space: nowrap; /* Prevent text wrapping */
}

.spacer {
  margin: 2rem 0;
  text-align: center;
}

.fancy {
  display: inline-flex;
  align-items: center;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid #90a8ff;
  border-radius: 8px;
  color: #90a8ff;
  padding: 0.75em 1.5em;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.fancy:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(144, 168, 255, 0.3);
}

.instagram-img {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  transition: filter 0.3s ease;
}

.fancy:hover .instagram-img {
  filter: invert(1);
}

.text {
  font-weight: 600;
}

/* Masquer les éléments de décoration originaux */
.top-key,
.bottom-key-1,
.bottom-key-2 {
  display: none;
}

/* Responsive */
@media (max-width: 1186px) {
  .container {
    width: 100%;
    padding: 0 1rem;
  }

  .skill-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .skill-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 1.5rem;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-btn {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 1rem;
  }
  
  .contact-text {
    font-size: 0.9rem;
  }
  
  .contact-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
