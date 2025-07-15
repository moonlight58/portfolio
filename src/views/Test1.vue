<template>
  <div class="internship-container">
    <!-- Back Button -->
    <div class="back-button-container">
      <button class="back-button" @click="$router.push('/')">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Retour
      </button>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="project-logo">
          <div class="logo-container">
            <h1 class="logo-text">Euphron</h1>
            <div class="logo-glow"></div>
          </div>
        </div>
        <img src="@/assets/Euphron.svg" class="project-image">
        <div class="hero-info">
          <h2 class="hero-title">Stage Web Full-Stack</h2>
          <p class="hero-subtitle">Learning Centre Claude Oytana • Besançon, France</p>
          <div class="duration-badge">Avril 2025 - Mai 2025 • 8 semaines</div>
        </div>
      </div>
    </div>

    <!-- Context Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🎯 Contexte et objectifs du projet</h2>
      </div>
      <div class="content-card">
        <p>
          J'ai eu l'opportunité de travailler en tant que stagiaire web full-stack au Learning Centre Claude Oytana à Besançon, France, d'avril 2025 à mai 2025. Ma mission était de créer une application mobile appelée « Euphron », permettant aux étudiants de l'Université de Franche-Comté de donner ou de prendre du matériel sportif d'occasion sur un système de don.
        </p>
        <p>
          La réalisation de cette application a été proposée par des étudiants en STAPS, à la suite d'une étude de marché portant sur l'accès au matériel sportif dans leur cursus. Cette étude a révélé que, si certaines écoles parviennent à fournir le matériel nécessaire à leurs étudiants, dans de nombreuses autres, ce sont les étudiants eux-mêmes qui doivent financer leur équipement.
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
          <strong>Contrainte principale :</strong> Aucun gain monétaire autorisé - tout devait être gratuit, basé sur la solidarité étudiante.
        </div>
      </div>
    </section>

    <!-- Role Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>👨‍💻 Mon rôle et responsabilités</h2>
      </div>
      <div class="content-card">
        <p>
          J'ai été chargé de réaliser l'entièreté de l'application web (compatible ordinateur et mobile) en totale autonomie. Mes responsabilités incluaient :
        </p>
        
        <div class="responsibilities-grid">
          <div class="responsibility-card">
            <div class="responsibility-icon">🎨</div>
            <h4>Conception visuelle</h4>
            <p>Design sur Figma pour validation client</p>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">💻</div>
            <h4>Développement frontend</h4>
            <p>Interface utilisateur responsive</p>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">⚙️</div>
            <h4>Développement backend</h4>
            <p>API et logique métier</p>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">🗄️</div>
            <h4>Base de données</h4>
            <p>Conception et gestion complète</p>
          </div>
          <div class="responsibility-card">
            <div class="responsibility-icon">🏢</div>
            <h4>Collaboration DSIN</h4>
            <p>Pour l'hébergement futur</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>⏱️ Organisation du projet</h2>
      </div>
      <div class="content-card">
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
          <p>Réunions hebdomadaires avec l'équipe de la BU et mon tuteur de stage. Utilisation de Git pour le versioning et Trello pour la gestion des tâches.</p>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🛠️ Choix techniques et architecture</h2>
      </div>
      <div class="content-card">
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
          <p>J'ai privilégié Vue.js car je maîtrise bien ce framework, contrairement à Angular ou React. Quasar était le choix idéal pour la compatibilité mobile native, répondant parfaitement aux exigences du projet.</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>⚡ Fonctionnalités développées</h2>
      </div>
      <div class="content-card">
        <div class="features-grid">
          <div class="feature-category">
            <h3>👤 Gestion utilisateur</h3>
            <ul>
              <li>Inscription / Connexion</li>
              <li>Modification du profil</li>
              <li>Système d'authentification</li>
            </ul>
          </div>
          
          <div class="feature-category">
            <h3>📦 Gestion des articles</h3>
            <ul>
              <li>Ajout d'articles sportifs</li>
              <li>Modification / Suppression</li>
              <li>Système de catégories</li>
            </ul>
          </div>
          
          <div class="feature-category">
            <h3>💬 Communication</h3>
            <ul>
              <li>Chat en temps réel (Socket.IO)</li>
              <li>Messagerie entre utilisateurs</li>
            </ul>
          </div>
          
          <div class="feature-category">
            <h3>⚙️ Administration</h3>
            <ul>
              <li>Gestion des catégories de sport</li>
              <li>Gestion des comptes utilisateurs</li>
              <li>Modération du contenu</li>
            </ul>
          </div>
        </div>
        
        <div class="highlight-card">
          <h4>💡 Partie la plus enrichissante</h4>
          <p>Le développement du chat en temps réel avec Socket.IO était une première pour moi. La documentation excellente m'a permis de comprendre rapidement les concepts et d'implémenter cette fonctionnalité avec succès.</p>
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
    <section class="content-section">
      <div class="section-header">
        <h2>🏗️ Architecture technique</h2>
      </div>
      <div class="diagram-card">
        <img src="@/assets/stage/Diagram.png" alt="Diagramme architecture frontend/backend" class="architecture-diagram" />
        <div class="diagram-caption">
          <em>Schéma du flux de communication entre le frontend (Vue/Quasar) et le backend (Express, Socket.io, MySQL).</em>
        </div>
      </div>
      <div class="content-card">
        <p>L'architecture de l'application repose sur une séparation claire entre le frontend, développé avec Quasar/Vue.js, et le backend, construit autour d'Express, Socket.io et MySQL.</p>
        
        <div class="architecture-sections">
          <div class="arch-section">
            <h4>🔄 Flux de données classiques (HTTP)</h4>
            <p>Lorsqu'un utilisateur interagit avec l'interface via son navigateur, ses actions sont prises en charge par les composants Vue, qui orchestrent l'affichage et la logique de l'application. Ces composants, lorsqu'ils ont besoin d'accéder à des données ou de déclencher des opérations côté serveur, font appel à des services JavaScript dédiés.</p>
          </div>
          
          <div class="arch-section">
            <h4>⚡ Communication temps réel (WebSockets)</h4>
            <p>Parallèlement à ce fonctionnement traditionnel, l'application intègre également une dimension temps réel grâce à Socket.io. Pour des fonctionnalités comme le chat ou les notifications instantanées, les composants Vue communiquent avec le serveur via le client Socket.io.</p>
          </div>
        </div>
        
        <div class="result-card">
          <h4>🎯 Résultat</h4>
          <p>L'ensemble du système permet à la fois une gestion efficace des données via des requêtes HTTP classiques et une communication instantanée grâce aux WebSockets, offrant à l'utilisateur une expérience fluide et réactive.</p>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🛡️ Sécurité et bonnes pratiques</h2>
      </div>
      <div class="content-card">
        <p>Durant le développement, j'ai appris l'importance de la sécurisation contre les injections SQL. J'ai implémenté une double protection :</p>
        
        <div class="security-methods">
          <div class="security-method security-method-stack">
            <div class="security-method-text">
              <h4>1. Vérification frontend (Regex)</h4>
              <p>Cette méthode côté frontend vérifie que l'utilisateur n'essaie pas de nuire au fonctionnement de l'application en utilisant une expression régulière. Cette expression vérifie que les champs (nom, email, téléphone) ne contiennent pas de caractères suspects comme ' " ; -- / * , etc.</p>
            </div>
            <div class="security-image-wrapper">
              <img src="@/assets/stage/RegexCheck.png" alt="Vérification Regex" class="security-image-large" />
            </div>
          </div>
          
          <div class="security-method security-method-stack">
            <div class="security-method-text">
              <h4>2. Requêtes préparées (Backend)</h4>
              <p>Les requêtes préparées (ou paramétrées) offrent une protection robuste car elles :</p>
              <ul>
                <li>Empêchent les injections SQL</li>
                <li>Sont supportées par tous les moteurs SQL modernes</li>
                <li>Constituent la base de tous les ORM modernes</li>
              </ul>
            </div>
            <div class="security-image-wrapper">
              <img src="@/assets/stage/PreparedQuery.png" alt="Requête préparée" class="security-image-large" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🔧 Défis techniques rencontrés</h2>
      </div>
      <div class="content-card">
        <div class="challenges-grid">
          <div class="challenge-card">
            <h4>Intégration Capacitor</h4>
            <div class="challenge-content">
              <div class="problem">
                <strong>Problème :</strong> Pour tester l'application mobile, je devais la connecter au serveur local. Malgré mes tentatives de création d'une adresse accessible via le réseau local, cette intégration s'est révélée problématique.
              </div>
              <div class="solution">
                <strong>Solution :</strong> J'ai mis cette partie de côté pour me concentrer sur le développement des fonctionnalités core, tout en maintenant la compatibilité mobile.
              </div>
            </div>
          </div>
          
          <div class="challenge-card">
            <h4>Tests utilisateurs limités</h4>
            <div class="challenge-content">
              <p>Seule une dizaine d'utilisateurs (étudiants STAPS et équipe BU) ont pu tester l'application en raison du manque de peaufinage à ce stade du développement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Status Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🚀 État d'avancement et suite à donner</h2>
      </div>
      <div class="content-card">
        <div class="status-grid">
          <div class="status-card current">
            <h4>Actuellement en développement</h4>
            <p>L'application n'a pas encore été mise en production, nécessitant encore du peaufinage et le développement des fonctionnalités restantes.</p>
          </div>
          
          <div class="status-card remaining">
            <h4>Fonctionnalités restantes</h4>
            <ul>
              <li>Gestion complète des articles en tant qu'admin</li>
              <li>Amélioration de la gestion utilisateurs (administration)</li>
              <li>Peaufinage du système de chat en temps réel</li>
            </ul>
          </div>
          
          <div class="status-card proposals">
            <h4>Mes propositions d'amélioration</h4>
            <ul>
              <li><strong>Optimisation stockage :</strong> Passage à deux bases de données si le stockage des images devient problématique</li>
              <li><strong>Performance chat :</strong> Migration du chat vers MongoDB pour améliorer l'efficacité des messages temps réel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🎓 Apprentissages et retour d'expérience</h2>
      </div>
      <div class="content-card">
        <div class="learning-grid">
          <div class="learning-section">
            <h3>Compétences techniques acquises</h3>
            <ul>
              <li>Maîtrise de Socket.IO pour la communication temps réel</li>
              <li>Approfondissement de la sécurité web (injections SQL, requêtes préparées)</li>
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
          <p>J'aurais préféré travailler en équipe pour plus d'efficacité. En étant seul, je n'ai pas pu réaliser autant de fonctionnalités que souhaité, bien que cela m'ait permis de développer mon autonomie et ma capacité à gérer un projet dans sa globalité.</p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="content-section">
      <div class="section-header">
        <h2>🧠 Compétences ciblées</h2>
      </div>
      <div class="content-card">
        <p>Durant ce stage, j'ai ciblé spécifiquement plusieurs compétences du référentiel officiel du B.U.T. Informatique :</p>
        
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-header">
              <h4>UE1 - Réaliser</h4>
              <span class="skill-subtitle">Élaborer une application informatique</span>
            </div>
            <ul>
              <li>Conception complète de l'application Euphron sur Figma</li>
              <li>Développement frontend avec Vue.js et Quasar</li>
              <li>Architecture backend avec Node.js et Express</li>
              <li>Intégration de fonctionnalités temps réel (Socket.IO)</li>
            </ul>
          </div>
          
          <div class="skill-card">
            <div class="skill-header">
              <h4>UE4 - Administrer</h4>
              <span class="skill-subtitle">Sécuriser des données</span>
            </div>
            <ul>
              <li>Implémentation de requêtes préparées contre les injections SQL</li>
              <li>Validation des données côté frontend (regex)</li>
              <li>Système d'authentification sécurisé</li>
            </ul>
          </div>
          
          <div class="skill-card">
            <div class="skill-header">
              <h4>UE6 - Collaborer</h4>
              <span class="skill-subtitle">Élaborer, gérer et transmettre de l'information</span>
            </div>
            <ul>
              <li>Communication régulière avec l'équipe de la BU</li>
              <li>Présentation des avancements lors des réunions</li>
              <li>Rédaction du document "suite à donner"</li>
            </ul>
          </div>
          
          <div class="skill-card">
            <div class="skill-header">
              <h4>UE4-5-6 - Transverse</h4>
              <span class="skill-subtitle">Lancer un nouveau projet</span>
            </div>
            <ul>
              <li>Prise d'initiative pour l'architecture technique</li>
              <li>Gestion autonome du planning et des priorités</li>
              <li>Adaptation aux changements de spécifications</li>
              <li>Propositions d'améliorations futures</li>
            </ul>
          </div>
        </div>
        
        <div class="synthesis-card">
          <h4>Synthèse des apprentissages</h4>
          <p>Ce stage m'a permis de mettre en pratique de manière concrète les compétences théoriques et pratiques acquises durant ma formation. L'autonomie complète sur le projet m'a particulièrement aidé à développer les aspects transversaux comme la gestion de projet et la communication client, tout en approfondissant mes compétences techniques en développement full-stack et en sécurité.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InternshipPage',
  mounted() {
    // Ajouter des animations d'entrée si nécessaire
    this.animateElements();
  },
  methods: {
    animateElements() {
      // Animation pour les éléments quand ils apparaissent
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      });

      document.querySelectorAll('.content-section').forEach(el => {
        observer.observe(el);
      });
    }
  }
}
</script>

