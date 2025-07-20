<template>
  <div class="synthwave-container">
    <!-- Animated background grid -->
    <div class="grid-background"></div>
    <div class="cyber-mountains"></div>
    
    <!-- Floating particles -->
    <div class="particles">
      <div class="particle" v-for="n in 50" :key="n"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="neon-frame">
        <div class="glitch-container">
          <h1 class="cyber-title glitch" data-text="GAËL RÖTHLIN">GAËL RÖTHLIN</h1>
        </div>
        <div class="subtitle-container">
          <p class="cyber-subtitle">{{ $t ? $t("HomeTitle") : "DÉVELOPPEUR FULL-STACK" }}</p>
          <div class="typing-cursor"></div>
        </div>
      </div>
      
      <div class="profile-hologram">
        <div class="hologram-ring"></div>
        <div class="hologram-ring ring-2"></div>
        <div class="hologram-ring ring-3"></div>
        <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="cyber-avatar" />
        <div class="scan-line"></div>
      </div>

      <div class="intro-panel">
        <div class="panel-header">
          <span class="panel-title">SYSTEM_INFO.EXE</span>
          <div class="panel-controls">
            <span class="control minimize">—</span>
            <span class="control maximize">□</span>
            <span class="control close">×</span>
          </div>
        </div>
        <div class="panel-content">
          <p class="cyber-text">
            {{ $t ? $t("BodyPart1") : "Développeur passionné par les nouvelles technologies" }}, 
            <span class="warning-text">WARNING!</span>
            {{ $t ? $t("BodyPart2") : "Peut causer une dépendance aux projets innovants" }}
          </p>
          <div class="status-bar">
            <div class="status-item">
              <span class="status-dot active"></span>
              <span>ONLINE</span>
            </div>
            <div class="status-item">
              <span class="status-dot"></span>
              <span>CODING: 98%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="social-terminal">
        <div class="terminal-header">
          <span>SOCIAL_LINKS.SH</span>
        </div>
        <div class="terminal-body">
          <div class="terminal-line">
            <span class="prompt">root@portfolio:~$</span>
            <a href="https://www.instagram.com/osiris._25" target="_blank" class="terminal-link">
              ./connect --instagram osiris._25
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          PROJETS
          <span class="title-bracket">]</span>
        </h2>
        <div class="section-underline"></div>
      </div>
      
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <div class="project-screen">
            <div class="screen-scanlines"></div>
            <div class="project-preview">
              <div class="code-lines">
                <div class="code-line" v-for="n in 8" :key="n"></div>
              </div>
            </div>
            <div class="project-overlay">
              <div class="project-title">{{ project.title }}</div>
              <div class="project-tech">{{ project.tech }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          EXPÉRIENCE
          <span class="title-bracket">]</span>
        </h2>
        <div class="section-underline"></div>
      </div>
      
      <div class="timeline">
        <div class="timeline-item" v-for="(exp, index) in experiences" :key="index">
          <div class="timeline-marker">
            <div class="marker-glow"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-card">
              <div class="card-header">
                <h3 class="timeline-title">{{ exp.title }}</h3>
                <span class="timeline-date">{{ exp.date }}</span>
              </div>
              <p class="timeline-description">{{ exp.description }}</p>
              <div class="tech-tags">
                <span class="tech-tag" v-for="tech in exp.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          COMPÉTENCES
          <span class="title-bracket">]</span>
        </h2>
        <div class="section-underline"></div>
      </div>

      <div class="skills-matrix">
        <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <div class="category-header">
            <h3 class="category-title">{{ $t ? $t(skillType) : skillType }}</h3>
            <div class="category-line"></div>
          </div>
          <div class="skills-grid">
            <div class="skill-node" 
                 v-for="(language, langIndex) in skills[skillType].language" 
                 :key="langIndex"
                 @click="redirectToUrl(language.url)">
              <div class="node-core">
                <img :src="require(`@/assets/skills/${language.name}.svg`)" 
                     :alt="language.name" 
                     class="skill-icon" />
                <div class="node-pulse"></div>
              </div>
              <div class="skill-name">{{ language.name }}</div>
              <div class="skill-connections">
                <div class="connection" v-for="n in 3" :key="n"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          À PROPOS
          <span class="title-bracket">]</span>
        </h2>
        <div class="section-underline"></div>
      </div>
      
      <div class="about-terminal">
        <div class="terminal-window">
          <div class="terminal-titlebar">
            <div class="titlebar-buttons">
              <span class="btn red"></span>
              <span class="btn yellow"></span>
              <span class="btn green"></span>
            </div>
            <span class="terminal-title">README.md</span>
          </div>
          <div class="terminal-content">
            <div class="terminal-text">
              <span class="command-line">cat about_me.txt</span>
              <div class="output">
                <p>{{ $t ? $t("WhyPortfolioContent") : "Passionné par le développement web et les nouvelles technologies, je crée des expériences digitales uniques et innovantes." }}</p>
                <div class="ascii-art">
                  <pre>
    ╔═══════════════════════════════╗
    ║  MISSION: CREATE THE FUTURE   ║
    ║  STATUS:  ALWAYS LEARNING     ║
    ║  GOAL:    DIGITAL INNOVATION  ║
    ╚═══════════════════════════════╝
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          CONTACT
          <span class="title-bracket">]</span>
        </h2>
        <div class="section-underline"></div>
      </div>
      
      <div class="contact-grid">
        <a v-for="contact in contacts" 
           :key="contact.name"
           :href="contact.url" 
           target="_blank" 
           class="contact-node">
          <div class="contact-icon">
            <img :src="contact.icon" :alt="contact.name" />
          </div>
          <div class="contact-label">{{ contact.name }}</div>
          <div class="contact-beam"></div>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="cyber-footer">
      <div class="footer-content">
        <div class="footer-text">
          <span class="copyright">© 2025 GAËL RÖTHLIN</span>
          <span class="version">v2.0.85</span>
        </div>
        <div class="footer-signature">
          <span>POWERED BY SYNTHWAVE.EXE</span>
        </div>
      </div>
    </footer>
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
          title: "CYBER_APP",
          tech: "Vue.js | Node.js"
        },
        {
          title: "NEON_DASHBOARD", 
          tech: "React | TypeScript"
        },
        {
          title: "RETRO_API",
          tech: "Express | MongoDB"
        },
        {
          title: "SYNTH_MOBILE",
          tech: "React Native"
        }
      ],
      experiences: [
        {
          title: "Stage Développement",
          date: "2024",
          description: "Développement d'applications web modernes avec des technologies de pointe",
          technologies: ["Vue.js", "Node.js", "MongoDB"]
        },
        {
          title: "Projet Personnel",
          date: "2023-2024", 
          description: "Création de solutions digitales innovantes et expériences utilisateur immersives",
          technologies: ["React", "Python", "PostgreSQL"]
        }
      ],
      contacts: [
        {
          name: "EMAIL",
          url: "mailto:gael.rothlin@proton.me",
          icon: require("@/assets/email.svg")
        },
        {
          name: "INSTAGRAM", 
          url: "https://www.instagram.com/osiris._25",
          icon: require("@/assets/instagram.svg")
        },
        {
          name: "GITHUB",
          url: "https://github.com/moonlight58", 
          icon: require("@/assets/github.svg")
        }
      ]
    };
  },
  mounted() {
    // Initialize particles animation
    this.initParticles();
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    initParticles() {
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle) => {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

.synthwave-container {
  font-family: 'Rajdhani', monospace;
  background: linear-gradient(180deg, 
    #0a0015 0%,
    #1a0033 25%,
    #2d1b47 50%,
    #1a0033 75%,
    #0a0015 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  color: #00ffff;
}

/* Animated Grid Background */
.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  z-index: 1;
}

.cyber-mountains {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, 
    transparent 0%,
    rgba(255, 0, 150, 0.3) 30%,
    rgba(0, 255, 255, 0.2) 60%,
    transparent 100%);
  clip-path: polygon(
    0 100%, 20% 60%, 40% 80%, 60% 40%, 
    80% 70%, 100% 30%, 100% 100%
  );
  z-index: 2;
  animation: mountainGlow 4s ease-in-out infinite alternate;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

@keyframes mountainGlow {
  0% { opacity: 0.3; }
  100% { opacity: 0.7; }
}

/* Particles */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #ff0099;
  border-radius: 50%;
  animation: particleFloat 15s linear infinite;
  box-shadow: 0 0 6px #ff0099;
}

.particle:nth-child(even) {
  background: #00ffff;
  box-shadow: 0 0 6px #00ffff;
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  z-index: 10;
  padding: 120px 20px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.neon-frame {
  position: relative;
  padding: 40px;
  border: 2px solid #00ffff;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 
    0 0 20px #00ffff,
    inset 0 0 20px rgba(0, 255, 255, 0.1);
  animation: neonPulse 2s ease-in-out infinite alternate;
}

@keyframes neonPulse {
  0% { box-shadow: 0 0 20px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1); }
  100% { box-shadow: 0 0 40px #00ffff, inset 0 0 40px rgba(0, 255, 255, 0.2); }
}

.cyber-title {
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: #00ffff;
  text-shadow: 
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 40px #00ffff;
  letter-spacing: 0.1em;
  margin: 0;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% { 
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
    transform: scale(1);
  }
  100% { 
    text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
    transform: scale(1.05);
  }
}

/* Glitch Effect */
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch1 0.5s infinite;
  color: #ff0099;
  z-index: -1;
}

.glitch::after {
  animation: glitch2 0.5s infinite;
  color: #00ff00;
  z-index: -2;
}

@keyframes glitch1 {
  0%, 14%, 15%, 49%, 50%, 99%, 100% {
    transform: translate(0);
  }
  15%, 49% {
    transform: translate(-2px, -2px);
  }
}

@keyframes glitch2 {
  0%, 20%, 21%, 62%, 63%, 99%, 100% {
    transform: translate(0);
  }
  21%, 62% {
    transform: translate(2px, 2px);
  }
}

.subtitle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.cyber-subtitle {
  font-size: 1.5rem;
  color: #ff0099;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0;
  text-shadow: 0 0 10px #ff0099;
}

.typing-cursor {
  width: 2px;
  height: 1.5rem;
  background: #00ffff;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Profile Hologram */
.profile-hologram {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.hologram-ring {
  position: absolute;
  border: 2px solid rgba(0, 255, 255, 0.5);
  border-radius: 50%;
  animation: ringRotate 10s linear infinite;
}

.hologram-ring:nth-child(1) {
  width: 100%;
  height: 100%;
  animation-duration: 8s;
}

.ring-2 {
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  animation-duration: 12s;
  animation-direction: reverse;
  border-color: rgba(255, 0, 153, 0.3);
}

.ring-3 {
  width: 140%;
  height: 140%;
  top: -20%;
  left: -20%;
  animation-duration: 15s;
  border-color: rgba(255, 255, 0, 0.2);
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.cyber-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  border: 3px solid #00ffff;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.7),
    inset 0 0 30px rgba(0, 255, 255, 0.2);
  filter: contrast(1.2) brightness(1.1);
}

.scan-line {
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: scanMove 3s linear infinite;
}

@keyframes scanMove {
  0% { top: 20px; opacity: 1; }
  100% { top: 180px; opacity: 0; }
}

/* Panels */
.intro-panel {
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #ff0099;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 30px rgba(255, 0, 153, 0.5);
  overflow: hidden;
}

.panel-header {
  background: linear-gradient(90deg, #ff0099, #00ffff);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-weight: bold;
}

.panel-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 16px;
  height: 16px;
  background: #000;
  color: #fff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
}

.panel-content {
  padding: 30px;
}

.cyber-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #00ffff;
  margin-bottom: 20px;
}

.warning-text {
  color: #ff0099;
  font-weight: bold;
  text-shadow: 0 0 10px #ff0099;
  animation: warningBlink 1.5s infinite;
}

@keyframes warningBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.5; }
}

