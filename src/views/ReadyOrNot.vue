<template>
  <div class="tactical-hud">
    <TacticalNavBar />
    <!-- HUD Overlay Lines -->
    <div class="hud-lines">
      <div class="corner-line top-left"></div>
      <div class="corner-line top-right"></div>
      <div class="corner-line bottom-left"></div>
      <div class="corner-line bottom-right"></div>
    </div>

    <!-- Top Status Bar -->
    <div class="status-bar">
      <div class="status-left">
        <span class="status-text">{{ $t("HomeTitle") || "TACTICAL OPERATOR" }}</span>
        <div class="status-bars">
          <div class="bar" v-for="i in 5" :key="i"></div>
        </div>
      </div>
      <div class="status-center">
        <div class="timestamp">{{ currentTime }}</div>
      </div>
      <div class="status-right">
        <div class="network-status">
          <div class="signal-bars">
            <div class="signal-bar" v-for="i in 4" :key="i"></div>
          </div>
          <span>ONLINE</span>
        </div>
      </div>
    </div>

    <!-- Main HUD Container -->
    <div class="hud-container">
      <!-- Left Panel - Profile -->
      <div class="left-panel">
        <div class="panel-header">
          <div class="header-bar"></div>
          <h2>OPERATOR PROFILE</h2>
        </div>
        
        <div class="profile-section">
          <div class="profile-image-container">
            <img src="../assets/moon-pfp.jpg" alt="Gaël Röthlin" class="tactical-profile-image" />
            <div class="scan-line"></div>
          </div>
          
          <div class="profile-data">
            <div class="data-field">
              <span class="field-label">NAME:</span>
              <span class="field-value">GAËL RÖTHLIN</span>
            </div>
            <div class="data-field">
              <span class="field-label">ROLE:</span>
              <span class="field-value">{{ $t("HomeTitle") || "DEVELOPER" }}</span>
            </div>
            <div class="data-field">
              <span class="field-label">STATUS:</span>
              <span class="field-value active">ACTIVE</span>
            </div>
          </div>
          
          <div class="description-panel">
            <div class="panel-title">MISSION BRIEFING</div>
            <p class="briefing-text">
              {{ $t("Description") || "Specialized in tactical web development operations. Expert in frontend assault and backend reconnaissance." }}
            </p>
          </div>
        </div>
      </div>

      <!-- Center Panel - Main Content -->
      <div class="center-panel">
        <div class="tactical-tabs">
          <div 
            class="tab" 
            :class="{ active: activeTab === 'projects' }"
            @click="switchTab('projects')"
          >
            <span>PROJECTS</span>
          </div>
          <div 
            class="tab" 
            :class="{ active: activeTab === 'skills' }"
            @click="switchTab('skills')"
          >
            <span>EQUIPMENT</span>
          </div>
          <div 
            class="tab" 
            :class="{ active: activeTab === 'internship' }"
            @click="switchTab('internship')"
          >
            <span>MISSIONS</span>
          </div>
        </div>

        <div class="content-area">
          <!-- Projects Tab -->
          <div v-if="activeTab === 'projects'" class="tab-content">
            <div class="content-header">
              <h3>TACTICAL PROJECTS</h3>
              <div class="loading-bar">
                <div class="loading-fill"></div>
              </div>
            </div>
            <div class="projects-grid">
              <div 
                v-for="(project, index) in dummyProjects" 
                :key="index"
                class="project-card"
                @click="playSound('select')"
              >
                <div class="card-header">
                  <div class="status-indicator"></div>
                  <span class="project-id">PROJ-{{ String(index + 1).padStart(3, '0') }}</span>
                </div>
                <div class="project-title">{{ project.name }}</div>
                <div class="project-description">{{ project.description }}</div>
                <div class="project-footer">
                  <span class="project-status">{{ project.status }}</span>
                  <div class="project-bars">
                    <div class="mini-bar" v-for="i in 3" :key="i"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Tab -->
          <div v-if="activeTab === 'skills'" class="tab-content">
            <div class="content-header">
              <h3>EQUIPMENT LOADOUT</h3>
              <div class="loading-bar">
                <div class="loading-fill"></div>
              </div>
            </div>
            <div class="skills-categories">
              <div v-for="(category, catIndex) in Object.keys(skills)" :key="catIndex" class="skill-category">
                <div class="category-header">
                  <div class="category-indicator"></div>
                  <h4>{{ $t(category) || category.toUpperCase() }}</h4>
                </div>
                <div class="skills-grid">
                  <div 
                    v-for="(skill, skillIndex) in skills[category].language" 
                    :key="skillIndex"
                    class="skill-item"
                    @click="playSound('equip')"
                  >
                    <div class="skill-icon-container">
                      <img :src="require(`@/assets/skills/${skill.name}.svg`)" :alt="skill.name" class="skill-icon" />
                    </div>
                    <span class="skill-name">{{ skill.name }}</span>
                    <div class="skill-level">
                      <div class="level-bars">
                        <div class="level-bar" v-for="i in 5" :key="i"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Internship Tab -->
          <div v-if="activeTab === 'internship'" class="tab-content">
            <div class="content-header">
              <h3>MISSION HISTORY</h3>
              <div class="loading-bar">
                <div class="loading-fill"></div>
              </div>
            </div>
            <div class="mission-log">
              <div class="mission-entry">
                <div class="mission-header">
                  <span class="mission-id">MISSION-001</span>
                  <span class="mission-date">2024</span>
                </div>
                <div class="mission-title">INTERNSHIP DEPLOYMENT</div>
                <div class="mission-description">
                  {{ $t("WhyPortfolioContent") || "Successful deployment in corporate environment. Objectives completed with tactical precision." }}
                </div>
                <div class="mission-status">
                  <span class="status-badge completed">COMPLETED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Panel - Contact & Status -->
      <div class="right-panel">
        <div class="panel-header">
          <div class="header-bar"></div>
          <h2>COMMUNICATION</h2>
        </div>
        
        <div class="contact-section">
          <div class="contact-title">SECURE CHANNELS</div>
          <div class="contact-links">
            <a 
              href="mailto:gael.rothlin@proton.me" 
              class="contact-link"
              @click="playSound('transmit')"
            >
              <div class="link-icon">
                <img src="../assets/email.svg" alt="Email" />
              </div>
              <span>SECURE EMAIL</span>
              <div class="link-status"></div>
            </a>
            
            <a 
              href="https://www.instagram.com/osiris._25" 
              class="contact-link"
              @click="playSound('transmit')"
            >
              <div class="link-icon">
                <img src="../assets/instagram.svg" alt="Instagram" />
              </div>
              <span>SOCIAL RECON</span>
              <div class="link-status"></div>
            </a>
            
            <a 
              href="https://github.com/moonlight58" 
              class="contact-link"
              @click="playSound('transmit')"
            >
              <div class="link-icon">
                <img src="../assets/github.svg" alt="GitHub" />
              </div>
              <span>CODE REPOSITORY</span>
              <div class="link-status"></div>
            </a>
          </div>
        </div>

        <div class="system-status">
          <div class="status-title">SYSTEM STATUS</div>
          <div class="status-items">
            <div class="status-item">
              <span>NETWORK</span>
              <div class="status-dots">
                <div class="dot active"></div>
                <div class="dot active"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="status-item">
              <span>SECURITY</span>
              <div class="status-dots">
                <div class="dot active"></div>
                <div class="dot active"></div>
                <div class="dot active"></div>
              </div>
            </div>
            <div class="status-item">
              <span>SYSTEMS</span>
              <div class="status-dots">
                <div class="dot active"></div>
                <div class="dot active"></div>
                <div class="dot active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Console -->
    <div class="console">
      <div class="console-line">
        <span class="console-prompt">></span>
        <span class="console-text">{{ consoleText }}</span>
        <span class="cursor">|</span>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "@/datasource/skills.json";
