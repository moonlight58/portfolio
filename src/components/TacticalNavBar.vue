<template>
  <div class="tactical-navbar">
    <div class="nav-left">
      <div class="status-indicator"></div>
      <span class="system-id">SYS-001</span>
    </div>
    
    <div class="nav-center">
      <router-link 
        v-for="(link, index) in navLinks" 
        :key="index"
        :to="link.path"
        class="nav-link"
        @click="playSound()"
      >
        <span class="link-text">{{ link.text }}</span>
        <div class="link-indicator">
          <div class="indicator-dot"></div>
        </div>
      </router-link>
    </div>
    
    <div class="nav-right">
      <div class="system-time">{{ currentTime }}</div>
      <div class="system-status">TACTICAL MODE</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TacticalNavBar',
  data() {
    return {
      currentTime: '',
      navLinks: [
        { path: '/', text: 'COMMAND CENTER' },
        { path: '/projects', text: 'OPERATIONS' },
        { path: '/drawings', text: 'INTELLIGENCE' },
        { path: '/about-me', text: 'PERSONNEL' }
      ]
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    playSound() {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 1000;
      gainNode.gain.value = 0.05;
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  }
}
</script>

<style scoped>
.tactical-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 2px solid #ff0000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 1000;
  font-family: 'Orbitron', monospace;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #ff0000;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.system-id {
  font-size: 12px;
  font-weight: 700;
  color: #ff0000;
  letter-spacing: 1px;
}

.nav-center {
  display: flex;
  gap: 30px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 5px 10px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.nav-link:hover {
  border-color: #ff0000;
  background: rgba(255, 0, 0, 0.1);
}

.link-indicator {
  display: flex;
  align-items: center;
}

.indicator-dot {
  width: 4px;
  height: 4px;
  background: #ff0000;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover .indicator-dot {
  opacity: 1;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.system-time {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
}

.system-status {
  font-size: 12px;
  font-weight: 700;
  color: #ff0000;
  letter-spacing: 1px;
  padding: 4px 8px;
  border: 1px solid #ff0000;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@media (max-width: 768px) {
  .tactical-navbar {
    padding: 0 15px;
  }
  
  .nav-center {
    gap: 15px;
  }
  
  .nav-link {
    font-size: 12px;
  }
  
  .system-status {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-center {
    display: none;
  }
}
</style>
