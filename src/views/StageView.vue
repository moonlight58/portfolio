<template><template>
  <div class="internship-zone">
    <!-- Particules d'arrière-plan -->
    <div class="particles-container">
      <div v-for="i in 20" :key="i" class="particle"></div>
    </div>
    
    <!-- Hero Section -->
    <section class="hero-stage">
      <div class="hero-grid">
        <div class="hero-left">
          <div class="project-logo">
            <div class="logo-container">
              <h1 class="logo-text">{{ $t('InternshipPage.Hero.Title') }}</h1>
              <div class="logo-glow"></div>
            </div>
          </div>
          <div class="hero-info">
            <h2 class="hero-title">{{ $t('InternshipPage.Hero.JobTitle') }}</h2>
            <p class="hero-subtitle">{{ $t('InternshipPage.Hero.Location') }}</p>
            <div class="duration-badge">{{ $t('InternshipPage.Hero.Duration') }}</div>
          </div>
        </div>
        <div class="hero-right">
          <div class="project-visual">
            <img
              src="@/assets/Euphron.svg"
              class="project-image"
              alt="Logo Euphron"
            />
            <div class="visual-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Context Section -->
    <section class="context-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Context.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Context.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Context.Subtitle') }}</span>
        </h2>
      </div>
      <div class="context-content">
        <div class="content-wrapper">
          <p class="context-description">{{ $t('InternshipPage.Context.Description1') }}</p>
          <p class="context-description">{{ $t('InternshipPage.Context.Description2') }}</p>
          
          <div class="objectives-grid">
            <div class="objective-card">
              <div class="objective-icon">🏃‍♂️</div>
              <h4>{{ $t('InternshipPage.Context.Objective1Title') }}</h4>
              <p>{{ $t('InternshipPage.Context.Objective1Desc') }}</p>
            </div>
            <div class="objective-card">
              <div class="objective-icon">🤝</div>
              <h4>{{ $t('InternshipPage.Context.Objective2Title') }}</h4>
              <p>{{ $t('InternshipPage.Context.Objective2Desc') }}</p>
            </div>
            <div class="objective-card">
              <div class="objective-icon">♻️</div>
              <h4>{{ $t('InternshipPage.Context.Objective3Title') }}</h4>
              <p>{{ $t('InternshipPage.Context.Objective3Desc') }}</p>
            </div>
          </div>
          
          <div class="constraint-badge">
            <strong>{{ $t('InternshipPage.Context.ConstraintLabel') }}</strong> {{ $t('InternshipPage.Context.ConstraintText') }}
          </div>
        </div>
      </div>
    </section>

    <!-- Role Section -->
    <section class="role-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Role.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Role.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Role.Subtitle') }}</span>
        </h2>
      </div>
      <div class="role-content">
        <p class="role-description">{{ $t('InternshipPage.Role.Description') }}</p>
        
        <div class="responsibilities-grid">
          <div class="responsibility-card">
            <div class="responsibility-icon">🎨</div>
            <div class="card-inner">
              <h4>{{ $t('InternshipPage.Role.Responsibility1Title') }}</h4>
              <p>{{ $t('InternshipPage.Role.Responsibility1Desc') }}</p>
            </div>
            <div class="card-accent"></div>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">💻</div>
            <div class="card-inner">
              <h4>{{ $t('InternshipPage.Role.Responsibility2Title') }}</h4>
              <p>{{ $t('InternshipPage.Role.Responsibility2Desc') }}</p>
            </div>
            <div class="card-accent"></div>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">⚙️</div>
            <div class="card-inner">
              <h4>{{ $t('InternshipPage.Role.Responsibility3Title') }}</h4>
              <p>{{ $t('InternshipPage.Role.Responsibility3Desc') }}</p>
            </div>
            <div class="card-accent"></div>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">🗄️</div>
            <div class="card-inner">
              <h4>{{ $t('InternshipPage.Role.Responsibility4Title') }}</h4>
              <p>{{ $t('InternshipPage.Role.Responsibility4Desc') }}</p>
            </div>
            <div class="card-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Section -->
    <section class="organization-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Organization.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Organization.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Organization.Subtitle') }}</span>
        </h2>
      </div>
      <div class="organization-content">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1-2</div>
            <div class="timeline-content">
              <h4>{{ $t('InternshipPage.Organization.Week12Title') }}</h4>
              <p>{{ $t('InternshipPage.Organization.Week12Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h4>{{ $t('InternshipPage.Organization.Week3Title') }}</h4>
              <p>{{ $t('InternshipPage.Organization.Week3Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">4-8</div>
            <div class="timeline-content">
              <h4>{{ $t('InternshipPage.Organization.Week48Title') }}</h4>
              <p>{{ $t('InternshipPage.Organization.Week48Desc') }}</p>
            </div>
          </div>
        </div>
        
        <div class="methodology-card">
          <h4>{{ $t('InternshipPage.Organization.MethodologyTitle') }}</h4>
          <p>{{ $t('InternshipPage.Organization.MethodologyDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.TechStack.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.TechStack.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.TechStack.Subtitle') }}</span>
        </h2>
      </div>
      <div class="tech-content">
        <div class="tech-stack-grid">
          <div class="tech-stack-section">
            <h3>{{ $t('InternshipPage.TechStack.FrontendTitle') }}</h3>
            <div class="tech-list">
              <div class="tech-item">
                <span class="tech-icon">⚛️</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Frontend1Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Frontend1Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">📱</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Frontend2Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Frontend2Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🍍</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Frontend3Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Frontend3Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">⚡</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Frontend4Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Frontend4Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-stack-section">
            <h3>{{ $t('InternshipPage.TechStack.BackendTitle') }}</h3>
            <div class="tech-list">
              <div class="tech-item">
                <span class="tech-icon">🟢</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Backend1Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Backend1Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🚀</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Backend2Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Backend2Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🐬</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Backend3Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Backend3Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">💬</span>
                <div>
                  <strong>{{ $t('InternshipPage.TechStack.Backend4Name') }}</strong>
                  <p>{{ $t('InternshipPage.TechStack.Backend4Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="justification-card">
          <h4>{{ $t('InternshipPage.TechStack.JustificationTitle') }}</h4>
          <p>{{ $t('InternshipPage.TechStack.JustificationDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Features.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Features.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Features.Subtitle') }}</span>
        </h2>
      </div>
      <div class="features-content">
        <div class="features-grid">
          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">👤</span>
              <h3>{{ $t('InternshipPage.Features.Category1Title') }}</h3>
            </div>
            <ul>
              <li>{{ $t('InternshipPage.Features.Category1Item1') }}</li>
              <li>{{ $t('InternshipPage.Features.Category1Item2') }}</li>
              <li>{{ $t('InternshipPage.Features.Category1Item3') }}</li>
            </ul>
          </div>
          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">📦</span>
              <h3>{{ $t('InternshipPage.Features.Category2Title') }}</h3>
            </div>
            <ul>
              <li>{{ $t('InternshipPage.Features.Category2Item1') }}</li>
              <li>{{ $t('InternshipPage.Features.Category2Item2') }}</li>
              <li>{{ $t('InternshipPage.Features.Category2Item3') }}</li>
            </ul>
          </div>
          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">💬</span>
              <h3>{{ $t('InternshipPage.Features.Category3Title') }}</h3>
            </div>
            <ul>
              <li>{{ $t('InternshipPage.Features.Category3Item1') }}</li>
              <li>{{ $t('InternshipPage.Features.Category3Item2') }}</li>
            </ul>
          </div>
          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">⚙️</span>
              <h3>{{ $t('InternshipPage.Features.Category4Title') }}</h3>
            </div>
            <ul>
              <li>{{ $t('InternshipPage.Features.Category4Item1') }}</li>
              <li>{{ $t('InternshipPage.Features.Category4Item2') }}</li>
              <li>{{ $t('InternshipPage.Features.Category4Item3') }}</li>
            </ul>
          </div>
        </div>
        
        <div class="highlight-card">
          <h4>💡 {{ $t('InternshipPage.Features.HighlightTitle') }}</h4>
          <p>{{ $t('InternshipPage.Features.HighlightDesc') }}</p>
        </div>
        
        <div class="progress-card">
          <div class="progress-header">
            <h4>{{ $t('InternshipPage.Features.ProgressTitle') }}</h4>
            <span class="progress-percentage">{{ $t('InternshipPage.Features.ProgressPercentage') }}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 70%"></div>
          </div>
          <p>{{ $t('InternshipPage.Features.ProgressDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="architecture-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Architecture.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Architecture.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Architecture.Subtitle') }}</span>
        </h2>
      </div>
      <div class="architecture-content">
        <div class="diagram-container">
          <img
            src="@/assets/stage/Diagram.png"
            :alt="$t('InternshipPage.Architecture.DiagramAlt')"
            class="architecture-diagram"
          />
          <div class="diagram-caption">
            <em>{{ $t('InternshipPage.Architecture.DiagramCaption') }}</em>
          </div>
        </div>
        <div class="architecture-description">
          <p>{{ $t('InternshipPage.Architecture.Description') }}</p>
          <div class="architecture-sections">
            <div class="arch-section">
              <h4>🔄 {{ $t('InternshipPage.Architecture.Section1Title') }}</h4>
              <p>{{ $t('InternshipPage.Architecture.Section1Desc') }}</p>
            </div>
            <div class="arch-section">
              <h4>⚡ {{ $t('InternshipPage.Architecture.Section2Title') }}</h4>
              <p>{{ $t('InternshipPage.Architecture.Section2Desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Security.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Security.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Security.Subtitle') }}</span>
        </h2>
      </div>
      <div class="security-content">
        <p class="security-intro">{{ $t('InternshipPage.Security.Intro') }}</p>
        
        <div class="security-methods">
          <div class="security-method">
            <div class="security-method-content">
              <div class="security-method-text">
                <h4>{{ $t('InternshipPage.Security.Method1Title') }}</h4>
                <p>{{ $t('InternshipPage.Security.Method1Desc') }}</p>
              </div>
              <div class="security-image-wrapper">
                <img
                  src="@/assets/stage/RegexCheck.png"
                  :alt="$t('InternshipPage.Security.Method1Alt')"
                  class="security-image"
                />
              </div>
            </div>
          </div>
          <div class="security-method">
            <div class="security-method-content">
              <div class="security-method-text">
                <h4>{{ $t('InternshipPage.Security.Method2Title') }}</h4>
                <p>{{ $t('InternshipPage.Security.Method2Desc') }}</p>
                <ul>
                  <li>{{ $t('InternshipPage.Security.Method2Item1') }}</li>
                  <li>{{ $t('InternshipPage.Security.Method2Item2') }}</li>
                  <li>{{ $t('InternshipPage.Security.Method2Item3') }}</li>
                </ul>
              </div>
              <div class="security-image-wrapper">
                <img
                  src="@/assets/stage/PreparedQuery.png"
                  :alt="$t('InternshipPage.Security.Method2Alt')"
                  class="security-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Section -->
    <section class="learning-zone">
      <div class="section-intro">
        <span class="section-number">{{ $t('InternshipPage.Learning.SectionNumber') }}</span>
        <h2 class="section-heading">
          <span class="heading-main">{{ $t('InternshipPage.Learning.Title') }}</span>
          <span class="heading-sub">{{ $t('InternshipPage.Learning.Subtitle') }}</span>
        </h2>
      </div>
      <div class="learning-content">
        <div class="learning-grid">
          <div class="learning-section">
            <h3>{{ $t('InternshipPage.Learning.TechnicalTitle') }}</h3>
            <ul>
              <li>{{ $t('InternshipPage.Learning.Technical1') }}</li>
              <li>{{ $t('InternshipPage.Learning.Technical2') }}</li>
              <li>{{ $t('InternshipPage.Learning.Technical3') }}</li>
              <li>{{ $t('InternshipPage.Learning.Technical4') }}</li>
            </ul>
          </div>
          <div class="learning-section">
            <h3>{{ $t('InternshipPage.Learning.SoftTitle') }}</h3>
            <ul>
              <li>{{ $t('InternshipPage.Learning.Soft1') }}</li>
              <li>{{ $t('InternshipPage.Learning.Soft2') }}</li>
              <li>{{ $t('InternshipPage.Learning.Soft3') }}</li>
              <li>{{ $t('InternshipPage.Learning.Soft4') }}</li>
            </ul>
          </div>
        </div>
        
        <div class="reflection-card">
          <h4>{{ $t('InternshipPage.Learning.ReflectionTitle') }}</h4>
          <p>{{ $t('InternshipPage.Learning.ReflectionDesc') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "InternshipPage",
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll(
        ".section-intro, .responsibility-card, .timeline-item, .feature-category, .security-method"
      );
      elements.forEach((el) => observer.observe(el));
    },
  },
};
</script>

<style scoped>
.internship-zone {
  min-height: 100vh;
  background: var(--dark-bg);
  color: var(--text-primary);
  position: relative;
  overflow-x: hidden;

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --background-accent-color: rgba(247, 37, 133, 0.1);
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}

/* Particules d'arrière-plan */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-gradient);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    transform: translateY(-100px) scale(0);
    opacity: 0;
  }
}

.particle:nth-child(odd) {
  left: 10%;
  animation-delay: -5s;
}

.particle:nth-child(even) {
  left: 90%;
  animation-delay: -15s;
}

/* Back Button */
.back-button-container {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 1000;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.back-button:hover {
  transform: translateX(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 5px 20px rgba(247, 37, 133, 0.3);
}

/* Hero Section */
.hero-stage {
  padding: 120px 5% 100px;
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.hero-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 1s ease forwards;
}

.hero-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 1s ease 0.3s forwards;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.project-logo {
  margin-bottom: 30px;
}

.logo-container {
  position: relative;
  display: inline-block;
}

.logo-text {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.logo-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-gradient);
  filter: blur(20px);
  opacity: 0.3;
  z-index: -1;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.duration-badge {
  display: inline-block;
  padding: 10px 20px;
  background: rgba(247, 37, 133, 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 25px;
  color: var(--accent-color);
  font-weight: 600;
}

.project-visual {
  position: relative;
  text-align: center;
}

.project-image {
  max-width: 300px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(102, 126, 234, 0.3));
}

.visual-accent {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.1) 0%,
    transparent 50%
  );
  z-index: -1;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

/* Sections communes */
section:not(.hero-stage) {
  padding: 100px 5%;
  position: relative;
  z-index: 1;
}

.section-intro {
  max-width: 1200px;
  margin: 0 auto 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-intro.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  display: inline-block;
  padding: 5px 15px;
  background: var(--background-accent-color);
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heading-main {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.heading-sub {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 400;
}

/* Content wrappers */
.content-wrapper,
.context-content,
.role-content,
.organization-content,
.tech-content,
.features-content,
.architecture-content,
.security-content,
.learning-content {
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

/* Context Section */
.context-description,
.role-description,
.security-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.objective-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.objective-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
}

.objective-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.objective-card h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.objective-card p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.constraint-badge {
  background: rgba(247, 37, 133, 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 15px;
  padding: 20px;
  margin-top: 30px;
  color: var(--text-primary);
}

/* Responsibilities Grid */
.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.responsibility-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(30px);
}

.responsibility-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.responsibility-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  border-color: var(--accent-color);
}

.responsibility-icon {
  font-size: 2rem;
  margin-bottom: 20px;
  display: block;
}

.card-inner h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.card-inner p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary-gradient);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.responsibility-card:hover .card-accent {
  transform: translateX(0);
}

/* Timeline */
.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 30px;
  height: 100%;
  width: 2px;
  background: var(--primary-gradient);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 80px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.timeline-item.in-view {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 40px;
  background: var(--primary-gradient);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.timeline-content h4 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.methodology-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  margin-top: 40px;
  backdrop-filter: blur(10px);
}

.methodology-card h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
}

/* Tech Stack */
.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.tech-stack-section h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 25px;
  font-weight: 700;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.tech-item:hover {
  border-color: var(--accent-color);
  transform: translateX(5px);
}

.tech-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tech-item strong {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

.tech-item p {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
}

.justification-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.justification-card h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
}

/* Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.feature-category {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.feature-category.in-view {
  opacity: 1;
  transform: translateY(0);
}

.feature-category:hover {
  border-color: var(--accent-color);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.feature-icon {
  font-size: 1.8rem;
}

.feature-category h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 600;
}

.feature-category ul {
  list-style: none;
  padding: 0;
}

.feature-category li {
  color: var(--text-secondary);
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
}

.feature-category li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.highlight-card,
.reflection-card {
  background: rgba(247, 37, 133, 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
}

.highlight-card h4,
.reflection-card h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.progress-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.progress-header h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
}

.progress-percentage {
  color: var(--accent-color);
  font-size: 1.5rem;
  font-weight: 700;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: var(--primary-gradient);
  transition: width 1s ease;
}

/* Architecture */
.diagram-container {
  text-align: center;
  margin-bottom: 40px;
}

.architecture-diagram {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.diagram-caption {
  margin-top: 15px;
  color: var(--text-secondary);
  font-style: italic;
}

.architecture-description p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
}

.architecture-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.arch-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.arch-section h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
}

/* Security */
.security-methods {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.security-method {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.security-method.in-view {
  opacity: 1;
  transform: translateX(0);
}

.security-method-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  align-items: center;
}

.security-method-text h4 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.security-method-text p,
.security-method-text li {
  color: var(--text-secondary);
  line-height: 1.6;
}

.security-method-text ul {
  margin-top: 15px;
  padding-left: 20px;
}

.security-image-wrapper {
  text-align: center;
}

.security-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

/* Learning */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.learning-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.learning-section h3 {
  color: var(--text-primary);
  font-size: 1.4rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.learning-section ul {
  list-style: none;
  padding: 0;
}

.learning-section li {
  color: var(--text-secondary);
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  line-height: 1.6;
}

.learning-section li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .back-button-container {
    top: 20px;
    left: 20px;
  }

  section:not(.hero-stage) {
    padding: 80px 5%;
  }

  .hero-stage {
    padding: 100px 5% 80px;
  }

  .tech-stack-grid,
  .architecture-sections,
  .learning-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .security-method-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
  }

  .timeline-marker {
    width: 40px;
    height: 30px;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .objectives-grid,
  .responsibilities-grid,
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .content-wrapper {
    padding: 30px;
  }

  .section-intro {
    margin-bottom: 60px;
  }

  .heading-main {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
  }
}

@media (max-width: 480px) {
  .back-button {
    padding: 10px 15px;
    font-size: 0.9rem;
  }

  .content-wrapper,
  .methodology-card,
  .justification-card,
  .highlight-card,
  .reflection-card,
  .progress-card {
    padding: 20px;
  }

  section:not(.hero-stage) {
    padding: 60px 5%;
  }
}
</style>
