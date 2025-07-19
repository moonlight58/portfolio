<template>
  <div class="y2k-container">
    <!-- Animated background elements -->
    <div class="bg-elements">
      <div class="floating-orb orb-1"></div>
      <div class="floating-orb orb-2"></div>
      <div class="floating-orb orb-3"></div>
      <div class="grid-pattern"></div>
      <div class="scan-lines"></div>
    </div>

    <!-- Main terminal window -->
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <div class="btn-close"></div>
          <div class="btn-minimize"></div>
          <div class="btn-maximize"></div>
        </div>
        <div class="terminal-title">PORTFOLIO_2025.exe</div>
      </div>
      
      <div class="terminal-content">
        <!-- Profile section -->
        <div class="profile-section">
          <div class="ascii-border">
            <div class="profile-container">
              <div class="holographic-frame">
                <img src="@/assets/moon-pfp.webp" alt="Gaël Röthlin" class="profile-avatar" />
                <div class="avatar-glow"></div>
              </div>
              <div class="profile-data">
                <h1 class="glitch-text" data-text="GAËL RÖTHLIN">GAËL RÖTHLIN</h1>
                <div class="typing-text">{{ $t("HomeTitle") }}</div>
                <div class="status-bar">
                  <span class="status-online">● ONLINE</span>
                  <span class="status-coding">{{ new Date().getFullYear() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bio section with matrix effect -->
        <div class="bio-section">
          <div class="matrix-container">
            <div class="matrix-header">&gt; ACCESSING_PROFILE.dat</div>
            <div class="bio-content">
              <p class="bio-line">{{ $t("BodyPart1") }}, BUT<span class="warning-blink">*</span>, {{ $t("BodyPart2") }}</p>
              <p class="bio-footnote"><span class="warning-blink">*</span>({{ $t("Precision") }})</p>
              <p class="bio-description">{{ $t("Description") }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation Grid -->
        <div class="nav-grid">
          <div class="nav-card projects-card" @click="scrollToSection('projects')">
            <div class="card-hologram"></div>
            <div class="card-content">
              <div class="card-icon">💾</div>
              <h3>PROJECTS.zip</h3>
              <p>{{ $t("ProjectContent") }}</p>
            </div>
            <div class="card-border"></div>
          </div>

          <div class="nav-card skills-card" @click="scrollToSection('skills')">
            <div class="card-hologram"></div>
            <div class="card-content">
              <div class="card-icon">⚡</div>
              <h3>SKILLS.sys</h3>
              <p>Languages & Technologies</p>
            </div>
            <div class="card-border"></div>
          </div>

          <div class="nav-card internship-card" @click="scrollToSection('internship')">
            <div class="card-hologram"></div>
            <div class="card-content">
              <div class="card-icon">🔧</div>
              <h3>EXPERIENCE.log</h3>
              <p>{{ $t('Internship') }}</p>
            </div>
            <div class="card-border"></div>
          </div>

          <div class="nav-card contact-card" @click="scrollToSection('contact')">
            <div class="card-hologram"></div>
            <div class="card-content">
              <div class="card-icon">📡</div>
              <h3>CONTACT.exe</h3>
              <p>Connect with me</p>
            </div>
            <div class="card-border"></div>
          </div>
        </div>

        <!-- Social links with Y2K style -->
        <div class="social-section">
          <div class="social-header">&gt; SOCIAL_LINKS.dll</div>
          <div class="social-buttons">
            <a href="https://www.instagram.com/osiris._25" target="_blank" class="social-btn instagram">
              <span class="btn-bg"></span>
              <img src="@/assets/instagram.svg" alt="Instagram" />
              <span>osiris._25</span>
            </a>
            <a href="mailto:gael.rothlin@proton.me" class="social-btn email">
              <span class="btn-bg"></span>
              <img src="@/assets/email.svg" alt="Email" />
              <span>E-MAIL</span>
            </a>
            <a href="https://github.com/moonlight58" target="_blank" class="social-btn github">
              <span class="btn-bg"></span>
              <img src="@/assets/github.svg" alt="GitHub" />
              <span>GITHUB</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Content sections -->
    <div id="projects" class="content-section">
      <div class="section-window">
        <div class="window-header">
          <span>PROJECTS.zip - Extracting...</span>
          <div class="loading-bar">
            <div class="loading-fill"></div>
          </div>
        </div>
        <div class="window-content">
          <Carousel />
        </div>
      </div>
    </div>

    <div id="internship" class="content-section">
      <div class="section-window">
        <div class="window-header">
          <span>EXPERIENCE.log - Loading...</span>
        </div>
        <div class="window-content">
          <Internship />
        </div>
      </div>
    </div>

    <div id="skills" class="content-section">
      <div class="section-window">
        <div class="window-header">
          <span>SKILLS.sys - Initializing...</span>
        </div>
        <div class="window-content skills-content">
          <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
            <div class="skill-header">
              <h3>{{ $t(skillType) }}</h3>
            </div>
            <div class="skills-matrix">
              <div class="skill-item" v-for="(language, langIndex) in skills[skillType].language" :key="langIndex"
                @click="redirectToUrl(language.url)">
                <div class="skill-hologram">
                  <img :src="require(`@/assets/skills/${language.name}.svg`)" :alt="language.name" />
                </div>
                <span>{{ language.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="contact" class="content-section">
      <div class="section-window">
        <div class="window-header">
          <span>CONTACT.exe - Ready</span>
        </div>
        <div class="window-content contact-content">
          <div class="contact-terminal">
            <div class="terminal-prompt">
              <span class="prompt-symbol">$</span>
              <span class="prompt-text">connect --user=gael.rothlin</span>
            </div>
            <div class="contact-matrix">
              <a href="mailto:gael.rothlin@proton.me" class="contact-link">
                <span class="link-prefix">&gt;&gt;</span>
                <img src="@/assets/email.svg" alt="Email" />
                <span>gael.rothlin@proton.me</span>
              </a>
              <a href="https://www.instagram.com/osiris._25" target="_blank" class="contact-link">
                <span class="link-prefix">&gt;&gt;</span>
                <img src="@/assets/instagram.svg" alt="Instagram" />
                <span>osiris._25</span>
              </a>
              <a href="https://github.com/moonlight58" target="_blank" class="contact-link">
                <span class="link-prefix">&gt;&gt;</span>
                <img src="@/assets/github.svg" alt="GitHub" />
                <span>moonlight58</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselProject.vue";
import Internship from "@/components/StageComponent.vue";
import skills from "@/datasource/skills.json";

export default {
  name: "HomeView",
  components: {
    Carousel,
    Internship,
  },
  data() {
    return {
      skills: skills,
    };
  },
  mounted() {
    // Create floating matrix characters
    this.createMatrixEffect();
  },
  methods: {
    redirectToUrl(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    createMatrixEffect() {
      const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
      const matrixContainer = document.querySelector('.grid-pattern');
      
      for (let i = 0; i < 50; i++) {
        const char = document.createElement('span');
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.className = 'matrix-char';
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 5 + 's';
        char.style.animationDuration = (3 + Math.random() * 4) + 's';
        matrixContainer.appendChild(char);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Courier+Prime:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

.y2k-container {
  min-height: 100vh;
  background: 
    radial-gradient(circle at 20% 20%, #ff00ff22 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, #00ffff22 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, #ffff0022 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 25%, #0a1a1a 50%, #1a1a0a 75%, #0a0a0a 100%);
  font-family: 'Orbitron', 'Courier Prime', monospace;
  color: #00ff00;
  overflow-x: hidden;
  position: relative;
}

/* Background effects */
.bg-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  animation: float 6s ease-in-out infinite;
}

.orb-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #ff00ff44, transparent);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #00ffff44, transparent);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.orb-3 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #ffff0044, transparent);
  bottom: 30%;
  left: 70%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
}

.grid-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 30px); }
}

.matrix-char {
  position: absolute;
  color: #00ff00;
  font-family: 'Courier Prime', monospace;
  font-size: 14px;
  opacity: 0.7;
  animation: matrix-fall linear infinite;
}

@keyframes matrix-fall {
  0% {
    transform: translateY(-100vh);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.scan-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,255,0,0.03) 2px,
    rgba(0,255,0,0.03) 4px
  );
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

/* Terminal window */
.terminal-window {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 2rem auto;
  background: 
    linear-gradient(145deg, #0a0a0a, #1a1a1a),
    radial-gradient(circle at 50% 50%, rgba(0,255,0,0.05), transparent);
  border: 2px solid #00ff00;
  border-radius: 10px;
  box-shadow: 
    0 0 30px rgba(0,255,0,0.3),
    inset 0 0 30px rgba(0,255,0,0.1);
  overflow: hidden;
}

.terminal-header {
  background: linear-gradient(90deg, #003300, #004400, #003300);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #00ff00;
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.terminal-buttons div {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #00ff00;
}

.btn-close { background: #ff0040; box-shadow: 0 0 10px #ff0040; }
.btn-minimize { background: #ffff00; box-shadow: 0 0 10px #ffff00; }
.btn-maximize { background: #00ff00; box-shadow: 0 0 10px #00ff00; }

.terminal-title {
  font-family: 'Courier Prime', monospace;
  font-weight: bold;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
}

.terminal-content {
  padding: 2rem;
}

/* Profile section */
.ascii-border {
  border: 2px dashed #00ffff;
  padding: 1.5rem;
  position: relative;
  background: rgba(0,255,255,0.05);
  margin-bottom: 2rem;
}

.ascii-border::before {
  content: "╔══════════════════════════════════════╗";
  position: absolute;
  top: -15px;
  left: 10px;
  background: #0a0a0a;
  color: #00ffff;
  padding: 0 10px;
  font-family: 'Courier Prime', monospace;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.holographic-frame {
  position: relative;
  width: 120px;
  height: 120px;
}

.profile-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #ff00ff;
  object-fit: cover;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 30px rgba(255,0,255,0.5);
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: conic-gradient(from 0deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
  border-radius: 50%;
  z-index: 1;
  animation: rotate-holo 3s linear infinite;
}

@keyframes rotate-holo {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.profile-data h1 {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 900;
}

.glitch-text {
  color: #ff00ff;
  text-shadow: 
    0 0 10px #ff00ff,
    2px 0 0 #00ffff,
    -2px 0 0 #ffff00;
  animation: glitch 2s ease-in-out infinite alternate;
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-top 0.3s linear infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch-text::after {
  animation: glitch-bottom 0.3s linear infinite;
  color: #ffff00;
  z-index: -2;
}

@keyframes glitch {
  0% { text-shadow: 0 0 10px #ff00ff, 2px 0 0 #00ffff, -2px 0 0 #ffff00; }
  25% { text-shadow: 0 0 10px #ff00ff, -2px 0 0 #00ffff, 2px 0 0 #ffff00; }
  50% { text-shadow: 0 0 10px #ff00ff, 2px 0 0 #00ffff, -2px 0 0 #ffff00; }
  75% { text-shadow: 0 0 10px #ff00ff, -2px 0 0 #00ffff, 2px 0 0 #ffff00; }
  100% { text-shadow: 0 0 10px #ff00ff, 2px 0 0 #00ffff, -2px 0 0 #ffff00; }
}

@keyframes glitch-top {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, -2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes glitch-bottom {
  0% { transform: translate(0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
  100% { transform: translate(0); }
}

.typing-text {
  color: #00ffff;
  font-family: 'Courier Prime', monospace;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  position: relative;
}

.typing-text::after {
  content: '█';
  animation: blink 1s step-end infinite;
  color: #00ff00;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.status-bar {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: 'Courier Prime', monospace;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.status-online {
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
}

.status-coding {
  color: #ffff00;
  text-shadow: 0 0 5px #ffff00;
}

/* Bio section */
.bio-section {
  margin: 2rem 0;
  background: rgba(0,0,0,0.7);
  border: 1px solid #00ff00;
  border-radius: 5px;
  overflow: hidden;
}

.matrix-container {
  position: relative;
}

.matrix-header {
  background: linear-gradient(90deg, #003300, #004400);
  color: #00ff00;
  padding: 0.5rem 1rem;
  font-family: 'Courier Prime', monospace;
  font-weight: bold;
  text-shadow: 0 0 10px #00ff00;
}

.bio-content {
  padding: 1.5rem;
  font-family: 'Courier Prime', monospace;
  line-height: 1.6;
}

.bio-line, .bio-description {
  color: #ffffff;
  margin-bottom: 1rem;
}

.bio-footnote {
  color: #ffff00;
  font-size: 0.9rem;
  font-style: italic;
}

.warning-blink {
  color: #ff0040;
  animation: warning-pulse 1s ease-in-out infinite alternate;
  font-weight: bold;
  text-shadow: 0 0 10px #ff0040;
}

@keyframes warning-pulse {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.7; transform: scale(1.1); }
}

/* Navigation Grid */
.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.nav-card {
  position: relative;
  background: 
    linear-gradient(145deg, rgba(0,0,0,0.8), rgba(20,20,20,0.8));
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: conic-gradient(from 0deg, transparent, #ff00ff, transparent, #00ffff, transparent);
  z-index: -1;
  border-radius: 10px;
  padding: 2px;
  animation: border-spin 3s linear infinite;
}

@keyframes border-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.card-hologram {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.nav-card:hover .card-hologram {
  transform: translateX(100%);
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,255,0,0.3);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  filter: 
    drop-shadow(0 0 10px #00ff00)
    drop-shadow(0 0 20px #00ffff);
}

.card-content h3 {
  color: #00ffff;
  font-family: 'Courier Prime', monospace;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  text-shadow: 0 0 10px #00ffff;
}

.card-content p {
  color: #ffffff;
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
}

/* Social section */
.social-section {
  margin-top: 3rem;
  text-align: center;
}

.social-header {
  color: #00ff00;
  font-family: 'Courier Prime', monospace;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px #00ff00;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(0,0,0,0.8);
  border: 2px solid;
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.social-btn.instagram { border-color: #ff00ff; color: #ff00ff; }
.social-btn.email { border-color: #00ffff; color: #00ffff; }
.social-btn.github { border-color: #ffff00; color: #ffff00; }

.btn-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: left 0.3s ease;
  z-index: -1;
}

.social-btn.instagram .btn-bg { background: linear-gradient(90deg, transparent, rgba(255,0,255,0.2), transparent); }
.social-btn.email .btn-bg { background: linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent); }
.social-btn.github .btn-bg { background: linear-gradient(90deg, transparent, rgba(255,255,0,0.2), transparent); }

.social-btn:hover .btn-bg {
  left: 100%;
}

.social-btn:hover {
  transform: scale(1.05);
  text-shadow: 0 0 15px currentColor;
  box-shadow: 0 0 25px currentColor;
}

.social-btn img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

/* Content sections */
.content-section {
  margin: 4rem auto;
  max-width: 1000px;
  position: relative;
  z-index: 10;
}

.section-window {
  background: 
    linear-gradient(145deg, #0a0a0a, #1a1a1a);
  border: 2px solid #00ff00;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0,255,0,0.2);
}

.window-header {
  background: linear-gradient(90deg, #003300, #004400, #003300);
  padding: 1rem;
  color: #00ff00;
  font-family: 'Courier Prime', monospace;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px #00ff00;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(0,255,0,0.2);
  border-radius: 2px;
  overflow: hidden;
}

.loading-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #00ff00, #00ffff, #ff00ff);
  border-radius: 2px;
  animation: loading-progress 3s ease-in-out infinite;
}

@keyframes loading-progress {
  0% { width: 0%; }
  50% { width: 100%; }
  100% { width: 0%; }
}

.window-content {
  padding: 2rem;
  min-height: 300px;
}

/* Skills content specific styles */
.skills-content {
  background: 
    radial-gradient(circle at 30% 30%, rgba(255,0,255,0.1), transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0,255,255,0.1), transparent 50%);
}

.skill-category {
  margin-bottom: 3rem;
  border: 1px solid rgba(0,255,0,0.3);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0,0,0,0.5);
}

.skill-header {
  background: linear-gradient(90deg, #001a1a, #002a2a, #001a1a);
  padding: 1rem;
  border-bottom: 1px solid #00ffff;
}

.skill-header h3 {
  margin: 0;
  color: #00ffff;
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  text-shadow: 0 0 15px #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.skills-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(0,255,0,0.02) 20px,
      rgba(0,255,0,0.02) 40px
    );
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background: 
    linear-gradient(145deg, rgba(0,0,0,0.8), rgba(20,20,20,0.6));
  border: 1px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
  z-index: -1;
  border-radius: 15px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.skill-item:hover::before {
  opacity: 1;
  animation: skill-glow 2s ease-in-out infinite;
}

@keyframes skill-glow {
  0%, 100% { 
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
  }
  33% { 
    background: linear-gradient(45deg, #00ffff, #ffff00, #ff00ff, #00ffff);
  }
  66% { 
    background: linear-gradient(45deg, #ffff00, #ff00ff, #00ffff, #ffff00);
  }
}

.skill-item:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 
    0 15px 30px rgba(0,255,255,0.3),
    0 0 20px rgba(255,0,255,0.2);
}

.skill-hologram {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  position: relative;
  padding: 10px;
  background: 
    radial-gradient(circle, rgba(255,255,255,0.1), transparent),
    conic-gradient(from 0deg, transparent, rgba(0,255,255,0.2), transparent);
  border-radius: 50%;
  animation: hologram-spin 4s linear infinite;
}

@keyframes hologram-spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

.skill-hologram img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: 
    brightness(1.2)
    contrast(1.3)
    drop-shadow(0 0 10px rgba(0,255,255,0.5));
  transition: filter 0.3s ease;
}

.skill-item:hover .skill-hologram img {
  filter: 
    brightness(1.5)
    contrast(1.5)
    drop-shadow(0 0 20px rgba(255,0,255,0.8))
    drop-shadow(0 0 30px rgba(0,255,255,0.6));
}

.skill-item span {
  color: #ffffff;
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.skill-item:hover span {
  color: #00ffff;
  text-shadow: 0 0 15px #00ffff;
  transform: scale(1.1);
}

/* Contact content styles */
.contact-content {
  background: 
    linear-gradient(135deg, rgba(0,0,0,0.9), rgba(10,10,30,0.8)),
    radial-gradient(circle at 50% 50%, rgba(0,255,0,0.05), transparent 70%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-terminal {
  width: 100%;
  max-width: 600px;
  background: rgba(0,0,0,0.8);
  border: 2px solid #00ff00;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 
    0 0 30px rgba(0,255,0,0.3),
    inset 0 0 20px rgba(0,255,0,0.1);
}

.terminal-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-family: 'Courier Prime', monospace;
  font-size: 1.1rem;
}

.prompt-symbol {
  color: #00ff00;
  font-weight: bold;
  text-shadow: 0 0 10px #00ff00;
  animation: prompt-blink 2s ease-in-out infinite;
}

@keyframes prompt-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

.prompt-text {
  color: #ffffff;
  font-weight: bold;
}

.contact-matrix {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: 
    linear-gradient(90deg, rgba(0,0,0,0.8), rgba(20,20,20,0.6), rgba(0,0,0,0.8));
  border: 1px solid transparent;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Courier Prime', monospace;
  font-size: 1rem;
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
  background: linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.contact-link:hover::before {
  left: 100%;
}

.contact-link:hover {
  border-color: #00ffff;
  color: #00ffff;
  text-shadow: 0 0 15px #00ffff;
  box-shadow: 0 0 25px rgba(0,255,255,0.3);
  transform: translateX(10px);
}

.link-prefix {
  color: #00ff00;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 10px #00ff00;
}

.contact-link img {
  width: 24px;
  height: 24px;
  filter: 
    brightness(0) invert(1)
    drop-shadow(0 0 5px rgba(255,255,255,0.5));
  transition: filter 0.3s ease;
}

.contact-link:hover img {
  filter: 
    brightness(0) invert(1)
    drop-shadow(0 0 15px #00ffff)
    drop-shadow(0 0 25px #00ffff);
}

/* Responsive Design */
@media (max-width: 768px) {
  .y2k-container {
    padding: 1rem;
  }
  
  .terminal-window {
    margin: 1rem auto;
  }
  
  .terminal-content {
    padding: 1rem;
  }
  
  .profile-container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .holographic-frame {
    width: 100px;
    height: 100px;
  }
  
  .glitch-text {
    font-size: 1.8rem;
  }
  
  .nav-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .nav-card {
    padding: 1rem;
    min-height: 120px;
  }
  
  .social-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .social-btn {
    width: 200px;
    justify-content: center;
  }
  
  .skills-matrix {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .skill-item {
    padding: 1rem 0.5rem;
  }
  
  .contact-matrix {
    gap: 1rem;
  }
  
  .contact-link {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
  
  .window-content {
    padding: 1rem;
  }
  
  .orb-1, .orb-2, .orb-3 {
    display: none; /* Hide floating orbs on mobile for performance */
  }
}

@media (max-width: 480px) {
  .terminal-header {
    padding: 8px 15px;
  }
  
  .terminal-title {
    font-size: 0.9rem;
  }
  
  .glitch-text {
    font-size: 1.5rem;
  }
  
  .typing-text {
    font-size: 1rem;
  }
  
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-matrix {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
  
  .skill-hologram {
    width: 50px;
    height: 50px;
  }
  
  .ascii-border::before {
    font-size: 0.8rem;
  }
}

/* Performance optimizations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-orb,
  .grid-pattern,
  .matrix-char,
  .scan-lines,
  .avatar-glow {
    animation: none;
  }
  
  .glitch-text::before,
  .glitch-text::after {
    display: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .terminal-window,
  .section-window {
    border-width: 3px;
  }
  
  .nav-card,
  .skill-item,
  .contact-link {
    border-width: 2px;
  }
  
  .bg-elements {
    opacity: 0.3;
  }
}

/* Print styles */
@media print {
  .bg-elements,
  .floating-orb,
  .grid-pattern,
  .scan-lines,
  .avatar-glow {
    display: none;
  }
  
  .y2k-container {
    background: white;
    color: black;
  }
  
  .terminal-window,
  .section-window {
    border: 2px solid black;
    box-shadow: none;
  }
  
  .glitch-text,
  .typing-text,
  .status-online,
  .status-coding {
    color: black;
    text-shadow: none;
  }
}
</style>