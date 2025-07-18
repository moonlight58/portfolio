<template>
  <div class="container">
    <MinimalistNavBar />
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-grid">
        <div class="profile-block">
          <div class="profile-image-container">
            <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-image" />
          </div>
          <div class="geometric-accent"></div>
        </div>
        
        <div class="hero-text">
          <h1 class="hero-title">GAËL RÖTHLIN</h1>
          <p class="hero-subtitle">{{ $t("HomeTitle") }}</p>
          <div class="hero-divider"></div>
          <p class="hero-description">
            {{ $t("BodyPart1") }}, BUT<span class="warning-text">*</span>, {{ $t("BodyPart2") }}
          </p>
          <p class="hero-precision">
            <span class="warning-text">*</span>({{ $t("Precision") }})
          </p>
        </div>
      </div>
      
      <div class="hero-bottom">
        <div class="social-block">
          <a href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="social-platform">INSTAGRAM</span>
            <span class="social-handle">@osiris._25</span>
          </a>
        </div>
        <div class="geometric-line"></div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects-section">
      <div class="section-header">
        <div class="section-number">01</div>
        <h2 class="section-title">{{ $t("Projects") }}</h2>
        <div class="section-accent"></div>
      </div>
      
      <div class="section-content">
        <p class="section-description">{{ $t("ProjectContent") }}</p>
        
        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in dummyProjects" :key="index">
            <div class="project-header">
              <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="project-status">{{ project.status }}</div>
            </div>
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills-section">
      <div class="section-header">
        <div class="section-number">02</div>
        <h2 class="section-title">{{ $t("Skills") }}</h2>
        <div class="section-accent"></div>
      </div>
      
      <div class="section-content">
        <p class="section-description">Découvrez les technologies et outils que j'utilise pour créer des expériences numériques exceptionnelles.</p>
        
        <div class="skills-grid">
          <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
            <div class="skill-category-header">
              <h3 class="skill-category-title">{{ $t(skillType) }}</h3>
              <div class="skill-category-line"></div>
            </div>
            <div class="skill-items">
              <button 
                class="skill-item" 
                v-for="(language, langIndex) in skills[skillType].language" 
                :key="langIndex"
                @click="redirectToUrl(language.url)"
              >
                <div class="skill-icon-container">
                  <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" class="skill-icon" />
                </div>
                <span class="skill-name">{{ language.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Internship Section -->
    <section class="section internship-section">
      <div class="section-header">
        <div class="section-number">03</div>
        <h2 class="section-title">{{ $t('Internship') }}</h2>
        <div class="section-accent"></div>
      </div>
      
      <div class="section-content">
        <p class="section-description">Mon parcours professionnel et mes expériences en entreprise.</p>
        
        <div class="internship-timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">STAGE EN DÉVELOPPEMENT</h3>
                <span class="timeline-date">2024</span>
              </div>
              <div class="timeline-company">Entreprise Partenaire</div>
              <p class="timeline-description">
                Expérience enrichissante dans le développement d'applications web modernes. 
                Participation à des projets concrets et acquisition de compétences techniques 
                et professionnelles essentielles.
              </p>
              <div class="timeline-skills">
                <span class="timeline-skill">Vue.js</span>
                <span class="timeline-skill">Node.js</span>
                <span class="timeline-skill">Base de données</span>
                <span class="timeline-skill">Travail en équipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section">
      <div class="section-header">
        <div class="section-number">04</div>
        <h2 class="section-title">{{ $t("WhyPortfolio") }}</h2>
        <div class="section-accent"></div>
      </div>
      
      <div class="section-content">
        <div class="about-text-container">
          <p class="about-text">{{ $t("WhyPortfolioContent") }}</p>
          <div class="about-accent-block"></div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-header">
        <h2 class="contact-title">CONTACT</h2>
        <div class="contact-divider"></div>
        <p class="contact-subtitle">{{ $t("Contact") }}</p>
      </div>
      
      <div class="contact-grid">
        <a href="mailto:gael.rothlin@proton.me" target="_blank" rel="noopener noreferrer" class="contact-button">
          <span class="contact-method">EMAIL</span>
          <span class="contact-details">gael.rothlin@proton.me</span>
        </a>
        
        <a href="https://www.instagram.com/osiris._25" target="_blank" rel="noopener noreferrer" class="contact-button">
          <span class="contact-method">INSTAGRAM</span>
          <span class="contact-details">@osiris._25</span>
        </a>
        
        <a href="https://github.com/moonlight58" target="_blank" rel="noopener noreferrer" class="contact-button">
          <span class="contact-method">GITHUB</span>
          <span class="contact-details">moonlight58</span>
        </a>
      </div>
      
      <div class="contact-footer">
        <div class="footer-line"></div>
        <p class="footer-text">© 2024 Gaël Röthlin</p>
      </div>
    </section>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";
import MinimalistNavBar from "@/components/MinimalistNavBar.vue";

export default {
  name: "HomeView",
  components: {
    MinimalistNavBar,
  },
  data() {
    return {
      skills: skills,
      dummyProjects: [
        {
          name: 'SYSTÈME DE PORTFOLIO',
          description: 'Application web moderne avec plusieurs thèmes interactifs. Architecture modulaire et responsive design.',
          status: 'ACTIF',
          technologies: ['Vue.js', 'CSS3', 'JavaScript']
        },
        {
          name: 'INTERFACE TACTIQUE',
          description: 'Expérience utilisateur immersive inspirée des jeux vidéo. Animations complexes et interactions dynamiques.',
          status: 'TERMINÉ',
          technologies: ['Vue.js', 'Animation CSS', 'Audio API']
        },
        {
          name: 'DESIGN MINIMALISTE',
          description: 'Interface épurée privilégiant la lisibilité et la fonctionnalité. Approche moderne du design web.',
          status: 'TERMINÉ',
          technologies: ['HTML5', 'CSS Grid', 'Typography']
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
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
}

.container {
  font-family: 'Crimson Text', serif;
  background-color: #ffffff;
  color: #000000;
  line-height: 1.6;
  min-width: 100vw;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: 8rem;
}

/* Hero Section */
.hero-section {
  padding: 4rem 0 6rem 0;
  border-bottom: 3px solid #000000;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
}

.profile-block {
  position: relative;
}

.profile-image-container {
  width: 200px;
  height: 200px;
  border: 4px solid #000000;
  position: relative;
  z-index: 2;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.geometric-accent {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 200px;
  background-color: #444444;
  z-index: 1;
}

.hero-text {
  padding-top: 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #666666;
}

.hero-divider {
  width: 100px;
  height: 3px;
  background-color: #000000;
  margin-bottom: 2rem;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  max-width: 600px;
}

.hero-precision {
  font-size: 0.9rem;
  color: #666666;
  font-style: italic;
}

.warning-text {
  color: #000000;
  font-weight: 600;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-block {
  flex: 1;
}

.social-link {
  display: inline-block;
  border: 3px solid #000000;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.social-link:hover {
  background-color: #000000;
  color: #ffffff;
}

.social-link:hover .social-platform,
.social-link:hover .social-handle {
  background-color: transparent;
}

.social-platform {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.social-handle {
  display: block;
  font-size: 1.1rem;
}

.geometric-line {
  width: 200px;
  height: 3px;
  background-color: #000000;
}

/* Section Styling */
.section {
  padding: 6rem 0;
  border-bottom: 1px solid #cccccc;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  gap: 2rem;
}

.section-number {
  font-size: 3rem;
  font-weight: 600;
  color: #cccccc;
  min-width: 100px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  flex: 1;
}

.section-accent {
  width: 60px;
  height: 3px;
  background-color: #000000;
}

.section-content {
  margin-left: 120px;
}

.section-description {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #666666;
  max-width: 600px;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  border: 2px solid #000000;
  padding: 2rem;
  background-color: #ffffff;
  transition: all 0.2s ease;
}

.project-card:hover {
  background-color: #f5f5f5;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: #cccccc;
}

.project-status {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000000;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.project-description {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-card:hover,
.project-card:hover .project-header,
.project-card:hover .project-number,
.project-card:hover .project-status,
.project-card:hover .project-title,
.project-card:hover .project-description,
.project-card:hover .project-tech {
    background-color: #f5f5f5;
}

.tech-tag {
  padding: 0.25rem 0.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Skills Section */
.skills-grid {
  display: grid;
  gap: 4rem;
}

.skill-category {
  border-left: 4px solid #000000;
  padding-left: 2rem;
}

.skill-category-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.skill-category-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-category-line {
  flex: 1;
  height: 2px;
  background-color: #cccccc;
}

.skill-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid #cccccc;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Crimson Text', serif;
  font-size: 1rem;
}

.skill-item:hover {
  border-color: #000000;
  background-color: #f5f5f5;
}

.skill-icon-container {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name {
  font-weight: 600;
}

/* Internship Section */
.internship-timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 12px;
  height: 12px;
  background-color: #000000;
  border-radius: 50%;
}

.timeline-marker::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 12px;
  width: 2px;
  height: 100px;
  background-color: #cccccc;
}

.timeline-content {
  background-color: #f5f5f5;
  padding: 2rem;
  border-left: 4px solid #000000;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
}

.timeline-date {
  font-size: 1rem;
  color: #666666;
  font-weight: 600;
}

.timeline-company {
  font-size: 1rem;
  color: #000000;
  font-weight: 600;
  margin-bottom: 1rem;
}

.timeline-description {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.timeline-skills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.timeline-header, .timeline-content, .timeline-company, .timeline-date, .timeline-description, .timeline-skills { 
    background-color: #f5f5f5;
}

.timeline-skill {
  padding: 0.25rem 0.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* UI/UX Section */
.uiux-showcase {
  display: grid;
  gap: 2rem;
}

.design-style {
  border: 2px solid #cccccc;
  padding: 2rem;
  background-color: #ffffff;
  transition: all 0.2s ease;
}

.design-style:hover {
  border-color: #000000;
  background-color: #f5f5f5;
}

.style-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.style-title {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.style-indicator {
  width: 12px;
  height: 12px;
  border: 2px solid #cccccc;
  border-radius: 50%;
}

.style-indicator.active {
  background-color: #000000;
  border-color: #000000;
}

.style-description {
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
}

/* About Section */
.about-text-container {
  position: relative;
  max-width: 700px;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 2rem;
  background-color: #f5f5f5;
  border-left: 4px solid #000000;
}

.about-accent-block {
  position: absolute;
  top: 20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background-color: #000000;
  z-index: -1;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0 4rem 0;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-title {
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
}

.contact-divider {
  width: 100px;
  height: 3px;
  background-color: #000000;
  margin: 0 auto 2rem auto;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-button {
  display: block;
  border: 3px solid #000000;
  padding: 2rem;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  transition: all 0.2s ease;
  text-align: center;
}

.contact-button:hover {
  background-color: #000000;
  color: #ffffff;
}

.contact-button:hover .contact-method,
.contact-button:hover .contact-details {
  background-color: transparent;
}

.contact-method {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.contact-details {
  display: block;
  font-size: 1rem;
  font-style: italic;
}

.contact-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #cccccc;
}

.footer-line {
  width: 50px;
  height: 2px;
  background-color: #000000;
  margin: 0 auto 1rem auto;
}

.footer-text {
  font-size: 0.9rem;
  color: #666666;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .profile-image-container {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }

  .geometric-accent {
    width: 150px;
    height: 150px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-bottom {
    flex-direction: column;
    gap: 2rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .section-content {
    margin-left: 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-number {
    font-size: 2rem;
    min-width: auto;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skill-items {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-title {
    font-size: 2rem;
  }

  .about-accent-block {
    width: 50px;
    height: 50px;
    top: 10px;
    right: -10px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .profile-image-container {
    width: 120px;
    height: 120px;
  }
  
  .geometric-accent {
    width: 120px;
    height: 120px;
  }
  
  .skill-category {
    padding-left: 1rem;
  }
  
  .about-text {
    padding: 1.5rem;
  }
  
  .contact-button {
    padding: 1.5rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
}
</style>