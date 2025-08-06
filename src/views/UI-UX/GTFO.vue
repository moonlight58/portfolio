<template>
  <div class="gtfo-container">
    <!-- HUD Header -->
    <div class="hud-header">
      <div class="hud-line"></div>
      <div class="system-status">
        <span class="status-indicator active"></span>
        <span class="status-text">SYSTEM ONLINE</span>
      </div>
      <div class="hud-line"></div>
    </div>

    <!-- Main Terminal -->
    <div class="terminal-section" :class="{ visible: isVisible }">
      <div class="terminal-frame">
        <div class="terminal-header">
          <div class="terminal-controls">
            <span class="control-dot red"></span>
            <span class="control-dot orange"></span>
            <span class="control-dot green"></span>
          </div>
          <div class="terminal-title">PORTFOLIO.EXE</div>
          <div class="terminal-info">
            <span class="timestamp">{{ currentTime }}</span>
          </div>
        </div>
        
        <div class="terminal-content">
          <div class="console-line">
            <span class="prompt">root@portfolio:~$</span>
            <span class="command">./initialize_profile.sh</span>
          </div>
          <div class="console-line">
            <span class="output">Loading profile data...</span>
          </div>
          <div class="console-line">
            <span class="output success">[OK] Profile loaded successfully</span>
          </div>
          
          <div class="profile-section">
            <div class="profile-header">
              <div class="avatar-container">
                <div class="avatar-scanner"></div>
                <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="avatar-image" />
                <div class="avatar-grid"></div>
              </div>
              <div class="profile-data">
                <h1 class="profile-name">
                  <span class="typing-text">GAËL RÖTHLIN</span>
                  <span class="cursor">_</span>
                </h1>
                <div class="profile-subtitle">{{ $t("HomeTitle") }}</div>
                <div class="status-row">
                  <div class="status-item">
                    <span class="status-label">STATUS:</span>
                    <span class="status-value active">{{ $t("BodyPart1") }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="description-panel">
              <div class="panel-header">
                <span class="panel-icon">▶</span>
                <span class="panel-title">PROFILE_DATA.TXT</span>
              </div>
              <div class="panel-content">
                <p class="desc-line">{{ $t("BodyPart2") }} <span class="warning-indicator">*</span></p>
                <p class="desc-line secondary">{{ $t("Precision") }}</p>
                <p class="desc-line">{{ $t("Description") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects HUD Section -->
    <div class="hud-section projects-hud">
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title">{{ $t("Projects") }}</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="projects-grid">
        <div class="project-card" v-for="project in projectPlaceholders" :key="project.id">
          <div class="card-header">
            <div class="card-indicator"></div>
            <span class="card-title">{{ project.name }}</span>
            <div class="card-status">{{ project.status }}</div>
          </div>
          <div class="card-content">
            <div class="project-preview">
              <div class="preview-lines">
                <div class="code-line" v-for="n in 4" :key="n"></div>
              </div>
            </div>
            <div class="project-info">
              <p class="project-desc">{{ project.description }}</p>
              <div class="tech-stack">
                <span class="tech-tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="hud-section experience-hud">
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title">{{ $t('Internship') }}</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="experience-timeline">
        <div class="timeline-item" v-for="exp in experienceTemplates" :key="exp.id">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="exp-header">
              <h3 class="exp-title">{{ exp.title }}</h3>
              <span class="exp-date">{{ exp.date }}</span>
            </div>
            <div class="exp-company">{{ exp.company }}</div>
            <div class="exp-description">{{ exp.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Matrix -->
    <div class="hud-section skills-hud">
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title">{{ $t("Skills") }}</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="skills-matrix">
        <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <div class="category-header">
            <div class="category-icon">
              <img :src="getSkillIcon(skillType)" alt="Skill Icon" />
            </div>
            <h3 class="category-title">{{ $t(skillType) }}</h3>
            <div class="category-progress">
              <div class="progress-bar"></div>
            </div>
          </div>
          
          <div class="skill-grid">
            <div class="skill-node" 
                 v-for="(language, langIndex) in skills[skillType].language" 
                 :key="langIndex"
                 @click="redirectToUrl(language.url)">
              <div class="node-core">
                <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" />
              </div>
              <div class="node-label">{{ language.name }}</div>
              <div class="node-connection"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Terminal -->
    <div class="hud-section contact-hud">
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title">CONTACT_PROTOCOLS</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="contact-terminal">
        <div class="terminal-frame">
          <div class="contact-grid">
            <a class="contact-protocol" 
               href="mailto:gael.rothlin@proton.me" 
               target="_blank" 
               rel="noopener noreferrer">
              <div class="protocol-header">
                <div class="protocol-indicator"></div>
                <span class="protocol-name">EMAIL_LINK</span>
              </div>
              <div class="protocol-content">
                <img src="@/assets/email.svg" alt="Email" class="protocol-icon" />
                <span class="protocol-address">gael.rothlin@proton.me</span>
              </div>
            </a>
            
            <a class="contact-protocol" 
               href="https://www.instagram.com/osiris._25" 
               target="_blank" 
               rel="noopener noreferrer">
              <div class="protocol-header">
                <div class="protocol-indicator"></div>
                <span class="protocol-name">SOCIAL_LINK</span>
              </div>
              <div class="protocol-content">
                <img src="@/assets/instagram.svg" alt="Instagram" class="protocol-icon" />
                <span class="protocol-address">@osiris._25</span>
              </div>
            </a>
            
            <a class="contact-protocol" 
               href="https://github.com/moonlight58" 
               target="_blank" 
               rel="noopener noreferrer">
              <div class="protocol-header">
                <div class="protocol-indicator"></div>
                <span class="protocol-name">CODE_REPO</span>
              </div>
              <div class="protocol-content">
                <img src="@/assets/github.svg" alt="GitHub" class="protocol-icon" />
                <span class="protocol-address">moonlight58</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- HUD Footer -->
    <div class="hud-footer">
      <div class="footer-line"></div>
      <div class="footer-info">
        <span class="build-info">BUILD: 2024.08.05</span>
        <span class="version-info">VERSION: 1.0.0</span>
      </div>
      <div class="footer-line"></div>
    </div>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  data() {
    return {
      skills: skills,
      isVisible: false,
      currentTime: '',
      projectPlaceholders: [
        {
          id: 1,
          name: "PROJECT_ALPHA",
          status: "ACTIVE",
          description: "Application de gestion avancée avec interface utilisateur moderne",
          tech: ["Vue.js", "Node.js", "MongoDB"]
        },
        {
          id: 2,
          name: "PROJECT_BETA",
          status: "TESTING",
          description: "Système de monitoring en temps réel avec dashboard analytique",
          tech: ["React", "Python", "PostgreSQL"]
        },
        {
          id: 3,
          name: "PROJECT_GAMMA",
          status: "DEPLOYED",
          description: "API REST haute performance pour applications mobiles",
          tech: ["Express", "Docker", "Redis"]
        }
      ],
      experienceTemplates: [
        {
          id: 1,
          title: "Développeur Full-Stack",
          company: "TECH_CORP_01",
          date: "2024",
          description: "Développement d'applications web modernes et maintenance de systèmes existants"
        },
        {
          id: 2,
          title: "Stagiaire Développement",
          company: "INNOVATION_LAB",
          date: "2023",
          description: "Participation à des projets de recherche et développement en technologies émergentes"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
    
    this.updateTime();
    setInterval(this.updateTime, 1000);
    
    this.setupScrollAnimations();
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('fr-FR', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.warn("No URL provided");
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
      const icon = icons[skillType];
      if (!icon) {
        console.warn(`No icon found for skill type: ${skillType}`);
        return '';
      }
      return icon;
    },
    setupScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      const sections = document.querySelectorAll('.hud-section');
      sections.forEach(section => observer.observe(section));
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;800;900&family=Source+Code+Pro:wght@300;400;500;600;700&display=swap');

.gtfo-container {
  font-family: 'Source Code Pro', monospace;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(230, 57, 70, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, var(--gtfo-darker-bg) 0%, var(--gtfo-dark-bg) 100%);
  min-height: 100vh;
  color: var(--gtfo-text);
  padding: 2rem;
  position: relative;
  overflow-x: hidden;

  /* Variables GTFO */
  --gtfo-orange: #ff6b35;
  --gtfo-red: #e63946;
  --gtfo-dark-red: #a61e1e;
  --gtfo-yellow: #ffd23f;
  --gtfo-green: #06ffa5;
  --gtfo-blue: #118ab2;
  --gtfo-dark-bg: #0d1821;
  --gtfo-darker-bg: #071013;
  --gtfo-panel-bg: rgba(13, 24, 33, 0.9);
  --gtfo-border: rgba(255, 107, 53, 0.3);
  --gtfo-text: #e8f4f8;
  --gtfo-text-dim: rgba(232, 244, 248, 0.7);
  --gtfo-grid-size: 8px;
}

/* HUD Elements */
.hud-header, .hud-footer {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.hud-line, .header-line, .footer-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--gtfo-orange) 50%, transparent 100%);
  position: relative;
}

.hud-line::after, .header-line::after, .footer-line::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 3px;
  background: var(--gtfo-orange);
  box-shadow: 0 0 8px var(--gtfo-orange);
}

.system-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gtfo-green);
  box-shadow: 0 0 10px var(--gtfo-green);
  animation: pulse-status 2s ease-in-out infinite;
}

@keyframes pulse-status {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.status-text {
  color: var(--gtfo-green);
}

/* Terminal Section */
.terminal-section {
  margin: 4rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
}

.terminal-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.terminal-frame {
  background: var(--gtfo-panel-bg);
  border: 1px solid var(--gtfo-border);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 20px rgba(255, 107, 53, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--gtfo-border);
  background: rgba(255, 107, 53, 0.05);
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control-dot.red { background: var(--gtfo-red); }
.control-dot.orange { background: var(--gtfo-orange); }
.control-dot.green { background: var(--gtfo-green); }

.terminal-title {
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  color: var(--gtfo-orange);
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.timestamp {
  font-family: 'Source Code Pro', monospace;
  color: var(--gtfo-text-dim);
  font-size: 0.9rem;
}

.terminal-content {
  padding: 2rem;
}

.console-line {
  margin-bottom: 0.8rem;
  font-family: 'Source Code Pro', monospace;
  line-height: 1.4;
}

.prompt {
  color: var(--gtfo-green);
  margin-right: 0.5rem;
}

.command {
  color: var(--gtfo-yellow);
}

.output {
  color: var(--gtfo-text-dim);
  margin-left: 1rem;
}

.output.success {
  color: var(--gtfo-green);
}

/* Profile Section */
.profile-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
}

.profile-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 3rem;
}

.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid var(--gtfo-orange);
  position: relative;
  z-index: 2;
}

.avatar-scanner {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid var(--gtfo-green);
  border-radius: 8px;
  opacity: 0;
  animation: scanner-sweep 3s linear infinite;
}

@keyframes scanner-sweep {
  0% { opacity: 0; transform: translateY(100%); }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-100%); }
}

.avatar-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px);
  background-size: var(--gtfo-grid-size) var(--gtfo-grid-size);
  border-radius: 8px;
  z-index: 1;
}