import TacticalNavBar from "@/components/TacticalNavBar.vue";

export default {
  name: "HomeView",
  components: {
    TacticalNavBar
  },
  data() {
    return {
      skills: skills,
      activeTab: 'projects',
      currentTime: '',
      consoleText: 'TACTICAL PORTFOLIO SYSTEM INITIALIZED...',
      dummyProjects: [
        {
          name: 'PROJECT ALPHA',
          description: 'Web application tactical deployment',
          status: 'OPERATIONAL'
        },
        {
          name: 'PROJECT BRAVO',
          description: 'Mobile interface reconnaissance',
          status: 'IN PROGRESS'
        },
        {
          name: 'PROJECT CHARLIE',
          description: 'Backend fortress construction',
          status: 'COMPLETED'
        }
      ],
      consoleMessages: [
        'TACTICAL PORTFOLIO SYSTEM INITIALIZED...',
        'ESTABLISHING SECURE CONNECTION...',
        'LOADING OPERATOR PROFILE...',
        'SYSTEMS ONLINE - READY FOR OPERATION',
        'AWAITING MISSION PARAMETERS...'
      ],
      consoleIndex: 0
    };
  },
  mounted() {
    this.updateTime();
    this.startConsoleAnimation();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
      this.playSound('click');
    },
    
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    
    startConsoleAnimation() {
      setInterval(() => {
        this.consoleIndex = (this.consoleIndex + 1) % this.consoleMessages.length;
        this.consoleText = this.consoleMessages[this.consoleIndex];
      }, 3000);
    },
    
    playSound(type) {
      // Create audio context for sound effects
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Different sounds for different actions
      switch(type) {
        case 'click':
          oscillator.frequency.value = 800;
          gainNode.gain.value = 0.1;
          break;
        case 'select':
          oscillator.frequency.value = 1000;
          gainNode.gain.value = 0.05;
          break;
        case 'equip':
          oscillator.frequency.value = 1200;
          gainNode.gain.value = 0.08;
          break;
        case 'transmit':
          oscillator.frequency.value = 600;
          gainNode.gain.value = 0.12;
          break;
      }
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    },
    
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tactical-hud {
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #ffffff;
  font-family: 'Orbitron', monospace;
  position: relative;
  overflow-x: hidden;
}

/* HUD Overlay Lines */
.hud-lines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.corner-line {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid #ff0000;
}

.corner-line.top-left {
  top: 20px;
  left: 20px;
  border-right: none;
  border-bottom: none;
}

.corner-line.top-right {
  top: 20px;
  right: 20px;
  border-left: none;
  border-bottom: none;
}

.corner-line.bottom-left {
  bottom: 20px;
  left: 20px;
  border-right: none;
  border-top: none;
}

.corner-line.bottom-right {
  bottom: 20px;
  right: 20px;
  border-left: none;
  border-top: none;
}

/* Status Bar */
.status-bar {
  display: none; /* Hide the original status bar since we're using TacticalNavBar */
}

.status-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.status-text {
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
}

.status-bars {
  display: flex;
  gap: 3px;
}

.bar {
  width: 4px;
  height: 20px;
  background: #ffffff;
  animation: pulse 2s infinite;
}

.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.4s; }
.bar:nth-child(4) { animation-delay: 0.6s; }
.bar:nth-child(5) { animation-delay: 0.8s; }