.status-bar {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #666;
}

.status-dot.active {
  background: #00ff00;
  box-shadow: 0 0 10px #00ff00;
  animation: statusPulse 2s infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Social Terminal */
.social-terminal {
  background: #000;
  border: 2px solid #00ff00;
  border-radius: 8px;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
  font-family: 'Courier New', monospace;
}

.terminal-header {
  background: #00ff00;
  color: #000;
  padding: 8px 15px;
  font-weight: bold;
  font-size: 0.9rem;
}

.terminal-body {
  padding: 20px;
}

.terminal-line {
  display: flex;
  align-items: center;
  gap: 10px;
}

.prompt {
  color: #00ff00;
  font-weight: bold;
}

.terminal-link {
  color: #00ffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.terminal-link:hover {
  color: #ff0099;
  text-shadow: 0 0 10px #ff0099;
}

/* Sections */
section {
  position: relative;
  z-index: 10;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
  margin: 0;
  display: inline-block;
}

.title-bracket {
  color: #ff0099;
  text-shadow: 0 0 10px #ff0099;
}

.section-underline {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #ff0099, #00ffff, #ff0099);
  margin: 20px auto;
  animation: underlineGlow 2s ease-in-out infinite alternate;
}

@keyframes underlineGlow {
  0% { box-shadow: 0 0 10px #ff0099; }
  100% { box-shadow: 0 0 20px #00ffff; }
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  position: relative;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.project-card:hover {
  transform: rotateY(10deg) rotateX(5deg);
}

.project-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  border: 3px solid #00ffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.5),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
}

.screen-scanlines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 255, 0.1) 2px,
    rgba(0, 255, 255, 0.1) 4px
  );
  animation: scanlines 0.1s linear infinite;
  z-index: 3;
}

