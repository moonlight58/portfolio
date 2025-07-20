<template>
  <div class="clay-container">
    <!-- Floating Elements Background -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-clay">
      <div class="profile-clay">
        <div class="profile-image-clay">
          <div class="image-wrapper">
            <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-img" />
          </div>
        </div>
        <div class="profile-info-clay">
          <h1 class="name-clay">Gaël Röthlin</h1>
          <p class="subtitle-clay">{{ $t("HomeTitle") }}</p>
        </div>
      </div>
      
      <div class="intro-clay">
        <div class="intro-bubble">
          <p class="intro-text">
            {{ $t("BodyPart1") }}, BUT<span class="warning-clay">*</span>,
            {{ $t("BodyPart2") }}
          </p>
          <p class="precision-clay">
            <span class="warning-clay">*</span>({{ $t("Precision") }})
          </p>
          <p class="description-clay">
            {{ $t("Description") }}
          </p>
        </div>
        
        <div class="social-clay">
          <a class="instagram-clay" href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer">
            <div class="social-icon-wrapper">
              <img src="@/assets/instagram.svg" class="social-icon-clay" alt="Instagram logo" />
            </div>
            <span>osiris._25</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-clay">
      <div class="section-header-clay">
        <h2 class="section-title-clay">{{ $t("Projects") }}</h2>
        <p class="section-subtitle-clay">{{ $t("ProjectContent") }}</p>
      </div>
      
      <div class="projects-grid">
        <div class="project-card-clay" v-for="project in projects" :key="project.id">
          <div class="project-preview">
            <div class="project-icon">{{ project.icon }}</div>
          </div>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span class="tag-clay" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-clay">
      <div class="section-header-clay">
        <h2 class="section-title-clay">{{ $t('Internship') }}</h2>
      </div>
      
      <div class="experience-timeline">
        <div class="timeline-item" v-for="experience in experiences" :key="experience.id">
          <div class="timeline-dot"></div>
          <div class="experience-card">
            <div class="experience-header">
              <h3 class="experience-title">{{ experience.title }}</h3>
              <span class="experience-period">{{ experience.period }}</span>
            </div>
            <p class="experience-company">{{ experience.company }}</p>
            <p class="experience-description">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-clay">
      <div class="section-header-clay">
        <h2 class="section-title-clay">{{ $t("Skills") }}</h2>
      </div>
      
      <div class="skills-categories">
        <div class="skill-category-clay" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <div class="category-header">
            <h3 class="category-title">{{ $t(skillType) }}</h3>
          </div>
          <div class="skills-blob">
            <div class="skill-item" 
                 v-for="(language, langIndex) in skills[skillType].language" 
                 :key="langIndex"
                 @click="redirectToUrl(language.url)">
              <div class="skill-icon-clay">
                <img :src="require(`@/assets/skills/${language.name}.svg`)" 
                     :alt="language.name" 
                     class="skill-icon-img" />
              </div>
              <span class="skill-name-clay">{{ language.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-clay">
      <div class="section-header-clay">
        <h2 class="section-title-clay">{{ $t("WhyPortfolio") }}</h2>
      </div>
      
      <div class="about-bubble">
        <p class="about-text-clay">{{ $t("WhyPortfolioContent") }}</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-clay">
      <div class="contact-blob">
        <h2 class="contact-title-clay">Contact</h2>
        <p class="contact-subtitle-clay">{{ $t("Contact") }}</p>
        
        <div class="contact-buttons">
          <a class="contact-btn-clay email-clay" href="mailto:gael.rothlin@proton.me" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon-wrapper">
              <img src="@/assets/email.svg" alt="Email" class="contact-icon-clay" />
            </div>
            <span>Email</span>
          </a>
          <a class="contact-btn-clay instagram-contact-clay" href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon-wrapper">
              <img src="@/assets/instagram.svg" alt="Instagram" class="contact-icon-clay" />
            </div>
            <span>Instagram</span>
          </a>
          <a class="contact-btn-clay github-clay" href="https://github.com/moonlight58" target="_blank" rel="noopener noreferrer">
            <div class="contact-icon-wrapper">
              <img src="@/assets/github.svg" alt="GitHub" class="contact-icon-clay" />
            </div>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  data() {
    return {
      skills: skills,
      projects: [
        {
          id: 1,
          title: "Web Application",
          description: "Interface utilisateur moderne avec Vue.js",
          icon: "🎨",
          tags: ["Vue.js", "CSS", "JavaScript"]
        },
        {
          id: 2,
          title: "Mobile Design",
          description: "Application mobile responsive",
          icon: "📱",
          tags: ["React", "Mobile", "UI/UX"]
        },
        {
          id: 3,
          title: "API Backend",
          description: "Service REST avec Node.js",
          icon: "⚡",
          tags: ["Node.js", "Express", "MongoDB"]
        }
      ],
      experiences: [
        {
          id: 1,
          title: "Développeur Frontend",
          company: "Tech Company",
          period: "2024",
          description: "Développement d'interfaces utilisateur modernes et responsives."
        },
        {
          id: 2,
          title: "Stagiaire Développeur",
          company: "Startup Innovation",
          period: "2023",
          description: "Participation au développement de solutions web innovantes."
        }
      ]
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
    animateShapes() {
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape, index) => {
        const delay = index * 0.5;
        shape.style.animationDelay = `${delay}s`;
      });
    }
  },
  mounted() {
    // Animation des formes flottantes
    this.animateShapes();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Variables CSS pour le thème Claymorphism */
.clay-container {
  /* Définition locale des variables pour éviter les conflits avec le thème global */
  --clay-bg: #f5f3f0;
  --clay-primary: #e8ddd4;
  --clay-secondary: #d4c4b0;
  --clay-accent: #c8a882;
  --clay-dark: #8b7355;
  --clay-text: #5d4e37;
  --clay-light: #faf8f5;
  --clay-shadow: rgba(139, 115, 85, 0.15);
  --clay-shadow-dark: rgba(139, 115, 85, 0.25);
  --clay-glow: rgba(200, 168, 130, 0.3);

  /* Styles du conteneur */
  min-height: 100vh;
  min-width: 99vw;
  background: linear-gradient(135deg, var(--clay-bg) 0%, var(--clay-light) 100%);
  position: relative;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
  color: var(--clay-text);
  padding: 2rem;
}

/* Formes flottantes en arrière-plan */
.floating-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--clay-primary), var(--clay-secondary));
  opacity: 0.6;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-duration: 15s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 15%;
  animation-duration: 18s;
  animation-direction: reverse;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-duration: 22s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  bottom: 10%;
  right: 10%;
  animation-duration: 16s;
  animation-direction: reverse;
}

