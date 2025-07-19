<template>
  <div class="vintage-container">
    <!-- Film grain overlay -->
    <div class="film-grain"></div>
    <div class="vignette"></div>
    
    <!-- Polaroid Header -->
    <div class="polaroid-header">
      <div class="polaroid-photo">
        <div class="photo-content">
          <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="vintage-portrait" />
          <div class="photo-noise"></div>
        </div>
        <div class="polaroid-caption">
          <h1 class="vintage-name">{{ $t("HomeTitle") || "Gaël Röthlin" }}</h1>
          <p class="vintage-subtitle">{{ $t("Description") || "Développeur Full-Stack passionné" }}</p>
          <div class="date-stamp">{{ currentDate }}</div>
        </div>
      </div>
    </div>

    <!-- Typewriter Introduction -->
    <div class="typewriter-section">
      <div class="typewriter-paper">
        <div class="paper-holes">
          <div class="hole" v-for="n in 12" :key="n"></div>
        </div>
        <div class="typewriter-content">
          <p class="typewritten-text">
            {{ $t("BodyPart1") || "Salut ! Je suis développeur" }}<br>
            <span class="highlight-text">{{ $t("BodyPart2") || "et j'adore créer des expériences digitales uniques" }}</span>
          </p>
          <div class="vintage-social">
            <a href="https://www.instagram.com/osiris._25" class="vintage-link">
              @osiris._25
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Showcase - Style rétro -->
    <div class="vintage-projects">
      <h2 class="section-header">{{ $t("Projects") || "Mes Projets" }}</h2>
      <div class="project-gallery">
        <div class="project-frame" v-for="(project, index) in projects" :key="index">
          <div class="project-photo">
            <div class="project-image" :style="{ backgroundColor: project.color }">
              <div class="project-icon">{{ project.icon }}</div>
            </div>
            <div class="photo-tape"></div>
          </div>
          <div class="project-label">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <span class="project-year">{{ project.year }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Internship Section - Style vintage -->
    <div class="vintage-experience">
      <h2 class="section-header">{{ $t("Internship") || "Expérience" }}</h2>
      <div class="experience-timeline">
        <div class="timeline-item" v-for="(exp, index) in experiences" :key="index">
          <div class="timeline-date">{{ exp.year }}</div>
          <div class="timeline-content">
            <div class="experience-card">
              <h3>{{ exp.title }}</h3>
              <p class="company">{{ exp.company }}</p>
              <p class="description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Section - Style machine à écrire -->
    <div class="vintage-skills">
      <h2 class="section-header">{{ $t("Skills") || "Compétences" }}</h2>
      <div class="skills-typewriter">
        <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <h3 class="category-title">{{ $t(skillType) || skillType }}</h3>
          <div class="skills-list">
            <div 
              class="skill-tag" 
              v-for="(language, langIndex) in skills[skillType].language" 
              :key="langIndex"
              @click="redirectToUrl(language.url)"
            >
              <img 
                :src="require(`@/assets/skills/${language.name}.svg`)" 
                :alt="language.name" 
                class="skill-icon"
                @error="handleImageError"
              />
              <span class="skill-name">{{ language.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section - Style journal intime -->
    <div class="vintage-about">
      <h2 class="section-header">{{ $t("WhyPortfolio") || "Pourquoi ce portfolio ?" }}</h2>
      <div class="journal-page">
        <div class="journal-lines"></div>
        <div class="journal-content">
          <p class="handwriting">
            {{ $t("WhyPortfolioContent") || "Ce portfolio représente ma passion pour le développement et mon envie de créer des expériences utilisateur mémorables. Chaque projet est une nouvelle aventure technique." }}
          </p>
          <div class="signature">- Gaël</div>
        </div>
      </div>
    </div>

    <!-- Contact Section - Style carte postale -->
    <div class="vintage-contact">
      <h2 class="section-header">Contact</h2>
      <div class="postcard">
        <div class="postcard-front">
          <div class="stamp">
            <div class="stamp-content">FR</div>
          </div>
          <div class="postcard-address">
            <h3>Contactez-moi</h3>
            <div class="contact-methods">
              <a href="mailto:gael.rothlin@proton.me" class="contact-item">
                <span class="contact-icon">✉</span>
                gael.rothlin@proton.me
              </a>
              <a href="https://github.com/moonlight58" class="contact-item">
                <span class="contact-icon">⚡</span>
                GitHub
              </a>
              <a href="https://www.instagram.com/osiris._25" class="contact-item">
                <span class="contact-icon">📷</span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

export default {
  name: "VintageHomeView",
  data() {
    return {
      skills: skills,
      currentDate: new Date().toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      }),
      projects: [
        {
          title: "Projet Web",
          description: "Application moderne",
          year: "2024",
          color: "#8B7355",
          icon: "🌐"
        },
        {
          title: "App Mobile",
          description: "Interface utilisateur",
          year: "2023",
          color: "#A0826D",
          icon: "📱"
        },
        {
          title: "API Backend",
          description: "Architecture serveur",
          year: "2023",
          color: "#6B5B73",
          icon: "⚙️"
        }
      ],
      experiences: [
        {
          title: "Stage Développement",
          company: "Entreprise Tech",
          description: "Développement d'applications web modernes",
          year: "2024"
        },
        {
          title: "Projet Étudiant",
          company: "Formation",
          description: "Apprentissage des technologies actuelles",
          year: "2023"
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
    handleImageError(event) {
      console.warn("Image not found:", event.target.src);
      // Optionally hide the image or show a placeholder
      event.target.style.display = 'none';
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

/* Base styles */
.vintage-container {
  background: #f4f1e8;
  color: #3a3528;
  font-family: 'Courier Prime', monospace;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  padding: 2rem;
  overflow-x: hidden;
}

/* Film grain effect */
.film-grain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle, transparent 1px, rgba(0,0,0,0.15) 1px);
  background-size: 4px 4px;
  opacity: 0.4;
  pointer-events: none;
  z-index: 1000;
  animation: grain 8s steps(10) infinite;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0) }
  10% { transform: translate(-5%, -10%) }
  20% { transform: translate(-15%, 5%) }
  30% { transform: translate(7%, -25%) }
  40% { transform: translate(-5%, 25%) }
  50% { transform: translate(-15%, 10%) }
  60% { transform: translate(15%, 0%) }
  70% { transform: translate(0%, 15%) }
  80% { transform: translate(3%, 35%) }
  90% { transform: translate(-10%, 10%) }
}

.vignette {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(101, 67, 33, 0.3) 100%);
  pointer-events: none;
  z-index: 999;
}

/* Polaroid Header */
.polaroid-header {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  transform: rotate(-2deg);
}

.polaroid-photo {
  background: #faf8f3;
  border: 1px solid #d4c4a0;
  box-shadow: 
    0 10px 30px rgba(101, 67, 33, 0.3),
    inset 0 0 0 8px #faf8f3,
    inset 0 0 0 9px #d4c4a0;
  padding: 20px 20px 60px 20px;
  transform: rotate(1deg);
  position: relative;
}

.photo-content {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.vintage-portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(40%) contrast(1.2) brightness(0.9) saturate(0.8);
}

.photo-noise {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(101, 67, 33, 0.03) 2px,
      rgba(101, 67, 33, 0.03) 4px
    );
}

.polaroid-caption {
  text-align: center;
  margin-top: 15px;
}

.vintage-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #654321;
  margin: 0 0 0.5rem 0;
  text-shadow: 1px 1px 2px rgba(101, 67, 33, 0.3);
}

