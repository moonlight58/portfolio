<template>
  <nav class="signalis-navbar">
    <div class="nav-overlay"></div>
    <div class="nav-content">
      <div class="nav-brand">
        <div class="brand-icon">
          <img src="@/assets/Euphron.svg" alt="Logo" />
        </div>
        <div class="brand-text">EUPHRON.SYS</div>
      </div>

      <div class="nav-links">
        <router-link 
          v-for="(link, index) in navLinks" 
          :key="index"
          :to="link.path"
          class="nav-link"
          @click="playSystemSound"
        >
          <div class="link-content">
            <span class="link-id">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="link-text">{{ link.name }}</span>
          </div>
          <div class="link-indicator"></div>
        </router-link>
      </div>

      <div class="nav-status">
        <div class="status-indicator">
          <div class="indicator-dot"></div>
          <span class="status-text">SYSTEM ONLINE</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SignalisNavBar',
  data() {
    return {
      navLinks: [
        { name: 'HOME', path: '/' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'DRAWINGS', path: '/drawings' },
        { name: 'ABOUT', path: '/about' }
      ]
    }
  },
  methods: {
    playSystemSound() {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 440;
      oscillator.type = 'square';
      gainNode.gain.value = 0.05;
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  }
}
</script>

<style scoped>
.signalis-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  font-family: 'Share Tech Mono', monospace;
}

.nav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid rgba(57, 255, 20, 0.3);
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.1);
}

.nav-content {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 15px;
}

.brand-icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.8);
}

.brand-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #ff6b9d;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: rgba(57, 255, 20, 0.8);
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  position: relative;
  padding: 8px 12px;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(57, 255, 20, 0.3);
}

.link-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.link-id {
  color: rgba(57, 255, 20, 0.6);
  font-size: 10px;
}

.link-text {
  letter-spacing: 1px;
}

.link-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: rgba(57, 255, 20, 0.5);
  box-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
  transition: width 0.3s ease;
}

.nav-link:hover .link-indicator,
.router-link-active .link-indicator {
  width: 100%;
}

.nav-link:hover {
  color: rgba(57, 255, 20, 1);
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.5);
}

.nav-status {
  display: flex;
  align-items: center;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  background: rgb(57, 255, 20);
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 8px rgba(57, 255, 20, 0.8);
}

.status-text {
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  color: rgb(57, 255, 20);
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1;
    box-shadow: 0 0 8px rgba(57, 255, 20, 0.8);
  }
  50% { 
    opacity: 0.5;
    box-shadow: 0 0 4px rgba(57, 255, 20, 0.4);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .nav-content {
    justify-content: space-between;
  }
}

/* Additional Effects */
.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 107, 157, 0.1);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-link:hover::before {
  transform: scaleX(1);
}
</style>
