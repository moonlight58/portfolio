<template>
  <div class="y2k-container">
    <!-- Chrome Header with floating orbs -->
    <div class="floating-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="orb orb-4"></div>
      <div class="orb orb-5"></div>
    </div>

    <!-- Hero Section with Chrome Profile -->
    <div class="hero-chrome">
      <div class="chrome-frame">
        <div class="profile-bubble">
          <div class="holographic-ring">
            <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-avatar" />
          </div>
          <div class="chrome-text-container">
            <h1 class="chrome-name">
              <span class="chrome-letter">G</span>
              <span class="chrome-letter">a</span>
              <span class="chrome-letter">ë</span>
              <span class="chrome-letter">l</span>
              <span class="chrome-space"></span>
              <span class="chrome-letter">R</span>
              <span class="chrome-letter">ö</span>
              <span class="chrome-letter">t</span>
              <span class="chrome-letter">h</span>
              <span class="chrome-letter">l</span>
              <span class="chrome-letter">i</span>
              <span class="chrome-letter">n</span>
            </h1>
            <div class="hologram-subtitle">
              {{ $t("HomeTitle") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bio Capsule -->
    <div class="bio-capsule">
      <div class="capsule-interior">
        <div class="neon-accent"></div>
        <p class="cyber-text">
          {{ $t("BodyPart1") }}<span class="glitch-warning">*</span>{{ $t("BodyPart2") }}
        </p>
        <p class="micro-text">
          <span class="glitch-warning">*</span>({{ $t("Precision") }})
        </p>
        <p class="description-chrome">
          {{ $t("Description") }}
        </p>
        
        <!-- Social Bubble -->
        <div class="social-bubble">
          <a href="https://www.instagram.com/osiris._25" target="_blank" class="instagram-chrome">
            <div class="chrome-button-inner">
              <img src="@/assets/instagram.svg" class="social-icon-chrome" alt="Instagram" />
              <span class="button-text">osiris._25</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Projects Matrix -->
    <div class="projects-matrix">
      <h2 class="section-chrome-title">{{ $t("Projects") }}</h2>
      <div class="matrix-grid">
        <div class="project-pod" v-for="(project, index) in projectTemplates" :key="index">
          <div class="pod-surface">
            <div class="project-hologram">
              <div class="project-icon">{{ project.icon }}</div>
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-type">{{ project.type }}</p>
            </div>
            <div class="chrome-border"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Internship Capsule -->
    <div class="internship-capsule">
      <h2 class="section-chrome-title">{{ $t('Internship') }}</h2>
      <div class="stage-pods-container">
        <div class="stage-pod" v-for="(stage, index) in stageTemplates" :key="index">
          <div class="stage-surface">
            <div class="company-logo">{{ stage.icon }}</div>
            <h3 class="stage-title">{{ stage.title }}</h3>
            <p class="stage-company">{{ stage.company }}</p>
            <p class="stage-period">{{ stage.period }}</p>
            <div class="stage-chrome-line"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Sphere Matrix -->
    <div class="skills-sphere-section">
      <h2 class="section-chrome-title">{{ $t("Skills") }}</h2>
      <div class="skills-matrix">
        <div class="skill-constellation" v-for="(skillType, index) in Object.keys(skills)" :key="index">
          <div class="constellation-header">
            <h3 class="constellation-name">{{ $t(skillType) }}</h3>
          </div>
          <div class="skills-orbit">
            <div class="skill-sphere" 
                 v-for="(language, langIndex) in skills[skillType].language" 
                 :key="langIndex"
                 @click="redirectToUrl(language.url)"
                 :style="{ '--orbit-delay': langIndex * 0.2 + 's' }">
              <div class="sphere-core">
                <img :src="require(`@/assets/skills/${language.name}.svg`)" 
                     :alt="language.name" 
                     class="skill-logo" />
              </div>
              <div class="skill-label">{{ language.name }}</div>
              <div class="holographic-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Hologram -->
    <div class="about-hologram">
      <h2 class="section-chrome-title">{{ $t("WhyPortfolio") }}</h2>
      <div class="hologram-panel">
        <div class="scan-lines"></div>
        <p class="hologram-text">
          {{ $t("WhyPortfolioContent") }}
        </p>
      </div>
    </div>

    <!-- Contact Terminal -->
    <div class="contact-terminal">
      <div class="terminal-frame">
        <div class="terminal-header">
          <div class="terminal-controls">
            <div class="control-dot red"></div>
            <div class="control-dot yellow"></div>
            <div class="control-dot green"></div>
          </div>
          <div class="terminal-title">CONTACT.EXE</div>
        </div>
        <div class="terminal-content">
          <h2 class="terminal-text">Contact</h2>
          <p class="terminal-subtitle">{{ $t("Contact") }}</p>
          <div class="contact-matrix">
            <a href="mailto:gael.rothlin@proton.me" class="contact-chrome-btn" target="_blank">
              <div class="btn-hologram">
                <img src="@/assets/email.svg" alt="Email" class="contact-chrome-icon" />
                <span class="btn-label">Email</span>
              </div>
            </a>
            <a href="https://www.instagram.com/osiris._25" class="contact-chrome-btn" target="_blank">
              <div class="btn-hologram">
                <img src="@/assets/instagram.svg" alt="Instagram" class="contact-chrome-icon" />
                <span class="btn-label">Instagram</span>
              </div>
            </a>
            <a href="https://github.com/moonlight58" class="contact-chrome-btn" target="_blank">
              <div class="btn-hologram">
                <img src="@/assets/github.svg" alt="GitHub" class="contact-chrome-icon" />
                <span class="btn-label">GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";

export default {
  name: "Y2KHomeView",
  data() {
    return {
      skills: skills,
      projectTemplates: [
        { name: "WebApp Project", type: "Full Stack", icon: "🌐" },
        { name: "Mobile App", type: "React Native", icon: "📱" },
        { name: "Data Viz", type: "D3.js", icon: "📊" },
        { name: "API Service", type: "Node.js", icon: "⚡" }
      ],
      stageTemplates: [
        { title: "Développeur Frontend", company: "TechCorp", period: "2024", icon: "💼" },
        { title: "Stage Web", company: "StartupXYZ", period: "2023", icon: "🚀" }
      ]
    };
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');

.y2k-container {
  font-family: "Orbitron", monospace;
  min-height: 100vh;
  min-width: 99vw;
  background: 
    radial-gradient(circle at 20% 20%, #001a2e 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, #2d1b69 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, #ff00ff 0%, transparent 50%),
    linear-gradient(135deg, #000428 0%, #004e92 100%);
  color: #ffffff;
  position: relative;
  overflow-x: hidden;
  padding: 2rem;
}

/* Floating Orbs */
.floating-orbs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}

.orb {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00);
  opacity: 0.1;
  animation: float 8s infinite ease-in-out;
  filter: blur(1px);
}

.orb-1 { width: 150px; height: 150px; top: 10%; left: 10%; animation-delay: 0s; }
.orb-2 { width: 100px; height: 100px; top: 60%; right: 15%; animation-delay: 2s; }
.orb-3 { width: 200px; height: 200px; bottom: 20%; left: 5%; animation-delay: 4s; }
.orb-4 { width: 80px; height: 80px; top: 30%; right: 30%; animation-delay: 1s; }
.orb-5 { width: 120px; height: 120px; bottom: 40%; right: 5%; animation-delay: 3s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
  50% { transform: translateY(10px) translateX(-15px) rotate(180deg); }
  75% { transform: translateY(-15px) translateX(5px) rotate(270deg); }
}

/* Hero Chrome Section */
.hero-chrome {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  perspective: 1000px;
}

.chrome-frame {
  background: linear-gradient(145deg, 
    #b8c6db 0%, 
    #f5f7fa 25%, 
    #c3cfe2 50%, 
    #667db6 75%, 
    #0082c8 100%);
  border-radius: 50px;
  padding: 3px;
  animation: chromeShimmer 3s infinite;
  transform: rotateX(5deg);
}

@keyframes chromeShimmer {
  0%, 100% { 
    background: linear-gradient(145deg, #b8c6db 0%, #f5f7fa 25%, #c3cfe2 50%, #667db6 75%, #0082c8 100%);
  }
  50% { 
    background: linear-gradient(145deg, #ff00ff 0%, #00ffff 25%, #ffff00 50%, #ff00ff 75%, #00ffff 100%);
  }
}

.profile-bubble {
  background: linear-gradient(145deg, rgba(0,0,0,0.9), rgba(20,20,60,0.9));
  border-radius: 47px;
  padding: 3rem;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
}

.holographic-ring {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.holographic-ring::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
  border-radius: 50%;
  animation: spin 4s linear infinite;
  z-index: -1;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  position: relative;
  z-index: 1;
}

.chrome-name {
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 5px;
}

.chrome-letter {
  background: linear-gradient(45deg, #c0c0c0, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  animation: letterFloat 2s infinite ease-in-out;
}

.chrome-letter:nth-child(even) {
  animation-delay: 0.2s;
}

.chrome-space {
  width: 20px;
}

@keyframes letterFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.hologram-subtitle {
  font-size: 1.2rem;
  color: #00ffff;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: hologramFlicker 2s infinite;
}

@keyframes hologramFlicker {
  0%, 100% { opacity: 1; text-shadow: 0 0 10px #00ffff; }
  50% { opacity: 0.8; text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff; }
}

/* Bio Capsule */
.bio-capsule {
  max-width: 800px;
  margin: 0 auto 4rem auto;
  perspective: 1000px;
}

.capsule-interior {
  background: linear-gradient(135deg, 
    rgba(255,255,255,0.1) 0%, 
    rgba(255,255,255,0.05) 100%);
  border: 2px solid;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1;
  border-radius: 30px;
  padding: 2.5rem;
  position: relative;
  backdrop-filter: blur(15px);
  transform: rotateY(-2deg);
}

.neon-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: neonFlow 3s infinite;
}

@keyframes neonFlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; box-shadow: 0 0 20px #00ffff; }
}

.cyber-text, .description-chrome {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin-bottom: 1rem;
  text-align: justify;
}

.glitch-warning {
  color: #ff00ff;
  font-weight: bold;
  animation: glitch 1s infinite;
}

@keyframes glitch {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-1px); }
  40% { transform: translateX(1px); }
  50% { transform: translateX(-1px); }
  60% { transform: translateX(1px); }
  70% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
  90% { transform: translateX(-1px); }
}

.micro-text {
  font-size: 0.9rem;
  color: #ff00ff;
  font-style: italic;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.social-bubble {
  text-align: center;
  margin-top: 2rem;
}

.instagram-chrome {
  display: inline-block;
  text-decoration: none;
  perspective: 1000px;
}

.chrome-button-inner {
  background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
  padding: 15px 30px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  transform: rotateX(10deg);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.chrome-button-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.instagram-chrome:hover .chrome-button-inner::before {
  left: 100%;
}

.instagram-chrome:hover .chrome-button-inner {
  transform: rotateX(0deg) scale(1.05);
  box-shadow: 0 10px 30px rgba(131, 58, 180, 0.5);
}

.social-icon-chrome {
  width: 24px;
  height: 24px;
}

/* Projects Matrix */
.projects-matrix {
  margin-bottom: 4rem;
}

.section-chrome-title {
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #c0c0c0, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.project-pod {
  perspective: 1000px;
}

.pod-surface {
  background: linear-gradient(135deg, 
    rgba(255,255,255,0.15) 0%, 
    rgba(255,255,255,0.05) 100%);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  transform: rotateY(5deg) rotateX(5deg);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.pod-surface:hover {
  transform: rotateY(0deg) rotateX(0deg) scale(1.05);
  box-shadow: 0 20px 40px rgba(0,255,255,0.3);
}

.project-hologram {
  position: relative;
  z-index: 1;
}

.project-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: float 3s infinite ease-in-out;
}

.project-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #00ffff;
  margin-bottom: 0.5rem;
}

.project-type {
  color: #ff00ff;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.chrome-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 20px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pod-surface:hover .chrome-border {
  opacity: 1;
}

/* Internship Capsule */
.internship-capsule {
  margin-bottom: 4rem;
}

.stage-pods-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stage-pod {
  perspective: 1000px;
}

.stage-surface {
  background: linear-gradient(135deg, 
    rgba(255,0,255,0.1) 0%, 
    rgba(0,255,255,0.1) 100%);
  border: 2px solid;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
  border-radius: 25px;
  padding: 2rem;
  text-align: center;
  transform: rotateX(10deg);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.stage-surface:hover {
  transform: rotateX(0deg) translateY(-10px);
  box-shadow: 0 15px 35px rgba(255,0,255,0.3);
}

.company-logo {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.stage-title {
  color: #00ffff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stage-company, .stage-period {
  color: #e0e0e0;
  margin-bottom: 0.5rem;
}

.stage-chrome-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, transparent);
  margin-top: 1rem;
}

/* Skills Sphere Section */
.skills-sphere-section {
  margin-bottom: 4rem;
}

.skills-matrix {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-constellation {
  background: linear-gradient(135deg, 
    rgba(255,255,255,0.05) 0%, 
    rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 30px;
  padding: 2.5rem;
  backdrop-filter: blur(15px);
}

.constellation-name {
  text-align: center;
  color: #00ffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.skills-orbit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.skill-sphere {
  position: relative;
  cursor: pointer;
  animation: orbit 15s infinite linear;
  animation-delay: var(--orbit-delay, 0s);
}

@keyframes orbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.sphere-core {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #c0c0c0, #ffffff, #c0c0c0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 
    0 0 20px rgba(255,255,255,0.5),
    inset 0 0 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  transform: rotateY(20deg);
  margin: 0 auto 1rem auto;
}

.skill-sphere:hover .sphere-core {
  transform: rotateY(0deg) scale(1.2);
  box-shadow: 
    0 0 40px rgba(0,255,255,0.8),
    inset 0 0 20px rgba(0,255,255,0.2);
}

.skill-logo {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.skill-label {
  text-align: center;
  color: #e0e0e0;
  font-size: 0.9rem;
  font-weight: 500;
}

.holographic-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  animation: hologramSpin 4s linear infinite;
}

@keyframes hologramSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.skill-sphere:hover .holographic-glow {
  opacity: 0.3;
}

/* About Hologram */
.about-hologram {
  margin-bottom: 4rem;
}

.hologram-panel {
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, 
    rgba(0,255,255,0.1) 0%, 
    rgba(255,0,255,0.1) 100%);
  border: 2px solid #00ffff;
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  backdrop-filter: blur(15px);
}

.scan-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 2px,
    rgba(0,255,255,0.1) 2px,
    rgba(0,255,255,0.1) 4px
  );
  pointer-events: none;
  animation: scanAnimation 2s infinite linear;
}

@keyframes scanAnimation {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.hologram-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Contact Terminal */
.contact-terminal {
  max-width: 600px;
  margin: 0 auto;
}

.terminal-frame {
  background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
  border: 2px solid #333;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.terminal-header {
  background: linear-gradient(90deg, #333, #555);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.terminal-controls {
  display: flex;
  gap: 8px;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control-dot.red { background: #ff5f56; }
.control-dot.yellow { background: #ffbd2e; }
.control-dot.green { background: #27ca3f; }

.terminal-title {
  color: #00ffff;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.terminal-content {
  padding: 2rem;
  background: #000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  position: relative;
}

.terminal-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,255,0,0.03) 2px,
    rgba(0,255,0,0.03) 4px
  );
  pointer-events: none;
  animation: terminalScan 3s infinite linear;
}

@keyframes terminalScan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.terminal-text {
  font-size: 1.5rem;
  color: #00ffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: terminalFlicker 2s infinite;
}

@keyframes terminalFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; text-shadow: 0 0 10px #00ffff; }
}

.terminal-subtitle {
  color: #00ff00;
  margin-bottom: 2rem;
  font-size: 1rem;
  opacity: 0.9;
}

.contact-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact-chrome-btn {
  text-decoration: none;
  display: block;
  perspective: 1000px;
}

.btn-hologram {
  background: linear-gradient(135deg, 
    rgba(0,255,255,0.2) 0%, 
    rgba(255,0,255,0.2) 50%,
    rgba(255,255,0,0.2) 100%);
  border: 2px solid;
  border-image: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff) 1;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  font-weight: 600;
  transform: rotateX(15deg) rotateY(5deg);
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.btn-hologram::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255,255,255,0.3), 
    transparent);
  transition: left 0.5s ease;
}

.contact-chrome-btn:hover .btn-hologram::before {
  left: 100%;
}

.contact-chrome-btn:hover .btn-hologram {
  transform: rotateX(0deg) rotateY(0deg) scale(1.1);
  box-shadow: 
    0 15px 35px rgba(0,255,255,0.4),
    0 0 30px rgba(255,0,255,0.3);
}

.contact-chrome-icon {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 0 10px #00ffff);
  animation: iconFloat 3s infinite ease-in-out;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(5deg); }
}

.btn-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .y2k-container {
    padding: 1rem;
    margin-top: 4rem;
  }
  
  .chrome-name {
    font-size: 2rem;
    flex-wrap: wrap;
  }
  
  .chrome-space {
    width: 100%;
    height: 10px;
  }
  
  .capsule-interior {
    padding: 1.5rem;
  }
  
  .matrix-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skills-orbit {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
  }
  
  .sphere-core {
    width: 60px;
    height: 60px;
  }
  
  .skill-logo {
    width: 30px;
    height: 30px;
  }
  
  .contact-matrix {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .section-chrome-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .chrome-frame {
    margin: 0 1rem;
  }
  
  .profile-bubble {
    padding: 2rem 1.5rem;
  }
  
  .chrome-name {
    font-size: 1.5rem;
  }
  
  .profile-avatar {
    width: 80px;
    height: 80px;
  }
  
  .hologram-subtitle {
    font-size: 1rem;
  }
  
  .pod-surface, .stage-surface {
    transform: none;
  }
  
  .pod-surface:hover, .stage-surface:hover {
    transform: scale(1.02);
  }
  
  .terminal-content {
    padding: 1.5rem;
  }
}

/* Additional Y2K Effects */
.cyber-glitch {
  position: relative;
  display: inline-block;
}

.cyber-glitch::before,
.cyber-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.cyber-glitch::before {
  animation: glitch-1 0.5s infinite;
  color: #ff00ff;
  z-index: -1;
}

.cyber-glitch::after {
  animation: glitch-2 0.5s infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(-2px, -2px); }
}

/* Loading Animation for Skills */
.skill-loading {
  animation: skillLoad 2s ease-out;
}

@keyframes skillLoad {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

/* Matrix Rain Effect (Optional Background) */
.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -2;
  opacity: 0.05;
}

.matrix-column {
  position: absolute;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  animation: matrixRain 10s linear infinite;
}

@keyframes matrixRain {
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

/* Chrome Reflection Effects */
.chrome-reflection {
  position: relative;
  overflow: hidden;
}

.chrome-reflection::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255,255,255,0.4), 
    transparent);
  transform: skewX(-25deg);
  animation: chromeReflection 3s infinite;
}

@keyframes chromeReflection {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: -100%; }
}

/* Energy Pulse Animation */
.energy-pulse {
  position: relative;
}

.energy-pulse::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border: 1px solid #00ffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: energyPulse 2s infinite;
}

@keyframes energyPulse {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

/* Final Touches */
* {
  box-sizing: border-box;
}

::selection {
  background: #ff00ff;
  color: #000;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #000;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,255,255,0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #00ffff, #ff00ff);
}
</style>