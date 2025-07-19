<template>
  <div class="uiux-container">
    <div class="styles-grid">
      <!-- Ready or Not Style -->
      <div class="style-card tactical-theme" @click="navigateToStyle('ReadyOrNot')">
        <div class="style-preview">
          <div class="tactical-overlay">
            <div class="tactical-line"></div>
            <div class="tactical-scan"></div>
          </div>
          <h3 class="style-name">Ready Or Not</h3>
          <div class="style-description">
            Interface tactique inspirée du jeu Ready or Not
          </div>
          <div class="tactical-status">
            <div class="status-dot"></div>
            <span>SYSTÈME OPÉRATIONNEL</span>
          </div>
        </div>
      </div>

      <!-- Neumorphism Style -->
      <div class="style-card neumorphism-theme" @click="navigateToStyle('Neumorphism')">
        <div class="style-preview">
          <div class="neumorphism-overlay">
            <div class="neumorphism-btn"></div>
          </div>
          <h3 class="style-name">Neumorphism</h3>
          <div class="style-description">
            Design moderne avec effets de profondeur et ombres douces
          </div>
        </div>
      </div>

      <div class="style-card minimalist-theme" @click="navigateToStyle('Minimalist')">
        <div class="style-preview">
          <div class="minimalist-overlay">
            <div class="minimalist-line"></div>
          </div>
          <h3 class="style-name">Minimaliste</h3>
          <div class="style-description">
            Design épuré et élégant inspiré de la typographie classique <br> (Brutalism + Swiss Design)
          </div>
          <div class="minimalist-accent"></div>
        </div>
      </div>
    </div>
    <div class="view-all-btn" @click="navigateToGallery">
      <span class="btn-icon">🎨</span>
      <span class="btn-text">View All UI Styles</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UI-UX',
  methods: {
    navigateToStyle(style) {
      this.$router.push(`/competences/${style}`);
    },
    navigateToGallery() {
      this.$router.push('/competences');
    }
  }
}
</script>

<style scoped>
.uiux-container {
  width: 100%;
  padding-top: 2rem;
}

.view-all-btn {
  margin: 0 auto 2rem;
  padding: 1rem 2rem;
  background: rgba(167, 139, 250, 0.1);
  border: 2px solid rgba(167, 139, 250, 0.2);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 300px;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background: rgba(167, 139, 250, 0.2);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.5rem;
}

.btn-text {
  font-size: 1.1rem;
  font-weight: 500;
}

.styles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.style-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.style-card:hover {
  transform: translateY(-5px);
}

.style-preview {
  padding: 2rem;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Ready Or Not Style */
.tactical-theme {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ff0000;
}

.tactical-theme:hover {
  box-shadow: 0 8px 32px rgba(255, 0, 0, 0.2);
}

.tactical-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.tactical-line {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-left: 2px solid #ff0000;
  border-top: 2px solid #ff0000;
}

.tactical-scan {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 0, 0, 0.5);
  animation: scan 2s linear infinite;
}

.tactical-theme .style-name {
  color: #ff0000;
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  text-align: center;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
}

.tactical-theme .style-description {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.tactical-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Orbitron', monospace;
  font-size: 0.8rem;
  color: #ff0000;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #ff0000;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

/* Neumorphism Style */
.neumorphism-theme {
  background: #1a1a1a;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.8),
    -8px -8px 16px rgba(255, 255, 255, 0.1);
}

.neumorphism-theme:hover {
  transform: translateY(-5px);
  box-shadow: 
    12px 12px 24px rgba(0, 0, 0, 0.8),
    -12px -12px 24px rgba(255, 255, 255, 0.1);
}

.neumorphism-theme .style-name {
  color: #e0e0e0;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.neumorphism-theme .style-description {
  color: #b0b0b0;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.neumorphism-overlay {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.neumorphism-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #1a1a1a;
  box-shadow: 
    inset 4px 4px 8px rgba(0, 0, 0, 0.8),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1);
}

.neumorphism-btn {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background: #1a1a1a;
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.8),
    -4px -4px 8px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.neumorphism-theme:hover .neumorphism-btn {
  box-shadow: 
    inset 4px 4px 8px rgba(0, 0, 0, 0.8),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1);
  transform: scale(0.95);
}

/* Minimalist Style */
.minimalist-theme {
  background: #ffffff;
  border: 3px solid #000000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.minimalist-theme:hover {
  transform: translateY(-5px);
  box-shadow: 20px 20px 0 rgba(0, 0, 0, 0.1);
}

.minimalist-theme .style-name {
  font-family: 'Crimson Text', serif;
  color: #000000;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.minimalist-theme .style-description {
  font-family: 'Crimson Text', serif;
  color: #666666;
  font-size: 1.1rem;
  font-style: italic;
  text-align: center;
  max-width: 80%;
  margin: 0 auto 2rem;
}

.minimalist-line {
  width: 100px;
  height: 3px;
  background-color: #000000;
  margin: 0 auto 2rem;
}

.minimalist-accent {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #000000;
}

@keyframes scan {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(250px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@media (max-width: 768px) {
  .styles-grid {
    grid-template-columns: 1fr;
  }
  
  .minimalist-theme .style-name {
    font-size: 1.5rem;
  }
  
  .minimalist-theme .style-description {
    font-size: 1rem;
  }
  
  .minimalist-line {
    width: 60px;
  }
}
</style>
