<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="profile-container">
          <div class="profile-image-wrapper">
            <img src="../assets/moon-pfp.jpg" alt="Gaël Röthlin" class="profile-image" />
            <div class="profile-glow"></div>
          </div>
          <div class="profile-info">
            <h1 class="profile-name">Gaël Röthlin</h1>
            <p class="profile-subtitle">{{ $t("HomeTitle") }}</p>
          </div>
        </div>
        
        <div class="intro-card">
          <p class="intro-text">
            {{ $t("BodyPart1") }}, BUT<span class="warning">*</span>,
            {{ $t("BodyPart2") }}
          </p>
          <p class="precision">
            <span class="warning">*</span>({{ $t("Precision") }})
          </p>
          <p class="description-text">
            {{ $t("Description") }}
          </p>
          
          <div class="social-link-container">
            <a
              class="instagram-link"
              href="https://www.instagram.com/osiris._25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/instagram.svg"
                class="social-icon"
                alt="Instagram logo"
              />
              <span class="social-text">osiris._25</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="projects-section section">
      <div class="section-header">
        <h2 class="section-title">{{ $t("Projects") }}</h2>
        <div class="section-subtitle">
          <p>{{ $t("ProjectContent") }}</p>
        </div>
      </div>
      <div class="carousel-container">
        <Carousel />
      </div>
    </div>

    <!-- Internship Section -->
    <div class="internship-section">
      <Internship />
    </div>

    <!-- Skills Section -->
    <div class="skills-section section">
      <div class="section-header">
        <h2 class="section-title">{{ $t("Skills") }}</h2>
      </div>
      <div class="skills-content">
        <div
          class="skill-category"
          v-for="(skillType, index) in Object.keys(skills)"
          :key="index"
        >
          <div class="skill-category-header">
            <h3>{{ $t(skillType) }}</h3>
          </div>
          <div class="skills-grid">
            <div
              class="skill-card"
              v-for="(language, langIndex) in skills[skillType].language"
              :key="langIndex"
              @click="redirectToUrl(language.url)"
            >
              <div class="skill-icon-wrapper">
                <img
                  :src="require(`@/assets/skills/${language.name}.svg`)"
                  :alt="language.name"
                  class="skill-icon"
                />
              </div>
              <p class="skill-name">{{ language.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="about-section section">
      <div class="section-header">
        <h2 class="section-title">{{ $t("WhyPortfolio") }}</h2>
      </div>
      <div class="about-card">
        <p class="about-text">
          {{ $t("WhyPortfolioContent") }}
        </p>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <div class="contact-card">
        <div class="contact-header">
          <h2 class="contact-title">Contact</h2>
          <p class="contact-subtitle">
            {{ $t("Contact") }}
          </p>
        </div>
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
.container {
  font-family: "N27", sans-serif;
  margin-top: 10rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: #fff;
}

/* Hero Section */
.hero-section {
  margin-bottom: 6rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.profile-container {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 600px;
}

.profile-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #90a8ff;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(144, 168, 255, 0.3), transparent);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image-wrapper:hover .profile-glow {
  opacity: 1;
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-subtitle {
  font-size: 1.2rem;
  color: #90a8ff;
  font-style: italic;
  margin: 0;
  opacity: 0.9;
}

.intro-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: justify;
}

.intro-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.intro-text {
  margin: 0 0 1rem 0;
  line-height: 1.7;
  font-size: 1rem;
  color: #e0e0e0;
}

.precision {
  font-size: 0.85rem;
  color: #aaa;
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0;
}

.description-text {
  margin: 0 0 2rem 0;
  line-height: 1.7;
  font-size: 1rem;
  color: #e0e0e0;
}

.warning {
  color: #ff6b6b;
  font-weight: 600;
}

.social-link-container {
  text-align: center;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(45deg, #fd5949, #d6249f, #285AEB);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.instagram-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.instagram-link:hover::before {
  left: 100%;
}

.instagram-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(253, 89, 73, 0.4);
}

.social-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.social-text {
  font-weight: 600;
}

/* Section Styling */
.section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle p {
  color: #ccc;
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
}

/* Projects Section */
.carousel-container {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
}

.carousel-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

/* Skills Section */
.skills-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-category {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.skill-category-header {
  text-align: center;
  margin-bottom: 2rem;
}

.skill-category-header h3 {
  color: #90a8ff;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(144, 168, 255, 0.3);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-icon-wrapper {
  margin-bottom: 1rem;
}

.skill-icon {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

.skill-name {
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
  font-weight: 500;
}

/* About Section */
.about-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  text-align: center;
}

.about-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.about-text {
  margin: 0;
  line-height: 1.7;
  font-size: 1rem;
  color: #e0e0e0;
}

/* Contact Section */
.contact-section {
  margin-top: 4rem;
}

.contact-card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  text-align: center;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.contact-header {
  margin-bottom: 2rem;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  color: #ccc;
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
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
  gap: 0.75rem;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 12px;
  color: #90a8ff;
  padding: 1rem 1.5rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
}

.contact-icon {
  width: 20px;
  height: 20px;
  transition: filter 0.3s;
  flex-shrink: 0;
}

.contact-btn:hover .contact-icon {
  filter: invert(1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .profile-name {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skill-card {
    padding: 1rem;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }

  .intro-card {
    padding: 1.5rem;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .carousel-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 70px;
    height: 70px;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .intro-card {
    padding: 1rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .carousel-container {
    padding: 1rem;
  }

  .contact-card {
    padding: 2rem 1rem;
  }

  .instagram-link {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (min-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}
</style>