@keyframes scanlines {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

.project-preview {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 60px;
}

.code-lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.code-line {
  height: 12px;
  background: linear-gradient(90deg, 
    #00ffff 0%, 
    #ff0099 50%, 
    #00ff00 100%);
  border-radius: 2px;
  opacity: 0.7;
  animation: codeFlicker 2s ease-in-out infinite;
}

.code-line:nth-child(2) { width: 80%; animation-delay: 0.2s; }
.code-line:nth-child(3) { width: 90%; animation-delay: 0.4s; }
.code-line:nth-child(4) { width: 60%; animation-delay: 0.6s; }
.code-line:nth-child(5) { width: 95%; animation-delay: 0.8s; }

@keyframes codeFlicker {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.3; }
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(45deg, rgba(0, 255, 255, 0.9), rgba(255, 0, 153, 0.9));
  padding: 15px;
  color: #000;
  font-weight: bold;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.project-card:hover .project-overlay {
  transform: translateY(0);
}

.project-title {
  font-size: 1.1rem;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-tech {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Timeline Experience */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #ff0099, #00ffff, #ff0099);
  transform: translateX(-50%);
  box-shadow: 0 0 10px #00ffff;
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 40px);
  position: relative;
  margin-bottom: 50px;
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 40px);
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: #ff0099;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  box-shadow: 0 0 20px #ff0099;
}

.marker-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid rgba(255, 0, 153, 0.3);
  border-radius: 50%;
  animation: markerPulse 2s infinite;
}