.profile-name {
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--gtfo-orange);
  margin: 0 0 1rem 0;
  text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
}

.typing-text {
  display: inline-block;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--gtfo-green);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.profile-subtitle {
  font-size: 1.2rem;
  color: var(--gtfo-text-dim);
  margin-bottom: 1.5rem;
}

.status-row {
  display: flex;
  gap: 2rem;
}

.status-item {
  display: flex;
  gap: 0.5rem;
}

.status-label {
  color: var(--gtfo-text-dim);
  font-weight: 600;
}

.status-value.active {
  color: var(--gtfo-green);
  font-weight: 700;
}

/* Description Panel */
.description-panel {
  background: rgba(13, 24, 33, 0.6);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 107, 53, 0.1);
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
}

.panel-icon {
  color: var(--gtfo-orange);
  font-weight: bold;
}

.panel-title {
  font-family: 'Orbitron', monospace;
  color: var(--gtfo-orange);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.panel-content {
  padding: 1.5rem;
}

.desc-line {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.desc-line.secondary {
  color: var(--gtfo-text-dim);
  font-style: italic;
  font-size: 0.9rem;
}

.warning-indicator {
  color: var(--gtfo-red);
  font-weight: bold;
  animation: pulse-warning 2s ease-in-out infinite;
}

@keyframes pulse-warning {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* HUD Sections */
.hud-section {
  margin: 6rem 0;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.hud-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--gtfo-orange);
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
  white-space: nowrap;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--gtfo-panel-bg);
  border: 1px solid var(--gtfo-border);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gtfo-orange), var(--gtfo-red));
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
  border-color: var(--gtfo-orange);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: rgba(255, 107, 53, 0.05);
  border-bottom: 1px solid var(--gtfo-border);
}

