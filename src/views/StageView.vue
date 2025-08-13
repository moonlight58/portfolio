<template>
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
              <h1 class="logo-text">Euphron</h1>
              <div class="logo-glow"></div>
            </div>
          </div>
          <div class="hero-info">
            <h2 class="hero-title">Stage Web Full-Stack</h2>
            <p class="hero-subtitle">
              Learning Centre Claude Oytana • Besançon, France
            </p>
            <div class="duration-badge">Avril 2025 - Mai 2025 • 8 semaines</div>
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
        <span class="section-number">01</span>
        <h2 class="section-heading">
          <span class="heading-main">Contexte & Objectifs</span>
          <span class="heading-sub">Mission et enjeux du projet</span>
        </h2>
      </div>

      <div class="context-content">
        <div class="content-wrapper">
          <p class="context-description">
            J'ai eu l'opportunité de travailler en tant que stagiaire web
            full-stack au Learning Centre Claude Oytana à Besançon, France,
            d'avril 2025 à mai 2025. Ma mission était de créer une application
            mobile appelée « Euphron », permettant aux étudiants de l'Université
            de Franche-Comté de donner ou de prendre du matériel sportif
            d'occasion sur un système de don.
          </p>
          <p class="context-description">
            La réalisation de cette application a été proposée par des étudiants
            en STAPS, à la suite d'une étude de marché portant sur l'accès au
            matériel sportif dans leur cursus. Cette étude a révélé que, si
            certaines écoles parviennent à fournir le matériel nécessaire à
            leurs étudiants, dans de nombreuses autres, ce sont les étudiants
            eux-mêmes qui doivent financer leur équipement.
          </p>

          <div class="objectives-grid">
            <div class="objective-card">
              <div class="objective-icon">🏃‍♂️</div>
              <h4>Promouvoir l'accès au sport</h4>
              <p>Pour tous les étudiants en Franche-Comté</p>
            </div>
            <div class="objective-card">
              <div class="objective-icon">🤝</div>
              <h4>Encourager la solidarité</h4>
              <p>En facilitant l'échange de matériel</p>
            </div>
            <div class="objective-card">
              <div class="objective-icon">♻️</div>
              <h4>Favoriser la réutilisation</h4>
              <p>Dans une démarche écoresponsable</p>
            </div>
          </div>

          <div class="constraint-badge">
            <strong>Contrainte principale :</strong> Aucun gain monétaire
            autorisé - tout devait être gratuit, basé sur la solidarité
            étudiante.
          </div>
        </div>
      </div>
    </section>

    <!-- Role Section -->
    <section class="role-zone">
      <div class="section-intro">
        <span class="section-number">02</span>
        <h2 class="section-heading">
          <span class="heading-main">Mon Rôle</span>
          <span class="heading-sub"
            >Responsabilités & développement autonome</span
          >
        </h2>
      </div>

      <div class="role-content">
        <p class="role-description">
          J'ai été chargé de réaliser l'entièreté de l'application web
          (compatible ordinateur et mobile) en totale autonomie.
        </p>

        <div class="responsibilities-grid">
          <div class="responsibility-card">
            <div class="responsibility-icon">🎨</div>
            <div class="card-inner">
              <h4>Conception visuelle</h4>
              <p>Design sur Figma pour validation client</p>
            </div>
            <div class="card-accent"></div>
          </div>

          <div class="responsibility-card">
            <div class="responsibility-icon">💻</div>
            <div class="card-inner">
              <h4>Développement frontend</h4>
              <p>Interface utilisateur responsive</p>
            </div>
            <div class="card-accent"></div>
          </div>

          <div class="responsibility-card">
            <div class="responsibility-icon">⚙️</div>
            <div class="card-inner">
              <h4>Développement backend</h4>
              <p>API et logique métier</p>
            </div>
            <div class="card-accent"></div>
          </div>

          <div class="responsibility-card">
            <div class="responsibility-icon">🗄️</div>
            <div class="card-inner">
              <h4>Base de données</h4>
              <p>Conception et gestion complète</p>
            </div>
            <div class="card-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Section -->
    <section class="organization-zone">
      <div class="section-intro">
        <span class="section-number">03</span>
        <h2 class="section-heading">
          <span class="heading-main">Organisation</span>
          <span class="heading-sub">Planning & méthodologie</span>
        </h2>
      </div>

      <div class="organization-content">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1-2</div>
            <div class="timeline-content">
              <h4>Semaines 1-2</h4>
              <p>Préparation du visuel et définition des fonctionnalités</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h4>Semaine 3</h4>
              <p>Recherche de technologies et réunions de validation</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">4-8</div>
            <div class="timeline-content">
              <h4>Semaines 4-8</h4>
              <p>Développement (frontend, backend, base de données)</p>
            </div>
          </div>
        </div>

        <div class="methodology-card">
          <h4>Méthodologie</h4>
          <p>
            Réunions hebdomadaires avec l'équipe de la BU et mon tuteur de
            stage. Utilisation de Git pour le versioning et Trello pour la
            gestion des tâches.
          </p>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-zone">
      <div class="section-intro">
        <span class="section-number">04</span>
        <h2 class="section-heading">
          <span class="heading-main">Stack Technique</span>
          <span class="heading-sub">Technologies & architecture</span>
        </h2>
      </div>

      <div class="tech-content">
        <div class="tech-stack-grid">
          <div class="tech-stack-section">
            <h3>Frontend</h3>
            <div class="tech-list">
              <div class="tech-item">
                <span class="tech-icon">⚛️</span>
                <div>
                  <strong>Vue.js 3</strong>
                  <p>Framework principal (Composition API, script setup)</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">📱</span>
                <div>
                  <strong>Quasar Framework</strong>
                  <p>UI framework pour la compatibilité mobile</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🍍</span>
                <div>
                  <strong>Pinia</strong>
                  <p>Gestion d'état (remplaçant de Vuex)</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">⚡</span>
                <div>
                  <strong>Socket.io-client</strong>
                  <p>Communication temps réel</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-stack-section">
            <h3>Backend</h3>
            <div class="tech-list">
              <div class="tech-item">
                <span class="tech-icon">🟢</span>
                <div>
                  <strong>Node.js</strong>
                  <p>Environnement d'exécution JavaScript</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🚀</span>
                <div>
                  <strong>Express.js</strong>
                  <p>Framework web</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🐬</span>
                <div>
                  <strong>MySQL</strong>
                  <p>Base de données relationnelle</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">💬</span>
                <div>
                  <strong>Socket.io</strong>
                  <p>WebSocket pour le chat temps réel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="justification-card">
          <h4>Justification des choix</h4>
          <p>
            J'ai privilégié Vue.js car je maîtrise bien ce framework,
            contrairement à Angular ou React. Quasar était le choix idéal pour
            la compatibilité mobile native, répondant parfaitement aux exigences
            du projet.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-zone">
      <div class="section-intro">
        <span class="section-number">05</span>
        <h2 class="section-heading">
          <span class="heading-main">Fonctionnalités</span>
          <span class="heading-sub">Développement & implémentation</span>
        </h2>
      </div>

      <div class="features-content">
        <div class="features-grid">
          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">👤</span>
              <h3>Gestion utilisateur</h3>
            </div>
            <ul>
              <li>Inscription / Connexion</li>
              <li>Modification du profil</li>
              <li>Système d'authentification</li>
            </ul>
          </div>

          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">📦</span>
              <h3>Gestion des articles</h3>
            </div>
            <ul>
              <li>Ajout d'articles sportifs</li>
              <li>Modification / Suppression</li>
              <li>Système de catégories</li>
            </ul>
          </div>

          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">💬</span>
              <h3>Communication</h3>
            </div>
            <ul>
              <li>Chat en temps réel (Socket.IO)</li>
              <li>Messagerie entre utilisateurs</li>
            </ul>
          </div>

          <div class="feature-category">
            <div class="feature-header">
              <span class="feature-icon">⚙️</span>
              <h3>Administration</h3>
            </div>
            <ul>
              <li>Gestion des catégories de sport</li>
              <li>Gestion des comptes utilisateurs</li>
              <li>Modération du contenu</li>
            </ul>
          </div>
        </div>

        <div class="highlight-card">
          <h4>💡 Partie la plus enrichissante</h4>
          <p>
            Le développement du chat en temps réel avec Socket.IO était une
            première pour moi. La documentation excellente m'a permis de
            comprendre rapidement les concepts et d'implémenter cette
            fonctionnalité avec succès.
          </p>
        </div>

        <div class="progress-card">
          <div class="progress-header">
            <h4>État d'avancement</h4>
            <span class="progress-percentage">70%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 70%"></div>
          </div>
          <p>des fonctionnalités réalisées</p>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="architecture-zone">
      <div class="section-intro">
        <span class="section-number">06</span>
        <h2 class="section-heading">
          <span class="heading-main">Architecture</span>
          <span class="heading-sub">Structure technique & flux de données</span>
        </h2>
      </div>

      <div class="architecture-content">
        <div class="diagram-container">
          <img
            src="@/assets/stage/Diagram.png"
            alt="Diagramme architecture frontend/backend"
            class="architecture-diagram"
          />
          <div class="diagram-caption">
            <em
              >Schéma du flux de communication entre le frontend (Vue/Quasar) et
              le backend (Express, Socket.io, MySQL).</em
            >
          </div>
        </div>

        <div class="architecture-description">
          <p>
            L'architecture de l'application repose sur une séparation claire
            entre le frontend, développé avec Quasar/Vue.js, et le backend,
            construit autour d'Express, Socket.io et MySQL.
          </p>

          <div class="architecture-sections">
            <div class="arch-section">
              <h4>🔄 Flux de données classiques (HTTP)</h4>
              <p>
                Lorsqu'un utilisateur interagit avec l'interface via son
                navigateur, ses actions sont prises en charge par les composants
                Vue, qui orchestrent l'affichage et la logique de l'application.
                Ces composants, lorsqu'ils ont besoin d'accéder à des données ou
                de déclencher des opérations côté serveur, font appel à des
                services JavaScript dédiés.
              </p>
            </div>

            <div class="arch-section">
              <h4>⚡ Communication temps réel (WebSockets)</h4>
              <p>
                Parallèlement à ce fonctionnement traditionnel, l'application
                intègre également une dimension temps réel grâce à Socket.io.
                Pour des fonctionnalités comme le chat ou les notifications
                instantanées, les composants Vue communiquent avec le serveur
                via le client Socket.io.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security-zone">
      <div class="section-intro">
        <span class="section-number">07</span>
        <h2 class="section-heading">
          <span class="heading-main">Sécurité</span>
          <span class="heading-sub">Protection & bonnes pratiques</span>
        </h2>
      </div>

      <div class="security-content">
        <p class="security-intro">
          Durant le développement, j'ai appris l'importance de la sécurisation
          contre les injections SQL. J'ai implémenté une double protection :
        </p>

        <div class="security-methods">
          <div class="security-method">
            <div class="security-method-content">
              <div class="security-method-text">
                <h4>1. Vérification frontend (Regex)</h4>
                <p>
                  Cette méthode côté frontend vérifie que l'utilisateur n'essaie
                  pas de nuire au fonctionnement de l'application en utilisant
                  une expression régulière. Cette expression vérifie que les
                  champs (nom, email, téléphone) ne contiennent pas de
                  caractères suspects comme ' " ; -- / * , etc.
                </p>
              </div>
              <div class="security-image-wrapper">
                <img
                  src="@/assets/stage/RegexCheck.png"
                  alt="Vérification Regex"
                  class="security-image"
                />
              </div>
            </div>
          </div>

          <div class="security-method">
            <div class="security-method-content">
              <div class="security-method-text">
                <h4>2. Requêtes préparées (Backend)</h4>
                <p>
                  Les requêtes préparées (ou paramétrées) offrent une protection
                  robuste car elles :
                </p>
                <ul>
                  <li>Empêchent les injections SQL</li>
                  <li>Sont supportées par tous les moteurs SQL modernes</li>
                  <li>Constituent la base de tous les ORM modernes</li>
                </ul>
              </div>
              <div class="security-image-wrapper">
                <img
                  src="@/assets/stage/PreparedQuery.png"
                  alt="Requête préparée"
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
        <span class="section-number">08</span>
        <h2 class="section-heading">
          <span class="heading-main">Apprentissages</span>
          <span class="heading-sub">Compétences & retour d'expérience</span>
        </h2>
      </div>

      <div class="learning-content">
        <div class="learning-grid">
          <div class="learning-section">
            <h3>Compétences techniques acquises</h3>
            <ul>
              <li>Maîtrise de Socket.IO pour la communication temps réel</li>
              <li>
                Approfondissement de la sécurité web (injections SQL, requêtes
                préparées)
              </li>
              <li>Expérience complète du développement full-stack</li>
              <li>Utilisation de Quasar pour le développement mobile</li>
            </ul>
          </div>

          <div class="learning-section">
            <h3>Compétences transversales</h3>
            <ul>
              <li>Autonomie dans la gestion d'un projet complet</li>
              <li>Adaptabilité face aux changements de spécifications</li>
              <li>Communication client et gestion des attentes</li>
              <li>Prise d'initiatives et propositions d'améliorations</li>
            </ul>
          </div>
        </div>

        <div class="reflection-card">
          <h4>Si c'était à refaire</h4>
          <p>
            J'aurais préféré travailler en équipe pour plus d'efficacité. En
            étant seul, je n'ai pas pu réaliser autant de fonctionnalités que
            souhaité, bien que cela m'ait permis de développer mon autonomie et
            ma capacité à gérer un projet dans sa globalité.
          </p>
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
