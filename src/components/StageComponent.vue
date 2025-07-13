<template>
  <div class="stage-component section">    
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

/* Section Header - Style Neo-Glassmorphism */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #a8c5ff 0%, #b8a8ff 25%, #c8b8ff 50%, #d8c8ff 75%, #e8d8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(168, 197, 255, 0.3);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% {
    filter: drop-shadow(0 0 10px rgba(168, 197, 255, 0.3));
  }
  100% {
    filter: drop-shadow(0 0 20px rgba(168, 197, 255, 0.6));
  }
}

/* Internship Card - Neo-Glassmorphism Design */
.internship-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(168, 197, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 32px rgba(168, 197, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.internship-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(168, 197, 255, 0.6) 25%, 
    rgba(200, 168, 255, 0.8) 50%, 
    rgba(168, 197, 255, 0.6) 75%, 
    transparent 100%
  );
  border-radius: 24px 24px 0 0;
}

.internship-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(168, 197, 255, 0.03) 0%, 
    rgba(200, 168, 255, 0.05) 50%, 
    rgba(168, 197, 255, 0.03) 100%
  );
  border-radius: 24px;
  pointer-events: none;
}

.internship-card:hover {
  transform: translateY(-8px);
  border-color: rgba(168, 197, 255, 0.4);
  box-shadow: 
    0 16px 64px rgba(168, 197, 255, 0.2),
    0 4px 16px rgba(200, 168, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.12);
}

.internship-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.internship-description {
  margin-bottom: 1.5rem;
}

.intro-text {
  margin: 0;
  line-height: 1.8;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
  font-weight: 300;
  letter-spacing: 0.3px;
}

.stage-link {
  background: linear-gradient(135deg, #a8c5ff, #c8b8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding: 0 4px;
  border-radius: 8px;
}

.stage-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(168, 197, 255, 0.1), rgba(200, 184, 255, 0.1));
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stage-link:hover::before {
  opacity: 1;
}

.stage-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #a8c5ff, #c8b8ff);
  border-radius: 1px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.stage-link:hover::after {
  width: 100%;
}

.internship-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(168, 197, 255, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.detail-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(168, 197, 255, 0.3);
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(168, 197, 255, 0.1);
}

.detail-icon {
  background: linear-gradient(135deg, rgba(168, 197, 255, 0.2), rgba(200, 184, 255, 0.2));
  border-radius: 12px;
  padding: 8px;
  color: #a8c5ff;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(168, 197, 255, 0.3);
}

.detail-text {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.cta-section {
  margin-top: 2rem;
}

.internship-cta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(168, 197, 255, 0.15), rgba(200, 184, 255, 0.15));
  border: 2px solid rgba(168, 197, 255, 0.3);
  border-radius: 16px;
  color: #a8c5ff;
  padding: 1.25rem 2rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px rgba(168, 197, 255, 0.1);
}

.internship-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(168, 197, 255, 0.2), 
    transparent
  );
  transition: left 0.6s ease;
}

.internship-cta:hover::before {
  left: 100%;
}

.internship-cta:hover {
  background: linear-gradient(135deg, #a8c5ff, #c8b8ff);
  color: #1a1a2e;
  transform: translateY(-4px);
  box-shadow: 
    0 12px 32px rgba(168, 197, 255, 0.3),
    0 0 40px rgba(168, 197, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.cta-text {
  white-space: nowrap;
  font-weight: 600;
}

.cta-icon {
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.internship-cta:hover .cta-icon {
  transform: translateX(6px);
}

/* Visual Elements - Neo-Glassmorphism */
.internship-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  position: relative;
  z-index: 1;
}

.visual-element {
  position: relative;
  width: 180px;
  height: 180px;
}

.floating-icon {
  position: absolute;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, 
    rgba(168, 197, 255, 0.2), 
    rgba(200, 184, 255, 0.2)
  );
  border: 2px solid rgba(168, 197, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a8c5ff;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 32px rgba(168, 197, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.floating-icon:hover {
  transform: scale(1.1);
  box-shadow: 
    0 12px 48px rgba(168, 197, 255, 0.3),
    0 0 40px rgba(168, 197, 255, 0.2);
  border-color: rgba(168, 197, 255, 0.6);
}

.icon-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: float1 6s ease-in-out infinite;
}

.icon-2 {
  bottom: 30px;
  left: 10px;
  animation: float2 6s ease-in-out infinite 2s;
}

.icon-3 {
  bottom: 30px;
  right: 10px;
  animation: float3 6s ease-in-out infinite 4s;
}

@keyframes float1 {
  0%, 100% {
    transform: translateY(0px) translateX(-50%) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) translateX(-50%) rotate(5deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(-5deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .internship-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
  
  .internship-visual {
    height: 180px;
    order: -1;
  }
  
  .visual-element {
    width: 150px;
    height: 150px;
  }
  
  .floating-icon {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 768px) {
  .stage-component {
    margin-bottom: 3rem;
    padding: 1.5rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .internship-card {
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 20px;
  }
  
  .internship-content {
    gap: 1.5rem;
  }
  
  .intro-text {
    font-size: 1rem;
    text-align: left;
  }
  
  .internship-details {
    gap: 1rem;
  }
  
  .detail-item {
    padding: 0.75rem 1rem;
    border-radius: 12px;
  }
  
  .detail-icon {
    width: 32px;
    height: 32px;
  }
  
  .detail-text {
    font-size: 0.9rem;
  }
  
  .internship-cta {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
    border-radius: 12px;
  }
  
  .internship-visual {
    height: 140px;
  }
  
  .visual-element {
    width: 120px;
    height: 120px;
  }
  
  .floating-icon {
    width: 42px;
    height: 42px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .internship-card {
    padding: 1.25rem;
    gap: 1.25rem;
    border-radius: 16px;
  }
  
  .internship-content {
    gap: 1.25rem;
  }
  
  .intro-text {
    font-size: 0.95rem;
    line-height: 1.7;
  }
  
  .detail-item {
    padding: 0.625rem 0.875rem;
    gap: 0.75rem;
  }
  
  .detail-icon {
    width: 28px;
    height: 28px;
  }
  
  .detail-text {
    font-size: 0.85rem;
  }
  
  .internship-cta {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
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
  
  .floating-icon svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 380px) {
  .internship-card {
    padding: 1rem;
    margin: 0 -0.25rem;
  }
  
  .intro-text {
    font-size: 0.9rem;
  }
  
  .detail-text {
    font-size: 0.8rem;
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

/* Focus states pour l'accessibilité */
.internship-cta:focus {
  outline: 2px solid #a8c5ff;
  outline-offset: 2px;
}

.stage-link:focus {
  outline: 2px solid #a8c5ff;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Animations d'apparition */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stage-component {
  animation: fadeInUp 0.8s ease-out;
}

.internship-card {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>