.shape-5 {
  width: 140px;
  height: 140px;
  top: 50%;
  left: 50%;
  animation-duration: 25s;
  opacity: 0.3;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-25px) rotate(270deg);
  }
}

/* Section Hero */
.hero-clay {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 6rem;
  position: relative;
  z-index: 2;
}

.profile-clay {
  background: var(--clay-light);
  padding: 3rem;
  border-radius: 60px;
  box-shadow: 
    20px 20px 60px var(--clay-shadow),
    -20px -20px 60px rgba(255, 255, 255, 0.7),
    inset 10px 10px 20px rgba(255, 255, 255, 0.2),
    inset -10px -10px 20px var(--clay-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  max-width: 500px;
  width: 100%;
}

.profile-clay:hover {
  transform: translateY(-5px);
  box-shadow: 
    25px 25px 70px var(--clay-shadow-dark),
    -25px -25px 70px rgba(255, 255, 255, 0.8),
    inset 10px 10px 20px rgba(255, 255, 255, 0.3),
    inset -10px -10px 20px var(--clay-shadow);
}

.profile-image-clay {
  position: relative;
}

.image-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--clay-primary);
  padding: 8px;
  box-shadow: 
    15px 15px 30px var(--clay-shadow),
    -15px -15px 30px rgba(255, 255, 255, 0.7),
    inset 5px 5px 10px rgba(255, 255, 255, 0.2),
    inset -5px -5px 10px var(--clay-shadow);
  transition: all 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 
    20px 20px 40px var(--clay-shadow-dark),
    -20px -20px 40px rgba(255, 255, 255, 0.8);
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.name-clay {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, var(--clay-dark), var(--clay-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.subtitle-clay {
  font-size: 1.2rem;
  color: var(--clay-dark);
  margin: 0;
  font-weight: 500;
  opacity: 0.8;
  text-align: center;
}

.intro-clay {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 600px;
}

.intro-bubble {
  background: var(--clay-light);
  padding: 2.5rem;
  border-radius: 40px;
  box-shadow: 
    15px 15px 40px var(--clay-shadow),
    -15px -15px 40px rgba(255, 255, 255, 0.7),
    inset 8px 8px 16px rgba(255, 255, 255, 0.2),
    inset -8px -8px 16px var(--clay-shadow);
  transition: all 0.3s ease;
}

.intro-bubble:hover {
  transform: translateY(-3px);
  box-shadow: 
    20px 20px 50px var(--clay-shadow-dark),
    -20px -20px 50px rgba(255, 255, 255, 0.8),
    inset 8px 8px 16px rgba(255, 255, 255, 0.3),
    inset -8px -8px 16px var(--clay-shadow);
}

.intro-text, .description-clay {
  margin: 0 0 1rem 0;
  line-height: 1.7;
  font-size: 1.05rem;
  color: var(--clay-text);
}

.precision-clay {
  font-size: 0.9rem;
  color: var(--clay-dark);
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0;
  opacity: 0.7;
}

.warning-clay {
  color: #d97706;
  font-weight: 700;
  animation: pulse-clay 2s infinite;
}

@keyframes pulse-clay {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.social-clay {
  display: flex;
  justify-content: center;
}

.instagram-clay {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #fd5949, #d6249f, #285aeb);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 
    10px 10px 30px rgba(253, 89, 73, 0.3),
    -5px -5px 20px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.instagram-clay::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.6s;
}

.instagram-clay:hover::before {
  left: 100%;
}

.instagram-clay:hover {
  transform: translateY(-3px);
  box-shadow: 
    15px 15px 40px rgba(253, 89, 73, 0.4),
    -8px -8px 25px rgba(255, 255, 255, 0.3);
}

.social-icon-wrapper {
  display: flex;
  align-items: center;
}

.social-icon-clay {
  width: 20px;
  height: 20px;
}

/* Sections communes */
section {
  margin-bottom: 6rem;
  position: relative;
  z-index: 2;
}

.section-header-clay {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title-clay {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, var(--clay-dark), var(--clay-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.section-title-clay::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--clay-accent);
  border-radius: 2px;
  box-shadow: 0 2px 10px var(--clay-glow);
}

.section-subtitle-clay {
  color: var(--clay-dark);
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
  font-weight: 400;
}

/* Section Projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card-clay {
  background: var(--clay-light);
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 
    12px 12px 35px var(--clay-shadow),
    -12px -12px 35px rgba(255, 255, 255, 0.7),
    inset 6px 6px 12px rgba(255, 255, 255, 0.2),
    inset -6px -6px 12px var(--clay-shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card-clay:hover {
  transform: translateY(-5px);
  box-shadow: 
    18px 18px 45px var(--clay-shadow-dark),
    -18px -18px 45px rgba(255, 255, 255, 0.8),
    inset 6px 6px 12px rgba(255, 255, 255, 0.3),
    inset -6px -6px 12px var(--clay-shadow);
}

.project-preview {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.project-icon {
  font-size: 3rem;
  background: var(--clay-primary);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    8px 8px 20px var(--clay-shadow),
    -8px -8px 20px rgba(255, 255, 255, 0.7);
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--clay-dark);
  margin: 0 0 0.5rem 0;
}

.project-desc {
  color: var(--clay-text);
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-clay {
  background: var(--clay-accent);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 4px 4px 10px var(--clay-glow);
}

/* Section Expérience */
.experience-timeline {
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--clay-accent);
  border-radius: 2px;
  box-shadow: 0 0 10px var(--clay-glow);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: var(--clay-accent);
  border-radius: 50%;
  box-shadow: 
    4px 4px 10px var(--clay-shadow),
    -2px -2px 6px rgba(255, 255, 255, 0.7),
    0 0 15px var(--clay-glow);
  z-index: 1;
}

.experience-card {
  background: var(--clay-light);
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 
    10px 10px 30px var(--clay-shadow),
    -10px -10px 30px rgba(255, 255, 255, 0.7),
    inset 5px 5px 10px rgba(255, 255, 255, 0.2),
    inset -5px -5px 10px var(--clay-shadow);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--clay-dark);
  margin: 0;
}

.experience-period {
  background: var(--clay-accent);
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

.experience-company {
  color: var(--clay-dark);
  font-weight: 500;
  margin: 0 0 1rem 0;
  opacity: 0.8;
}

.experience-description {
  color: var(--clay-text);
  margin: 0;
  line-height: 1.6;
}

/* Section Compétences */
.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-category-clay {
  background: var(--clay-light);
  padding: 2.5rem;
  border-radius: 35px;
  box-shadow: 
    15px 15px 40px var(--clay-shadow),
    -15px -15px 40px rgba(255, 255, 255, 0.7),
    inset 8px 8px 16px rgba(255, 255, 255, 0.2),
    inset -8px -8px 16px var(--clay-shadow);
}

.category-header {
  text-align: center;
  margin-bottom: 2rem;
}

.category-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--clay-dark);
  margin: 0;
}

.skills-blob {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem;
  background: var(--clay-primary);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    8px 8px 20px var(--clay-shadow),
    -8px -8px 20px rgba(255, 255, 255, 0.7);
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 
    12px 12px 30px var(--clay-shadow-dark),
    -12px -12px 30px rgba(255, 255, 255, 0.8);
}

.skill-icon-clay {
  width: 50px;
  height: 50px;
  background: var(--clay-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: 
    6px 6px 15px var(--clay-shadow),
    -6px -6px 15px rgba(255, 255, 255, 0.7);
}

.skill-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name-clay {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--clay-dark);
}

/* Section À propos */
.about-bubble {
  background: var(--clay-light);
  padding: 2.5rem;
  border-radius: 35px;
  box-shadow: 
    15px 15px 40px var(--clay-shadow),
    -15px -15px 40px rgba(255, 255, 255, 0.7),
    inset 8px 8px 16px rgba(255, 255, 255, 0.2),
    inset -8px -8px 16px var(--clay-shadow);
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.about-text-clay {
  margin: 0;
  line-height: 1.7;
  font-size: 1.05rem;
  color: var(--clay-text);
}

/* Section Contact */
.contact-blob {
  background: var(--clay-light);
  padding: 3rem 2rem;
  border-radius: 40px;
  box-shadow: 
    20px 20px 50px var(--clay-shadow),
    -20px -20px 50px rgba(255, 255, 255, 0.7),
    inset 10px 10px 20px rgba(255, 255, 255, 0.2),
    inset -10px -10px 20px var(--clay-shadow);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-title-clay {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, var(--clay-dark), var(--clay-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle-clay {
  color: var(--clay-dark);
  font-size: 1.1rem;
  margin: 0 0 2.5rem 0;
  opacity: 0.8;
  font-weight: 400;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.contact-btn-clay {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 120px;
  justify-content: center;
}

.contact-btn-clay::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.6s;
}

.contact-btn-clay:hover::before {
  left: 100%;
}

.contact-btn-clay:hover {
  transform: translateY(-3px);
}

.email-clay {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  box-shadow: 
    10px 10px 30px rgba(79, 70, 229, 0.3),
    -5px -5px 20px rgba(255, 255, 255, 0.2);
}

.email-clay:hover {
  box-shadow: 
    15px 15px 40px rgba(79, 70, 229, 0.4),
    -8px -8px 25px rgba(255, 255, 255, 0.3);
}

.instagram-contact-clay {
  background: linear-gradient(135deg, #fd5949, #d6249f, #285aeb);
  color: white;
  box-shadow: 
    10px 10px 30px rgba(253, 89, 73, 0.3),
    -5px -5px 20px rgba(255, 255, 255, 0.2);
}

.instagram-contact-clay:hover {
  box-shadow: 
    15px 15px 40px rgba(253, 89, 73, 0.4),
    -8px -8px 25px rgba(255, 255, 255, 0.3);
}

.github-clay {
  background: linear-gradient(135deg, #1f2937, #374151);
  color: white;
  box-shadow: 
    10px 10px 30px rgba(31, 41, 55, 0.3),
    -5px -5px 20px rgba(255, 255, 255, 0.2);
}

.github-clay:hover {
  box-shadow: 
    15px 15px 40px rgba(31, 41, 55, 0.4),
    -8px -8px 25px rgba(255, 255, 255, 0.3);
}

.contact-icon-wrapper {
  display: flex;
  align-items: center;
}

.contact-icon-clay {
  width: 20px;
  height: 20px;
}

/* Animations avancées */
@keyframes clay-glow {
  0%, 100% {
    box-shadow: 
      15px 15px 40px var(--clay-shadow),
      -15px -15px 40px rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 
      20px 20px 50px var(--clay-shadow-dark),
      -20px -20px 50px rgba(255, 255, 255, 0.8),
      0 0 30px var(--clay-glow);
  }
}

.clay-glow-animation {
  animation: clay-glow 3s infinite;
}

/* Effets de survol pour les sections */
.projects-clay:hover .project-card-clay:not(:hover) {
  opacity: 0.7;
  transform: scale(0.98);
}

.skills-clay:hover .skill-item:not(:hover) {
  opacity: 0.7;
  transform: scale(0.95);
}

/* Responsive Design */
@media (max-width: 768px) {
  .clay-container {
    padding: 1rem;
  }
  
  .hero-clay {
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .profile-clay {
    padding: 2rem;
    border-radius: 40px;
  }
  
  .name-clay {
    font-size: 2rem;
  }
  
  .section-title-clay {
    font-size: 2rem;
  }
  
  .intro-bubble {
    padding: 1.5rem;
    border-radius: 25px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card-clay {
    padding: 1.5rem;
    border-radius: 20px;
  }
  
  .experience-timeline {
    padding-left: 1.5rem;
  }
  
  .timeline-dot {
    left: -1.5rem;
  }
  
  .experience-card {
    padding: 1.5rem;
    border-radius: 20px;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skill-category-clay {
    padding: 1.5rem;
    border-radius: 25px;
  }
  
  .skills-blob {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  .skill-item {
    padding: 1rem;
  }
  
  .contact-blob {
    padding: 2rem 1.5rem;
    border-radius: 30px;
  }
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-btn-clay {
    width: 100%;
    max-width: 250px;
  }
  
  .about-bubble {
    padding: 1.5rem;
    border-radius: 25px;
  }
  
  .floating-shapes .shape {
    opacity: 0.3;
  }
  
  .shape-1, .shape-3 {
    display: none;
  }
}

@media (max-width: 480px) {
  .clay-container {
    padding: 0.5rem;
  }
  
  .profile-clay {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .name-clay {
    font-size: 1.8rem;
  }
  
  .section-title-clay {
    font-size: 1.8rem;
  }
  
  .intro-text, .description-clay {
    font-size: 1rem;
  }
  
  .instagram-clay {
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .contact-title-clay {
    font-size: 1.8rem;
  }
  
  .skills-blob {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Animations d'entrée */
@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Classes d'animation */
.animate-slide-bottom {
  animation: slideInFromBottom 0.8s ease-out;
}

.animate-slide-left {
  animation: slideInFromLeft 0.8s ease-out;
}

.animate-slide-right {
  animation: slideInFromRight 0.8s ease-out;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

/* Staggered animations pour les éléments multiples */
.animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.animate-stagger > *:nth-child(2) { animation-delay: 0.2s; }
.animate-stagger > *:nth-child(3) { animation-delay: 0.3s; }
.animate-stagger > *:nth-child(4) { animation-delay: 0.4s; }
.animate-stagger > *:nth-child(5) { animation-delay: 0.5s; }
.animate-stagger > *:nth-child(6) { animation-delay: 0.6s; }

/* Effet de parallaxe léger */
@media (prefers-reduced-motion: no-preference) {
  .floating-shapes {
    animation: parallax 30s linear infinite;
  }
}

@keyframes parallax {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Mode sombre (optionnel) */
@media (prefers-color-scheme: dark) {
  :root {
    --clay-bg: #2a2a2a;
    --clay-primary: #3a3a3a;
    --clay-secondary: #4a4a4a;
    --clay-accent: #c8a882;
    --clay-dark: #e5e5e5;
    --clay-text: #d0d0d0;
    --clay-light: #353535;
    --clay-shadow: rgba(0, 0, 0, 0.3);
    --clay-shadow-dark: rgba(0, 0, 0, 0.5);
    --clay-glow: rgba(200, 168, 130, 0.2);
  }
  
  .clay-container {
    background: linear-gradient(135deg, var(--clay-bg) 0%, #1a1a1a 100%);
  }
}

/* Print styles */
@media print {
  .floating-shapes,
  .contact-buttons,
  .social-clay {
    display: none !important;
  }
  
  .clay-container {
    background: white !important;
    color: black !important;
  }
  
  * {
    box-shadow: none !important;
    animation: none !important;
  }
}
</style>