.vintage-subtitle {
  font-size: 0.9rem;
  color: #8b7355;
  margin: 0 0 1rem 0;
  font-style: italic;
}

.date-stamp {
  font-size: 0.8rem;
  color: #a0826d;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Typewriter Section */
.typewriter-section {
  margin-bottom: 4rem;
}

.typewriter-paper {
  background: #fefdf8;
  border: 2px solid #d4c4a0;
  box-shadow: 
    0 8px 25px rgba(101, 67, 33, 0.2),
    inset 0 0 0 1px rgba(212, 196, 160, 0.5);
  padding: 2rem;
  position: relative;
  transform: rotate(0.5deg);
}

.paper-holes {
  position: absolute;
  left: -10px;
  top: 20px;
  bottom: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hole {
  width: 8px;
  height: 8px;
  background: #f4f1e8;
  border-radius: 50%;
  border: 1px solid #d4c4a0;
}

.typewriter-content {
  margin-left: 2rem;
}

.typewritten-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #3a3528;
  margin-bottom: 1.5rem;
  position: relative;
}

.highlight-text {
  background: linear-gradient(120deg, rgba(255, 223, 186, 0.6) 0%, rgba(255, 223, 186, 0.6) 100%);
  background-size: 100% 40%;
  background-repeat: no-repeat;
  background-position: 0 70%;
  font-weight: bold;
}

.vintage-social {
  text-align: right;
  margin-top: 2rem;
}

.vintage-link {
  color: #8b7355;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.3s ease;
}

.vintage-link:hover {
  color: #654321;
}

/* Section Headers */
.section-header {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #654321;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  text-shadow: 2px 2px 4px rgba(101, 67, 33, 0.2);
}

.section-header::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #8b7355, transparent);
}

/* Projects Gallery */
.vintage-projects {
  margin-bottom: 4rem;
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.project-frame {
  background: #faf8f3;
  border: 2px solid #d4c4a0;
  box-shadow: 0 8px 20px rgba(101, 67, 33, 0.2);
  padding: 1.5rem;
  transform: rotate(var(--rotation, 1deg));
  transition: all 0.3s ease;
}

.project-frame:nth-child(2n) {
  --rotation: -1deg;
}

.project-frame:nth-child(3n) {
  --rotation: 0.5deg;
}

.project-frame:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 0 15px 35px rgba(101, 67, 33, 0.3);
}

.project-photo {
  position: relative;
  margin-bottom: 1rem;
}

.project-image {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: sepia(20%) contrast(1.1) brightness(0.95);
  position: relative;
}

