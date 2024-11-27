<template>
  <div id="app">
    <NavBar />
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
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Cascadia Code', sans-serif;
  background-color: #10152d;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
