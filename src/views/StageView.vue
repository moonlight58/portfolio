<template>
  <div class="stage-view">
    <!-- Scrollspy Navigation -->
    <nav class="scrollspy-nav">
      <ul class="nav-list">
        <li>
          <a
            @click="scrollToSection('contexte')"
            :class="{ active: activeSection === 'contexte' }"
            >🎯 Contexte</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('role')"
            :class="{ active: activeSection === 'role' }"
            >👨‍💻 Mon rôle (UE4 - UE5 - UE6)</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('organisation')"
            :class="{ active: activeSection === 'organisation' }"
            >⏱️ Organisation</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('technologies')"
            :class="{ active: activeSection === 'technologies' }"
            >🛠️ Technologies (UE1)</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('fonctionnalites')"
            :class="{ active: activeSection === 'fonctionnalites' }"
            >⚡ Fonctionnalités</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('defis')"
            :class="{ active: activeSection === 'defis' }"
            >🔧 Défis techniques</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('securite')"
            :class="{ active: activeSection === 'securite' }"
            >🛡️ Sécurité (UE4)</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('avancement')"
            :class="{ active: activeSection === 'avancement' }"
            >🚀 État d'avancement</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('apprentissages')"
            :class="{ active: activeSection === 'apprentissages' }"
            >🎓 Apprentissages</a
          >
        </li>
        <li>
          <a
            @click="scrollToSection('compétences')"
            :class="{ active: activeSection === 'compétences' }"
            >🧠 Compétences ciblées</a
          >
        </li>
      </ul>
    </nav>

    <!-- 1. Contexte et objectifs -->
    <section id="contexte" class="section">
      <h2>🎯 Contexte et objectifs du projet</h2>
      <p>
        J'ai eu l'opportunité de travailler en tant que stagiaire web full-stack
        au Learning Centre Claude Oytana à Besançon, France, d'avril 2025 à mai
        2025. Ma mission était de créer une application mobile appelée « Euphron
        », permettant aux étudiants de l'Université de Franche-Comté de donner
        ou de prendre du matériel sportif d'occasion sur un système de don.
      </p>
      <img src="../assets/Euphron.svg" alt="Logo Euphron" class="logo" />

      <p>
        La réalisation de cette application a été proposée par des étudiants en
        STAPS, à la suite d'une étude de marché portant sur l'accès au matériel
        sportif dans leur cursus. Cette étude a révélé que, si certaines écoles
        parviennent à fournir le matériel nécessaire à leurs étudiants, dans de
        nombreuses autres, ce sont les étudiants eux-mêmes qui doivent financer
        leur équipement.
      </p>

      <p>
        Le projet s'est développé en parallèle d'un événement existant appelé
        <strong>"Troc Party sport"</strong> organisé par la bibliothèque
        universitaire, où un troc était organisé pendant une journée. L'idée
        était de fusionner ces deux initiatives en une seule application
        numérique permanente.
      </p>

      <div class="objectives">
        <p>L'objectif était triple :</p>
        <ul>
          <li>
            <strong>Promouvoir l'accès au sport</strong> pour tous les étudiants
            en Franche-Comté
          </li>
          <li>
            <strong>Encourager la solidarité étudiante</strong> en facilitant
            l'échange de matériel
          </li>
          <li>
            <strong>Favoriser la réutilisation</strong> dans une démarche
            écoresponsable
          </li>
        </ul>
        <p class="constraint">
          <strong>Contrainte principale :</strong> Aucun gain monétaire autorisé
          - tout devait être gratuit, basé sur la solidarité étudiante.
        </p>
      </div>
    </section>

    <!-- 2. Mon rôle et responsabilités -->
    <section id="role" class="section">
      <h2>
        👨‍💻 Mon rôle et responsabilités (<a
          @click="scrollToSection('transverse')"
          class="transverse-link"
          >UE4 - UE5 - UE6</a
        >)
      </h2>
      <p>
        J'ai été chargé de réaliser
        <strong>l'entièreté de l'application web</strong>
        (compatible ordinateur et mobile) en totale autonomie. Mes
        responsabilités incluaient :
      </p>
      <ul>
        <li>
          Conception du visuel sur <strong>Figma</strong> pour validation client
        </li>
        <li>Développement <strong>frontend</strong> (interface utilisateur)</li>
        <li>
          Développement <strong>backend/serveur</strong> (API et logique métier)
        </li>
        <li>Conception et gestion de la <strong>base de données</strong></li>
        <li>Collaboration avec la <strong>D</strong>irection des <strong>S</strong>ystèmes d'<strong>I</strong>nformation et du <strong>N</strong>umérique (<strong>DSIN</strong>) pour l'hébergement futur</li>
      </ul>
      <p>
        Cette autonomie m'a permis de prendre des initiatives tout en respectant
        les besoins clients, même lors de changements de spécifications.
      </p>
    </section>

    <!-- 3. Organisation du projet -->
    <section id="organisation" class="section">
      <h2>⏱️ Organisation du projet (8 semaines)</h2>
      <div class="timeline">
        <div class="timeline-item">
          <span class="week">Semaines 1-2</span>
          <span class="task"
            >Préparation du visuel et définition des fonctionnalités</span
          >
        </div>
        <div class="timeline-item">
          <span class="week">Semaine 3</span>
          <span class="task"
            >Recherche de technologies et réunions de validation</span
          >
        </div>
        <div class="timeline-item">
          <span class="week">Semaines 4-8</span>
          <span class="task"
            >Développement (frontend, backend, base de données)</span
          >
        </div>
      </div>

      <p>
        <strong>Méthodologie :</strong> Réunions hebdomadaires avec l'équipe de
        la BU et mon tuteur de stage. Utilisation de <strong>Git</strong> pour
        le versioning et <strong>Trello</strong> pour la gestion des tâches.
      </p>
    </section>

    <!-- 4. Choix techniques et architecture -->
    <section id="technologies" class="section">
      <h2>
        🛠️ Choix techniques et architecture (<a
          @click="scrollToSection('ue1')"
          class="ue1-link"
          >UE1</a
        >)
      </h2>

      <div class="tech-stack">
        <div class="tech-category">
          <h3>Frontend</h3>
          <ul>
            <li>
              <strong>Vue.js 3</strong> - Framework principal (Composition API,
              script setup)
            </li>
            <li>
              <strong>Quasar Framework</strong> - UI framework pour la
              compatibilité mobile
            </li>
            <li>
              <strong>Pinia</strong> - Gestion d'état (remplaçant de Vuex)
            </li>
            <li>
              <strong>Socket.io-client</strong> - Communication temps réel
            </li>
            <li>
              <strong>Capacitor</strong> - Transformation en app mobile native
            </li>
            <li><strong>Axios</strong> - Requêtes HTTP</li>
          </ul>
        </div>

        <div class="tech-category">
          <h3>Backend</h3>
          <ul>
            <li>
              <strong>Node.js</strong> - Environnement d'exécution JavaScript
            </li>
            <li><strong>Express.js</strong> - Framework web</li>
            <li><strong>MySQL</strong> - Base de données relationnelle</li>
            <li>
              <strong>Socket.io</strong> - WebSocket pour le chat temps réel
            </li>
            <li>
              <strong>Architecture MVC</strong> - Models, Services, Controllers,
              Routes
            </li>
          </ul>
        </div>
      </div>

      <p>
        <strong>Justification des choix :</strong> J'ai privilégié Vue.js car je
        maîtrise bien ce framework, contrairement à Angular ou React. Quasar
        était le choix idéal pour la compatibilité mobile native, répondant
        parfaitement aux exigences du projet.
      </p>
    </section>

    <!-- 5. Fonctionnalités développées -->
    <section id="fonctionnalites" class="section">
      <h2>⚡ Fonctionnalités développées</h2>

      <div class="features-grid">
        <div class="feature-category">
          <h3>Gestion utilisateur</h3>
          <ul>
            <li>Inscription / Connexion</li>
            <li>Modification du profil</li>
            <li>Système d'authentification</li>
          </ul>
        </div>

        <div class="feature-category">
          <h3>Gestion des articles</h3>
          <ul>
            <li>Ajout d'articles sportifs</li>
            <li>Modification / Suppression</li>
            <li>Système de catégories</li>
          </ul>
        </div>

        <div class="feature-category">
          <h3>Communication</h3>
          <ul>
            <li>Chat en temps réel (Socket.IO)</li>
            <li>Messagerie entre utilisateurs</li>
          </ul>
        </div>

        <div class="feature-category">
          <h3>Administration</h3>
          <ul>
            <li>Gestion des catégories de sport</li>
            <li>Gestion des comptes utilisateurs</li>
            <li>Modération du contenu</li>
          </ul>
        </div>
      </div>

      <p class="highlight">
        <strong>Partie la plus enrichissante :</strong> Le développement du chat
        en temps réel avec Socket.IO était une première pour moi. La
        documentation excellente m'a permis de comprendre rapidement les
        concepts et d'implémenter cette fonctionnalité avec succès.
      </p>

      <div class="progress">
        <p>
          <strong>État d'avancement :</strong> 70% des fonctionnalités réalisées
        </p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 70%"></div>
        </div>
      </div>
    </section>

    <!-- 6. Défis techniques rencontrés -->
    <section id="defis" class="section">
      <h2>🔧 Défis techniques rencontrés</h2>

      <div class="challenge">
        <h3>Intégration Capacitor</h3>
        <p>
          <strong>Problème :</strong> Pour tester l'application mobile, je
          devais la connecter au serveur local. Malgré mes tentatives de
          création d'une adresse accessible via le réseau local, cette
          intégration s'est révélée problématique.
        </p>
        <p>
          <strong>Solution :</strong> J'ai mis cette partie de côté pour me
          concentrer sur le développement des fonctionnalités core, tout en
          maintenant la compatibilité mobile.
        </p>
      </div>

      <div class="challenge">
        <h3>Tests utilisateurs limités</h3>
        <p>
          Seule une dizaine d'utilisateurs (étudiants STAPS et équipe BU) ont pu
          tester l'application en raison du manque de peaufinage à ce stade du
          développement.
        </p>
      </div>
    </section>

    <!-- 7. Sécurité et bonnes pratiques -->
    <section id="securite" class="section">
      <h2>
        🛡️ Sécurité et bonnes pratiques (<a
          @click="scrollToSection('ue4')"
          class="ue4-link"
          >UE4</a
        >)
      </h2>
      <p>
        Durant le développement, j'ai appris l'importance de la sécurisation
        contre les injections SQL. J'ai implémenté une double protection :
      </p>

      <div class="security-method">
        <h3>1. Vérification frontend (Regex)</h3>
        <img src="../assets/stage/RegexCheck.png" alt="Vérification Regex" />
        <p class="legend">(Figure 1 - Système de validation regex)</p>
        <p>
          Cette méthode côté frontend vérifie que l'utilisateur n'essaie pas de
          nuire au fonctionnement de l'application en utilisant une <strong>EX</strong>pression
          <strong>RÉG</strong>ulière (<strong>REGEX</strong>). Cette expression vérifie que les champs (nom,
          email, téléphone) ne contiennent pas de caractères suspects comme <span class="special-character"> ' "
          ; -- / * </span> , etc. Elle refuse également toute chaîne contenant des
          mots-clés SQL classiques (<span class="special-character">SELECT</span>, <span class="special-character">DROP</span>, <span class="special-character">INSERT</span>, etc.). Cependant, le
          contrôle côté frontend n’est qu’un confort pour l'utilisateur. Il est
          impératif de vérifier également côté backend, ce qui peut être fait
          grâce aux requêtes préparées.
        </p>
      </div>

      <div class="security-method">
        <h3>2. Requêtes préparées (Backend)</h3>
        <img src="../assets/stage/PreparedQuery.png" alt="Requêtes préparées" />
        <p class="legend">(Figure 2 - Implémentation des requêtes préparées)</p>
        <p>
          Les <strong>requêtes préparées</strong> (ou paramétrées) offrent une
          protection robuste car elles :
        </p>
        <ul>
          <li>Empêchent les injections SQL</li>
          <li>Sont supportées par tous les moteurs SQL modernes</li>
          <li>Constituent la base de tous les ORM modernes</li>
        </ul>
      </div>
    </section>

    <!-- 8. État d'avancement et suite à donner -->
    <section id="avancement" class="section">
      <h2>🚀 État d'avancement et suite à donner</h2>

      <div class="status">
        <h3>Actuellement en développement</h3>
        <p>
          L'application n'a pas encore été mise en production, nécessitant
          encore du peaufinage et le développement des fonctionnalités
          restantes.
        </p>
      </div>

      <div class="remaining-tasks">
        <h3>Fonctionnalités restantes</h3>
        <ul>
          <li>Gestion complète des articles en tant qu'admin</li>
          <li>Amélioration de la gestion utilisateurs (administration)</li>
          <li>Peaufinage du système de chat en temps réel</li>
        </ul>
      </div>

      <div class="proposals">
        <h3>Mes propositions d'amélioration</h3>
        <ul>
          <li>
            <strong>Optimisation stockage :</strong> Passage à deux bases de
            données si le stockage des images devient problématique (séparation
            des données)
          </li>
          <li>
            <strong>Performance chat :</strong> Migration du chat vers MongoDB
            pour améliorer l'efficacité des messages temps réel
          </li>
        </ul>
      </div>

      <p>
        J'ai laissé un document complet "suite à donner" répertoriant mes
        réalisations, les tâches restantes et mes recommandations techniques.
      </p>
    </section>

    <!-- 9. Apprentissages et retour d'expérience -->
    <section id="apprentissages" class="section">
      <h2>🎓 Apprentissages et retour d'expérience</h2>

      <div class="learnings">
        <h3>Compétences techniques acquises</h3>
        <ul>
          <li>
            Maîtrise de <strong>Socket.IO</strong> pour la communication temps
            réel
          </li>
          <li>
            Approfondissement de la <strong>sécurité web</strong> (injections
            SQL, requêtes préparées)
          </li>
          <li>
            Expérience complète du <strong>développement full-stack</strong>
          </li>
          <li>
            Utilisation de <strong>Quasar</strong> pour le développement mobile
          </li>
        </ul>
      </div>

      <div class="learnings">
        <h3>Compétences transversales</h3>
        <ul>
          <li>
            <strong>Autonomie</strong> dans la gestion d'un projet complet
          </li>
          <li>
            <strong>Adaptabilité</strong> face aux changements de spécifications
          </li>
          <li><strong>Communication client</strong> et gestion des attentes</li>
          <li>
            <strong>Prise d'initiatives</strong> et propositions d'améliorations
          </li>
        </ul>
      </div>

      <div class="reflection">
        <h3>Si c'était à refaire</h3>
        <p>
          J'aurais préféré travailler en équipe pour plus d'efficacité. En étant
          seul, je n'ai pas pu réaliser autant de fonctionnalités que souhaité,
          bien que cela m'ait permis de développer mon autonomie et ma capacité
          à gérer un projet dans sa globalité.
        </p>
      </div>
    </section>

    <!-- 10. Compétences ciblées -->
    <section id="compétences" class="section">
      <h2>🧠 Compétences ciblées</h2>
      <p>
        Durant ce stage, j'ai ciblé spécifiquement plusieurs compétences du
        <a
          href="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf#page=17"
          target="_blank"
          class="official-link"
        >
          référentiel officiel du B.U.T. Informatique</a
        >
        en fonction des missions qui m'ont été confiées :
      </p>

      <div class="competences-grid">
        <div class="competence-card ue1" id="ue1">
          <div class="competence-header">
            <span class="ue-badge">UE1</span>
            <h3>Réaliser</h3>
          </div>
          <div class="competence-title">
            <span>Élaborer une application informatique</span>
          </div>
          <div class="competence-details">
            <p><strong>Mise en application :</strong></p>
            <ul>
              <li>Conception complète de l'application Euphron sur Figma</li>
              <li>Développement frontend avec Vue.js et Quasar</li>
              <li>Architecture backend avec Node.js et Express</li>
              <li>Intégration de fonctionnalités temps réel (Socket.IO)</li>
            </ul>
          </div>
        </div>

        <div class="competence-card ue4" id="ue4">
          <div class="competence-header">
            <span class="ue-badge">UE4</span>
            <h3>Administrer</h3>
          </div>
          <div class="competence-title"><span>Sécuriser des données</span></div>
          <div class="competence-details">
            <p><strong>Mise en application :</strong></p>
            <ul>
              <li>
                Implémentation de requêtes préparées contre les injections SQL
              </li>
              <li>Validation des données côté frontend (regex)</li>
              <li>Système d'authentification sécurisé</li>
            </ul>
          </div>
        </div>

        <div class="competence-card ue6" id="ue6">
          <div class="competence-header">
            <span class="ue-badge">UE6</span>
            <h3>Collaborer</h3>
          </div>
          <div class="competence-title">
            <span>Élaborer, gérer et transmettre de l'information</span>
          </div>
          <div class="competence-details">
            <p><strong>Mise en application :</strong></p>
            <ul>
              <li>Communication régulière avec l'équipe de la BU</li>
              <li>Présentation des avancements lors des réunions</li>
              <li>Rédaction du document "suite à donner"</li>
            </ul>
          </div>
        </div>

        <div class="competence-card transverse" id="transverse">
          <div class="competence-header">
            <span class="ue-badge multi">UE4-5-6</span>
            <h3>Transverse</h3>
          </div>
          <div class="competence-title">
            <span>Lancer un nouveau projet</span>
          </div>
          <div class="competence-details">
            <p><strong>Mise en application :</strong></p>
            <ul>
              <li>Prise d'initiative pour l'architecture technique</li>
              <li>Gestion autonome du planning et des priorités</li>
              <li>Adaptation aux changements de spécifications</li>
              <li>Propositions d'améliorations futures</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="competences-synthesis">
        <h3>Synthèse des apprentissages</h3>
        <p>
          Ce stage m'a permis de mettre en pratique de manière concrète les
          compétences théoriques et pratiques acquises durant ma formation. L'autonomie
          complète sur le projet m'a particulièrement aidé à développer les
          aspects transversaux comme la gestion de projet et la communication
          client, tout en approfondissant mes compétences techniques en
          développement full-stack et en sécurité.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeSection = ref("contexte");

