<template>
  <div class="stage-component">
    <h2>Internship</h2>
    <div class="stage-context">
      <p>
        I had the opportunity to work as a web full-stack intern at the
        <a
          href="https://bu.univ-fcomte.fr/bibliotheques/learning-centre-claude-oytana/"
          target="_blank"
          class="stage-link"
          >Learning Centre Claude Oytana</a
        >
        in Besançon, France, from April 2025 to May 2025. My mission was to
        create a mobile application called “Euphron”, enabling students at the
        Université de Franche-Comté to give or take second-hand sports equipment
        on a donation system. The aim is to encourage access to sport while
        promoting solidarity between students.
      </p>

      <div class="spacer">
        <router-link
          class="fancy"
          to="/stage"
          target="_blank"
        >
          <span class="top-key"></span>
          <span class="text">More about the internship</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
* {
  text-align: justify;
}

.stage-component h2 {
  padding-bottom: 1rem;
}

.stage-link {
  color: #00bcd4;
  text-decoration: none;
}

.stage-button {
  border: 1px white solid;
  border-radius: 5px;
  width: fit-content;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: inline-block;
}

.stage-button:hover {
  background-color: white;
  color: black;
}
</style>
