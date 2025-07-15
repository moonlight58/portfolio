<template>
  <div class="uiux-container">
    <div class="styles-grid">
      <!-- Ready or Not Style -->
      <div class="style-card tactical-theme" @click="navigateToStyle('readyornot')">
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

      <!-- Placeholder pour styles futurs -->
      <div class="style-card coming-soon">
        <div class="style-preview">
          <h3 class="style-name">Cyberpunk</h3>
          <div class="style-description">
            Prochainement...
          </div>
          <div class="locked-overlay">
            <span class="locked-text">EN DÉVELOPPEMENT</span>
          </div>
        </div>
      </div>

      <div class="style-card coming-soon">
        <div class="style-preview">
          <h3 class="style-name">Minimaliste</h3>
          <div class="style-description">
            Prochainement...
          </div>
          <div class="locked-overlay">
            <span class="locked-text">EN DÉVELOPPEMENT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UI-UX',
  methods: {
    navigateToStyle(style) {
      this.$router.push(`/competences/${style}`);
    }
  }
}
</script>

<style scoped>
.uiux-container {
  width: 100%;
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

/* Coming Soon Style */
.coming-soon {
  position: relative;
  filter: grayscale(100%);
  opacity: 0.7;
  cursor: not-allowed;
}

.coming-soon .style-name {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.8rem;
  text-align: center;
  margin: 0 0 1rem 0;
}

.coming-soon .style-description {
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 0.9rem;
}

.locked-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.locked-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
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
}
</style>