<style scoped>
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  --accent-gradient: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --text-light: rgba(255, 255, 255, 0.9);
  --text-medium: rgba(255, 255, 255, 0.7);
  --shadow-glow: 0 8px 32px rgba(102, 126, 234, 0.3);
  --shadow-hover: 0 12px 40px rgba(102, 126, 234, 0.4);
}

.internship-container {
  font-family: "N27", sans-serif;
  margin-top: 8rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: var(--text-light);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  position: relative;
}

/* Bouton Retour */
.back-button-container {
  margin-bottom: 2rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-glow);
}

.back-button:hover {
  background: rgba(255,255,255,0.15);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.back-button:focus {
  outline: 2px solid rgba(102, 126, 234, 0.5);
  outline-offset: 2px;
}

.back-button svg {
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
}

.back-button:hover svg {
  transform: translateX(-4px);
}

/* Section Hero */
.hero-section {
  margin-bottom: 4rem;
  animation: fadeInUp 1s cubic-bezier(.4,0,.2,1);
}

.hero-content {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: var(--shadow-glow);
  backdrop-filter: blur(20px);
  position: relative;
  text-align: center;
  transition: all 0.3s ease;
}

.hero-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.project-logo {
  margin-bottom: 2rem;
}

.logo-container {
  position: relative;
  display: inline-block;
}

.logo-text {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  position: relative;
  z-index: 1;
}

.logo-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-gradient);
  opacity: 0.3;
  filter: blur(20px);
  z-index: -1;
}

