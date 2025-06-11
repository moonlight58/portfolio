<template>
  <div class="stage-component">
    <h2>{{ $t('Internship') }}</h2>
    <div class="stage-context">
      <p>
        {{ $t('InternshipContent1') }}
        <a
          href="https://bu.univ-fcomte.fr/bibliotheques/learning-centre-claude-oytana/"
          target="_blank"
          class="stage-link"
          >Learning Centre Claude Oytana</a
        >
        {{ $t('InternshipContent2') }}
      </p>

      <div class="spacer">
        <router-link
          class="fancy"
          to="/stage"
          target="_blank"
        >
          <span class="top-key"></span>
          <span class="text">{{ $t('InternshipMoreAbout') }}</span>
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