.card-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gtfo-green);
  box-shadow: 0 0 8px var(--gtfo-green);
}

.card-title {
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  color: var(--gtfo-orange);
  font-size: 1rem;
  letter-spacing: 1px;
}

.card-status {
  font-size: 0.8rem;
  color: var(--gtfo-green);
  font-weight: 600;
  padding: 0.2rem 0.8rem;
  border: 1px solid var(--gtfo-green);
  border-radius: 4px;
}

.card-content {
  padding: 1.5rem;
}

.project-preview {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.preview-lines {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.code-line {
  height: 8px;
  background: linear-gradient(90deg, var(--gtfo-orange), transparent);
  border-radius: 2px;
  opacity: 0.6;
}

.code-line:nth-child(2) { width: 80%; }
.code-line:nth-child(3) { width: 65%; }
.code-line:nth-child(4) { width: 90%; }

.project-desc {
  color: var(--gtfo-text-dim);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 4px;
  color: var(--gtfo-orange);
  font-weight: 500;
}

/* Experience Timeline */
.experience-timeline {
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--gtfo-orange), var(--gtfo-red));
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -1.8rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gtfo-orange);
  box-shadow: 0 0 10px var(--gtfo-orange);
  z-index: 2;
}

.timeline-content {
  background: var(--gtfo-panel-bg);
  border: 1px solid var(--gtfo-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-left: 1rem;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.exp-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gtfo-orange);
  margin: 0;
}