@keyframes markerPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}

.timeline-content {
  width: 100%;
  max-width: 400px;
}

.timeline-card {
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  transform: translateY(-50%);
}

.timeline-item:nth-child(odd) .timeline-card::before {
  right: -30px;
  border-left-color: #00ffff;
}

.timeline-item:nth-child(even) .timeline-card::before {
  left: -30px;
  border-right-color: #00ffff;
}

.timeline-card:hover {
  border-color: #ff0099;
  box-shadow: 
    0 0 30px rgba(255, 0, 153, 0.5),
    inset 0 0 30px rgba(255, 0, 153, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.timeline-title {
  font-size: 1.3rem;
  color: #00ffff;
  margin: 0;
  font-weight: 600;
  text-shadow: 0 0 10px #00ffff;
}

.timeline-date {
  color: #ff0099;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 5px 10px;
  background: rgba(255, 0, 153, 0.2);
  border-radius: 15px;
  border: 1px solid #ff0099;
}

.timeline-description {
  color: #fff;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: linear-gradient(45deg, #00ffff, #ff0099);
  color: #000;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Skills Matrix */
.skills-matrix {
  display: grid;
  gap: 50px;
  margin-top: 40px;
}

.skill-category {
  text-align: center;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.category-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: #ff0099;
  text-shadow: 0 0 10px #ff0099;
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
}

.category-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff0099, transparent);
  max-width: 150px;
}

.skills-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.skill-node {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px;
}

.skill-node:hover {
  transform: scale(1.1) translateY(-5px);
}

.node-core {
  position: relative;
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.skill-icon {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.skill-node:hover .skill-icon {
  filter: brightness(0) saturate(100%) invert(27%) sepia(51%) 
          saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
}

.node-pulse {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 50%;
  animation: nodePulse 3s infinite;
}

@keyframes nodePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
}

.skill-name {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-connections {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.connection {
  position: absolute;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  opacity: 0.3;
}

.connection:nth-child(1) {
  transform: rotate(0deg);
}

.connection:nth-child(2) {
  transform: rotate(120deg);
}

.connection:nth-child(3) {
  transform: rotate(240deg);
}

/* About Terminal */
.about-terminal {
  max-width: 800px;
  margin: 0 auto;
}

.terminal-window {
  background: #000;
  border: 2px solid #00ffff;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  overflow: hidden;
}

.terminal-titlebar {
  background: linear-gradient(90deg, #00ffff, #ff0099);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.titlebar-buttons {
  display: flex;
  gap: 8px;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.btn.red { background: #ff5f56; }
.btn.yellow { background: #ffbd2e; }
.btn.green { background: #27ca3f; }

.terminal-title {
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
}

.terminal-content {
  padding: 30px;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
}

.command-line {
  color: #00ff00;
  display: block;
  margin-bottom: 15px;
}

.command-line::before {
  content: '$ ';
  color: #ff0099;
}

.output p {
  color: #fff;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.ascii-art {
  color: #00ffff;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 20px;
}

.ascii-art pre {
  margin: 0;
  text-shadow: 0 0 10px #00ffff;
  animation: asciiGlow 3s ease-in-out infinite alternate;
}

@keyframes asciiGlow {
  0% { text-shadow: 0 0 10px #00ffff; }
  100% { text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff; }
}

/* Contact Grid */
.contact-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
}

.contact-node {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ffff;
  border-radius: 15px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  min-width: 150px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.contact-node:hover {
  transform: translateY(-10px) scale(1.05);
  border-color: #ff0099;
  box-shadow: 0 0 40px rgba(255, 0, 153, 0.6);
}

.contact-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #00ffff, #ff0099);
  border-radius: 50%;
  padding: 12px;
}

.contact-icon img {
  width: 100%;
  height: 100%;
  filter: brightness(0) invert(1);
}

.contact-label {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
}

.contact-beam {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 2px;
  height: 50px;
  background: linear-gradient(180deg, #00ffff, transparent);
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-node:hover .contact-beam {
  opacity: 1;
  animation: beamPulse 1s infinite;
}

@keyframes beamPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Footer */
.cyber-footer {
  background: rgba(0, 0, 0, 0.9);
  border-top: 2px solid #00ffff;
  padding: 40px 20px;
  margin-top: 100px;
  position: relative;
}

.cyber-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ff0099, #00ffff, #ff0099, transparent);
  animation: footerGlow 3s ease-in-out infinite alternate;
}

@keyframes footerGlow {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-text {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.copyright {
  color: #00ffff;
  font-weight: 500;
  font-size: 0.9rem;
}

.version {
  color: #ff0099;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  padding: 5px 10px;
  background: rgba(255, 0, 153, 0.1);
  border: 1px solid #ff0099;
  border-radius: 5px;
}

.footer-signature {
  color: #666;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cyber-title {
    font-size: 2.5rem;
  }
  
  .hero-section {
    padding: 60px 20px;
    gap: 40px;
  }
  
  .profile-hologram {
    width: 150px;
    height: 150px;
  }
  
  .cyber-avatar {
    width: 120px;
    height: 120px;
    top: 15px;
    left: 15px;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .timeline-item,
  .timeline-item:nth-child(even) {
    padding-left: 70px;
    padding-right: 20px;
    justify-content: flex-start;
  }
  
  .timeline-marker {
    left: 30px;
  }
  
  .timeline-item:nth-child(odd) .timeline-card::before,
  .timeline-item:nth-child(even) .timeline-card::before {
    left: -30px;
    border-right-color: #00ffff;
    border-left-color: transparent;
  }
  
  .skills-grid {
    gap: 20px;
  }
  
  .node-core {
    width: 60px;
    height: 60px;
  }
  
  .skill-icon {
    width: 30px;
    height: 30px;
  }
  
  .contact-grid {
    gap: 20px;
  }
  
  .contact-node {
    min-width: 120px;
    padding: 20px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .cyber-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .neon-frame {
    padding: 20px;
  }
  
  .intro-panel,
  .social-terminal {
    margin: 0 10px;
  }
}

/* Performance optimizations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.synthwave-container * {
  will-change: transform;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #0a0015;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ff0099, #00ffff);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #00ffff, #ff0099);
}
</style>