.project-icon {
  font-size: 4rem;
  opacity: 0.8;
}

.photo-tape {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 40px;
  height: 20px;
  background: rgba(255, 223, 186, 0.9);
  border: 1px solid rgba(212, 196, 160, 0.8);
  transform: rotate(15deg);
}

.project-label h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #654321;
  margin: 0 0 0.5rem 0;
}

.project-label p {
  color: #8b7355;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.project-year {
  background: #8b7355;
  color: #faf8f3;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Experience Timeline */
.vintage-experience {
  margin-bottom: 4rem;
}

.experience-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #d4c4a0;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-date {
  background: #8b7355;
  color: #faf8f3;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.timeline-content {
  width: 45%;
  padding: 2rem 0;
}

.experience-card {
  background: #faf8f3;
  border: 2px solid #d4c4a0;
  padding: 1.5rem;
  box-shadow: 0 6px 15px rgba(101, 67, 33, 0.15);
  transform: rotate(var(--card-rotation, -0.5deg));
}

.timeline-item:nth-child(even) .experience-card {
  --card-rotation: 0.5deg;
}

.experience-card h3 {
  font-family: 'Playfair Display', serif;
  color: #654321;
  margin: 0 0 0.5rem 0;
}

.company {
  color: #8b7355;
  font-weight: bold;
  margin: 0 0 1rem 0;
}

.description {
  color: #6b5b73;
  font-size: 0.9rem;
  margin: 0;
}

/* Skills Section */
.vintage-skills {
  margin-bottom: 4rem;
}

.skills-typewriter {
  background: #fefdf8;
  border: 3px solid #d4c4a0;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(101, 67, 33, 0.2);
  position: relative;
}

.skills-typewriter::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: #8b7355;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.skill-category {
  margin-bottom: 2rem;
}

.category-title {
  font-family: 'Playfair Display', serif;
  color: #654321;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d4c4a0;
  padding-bottom: 0.5rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-tag {
  background: #f4f1e8;
  border: 1px solid #d4c4a0;
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(101, 67, 33, 0.1);
}

.skill-tag:hover {
  background: #8b7355;
  color: #faf8f3;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(101, 67, 33, 0.2);
}

.skill-icon {
  width: 20px;
  height: 20px;
  opacity: 0.8;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: bold;
}

/* About Section */
.vintage-about {
  margin-bottom: 4rem;
}

.journal-page {
  background: #fefdf8;
  border: 1px solid #d4c4a0;
  box-shadow: 0 8px 20px rgba(101, 67, 33, 0.15);
  padding: 3rem;
  position: relative;
  transform: rotate(-0.5deg);
  max-width: 700px;
  margin: 0 auto;
}

.journal-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    transparent,
    transparent 24px,
    rgba(212, 196, 160, 0.3) 25px
  );
  margin: 3rem;
}

.journal-content {
  position: relative;
  z-index: 1;
}

.handwriting {
  font-family: 'Courier Prime', monospace;
  font-size: 1.1rem;
  line-height: 2;
  color: #3a3528;
  margin-bottom: 2rem;
  transform: rotate(0.3deg);
}

.signature {
  text-align: right;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.2rem;
  color: #8b7355;
  transform: rotate(-1deg);
}

/* Contact Section */
.vintage-contact {
  margin-bottom: 2rem;
}

.postcard {
  max-width: 500px;
  margin: 0 auto;
  transform: rotate(1deg);
}

.postcard-front {
  background: #faf8f3;
  border: 3px solid #8b7355;
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 10px 25px rgba(101, 67, 33, 0.2);
}

.stamp {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 40px;
  background: #8b7355;
  color: #faf8f3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid #654321;
}

.postcard-address h3 {
  font-family: 'Playfair Display', serif;
  color: #654321;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #3a3528;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(139, 115, 85, 0.1);
  transform: translateX(5px);
}

.contact-icon {
  font-size: 1.2rem;
  width: 30px;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .vintage-container {
    padding: 1rem;
  }
  
  .polaroid-photo {
    padding: 15px 15px 45px 15px;
  }
  
  .photo-content {
    width: 150px;
    height: 150px;
  }
  
  .vintage-name {
    font-size: 1.4rem;
  }
  
  .section-header {
    font-size: 2rem;
  }
  
  .project-gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .experience-timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column;
    margin-left: 40px;
  }
  
  .timeline-item:nth-child(even) {
    flex-direction: column;
  }
  
  .timeline-date {
    left: -35px;
    transform: none;
  }
  
  .timeline-content {
    width: 100%;
  }
  
  .skills-list {
    justify-content: center;
  }
  
  .typewriter-content {
    margin-left: 1rem;
  }
}

@media (max-width: 480px) {
  .polaroid-header {
    transform: none;
  }
  
  .typewriter-paper {
    transform: none;
    padding: 1.5rem;
  }
  
  .project-frame {
    transform: none !important;
  }
  
  .journal-page {
    transform: none;
    padding: 2rem;
  }
  
  .postcard {
    transform: none;
  }
  
  .skill-tag {
    padding: 0.6rem 1rem;
  }
}
</style>