.project-image {
  width: 120px;
  height: 120px;
  margin: 2rem auto;
  border-radius: 50%;
  padding: 1rem;
  background: var(--glass-bg);
  border: 2px solid var(--glass-border);
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
}

/* Sections de contenu */
.content-section {
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(.4,0,.2,1);
}

.content-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
  animation: slideInLeft 1s cubic-bezier(.4,0,.2,1);
}

.section-header h2 {
  font-size: 2.2rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
}

.content-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: var(--shadow-glow);
  transition: all 0.3s ease;
}

.content-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.content-card p {
  color: var(--text-medium);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

/* Grille d'objectifs */
.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.objective-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.objective-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.objective-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.objective-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Grille de responsabilités */
.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.responsibility-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.responsibility-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.responsibility-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.responsibility-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.responsibility-card p {
  color: var(--text-medium);
  margin: 0;
  font-size: 1rem;
}

/* Timeline */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-gradient);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  animation: slideInLeft 0.6s cubic-bezier(.4,0,.2,1);
}

.timeline-marker {
  width: 60px;
  height: 60px;
  background: var(--glass-bg);
  border: 2px solid var(--glass-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  font-weight: 700;
  color: var(--text-light);
  box-shadow: var(--shadow-glow);
  backdrop-filter: blur(10px);
}

.timeline-content {
  flex: 1;
  padding: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.timeline-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-content p {
  color: var(--text-medium);
  margin: 0;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 900px) {
  .internship-container {
    padding: 0 1.5rem;
    margin-top: 6rem;
  }

  .hero-content {
    padding: 2rem;
  }

  .objectives-grid,
  .responsibilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-marker {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .internship-container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .hero-content {
    padding: 1.5rem;
  }

  .content-card {
    padding: 1.5rem;
  }

  .timeline-item {
    flex-direction: column;
  }

  .timeline-marker {
    margin-bottom: 1rem;
  }

  .timeline::before {
    display: none;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}
</style>