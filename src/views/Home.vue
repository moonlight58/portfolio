<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="profile-container">
          <div class="profile-image-wrapper">
            <img src="../assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-image" />
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
            <a class="instagram-link" href="https://www.instagram.com/osiris._25" target="_blank"
              rel="noopener noreferrer">
              <img src="../assets/instagram.svg" class="social-icon" alt="Instagram logo" />
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
      <div class="section-header">
        <h2 class="section-title">{{ $t('Internship') }}</h2>
      </div>
      <Internship />
    </div>

    <!-- UI/UX Section -->
    <div class="uiux-section section">
      <div class="section-header">
        <h2 class="section-title">Compétences UI/UX</h2>
        <div class="section-subtitle">
          <p>Découvrez mes compétences artistiques et techniques en création de page web à travers une idée ou un style</p>
        </div>
      </div>
      <UIUX />
    </div>

    <!-- Skills Section -->
    <div class="skills-section section">
      <div class="section-header">
        <h2 class="section-title">{{ $t("Skills") }}</h2>
      </div>
      <div class="skills-content">
        <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <div class="skill-category-header">
            <h3>{{ $t(skillType) }}</h3>
          </div>
          <div class="skills-grid">
            <div class="skill-card" v-for="(language, langIndex) in skills[skillType].language" :key="langIndex"
              @click="redirectToUrl(language.url)">
              <div class="skill-icon-wrapper">
                <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" class="skill-icon" />
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
          <a class="contact-btn" href="mailto:gael.rothlin@proton.me" target="_blank" rel="noopener noreferrer">
            <img src="../assets/email.svg" alt="Email" class="contact-icon" />
            <span>Email</span>
          </a>
          <a class="contact-btn" href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer">
            <img src="../assets/instagram.svg" alt="Instagram" class="contact-icon" />
            <span>Instagram</span>
          </a>
          <a class="contact-btn" href="https://github.com/moonlight58" target="_blank" rel="noopener noreferrer">
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
import UIUX from "@/components/UI-UX.vue";
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  components: {
    Carousel,
    Internship,
    UIUX,
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.container {
  font-family: "Inter", "N27", sans-serif;
  margin-top: 10rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: #ffffff;
  background: linear-gradient(135deg,
      rgba(147, 197, 253, 0.02) 0%,
      rgba(167, 139, 250, 0.02) 50%,
      rgba(196, 181, 253, 0.02) 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  margin-bottom: 8rem;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.profile-container {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  padding: 3rem 2rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 600px;
  box-shadow:
    0 8px 32px rgba(167, 139, 250, 0.1),
    0 0 80px rgba(147, 197, 253, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.profile-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 197, 253, 0.8),
      rgba(167, 139, 250, 0.8),
      rgba(196, 181, 253, 0.8),
      transparent);
}

.profile-container:hover {
  transform: translateY(-5px);
  box-shadow:
    0 16px 48px rgba(167, 139, 250, 0.15),
    0 0 120px rgba(147, 197, 253, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(167, 139, 250, 0.6);
  box-shadow:
    0 8px 32px rgba(167, 139, 250, 0.3),
    0 0 60px rgba(147, 197, 253, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.profile-image:hover {
  transform: scale(1.08);
  box-shadow:
    0 12px 48px rgba(167, 139, 250, 0.4),
    0 0 100px rgba(147, 197, 253, 0.3);
}

.profile-glow {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.profile-image-wrapper:hover .profile-glow {
  opacity: 1;
}

.profile-name {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg,
      #ffffff 0%,
      #a7cbfa 30%,
      #a78bfa 70%,
      #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.3);
  animation: slideInLeft 0.8s ease-out 0.2s both;
}

.profile-subtitle {
  font-size: 1.2rem;
  color: rgba(167, 139, 250, 0.9);
  font-style: italic;
  margin: 0;
  opacity: 0.9;
  font-weight: 300;
  animation: slideInLeft 0.8s ease-out 0.4s both;
}

.intro-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(147, 197, 253, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: justify;
  box-shadow:
    0 8px 32px rgba(147, 197, 253, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.intro-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 197, 253, 0.6),
      rgba(167, 139, 250, 0.6),
      transparent);
}

.intro-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(147, 197, 253, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.intro-text,
.description-text {
  margin: 0 0 1rem 0;
  line-height: 1.8;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

.precision {
  font-size: 0.9rem;
  color: rgba(167, 139, 250, 0.7);
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0;
  font-weight: 300;
}

.warning {
  color: #fca5a5;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(252, 165, 165, 0.3);
}

.social-link-container {
  text-align: center;
  margin-top: 2rem;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg,
      rgba(253, 89, 73, 0.9) 0%,
      rgba(214, 36, 159, 0.9) 50%,
      rgba(40, 90, 235, 0.9) 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow:
    0 8px 32px rgba(253, 89, 73, 0.3),
    0 0 60px rgba(214, 36, 159, 0.2);
}

.instagram-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent);
  transition: left 0.6s ease;
}

.instagram-link:hover::before {
  left: 100%;
}

.instagram-link:hover {
  transform: translateY(-3px);
  box-shadow:
    0 16px 48px rgba(253, 89, 73, 0.4),
    0 0 100px rgba(214, 36, 159, 0.3);
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
  margin-bottom: 6rem;
  animation: fadeInUp 0.8s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg,
      #ffffff 0%,
      #a7cbfa 30%,
      #a78bfa 70%,
      #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(167, 139, 250, 0.3);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(167, 139, 250, 0.8),
      transparent);
}

.section-subtitle p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 300;
}

/* Projects Section */
.carousel-container {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(147, 197, 253, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  box-shadow:
    0 8px 32px rgba(147, 197, 253, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 197, 253, 0.6),
      rgba(167, 139, 250, 0.6),
      transparent);
}

.carousel-container:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(147, 197, 253, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

/* Skills Section */
.skills-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  box-shadow:
    0 8px 32px rgba(167, 139, 250, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(167, 139, 250, 0.6),
      rgba(196, 181, 253, 0.6),
      transparent);
}

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(167, 139, 250, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.skill-category-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.skill-category-header h3 {
  color: rgba(167, 139, 250, 0.9);
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 0 20px rgba(167, 139, 250, 0.3);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(147, 197, 253, 0.12);
  border-radius: 16px;
  padding: 1.8rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 197, 253, 0.8),
      transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(147, 197, 253, 0.3);
  box-shadow:
    0 16px 48px rgba(147, 197, 253, 0.15),
    0 0 80px rgba(167, 139, 250, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-icon-wrapper {
  margin-bottom: 1.2rem;
  position: relative;
}

.skill-icon {
  width: 64px;
  height: 64px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 12px rgba(167, 139, 250, 0.2));
}

.skill-card:hover .skill-icon {
  transform: scale(1.15);
  filter: drop-shadow(0 8px 24px rgba(167, 139, 250, 0.3));
}

.skill-name {
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-name {
  color: rgba(147, 197, 253, 0.9);
}

/* About Section */
.about-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(196, 181, 253, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  text-align: center;
  box-shadow:
    0 8px 32px rgba(196, 181, 253, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(196, 181, 253, 0.6),
      rgba(167, 139, 250, 0.6),
      transparent);
}

.about-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(196, 181, 253, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.about-text {
  margin: 0;
  line-height: 1.8;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

/* Contact Section */
.contact-section {
  margin-top: 6rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  padding: 3rem 2rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  text-align: center;
  box-shadow:
    0 8px 32px rgba(167, 139, 250, 0.1),
    0 0 80px rgba(147, 197, 253, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 197, 253, 0.8),
      rgba(167, 139, 250, 0.8),
      rgba(196, 181, 253, 0.8),
      transparent);
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 16px 48px rgba(167, 139, 250, 0.15),
    0 0 120px rgba(147, 197, 253, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.contact-header {
  margin-bottom: 2.5rem;
}

.contact-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg,
      #ffffff 0%,
      #a7cbfa 30%,
      #a78bfa 70%,
      #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.3);
}

.contact-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 300;
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
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 16px;
  color: rgba(167, 139, 250, 0.9);
  padding: 1.2rem 2rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(167, 139, 250, 0.1),
      transparent);
  transition: left 0.6s ease;
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:hover {
  background: rgba(167, 139, 250, 0.9);
  color: #1a1a1a;
  transform: translateY(-3px);
  box-shadow:
    0 12px 40px rgba(167, 139, 250, 0.3),
    0 0 60px rgba(147, 197, 253, 0.2);
  border-color: rgba(167, 139, 250, 0.4);
}

.contact-icon {
  width: 20px;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.contact-btn:hover .contact-icon {
  filter: brightness(0) invert(1);
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    margin-top: 6rem;
  }

  .profile-container {
    padding: 2rem 1.5rem;
  }

  .intro-card {
    padding: 2rem;
    text-align: left;
  }

  .profile-name {
    font-size: 1.8rem;
  }

  .profile-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .skill-card {
    padding: 1.5rem;
  }

  .skill-icon {
    width: 48px;
    height: 48px;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
  }

  .contact-btn {
    min-width: 200px;
    justify-content: center;
  }

  .hero-content {
    gap: 2rem;
  }

  .section {
    margin-bottom: 4rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .carousel-container,
  .skill-category,
  .about-card {
    padding: 2rem;
  }

  .contact-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .profile-name {
    font-size: 1.6rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .intro-text,
  .description-text,
  .about-text {
    font-size: 1rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .skill-card {
    padding: 1.2rem;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .contact-btn {
    padding: 1rem 1.5rem;
    font-size: 0.95rem;
  }

  .instagram-link {
    padding: 1rem 2rem;
  }
}

/* Animations pour les éléments qui apparaissent */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.warning {
  animation: pulse 2s infinite;
}

/* Scroll smooth */
html {
  scroll-behavior: smooth;
}

/* Sélection de texte */
::selection {
  background: rgba(167, 139, 250, 0.3);
  color: #ffffff;
}

::-moz-selection {
  background: rgba(167, 139, 250, 0.3);
  color: #ffffff;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(167, 139, 250, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(167, 139, 250, 0.5);
}

/* Focus states pour l'accessibilité */
.contact-btn:focus,
.instagram-link:focus,
.skill-card:focus {
  outline: 2px solid rgba(167, 139, 250, 0.6);
  outline-offset: 2px;
}

/* Animation d'apparition pour les sections */
.section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.section:nth-child(2) {
  animation-delay: 0.1s;
}

.section:nth-child(3) {
  animation-delay: 0.2s;
}

.section:nth-child(4) {
  animation-delay: 0.3s;
}

.section:nth-child(5) {
  animation-delay: 0.4s;
}
</style>