<template>
  <div id="app">
    <Navigation/>
    <div v-if="!showLoading" class="container mx-auto p-12">
      <router-view/>
    </div>
    <div v-else>
      <h1 class="font-bold text-5x1 text-center mb-3">Cargando...</h1>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navigation
  },
  created() {
    this.$store.dispatch("allLyrics");
  },
  computed: mapState(["showLoading"])
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
