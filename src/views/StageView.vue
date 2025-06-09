<template>
  <div class="stage-view">
    <h2>📝 Internship Context</h2>
    <p>
      J'ai eu l'opportunité de travailler en tant que stagiaire web full-stack
      au Learning Centre Claude Oytana à Besançon, France, d'avril 2025 à mai
      2025. Ma mission était de créer une application mobile appelée « Euphron
      », permettant aux étudiants de l'Université de Franche-Comté de donner ou
      de prendre du matériel sportif d'occasion sur un système de don.
      L'objectif est de favoriser l'accès au sport tout en promouvant la
      solidarité entre étudiants.
    </p>
    <img src="../assets/Euphron.svg" alt="">
    <p>
      La réalisation de cette application a été proposée par des étudiants en
      STAPS, à la suite d’une étude de marché portant sur l’accès au matériel
      sportif dans leur cursus. Cette étude a révélé que, si certaines écoles
      parviennent à fournir le matériel nécessaire à leurs étudiants, dans de
      nombreuses autres, ce sont les étudiants eux-mêmes qui doivent financer
      leur équipement.
    </p>
    <p>
      Cette situation représente un coût important, parfois inaccessible, et
      constitue un frein à la pratique du sport. Face à ce constat, ces
      étudiants de l’UFR STAPS de Besançon ont proposé la création d’une
      application locale permettant aux étudiants de donner, prêter ou récupérer
      du matériel sportif d’occasion.
    </p>
    <p>
      L’objectif est double :
      <strong>promouvoir l’accès au sport pour tous les étudiants en Franche-Comté</strong>
      et <strong>encourager la solidarité étudiante</strong> en facilitant
      l’échange de matériel au sein de la communauté universitaire. Le projet
      s’inscrit également dans une démarche écoresponsable, en favorisant la
      <strong>réutilisation du matériel sportif</strong> et en réduisant la
      consommation de produits neufs, contribuant ainsi à une approche plus
      durable de la pratique sportive.
    </p>
    <br />
    <div>
      <h2>Sécurité</h2>
      <p>
        J'ai appris durant le développement de cette application que les
        utilisateurs peuvent faire de l'injection de requête SQL à travers les
        inputs qui sont mis à disposition. Pour éviter ceci, on peut faire deux
        types de vérifications, premièrement on peut faire une vérification des
        champs de texte remplis avec un <strong>système regex</strong> (voir
        Figure 1)
      </p>
      <div>
        <img src="../assets/stage/RegexCheck.png" alt="" />
        <p class="légende">(Figure 1)</p>
      </div>
      <p>
        C'est une bonne méthode (côté frontend) pour vérifier que l'utilisateur
        n'essaie pas de nuir au fonctionnement de l'application mais nous
        pouvons faire mieux (côté backend) en utilisant un système de
        <strong>requêtes préparées</strong>
      </p>
      <div>
        <img src="../assets/stage/PreparedQuery.png" alt="" />
        <p class="légende">(Figure 2)</p>
      </div>
      <p>
        Cette pratique d'utiliser les <strong>requêtes préparées</strong> ou
        appelée <strong>requêtes paramétrées</strong> est très bonne car elles:
      </p>
      <li>empêchent les injections SQL</li>
      <li>sont supportées par tous les moteurs SQL modernes</li>
      <li>sont la base de tous les ORM modernes</li>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
img {
  width: 100%;
  height: auto;
  margin-top: 1rem;
}

strong {
  color: #90a8ff;
}

.stage-view {
  margin-top: 6rem;
  width: 600px;
  text-align: justify;
}

.stage-view h2 {
  margin-bottom: 1.5rem;
}

.stage-view p {
  line-height: 1.5;
  margin-bottom: 1rem;
}
</style>
