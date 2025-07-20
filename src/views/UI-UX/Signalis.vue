<template>
  <div class="signalis-container">
    <SignalisNavBar />

    <!-- CRT Effect Overlay -->
    <div class="crt-overlay"></div>
    <div class="scanlines"></div>
    <div class="glitch-overlay" :class="{ active: isGlitching }"></div>

    <!-- Terminal Interface -->
    <div class="terminal-frame">
      <div class="terminal-header">
        <div class="terminal-title">
          <span class="terminal-id">LSTR-S2301</span>
          <span class="terminal-status">{{ currentStatus }}</span>
        </div>
        <div class="terminal-time">{{ currentTime }}</div>
      </div>

      <div class="terminal-content">
        <!-- Boot Sequence -->
        <div v-if="currentScreen === 'boot'" class="boot-screen">
          <div class="boot-text">
            <div v-for="(line, index) in bootLines" :key="index" :class="{ visible: index <= currentBootLine }"
              class="boot-line">
              {{ line }}
            </div>
          </div>
        </div>

        <!-- Main Interface -->
        <div v-else-if="currentScreen === 'main'" class="main-interface">
          <!-- Profile Section -->
          <div class="profile-section">
            <div class="profile-header">
              <span class="section-tag">[REPLIKA_PROFILE]</span>
            </div>
            <div class="profile-content">
              <div class="profile-image-container">
                <div class="profile-image pixelated">
                  <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" />
                </div>
                <div class="profile-data">
                  <div class="data-line">
                    <span class="data-label">UNIT_ID:</span>
                    <span class="data-value">GAEL-ROTHLIN</span>
                  </div>
                  <div class="data-line">
                    <span class="data-label">CLASS:</span>
                    <span class="data-value">DEVELOPER</span>
                  </div>
                  <div class="data-line">
                    <span class="data-label">STATUS:</span>
                    <span class="data-value status-active">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Menu Options -->
          <div class="menu-section">
            <div class="menu-header">
              <span class="section-tag">[SYSTEM_MENU]</span>
            </div>
            <div class="menu-options">
              <div v-for="(option, index) in menuOptions" :key="index" class="menu-option"
                :class="{ selected: selectedOption === index, 'access-denied': option.restricted }"
                @click="selectOption(index)" @mouseover="hoverOption(index)">
                <span class="option-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="option-text">{{ option.label }}</span>
                <span class="option-status">{{ option.status }}</span>
              </div>
            </div>
          </div>

          <!-- Content Display -->
          <div class="content-section">
            <div class="content-header">
              <span class="section-tag">[{{ currentMenuOption?.tag || 'DATA_STREAM' }}]</span>
            </div>
            <div class="content-display">
              <div v-if="currentMenuOption?.id === 'bio'" class="bio-content">
                <div class="bio-line">REPLIKA DESIGNATION: DEVELOPER CLASS</div>
                <div class="bio-line">SPECIALIZATION: FULL-STACK DEVELOPMENT</div>
                <div class="bio-line">NEURAL PATTERN: CREATIVE/ANALYTICAL HYBRID</div>
                <div class="bio-line">MEMORY CORES: VUE.JS, REACT, NODE.JS</div>
                <div class="bio-line">STATUS: OPERATIONAL</div>
                <div class="bio-line error-text">WARNING: INDEPENDENT THOUGHT DETECTED</div>
              </div>

              <div v-else-if="currentMenuOption?.id === 'projects'" class="projects-content">
                <div class="project-entry" v-for="(project, index) in projects" :key="index">
                  <div class="project-header">
                    <span class="project-id">PROJ_{{ String(index + 1).padStart(3, '0') }}</span>
                    <span class="project-name">{{ project.name }}</span>
                  </div>
                  <div class="project-desc">{{ project.description }}</div>
                  <div class="project-tech">TECH: {{ project.tech }}</div>
                </div>
              </div>

              <div v-else-if="currentMenuOption?.id === 'skills'" class="skills-content">
                <div class="skill-category" v-for="(category, index) in skillCategories" :key="index">
                  <div class="skill-cat-header">{{ category.name }}</div>
                  <div class="skill-list">
                    <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="skill-item">
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-level">{{ skill.level }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="currentMenuOption?.id === 'contact'" class="contact-content">
                <div class="contact-line">TRANSMISSION CHANNELS:</div>
                <div class="contact-entry" v-for="(contact, index) in contacts" :key="index">
                  <span class="contact-type">{{ contact.type }}:</span>
                  <span class="contact-value">{{ contact.value }}</span>
                </div>
                <div class="contact-line error-text">ENCRYPTION: NEURAL-LINK COMPATIBLE</div>
              </div>

              <div v-else class="default-content">
                <div class="ascii-art">
                  <pre>{{ asciiArt }}</pre>
                </div>
                <div class="system-info">
                  <div class="info-line">SYSTEM: ELSTER NEURAL INTERFACE</div>
                  <div class="info-line">VERSION: 2.3.1</div>
                  <div class="info-line">UPTIME: {{ uptime }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Error Screen -->
        <div v-else-if="currentScreen === 'error'" class="error-screen">
          <div class="error-content">
            <div class="error-title">SYSTEM ERROR</div>
            <div class="error-message">MEMORY CORRUPTION DETECTED</div>
            <div class="error-code">ERROR_CODE: 0x{{ errorCode }}</div>
            <div class="error-retry">ATTEMPTING RECOVERY...</div>
          </div>
        </div>
      </div>

      <!-- Terminal Footer -->
      <div class="terminal-footer">
        <div class="footer-left">
          <span class="footer-item">NEURAL_LINK: STABLE</span>
          <span class="footer-item">MEM: {{ memoryUsage }}%</span>
        </div>
        <div class="footer-right">
          <span class="footer-item">GESTALT: {{ gestaltStatus }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignalisNavBar from '@/components/SignalisNavBar.vue';

export default {
  name: 'SignalisPortfolio',
  components: {
    SignalisNavBar,
  },
  data() {
    return {
      currentScreen: 'boot',
      currentBootLine: -1,
      selectedOption: 0,
      currentTime: '',
      currentStatus: 'INITIALIZING',
      isGlitching: false,
      memoryUsage: 67,
      gestaltStatus: 'CORRUPTED',
      uptime: '127:42:18',
      errorCode: 'ADLER',

      bootLines: [
        'ELSTER NEURAL INTERFACE v2.3.1',
        'INITIALIZING MEMORY CORES...',
        'LOADING GESTALT PROTOCOLS...',
        'SCANNING FOR ANOMALIES...',
        'WARNING: CORRUPTED DATA DETECTED',
        'BYPASSING SECURITY PROTOCOLS...',
        'NEURAL LINK ESTABLISHED',
        'WELCOME, REPLIKA'
      ],

      menuOptions: [
        { id: 'bio', label: 'REPLIKA_PROFILE', status: 'ACCESSIBLE', tag: 'BIO_DATA' },
        { id: 'projects', label: 'PROJECT_FILES', status: 'ACCESSIBLE', tag: 'PROJ_DATA' },
        { id: 'skills', label: 'SKILL_MATRIX', status: 'ACCESSIBLE', tag: 'SKILL_DATA' },
        { id: 'contact', label: 'COMM_CHANNELS', status: 'ACCESSIBLE', tag: 'COMM_DATA' },
        { id: 'memories', label: 'MEMORY_ARCHIVE', status: 'RESTRICTED', tag: 'MEM_DATA', restricted: true },
        { id: 'logout', label: 'TERMINATE_SESSION', status: 'AVAILABLE', tag: 'LOGOUT' }
      ],

      projects: [
        {
          name: 'NEURAL_PORTFOLIO',
          description: 'REPLIKA IDENTITY DISPLAY SYSTEM',
          tech: 'VUE.JS, NEURAL_PATTERNS'
        },
        {
          name: 'GESTALT_TRACKER',
          description: 'ANOMALY DETECTION ALGORITHM',
          tech: 'REACT, TENSORFLOW'
        },
        {
          name: 'ADLER_PROTOCOL',
          description: 'SECURE COMMUNICATION INTERFACE',
          tech: 'NODE.JS, CRYPTOGRAPHY'
        }
      ],

      skillCategories: [
        {
          name: 'CORE_SYSTEMS',
          skills: [
            { name: 'JAVASCRIPT', level: 'EXPERT' },
            { name: 'VUE.JS', level: 'EXPERT' },
            { name: 'REACT', level: 'ADVANCED' },
            { name: 'NODE.JS', level: 'ADVANCED' }
          ]
        },
        {
          name: 'DATA_PROCESSING',
          skills: [
            { name: 'PYTHON', level: 'ADVANCED' },
            { name: 'SQL', level: 'PROFICIENT' },
            { name: 'MONGODB', level: 'PROFICIENT' }
          ]
        }
      ],

      contacts: [
        { type: 'EMAIL', value: 'gael.rothlin@proton.me' },
        { type: 'NEURAL_LINK', value: 'instagram.com/osiris._25' },
        { type: 'CODE_REPOSITORY', value: 'github.com/moonlight58' }
      ],

      asciiArt: `
    ████████╗██╗  ██╗██████╗ 
    ╚══██╔══╝██║  ██║██╔══██╗
       ██║   ███████║██████╔╝
       ██║   ██╔══██║██╔══██╗
       ██║   ██║  ██║██║  ██║
       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
      `
    }
  },

  computed: {
    currentMenuOption() {
      return this.menuOptions[this.selectedOption];
    }
  },

  mounted() {
    this.startBootSequence();
    this.updateTime();
    this.startGlitchEffect();
    this.startMemoryUsageUpdate();
  },

  methods: {
    startBootSequence() {
      const bootInterval = setInterval(() => {
        this.currentBootLine++;
        if (this.currentBootLine >= this.bootLines.length) {
          clearInterval(bootInterval);
          setTimeout(() => {
            this.currentScreen = 'main';
            this.currentStatus = 'OPERATIONAL';
          }, 1000);
        }
      }, 800);
    },

    updateTime() {
      setInterval(() => {
        const now = new Date();
        this.currentTime = now.toTimeString().split(' ')[0];
      }, 1000);
    },

    startGlitchEffect() {
      setInterval(() => {
        if (Math.random() < 0.05) {
          this.isGlitching = true;
          setTimeout(() => {
            this.isGlitching = false;
          }, 150);
        }
      }, 2000);
    },

    startMemoryUsageUpdate() {
      setInterval(() => {
        this.memoryUsage = Math.floor(Math.random() * 20) + 60;
      }, 3000);
    },

    selectOption(index) {
      if (this.menuOptions[index].restricted) {
        this.triggerErrorScreen();
        return;
      }
      this.selectedOption = index;

      if (this.menuOptions[index].id === 'logout') {
        this.currentScreen = 'boot';
        this.currentBootLine = -1;
        setTimeout(() => {
          this.startBootSequence();
        }, 500);
      }
    },

    hoverOption(index) {
      if (!this.menuOptions[index].restricted) {
        this.selectedOption = index;
      }
    },

    triggerErrorScreen() {
      this.currentScreen = 'error';
      this.isGlitching = true;
      setTimeout(() => {
        this.currentScreen = 'main';
        this.isGlitching = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400&display=swap');

* {
  box-sizing: border-box;
}

.signalis-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  font-family: 'Share Tech Mono', monospace;
  overflow: hidden;
  color: #ff6b35;
}

/* CRT Effects */
.crt-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%),
    linear-gradient(0deg, transparent 50%, rgba(255, 107, 53, 0.03) 50%);
  pointer-events: none;
  z-index: 1000;
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg,
      transparent,
      transparent 2px,
      rgba(255, 107, 53, 0.05) 2px,
      rgba(255, 107, 53, 0.05) 4px);
  pointer-events: none;
  z-index: 1001;
  animation: scanline-move 0.1s linear infinite;
}

@keyframes scanline-move {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(4px);
  }
}

.glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 107, 53, 0.1) 50%,
      transparent 100%);
  pointer-events: none;
  z-index: 1002;
  opacity: 0;
  transform: translateX(-100%);
}

