<template>
  <div class="ascii-container">
    <!-- Terminal Header -->
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="btn red"></span>
        <span class="btn yellow"></span>
        <span class="btn green"></span>
      </div>
      <div class="terminal-title">portfolio.exe - [Gaël Röthlin]</div>
    </div>

    <!-- ASCII Art Header -->
    <div class="ascii-art-section">
      <pre class="ascii-logo">
  ▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄  ▄             
 █  ▄▄▄▄▄ █       █ █       █ █           
 █ █     █ █   ▄   █ █    ▄▄▄█ █           
 █ █▄▄▄▄▄█ █  █▄█  █ █   █▄▄▄  █           
 █▄▄▄▄▄  █ █       █ █    ▄▄▄█ █           
  ▄▄▄▄▄█ █ █   ▄   █ █   █▄▄▄  █▄▄▄▄▄▄▄    
 █▄▄▄▄▄▄▄█ █▄▄█ █▄▄█ █▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄█   
                                          
   ██▀███   ▒█████  ▄▄▄█████▓ ██░ ██  ██▓    ██▓ ███▄    █ 
  ▓██ ▒ ██▒▒██▒  ██▒▓  ██▒ ▓▒▓██░ ██▒▓██▒   ▓██▒ ██ ▀█   █ 
  ▓██ ░▄█ ▒▒██░  ██▒▒ ▓██░ ▒░▒██▀▀██░▒██▒   ▒██▒▓██  ▀█ ██▒
  ▒██▀▀█▄  ▒██   ██░░ ▓██▓ ░ ░▓█ ░██ ░██░   ░██░▓██▒  ▐▌██▒
  ░██▓ ▒██▒░ ████▓▒░  ▒██▒ ░ ░▓█▒░██▓░██░   ░██░▒██░   ▓██░
  ░ ▒▓ ░▒▓░░ ▒░▒░▒░   ▒ ░░    ▒ ░░▒░▒░▓     ░▓  ░ ▒░   ▒ ▒ 
    ░▒ ░ ▒░  ░ ▒ ▒░     ░     ▒ ░▒░ ░ ▒ ░    ▒ ░░ ░░   ░ ▒░
    ░░   ░ ░ ░ ░ ▒    ░       ░  ░░ ░ ▒ ░    ▒ ░   ░   ░ ░ 
     ░         ░ ░            ░  ░  ░ ░      ░           ░ 
      </pre>
      <div class="glitch-text">{{ $t ? $t("HomeTitle") : "Développeur Full-Stack" }}</div>
    </div>

    <!-- Terminal Content -->
    <div class="terminal-content">
      <!-- Boot Sequence -->
      <div class="boot-sequence" v-if="showBootSequence">
        <div class="boot-line" v-for="(line, index) in bootLines" :key="index" 
             :class="{ active: currentBootLine >= index }">
          <span class="prompt">C:\></span> {{ line }}
          <span class="cursor" v-if="currentBootLine === index">█</span>
        </div>
      </div>

      <!-- Main Interface -->
      <div class="main-interface" v-show="!showBootSequence">
        <!-- About Section -->
        <div class="ascii-section">
          <div class="section-header">
            <span class="ascii-border">╔══════════════════════════════════════╗</span>
            <span class="ascii-title">║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ABOUT.TXT]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</span>
            <span class="ascii-border">╚══════════════════════════════════════╝</span>
          </div>
          <div class="ascii-content">
            <div class="pixel-character">
              <div class="char-line">&nbsp;&nbsp;██████████&nbsp;&nbsp;</div>
              <div class="char-line">██░░░░░░░░░░██</div>
              <div class="char-line">██░░██░░██░░██</div>
              <div class="char-line">██░░░░░░░░░░██</div>
              <div class="char-line">██░█░░░░░░█░██</div>
              <div class="char-line">██░░██████░░██</div>
              <div class="char-line">██░░░░░░░░░░██</div>
              <div class="char-line">&nbsp;&nbsp;██████████&nbsp;&nbsp;</div>
            </div>
            <div class="text-content">
              <p class="typing-text" v-if="typingComplete">
                > Salut! Je suis Gaël Röthlin<br>
                > Développeur passionné par la création<br>
                > d'applications web innovantes<br>
                > Status: [AVAILABLE FOR WORK]<br>
                > Location: Belfort, France<br>
                > Level: {{ currentLevel }} XP: {{ currentXP }}/{{ maxXP }}
              </p>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="ascii-section">
          <div class="section-header">
            <span class="ascii-border">╔══════════════════════════════════════╗</span>
            <span class="ascii-title">║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[SKILLS.DAT]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</span>
            <span class="ascii-border">╚══════════════════════════════════════╝</span>
          </div>
          
          <div class="skills-categories" v-if="skills">
            <div class="skill-category" v-for="(skillType, index) in Object.keys(skills)" :key="index">
              <div class="category-title">
                ► {{ $t ? $t(skillType) : skillType.toUpperCase() }}
              </div>
              <div class="skills-grid">
                <div 
                  class="skill-item" 
                  v-for="(language, langIndex) in skills[skillType].language" 
                  :key="langIndex"
                  @click="executeSkill(language)"
                  :class="{ active: activeSkill === language.name }"
                >
                  <div class="skill-icon">█</div>
                  <span class="skill-name">{{ language.name }}</span>
                  <div class="skill-level">
                    <span v-for="n in 5" :key="n" class="level-bar" 
                          :class="{ filled: n <= getSkillLevel(language.name) }">▓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Section -->
        <div class="ascii-section">
          <div class="section-header">
            <span class="ascii-border">╔══════════════════════════════════════╗</span>
            <span class="ascii-title">║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[PROJECTS.EXE]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</span>
            <span class="ascii-border">╚══════════════════════════════════════╝</span>
          </div>
          <div class="projects-list">
            <div class="project-item" v-for="(project, index) in projects" :key="index"
                 @click="selectProject(index)" :class="{ selected: selectedProject === index }">
              <div class="project-header">
                <span class="file-icon">📁</span>
                <span class="project-name">{{ project.name }}</span>
                <span class="project-status">[{{ project.status }}]</span>
              </div>
              <div class="project-details" v-if="selectedProject === index">
                <p>{{ project.description }}</p>
                <div class="tech-stack">
                  <span class="tech-tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="ascii-section">
          <div class="section-header">
            <span class="ascii-border">╔══════════════════════════════════════╗</span>
            <span class="ascii-title">║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[CONTACT.BAT]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</span>
            <span class="ascii-border">╚══════════════════════════════════════╝</span>
          </div>
          <div class="contact-menu">
            <div class="menu-item" @click="executeContact('email')">
              <span class="menu-icon">✉</span> EMAIL.......... gael.rothlin@proton.me
            </div>
            <div class="menu-item" @click="executeContact('github')">
              <span class="menu-icon">⚡</span> GITHUB......... github.com/moonlight58
            </div>
            <div class="menu-item" @click="executeContact('instagram')">
              <span class="menu-icon">📷</span> INSTAGRAM...... @osiris._25
            </div>
          </div>
        </div>

        <!-- Terminal Input -->
        <div class="terminal-input">
          <span class="prompt">C:\Portfolio></span>
          <input 
            ref="terminalInput"
            v-model="currentCommand" 
            @keyup.enter="executeCommand"
            class="command-input"
            placeholder="Tapez 'help' pour voir les commandes..."
          >
          <span class="cursor-blink">█</span>
        </div>

        <!-- Output -->
        <div class="command-output" v-if="commandOutput">
          <pre>{{ commandOutput }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import des skills depuis le fichier original ou définition locale
const skills = {
  "Frontend": {
    "language": [
      { "name": "HTML", "url": "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { "name": "CSS", "url": "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { "name": "JavaScript", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { "name": "Vue", "url": "https://vuejs.org/" },
      { "name": "React", "url": "https://reactjs.org/" }
    ]
  },
  "Backend": {
    "language": [
      { "name": "Python", "url": "https://www.python.org/" },
      { "name": "Node", "url": "https://nodejs.org/" },
      { "name": "PHP", "url": "https://www.php.net/" },
      { "name": "MySQL", "url": "https://www.mysql.com/" }
    ]
  },
  "Tools": {
    "language": [
      { "name": "Git", "url": "https://git-scm.com/" },
      { "name": "Docker", "url": "https://www.docker.com/" },
      { "name": "Figma", "url": "https://www.figma.com/" }
    ]
  }
};

export default {
  name: "ASCIIPortfolioHome",
  data() {
    return {
      skills: skills,
      showBootSequence: true,
      currentBootLine: 0,
      typingComplete: false,
      currentLevel: 19,
      currentXP: 8450,
      maxXP: 10000,
      activeSkill: null,
      selectedProject: null,
      currentCommand: '',
      commandOutput: '',
      bootLines: [
        'Initializing portfolio.exe...',
        'Loading user data...',
        'Parsing skills.json... [OK]',
        'Rendering ASCII art... [OK]',
        'Starting main interface...',
        'Welcome to Gaël\'s Portfolio Terminal!'
      ],
      projects: [
        {
          name: 'E-Commerce Platform',
          status: 'COMPLETED',
          description: 'Application web de e-commerce avec Vue.js et Node.js',
          tech: ['Vue.js', 'Node.js', 'MySQL', 'Stripe']
        },
        {
          name: 'Task Manager App',
          status: 'IN PROGRESS',
          description: 'Application de gestion de tâches avec interface moderne',
          tech: ['React', 'Express', 'MongoDB']
        },
        {
          name: 'Portfolio Website',
          status: 'LIVE',
          description: 'Site portfolio avec design ASCII/Terminal',
          tech: ['Vue.js', 'CSS3', 'ASCII Art']
        }
      ]
    };
  },
  computed: {
    progressWidth() {
      return (this.currentXP / this.maxXP) * 100;
    }
  },
  mounted() {
    this.startBootSequence();
  },
  methods: {
    startBootSequence() {
      const interval = setInterval(() => {
        this.currentBootLine++;
        if (this.currentBootLine >= this.bootLines.length) {
          clearInterval(interval);
          setTimeout(() => {
            this.showBootSequence = false;
            this.startTypingAnimation();
          }, 1000);
        }
      }, 800);
    },
    
    startTypingAnimation() {
      setTimeout(() => {
        this.typingComplete = true;
      }, 500);
    },
    
    getSkillLevel(skillName) {
      const skillLevels = {
        'HTML': 5, 'CSS': 5, 'JavaScript': 4, 'Vue': 4, 'React': 3,
        'Python': 4, 'Node': 4, 'PHP': 3, 'MySQL': 4,
        'Git': 5, 'Docker': 3, 'Figma': 4
      };
      return skillLevels[skillName] || 3;
    },
    
    executeSkill(skill) {
      this.activeSkill = skill.name;
      if (skill.url) {
        window.open(skill.url, '_blank');
      }
      setTimeout(() => {
        this.activeSkill = null;
      }, 2000);
    },
    
    selectProject(index) {
      this.selectedProject = this.selectedProject === index ? null : index;
    },
    
    executeContact(type) {
      const contacts = {
        email: 'mailto:gael.rothlin@proton.me',
        github: 'https://github.com/moonlight58',
        instagram: 'https://www.instagram.com/osiris._25'
      };
      
      if (contacts[type]) {
        window.open(contacts[type], '_blank');
      }
    },
    
    executeCommand() {
      const command = this.currentCommand.toLowerCase().trim();
      let output = '';
      
      switch (command) {
        case 'help':
          output = `Commandes disponibles:
  help      - Affiche cette aide
  about     - Informations personnelles
  skills    - Liste des compétences
  projects  - Projets réalisés
  contact   - Informations de contact
  clear     - Efface l'écran
  matrix    - Mode Matrix 🕶️
  joke      - Blague de développeur`;
          break;
          
        case 'about':
          output = `Gaël Röthlin - Développeur Full-Stack
Age: 19 ans
Location: Belfort, France
Passion: Créer des expériences web uniques
Status: Disponible pour de nouveaux projets`;
          break;
          
        case 'skills':
          output = `Compétences principales:
Frontend: HTML5, CSS3, JavaScript, Vue.js, React
Backend: Python, Node.js, PHP, MySQL
Tools: Git, Docker, Figma
Niveau: Expert en développement web moderne`;
          break;
          
        case 'projects':
          output = `Projets récents:
1. E-Commerce Platform [COMPLETED]
2. Task Manager App [IN PROGRESS]  
3. Portfolio Website [LIVE]`;
          break;
          
        case 'contact':
          output = `Contactez-moi:
Email: gael.rothlin@proton.me
GitHub: github.com/moonlight58
Instagram: @osiris._25`;
          break;
          
        case 'clear':
          this.commandOutput = '';
          this.currentCommand = '';
          return;
          
        case 'matrix':
          output = `Chargement de Matrix...
01001101 01100001 01110100 01110010 01101001 01111000
Erreur: Pilule rouge non trouvée 💊`;
          break;
          
        case 'joke': {
          const jokes = [
            "Pourquoi les développeurs préfèrent-ils le dark mode ?\nParce que la lumière attire les bugs ! 🐛",
            "Comment appelle-t-on un développeur qui ne debug pas ?\nUn développeur optimiste ! 😄",
            "99 bugs in the code, 99 bugs...\nTake one down, patch it around...\n127 bugs in the code! 🎵"
          ];
          output = jokes[Math.floor(Math.random() * jokes.length)];
          break;
        }
          
        default:
          output = `Commande '${command}' non reconnue. Tapez 'help' pour voir les commandes disponibles.`;
      }
      
      this.commandOutput = output;
      this.currentCommand = '';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

.ascii-container {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  background: #0a0a0a;
  color: #00ff41;
  min-height: 100vh;
  min-width: 99vw;
  padding: 20px;
  overflow-x: auto;
}

/* Terminal Header */
.terminal-header {
  background: #1a1a1a;
  border: 2px solid #00ff41;
  border-bottom: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.btn.red { background: #ff5555; }
.btn.yellow { background: #ffff55; }
.btn.green { background: #55ff55; }

.terminal-title {
  color: #00ff41;
  font-weight: bold;
  flex: 1;
  text-align: center;
}

/* ASCII Art Section */
.ascii-art-section {
  border: 2px solid #00ff41;
  border-top: none;
  background: #111;
  padding: 20px;
  text-align: center;
}

.ascii-logo {
  color: #00ff41;
  font-size: 0.6rem;
  line-height: 1;
  text-shadow: 0 0 10px #00ff41;
  animation: glow 2s ease-in-out infinite alternate;
  margin: 0;
  white-space: pre;
}

@keyframes glow {
  from { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41; }
  to { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
}

.glitch-text {
  font-size: 1.2rem;
  margin-top: 20px;
  animation: glitch 0.3s infinite;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes glitch {
  0% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
  100% { transform: translateX(0); }
}

/* Terminal Content */
.terminal-content {
  border: 2px solid #00ff41;
  border-top: none;
  background: #0a0a0a;
  padding: 20px;
  min-height: 600px;
}

/* Boot Sequence */
.boot-sequence {
  font-family: 'JetBrains Mono', monospace;
}

.boot-line {
  opacity: 0.3;
  margin: 5px 0;
  transition: opacity 0.3s ease;
}

.boot-line.active {
  opacity: 1;
  color: #00ff41;
}

.prompt {
  color: #00ff41;
  margin-right: 10px;
}

.cursor {
  animation: blink 1s infinite;
  color: #00ff41;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Main Interface */
.ascii-section {
  margin: 30px 0;
  border: 1px solid #333;
  background: rgba(0, 255, 65, 0.02);
}

.section-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.ascii-border, .ascii-title {
  font-family: 'JetBrains Mono', monospace;
  color: #00ff41;
  text-align: center;
  white-space: pre;
}

.ascii-title {
  font-weight: bold;
}

.ascii-content {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  margin: 20px 0;
}

.pixel-character {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  line-height: 1;
}

.char-line {
  color: #00ff41;
  text-shadow: 0 0 5px #00ff41;
}

.text-content {
  flex: 1;
}

.typing-text {
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.6;
  margin: 0;
  animation: typewriter 3s steps(200) 1s both;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.progress-bar {
  width: 100%;
  height: 20px;
  border: 1px solid #00ff41;
  background: #0a0a0a;
  margin-top: 20px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff41, #00cc33);
  transition: width 2s ease;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Skills Section */
.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-category {
  border-left: 3px solid #00ff41;
  padding-left: 20px;
}

.category-title {
  color: #00ff41;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.skill-item {
  border: 1px solid #333;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(0, 255, 65, 0.05);
  display: flex;
  align-items: center;
  gap: 15px;
}

.skill-item:hover, .skill-item.active {
  border-color: #00ff41;
  background: rgba(0, 255, 65, 0.1);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
}

.skill-icon {
  color: #00ff41;
  font-size: 1.5rem;
}

.skill-name {
  flex: 1;
  font-weight: bold;
}

.skill-level {
  display: flex;
  gap: 2px;
}

.level-bar {
  color: #333;
  font-size: 0.8rem;
}

.level-bar.filled {
  color: #00ff41;
  text-shadow: 0 0 5px #00ff41;
}

/* Projects Section */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.project-item {
  border: 1px solid #333;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(0, 255, 65, 0.02);
}

.project-item:hover, .project-item.selected {
  border-color: #00ff41;
  background: rgba(0, 255, 65, 0.05);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.file-icon {
  font-size: 1.2rem;
}

.project-name {
  flex: 1;
  font-weight: bold;
  color: #00ff41;
}

.project-status {
  color: #ffff55;
  font-size: 0.9rem;
}

.project-details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #333;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.tech-tag {
  background: rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 3px;
}

/* Contact Section */
.contact-menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid #333;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(0, 255, 65, 0.02);
}

.menu-item:hover {
  border-color: #00ff41;
  background: rgba(0, 255, 65, 0.1);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
}

.menu-icon {
  font-size: 1.2rem;
}

/* Terminal Input */
.terminal-input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #00ff41;
  background: rgba(0, 255, 65, 0.05);
}

.command-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #00ff41;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
}

.command-input::placeholder {
  color: #666;
}

.cursor-blink {
  animation: blink 1s infinite;
  color: #00ff41;
}

.command-output {
  margin-top: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  white-space: pre-wrap;
  color: #cccccc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ascii-container {
    padding: 10px;
  }
  
  .ascii-logo {
    font-size: 0.4rem;
  }
  
  .ascii-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-item {
    padding: 10px;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .ascii-container {
    padding: 5px;
    font-size: 0.9rem;
  }
  
  .terminal-header {
    padding: 8px 15px;
    flex-direction: column;
    gap: 10px;
  }
  
  .terminal-title {
    font-size: 0.9rem;
    text-align: left;
  }
  
  .ascii-logo {
    font-size: 0.3rem;
  }
  
  .glitch-text {
    font-size: 1rem;
    margin-top: 10px;
  }
  
  .terminal-content {
    padding: 15px 10px;
  }
  
  .ascii-section {
    margin: 20px 0;
  }
  
  .section-header .ascii-border,
  .section-header .ascii-title {
    font-size: 0.8rem;
  }
  
  .pixel-character {
    font-size: 0.6rem;
  }
  
  .typing-text {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .skill-item {
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .skill-level {
    align-self: flex-end;
  }
  
  .project-item {
    padding: 10px;
  }
  
  .project-details {
    margin-top: 10px;
    padding-top: 10px;
  }
  
  .tech-stack {
    gap: 5px;
  }
  
  .tech-tag {
    padding: 3px 6px;
    font-size: 0.7rem;
  }
  
  .menu-item {
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .terminal-input {
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .command-input {
    width: 100%;
  }
}

/* Animations supplémentaires */
@keyframes scanline {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
}

.ascii-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 2px;
  height: 100vh;
  background: linear-gradient(transparent, #00ff41, transparent);
  animation: scanline 3s linear infinite;
  z-index: 1000;
  pointer-events: none;
}

/* Effet de CRT (Cathode Ray Tube) */
.ascii-container::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
  pointer-events: none;
  z-index: 999;
}

/* Amélioration de l'accessibilité */
.skill-item:focus,
.project-item:focus,
.menu-item:focus {
  outline: 2px solid #00ff41;
  outline-offset: 2px;
}

.command-input:focus {
  box-shadow: 0 0 0 2px #00ff41;
}

/* Animation d'apparition des sections */
.ascii-section {
  animation: slideInFromBottom 0.6s ease-out;
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation pour les éléments interactifs */
.skill-item:active,
.project-item:active,
.menu-item:active {
  transform: scale(0.98);
}

/* Style pour le texte sélectionné */
::selection {
  background: rgba(0, 255, 65, 0.3);
  color: #ffffff;
}

::-moz-selection {
  background: rgba(0, 255, 65, 0.3);
  color: #ffffff;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
  border: 1px solid #333;
}

::-webkit-scrollbar-thumb {
  background: #00ff41;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00cc33;
}

/* Effet de clignotement pour les éléments actifs */
@keyframes activeGlow {
  0%, 100% { 
    box-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
  }
  50% { 
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.8), 
                0 0 30px rgba(0, 255, 65, 0.6);
  }
}

.skill-item.active {
  animation: activeGlow 1s ease-in-out infinite;
}

/* Style pour les états de chargement */
.loading {
  position: relative;
  color: transparent !important;
}

.loading::after {
  content: 'LOADING...';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #00ff41;
  animation: blink 1s infinite;
}

/* Effet Matrix pour la commande spéciale */
@keyframes matrix-rain {
  0% { transform: translateY(-100vh); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

.matrix-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);
}

.matrix-column {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #00ff41;
  animation: matrix-rain 3s linear infinite;
  white-space: nowrap;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .ascii-container {
    background: #000000;
    color: #ffffff;
  }
  
  .terminal-header,
  .ascii-section,
  .skill-item,
  .project-item,
  .menu-item {
    border-color: #ffffff;
  }
  
  .ascii-logo,
  .glitch-text,
  .prompt,
  .category-title,
  .project-name {
    color: #ffffff;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .ascii-container::before {
    display: none;
  }
}

/* Print styles */
@media print {
  .ascii-container {
    background: white;
    color: black;
  }
  
  .ascii-container::before,
  .ascii-container::after {
    display: none;
  }
  
  .terminal-input,
  .command-output {
    display: none;
  }
}
</style>