.timestamp {
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 1px;
}

.network-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.signal-bars {
  display: flex;
  gap: 2px;
}

.signal-bar {
  width: 3px;
  background: #ffffff;
  animation: signal 1.5s infinite;
}

.signal-bar:nth-child(1) { height: 8px; }
.signal-bar:nth-child(2) { height: 12px; animation-delay: 0.3s; }
.signal-bar:nth-child(3) { height: 16px; animation-delay: 0.6s; }
.signal-bar:nth-child(4) { height: 20px; animation-delay: 0.9s; }

/* Main HUD Container */
.hud-container {
  display: grid;
  grid-template-columns: 350px 1fr 300px;
  gap: 20px;
  padding: 80px 20px 20px 20px; /* Ajusté le padding-top pour tenir compte de la navbar */
  margin-top: 60px; /* Ajouté une marge pour compenser la hauteur de la navbar */
  min-height: calc(100vh - 80px);
}

/* Panels */
.left-panel, .right-panel {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ff0000;
  border-radius: 0;
  position: relative;
}

.center-panel {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #333333;
  position: relative;
}

.panel-header {
  background: linear-gradient(90deg, #ff0000 0%, #cc0000 100%);
  padding: 15px;
  position: relative;
}

.header-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ffffff;
}

.panel-header h2 {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
}

