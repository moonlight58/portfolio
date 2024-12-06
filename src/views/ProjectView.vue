<script setup>
import { ref } from 'vue';

const username = ref('');

async function fetchGithubRepos(type) {
  username.value = type === 'personal' ? "moonlight58" : "grothlin-iut90";

  const url = `https://api.github.com/users/${username.value}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching repositories: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();
    const repoNames = repos.map(repo => repo.name);

    console.log(repoNames);
    return repoNames;
  } catch (error) {
    console.error(error.message);
  }
}
</script>

<template>
  <div class="container">
    <div class="Title">All my Projects</div>
    <div class="button-project-type">
      <button @click="fetchGithubRepos('personal')">Personal</button>
      <button @click="fetchGithubRepos('uni')">University</button>
    </div>
    <div>You can find all of these projects on my github</div>
    <a :href="`https://github.com/${username}`">GitHub of {{ username }}</a>
  </div>
</template>

<style scoped>
.container {
  width: 90vw;
}

.Title {
  margin-top: 5rem;
}

.button-project-type {
  display: grid;
  align-items: center;
  justify-content: center;
}

.button-project-type button {
  font-size: 1rem;
  background-color: rgb(3, 82, 161);
  border: 1px solid rgba(3, 82, 161, 0.6);
  border-radius: 5px;
}
</style>