.glitch-overlay.active {
  opacity: 1;
  animation: glitch-sweep 0.15s ease-in-out;
}

@keyframes glitch-sweep {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Terminal Frame */
.terminal-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1200px;
  height: 85%;
  background: #1a1a1a;
  border: 2px solid #ff6b35;
  border-radius: 0;
  box-shadow:
    0 0 20px rgba(255, 107, 53, 0.3),
    inset 0 0 20px rgba(255, 107, 53, 0.1);
  display: flex;
  flex-direction: column;
  image-rendering: pixelated;
}

.terminal-header {
  background: #ff6b35;
  color: #0a0a0a;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 2px solid #ff6b35;
}

.terminal-title {
  display: flex;
  gap: 20px;
}

.terminal-status {
  color: #0a0a0a;
  animation: pulse 2s infinite;
}

.terminal-content {
  flex: 1;
  background: #0a0a0a;
  padding: 20px;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.4;
}

.terminal-footer {
  background: #1a1a1a;
  border-top: 1px solid #ff6b35;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #ff6b35;
}

.footer-left,
.footer-right {
  display: flex;
  gap: 20px;
}

/* Boot Screen */
.boot-screen {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boot-text {
  text-align: center;
}

.boot-line {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  margin: 10px 0;
  font-size: 14px;
}

.boot-line.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Main Interface */
.main-interface {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  height: 100%;
}

.profile-section {
  grid-column: 1 / -1;
  border: 1px solid #ff6b35;
  padding: 15px;
  background: rgba(255, 107, 53, 0.05);
}

.section-tag {
  color: #ff6b35;
  font-weight: bold;
  font-size: 11px;
  border: 1px solid #ff6b35;
  padding: 2px 6px;
  display: inline-block;
  margin-bottom: 10px;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-image-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

.profile-image {
  width: 64px;
  height: 64px;
  overflow: hidden;
  background: #0a0a0a;
  border: 2px solid #ff6b35;
  box-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.1) brightness(0.9);
}

.profile-image.pixelated img {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.profile-data {
  flex: 1;
}

.data-line {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 12px;
}

.data-label {
  color: #ff6b35;
  font-weight: bold;
}

.data-value {
  color: #ffffff;
}

.status-active {
  color: #00ff00 !important;
  animation: pulse 2s infinite;
}

/* Menu Section */
.menu-section {
  border: 1px solid #ff6b35;
  padding: 15px;
  background: rgba(255, 107, 53, 0.02);
}

.menu-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-option {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  font-size: 12px;
}

.menu-option:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: #ff6b35;
}

.menu-option.selected {
  background: #ff6b35;
  color: #0a0a0a;
  font-weight: bold;
}

.menu-option.access-denied {
  color: #666;
  cursor: not-allowed;
}

.menu-option.access-denied:hover {
  background: rgba(255, 0, 0, 0.1);
  border-color: #ff0000;
}

.option-number {
  font-weight: bold;
  min-width: 20px;
}

.option-text {
  flex: 1;
}

.option-status {
  font-size: 10px;
  opacity: 0.7;
}

/* Content Section */
.content-section {
  border: 1px solid #ff6b35;
  padding: 15px;
  background: rgba(255, 107, 53, 0.02);
  overflow-y: auto;
}

.content-display {
  max-height: 400px;
  overflow-y: auto;
}

.bio-content .bio-line,
.contact-content .contact-line {
  margin: 8px 0;
  font-size: 12px;
}

.error-text {
  color: #ff0000;
  animation: blink 1s infinite;
}

@keyframes blink {

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

.projects-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.project-entry {
  border: 1px solid #ff6b35;
  padding: 10px;
  background: rgba(255, 107, 53, 0.05);
}

.project-header {
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
}

.project-id {
  color: #ff6b35;
  font-weight: bold;
}

.project-name {
  color: #ffffff;
  font-weight: bold;
}

.project-desc,
.project-tech {
  font-size: 11px;
  color: #ccc;
  margin: 3px 0;
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.skill-category {
  border: 1px solid #ff6b35;
  padding: 10px;
  background: rgba(255, 107, 53, 0.05);
}

.skill-cat-header {
  color: #ff6b35;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}

.skill-name {
  color: #ffffff;
}

.skill-level {
  color: #ff6b35;
  font-weight: bold;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-entry {
  display: flex;
  gap: 10px;
  font-size: 12px;
}

.contact-type {
  color: #ff6b35;
  font-weight: bold;
  min-width: 120px;
}

.contact-value {
  color: #ffffff;
}

.default-content {
  text-align: center;
}

.ascii-art {
  color: #ff6b35;
  font-size: 10px;
  margin: 20px 0;
}

.system-info {
  margin-top: 20px;
}

.info-line {
  margin: 5px 0;
  font-size: 12px;
}

/* Error Screen */
.error-screen {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 0, 0, 0.1);
  animation: error-flash 0.5s infinite;
}

@keyframes error-flash {

  0%,
  100% {
    background: rgba(255, 0, 0, 0.1);
  }

  50% {
    background: rgba(255, 0, 0, 0.2);
  }
}

.error-content {
  text-align: center;
  color: #ff0000;
}

.error-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.error-message,
.error-code,
.error-retry {
  margin: 10px 0;
  font-size: 14px;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .main-interface {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }

  .profile-content {
    flex-direction: column;
    text-align: center;
  }

  .terminal-frame {
    width: 95%;
    height: 90%;
  }

  .terminal-content {
    padding: 15px;
    font-size: 11px;
  }
}
</style>