/* Profile Section */
.profile-section {
  padding: 20px;
}

.profile-image-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
}

.tactical-profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #ff0000;
  filter: contrast(1.2) brightness(0.9);
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ff0000;
  animation: scan 2s infinite;
}

.profile-data {
  margin-bottom: 20px;
}

.data-field {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #333333;
}

.field-label {
  font-size: 12px;
  color: #cccccc;
  font-weight: 400;
}

.field-value {
  font-size: 12px;
  font-weight: 700;
}

.field-value.active {
  color: #ff0000;
}

.description-panel {
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  padding: 15px;
}

.panel-title {
  font-size: 12px;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.briefing-text {
  font-size: 11px;
  line-height: 1.4;
  color: #cccccc;
}

/* Tactical Tabs */
.tactical-tabs {
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #333333;
}

.tab {
  flex: 1;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid #333333;
  transition: all 0.3s ease;
  position: relative;
}

.tab:last-child {
  border-right: none;
}

.tab:hover {
  background: rgba(255, 0, 0, 0.1);
}

.tab.active {
  background: linear-gradient(90deg, #ff0000 0%, #cc0000 100%);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ffffff;
}

.tab span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Content Area */
.content-area {
  padding: 20px;
  height: calc(100vh - 220px);
  overflow-y: auto;
}

.content-header {
  margin-bottom: 30px;
}

.content-header h3 {
  font-size: 18px;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.loading-bar {
  width: 100%;
  height: 4px;
  background: #333333;
  position: relative;
  overflow: hidden;
}

.loading-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff0000 0%, #ffffff 50%, #ff0000 100%);
  width: 30%;
  animation: loading 2s infinite;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #333333;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  border-color: #ff0000;
  background: rgba(255, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #ff0000;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.project-id {
  font-size: 10px;
  color: #cccccc;
  font-weight: 700;
}

.project-title {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.project-description {
  font-size: 11px;
  color: #cccccc;
  margin-bottom: 15px;
  line-height: 1.4;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-status {
  font-size: 10px;
  color: #ff0000;
  font-weight: 700;
}

.project-bars {
  display: flex;
  gap: 2px;
}

.mini-bar {
  width: 3px;
  height: 12px;
  background: #ff0000;
  animation: pulse 1s infinite;
}

.mini-bar:nth-child(2) { animation-delay: 0.3s; }
.mini-bar:nth-child(3) { animation-delay: 0.6s; }

/* Skills Section */
.skills-categories > * {
  margin-bottom: 30px;
}

.skill-category {
  margin-bottom: 30px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.category-indicator {
  width: 6px;
  height: 6px;
  background: #ff0000;
  border-radius: 50%;
}

.category-header h4 {
  font-size: 14px;
  font-weight: 700;
  color: #ff0000;
  letter-spacing: 1px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.skill-item {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #333333;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.skill-item:hover {
  border-color: #ff0000;
  background: rgba(255, 0, 0, 0.05);
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
  filter: brightness(0.8);
}

.skill-name {
  font-size: 12px;
  font-weight: 700;
  flex: 1;
}

.skill-level {
  display: flex;
  align-items: center;
}

.level-bars {
  display: flex;
  gap: 2px;
}

.level-bar {
  width: 3px;
  height: 15px;
  background: #333333;
}

.level-bar:nth-child(1),
.level-bar:nth-child(2),
.level-bar:nth-child(3) {
  background: #ff0000;
}

/* Mission Log */
.mission-log > * {
  margin-bottom: 20px;
}

.mission-entry {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #333333;
  padding: 20px;
  margin-bottom: 20px;
}

.mission-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.mission-id {
  font-size: 10px;
  color: #ff0000;
  font-weight: 700;
}

.mission-date {
  font-size: 10px;
  color: #cccccc;
}

.mission-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
}

.mission-description {
  font-size: 11px;
  color: #cccccc;
  line-height: 1.4;
  margin-bottom: 15px;
}

.status-badge {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 0;
  font-weight: 700;
}

.status-badge.completed {
  background: #ff0000;
  color: #ffffff;
}

/* Contact Section */
.contact-section {
  padding: 20px;
}

.contact-title {
  font-size: 14px;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #333333;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
}

.contact-link:hover {
  border-color: #ff0000;
  background: rgba(255, 0, 0, 0.05);
}

.link-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.8);
}

.contact-link span {
  font-size: 11px;
  font-weight: 700;
  flex: 1;
}

.link-status {
  width: 6px;
  height: 6px;
  background: #ff0000;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

/* System Status */
.system-status {
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
}

.status-title {
    font-size: 12px;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.status-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #333333;
}

.status-item:last-child {
  border-bottom: none;
}

.status-item span {
  font-size: 10px;
  font-weight: 700;
  color: #cccccc;
}

.status-dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 6px;
  height: 6px;
  background: #333333;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.dot.active {
  background: #ff0000;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  animation: pulse 2s infinite;
}

/* Bottom Console */
.console {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.95);
  border-top: 2px solid #ff0000;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 999;
}

.console-line {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Orbitron', monospace;
}

.console-prompt {
  color: #ff0000;
  font-weight: 700;
  font-size: 16px;
}

.console-text {
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
}

.cursor {
  color: #ff0000;
  font-weight: 700;
  animation: blink 1s infinite;
}

/* Animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes signal {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(120px); }
}

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

@keyframes glitch {
  0% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  50% { transform: translateX(0); }
  100% { transform: translateX(0); }
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #ff0000;
  border-radius: 0;
}

::-webkit-scrollbar-thumb:hover {
  background: #cc0000;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hud-container {
    grid-template-columns: 300px 1fr 250px;
    gap: 15px;
  }
  
  .status-bar {
    padding: 0 20px;
  }
  
  .console {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .hud-container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 80px 15px;
  }
  
  .left-panel, .right-panel {
    order: 2;
  }
  
  .center-panel {
    order: 1;
  }
  
  .status-bar {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
  
  .status-left, .status-center, .status-right {
    width: 100%;
    justify-content: center;
    margin: 5px 0;
  }
  
  .corner-line {
    width: 40px;
    height: 40px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .tactical-tabs {
    flex-direction: column;
  }
  
  .tab {
    border-right: none;
    border-bottom: 1px solid #333333;
  }
  
  .tab:last-child {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .hud-container {
    padding: 80px 10px;
  }
  
  .status-text {
    font-size: 14px;
  }
  
  .timestamp {
    font-size: 16px;
  }
  
  .console-text {
    font-size: 10px;
  }
  
  .corner-line {
    width: 30px;
    height: 30px;
  }
  
  .profile-image-container {
    width: 80px;
    height: 80px;
  }
}

/* Special Effects */
.tactical-hud::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

.tactical-hud::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.05) 50%, transparent 100%);
  animation: sweep 10s infinite;
  pointer-events: none;
  z-index: 2;
}

@keyframes sweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Hover Effects */
.project-card:hover {
  animation: glitch 0.5s;
}

.skill-item:hover .skill-icon {
  filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 0, 0, 0.5));
}

.contact-link:hover .link-icon img {
  filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 0, 0, 0.5));
}

/* Focus States */
.tab:focus,
.project-card:focus,
.skill-item:focus,
.contact-link:focus {
  outline: 2px solid #ff0000;
  outline-offset: 2px;
}

/* Loading States */
.loading-state {
  position: relative;
  overflow: hidden;
}

.loading-state::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.4), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Text Selection */
::selection {
  background: rgba(255, 0, 0, 0.3);
  color: #ffffff;
}

/* Additional Tactical Elements */
.tactical-grid {
  background-image: 
    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.danger-zone {
  position: relative;
}

.danger-zone::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 0, 0, 0.1) 10px,
    rgba(255, 0, 0, 0.1) 20px
  );
  pointer-events: none;
}

/* Print Styles */
@media print {
  .tactical-hud {
    background: white;
    color: black;
  }
  
  .hud-lines,
  .console,
  .status-bar {
    display: none;
  }
  
  .hud-container {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}
</style>