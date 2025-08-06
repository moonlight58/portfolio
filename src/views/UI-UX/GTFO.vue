<template>
  <div class="gtfo-container">
    <!-- Header Terminal -->
    <div class="terminal-header">
      <div class="terminal-line">
        <span class="terminal-label">USER_ID:</span>
        <span class="terminal-value">GAEL.ROTHLIN</span>
        <span class="terminal-separator">|</span>
        <span class="terminal-label">STATUS:</span>
        <span class="terminal-value active">ACTIVE</span>
        <span class="terminal-separator">|</span>
        <span class="terminal-label">CLEARANCE:</span>
        <span class="terminal-value">DEVELOPER</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="profile-card">
          <div class="profile-header">
            <div class="profile-image-container">
              <div class="hex-overlay"></div>
              <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-image" />
              <div class="status-indicator"></div>
            </div>
            <div class="profile-info">
              <h1 class="profile-name">GAËL RÖTHLIN</h1>
              <div class="profile-title">{{ $t("HomeTitle") }}</div>
              <div class="profile-status">
                <span class="status-dot"></span>
                {{ $t("BodyPart1") }}
              </div>
            </div>
          </div>
          
          <div class="profile-description">
            <div class="section-label">MISSION_BRIEF:</div>
            <p class="description-text">
              {{ $t("BodyPart2") }}
              <span class="warning-indicator">*</span>
            </p>
            <p class="precision-note">
              <span class="warning-indicator">*</span>({{ $t("Precision") }})
            </p>
            <p class="main-description">
              {{ $t("Description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section">
        <div class="section-header">
          <h2 class="section-title">{{ $t("Skills") }}</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="skills-grid">
          <div 
            class="skill-category" 
            v-for="(skillType, index) in Object.keys(skills)" 
            :key="index"
          >
            <div class="category-header">
              <div class="category-icon">
                <img :src="getSkillIcon(skillType)" alt="Skill Icon" />
              </div>
              <h3 class="category-title">{{ $t(skillType) }}</h3>
              <div class="category-line"></div>
            </div>
            
            <div class="skills-list">
              <div 
                class="skill-item" 
                v-for="(language, langIndex) in skills[skillType].language" 
                :key="langIndex"
                @click="redirectToUrl(language.url)"
              >
                <div class="skill-hex">
                  <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" />
                </div>
                <span class="skill-name">{{ language.name }}</span>
                <div class="skill-status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="projects-section">
        <div class="section-header">
          <h2 class="section-title">{{ $t("Projects") }}</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="projects-grid">
          <div class="project-card" v-for="project in projectPlaceholders" :key="project.id">
            <div class="project-header">
              <div class="project-status">
                <span class="status-light" :class="project.status"></span>
                <span class="status-text">{{ project.statusText }}</span>
              </div>
              <div class="project-id">{{ project.id }}</div>
            </div>
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <div class="tech-label">TECH_STACK:</div>
              <div class="tech-list">
                <span v-for="tech in project.technologies" :key="tech" class="tech-item">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="experience-section">
        <div class="section-header">
          <h2 class="section-title">MISSION_LOG</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="experience-timeline">
          <div class="experience-item" v-for="exp in experienceTemplates" :key="exp.id">
            <div class="exp-marker"></div>
            <div class="exp-content">
              <div class="exp-header">
                <h3 class="exp-title">{{ exp.role }}</h3>
                <div class="exp-company">{{ exp.company }}</div>
                <div class="exp-period">{{ exp.period }}</div>
              </div>
              <p class="exp-description">{{ exp.description }}</p>
              <div class="exp-tags">
                <span v-for="tag in exp.tags" :key="tag" class="exp-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="contact-section">
        <div class="section-header">
          <h2 class="section-title">COMMUNICATION_PROTOCOLS</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="contact-grid">
          <a class="contact-link email" href="mailto:gael.rothlin@proton.me">
            <div class="contact-icon">
              <img src="@/assets/email.svg" alt="Email" />
            </div>
            <div class="contact-info">
              <div class="contact-label">SECURE_MAIL</div>
              <div class="contact-value">gael.rothlin@proton.me</div>
            </div>
            <div class="contact-status active"></div>
          </a>
          
          <a class="contact-link github" href="https://github.com/moonlight58" target="_blank">
            <div class="contact-icon">
              <img src="@/assets/github.svg" alt="GitHub" />
            </div>
            <div class="contact-info">
              <div class="contact-label">REPOSITORY</div>
              <div class="contact-value">github.com/moonlight58</div>
            </div>
            <div class="contact-status active"></div>
          </a>
          
          <a class="contact-link instagram" href="https://www.instagram.com/osiris._25" target="_blank">
            <div class="contact-icon">
              <img src="@/assets/instagram.svg" alt="Instagram" />
            </div>
            <div class="contact-info">
              <div class="contact-label">SOCIAL_FEED</div>
              <div class="contact-value">@osiris._25</div>
            </div>
            <div class="contact-status active"></div>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Terminal -->
    <div class="terminal-footer">
      <div class="footer-line">
        <span class="footer-text">SYSTEM_STATUS: OPERATIONAL</span>
        <span class="footer-separator">|</span>
        <span class="footer-text">LAST_UPDATE: {{ getCurrentDate() }}</span>
        <span class="footer-separator">|</span>
        <span class="footer-text">{{ $t("Contact") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

export default {
  name: "GTFOPortfolio",
  data() {
    return {
      skills: skills,
      projectPlaceholders: [
        {
          id: "R7E1_PROJ_001",
          name: "NEURAL_NETWORK_OPTIMIZER",
          description: "Advanced AI optimization algorithms for complex systems with enhanced performance metrics and real-time monitoring capabilities.",
          technologies: ["Python", "TensorFlow", "C++"],
          status: "completed",
          statusText: "OPERATIONAL"
        },
        {
          id: "R7E1_PROJ_002", 
          name: "DISTRIBUTED_DATA_PROCESSOR",
          description: "High-performance distributed computing system designed for large-scale data processing and analysis operations.",
          technologies: ["Java", "Apache Spark", "Kubernetes"],
          status: "active",
          statusText: "IN_PROGRESS"
        },
        {
          id: "R7E1_PROJ_003",
          name: "SECURITY_PROTOCOL_SUITE",
          description: "Comprehensive cybersecurity framework with advanced encryption and threat detection mechanisms.",
          technologies: ["Rust", "Node.js", "PostgreSQL"],
          status: "pending",
          statusText: "STANDBY"
        }
      ],
      experienceTemplates: [
        {
          id: "EXP_001",
          role: "LEAD_SYSTEMS_ARCHITECT",
          company: "ADVANCED_TECH_SOLUTIONS",
          period: "2023 - PRESENT",
          description: "Conception et développement d'architectures système complexes avec focus sur la performance et la scalabilité. Management d'équipe technique et coordination de projets critiques.",
          tags: ["Architecture", "Leadership", "Innovation"]
        },
        {
          id: "EXP_002", 
          role: "SENIOR_DEVELOPER",
          company: "DIGITAL_INNOVATIONS_CORP",
          period: "2021 - 2023",
          description: "Développement d'applications full-stack avec technologies de pointe. Implémentation de solutions cloud et optimisation des performances système.",
          tags: ["Full-Stack", "Cloud", "Performance"]
        },
        {
          id: "EXP_003",
          role: "SOFTWARE_ENGINEER",
          company: "TECH_STARTUP_ALPHA",
          period: "2020 - 2021", 
          description: "Développement de prototypes innovants et participation à la recherche et développement de nouvelles technologies émergentes.",
          tags: ["R&D", "Prototyping", "Innovation"]
        }
      ]
    };
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    getSkillIcon(skillType) {
      const icons = {
        "Software Development": require('@/assets/software.svg'),
        "Développement de logiciels": require('@/assets/software.svg'),
        "Back-end Web": require('@/assets/backend.svg'),
        "Front-end Web": require('@/assets/frontend.svg'),
        "Développement de jeux": require('@/assets/game_dev.svg'),
        "Game Development": require('@/assets/game_dev.svg'),
        "Art": require('@/assets/art.svg')
      };
      return icons[skillType] || '';
    },
    getCurrentDate() {
      return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit', 
        day: '2-digit'
      }).replace(/\//g, '.');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

/* Variables GTFO */
:root {
  --gtfo-bg: #0a0a0a;
  --gtfo-bg-secondary: #1a1a1a;
  --gtfo-accent: #ff6b35;
  --gtfo-accent-secondary: #ff8c42;
  --gtfo-text-primary: #e8e8e8;
  --gtfo-text-secondary: #b8b8b8;
  --gtfo-text-muted: #888888;
  --gtfo-border: #333333;
  --gtfo-border-active: #ff6b35;
  --gtfo-success: #4caf50;
  --gtfo-warning: #ffeb3b;
  --gtfo-error: #f44336;
}

.gtfo-container {
  font-family: 'Share Tech Mono', monospace;
  background: var(--gtfo-bg);
  color: var(--gtfo-text-primary);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.gtfo-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 107, 53, 0.01) 2px,
      rgba(255, 107, 53, 0.01) 4px
    );
  pointer-events: none;
  z-index: 1;
}

/* Terminal Header */
.terminal-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--gtfo-accent);
  padding: 0.75rem 2rem;
  z-index: 100;
}

.terminal-line {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.terminal-label {
  color: var(--gtfo-text-muted);
  font-weight: 600;
}

.terminal-value {
  color: var(--gtfo-text-primary);
  font-weight: 700;
}

.terminal-value.active {
  color: var(--gtfo-success);
  text-shadow: 0 0 8px var(--gtfo-success);
}

.terminal-separator {
  color: var(--gtfo-accent);
  font-weight: bold;
}

/* Main Content */
.main-content {
  padding: 6rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Profile Section */
.profile-section {
  margin-bottom: 4rem;
}

.profile-card {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%);
  border: 1px solid var(--gtfo-border);
  border-left: 4px solid var(--gtfo-accent);
  padding: 2.5rem;
  position: relative;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: 
    linear-gradient(45deg, transparent 40%, var(--gtfo-accent) 41%, var(--gtfo-accent) 42%, transparent 43%),
    linear-gradient(-45deg, transparent 40%, var(--gtfo-accent) 41%, var(--gtfo-accent) 42%, transparent 43%);
  opacity: 0.1;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.profile-image-container {
  position: relative;
  width: 120px;
  height: 120px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 0;
  object-fit: cover;
  border: 2px solid var(--gtfo-accent);
  position: relative;
  z-index: 2;
}

.hex-overlay {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: 
    linear-gradient(30deg, var(--gtfo-accent) 0%, transparent 30%),
    linear-gradient(150deg, var(--gtfo-accent) 0%, transparent 30%),
    linear-gradient(270deg, var(--gtfo-accent) 0%, transparent 30%);
  opacity: 0.3;
  z-index: 1;
}

.status-indicator {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: var(--gtfo-success);
  border: 2px solid var(--gtfo-bg);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--gtfo-success);
  z-index: 3;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--gtfo-text-primary);
  margin: 0 0 0.5rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
}

.profile-title {
  font-size: 1.2rem;
  color: var(--gtfo-accent);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.profile-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gtfo-text-secondary);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--gtfo-success);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--gtfo-success);
}