// Fonction pour faire défiler vers une section avec offset
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  const sections = [
    "contexte",
    "role",
    "organisation",
    "technologies",
    "fonctionnalites",
    "defis",
    "securite",
    "avancement",
    "apprentissages",
    "compétences",
    "ue1",
    "ue4",
    "ue6",
    "transverse",
  ];

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 200) {
        activeSection.value = sections[i];
        break;
      }
    }
  }
};

onMounted(() => {
  // Smooth scroll pour tous les navigateurs
  document.documentElement.style.scrollBehavior = "smooth";

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Scrollspy Navigation */
.scrollspy-nav {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 1000;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(144, 168, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  max-height: 80vh;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 200px;
}

.nav-list li {
  margin-bottom: 0.5rem;
}

.nav-list a {
  display: block;
  color: #888;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-left: 2px solid transparent;
  cursor: pointer;
}

.nav-list a:hover {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.1);
  border-left-color: #90a8ff;
}

.nav-list a.active {
  color: #90a8ff;
  background: rgba(144, 168, 255, 0.15);
  border-left-color: #90a8ff;
  font-weight: 600;
}

.scrollspy-nav::-webkit-scrollbar {
  width: 4px;
}

.scrollspy-nav::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.scrollspy-nav::-webkit-scrollbar-thumb {
  background: #90a8ff;
  border-radius: 2px;
}

.stage-view {
  margin-top: 6rem;
  width: 600px;
  text-align: justify;
  line-height: 1.6;
}

.section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
}

.section:last-child {
  border-bottom: none;
}

.stage-view h2 {
  margin-bottom: 1.5rem;
  color: #90a8ff;
  font-size: 1.5rem;
}

.stage-view h3 {
  margin-bottom: 1rem;
  color: #b8c5ff;
  font-size: 1.2rem;
}

.stage-view p {
  margin-bottom: 1rem;
}

.stage-view li {
  margin-bottom: 0.5rem;
}

strong {
  color: #90a8ff;
}

.special-character {
  color: #ff6b6b;
  font-weight: bold;
  background-color: #4d3a3a;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.logo {
  width: 200px;
  height: auto;
  margin: 1rem auto;
  display: block;
}

img {
  width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 8px;
}

.legend {
  text-align: center;
  font-style: italic;
  color: #888;
  margin-bottom: 1rem;
}

.objectives {
  background: rgba(144, 168, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.constraint {
  background: rgba(255, 193, 144, 0.1);
  padding: 1rem;
  border-left: 4px solid #ffc190;
  margin-top: 1rem;
}

.timeline {
  background: rgba(144, 168, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
}

.week {
  background: #90a8ff;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  min-width: 120px;
  text-align: center;
  margin-right: 1rem;
}

.task {
  flex: 1;
}

.tech-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

.tech-category {
  background: rgba(144, 168, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
}

.tech-category h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1rem 0;
}

.feature-category {
  background: rgba(144, 168, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
}

.feature-category h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

.highlight {
  background: rgba(144, 168, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #90a8ff;
  margin: 1rem 0;
}

.progress {
  margin: 1.5rem 0;
}

.progress-bar {
  background: rgba(255, 255, 255, 0.1);
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.progress-fill {
  background: linear-gradient(90deg, #90a8ff, #b8c5ff);
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.challenge {
  background: rgba(255, 193, 144, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #ffc190;
}

.challenge h3 {
  color: #ffc190;
  margin-bottom: 1rem;
}

.security-method {
  margin: 2rem 0;
}

.security-method h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

.status,
.remaining-tasks,
.proposals {
  background: rgba(144, 168, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.status h3,
.remaining-tasks h3,
.proposals h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

.learnings {
  background: rgba(144, 168, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.learnings h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

.reflection {
  background: rgba(144, 168, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #90a8ff;
  margin: 1rem 0;
}

.reflection h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

/* Nouveaux styles pour la section compétences */
.official-link {
  color: #90a8ff;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.official-link:hover {
  color: #b8c5ff;
}

.competences-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.competence-card {
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid;
  background: rgba(144, 168, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.competence-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(144, 168, 255, 0.15);
}

.competence-card.ue1 {
  border-left-color: #ff6b6b;
  background: rgba(255, 107, 107, 0.05);
}

.competence-card.ue4 {
  border-left-color: #4ecdc4;
  background: rgba(78, 205, 196, 0.05);
}

.competence-card.ue6 {
  border-left-color: #45b7d1;
  background: rgba(69, 183, 209, 0.05);
}

.competence-card.transverse {
  border-left-color: #f9ca24;
  background: rgba(249, 202, 36, 0.05);
}

.ue1-link,
.ue4-link,
.transverse-link {
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.competence-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ue-badge {
  background: linear-gradient(45deg, #90a8ff, #b8c5ff);
  color: #1a1a1a;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 1rem;
}

.ue-badge.multi {
  background: linear-gradient(45deg, #f9ca24, #f0932b);
}

.competence-header h3 {
  color: #90a8ff;
  margin: 0;
  font-size: 1.1rem;
}

.competence-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(144, 168, 255, 0.2);
}

.competence-details {
  color: #ccc;
}

.competence-details p {
  margin-bottom: 0.5rem;
}

.competence-details strong {
  color: #90a8ff;
}

.competence-details ul {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
}

.competence-details li {
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
}

.competences-synthesis {
  background: rgba(144, 168, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #90a8ff;
  margin-top: 2rem;
}

.competences-synthesis h3 {
  color: #90a8ff;
  margin-bottom: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .scrollspy-nav {
    display: none;
  }

  .stage-view {
    width: 100%;
    padding: 0 1rem;
  }

  .tech-stack,
  .features-grid,
  .competences-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .week {
    margin-bottom: 0.5rem;
    margin-right: 0;
  }
}
</style>
