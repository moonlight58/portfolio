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
            @click="scrollToSection('architecture')"
            :class="{ active: activeSection === 'architecture' }"
            >🏗️ Architecture technique</a
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
        <li>
          Collaboration avec la <strong>D</strong>irection des
          <strong>S</strong>ystèmes d'<strong>I</strong>nformation et du
          <strong>N</strong>umérique (<strong>DSIN</strong>) pour l'hébergement
          futur
        </li>
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

    <!-- Architecture technique -->
    <div class="section">
      <section id="architecture" class="architecture-section">
        <h3>🏗️ Architecture technique</h3>

        <div class="diagram-container">
          <img
            src="../assets/stage/Diagram.png"
            alt="Diagramme d'architecture de l'application Euphron"
            class="architecture-diagram"
          />
          <p class="legend">
            (Figure 3 - Architecture globale de l'application)
          </p>
        </div>

        <div class="architecture-explanation">
          <p>
            L'architecture de l'application repose sur une
            <strong>séparation claire</strong> entre le frontend, développé avec
            Quasar/Vue.js, et le backend, construit autour d'Express, Socket.io
            et MySQL.
          </p>

          <div class="flow-description">
            <h4>🔄 Flux de données classiques (HTTP)</h4>
            <p>
              Lorsqu'un utilisateur interagit avec l'interface via son
              navigateur, ses actions sont prises en charge par les
              <strong>composants Vue</strong>, qui orchestrent l'affichage et la
              logique de l'application. Ces composants, lorsqu'ils ont besoin
              d'accéder à des données ou de déclencher des opérations côté
              serveur, font appel à des
              <strong>services JavaScript dédiés</strong>. Pour les échanges
              classiques, comme la récupération ou la modification de données
              (gestion des utilisateurs ou des articles), ces services utilisent
              <strong>Axios</strong> pour envoyer des requêtes HTTP au serveur
              Express.
            </p>
            <p>
              Ce dernier reçoit les requêtes via ses
              <strong>routes REST</strong>, traite la logique métier à travers
              des services Node.js, puis interagit avec la
              <strong>base de données MySQL</strong> pour lire ou écrire les
              informations nécessaires. Une fois l'opération terminée, la
              réponse est renvoyée au frontend sous forme de données JSON,
              permettant à l'interface de se mettre à jour en conséquence.
            </p>
          </div>

          <div class="flow-description">
            <h4>⚡ Communication temps réel (WebSockets)</h4>
            <p>
              Parallèlement à ce fonctionnement traditionnel, l'application
              intègre également une dimension temps réel grâce à
              <strong>Socket.io</strong>. Pour des fonctionnalités comme le chat
              ou les notifications instantanées, les composants Vue communiquent
              avec le serveur via le <strong>client Socket.io</strong>, qui
              établit une connexion WebSocket persistante.
            </p>
            <p>
              Les événements émis par le frontend sont captés par le
              <strong>serveur Socket.io</strong>, qui peut alors traiter ces
              messages, éventuellement interagir avec la base de données, puis
              redistribuer les informations en temps réel à tous les clients
              concernés.
            </p>
          </div>

          <div class="architecture-summary">
            <p>
              <strong>Résultat :</strong> L'ensemble du système permet à la fois
              une gestion efficace des données via des requêtes HTTP classiques
              et une communication instantanée grâce aux WebSockets, offrant à
              l'utilisateur une <strong>expérience fluide et réactive</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>

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
          nuire au fonctionnement de l'application en utilisant une
          <strong>EX</strong>pression <strong>RÉG</strong>ulière
          (<strong>REGEX</strong>). Cette expression vérifie que les champs
          (nom, email, téléphone) ne contiennent pas de caractères suspects
          comme <span class="special-character"> ' " ; -- / * </span> , etc.
          Elle refuse également toute chaîne contenant des mots-clés SQL
          classiques (<span class="special-character">SELECT</span>,
          <span class="special-character">DROP</span>,
          <span class="special-character">INSERT</span>, etc.). Cependant, le
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
          compétences théoriques et pratiques acquises durant ma formation.
          L'autonomie complète sur le projet m'a particulièrement aidé à
          développer les aspects transversaux comme la gestion de projet et la
          communication client, tout en approfondissant mes compétences
          techniques en développement full-stack et en sécurité.
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
    "architecture",
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
.stage-view {
  font-family: "N27", sans-serif;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 10rem;
  position: relative;
}

/* Navigation Scrollspy */
.scrollspy-nav {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 1000;
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 1rem;
  backdrop-filter: blur(20px);
  max-height: 80vh;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.scrollspy-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 0.5rem;
}

.nav-list a {
  display: block;
  padding: 0.75rem;
  color: #ccc;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.nav-list a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-list a:hover::before {
  left: 100%;
}

.nav-list a:hover,
.nav-list a.active {
  background: rgba(144, 168, 255, 0.1);
  color: #90a8ff;
  border-left: 3px solid #90a8ff;
}

/* Sections */
.section {
  margin-bottom: 4rem;
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.section h3 {
  color: #90a8ff;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
}

.section h4 {
  color: #90a8ff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
}

.section p {
  line-height: 1.7;
  color: #e0e0e0;
  margin-bottom: 1rem;
}

.section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.section li {
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
}

/* Logo */
.logo {
  display: block;
  margin: 2rem auto;
  max-width: 200px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.2);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Objectifs et contraintes */
.objectives {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
}

.objectives::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.constraint {
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
  color: #ff6b6b;
}

/* Timeline */
.timeline {
  margin: 2rem 0;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(144, 168, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #90a8ff;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  background: rgba(144, 168, 255, 0.1);
  transform: translateX(5px);
}

.week {
  font-weight: 600;
  color: #90a8ff;
  min-width: 120px;
  margin-right: 1rem;
}

.task {
  color: #e0e0e0;
}

/* Technologies */
.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tech-category {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.tech-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

/* Fonctionnalités */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-category {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.feature-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.15);
}

/* Highlight */
.highlight {
  background: rgba(144, 168, 255, 0.1);
  border: 1px solid rgba(144, 168, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid #90a8ff;
}

/* Progress Bar */
.progress {
  margin: 2rem 0;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(144, 168, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #90a8ff, #7B68EE);
  border-radius: 4px;
  transition: width 1s ease;
}

/* Architecture */
.architecture-section {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 2rem 0;
  position: relative;
}

.architecture-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.diagram-container {
  text-align: center;
  margin: 2rem 0;
}

.architecture-diagram {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.2);
  transition: transform 0.3s ease;
}

.architecture-diagram:hover {
  transform: scale(1.02);
}

.legend {
  font-style: italic;
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.flow-description,
.architecture-explanation,
.architecture-summary {
  margin: 2rem 0;
}

/* Défis */
.challenge {
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-left: 4px solid #ffc107;
}

/* Sécurité */
.security-method {
  background: rgba(40, 167, 69, 0.1);
  border: 1px solid rgba(40, 167, 69, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
}

.security-method::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #28a745, transparent);
}

.security-method img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.special-character {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  font-weight: 600;
}

/* État d'avancement */
.status,
.remaining-tasks,
.proposals {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

/* Apprentissages */
.learnings,
.reflection {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

/* Compétences */
.competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.competence-card {
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.competence-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.competence-card:hover::before {
  opacity: 1;
}

.competence-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
}

.competence-card.ue1 {
  background: rgba(74, 144, 226, 0.1);
  border: 1px solid rgba(74, 144, 226, 0.2);
}

.competence-card.ue1::before {
  background: linear-gradient(90deg, transparent, #4a90e2, transparent);
}

.competence-card.ue4 {
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.2);
}

.competence-card.ue4::before {
  background: linear-gradient(90deg, transparent, #2ecc71, transparent);
}

.competence-card.ue6 {
  background: rgba(230, 126, 34, 0.1);
  border: 1px solid rgba(230, 126, 34, 0.2);
}

.competence-card.ue6::before {
  background: linear-gradient(90deg, transparent, #e67e22, transparent);
}

.competence-card.transverse {
  background: rgba(155, 89, 182, 0.1);
  border: 1px solid rgba(155, 89, 182, 0.2);
}

.competence-card.transverse::before {
  background: linear-gradient(90deg, transparent, #9b59b6, transparent);
}

.competence-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ue-badge {
  background: linear-gradient(135deg, #90a8ff, #7B68EE);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.ue-badge.multi {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
}

.competence-title {
  font-size: 1.1rem;
  color: #90a8ff;
  font-weight: 600;
  margin-bottom: 1rem;
}

.competence-details ul {
  margin: 0.5rem 0;
}

.competences-synthesis {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
  position: relative;
}

.competences-synthesis::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

/* Liens */
.official-link,
.transverse-link,
.ue1-link,
.ue4-link {
  color: #90a8ff;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
}

.official-link:hover,
.transverse-link:hover,
.ue1-link:hover,
.ue4-link:hover {
  color: #fff;
  text-shadow: 0 0 8px #90a8ff;
}

.official-link::after,
.transverse-link::after,
.ue1-link::after,
.ue4-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #90a8ff;
  transition: width 0.3s ease;
}

.official-link:hover::after,
.transverse-link:hover::after,
.ue1-link:hover::after,
.ue4-link:hover::after {
  width: 100%;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .scrollspy-nav {
    position: static;
    transform: none;
    margin-bottom: 2rem;
    max-height: none;
    overflow: visible;
  }
  
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .nav-list li {
    margin-bottom: 0;
  }
  
  .nav-list a {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .stage-view {
    padding: 1rem;
  }

  .section {
    padding: 2rem 1rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .tech-stack {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .competences-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    flex-direction: column;
    text-align: center;
  }

  .week {
    min-width: auto;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .section h2 {
    font-size: 1.3rem;
  }

  .objectives,
  .tech-category,
  .feature-category {
    padding: 1rem;
  }

  .competence-card {
    padding: 1.5rem;
  }
}

/* Scrollbar personnalisée */
.scrollspy-nav::-webkit-scrollbar {
  width: 4px;
}

.scrollspy-nav::-webkit-scrollbar-track {
  background: rgba(144, 168, 255, 0.1);
  border-radius: 2px;
}

.scrollspy-nav::-webkit-scrollbar-thumb {
  background: #90a8ff;
  border-radius: 2px;
}

/* Animation d'entrée */
.section {
  animation: fadeInUp 0.6s ease forwards;
}

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

/* Effet de focus pour l'accessibilité */
.nav-list a:focus,
.competence-card:focus {
  outline: 2px solid #90a8ff;
  outline-offset: 2px;
}
</style>