.profile-description {
  border-top: 1px solid var(--gtfo-border);
  padding-top: 2rem;
}

.section-label {
  color: var(--gtfo-accent);
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.description-text,
.main-description {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--gtfo-text-secondary);
}

.precision-note {
  font-size: 0.9rem;
  color: var(--gtfo-text-muted);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.warning-indicator {
  color: var(--gtfo-accent);
  font-weight: bold;
  text-shadow: 0 0 4px var(--gtfo-accent);
}

/* Sections */
.section-header {
  margin-bottom: 3rem;
  position: relative;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--gtfo-text-primary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-line {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, var(--gtfo-accent) 0%, transparent 100%);
  margin-top: 1rem;
}

/* Skills Section */
.skills-section {
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid var(--gtfo-border);
  border-top: 3px solid var(--gtfo-accent);
  padding: 2rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--gtfo-accent);
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.1);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.category-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid var(--gtfo-accent);
}

.category-icon img {
  width: 24px;
  height: 24px;
  filter: brightness(0) saturate(100%) invert(47%) sepia(99%) saturate(3000%) hue-rotate(345deg) brightness(105%) contrast(101%);
}

.category-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gtfo-text-primary);
  margin: 0;
  flex: 1;
}

.category-line {
  width: 50px;
  height: 2px;
  background: var(--gtfo-accent);
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid var(--gtfo-border);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.skill-item:hover {
  border-color: var(--gtfo-accent);
  background: rgba(255, 107, 53, 0.05);
  transform: translateY(-2px);
}

.skill-hex {
  width: 50px;
  height: 50px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid var(--gtfo-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  position: relative;
}

.skill-hex img {
  width: 28px;
  height: 28px;
}

.skill-name {
  font-size: 0.9rem;
  color: var(--gtfo-text-primary);
  text-align: center;
  margin-bottom: 0.5rem;
}

.skill-status {
  width: 20px;
  height: 2px;
  background: var(--gtfo-success);
  box-shadow: 0 0 4px var(--gtfo-success);
}

/* Projects Section */
.projects-section {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid var(--gtfo-border);
  border-left: 4px solid var(--gtfo-accent);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  border-color: var(--gtfo-accent);
  box-shadow: 0 0 25px rgba(255, 107, 53, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-light {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.status-light.completed {
  background: var(--gtfo-success);
  box-shadow: 0 0 8px var(--gtfo-success);
}

.status-light.active {
  background: var(--gtfo-accent);
  box-shadow: 0 0 8px var(--gtfo-accent);
  animation: pulse 1.5s infinite;
}

.status-light.pending {
  background: var(--gtfo-warning);
  box-shadow: 0 0 8px var(--gtfo-warning);
}

.status-text {
  font-size: 0.8rem;
  color: var(--gtfo-text-muted);
  font-weight: 600;
}

.project-id {
  font-size: 0.8rem;
  color: var(--gtfo-accent);
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
}

.project-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--gtfo-text-primary);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
}

.project-description {
  color: var(--gtfo-text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.project-tech {
  border-top: 1px solid var(--gtfo-border);
  padding-top: 1rem;
}

.tech-label {
  color: var(--gtfo-accent);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid var(--gtfo-accent);
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  color: var(--gtfo-accent);
  font-weight: 600;
}

/* Experience Section */
.experience-section {
  margin-bottom: 4rem;
}

.experience-timeline {
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--gtfo-accent), transparent);
}

.experience-item {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.exp-marker {
  width: 16px;
  height: 16px;
  background: var(--gtfo-accent);
  border: 3px solid var(--gtfo-bg);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--gtfo-accent);
  flex-shrink: 0;
  margin-top: 0.5rem;
  z-index: 2;
}

.exp-content {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid var(--gtfo-border);
  border-top: 3px solid var(--gtfo-accent);
  padding: 2rem;
  flex: 1;
}

.exp-header {
  margin-bottom: 1.5rem;
}

.exp-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--gtfo-text-primary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
}

.exp-company {
  color: var(--gtfo-accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.exp-period {
  color: var(--gtfo-text-muted);
  font-size: 0.9rem;
}

.exp-description {
  color: var(--gtfo-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exp-tag {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid var(--gtfo-accent);
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  color: var(--gtfo-accent);
  font-weight: 600;
}

/* Contact Section */
.contact-section {
  margin-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid var(--gtfo-border);
  border-left: 4px solid var(--gtfo-accent);
  text-decoration: none;
  color: var(--gtfo-text-primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.05), transparent);
  transition: left 0.5s ease;
}

.contact-link:hover::before {
  left: 100%;
}

.contact-link:hover {
  border-color: var(--gtfo-accent);
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.1);
  transform: translateX(5px);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid var(--gtfo-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon img {
  width: 24px;
  height: 24px;
  filter: brightness(0) saturate(100%) invert(47%) sepia(99%) saturate(3000%) hue-rotate(345deg) brightness(105%) contrast(101%);
}

.contact-info {
  flex: 1;
}

.contact-label {
  color: var(--gtfo-text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  letter-spacing: 1px;
}

.contact-value {
  color: var(--gtfo-text-primary);
  font-size: 1rem;
  font-weight: 600;
}

.contact-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.contact-status.active {
  background: var(--gtfo-success);
  box-shadow: 0 0 8px var(--gtfo-success);
  animation: pulse 2s infinite;
}

/* Terminal Footer */
.terminal-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--gtfo-accent);
  padding: 0.75rem 2rem;
  z-index: 100;
}

.footer-line {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.footer-text {
  color: var(--gtfo-text-muted);
}

.footer-separator {
  color: var(--gtfo-accent);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding: 6rem 1rem 4rem;
  }
  
  .terminal-header,
  .terminal-footer {
    padding: 0.75rem 1rem;
  }
  
  .terminal-line,
  .footer-line {
    font-size: 0.8rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .profile-name {
    font-size: 2.2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .skills-grid,
  .projects-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .experience-timeline::before {
    left: 15px;
  }
  
  .experience-item {
    gap: 1rem;
  }
  
  .exp-marker {
    width: 12px;
    height: 12px;
  }
}

/* Glitch Effect pour les titres */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.profile-name:hover,
.section-title:hover {
  animation: glitch 0.3s ease-in-out;
}

/* Scan Lines Effect */
.gtfo-container::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 100px,
    rgba(255, 107, 53, 0.02) 100px,
    rgba(255, 107, 53, 0.02) 101px
  );
  pointer-events: none;
  z-index: 3;
}

/* Loading Animation */
@keyframes loading {
  0% { width: 0%; }
  100% { width: 100%; }
}

.section-line {
  animation: loading 1.5s ease-out;
}

/* Hover Effects for Cards */
.profile-card:hover,
.skill-category:hover,
.project-card:hover,
.exp-content:hover {
  background: rgba(26, 26, 26, 0.95);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--gtfo-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--gtfo-accent);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gtfo-accent-secondary);
}

/* Selection */
::selection {
  background: rgba(255, 107, 53, 0.3);
  color: var(--gtfo-text-primary);
}

/* Focus States */
.skill-item:focus,
.contact-link:focus {
  outline: 2px solid var(--gtfo-accent);
  outline-offset: 2px;
}

/* Enhanced Visual Effects */
.skill-hex::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, var(--gtfo-accent), transparent, var(--gtfo-accent));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.skill-item:hover .skill-hex::before {
  opacity: 0.3;
}

/* Dynamic Grid Pattern */
.skills-grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 107, 53, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 53, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
  pointer-events: none;
}

/* Text Glow Effects */
.terminal-value.active,
.status-dot,
.status-light,
.contact-status.active {
  animation: textGlow 2s ease-in-out infinite alternate;
}

@keyframes textGlow {
  from { 
    text-shadow: 0 0 5px currentColor;
    box-shadow: 0 0 5px currentColor;
  }
  to { 
    text-shadow: 0 0 15px currentColor;
    box-shadow: 0 0 15px currentColor;
  }
}
</style>