<template>
  <div class="stage-component section">
    <div class="section-header">
      <h2 class="section-title">{{ $t('Internship') }}</h2>
    </div>
    
    <div class="internship-card">
      <div class="internship-content">
        <div class="internship-description">
          <p class="intro-text">
            {{ $t('InternshipContent1') }}
            <a
              href="https://bu.univ-fcomte.fr/bibliotheques/learning-centre-claude-oytana/"
              target="_blank"
              class="stage-link"
            >Learning Centre Claude Oytana</a>
            {{ $t('InternshipContent2') }}
          </p>
        </div>

        <div class="internship-details">
          <div class="detail-item">
            <div class="detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="detail-text">{{ $t('InternshipExperience') || 'Professional Experience' }}</span>
          </div>
          
          <div class="detail-item">
            <div class="detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span class="detail-text">{{ $t('InternshipLocation') || 'Université de Franche-Comté' }}</span>
          </div>
          
          <div class="detail-item">
            <div class="detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V1h-2v1H8V1H6v1H4.5C3.12 2 2.01 3.09 2.01 4.5L2 19.5C2 20.91 3.09 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.09 20.91 2 19.5 2z"/>
              </svg>
            </div>
            <span class="detail-text">{{ $t('InternshipDuration') || 'Academic Internship' }}</span>
          </div>
        </div>

        <div class="cta-section">
          <router-link
            class="internship-cta"
            to="/stage"
            target="_blank"
          >
            <span class="cta-text">{{ $t('InternshipMoreAbout') }}</span>
            <div class="cta-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
      
      <div class="internship-visual">
        <div class="visual-element">
          <div class="floating-icon icon-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
          </div>
          <div class="floating-icon icon-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="floating-icon icon-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.stage-component {
  font-family: "N27", sans-serif;
  margin-bottom: 4rem;
}

/* Section Header - Harmonisé avec Home.vue */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Internship Card - Style harmonisé */
.internship-card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
}

.internship-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.internship-card:hover {
  transform: translateY(-2px);
  border-color: rgba(144, 168, 255, 0.3);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

.internship-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.internship-description {
  margin-bottom: 1rem;
}

.intro-text {
  margin: 0;
  line-height: 1.7;
  font-size: 1rem;
  color: #e0e0e0;
  text-align: justify;
}

.stage-link {
  color: #90a8ff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.stage-link:hover {
  color: #fff;
}

.stage-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #90a8ff, #fff);
  transition: width 0.3s ease;
}

.stage-link:hover::after {
  width: 100%;
}

.internship-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
}

.detail-icon {
  color: #90a8ff;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.detail-text {
  color: #e0e0e0;
  font-size: 0.95rem;
  font-weight: 500;
}

.cta-section {
  margin-top: 1.5rem;
}

.internship-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 12px;
  color: #90a8ff;
  padding: 1rem 1.5rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.internship-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.internship-cta:hover::before {
  left: 100%;
}

.internship-cta:hover {
  background: #90a8ff;
  color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
}

.cta-text {
  white-space: nowrap;
}

.cta-icon {
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.internship-cta:hover .cta-icon {
  transform: translateX(4px);
}

/* Visual Elements */
.internship-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  position: relative;
}

.visual-element {
  position: relative;
  width: 150px;
  height: 150px;
}

.floating-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  background: rgba(144, 168, 255, 0.1);
  border: 2px solid rgba(144, 168, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90a8ff;
  animation: float 6s ease-in-out infinite;
  backdrop-filter: blur(10px);
}

.icon-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.icon-2 {
  bottom: 20px;
  left: 0;
  animation-delay: 2s;
}

.icon-3 {
  bottom: 20px;
  right: 0;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.icon-2 {
  animation-name: float-left;
}

.icon-3 {
  animation-name: float-right;
}

@keyframes float-left {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-right {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .internship-card {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .internship-visual {
    height: 150px;
    order: -1;
  }
  
  .visual-element {
    width: 120px;
    height: 120px;
  }
  
  .floating-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .stage-component {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .internship-card {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .internship-content {
    gap: 1.25rem;
  }
  
  .intro-text {
    font-size: 0.95rem;
    text-align: left;
  }
  
  .internship-details {
    gap: 0.75rem;
  }
  
  .detail-item {
    padding: 0.5rem 0;
  }
  
  .detail-text {
    font-size: 0.9rem;
  }
  
  .internship-cta {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
    width: 100%;
    justify-content: center;
  }
  
  .internship-visual {
    height: 120px;
  }
  
  .visual-element {
    width: 100px;
    height: 100px;
  }
  
  .floating-icon {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .internship-card {
    padding: 1rem;
    gap: 1rem;
  }
  
  .internship-content {
    gap: 1rem;
  }
  
  .intro-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .detail-item {
    padding: 0.375rem 0;
  }
  
  .detail-icon {
    width: 18px;
    height: 18px;
  }
  
  .detail-text {
    font-size: 0.85rem;
  }
  
  .internship-cta {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .internship-visual {
    height: 100px;
  }
  
  .visual-element {
    width: 80px;
    height: 80px;
  }
  
  .floating-icon {
    width: 32px;
    height: 32px;
  }
  
  .floating-icon svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 380px) {
  .internship-card {
    padding: 0.75rem;
    margin: 0 -0.25rem;
  }
  
  .intro-text {
    font-size: 0.85rem;
  }
  
  .detail-text {
    font-size: 0.8rem;
  }
  
  .internship-cta {
    padding: 0.625rem 0.875rem;
    font-size: 0.85rem;
  }
  
  .internship-visual {
    height: 80px;
  }
  
  .visual-element {
    width: 60px;
    height: 60px;
  }
  
  .floating-icon {
    width: 28px;
    height: 28px;
  }
  
  .floating-icon svg {
    width: 16px;
    height: 16px;
  }
}
</style>