.exp-date {
  color: var(--gtfo-green);
  font-weight: 600;
  font-size: 0.9rem;
}

.exp-company {
  color: var(--gtfo-text-dim);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.exp-description {
  color: var(--gtfo-text-dim);
  line-height: 1.6;
}

/* Skills Matrix */
.skills-matrix {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-category {
  background: var(--gtfo-panel-bg);
  border: 1px solid var(--gtfo-border);
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gtfo-orange), var(--gtfo-green));
  opacity: 0.8;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
}

.category-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 107, 53, 0.1);
  border: 2px solid var(--gtfo-orange);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.category-icon img {
  width: 28px;
  height: 28px;
  filter: brightness(0) saturate(100%) invert(57%) sepia(93%) saturate(4468%) hue-rotate(342deg) brightness(101%) contrast(101%);
}

.category-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--gtfo-orange);
  margin: 0;
  letter-spacing: 1px;
}

.category-progress {
  flex: 1;
  height: 4px;
  background: rgba(255, 107, 53, 0.2);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--gtfo-orange), var(--gtfo-green));
  width: 85%;
  border-radius: 2px;
  position: relative;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progress-shine 2s ease-in-out infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-node::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gtfo-orange);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.skill-node:hover::before {
  transform: scaleX(1);
}

.skill-node:hover {
  transform: translateY(-4px);
  border-color: var(--gtfo-orange);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
}

