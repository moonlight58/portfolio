<template>
  <div class="container" v-if="project">
    <div class="spacer">
      <a
        class="fancy"
        @click="$router.back()"
      >
        <span class="top-key"></span>
        <svg
          height="200px"
          width="200px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xml:space="preserve"
          stroke="#fff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_18_"
              d="M315,150l-247.5,0.001V127.5c0-6.067-3.655-11.537-9.26-13.858c-5.607-2.322-12.058-1.038-16.347,3.252 l-37.5,37.5c-5.858,5.858-5.858,15.355,0,21.213l37.5,37.5c2.87,2.87,6.706,4.394,10.61,4.394c1.932,0,3.881-0.374,5.737-1.142 c5.605-2.322,9.26-7.791,9.26-13.858v-22.499L315,180c8.284,0,15-6.716,15-15C330,156.716,323.284,150,315,150z"
            ></path>
          </g>
        </svg>
        <span class="text">Back</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </a>
    </div>
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
        <li>The project is <strong>{{ project.status }}</strong></li>
      </ul>

      <div
        v-if="project.language && project.language.length"
        class="card-section"
      >
        <h3>Languages</h3>
        <div class="card-grid">
          <div
            v-for="(lang, index) in project.language"
            :key="index"
            class="skill-card"
          >
            <img :src="getSkillIcon(lang)" :alt="lang" class="skill-icon" />
            <p>{{ lang }}</p>
          </div>
        </div>
      </div>

      <div
        v-if="project.technologies && project.technologies.length"
        class="card-section"
      >
        <h3>Technologies</h3>
        <div class="card-grid">
          <div
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="skill-card"
          >
            <img :src="getTechIcon(tech)" :alt="tech" class="skill-icon" />
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
  text-align: justify;
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

/* fancy button */
.fancy:hover svg {
  filter: invert(1);
}

.spacer:hover {
  cursor: pointer;
}

.fancy {
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  float: none;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1.25em 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 12px;
}

.fancy svg {
  width: auto;
  height: 20px;
  fill: #fff;
  margin-right: 0.625rem;
  transition: filter 0.3s ease-in-out;
}

.fancy .text {
  font-size: 1.125em;
  line-height: 1.33333em;
  display: block;
  text-align: left;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}

.fancy .top-key {
  height: 2px;
  width: 1.5625rem;
  top: -2px;
  left: 0.625rem;
  position: absolute;
  background: #19203c;
  transition: width 0.5s ease-out, left 0.3s ease-out;
}

.fancy .bottom-key-1 {
  height: 2px;
  width: 1.5625rem;
  right: 1.875rem;
  bottom: -2px;
  position: absolute;
  background: #19203c;
  transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy .bottom-key-2 {
  height: 2px;
  width: 0.625rem;
  right: 0.625rem;
  bottom: -2px;
  position: absolute;
  background: #19203c;
  transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy:hover {
  color: white;
  background: white;
}

.fancy:hover::before {
  width: 0.9375rem;
  background: black;
}

.fancy:hover .text {
  color: black;
}

.fancy:hover .top-key {
  left: -2px;
  width: 0px;
}

.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
  right: 0;
  width: 0;
}
</style>
