<template>
  <div id="app">
    <NavBar v-if="!isHome2Route" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    isHome2Route() {
      return this.$route.name === "readyornot";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");

@font-face {
  font-family: "N27";
  src: url("@/assets/font/n27-regular-webfont.ttf") format("truetype");
}

* {
  margin: 0;
  padding: 0;
}

#app {
  background-color: #10152d;
  color: white;
  min-height: 100vh;
}

h1,
h2,
h4 {
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
}

p,
li,
ul,
strong,
h3,
span {
  font-family: "N27", sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
}

/* fancy button */
.spacer {
  width: 100%;
  display: flex;
  justify-content: center;
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
  background: rgba(16, 21, 45, 1);
  transition: width 0.5s ease-out, left 0.3s ease-out;
}

.fancy .bottom-key-1 {
  height: 2px;
  width: 1.5625rem;
  right: 1.875rem;
  bottom: -2px;
  position: absolute;
  background: rgba(16, 21, 45, 1);
  transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy .bottom-key-2 {
  height: 2px;
  width: 0.625rem;
  right: 0.625rem;
  bottom: -2px;
  position: absolute;
  background: rgba(16, 21, 45, 1);
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