.node-core {
  width: 50px;
  height: 50px;
  background: rgba(255, 107, 53, 0.1);
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
}

.skill-node:hover .node-core {
  border-color: var(--gtfo-orange);
  box-shadow: 0 0 15px rgba(255, 107, 53, 0.5);
  transform: scale(1.1);
}

.node-core img {
  width: 28px;
  height: 28px;
}

.node-label {
  font-size: 0.9rem;
  color: var(--gtfo-text-dim);
  font-weight: 600;
  text-align: center;
  transition: color 0.3s ease;
}

.skill-node:hover .node-label {
  color: var(--gtfo-orange);
}

.node-connection {
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 0;
  background: var(--gtfo-orange);
  transition: height 0.3s ease;
}

.skill-node:hover .node-connection {
  height: 20px;
}

/* Contact Terminal */
.contact-terminal {
  background: var(--gtfo-panel-bg);
  border: 1px solid var(--gtfo-border);
  border-radius: 8px;
  padding: 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.contact-protocol {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-protocol::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
  transition: left 0.5s ease;
}

.contact-protocol:hover::before {
  left: 100%;
}

.contact-protocol:hover {
  transform: translateY(-4px);
  border-color: var(--gtfo-orange);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.protocol-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.protocol-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gtfo-green);
  box-shadow: 0 0 8px var(--gtfo-green);
  animation: pulse-protocol 2s ease-in-out infinite;
}

@keyframes pulse-protocol {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

.protocol-name {
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  color: var(--gtfo-orange);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.protocol-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.protocol-icon {
  width: 40px;
  height: 40px;
  padding: 8px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.contact-protocol:hover .protocol-icon {
  background: rgba(255, 107, 53, 0.2);
  border-color: var(--gtfo-orange);
  transform: scale(1.1);
}

.protocol-address {
  font-family: 'Source Code Pro', monospace;
  color: var(--gtfo-text-dim);
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-protocol:hover .protocol-address {
  color: var(--gtfo-text);
}

/* Footer */
.hud-footer {
  margin-top: 4rem;
}

.footer-info {
  display: flex;
  gap: 2rem;
  font-family: 'Orbitron', monospace;
  font-size: 0.8rem;
  color: var(--gtfo-text-dim);
  letter-spacing: 1px;
}

.build-info, .version-info {
  padding: 0.5rem 1rem;
  background: rgba(255, 107, 53, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 4px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gtfo-container {
    padding: 1rem;
  }
  
  .profile-header {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .section-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .header-line {
    width: 100px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .profile-name {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .footer-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .exp-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .skill-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  .skill-node {
    padding: 1rem 0.5rem;
  }
  
  .node-core {
    width: 40px;
    height: 40px;
  }
  
  .node-core img {
    width: 24px;
    height: 24px;
  }
  
  .terminal-content {
    padding: 1rem;
  }
}

/* Animations supplémentaires */
@keyframes matrix-rain {
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

.gtfo-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 107, 53, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 53, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: -1;
}

/* Effets de survol pour l'ensemble */
.terminal-frame:hover,
.project-card:hover,
.skill-category:hover,
.contact-terminal:hover {
  box-shadow: 
    0 0 30px rgba(255, 107, 53, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Animation d'entrée en cascade */
.hud-section:nth-child(3) { transition-delay: 0.2s; }
.hud-section:nth-child(4) { transition-delay: 0.4s; }
.hud-section:nth-child(5) { transition-delay: 0.6s; }
.hud-section:nth-child(6) { transition-delay: 0.8s; }
.hud-section:nth-child(7) { transition-delay: 1.0s; }
</style>