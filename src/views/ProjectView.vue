<script setup>
import { ref } from 'vue';

const username = ref('');
const projects = ref([]); // Reactive property to store project data
const activeButton = ref(''); // To keep track of the active button

async function fetchGithubRepos(type) {
  username.value = type === 'personal' ? "moonlight58" : "grothlin-iut90";

  const url = `https://api.github.com/users/${username.value}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching repositories: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();
    projects.value = repos; // Store the fetched repositories
  } catch (error) {
    console.error(error.message);
    projects.value = []; // Clear projects if there is an error
  }
}

function toggleButton(type) {
  activeButton.value = type;
}
</script>

<template>
  <div class="container">
    <h2 class="Title">All my Projects</h2>
    <div class="button-project-type">
      <button
          @click="fetchGithubRepos('personal'); toggleButton('personal')"
          :class="{ active: activeButton === 'personal' }"
      >
        Personal
      </button>
      <button
          @click="fetchGithubRepos('uni'); toggleButton('uni')"
          :class="{ active: activeButton === 'uni' }"
      >
        University
      </button>
    </div>
    <div>You can find all of these projects on my github</div>
    <a :href="`https://github.com/${username}`" target="_blank" v-if="username">GitHub {{ username }}</a>

    <div class="projects">
      <div class="project-div" v-for="project in projects.filter(p => p.description)" :key="project.id">
        <div class="project-details">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <p v-if="project.language">Language: {{ project.language }}</p>
          <a :href="project.html_url" target="_blank">View Repository</a>
        </div>

        <div class="project-image">
          <img :src="`https://via.placeholder.com/150`" alt="Project Image">
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 5rem;
  padding: 0 20px;
  width: 90vw;
}

.container h2 {
  display: flex;
  justify-content: center;
}

.container button {
  font-family: 'Cascadia Code', sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: rgb(34, 214, 255);
  border: 2px solid rgb(34, 214, 255);
  border-radius: 20px;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container button:hover,
.container button.active {
  background-color: rgb(34, 214, 255);
  color: #10152d;
  cursor: pointer;
}

.button-project-type {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0.5rem;
}

.projects {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

.project-div {
  display: flex;
  width: 90vw;
  height: fit-content;
}

.project-image img {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  margin-right: 1rem;
}

.project-details {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  background-color: #222b51;
}

.project-details h3 {
  font-size: 1.2rem;
  margin: 0 0 0.7rem 0;
  color: #0352a1;
}

.project-details p {
  margin: 0 0 0.7rem 0;
}

.project-details a {
  color: #0352a1;
  text-decoration: none;
}

.project-details a:hover {
  text-decoration: underline;
}

@media (min-width: 800px) {
  .container {
    max-width: 800px;
  }

  .project-div {
    width: 100%;
  }

  .project-image img {
    width: 100%;
  }
}
</style>
