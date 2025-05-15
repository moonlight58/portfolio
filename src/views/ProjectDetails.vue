<template>
  <div class="container" v-if="project">
    <button class="back-btn" @click="$router.back()">← Back</button>
    <h1>{{ project.titre }}</h1>
    <img
      :src="require(`@/assets/images/${project.image}`)"
      :alt="project.titre"
      class="project-image"
    />
    <div class="project-content">
      <p>{{ project.description }}</p>
      <ul>
        <li><strong>Category :</strong> {{ project.categorie }}</li>
        <li><strong>Status :</strong> {{ project.status }}</li>
      </ul>

      <div v-if="project.language && project.language.length" class="card-section">
        <h3>Languages</h3>
        <div class="card-grid">
          <div
            v-for="(lang, index) in project.language"
            :key="index"
            class="skill-card"
          >
            <img
              :src="getSkillIcon(lang)"
              :alt="lang"
              class="skill-icon"
            />
            <p>{{ lang }}</p>
          </div>
        </div>
      </div>

      <div v-if="project.technologies && project.technologies.length" class="card-section">
        <h3>Technologies</h3>
        <div class="card-grid">
          <div
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="skill-card"
          >
            <img
              :src="getTechIcon(tech)"
              :alt="tech"
              class="skill-icon"
            />
            <p>{{ tech }}</p>
          </div>
        </div>
      </div>

      <a :href="project.url" target="_blank" class="project-link">
        See on GitHub
      </a>
    </div>
  </div>
  <div v-else>
    <p>Cannot find project.</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import projets from "@/datasource/projets.json";

export default {
  setup() {
    const route = useRoute();
    const project = ref(null);

    const getSkillIcon = (lang) => {
      try {
        return require(`@/assets/skills/${lang}.svg`);
      } catch {
        return require("@/assets/skills/default.svg");
      }
    };

    const getTechIcon = (tech) => {
      try {
        return require(`@/assets/skills/${tech}.svg`);
      } catch {
        return require("@/assets/skills/default.svg");
      }
    };

    onMounted(() => {
      const id = route.params.id;
      if (projets[id]) {
        project.value = projets[id];

        // Conversion des technologies en tableau si ce n'est pas déjà le cas
        if (typeof project.value.technologies === "string") {
          project.value.technologies = project.value.technologies
            .replace(/[\]"]/g, "")
            .split(",")
            .map((tech) => tech.trim());
        }
        if (typeof project.value.language === "string") {
          project.value.language = project.value.language
            .replace(/[\]"]/g, "")
            .split(",")
            .map((lang) => lang.trim());
        }
      }
    });

    return { project, getSkillIcon, getTechIcon };
  },
};
</script>

<style scoped>
.back-btn {
  margin-bottom: 1.5rem;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;
  padding: 0.5em 1.2em;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;
}
.back-btn:hover {
  background: #fff;
  color: #10152d;
  border-color: #dbf9ff;
}

.container {
  margin-top: 6rem;
  color: white;
  background: #19203c;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0 10px #000000;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
}

h1 {
  text-align: center;
}

.project-image {
  width: 60%;
  border-radius: 10px;
  margin-bottom: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.project-content {
  text-align: left;
}

.project-content li {
  margin-bottom: 0.5rem;
}

.card-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.card-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.skill-card {
  background: #19203c;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
}

.skill-card p {
  margin: 0;
  color: #dbf9ff;
  font-size: 1rem;
  font-weight: 500;
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75em 1.5em;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.3s, color 0.3s, border 0.3s;
}

.project-link:hover {
  background: #fff;
  color: #10152d;
  border-color: #dbf9ff;
}
</style>
